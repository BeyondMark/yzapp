"use strict";
var r = require("~/r");
r(
  "IIvH",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    IIvH: function (e, t, a) {
      a.r(t);
      var n = a("qJXH"),
        i = a("Mcke"),
        c = getApp();
      Object(n.b)({
        data: {
          alias: "",
          cardNo: "",
          from: "take",
          hasActive: !1,
          needActive: !1,
          hasMobile: !1,
          wxCard: !1,
          card: {},
          accountLogin: !1,
        },
        onLoad(e) {
          var {
              alias: t,
              card_no: a,
              need_active: n = 0,
              from: r = "take",
            } = e,
            { card: o } = e;
          this.getActiveStatus(t), Object(i.e)(i.a.equityCard, i.b, e);
          try {
            o = JSON.parse(o);
          } catch (e) {
            o = {};
          }
          var { wxCard: s } = o,
            u = 1 === Number(n),
            d = !!c.getBuyerId();
          this.setYZData({
            alias: t,
            cardNo: a,
            needActive: u,
            from: r,
            hasMobile: d,
            wxCard: s,
            card: o,
          }),
            setTimeout(() => {
              (d = !!c.getBuyerId()), this.setYZData({ hasMobile: d });
            }, 200);
        },
        goToActive() {
          this.data.hasMobile
            ? this.realActive()
            : this.setYZData({ accountLogin: !0 });
        },
        getActiveStatus(e) {
          c.request({
            path: "/wscuser/card/has-buyer-active.json",
            query: { alias: e },
          }).then((e) => {
            e.value && (this.data.hasActive = !0);
          });
        },
        onAccountSuccess() {
          this.realActive(), this.setYZData({ accountLogin: !1 });
        },
        onAccountClose() {
          this.setYZData({ accountLogin: !1 });
        },
        realActive() {
          var { alias: e = "", hasActive: t } = this.data;
          wx.showLoading({ title: "努力加载中" }),
            c
              .request({
                path: "/wscuser/scrm/api/benefitcard/get.json",
                query: { alias: e },
              })
              .then((a) => {
                var n = a.card || a.customer_card.card,
                  i = a.customer_card;
                n.detail.activation_condition.require_profile && !t
                  ? wx.navigateTo({
                      url:
                        "/packages/benefit-card/active/index?card_no=" +
                        i.card_no +
                        "&alias=" +
                        e +
                        "&sub_type=0",
                    })
                  : c
                      .request({
                        path: "/wscuser/scrm/api/benefitcard/activate-card.json",
                        method: "post",
                        data: { cardNo: i.card_no, customerInfo: {} },
                      })
                      .then(() => {
                        wx.hideLoading(), wx.navigateBack();
                      })
                      .catch((e) => {
                        wx.hideLoading(),
                          wx.showToast({
                            title: e.msg,
                            icon: "none",
                            duration: 1e3,
                          });
                      });
              })
              .catch((e) => {
                wx.hideLoading(),
                  wx.showToast({ title: e.msg, icon: "none", duration: 1e3 });
              });
        },
        addCard() {
          var { wxCard: e, card: t } = this.data;
          if (e) {
            var a = [
              {
                cardId: t.template_id,
                cardExt: JSON.stringify({
                  code: t.card_no,
                  openid: t.open_id,
                  timestamp: t.timestamp,
                  signature: t.signature,
                  nonce_str: t.nonce_str,
                }),
              },
            ];
            wx.addCard({
              cardList: a,
              success() {
                wx.showToast({ title: "成功添加至微信卡包", icon: "none" });
              },
              fail(e) {
                "addCard:fail cancel" !== e.errMsg &&
                  wx.showToast({ title: e.errMsg, icon: "none" });
              },
            });
          }
        },
      });
    },
    Mcke: function (e, t, a) {
      a.d(t, "d", function () {
        return w;
      }),
        a.d(t, "e", function () {
          return I;
        }),
        a.d(t, "h", function () {
          return x;
        }),
        a.d(t, "b", function () {
          return h;
        }),
        a.d(t, "a", function () {
          return l;
        }),
        a.d(t, "g", function () {
          return S;
        }),
        a.d(t, "f", function () {
          return b;
        }),
        a.d(t, "c", function () {
          return O;
        }),
        a.d(t, "i", function () {
          return L;
        });
      var n = a("Fcif"),
        i = a("w2Y9"),
        c = a.n(i),
        r = a("NERQ"),
        o = a("GFa9"),
        s = a("8B9M"),
        u = a("Y28S"),
        d = Object(s.a)(),
        l = {
          freeLevelcenter: "FreeLevelcenter",
          payLevelcenter: "PayLevelcenter",
          equityCard: "EquityCard",
        },
        g = "coupon",
        p = "goods",
        v = "casino",
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
        y = {
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
        h = "success",
        m = [
          {
            sign: "GUIDE_COUPON_SIGN",
            guideType: g,
            content: "领卡成功，前往领券",
            confirmButtonText: "去领券",
            cancelButtonText: "取消",
          },
          {
            sign: "GUIDE_GOODS_SIGN",
            guideType: p,
            content: "领卡成功，返回商品",
            confirmButtonText: "去购买",
            cancelButtonText: "取消",
          },
          {
            sign: "GUIDE_CASINO_SIGN",
            guideType: v,
            content: "领卡成功，前去抽奖",
            confirmButtonText: "去抽奖",
            cancelButtonText: "取消",
          },
        ],
        _ = { [g]: "couponposter", [v]: "lottery", [p]: "goods" };
      function T(e) {
        try {
          d.logger && d.logger.log(Object(n.a)({}, e));
        } catch (e) {}
      }
      function w(e) {
        var { guideType: t, redirectUrl: a, guideDialogType: n } = e,
          i =
            a && t
              ? (function (e) {
                  return m.findIndex((t) => t.guideType === e);
                })(t)
              : -1,
          c = i > -1;
        return {
          guideType: t,
          redirectUrl: a,
          guideDialogType: n,
          config: c ? m[i] : {},
          isGuideType: !(!c || !a),
        };
      }
      function x(e) {
        wx.setStorageSync("GUIDE_DIALOG_SEARCH", {
          guideType: e.guideType,
          redirectUrl: e.redirectUrl,
        });
      }
      function O(e, t) {
        var { guideType: a, redirectUrl: n, isGuideType: i } = w(t),
          r = e;
        return (
          i &&
            (r = c.a.add(r, {
              guideType: a,
              redirectUrl: decodeURIComponent(n),
            })),
          r
        );
      }
      function b(e, t) {
        var a = y[e];
        T(
          Object(n.a)({}, a, {
            ei: a.ei + "_" + _[t.guideType],
            params: { source_type: t.guideType },
          })
        );
        var i = decodeURIComponent(t.redirectUrl),
          r = /^\/?packages|pages/.test(i),
          s = /^\/packages|pages/.test(i);
        o.a.navigate({
          url: r
            ? (s ? "" : "/") + i
            : c.a.add("/pages/common/webview-page/index", { src: i }),
        });
      }
      function S(e, t) {
        var a = f[e];
        T(
          Object(n.a)({}, a, {
            ei: a.ei + "_" + _[t.guideType],
            params: { source_type: t.guideType },
          })
        );
      }
      function C(e, t, a) {
        var i = f[e];
        T(
          Object(n.a)({}, i, {
            ei: i.ei + "_" + _[t.guideType],
            params: { source_type: t.guideType },
          })
        ),
          r.a
            .confirm({
              message: t.config.content,
              confirmButtonText: t.config.confirmButtonText,
              cancelButtonText: t.config.cancelButtonText,
            })
            .then(() => {
              b(e, t);
            })
            .catch(() => {
              a && a();
            });
      }
      function I(e, t, a, n) {
        var i = w(a);
        if (i.guideDialogType === h) {
          var c = w(wx.getStorageSync("GUIDE_DIALOG_SEARCH"));
          c.isGuideType
            ? (wx.removeStorageSync("GUIDE_DIALOG_SEARCH"), C(e, c, n))
            : n && n();
        } else t === h && i.isGuideType ? C(e, i, n) : n && n();
      }
      var L = (e) => {
        if (e.IS_SALES && e.NEW_SALES_ID)
          return "!sales_ch~online!sales_id~" + e.NEW_SALES_ID;
        var t = Object(u.d)(e.from_params) || {};
        return t.sl ? "!sl~" + t.sl : "";
      };
    },
    NERQ: function (e, t, a) {
      var n = [],
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
        c = Object.assign({}, i);
      var r = (e) => (
        (e = Object.assign(Object.assign({}, c), e)),
        new Promise((t, a) => {
          var i,
            c = (
              ("function" == typeof e.context ? e.context() : e.context) ||
              (i = getCurrentPages())[i.length - 1]
            ).selectComponent(e.selector);
          delete e.context,
            delete e.selector,
            c &&
              (c.setData(
                Object.assign(
                  {
                    callback: (e, n) => {
                      "confirm" === e ? t(n) : a(n);
                    },
                  },
                  e
                )
              ),
              wx.nextTick(() => {
                c.setData({ show: !0 });
              }),
              n.push(c));
        })
      );
      (r.alert = (e) => r(e)),
        (r.confirm = (e) => r(Object.assign({ showCancelButton: !0 }, e))),
        (r.close = () => {
          n.forEach((e) => {
            e.close();
          }),
            (n = []);
        }),
        (r.stopLoading = () => {
          n.forEach((e) => {
            e.stopLoading();
          });
        }),
        (r.currentOptions = c),
        (r.defaultOptions = i),
        (r.setDefaultOptions = (e) => {
          (c = Object.assign(Object.assign({}, c), e)), (r.currentOptions = c);
        }),
        (r.resetDefaultOptions = () => {
          (c = Object.assign({}, i)), (r.currentOptions = c);
        }),
        r.resetDefaultOptions(),
        (t.a = r);
    },
  })
);
