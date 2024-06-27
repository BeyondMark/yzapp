"use strict";
var r = require("~/r");
r(
  "b1Ci",
  Object.assign(
    {},
    require("../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      b1Ci: function (e, t, a) {
        a.r(t);
        var s = a("Fcif"),
          i = a("eijD"),
          r = a("2wjL"),
          n = a("w/Za"),
          d = a("qJXH"),
          o = a("WOkX"),
          c = a("US/N"),
          h = a("AqAW"),
          p = a("lRMv"),
          u = a("4Kfr"),
          g = getApp();
        Object(d.b)({
          data: { src: "", couponGroupId: 0, isGroupSpread: !1 },
          umpLoggers: {},
          onLoad(e) {
            var t = this;
            return Object(i.a)(function* () {
              t.init(e), wx.hideShareMenu();
            })();
          },
          init(e) {
            var {
              handselToken: t = "",
              sl: a = "",
              customizeUrl: i = "",
              alias: n,
              couponSubKdtId: d,
            } = e;
            this.query = e;
            var c = i ? r.a.add(i, e) : r.a.add("/wscump/coupon/fetch", e),
              h = r.a.add("/" + this.__route__, e);
            a && (c = Object(o.a)({ url: c, sl: a })),
              t &&
                ((this.handselToken = t),
                (c = r.a.add("/wscump/coupon/fetch-by-handsel", { token: t }))),
              this.getCouponInfo(e),
              this.handleAutoEnterShop(
                Object(s.a)({}, e, {
                  subKdtId: d,
                  umpAlias: n,
                  umpType: "coupon",
                  redirectUrl: h,
                }),
                c
              ).then((t) => {
                this.handleAfterEnterShopSrc(e, t);
              });
          },
          handleAutoEnterShop: (e, t) =>
            new Promise((a) => {
              var { alias: s, sign: i, couponSubKdtId: d } = e;
              Object(n.a)({ alias: s, sign: i, couponSubKdtId: d })
                .then((s) => {
                  var { value: i } = s;
                  i
                    ? Object(p.g)(e)
                        .then(() => {
                          t = r.a.add(t, { subKdtId: g.getKdtId() });
                        })
                        .finally(() => a(t))
                    : a(t);
                })
                .catch(() => {
                  a(t);
                });
            }),
          handleAfterEnterShopSrc(e, t) {
            (this.setUmpLoggers({ options: e, src: t }), e.isGroupSpread)
              ? g.getSessionId()
                ? g.getMobile()
                  ? this.handleAfterLogin(e, t)
                  : this.handleToLogin(e)
                : h.a.on("app:token:success", (a) => {
                    a.mobile
                      ? this.handleAfterLogin(e, t)
                      : this.handleToLogin(e);
                  })
              : this.setWebViewSrc(t, { tip: "非群定向优惠券进入webview" });
          },
          getCouponInfo(e) {
            var {
              alias: t,
              sign: a,
              sl: i,
              sales_activity_id: r,
              store_kdt_id: d,
              guide_coupon_share_type: o,
              hq_kdt_id: c,
            } = e;
            if (t) {
              var h = { alias: t };
              i && (h = Object(s.a)({}, h, { sl: i })),
                a && (h = Object(s.a)({}, h, { sign: a })),
                r &&
                  d &&
                  o &&
                  c &&
                  (h = Object(s.a)({}, h, {
                    sales_activity_id: r,
                    store_kdt_id: d,
                    guide_coupon_share_type: o,
                    hq_kdt_id: c,
                  })),
                Object(n.d)(h)
                  .then((e) => {
                    var { isShare: t = !1, couponGroupId: a, kdtId: s } = e;
                    t && wx.showShareMenu(), a && this.getShareConfig(a, s);
                  })
                  .catch((e) => {});
            }
          },
          handleToLogin(e) {
            var t = encodeURIComponent(
                r.a.add("/packages/user/coupon/fetch/index", e)
              ),
              a = r.a.add("/pages/account/login/index", {
                encodeRedirectUrl: t,
              });
            wx.redirectTo({ url: a });
          },
          handleAfterLogin(e, t) {
            var { scene: a } = wx.getEnterOptionsSync();
            (this.isGroupSpread = !0),
              this.setUmpLoggers({ scene: a }),
              1047 === a || 1011 === a
                ? this.handleScanWxCode(t)
                : 1044 === a
                ? wx.checkSession({
                    success: () => {
                      this.handleClickWxShareCard(t);
                    },
                    fail: () => {
                      g.login(() => {
                        this.handleClickWxShareCard(t);
                      });
                    },
                  })
                : ((t = this.setGroupSpreadSrc(t, "canNotFetch")),
                  this.setWebViewSrc(t, {
                    tips: "群定向优惠券 - 此场景不能领取",
                  }));
          },
          getShareConfig(e, t) {
            Object(n.c)({
              pageType: "coupon",
              pageId: e,
              kdtId: t || g.getKdtId(),
            }).then((e) => {
              this.shareConfig = e;
            });
          },
          onShareAppMessage() {
            var e;
            if (
              (null == g ||
                null == (e = g.logger) ||
                e.log({
                  et: "click",
                  ei: "click_share_wechat_groups",
                  en: "分享到微信群按钮点击",
                  pt: "rt",
                  si: g.getKdtId(),
                }),
              !this.pageOnLoad)
            )
              return { path: "/packages/home/dashboard/index" };
            var { shareTitle: t, bannerImageUrl: a } = this.shareConfig || {},
              {
                couponSubKdtId: s = "",
                sign: i = "",
                spreadKdtId: n = "",
                permKeys: d = "",
              } = this.query || {},
              c = r.a.add("/packages/user/coupon/fetch/index", {
                couponSubKdtId: s,
                alias: this.alias,
                sign: i,
                shopAutoEnter: 1,
              }),
              h = Object(u.a)();
            h && (c = r.a.add(c, { guide_second_sharer_id: h })),
              this.sl && (c = Object(o.a)({ url: c, sl: this.sl })),
              this.isShare ||
                this.isGroupSpread ||
                (c = "/packages/home/dashboard/index"),
              this.handselToken &&
                (c = r.a.add("/packages/user/coupon/fetch/index", {
                  handselToken: this.handselToken,
                }));
            var p =
                "card" === this.groupType
                  ? a ||
                    "https://img01.yzcdn.cn/upload_files/2021/08/24/FssxFsDON4wM3UlgF_I9pRihN4Fd.png"
                  : "https://img01.yzcdn.cn/upload_files/2021/08/02/Fuvq_v9_WKWHjeuxImFf3TC9wZIG.png",
              l =
                t ||
                "我抢到优惠" +
                  ("card" === this.groupType ? "券" : "码") +
                  "啦！召唤小伙伴一起来抢，名额有限，快来抢！";
            return (
              16 === this.activityType &&
                ((p = this.getFreightCouponBanner(this.valueCopywriting)),
                (l = t || "送你一张运费券，名额有限，快来领取")),
              this.isGroupSpread &&
                "card" === this.groupType &&
                ((p =
                  a ||
                  "https://img01.yzcdn.cn/upload_files/2021/08/04/FvHIRCGX5r6mlgIII6UIwrA3hfhI.png"),
                (l = t || "粉丝群专属优惠券，速抢！手慢无！"),
                (c = r.a.add(c, {
                  isGroupSpread: 1,
                  spreadKdtId: n,
                  permKeys: d,
                }))),
              this.isGuideCoupon &&
                (this.guideShareId &&
                  (this.query.guide_share_id = this.guideShareId),
                (c = r.a.add("/packages/user/coupon/fetch/index", this.query))),
              { path: c, title: l, imageUrl: p }
            );
          },
          onPostMessage(e) {
            var t = (e.detail || {}).data || [];
            t.length &&
              t.forEach((e) => {
                var { type: t, config: a = {} } = e;
                if ("COUPON.share" === t) {
                  var {
                    alias: s,
                    isShare: i,
                    groupType: r,
                    sl: n = "",
                    isGuideCoupon: d = !1,
                    guideShareId: o,
                    activityType: c,
                    valueCopywriting: h,
                  } = a;
                  (this.isShare = i),
                    (this.isGuideCoupon = d),
                    (this.alias = s),
                    (this.groupType = r),
                    (this.sl = n),
                    (this.pageOnLoad = !0),
                    (this.guideShareId = o),
                    (this.activityType = c),
                    (this.valueCopywriting = h);
                }
              });
          },
          isAdmin() {
            var { permKeys: e, spreadKdtId: t } = this.query;
            return (
              !!e &&
              Object(c.default)({
                path: "/wscump/common/list-perms.json",
                data: { permKeys: [e], spreadKdtId: t },
              })
                .then((e) => Boolean(e.length))
                .catch(() => !1)
            );
          },
          createActID: () =>
            Object(c.default)({
              path: "/wscump/common/create-msg-activity-id.json",
            })
              .then((e) => e.activityId)
              .catch(() => 0),
          getShareInfo: (e) =>
            new Promise((t) => {
              wx.getShareInfo({
                shareTicket: e,
                success(e) {
                  var { encryptedData: a, iv: s } = e;
                  t({ encryptedData: a, iv: s });
                },
                fail() {
                  t({ success: !1 });
                },
              });
            }),
          hasOpenGId(e) {
            var { encryptedData: t, iv: a } = e;
            return Object(c.default)({
              path: "/wscump/common/decode-weixin-group-id.json",
              data: { encryptedData: t, iv: a },
            })
              .then((e) => Boolean(e.openGId))
              .catch(() => !1);
          },
          authPrivateMessage: (e) =>
            new Promise((t) => {
              wx.authPrivateMessage({
                shareTicket: e,
                success(e) {
                  e.valid ? t(!0) : t(!1);
                },
                fail() {
                  t(!1);
                },
              });
            }),
          setGroupSpreadSrc: (e, t) => r.a.add(e, { groupSpreadMod: t }),
          handleActivityId(e) {
            var t;
            0 === e
              ? wx.showToast({
                  title: "获取活动信息失败，请重新扫码",
                  icon: "none",
                  duration: 5e3,
                })
              : (wx.showShareMenu(),
                wx.updateShareMenu({
                  withShareTicket: !0,
                  isPrivateMessage: !0,
                  activityId: e,
                }),
                null == g ||
                  null == (t = g.logger) ||
                  t.log({
                    et: "view",
                    ei: "view_share_wechat_groups",
                    en: "分享到微信群按钮曝光",
                    pt: "rt",
                    si: g.getKdtId(),
                  }));
          },
          handleScanWxCode(e) {
            var t = this;
            return Object(i.a)(function* () {
              if (yield t.isAdmin()) {
                e = t.setGroupSpreadSrc(e, "adminShare");
                var a = yield t.createActID();
                t.handleActivityId(a),
                  t.setWebViewSrc(e, {
                    tip: "handleScanWxCode 管理员扫码了，则都要进入页面分享状态",
                  });
              } else t.setYZData({ src: "/wscump/coupon/no-power" });
            })();
          },
          umpAssistLogger(e) {
            var t;
            void 0 === e && (e = {}),
              null == g ||
                null == (t = g.logger) ||
                t.log({
                  et: "custom",
                  ei: "coupon_fetch_data",
                  en: "小程序优惠券页面数据",
                  params: { params: e },
                });
          },
          handleClickWxShareCard(e) {
            var t = this;
            return Object(i.a)(function* () {
              var { shareTicket: a } = wx.getEnterOptionsSync();
              t.getShareInfo(a)
                .then((a) => {
                  a.encryptedData
                    ? t.encodeGroupSpread(e, a)
                    : ((e = t.setGroupSpreadSrc(e, "canNotFetch")),
                      t.setWebViewSrc(e, {
                        tips: "群定向优惠券 - getShareInfo解析失败,不能领取优惠券",
                      }));
                })
                .catch(() => {
                  (e = t.setGroupSpreadSrc(e, "canNotFetch")),
                    t.setWebViewSrc(e, {
                      tips: "群定向优惠券 - getShareInfo-catch解析失败,不能领取优惠券",
                    });
                });
            })();
          },
          setWebViewSrc(e, t) {
            void 0 === t && (t = {});
            try {
              this.umpAssistLogger(
                Object(s.a)({}, this.umpLoggers, t, { src: e })
              );
            } catch (e) {}
            this.setYZData({ src: e });
          },
          setUmpLoggers(e) {
            void 0 === e && (e = {});
            try {
              this.umpLoggers = Object(s.a)({}, this.umpLoggers || {}, e);
            } catch (e) {}
          },
          getFreightCouponBanner(e) {
            switch (e) {
              case "免配送费":
                return "https://img01.yzcdn.cn/upload_files/2023/05/23/FrfIfslzRoUCrOy_72aLb1H-geby.png";
              case "免运费":
                return "https://img01.yzcdn.cn/upload_files/2023/05/23/FkkShoD4sf9i8DCgQMkO4sj8ZOpB.png";
              default:
                return "https://img01.yzcdn.cn/upload_files/2023/05/23/FqJhF2BQfdqrDp_AwvIxE7bln4oL.png";
            }
          },
          encodeGroupSpread(e, t) {
            var a = this;
            return Object(i.a)(function* () {
              var s = "",
                { shareTicket: i } = wx.getEnterOptionsSync();
              if (yield a.hasOpenGId(t)) {
                var r = yield a.isAdmin();
                if (
                  (r && (e = a.setGroupSpreadSrc(e, "canFetch")),
                  (s = "群定向优惠券 - encodeGroupSpread,isAdmin:" + r),
                  !r)
                ) {
                  var n = yield a.authPrivateMessage(i);
                  (e = n
                    ? a.setGroupSpreadSrc(e, "canFetch")
                    : a.setGroupSpreadSrc(e, "canNotFetch")),
                    (s += "-isAuthPrivateMessage:" + n);
                }
              } else (e = a.setGroupSpreadSrc(e, "canNotFetch")), (s = "群定向优惠券 - encodeGroupSpread非群聊场景打开,不能领取优惠券");
              a.setWebViewSrc(e, { tips: s });
            })();
          },
        });
      },
    }
  )
);
