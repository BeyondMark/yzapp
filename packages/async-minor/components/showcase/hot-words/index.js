"use strict";
var r = require("~/r");
r(
  "DGqN",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      DGqN: function (e, a, t) {
        t.r(a);
        var i = t("Fcif"),
          o = t("taYb"),
          n = t("hIZB"),
          r = t("JBq8"),
          s = t("lZq6"),
          l = t("GXW/"),
          d = t("6SJJ"),
          c = t("SBQm"),
          p = t("YeA1"),
          g = getApp();
        Component({
          behaviors: [s.a, l.a],
          data: {
            show: !1,
            typeReady: !1,
            hot: [],
            normal: [],
            hotStyle: "",
            isSingle: !1,
            needOpacity: !1,
          },
          properties: { alias: String },
          attached() {
            var {
              mode: e,
              colorStyle: a,
              bgColor: t,
              textColor: i,
            } = o.a.toCamelCase(this.data.componentData);
            this.getHotWords(),
              e === c.a.multi && a === c.b.theme
                ? this.getGlobalTheme()
                : this.setData({
                    hotStyle: "color: " + i + "; background-color: " + t + ";",
                    typeReady: !0,
                    isSingle: e === c.a.single,
                  });
          },
          methods: {
            getHotWords() {
              d.a.getHotWords().then((e) => {
                var { chosenWords: a = [], normalWords: t = [] } = e || {},
                  i = Object(r.a)(e),
                  o = [].concat(a || [], t || []).length >= 3;
                o && this.handleLog(),
                  this.setData({
                    hot: Object(r.b)(a, !0, i.chosenWords || []),
                    normal: Object(r.b)(t, !1, i.normalWords || []),
                    show: o,
                  });
              });
            },
            getGlobalTheme() {
              g.getShopTheme().then((e) => {
                var { mode: a, themeStyle: t } = o.a.toCamelCase(
                    this.data.componentData
                  ),
                  { colors: i = {} } = e || {},
                  n = i["main-bg"],
                  r = "color: " + (t === c.c.dark ? "#fff" : n) + ";",
                  s = "background-color: " + (t === c.c.dark ? n : "");
                this.setData({
                  hotStyle: "" + r + s,
                  needOpacity: t === c.c.light,
                  typeReady: !0,
                  isSingle: a === c.a.single,
                });
              });
            },
            handleSearch(e) {
              var { wordItem: a = {}, index: t } = e.detail,
                i = this.getBannerId(),
                o = { words: a.text || "", banner_id: i, component_index: t };
              this.handleClickLog(o),
                this.startSearch(
                  { text: a.text, bannerId: i, loggerParams: o },
                  a
                );
            },
            startSearch(e, a) {
              void 0 === a && (a = {});
              var { text: t = "", bannerId: i, loggerParams: o } = e;
              if (a.link_switch && a.link_url) Object(n.a)(a.link_type, a);
              else if (t) {
                this.handleSearchLog(o);
                var { dmc: r } = Object(p.a)();
                r.redirectTo("Search", { q: t, banner_id: i });
              }
            },
            handleLog() {
              this.ensureAppLogger("logger", {
                et: "view",
                ei: "component_view",
                en: "组件曝光",
                params: {
                  component: "hot_words_reference",
                  banner_id: this.getBannerId(),
                },
              });
            },
            handleClickLog(e) {
              this.ensureAppLogger("logger", {
                et: "click",
                ei: "click_content",
                en: "内容点击",
                params: e,
              });
            },
            handleSearchLog(e) {
              this.ensureAppLogger("logger", {
                et: "click",
                ei: "search",
                en: "搜索",
                params: Object(i.a)({}, e, {
                  s_type: "hot-words",
                  template_alias: this.data.alias,
                }),
              });
            },
          },
        });
      },
      JBq8: function (e, a, t) {
        t.d(a, "a", function () {
          return o;
        }),
          t.d(a, "b", function () {
            return n;
          });
        var i = t("Fcif"),
          o = (e) => {
            var a = {};
            if (e && e.wordConfigs)
              try {
                (a = JSON.parse(e.wordConfigs) || {}) && a.length && (a = a[0]);
              } catch (e) {}
            return a;
          },
          n = (e, a, t) =>
            (e || []).map((e, o) => {
              var n = t[o] || {};
              return Object(i.a)({}, n, { text: e, hot: a });
            });
      },
      hIZB: function (e, a, t) {
        t.d(a, "a", function () {
          return h;
        });
        var i = t("GFa9"),
          o = t("yUfZ"),
          n = t("Fcif"),
          r = t("+I+c"),
          s = ["type"],
          l = getApp();
        var d = t("DXKY"),
          c = t("8B9M"),
          p = t("YeA1"),
          { dmc: g } = Object(p.a)();
        function h(e, a, t) {
          if ((void 0 === t && (t = {}), "offlinepage" === e))
            return (
              void 0 === (p = a.link_id) && (p = ""),
              void (
                p &&
                (Object(c.a)().setOfflineId(p),
                i.a.switchTab({ url: "/packages/home/dashboard/index" }))
              )
            );
          var p;
          if ("platform_coupon" !== e) {
            if ("video_number_dynamic" !== e) {
              if ("weapplink" === e) {
                var { extra_data: h } = a;
                if (h && "2" === h.link_type)
                  return void (+h.use_short_link
                    ? wx.navigateToMiniProgram({ shortLink: h.short_link })
                    : wx.navigateToMiniProgram({
                        appId: h.other_weapp_appid,
                        path: h.other_weapp_link,
                      }));
              }
              var {
                url: u,
                isTab: m,
                isReLaunch: f,
                dmcExtra: _,
              } = Object(o.a)(e, a, t);
              if (u || _) {
                var v = m ? "switchTab" : f ? "reLaunch" : "navigate";
                if (_) {
                  var { pageName: b, query: x } = _;
                  g[v](b, x);
                } else i.a[v]({ url: u });
              }
            } else
              !(function (e) {
                var { linkTitle: a } = e,
                  t = Object(r.a)(e.videoDynamicParams, s),
                  i = Object(n.a)({}, e.videoDynamicParams, {
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
                      Object(n.a)({}, t, {
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
                            params: Object(n.a)({}, i, {
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
          n = t("x5Yp"),
          r = t("2wjL"),
          s = t("7WUL"),
          l = t("lRMv"),
          d = t("YeA1"),
          { dmc: c } = Object(d.a)(),
          p = "packages",
          g = Object(o.a)(),
          h = "/" + p + "/shop/goods/tag-list/index",
          u = "/" + p + "/shop/goods/all/index";
        function m(e, a, t) {
          var o = "",
            d = !1,
            c = !1,
            m = null,
            {
              alias: f,
              link_title: _ = "",
              link_url: v = "",
              link_id: b,
              extra_data: x = {},
            } = a,
            { banner_id: w } = t || {},
            k = {};
          if ((w && (k.banner_id = w), "goods" === e && f))
            o = "/pages/goods/detail/index?alias=" + f;
          else if ("tag" === e) {
            var y = f ? { alias: f } : r.a.getAll(v);
            y.alias &&
              ((o =
                h + "?alias=" + y.alias + "&title=" + encodeURIComponent(_)),
              (m = {
                pageName: "GoodsTag",
                query: { alias: y.alias, title: _ },
              }));
          } else if ("weappfeature" === e)
            o = "/pages/home/feature/index?id=" + b + "&title=" + _;
          else if ("feature" === e && f)
            o = "/pages/home/feature/index?alias=" + f;
          else if ("homepage" === e)
            (d = !0), (o = "/pages/home/dashboard/index");
          else if ("cart" === e) (d = !0), (o = "/" + p + "/goods/cart/index");
          else if ("usercenter" === e)
            (d = !0),
              (o = "/pages/usercenter/dashboard/index"),
              g.globalData.isRetailApp &&
                (o = "/" + p + "/retail/usercenter/dashboard-v2/index");
          else if ("allgoods" === e)
            (o = u + "?title=" + encodeURIComponent(_)),
              (m = { pageName: "AllGoodsList", query: { title: _ } });
          else if ("pointsstore" === e)
            o = "/" + p + "/ump/integral-store/index";
          else if ("coupon" === e)
            o =
              "/" +
              p +
              "/user/coupon/detail/index?id=" +
              a.link_id +
              (7 === a.coupon_type ? "&type=promocard" : "");
          else if ("seckill" === e)
            o = "/" + p + "/goods/seckill/index?alias=" + f;
          else if ("weapplink" === e && "1" === x.link_type) {
            var j;
            if (
              ("/" !== (o = x.my_weapp_link)[0] && (o = "/" + o),
              null != (j = Object(l.o)()) && j.client_enter_shop_linkto_switch)
            )
              try {
                var O = r.a.getAll(o) || {},
                  { subKdtId: C, sub_kdt_id: I, kdtId: S, kdt_id: A } = O,
                  L = C || I || S || A,
                  R = g.getKdtId(),
                  q = g.getHQKdtId();
                L && +L !== R && +L !== q && (c = !0),
                  Object(l.f)({ text: "[wx] 自定义外链处理ReLaunch" });
              } catch (e) {
                Object(l.f)({ text: "[wx] 自定义外链处理有误", err: e });
              }
            var U = o.split("?")[0];
            if (
              (s.a.indexOf(U) > -1 && (d = !0),
              0 ===
                (o = r.a.remove(o, "shopAutoEnter")).indexOf(
                  "/pages/common/blank-page/index"
                ))
            ) {
              var T = r.a.getAll(o);
              if (T.weappSharePath) {
                var D = decodeURIComponent(T.weappSharePath);
                (D = r.a.remove(D, "shopAutoEnter")),
                  (T.weappSharePath = encodeURIComponent(D)),
                  (o = r.a.add("/pages/common/blank-page/index", T));
              }
            }
          } else if ("paidcolumn" === e)
            o = "/" + p + "/paidcontent/column/index?alias=" + f;
          else if ("paidcontent" === e)
            o = "/" + p + "/paidcontent/content/index?alias=" + f;
          else if ("mypaidcontent" === e)
            o = "/" + p + "/paidcontent/list/index";
          else if ("paidlive" === e)
            o = "/" + p + "/paidcontent/live/index?alias=" + f;
          else if ("allcourse" === e) o = "/" + p + "/edu/goods/list/index";
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
              p +
              "/edu/webview/index?targetUrl=" +
              encodeURIComponent(
                v.replace(/^http(s)?:\/\/shop\d+-?\d+/, "https://h5")
              );
          else if ("link" === e) {
            var G = a.link_url;
            G &&
              /mp.weixin.qq.com\/s/.test(G) &&
              (o =
                "/pages/common/webview-page/index?src=" +
                encodeURIComponent(G));
          } else if ("shopnote" === e)
            (d = !0), (o = "/" + p + "/shop/shopnote/list/index");
          else if ("calendar_checkin" === e)
            o = "/" + p + "/shop/ump/sign-in/index";
          else if ("zodiac" === e)
            o = "/" + p + "/ump/new-lottery/casino/index?alias=" + a.alias;
          else if (["guaguale", "wheel", "crazyguess"].includes(e)) {
            var P = "";
            null != v && v.includes("lottery") && (P = "LuckyLottery"),
              null != v && v.includes("cards") && (P = "Cards"),
              null != v && v.includes("zodiac") && (P = "Zodiac"),
              null != v && v.includes("crazy") && (P = "CrazyGuess"),
              P && (m = { pageName: P, query: Object(i.a)({ alias: f }, k) });
          } else if ("shopnote_detail" === e)
            o = "/" + p + "/shop/shopnote/detail/index?noteAlias=" + a.alias;
          else if ("mp_article" === e)
            o =
              "/" +
              p +
              "/shop/shopnote/mparticle/detail/index?noteAlias=" +
              a.alias;
          else if ("hotellist" === e)
            o = "/pages/common/webview-page/index?src=" + encodeURIComponent(v);
          else if ("recharge_center" === e)
            o = "/pages/common/webview-page/index?src=" + encodeURIComponent(v);
          else {
            if ("red-package" === e) return wx.showRedPackage({ url: v }), {};
            "member_code" === e
              ? (o = "/" + p + "/member-code/index")
              : "vipcenter" === e
              ? (o = "/" + p + "/shop/levelcenter/free/index")
              : "weapp_marketing_page" === e || "marketing_page" === e
              ? (o = "/" + p + "/ext-marketing-page/index?id=" + (x.id || ""))
              : "storelist" === e || "nearby_store_way" === e
              ? (o = "/" + p + "/shop/physical-store/index")
              : "goods_classify" === e &&
                (o =
                  "/pages/common/webview-page/index?src=" +
                  encodeURIComponent(v));
          }
          return (
            Object(n.a)(t) || d || (o = r.a.add(o, t)),
            { url: o, isTab: d, isReLaunch: c, dmcExtra: m }
          );
        }
        !(function () {
          try {
            Promise.all([
              c.route.readRoute("AllGoodsList"),
              c.route.readRoute("GoodsTag"),
            ]).then((e) => {
              var [a, t] = e;
              (u = a.path), (h = t.path);
            });
          } catch (e) {}
        })();
      },
    }
  )
);
