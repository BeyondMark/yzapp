"use strict";
var r = require("~/r");
r(
  "+4Yg",
  Object.assign(
    {},
    require("../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "+4Yg": function (e, t, a) {
        a.r(t);
        a("NS6W"), a("CLQl");
      },
      "1F7m": function (e, t, a) {
        a.d(t, "a", function () {
          return i;
        });
        var i = { TINY_PAGE: 6, COUPONS: 13, BROWSE_GOODS: 21, OTHER: 14 };
      },
      NERQ: function (e, t, a) {
        var i = [],
          n = {
            show: !1,
            title: "",
            width: null,
            theme: "default",
            message: "",
            zIndex: 100,
            overlay: !0,
            selector: "#van-dialog",
            className: "",
            asyncClose: !1,
            beforeClose: null,
            transition: "scale",
            customStyle: "",
            messageAlign: "",
            overlayStyle: "",
            confirmButtonText: "确认",
            cancelButtonText: "取消",
            showConfirmButton: !0,
            showCancelButton: !1,
            closeOnClickOverlay: !1,
            confirmButtonOpenType: "",
          },
          o = Object.assign({}, n);
        var s = (e) => (
          (e = Object.assign(Object.assign({}, o), e)),
          new Promise((t, a) => {
            var n,
              o = (
                ("function" == typeof e.context ? e.context() : e.context) ||
                (n = getCurrentPages())[n.length - 1]
              ).selectComponent(e.selector);
            delete e.context,
              delete e.selector,
              o &&
                (o.setData(
                  Object.assign(
                    {
                      callback: (e, i) => {
                        "confirm" === e ? t(i) : a(i);
                      },
                    },
                    e
                  )
                ),
                wx.nextTick(() => {
                  o.setData({ show: !0 });
                }),
                i.push(o));
          })
        );
        (s.alert = (e) => s(e)),
          (s.confirm = (e) => s(Object.assign({ showCancelButton: !0 }, e))),
          (s.close = () => {
            i.forEach((e) => {
              e.close();
            }),
              (i = []);
          }),
          (s.stopLoading = () => {
            i.forEach((e) => {
              e.stopLoading();
            });
          }),
          (s.currentOptions = o),
          (s.defaultOptions = n),
          (s.setDefaultOptions = (e) => {
            (o = Object.assign(Object.assign({}, o), e)),
              (s.currentOptions = o);
          }),
          (s.resetDefaultOptions = () => {
            (o = Object.assign({}, n)), (s.currentOptions = o);
          }),
          s.resetDefaultOptions(),
          (t.a = s);
      },
      gc3r: function (e, t, a) {
        a.d(t, "b", function () {
          return u;
        }),
          a.d(t, "a", function () {
            return p;
          });
        var i = a("Fcif"),
          n = a("jA1y"),
          o = a("vgcL"),
          s = a("2wjL"),
          r = a("u8kV"),
          l = a("rDSc"),
          c = a("8B9M"),
          d = function (e, t) {
            e || (!1 !== t.isNeedShareMore && this.setYZData({ salesman: t }));
          },
          u = (e) => {
            var t = Object(l.a)(Object(i.a)({}, e, { path: e.url }), "url");
            return Object(n.c)(t);
          },
          p = function (e) {
            var {
                scene: t,
                sst: a,
                gst: n,
                getSalesmanData: l = d,
                query: p,
              } = e,
              g = Object(c.a)() || {},
              f = g.getToken() || {},
              { route: m = "", options: h = {} } = Object(r.d)(),
              v = p || h,
              b = s.a.add(m, v),
              x = { gst: (n = n || Object(o.e)(t)), sst: a, sourceUrl: b },
              { yzUserId: _ } = f;
            Object(o.f)({
              url: b,
              logParams: g.logger.getLogParams && g.logger.getLogParams(),
              userId: _,
              request: u,
            }),
              Object(o.a)(Object(i.a)({}, x)),
              Object(o.b)({}, l.bind(this));
          };
      },
      hIZB: function (e, t, a) {
        a.d(t, "a", function () {
          return g;
        });
        var i = a("GFa9"),
          n = a("yUfZ"),
          o = a("Fcif"),
          s = a("+I+c"),
          r = ["type"],
          l = getApp();
        var c = a("DXKY"),
          d = a("8B9M"),
          u = a("YeA1"),
          { dmc: p } = Object(u.a)();
        function g(e, t, a) {
          if ((void 0 === a && (a = {}), "offlinepage" === e))
            return (
              void 0 === (u = t.link_id) && (u = ""),
              void (
                u &&
                (Object(d.a)().setOfflineId(u),
                i.a.switchTab({ url: "/packages/home/dashboard/index" }))
              )
            );
          var u;
          if ("platform_coupon" !== e) {
            if ("video_number_dynamic" !== e) {
              if ("weapplink" === e) {
                var { extra_data: g } = t;
                if (g && "2" === g.link_type)
                  return void (+g.use_short_link
                    ? wx.navigateToMiniProgram({ shortLink: g.short_link })
                    : wx.navigateToMiniProgram({
                        appId: g.other_weapp_appid,
                        path: g.other_weapp_link,
                      }));
              }
              var {
                url: f,
                isTab: m,
                isReLaunch: h,
                dmcExtra: v,
              } = Object(n.a)(e, t, a);
              if (f || v) {
                var b = m ? "switchTab" : h ? "reLaunch" : "navigate";
                if (v) {
                  var { pageName: x, query: _ } = v;
                  p[b](x, _);
                } else i.a[b]({ url: f });
              }
            } else
              !(function (e) {
                var { linkTitle: t } = e,
                  a = Object(s.a)(e.videoDynamicParams, r),
                  i = Object(o.a)({}, e.videoDynamicParams, {
                    image_url: null == e ? void 0 : e.imageUrl,
                    link_title: t,
                  });
                l.logger.log({
                  et: "click",
                  ei: "wxvideo_video_click",
                  en: "视频号动态点击",
                  params: i,
                }),
                  wx.openChannelsActivity &&
                    wx.openChannelsActivity(
                      Object(o.a)({}, a, {
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
                            params: Object(o.a)({}, i, {
                              error_msg: null == e ? void 0 : e.errMsg,
                            }),
                          });
                        },
                      })
                    );
              })(t);
          } else c.a.trigger("feature-platform-coupon:open", t);
        }
      },
      jHjV: function (e, t, a) {
        function i(e, t, a) {
          for (var i = t.split("."), n = e, o = 0; o < i.length - 1; o++) {
            var s = i[o];
            (Object.prototype.hasOwnProperty.call(n, s) &&
              "object" == typeof n[s]) ||
              (n[s] = {}),
              (n = n[s]);
          }
          n[i[i.length - 1]] = a;
        }
        a.d(t, "a", function () {
          return i;
        });
      },
      yUfZ: function (e, t, a) {
        a.d(t, "a", function () {
          return m;
        });
        var i = a("Fcif"),
          n = a("8B9M"),
          o = a("x5Yp"),
          s = a("2wjL"),
          r = a("7WUL"),
          l = a("lRMv"),
          c = a("YeA1"),
          { dmc: d } = Object(c.a)(),
          u = "packages",
          p = Object(n.a)(),
          g = "/" + u + "/shop/goods/tag-list/index",
          f = "/" + u + "/shop/goods/all/index";
        function m(e, t, a) {
          var n = "",
            c = !1,
            d = !1,
            m = null,
            {
              alias: h,
              link_title: v = "",
              link_url: b = "",
              link_id: x,
              extra_data: _ = {},
            } = t,
            { banner_id: O } = a || {},
            w = {};
          if ((O && (w.banner_id = O), "goods" === e && h))
            n = "/pages/goods/detail/index?alias=" + h;
          else if ("tag" === e) {
            var y = h ? { alias: h } : s.a.getAll(b);
            y.alias &&
              ((n =
                g + "?alias=" + y.alias + "&title=" + encodeURIComponent(v)),
              (m = {
                pageName: "GoodsTag",
                query: { alias: y.alias, title: v },
              }));
          } else if ("weappfeature" === e)
            n = "/pages/home/feature/index?id=" + x + "&title=" + v;
          else if ("feature" === e && h)
            n = "/pages/home/feature/index?alias=" + h;
          else if ("homepage" === e)
            (c = !0), (n = "/pages/home/dashboard/index");
          else if ("cart" === e) (c = !0), (n = "/" + u + "/goods/cart/index");
          else if ("usercenter" === e)
            (c = !0),
              (n = "/pages/usercenter/dashboard/index"),
              p.globalData.isRetailApp &&
                (n = "/" + u + "/retail/usercenter/dashboard-v2/index");
          else if ("allgoods" === e)
            (n = f + "?title=" + encodeURIComponent(v)),
              (m = { pageName: "AllGoodsList", query: { title: v } });
          else if ("pointsstore" === e)
            n = "/" + u + "/ump/integral-store/index";
          else if ("coupon" === e)
            n =
              "/" +
              u +
              "/user/coupon/detail/index?id=" +
              t.link_id +
              (7 === t.coupon_type ? "&type=promocard" : "");
          else if ("seckill" === e)
            n = "/" + u + "/goods/seckill/index?alias=" + h;
          else if ("weapplink" === e && "1" === _.link_type) {
            var j;
            if (
              ("/" !== (n = _.my_weapp_link)[0] && (n = "/" + n),
              null != (j = Object(l.o)()) && j.client_enter_shop_linkto_switch)
            )
              try {
                var k = s.a.getAll(n) || {},
                  { subKdtId: C, sub_kdt_id: I, kdtId: R, kdt_id: A } = k,
                  L = C || I || R || A,
                  P = p.getKdtId(),
                  U = p.getHQKdtId();
                L && +L !== P && +L !== U && (d = !0),
                  Object(l.f)({ text: "[wx] 自定义外链处理ReLaunch" });
              } catch (e) {
                Object(l.f)({ text: "[wx] 自定义外链处理有误", err: e });
              }
            var T = n.split("?")[0];
            if (
              (r.a.indexOf(T) > -1 && (c = !0),
              0 ===
                (n = s.a.remove(n, "shopAutoEnter")).indexOf(
                  "/pages/common/blank-page/index"
                ))
            ) {
              var D = s.a.getAll(n);
              if (D.weappSharePath) {
                var q = decodeURIComponent(D.weappSharePath);
                (q = s.a.remove(q, "shopAutoEnter")),
                  (D.weappSharePath = encodeURIComponent(q)),
                  (n = s.a.add("/pages/common/blank-page/index", D));
              }
            }
          } else if ("paidcolumn" === e)
            n = "/" + u + "/paidcontent/column/index?alias=" + h;
          else if ("paidcontent" === e)
            n = "/" + u + "/paidcontent/content/index?alias=" + h;
          else if ("mypaidcontent" === e)
            n = "/" + u + "/paidcontent/list/index";
          else if ("paidlive" === e)
            n = "/" + u + "/paidcontent/live/index?alias=" + h;
          else if ("allcourse" === e) n = "/" + u + "/edu/goods/list/index";
          else if (
            "course" === e ||
            "educourse" === e ||
            "allofflinecourse" === e ||
            "eduappointment" === e ||
            "course_group" === e ||
            "course_category" === e ||
            "edumoments" === e
          )
            n =
              "/" +
              u +
              "/edu/webview/index?targetUrl=" +
              encodeURIComponent(
                b.replace(/^http(s)?:\/\/shop\d+-?\d+/, "https://h5")
              );
          else if ("link" === e) {
            var S = t.link_url;
            S &&
              /mp.weixin.qq.com\/s/.test(S) &&
              (n =
                "/pages/common/webview-page/index?src=" +
                encodeURIComponent(S));
          } else if ("shopnote" === e)
            (c = !0), (n = "/" + u + "/shop/shopnote/list/index");
          else if ("calendar_checkin" === e)
            n = "/" + u + "/shop/ump/sign-in/index";
          else if ("zodiac" === e)
            n = "/" + u + "/ump/new-lottery/casino/index?alias=" + t.alias;
          else if (["guaguale", "wheel", "crazyguess"].includes(e)) {
            var B = "";
            null != b && b.includes("lottery") && (B = "LuckyLottery"),
              null != b && b.includes("cards") && (B = "Cards"),
              null != b && b.includes("zodiac") && (B = "Zodiac"),
              null != b && b.includes("crazy") && (B = "CrazyGuess"),
              B && (m = { pageName: B, query: Object(i.a)({ alias: h }, w) });
          } else if ("shopnote_detail" === e)
            n = "/" + u + "/shop/shopnote/detail/index?noteAlias=" + t.alias;
          else if ("mp_article" === e)
            n =
              "/" +
              u +
              "/shop/shopnote/mparticle/detail/index?noteAlias=" +
              t.alias;
          else if ("hotellist" === e)
            n = "/pages/common/webview-page/index?src=" + encodeURIComponent(b);
          else if ("recharge_center" === e)
            n = "/pages/common/webview-page/index?src=" + encodeURIComponent(b);
          else {
            if ("red-package" === e) return wx.showRedPackage({ url: b }), {};
            "member_code" === e
              ? (n = "/" + u + "/member-code/index")
              : "vipcenter" === e
              ? (n = "/" + u + "/shop/levelcenter/free/index")
              : "weapp_marketing_page" === e || "marketing_page" === e
              ? (n = "/" + u + "/ext-marketing-page/index?id=" + (_.id || ""))
              : "storelist" === e || "nearby_store_way" === e
              ? (n = "/" + u + "/shop/physical-store/index")
              : "goods_classify" === e &&
                (n =
                  "/pages/common/webview-page/index?src=" +
                  encodeURIComponent(b));
          }
          return (
            Object(o.a)(a) || c || (n = s.a.add(n, a)),
            { url: n, isTab: c, isReLaunch: d, dmcExtra: m }
          );
        }
        !(function () {
          try {
            Promise.all([
              d.route.readRoute("AllGoodsList"),
              d.route.readRoute("GoodsTag"),
            ]).then((e) => {
              var [t, a] = e;
              (f = t.path), (g = a.path);
            });
          } catch (e) {}
        })();
      },
    }
  )
);
