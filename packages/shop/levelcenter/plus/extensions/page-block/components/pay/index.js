"use strict";
var r = require("~/r");
r(
  "mC4Y",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      Mcke: function (e, t, n) {
        n.d(t, "d", function () {
          return T;
        }),
          n.d(t, "e", function () {
            return w;
          }),
          n.d(t, "h", function () {
            return O;
          }),
          n.d(t, "b", function () {
            return v;
          }),
          n.d(t, "a", function () {
            return d;
          }),
          n.d(t, "g", function () {
            return x;
          }),
          n.d(t, "f", function () {
            return S;
          }),
          n.d(t, "c", function () {
            return b;
          }),
          n.d(t, "i", function () {
            return E;
          });
        var r = n("Fcif"),
          i = n("w2Y9"),
          a = n.n(i),
          c = n("NERQ"),
          o = n("GFa9"),
          s = n("8B9M"),
          u = n("Y28S"),
          l = Object(s.a)(),
          d = {
            freeLevelcenter: "FreeLevelcenter",
            payLevelcenter: "PayLevelcenter",
            equityCard: "EquityCard",
          },
          p = "coupon",
          g = "goods",
          y = "casino",
          f = {
            FreeLevelcenter: {
              et: "view",
              ei: "view_free",
              en: "免费会员-返回领券弹窗曝光",
              pt: "levelcenter",
            },
            PayLevelcenter: {
              et: "view",
              ei: "view_pay",
              en: "付费会员-返回领券弹窗曝光",
              pt: "levelcenter",
            },
            EquityCard: {
              et: "view",
              ei: "view_card",
              en: "权益卡-返回领取弹窗曝光",
              pt: "quanyika",
            },
          },
          m = {
            FreeLevelcenter: {
              et: "click",
              ei: "click_free",
              en: "免费会员-点击返回领券弹窗",
              pt: "levelcenter",
            },
            PayLevelcenter: {
              et: "click",
              ei: "click_pay",
              en: "付费会员-点击返回领券弹窗",
              pt: "levelcenter",
            },
            EquityCard: {
              et: "click",
              ei: "click_card",
              en: "权益卡-点击返回领取弹窗",
              pt: "quanyika",
            },
          },
          v = "success",
          h = [
            {
              sign: "GUIDE_COUPON_SIGN",
              guideType: p,
              content: "领卡成功，前往领券",
              confirmButtonText: "去领券",
              cancelButtonText: "取消",
            },
            {
              sign: "GUIDE_GOODS_SIGN",
              guideType: g,
              content: "领卡成功，返回商品",
              confirmButtonText: "去购买",
              cancelButtonText: "取消",
            },
            {
              sign: "GUIDE_CASINO_SIGN",
              guideType: y,
              content: "领卡成功，前去抽奖",
              confirmButtonText: "去抽奖",
              cancelButtonText: "取消",
            },
          ],
          _ = { [p]: "couponposter", [y]: "lottery", [g]: "goods" };
        function I(e) {
          try {
            l.logger && l.logger.log(Object(r.a)({}, e));
          } catch (e) {}
        }
        function T(e) {
          var { guideType: t, redirectUrl: n, guideDialogType: r } = e,
            i =
              n && t
                ? (function (e) {
                    return h.findIndex((t) => t.guideType === e);
                  })(t)
                : -1,
            a = i > -1;
          return {
            guideType: t,
            redirectUrl: n,
            guideDialogType: r,
            config: a ? h[i] : {},
            isGuideType: !(!a || !n),
          };
        }
        function O(e) {
          wx.setStorageSync("GUIDE_DIALOG_SEARCH", {
            guideType: e.guideType,
            redirectUrl: e.redirectUrl,
          });
        }
        function b(e, t) {
          var { guideType: n, redirectUrl: r, isGuideType: i } = T(t),
            c = e;
          return (
            i &&
              (c = a.a.add(c, {
                guideType: n,
                redirectUrl: decodeURIComponent(r),
              })),
            c
          );
        }
        function S(e, t) {
          var n = m[e];
          I(
            Object(r.a)({}, n, {
              ei: n.ei + "_" + _[t.guideType],
              params: { source_type: t.guideType },
            })
          );
          var i = decodeURIComponent(t.redirectUrl),
            c = /^\/?packages|pages/.test(i),
            s = /^\/packages|pages/.test(i);
          o.a.navigate({
            url: c
              ? (s ? "" : "/") + i
              : a.a.add("/pages/common/webview-page/index", { src: i }),
          });
        }
        function x(e, t) {
          var n = f[e];
          I(
            Object(r.a)({}, n, {
              ei: n.ei + "_" + _[t.guideType],
              params: { source_type: t.guideType },
            })
          );
        }
        function k(e, t, n) {
          var i = f[e];
          I(
            Object(r.a)({}, i, {
              ei: i.ei + "_" + _[t.guideType],
              params: { source_type: t.guideType },
            })
          ),
            c.a
              .confirm({
                message: t.config.content,
                confirmButtonText: t.config.confirmButtonText,
                cancelButtonText: t.config.cancelButtonText,
              })
              .then(() => {
                S(e, t);
              })
              .catch(() => {
                n && n();
              });
        }
        function w(e, t, n, r) {
          var i = T(n);
          if (i.guideDialogType === v) {
            var a = T(wx.getStorageSync("GUIDE_DIALOG_SEARCH"));
            a.isGuideType
              ? (wx.removeStorageSync("GUIDE_DIALOG_SEARCH"), k(e, a, r))
              : r && r();
          } else t === v && i.isGuideType ? k(e, i, r) : r && r();
        }
        var E = (e) => {
          if (e.IS_SALES && e.NEW_SALES_ID)
            return "!sales_ch~online!sales_id~" + e.NEW_SALES_ID;
          var t = Object(u.d)(e.from_params) || {};
          return t.sl ? "!sl~" + t.sl : "";
        };
      },
      NERQ: function (e, t, n) {
        var r = [],
          i = {
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
          a = Object.assign({}, i);
        var c = (e) => (
          (e = Object.assign(Object.assign({}, a), e)),
          new Promise((t, n) => {
            var i,
              a = (
                ("function" == typeof e.context ? e.context() : e.context) ||
                (i = getCurrentPages())[i.length - 1]
              ).selectComponent(e.selector);
            delete e.context,
              delete e.selector,
              a &&
                (a.setData(
                  Object.assign(
                    {
                      callback: (e, r) => {
                        "confirm" === e ? t(r) : n(r);
                      },
                    },
                    e
                  )
                ),
                wx.nextTick(() => {
                  a.setData({ show: !0 });
                }),
                r.push(a));
          })
        );
        (c.alert = (e) => c(e)),
          (c.confirm = (e) => c(Object.assign({ showCancelButton: !0 }, e))),
          (c.close = () => {
            r.forEach((e) => {
              e.close();
            }),
              (r = []);
          }),
          (c.stopLoading = () => {
            r.forEach((e) => {
              e.stopLoading();
            });
          }),
          (c.currentOptions = a),
          (c.defaultOptions = i),
          (c.setDefaultOptions = (e) => {
            (a = Object.assign(Object.assign({}, a), e)),
              (c.currentOptions = a);
          }),
          (c.resetDefaultOptions = () => {
            (a = Object.assign({}, i)), (c.currentOptions = a);
          }),
          c.resetDefaultOptions(),
          (t.a = c);
      },
      mC4Y: function (e, t, n) {
        n.r(t);
        var r = n("Fcif"),
          i = n("eijD"),
          a = n("hHpg"),
          c = n("rqVN"),
          o = n("x5Yp"),
          s = n("zMoS"),
          u = n("Mcke"),
          l = n("mQ5w"),
          d = n("V7Ua"),
          p = getApp();
        function g(e, t, n) {
          var r = n || [];
          if ("object" == typeof e)
            for (var i in e) g(e[i], t ? t + "[" + i + "]" : i, r);
          else r.push(t + "=" + encodeURIComponent(e));
          return r.join("&");
        }
        Object(c.b)({
          properties: {
            experienceSkuInfo: { type: Object, value: {} },
            cycleSkuInfo: { type: Object, value: {} },
          },
          methods: {
            initCashier(e) {
              var t = this;
              return Object(i.a)(function* () {
                var { detail: r } = e,
                  { default: i } = yield n
                    .e("packages/async-main/chunk")
                    .then(n.bind(null, "qQV4"));
                t.zanPay = new i({
                  toast: wx.showToast,
                  clear: wx.hideToast,
                  request: p.request,
                  biz: "member_level",
                  account: p.getMobile(),
                  quickMode: !0,
                });
                var a = yield n
                  .e("packages/async-main/chunk")
                  .then(n.t.bind(null, "sbP3", 7));
                t.zanPay.init(r, a);
              })();
            },
            onPaySuccess() {
              wx.showToast({ title: "购买成功", icon: "none" }),
                setTimeout(() => {
                  wx.reLaunch({ url: "/packages/shop/levelcenter/plus/index" });
                }, 1e3);
            },
            onCashierNavi(e) {
              var { detail: t } = e;
              wx.navigateTo({
                url:
                  "/pages/common/webview-page/index?src=" +
                  t.url +
                  "&title=" +
                  t.title,
              });
            },
            onCashierClose() {},
            toCreateOrder(e, t) {
              var n = this.properties.experienceSkuInfo,
                i = this.properties.cycleSkuInfo,
                c = Object(r.a)({}, l.a),
                o = "experience" === e ? n : i,
                s = {
                  activityType: 202,
                  activityId: 0,
                  goodsId: o.goodsId,
                  kdtId: p.getKdtId(),
                  num: 1,
                  price: o.price,
                  skuId: o.skuId,
                  storeId: 0,
                };
              (c.seller.kdtId = p.getKdtId()),
                (c.items = [s]),
                p.logger &&
                  p.logger.log({
                    et: "click",
                    ei: "click_buy_plus_member_card",
                    en: "点击购买付费会员卡",
                    pt: "membercenterpay",
                    params: { type: e },
                  });
              c.config.isContinousOrder = !1;
              var u = g(c);
              d.b(u)
                .then((e) => {
                  this.toBill(c, e, "VALUE_COMMON", t);
                })
                .catch((e) => {
                  (this.show = !1), a.a.fail(e.msg || "购买失败，请重试！");
                });
            },
            toBill(e, t, n, i) {
              if (((e.source.bookKey = t.bookKey), !Object(o.a)(i))) {
                var c = p.getKdtId(),
                  l = c,
                  y = p.getShopInfoSync();
                y.chainStoreInfo &&
                  y.chainStoreInfo.rootKdtId &&
                  (l = y.chainStoreInfo.rootKdtId);
                var f =
                    "head_kdt_id~" +
                    l +
                    "!online_kdt_id~" +
                    c +
                    Object(u.i)(i) +
                    "!source_kdt_id~" +
                    i.NEW_SALES_KDTID,
                  m = Object(r.a)(
                    {
                      bizTracePointExt: JSON.stringify({
                        from_params: f,
                        recurit_src: i.RECRUIT_SRC,
                        recurit_entrance: i.RECRUIT_ENTRANCE,
                        recurit_member_type: i.RECRUIT_MEMBER_TYPE,
                      }),
                    },
                    Object(s.a)(e, "items[0]", {})
                  );
                e.source.itemSources = [m];
              }
              d.a(g(e))
                .then((e) => {
                  var {
                      paymentPreparation: t,
                      prePaymentPreparation: i,
                      orderNo: a,
                    } = e,
                    c = {
                      prepay: !0,
                      prepaySuccess: !0,
                      payParams: t,
                      prePayParams: Object(r.a)({}, i, { scene: n }),
                      orderNo: a,
                    };
                  e.zeroOrder || e.showPayResult
                    ? (wx.showToast({ title: "购买成功", icon: "none" }),
                      setTimeout(() => {
                        this.onPaySuccess();
                      }, 1e3))
                    : this.startPay(c);
                })
                .catch((e) => {
                  a.a.fail(e.msg || "购买失败，请重试！"), (this.show = !1);
                });
            },
            startPay(e) {
              var t,
                { prePayParams: n, orderNo: r, payParams: i } = e,
                {
                  cashierSalt: a,
                  cashierSign: c,
                  partnerId: o,
                  prepayId: s,
                  scene: u,
                } = n,
                l = p.getToken() || {};
              try {
                (t = JSON.parse(i.bizExt)).appId = p.getAppId();
              } catch (e) {
                t = {};
              }
              this.zanPay.startPay({
                cashierSalt: a,
                cashierSign: c,
                partnerId: o,
                prepayId: s,
                wxSubOpenId: l.openId,
                scene: u,
                tradeBizExt: t,
                orderNo: r,
                afterPayUrl: { weappUrl: "/package/levelcenter/plus/index" },
              });
            },
          },
        });
      },
    }
  )
);
