"use strict";
var r = require("~/r");
r(
  "G6bg",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    G6bg: function (e, a, i) {
      i.r(a);
      var t = i("rqVN"),
        n = i("oE0F");
      Object(t.b)({
        properties: {
          linkType: { type: Number, value: 0 },
          linkConfig: { type: Object, value: {} },
        },
        methods: {
          handleAllAreaLink() {
            this.triggerEvent("video-ended"),
              Object(n.a)(this.data.linkConfig, !0);
          },
          handleHotareaNavigate(e) {
            this.triggerEvent("video-ended");
            var { hotarea: a = {} } = e.currentTarget.dataset;
            Object(n.a)(a, !0);
          },
        },
      });
    },
    hIZB: function (e, a, i) {
      i.d(a, "a", function () {
        return g;
      });
      var t = i("GFa9"),
        n = i("yUfZ"),
        o = i("Fcif"),
        s = i("+I+c"),
        l = ["type"],
        r = getApp();
      var d = i("DXKY"),
        c = i("8B9M"),
        p = i("YeA1"),
        { dmc: u } = Object(p.a)();
      function g(e, a, i) {
        if ((void 0 === i && (i = {}), "offlinepage" === e))
          return (
            void 0 === (p = a.link_id) && (p = ""),
            void (
              p &&
              (Object(c.a)().setOfflineId(p),
              t.a.switchTab({ url: "/packages/home/dashboard/index" }))
            )
          );
        var p;
        if ("platform_coupon" !== e) {
          if ("video_number_dynamic" !== e) {
            if ("weapplink" === e) {
              var { extra_data: g } = a;
              if (g && "2" === g.link_type)
                return void (+g.use_short_link
                  ? wx.navigateToMiniProgram({ shortLink: g.short_link })
                  : wx.navigateToMiniProgram({
                      appId: g.other_weapp_appid,
                      path: g.other_weapp_link,
                    }));
            }
            var {
              url: m,
              isTab: f,
              isReLaunch: h,
              dmcExtra: v,
            } = Object(n.a)(e, a, i);
            if (m || v) {
              var _ = f ? "switchTab" : h ? "reLaunch" : "navigate";
              if (v) {
                var { pageName: x, query: b } = v;
                u[_](x, b);
              } else t.a[_]({ url: m });
            }
          } else
            !(function (e) {
              var { linkTitle: a } = e,
                i = Object(s.a)(e.videoDynamicParams, l),
                t = Object(o.a)({}, e.videoDynamicParams, {
                  image_url: null == e ? void 0 : e.imageUrl,
                  link_title: a,
                });
              r.logger.log({
                et: "click",
                ei: "wxvideo_video_click",
                en: "视频号动态点击",
                params: t,
              }),
                wx.openChannelsActivity &&
                  wx.openChannelsActivity(
                    Object(o.a)({}, i, {
                      success: () => {
                        r.logger.log({
                          et: "custom",
                          ei: "wxvideo_video_jump_success",
                          en: "视频号动态跳转成功",
                          params: t,
                        });
                      },
                      fail: (e) => {
                        r.logger.log({
                          et: "custom",
                          ei: "wxvideo_video_jump_fail",
                          en: "视频号动态跳转失败",
                          params: Object(o.a)({}, t, {
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
    oE0F: function (e, a, i) {
      i.d(a, "a", function () {
        return o;
      });
      var t = i("taYb"),
        n = i("hIZB");
      function o(e, a) {
        void 0 === a && (a = !1), a && (e = t.a.toSnakeCase(e));
        var { extra: i = {} } = e;
        Object(n.a)(e.link_type, e, i);
      }
    },
    yUfZ: function (e, a, i) {
      i.d(a, "a", function () {
        return f;
      });
      var t = i("Fcif"),
        n = i("8B9M"),
        o = i("x5Yp"),
        s = i("2wjL"),
        l = i("7WUL"),
        r = i("lRMv"),
        d = i("YeA1"),
        { dmc: c } = Object(d.a)(),
        p = "packages",
        u = Object(n.a)(),
        g = "/" + p + "/shop/goods/tag-list/index",
        m = "/" + p + "/shop/goods/all/index";
      function f(e, a, i) {
        var n = "",
          d = !1,
          c = !1,
          f = null,
          {
            alias: h,
            link_title: v = "",
            link_url: _ = "",
            link_id: x,
            extra_data: b = {},
          } = a,
          { banner_id: k } = i || {},
          w = {};
        if ((k && (w.banner_id = k), "goods" === e && h))
          n = "/pages/goods/detail/index?alias=" + h;
        else if ("tag" === e) {
          var y = h ? { alias: h } : s.a.getAll(_);
          y.alias &&
            ((n = g + "?alias=" + y.alias + "&title=" + encodeURIComponent(v)),
            (f = {
              pageName: "GoodsTag",
              query: { alias: y.alias, title: v },
            }));
        } else if ("weappfeature" === e)
          n = "/pages/home/feature/index?id=" + x + "&title=" + v;
        else if ("feature" === e && h)
          n = "/pages/home/feature/index?alias=" + h;
        else if ("homepage" === e)
          (d = !0), (n = "/pages/home/dashboard/index");
        else if ("cart" === e) (d = !0), (n = "/" + p + "/goods/cart/index");
        else if ("usercenter" === e)
          (d = !0),
            (n = "/pages/usercenter/dashboard/index"),
            u.globalData.isRetailApp &&
              (n = "/" + p + "/retail/usercenter/dashboard-v2/index");
        else if ("allgoods" === e)
          (n = m + "?title=" + encodeURIComponent(v)),
            (f = { pageName: "AllGoodsList", query: { title: v } });
        else if ("pointsstore" === e) n = "/" + p + "/ump/integral-store/index";
        else if ("coupon" === e)
          n =
            "/" +
            p +
            "/user/coupon/detail/index?id=" +
            a.link_id +
            (7 === a.coupon_type ? "&type=promocard" : "");
        else if ("seckill" === e)
          n = "/" + p + "/goods/seckill/index?alias=" + h;
        else if ("weapplink" === e && "1" === b.link_type) {
          var j;
          if (
            ("/" !== (n = b.my_weapp_link)[0] && (n = "/" + n),
            null != (j = Object(r.o)()) && j.client_enter_shop_linkto_switch)
          )
            try {
              var O = s.a.getAll(n) || {},
                { subKdtId: I, sub_kdt_id: A, kdtId: R, kdt_id: C } = O,
                U = I || A || R || C,
                L = u.getKdtId(),
                T = u.getHQKdtId();
              U && +U !== L && +U !== T && (c = !0),
                Object(r.f)({ text: "[wx] 自定义外链处理ReLaunch" });
            } catch (e) {
              Object(r.f)({ text: "[wx] 自定义外链处理有误", err: e });
            }
          var q = n.split("?")[0];
          if (
            (l.a.indexOf(q) > -1 && (d = !0),
            0 ===
              (n = s.a.remove(n, "shopAutoEnter")).indexOf(
                "/pages/common/blank-page/index"
              ))
          ) {
            var P = s.a.getAll(n);
            if (P.weappSharePath) {
              var E = decodeURIComponent(P.weappSharePath);
              (E = s.a.remove(E, "shopAutoEnter")),
                (P.weappSharePath = encodeURIComponent(E)),
                (n = s.a.add("/pages/common/blank-page/index", P));
            }
          }
        } else if ("paidcolumn" === e)
          n = "/" + p + "/paidcontent/column/index?alias=" + h;
        else if ("paidcontent" === e)
          n = "/" + p + "/paidcontent/content/index?alias=" + h;
        else if ("mypaidcontent" === e) n = "/" + p + "/paidcontent/list/index";
        else if ("paidlive" === e)
          n = "/" + p + "/paidcontent/live/index?alias=" + h;
        else if ("allcourse" === e) n = "/" + p + "/edu/goods/list/index";
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
            p +
            "/edu/webview/index?targetUrl=" +
            encodeURIComponent(
              _.replace(/^http(s)?:\/\/shop\d+-?\d+/, "https://h5")
            );
        else if ("link" === e) {
          var G = a.link_url;
          G &&
            /mp.weixin.qq.com\/s/.test(G) &&
            (n =
              "/pages/common/webview-page/index?src=" + encodeURIComponent(G));
        } else if ("shopnote" === e)
          (d = !0), (n = "/" + p + "/shop/shopnote/list/index");
        else if ("calendar_checkin" === e)
          n = "/" + p + "/shop/ump/sign-in/index";
        else if ("zodiac" === e)
          n = "/" + p + "/ump/new-lottery/casino/index?alias=" + a.alias;
        else if (["guaguale", "wheel", "crazyguess"].includes(e)) {
          var N = "";
          null != _ && _.includes("lottery") && (N = "LuckyLottery"),
            null != _ && _.includes("cards") && (N = "Cards"),
            null != _ && _.includes("zodiac") && (N = "Zodiac"),
            null != _ && _.includes("crazy") && (N = "CrazyGuess"),
            N && (f = { pageName: N, query: Object(t.a)({ alias: h }, w) });
        } else if ("shopnote_detail" === e)
          n = "/" + p + "/shop/shopnote/detail/index?noteAlias=" + a.alias;
        else if ("mp_article" === e)
          n =
            "/" +
            p +
            "/shop/shopnote/mparticle/detail/index?noteAlias=" +
            a.alias;
        else if ("hotellist" === e)
          n = "/pages/common/webview-page/index?src=" + encodeURIComponent(_);
        else if ("recharge_center" === e)
          n = "/pages/common/webview-page/index?src=" + encodeURIComponent(_);
        else {
          if ("red-package" === e) return wx.showRedPackage({ url: _ }), {};
          "member_code" === e
            ? (n = "/" + p + "/member-code/index")
            : "vipcenter" === e
            ? (n = "/" + p + "/shop/levelcenter/free/index")
            : "weapp_marketing_page" === e || "marketing_page" === e
            ? (n = "/" + p + "/ext-marketing-page/index?id=" + (b.id || ""))
            : "storelist" === e || "nearby_store_way" === e
            ? (n = "/" + p + "/shop/physical-store/index")
            : "goods_classify" === e &&
              (n =
                "/pages/common/webview-page/index?src=" +
                encodeURIComponent(_));
        }
        return (
          Object(o.a)(i) || d || (n = s.a.add(n, i)),
          { url: n, isTab: d, isReLaunch: c, dmcExtra: f }
        );
      }
      !(function () {
        try {
          Promise.all([
            c.route.readRoute("AllGoodsList"),
            c.route.readRoute("GoodsTag"),
          ]).then((e) => {
            var [a, i] = e;
            (m = a.path), (g = i.path);
          });
        } catch (e) {}
      })();
    },
  })
);
