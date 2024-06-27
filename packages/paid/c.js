"use strict";
(exports.ids = [7]),
  (exports.modules = {
    "+Pcn": function (e, t, a) {
      a.d(t, "a", function () {
        return i;
      });
      a("T9qh");
      var r = { key: "Haibao", name: "分享海报", icon: "poster" },
        o = {
          key: "WechatMiniApp",
          name: "微信",
          icon: "wechat",
          openType: "share",
        };
      function i(e) {
        var { isNewHotelGood: t } = void 0 === e ? {} : e;
        return t ? [o] : [r, o];
      }
    },
    "1/j1": function (e, t) {
      e.exports = {
        d: "kdtId;4;orderNo;4;payResult;4;hasPaid;4;isRefreshing;4;showAwardV2Block;4",
        e: "checkPay",
        wd: "PaidState",
      };
    },
    "1yfI": function (e, t, a) {
      a.d(t, "a", function () {
        return o;
      });
      var r = a("w2Y9"),
        o =
          (a.n(r).a.get("fissionId"),
          { Reward: 0, Random: 1, Discount: 2, Goods: 3 }),
        i = 2,
        n = 3;
      o.Reward, o.Discount, o.Goods;
    },
    "2m4J": function (e, t) {
      e.exports = {
        d: "isSkyline;4",
        e: "hideShopAdDialog;closeAutoOpenPopup",
        el: "showShopAdDialog;hideShopAdDialog",
        w: "ShopAdDialog;AdImage",
        wd: "ShopAdDialog",
        l: "",
        lc: "",
        p: "",
        pi: "jumpToLink",
        c: "",
        cc: "MessageContact",
      };
    },
    "3Y0v": function (e, t) {
      e.exports = {
        d: "solitaireShareData;0;showSolitaire;0;orderNo;4",
        e: "openSolitaireDialog;closeAutoOpenPopup",
        el: "openSolitaireDialog",
        w: "SolitaireShareButton",
        wd: "SolitaireDialog",
      };
    },
    "5Yhg": function (e, t) {
      e.exports = {
        d: "groupbuyShareData;0;orderNo;4;buyerId;4;kdtId;4",
        e: "openGroupbuyShareDialog;setBuyAgainPath;closeAutoOpenPopup;handleGroupBuyingBuyAgain",
        el: "openGroupbuyShareDialog;setBuyAgainPath;handleGroupBuyingBuyAgain",
        w: "GroupbuyShareButton;GroupbuyContinueButton",
        wd: "GroupbuyShareDialog",
      };
    },
    "5iKS": function (e, t, a) {
      a.d(t, "a", function () {
        return o;
      }),
        a.d(t, "b", function () {
          return i;
        });
      a("US/N"), a("AGZf"), a("T9qh");
      var r = a("mztD"),
        o =
          (a("b4An"),
          {
            title: "订阅物流",
            type: "youzanmars",
            content: [
              [],
              [
                Object(r.a)(
                  "pay-result/images/09acc6205b98bb2681d5d71b5f5793e26b515a.png"
                ),
              ],
              ["下载有赞精选 App，查看订单物流状态"],
            ],
          });
      function i(e) {
        var t,
          { mpData: a = {}, kdtId: o } = e;
        return (
          (t = {
            title: "订阅物流",
            type: "miniProgram",
            content: [
              ["添加店铺小程序到我的小程序，查看订单物流"],
              [
                Object(r.a)(
                  "upload_files/2020/08/04/FnELPhb4UriBAY1CQ9M6eavAYo25.gif"
                ),
              ],
              [],
            ],
          }),
          Promise.resolve(t)
        );
      }
    },
    "5pTi": function (e, t, a) {
      a("AGZf");
      t.a = function () {
        wx.hideLoading();
      };
    },
    "72lf": function (e, t, a) {
      a.d(t, "a", function () {
        return o;
      }),
        a.d(t, "b", function () {
          return i;
        });
      var r = a("ljV+");
      function o(e) {
        void 0 === e && (e = {});
        var { activityShareMessageDTOS: t = [] } = e,
          a = t[0] || {},
          o = a.isDisplay || !1,
          i = a.desc || "",
          n = a.imgUrl || "",
          s = r.args.getAll(a.activityUrl);
        return {
          isDisplay: o,
          desc: i,
          imgUrl: n,
          activityId: s.activityId,
          umpAlias: s.umpAlias,
          inviterVoucherAlias: s.inviterVoucherAlias,
        };
      }
      function i(e) {
        void 0 === e && (e = {});
        var {
          activityId: t,
          umpAlias: a,
          inviterVoucherAlias: o,
          desc: i,
          imgUrl: n,
        } = e;
        return {
          path: r.args.add("/packages/ump/in-sourcing-fission/index", {
            activityId: t,
            umpAlias: a,
            inviterVoucherAlias: o,
          }),
          imageUrl: n,
          title: i,
        };
      }
    },
    "7ECU": function (e, t) {
      e.exports = {
        d: "showExtHolder;4",
        e: "",
        el: "",
        w: "",
        wc: "CpsRecommendGoods",
        wd: "Main",
        l: "",
        lc: "",
        p: "",
        pi: "",
        c: "",
        cc: "",
      };
    },
    "9Fos": function (e, t, a) {
      a.d(t, "a", function () {
        return o;
      }),
        a.d(t, "b", function () {
          return i;
        });
      var r = a("US/N");
      function o(e) {
        return Object(r.default)({
          method: "GET",
          path: "/wsctrade/order/payresult/ticket-detail.json",
          data: e,
        });
      }
      function i(e) {
        return Object(r.default)({
          method: "POST",
          path: "/wsctrade/poster/card-voucher.json",
          data: e,
        });
      }
    },
    BhQK: function (e, t) {
      e.exports = {
        d: "showExtHolder;4",
        e: "",
        el: "",
        w: "",
        wc: "RecommendGoods",
        wd: "Main",
        l: "",
        lc: "",
        p: "",
        pi: "",
        c: "",
        cc: "",
      };
    },
    EZGM: function (e, t) {
      e.exports = {
        d: "kdtId;2;buyerId;0;title;2;hasPaid;2;pageSize;2;requestExtraParams;2;bizName;2;cpsConfigKey;0;orderNo;0;isRefreshing;0;fetching;0;payResult;2;payWayStr;0;showChangePriceDialog;0;waitBuyDialog;2;phasePaymentStage;0;orderItems;0;changeSubscribe;0;miniprogram;0;mpAccount;0;platformInfo;0;goodsType;0;orderDetailUrl;0;orderType;0;virtualTicketDetailUrl;0;navigationTitle;2;isSkyline;2;groupbuyShareData;4;showSolitaire;4;solitaireShareData;4",
        e: "checkPay",
        el: "checkPay",
        w: "",
        wc: "",
        wd: "Main",
        p: "beforeGoToUrl",
        pi: "getInSourcingCouponShare;getFissionShare",
        cc: "UserAuthorizePopup",
        li: "beforePageCreate;onShareAppMessage;pageDestroyed",
      };
    },
    EfyL: function (e, t, a) {
      a.d(t, "c", function () {
        return r;
      }),
        a.d(t, "a", function () {
          return o;
        }),
        a.d(t, "b", function () {
          return i;
        });
      var r = { RECEIVED: 1, UN_RECEIVED: 0 },
        o = {
          FETCH_SUCCESS: 1,
          HAS_FETCHED: 2,
          NONE: 3,
          ACT_ENDED: 4,
          LIMIT_EXCEEDED: 5,
          ACT_INVALID: 6,
          LINK_INVALID: 7,
          COUPON_INVALID: 8,
        },
        i = {
          [o.NONE]: "优惠券已抢光",
          [o.ACT_ENDED]: "活动已结束",
          [o.LIMIT_EXCEEDED]: "已超过最多领取次数",
          [o.ACT_INVALID]: "活动已失效",
          [o.LINK_INVALID]: "链接已失效",
          [o.COUPON_INVALID]: "优惠券已失效",
        };
    },
    Ekqs: function (e, t, a) {
      a.d(t, "a", function () {
        return s;
      });
      var r = a("Fcif"),
        o = a("YAk7"),
        i = {
          [o.f.Tradeincard]: {
            mark: "click_marketing_paidpro_coupon",
            name: "支付有礼送券/码点击",
          },
          [o.f.Promocode]: {
            mark: "click_marketing_paidpro_coupon",
            name: "支付有礼送券/码点击",
          },
          [o.f.Couponpackage]: {
            mark: "click_marketing_paidpro_coupon",
            name: "支付有礼送券/码点击",
          },
          [o.f.Present]: {
            mark: "click_marketing_paidpro_present",
            name: "支付有礼送赠品点击",
          },
          [o.f.Wheel]: {
            mark: "click_marketing_paidpro_games",
            name: "支付有礼玩游戏点击",
            params: { game_type: "幸运大抽奖" },
          },
          [o.f.Guaguale]: {
            mark: "click_marketing_paidpro_games",
            name: "支付有礼玩游戏点击",
            params: { game_type: "刮刮乐" },
          },
          [o.f.Crazyguess]: {
            mark: "click_marketing_paidpro_games",
            name: "支付有礼玩游戏点击",
            params: { game_type: "疯狂猜" },
          },
          [o.f.Zodiac]: {
            mark: "click_marketing_paidpro_games",
            name: "支付有礼玩游戏点击",
            params: { game_type: "生肖翻翻看" },
          },
          [o.f.Survey]: {
            mark: "click_marketing_paidpro_vote",
            name: "支付有礼投票调查点击",
          },
          [o.f.Seller]: {
            mark: "click_marketing_paidpro_salesman",
            name: "支付有礼成为销售员点击",
          },
          [o.f.Seniorseller]: {
            mark: "click_marketing_paidpro_salesman",
            name: "支付有礼成为销售员点击",
          },
          [o.f.Feature]: {
            mark: "click_marketing_paidpro_deco",
            name: "支付有礼浏览微页面点击",
          },
          [o.f.ActivitiesQrCode]: {
            mark: "click_marketing_paidpro_liveqrcode",
            name: "支付有礼自定义图片点击活码",
          },
        },
        n = {
          [o.f.Present]: {
            mark: "view_marketing_paidpro_present",
            name: "支付有礼送赠品曝光",
          },
          [o.f.Wheel]: {
            mark: "view_marketing_paidpro_games",
            name: "支付有礼玩游戏曝光",
            params: { game_type: "幸运大抽奖" },
          },
          [o.f.Zodiac]: {
            mark: "view_marketing_paidpro_games",
            name: "支付有礼玩游戏曝光",
            params: { game_type: "生肖翻翻看" },
          },
          [o.f.Guaguale]: {
            mark: "view_marketing_paidpro_games",
            name: "支付有礼玩游戏曝光",
            params: { game_type: "刮刮乐" },
          },
          [o.f.Crazyguess]: {
            mark: "view_marketing_paidpro_games",
            name: "支付有礼玩游戏曝光",
            params: { game_type: "疯狂猜" },
          },
          [o.f.Survey]: {
            mark: "view_marketing_paidpro_vote",
            name: "支付有礼投票调查曝光",
          },
          [o.f.Seller]: {
            mark: "view_marketing_paidpro_salesman",
            name: "支付有礼成为销售员曝光",
          },
          [o.f.Seniorseller]: {
            mark: "view_marketing_paidpro_salesman",
            name: "支付有礼成为销售员曝光",
          },
          [o.f.Feature]: {
            mark: "view_marketing_paidpro_deco",
            name: "支付有礼浏览微页面曝光",
          },
          [o.f.ActivitiesQrCode]: {
            mark: "view_marketing_paidpro_liveqrcode",
            name: "支付有礼推广活码曝光",
          },
        },
        s = (e) => {
          var t,
            { type: a, isCustom: o, track: s = "click", logFn: c } = e,
            u = "click" === s ? i[a] : n[a];
          u &&
            c({
              et: s,
              ei: u.mark,
              en: u.name,
              params: Object(r.a)(
                { is_custom: o ? 1 : 0 },
                null != (t = u.params) ? t : {}
              ),
            });
        };
    },
    Ewla: function (e, t, a) {
      a.d(t, "a", function () {
        return o;
      });
      var r = a("US/N");
      function o(e) {
        return Object(r.default)({
          path: "/wsctrade/order/payresult/getSelfFetchTakeGoodsMessage.json",
          data: e,
        });
      }
    },
    Fq9W: function (e, t) {
      e.exports = {
        d: "payResult;4",
        e: "closeAutoOpenPopup",
        el: "openSubsidyPopup",
        w: "PaidSubsidyDialog",
        wc: "",
        l: "",
        lc: "",
        p: "",
        pi: "",
        c: "",
        cc: "",
      };
    },
    "H+Tb": function (e, t, a) {
      var r = a("9ZMt");
      t.a = (e) =>
        new Promise((t, a) => {
          r.default.$native.getSetting({
            success: (o) => {
              o.authSetting[e]
                ? t()
                : r.default.$native.authorize({
                    scope: e,
                    success: t,
                    fail: a,
                  });
            },
            fail: a,
          });
        });
    },
    H0mK: function (e, t, a) {
      a.d(t, "a", function () {
        return p;
      });
      var r = a("US/N"),
        o = "wx7138c43cf7b11573",
        i = { errorType: "fail", err_msg: "授权失败，请稍后重试" },
        n = (e) => ("weapp" === e ? o : ""),
        s = "AUTHORIZED",
        c = "UNAUTHORIZED",
        u = (e) =>
          new Promise((t, a) => {
            try {
              WeixinJSBridge.invoke(
                "openBusinessView",
                {
                  businessType: "wxpayScoreEnable",
                  queryString: "apply_permissions_token=" + e,
                },
                (e) => {
                  if (0 === parseInt(e.err_code)) t();
                  else {
                    var { err_msg: r = "", err_code: o } = e,
                      i = r.includes("cancel") ? "cancel" : "wx_fail";
                    a({ errorType: i, err_msg: r, code: o });
                  }
                }
              );
            } catch (e) {
              a(i);
            }
          }),
        d = (e) =>
          new Promise((t, a) => {
            Object(r.default)({
              url: "/wscassets/api/prior-use/queryAuthState",
              method: "GET",
              data: { biz: "trade_order", wxPayScoreAppId: n() },
            })
              .then((t) => {
                var o;
                if (t !== s)
                  return t === c
                    ? ((o = "pay_success_h5_dialog"),
                      Object(r.default)({
                        url: "/wscassets/api/prior-use/preAuth",
                        method: "GET",
                        data: {
                          biz: "trade_order",
                          wxPayScoreAppId: n(),
                          sources: o,
                        },
                      })).then((t) => e(t))
                    : void 0;
                a({ errorType: "fail", err_msg: "请勿重复授权" });
              })
              .then(() => {
                t();
              })
              .catch((e) => {
                "wx_fail" !== (null == e ? void 0 : e.errorType) ? a(e) : a(i);
              });
          }),
        p = (e) => {
          var { env: t } = e;
          switch (t) {
            case "weapp":
              return (
                (() => {
                  var e = "release";
                  try {
                    e = __wxConfig.envVersion;
                  } catch (e) {}
                  try {
                    wx.navigateToMiniProgram({
                      appId: o,
                      envVersion: e,
                      path: "/pages/prior-use/index?sources=pay_success_dialog",
                      success: () => {
                        var e = () => {
                          wx.offAppShow(e);
                        };
                        wx.onAppShow(e);
                      },
                      fail: (e) => {},
                    });
                  } catch (e) {}
                })(),
                new Promise((e) => {
                  e();
                })
              );
            case "wechat":
              return d(u);
            default:
              return new Promise((e, t) => {
                t({ errorType: "fail", err_msg: "暂不支持该环境" });
              });
          }
        };
    },
    JXNC: function (e, t, a) {
      a.d(t, "a", function () {
        return o;
      });
      var r = a("US/N");
      function o(e) {
        return Object(r.default)({
          path: "/wscassets/api/prior-use/priorUseVisited",
          data: { sources: e },
        });
      }
    },
    "K+cF": function (e, t) {
      e.exports = {
        d: "payResult;6;themeCSS;4;themeColors;4;orderNo;4;orderItems;4",
        e: "showTradeShareDialog;hideTradeShareDialog",
        el: "showTradeShareDialog;hideTradeShareDialog",
        w: "TradeShareDialog",
        wd: "TradeShareDialog",
      };
    },
    Kjkt: function (e, t) {
      e.exports = {
        d: "canUseTradeUmpV1;2;newAwardInfo;2;showAwardV2Block;2;kdtId;4;orderNo;4;hasPaid;4;payResult;4;themeColors;4;isWxReceipt;4;realHeight;4;returnUrl;4;themeVars;4;themeTag;4;isSkyline;4;newAwardInfo;4",
        el: "showActivateBenefitcardDialog",
        w: "PaidPromotionBanner",
        wc: "SalesmanPayResultInfo;FissionCouponUmp",
        wd: "Main",
        pi: "navigateTo;logger;ready;beforeGoToUrl",
        li: "pageDestroyed",
      };
    },
    KozD: function (e, t, a) {
      a.d(t, "a", function () {
        return s;
      }),
        a.d(t, "b", function () {
          return c;
        }),
        a.d(t, "f", function () {
          return u;
        }),
        a.d(t, "c", function () {
          return f;
        }),
        a.d(t, "d", function () {
          return b;
        }),
        a.d(t, "e", function () {
          return S;
        });
      var r = a("Fcif"),
        o = a("US/N"),
        i = a("jmjq"),
        n = a.n(i),
        s = {
          coupon: "coupon",
          seckill: "seckill",
          lottery: "lottery",
          choose: "choose",
        },
        c = {
          reward: "reward",
          discount: "discount",
          random: "random",
          goods: "goods",
        },
        u = {
          default: "lottery_result",
          coupon: "lottery_result_coupon",
          seckill: "lottery_result_seckill",
        },
        d = (e) => (e && e.length > 0 ? e[0] : {});
      function p(e) {
        return e !== c.discount && e !== c.goods;
      }
      function l(e) {
        return e === c.discount;
      }
      function h(e, t, a) {
        return (
          void 0 === e && (e = 0),
          void 0 === t && (t = !0),
          void 0 === a && (a = !1),
          e && "string" == typeof e ? e : n()(e, t, a)
        );
      }
      function g(e, t) {
        return (
          void 0 === e && (e = "0.00"),
          "number" == typeof e && (e = h(e)),
          e.includes(".") || (e += ".00"),
          e.split(".")[t]
        );
      }
      function m(e) {
        var t;
        void 0 === e && (e = "");
        var a = JSON.parse(e);
        return a && a.length > 0 ? (null == (t = a[0]) ? void 0 : t.url) : "";
      }
      function f() {
        return Object(o.default)({
          path: "/wsctrade/order/payresult/shopad.json",
        }).catch(() => {});
      }
      function b(e) {
        switch (e) {
          case 1:
          case 2:
            return 25;
          case 3:
            return 20;
          case 4:
            return 15;
          default:
            return 12;
        }
      }
      function y(e) {
        e = h(e);
        var [t, a = "0"] = e.split("."),
          r = Number(a);
        return r > 0
          ? r % 10 == 0
            ? t + "." + parseInt(a / 10, 10)
            : t + "." + a
          : t;
      }
      function v(e) {
        var { value: t = 0, maxValue: a = 0, couponType: r } = e;
        return r === c.discount
          ? y(10 * t)
          : r === c.goods
          ? "商品兑换券"
          : r === c.random
          ? y(a)
          : y(t);
      }
      function w(e) {
        var { couponType: t } = e,
          a = v(e),
          { length: r } = a;
        a.includes(".") && (r -= 1);
        var o = (function (e) {
          switch (e) {
            case 1:
            case 2:
              return 30;
            case 3:
              return 24;
            case 4:
              return 19;
            default:
              return 12;
          }
        })(r);
        return t === c.goods && (o = 14), "font-size: " + o + "px";
      }
      function S(e) {
        var { adType: t, resourceResponse: a } = e || {},
          { couponAdContentList: o = [], secKillAdContentList: i = [] } =
            e || {};
        if (
          ((o = (function (e) {
            return e.map((e) => {
              return (
                e.availableGoods &&
                  (e.availableGoods = e.availableGoods.map((e) =>
                    Object(r.a)({}, e, {
                      bigPrice: g(e.price, 0),
                      centPrice: g(e.price, 1),
                      price: h(e.price),
                    })
                  )),
                Object(r.a)({}, e, {
                  isShowMax: ((a = e.couponType), a === c.random),
                  isShowUnit: p(e.couponType),
                  isShowDiscount: l(e.couponType),
                  couponQuota: v(e),
                  couponValueFontSize: w(e),
                  preferentialCopyWriting:
                    ((t = e.preferentialCopyWriting),
                    void 0 === t && (t = ""),
                    t.split("，")[0] + "使用"),
                })
              );
              var t, a;
            });
          })(o)),
          (i = (function (e) {
            return e.map((e) =>
              Object(r.a)({}, e, {
                bigPrice: g(e.secKillPrice, 0),
                centPrice: g(e.secKillPrice, 1),
                picture: m(e.picture),
              })
            );
          })(i)),
          1 === t && o.length > 0)
        )
          return { type: s.coupon, data: d(o) };
        if (1 === t && i.length > 0) return { type: s.seckill, data: d(i) };
        if (20 === t && a)
          return {
            type: s.lottery,
            data: {
              couponAdContentList: o,
              secKillAdContentList: i,
              resourceResponse: a,
            },
          };
        if (30 === t && (o.length > 0 || i.length > 0)) {
          var n = o.map((e) => Object(r.a)({}, e, { adType: s.coupon })),
            u = i.map((e) => Object(r.a)({}, e, { adType: s.seckill }));
          return { type: s.choose, data: n.concat(u) };
        }
        return "";
      }
    },
    "Ly+Q": function (e, t) {
      e.exports = {
        d: "",
        e: "",
        el: "",
        w: "",
        wc: "contents",
        wd: "Main",
        l: "",
        lc: "",
        p: "",
        pi: "",
        c: "",
        cc: "",
      };
    },
    MBPi: function (e, t, a) {
      function r(e) {
        return !!e && "{}" !== JSON.stringify(e);
      }
      a.d(t, "a", function () {
        return r;
      });
    },
    O5jh: function (e, t) {
      e.exports = {
        d: "showExtHolder;0;hasPaid;4;payResult;4;canUseTradeUmpV1;4;isWxReceipt;4;realHeight;4;kdtId;4;returnUrl;4",
        e: "SubscribeNotice",
        w: "FlowChangeUmp",
        wc: "FlowChangeUmp;FissionCouponUmp;PaidPromotionBanner;GuideCouponBlock;BigdataCoupon;PaidSubscriptionMsg;InSourcingCouponUmp;ProtocolPopupWeapp",
        wd: "Main",
        p: "getInSourcingCouponShare",
        pi: "navigateTo;logger;ready",
      };
    },
    OEMs: function (e, t, a) {
      a.d(t, "b", function () {
        return o;
      }),
        a.d(t, "a", function () {
          return i;
        });
      var r = a("US/N");
      function o(e) {
        return Object(r.default)({
          method: "POST",
          path: "/wsctrade/poster/self-fetch.json",
          data: e,
        });
      }
      function i(e) {
        return Object(r.default)({
          method: "GET",
          path: "/wsctrade/order/payresult/selfFetchMessage.json",
          data: e,
        });
      }
    },
    P5Ef: function (e, t, a) {
      var r = a("Fcif"),
        o = a("esrA"),
        i = "@ext-tee-wsc-ump/paid-award-v2-block",
        n = "@wsc-tee-trade/paid-trade-share-dialog",
        s = "@wsc-tee-statcenter/cps-recommend-goods",
        c = "@ext-tee-wsc-ump/paid-success-fission-coupon-dialog",
        u = "@ext-tee-wsc-ump/paid-success-auto-send-coupon-dialog",
        d = "@retail-tee-group/groupbuy-share-dialog",
        p = "@wsc-tee-statcenter/recommend-goods",
        l = "@ext-tee-wsc-ump/paid-coupon-block",
        h = "@assets-tee-extensions/prior-use-dialog",
        g = "@retail-tee-solitaire/solitaire-dialog",
        m = "@wsc-tee-trade/order-paid-groupbuy-self-fetch-dialog",
        f = "@wsc-tee-salesman/salesman-pay-result-block",
        b = "@ext-tee-wsc-ump/paid-subsidy-dialog",
        y = "@ext-tee-wsc-im/im-message-contact",
        v = "@ext-tee-wsc-im/subscription-message",
        w = "@wsc-tee-trade/paid-cps-goods-recommend-block",
        S = "@wsc-tee-trade/paid-recommend-block",
        _ = "@ext-tee-wsc-trade/paid-block-container",
        I = Object(o.a)({
          a: {
            p: [
              {
                r: ["/packages/paid/pay-result/success/index"],
                c: [
                  {
                    t: "c",
                    c: [
                      { t: "c", c: [{ t: "m", c: ["b21-26", "b21-0"] }] },
                      {
                        t: "c",
                        c: [
                          { t: "m", c: ["b21-1"] },
                          { t: "m", c: ["b21-10", "b21-2"] },
                          { t: "m", c: ["b21-3"] },
                          { t: "m", c: ["b21-6"] },
                          { t: "m", c: ["b21-22"] },
                          { t: "m", c: ["b21-23", "b21-27"] },
                          { t: "m", c: ["b21-12"] },
                          {
                            t: "m",
                            c: [
                              "b21-8",
                              "b21-15",
                              "b21-9",
                              "b21-14",
                              "b21-17",
                              "b21-4",
                              "b21-7",
                              "b21-21",
                            ],
                          },
                          { t: "m", c: ["b21-19"] },
                          { t: "m", c: ["b21-18", "b21-24", "b21-25"] },
                        ],
                      },
                    ],
                  },
                ],
                m: ["b21-5", "b21-11", "b21-13", "b21-16", "b21-20"],
              },
            ],
          },
          m: [
            [
              "b21-0",
              "@wsc-tee-trade/paid-page-setup",
              {
                d: {
                  groupbuyShareData: "b21-9",
                  showSolitaire: "b21-14",
                  solitaireShareData: "b21-14",
                },
                p: {
                  getInSourcingCouponShare: [["b21-6"]],
                  getFissionShare: [["b21-7"], ["b21-12"]],
                },
              },
              { stage: "pre", asyncInit: !0 },
            ],
            ["b21-1", "@wsc-tee-trade/paid-state", null, { stage: "pre" }],
            [
              "b21-2",
              i,
              {
                e: { showActivateBenefitcardDialog: [["b21-3"]] },
                w: { FissionCouponUmp: null },
              },
              { stage: "pre", asyncInit: !0 },
            ],
            [
              "b21-3",
              "@wsc-tee-trade/paid-action",
              {
                e: { SubscribeNotice: [["b21-6"]] },
                w: {
                  WishMsgPopup: null,
                  SelfFetchDialog: null,
                  VoucherCardDialog: null,
                  SubscriptionDialog: null,
                },
              },
            ],
            ["b21-4", n, null],
            ["b21-5", s, null, { stage: "post" }],
            [
              "b21-6",
              "@wsc-tee-trade/paid-ext-holder",
              {
                w: {
                  PaidSubscriptionMsg: "b21-3",
                  ProtocolPopupWeapp: [
                    "@passport-tee/protocol~Duv5tmrK",
                    "ProtocolPopup",
                  ],
                },
              },
              { stage: "post" },
            ],
            ["b21-7", c, null],
            [
              "b21-8",
              u,
              {
                w: {
                  UserAuthorize: [
                    "@passport-tee/user-authorize~DDdJBmWG",
                    "Main",
                  ],
                },
              },
            ],
            ["b21-9", d, null],
            ["b21-10", "@ext-tee-wsc-ump/paid-award-block", null],
            ["b21-11", p, { d: { offlineId: null } }, { stage: "post" }],
            ["b21-12", l, null, { stage: "post" }],
            ["b21-13", h, { e: { showPriorUseDialog: [["b21-3"]] } }],
            ["b21-14", g, null],
            ["b21-15", m, null],
            ["b21-16", f, null, { stage: "pre" }],
            ["b21-17", b, null],
            [
              "b21-18",
              "@wsc-tee-decorate/shop-ad",
              { c: { MessageContact: ["b21-20", "MessageContactButton"] } },
            ],
            ["b21-19", "@wsc-tee-decorate/jump-link", null],
            [
              "b21-20",
              y,
              {
                w: {
                  UserAuthorize: [
                    "@passport-tee/user-authorize~DDdJBmWG",
                    "Main",
                  ],
                },
              },
            ],
            ["b21-21", v, null],
            [
              "b21-22",
              w,
              {
                d: { showExtHolder: "b21-6" },
                w: { CpsRecommendGoods: ["b21-5", "Main"] },
              },
            ],
            [
              "b21-23",
              S,
              {
                d: { showExtHolder: "b21-6" },
                w: { RecommendGoods: ["b21-11", "Main"] },
              },
            ],
            [
              "b21-24",
              _,
              {
                w: {
                  contents: [
                    ["b21-3", "SelfFetchDialog"],
                    ["b21-3", "VoucherCardDialog"],
                    ["b21-3", "SubscriptionDialog"],
                  ],
                },
              },
            ],
            ["b21-25", "@ext-tee-wsc-decorate/page-style", null],
            [
              "b21-26",
              "@wsc-tee-decorate/navigation-bar",
              { d: { title: ["b21-0", "navigationTitle"] } },
            ],
            ["b21-27", "@wsc-tee-shop/footer", null],
          ],
          e: [
            ["@wsc-tee-trade/paid-page-setup", a("EZGM"), { asyncInit: !0 }],
            ["@wsc-tee-trade/paid-state", a("1/j1")],
            [i, a("Kjkt"), { asyncInit: !0 }],
            ["@wsc-tee-trade/paid-action", a("sNje")],
            [n, a("K+cF")],
            [s, a("NURP")],
            ["@wsc-tee-trade/paid-ext-holder", a("O5jh")],
            [c, a("Xn04")],
            [u, a("nsGZ")],
            [d, a("5Yhg")],
            ["@ext-tee-wsc-ump/paid-award-block", a("U2jx")],
            [p, a("+XBW")],
            [l, a("h891")],
            [h, a("SvqE")],
            [g, a("3Y0v")],
            [m, a("hth6")],
            [f, a("irfn")],
            [b, a("Fq9W")],
            ["@wsc-tee-decorate/shop-ad", a("2m4J")],
            ["@wsc-tee-decorate/jump-link", a("OgbJ")],
            [y, a("7xhV")],
            [v, a("7ueE")],
            [w, a("7ECU")],
            [S, a("BhQK")],
            [_, a("Ly+Q")],
            ["@ext-tee-wsc-decorate/page-style", a("8v1J")],
            ["@wsc-tee-decorate/navigation-bar", a("/MSb")],
            ["@wsc-tee-shop/footer", a("+zL3")],
          ],
        }),
        k = a("9ZMt"),
        x = a("AGZf"),
        O = a("z9IR"),
        P = a("GRMa"),
        A = a("ljV+"),
        T = a("YeA1"),
        D = a("NHEX"),
        C = a.n(D),
        E = a("Z5Nd"),
        U = a.n(E),
        j = a("JQZX"),
        R = a("US/N"),
        N = a("mztD"),
        G = "NORMAL",
        B = "NEWHOPE",
        L = "WAIT",
        M = "PAY_ERROR",
        F = "OVERSALE_ERROR",
        V = "AUCTION",
        H = { menu: "native_wechat", button: "native_custom" },
        K = [
          "tradeincard",
          "promocode",
          "couponpackage",
          "seller",
          "seniorseller",
          "feature",
          "present",
        ];
      function q(e) {
        void 0 === e && (e = {});
        var { orderNo: t, phasePaymentStage: a } = e,
          r = { requestNo: t };
        return a && (r.phase = a), r;
      }
      function z(e) {
        var t = getApp();
        return () => {
          t.logger.log({
            et: "click",
            ei: "share_result",
            en: "分享结果",
            params: { share_result: e },
            si: t.getKdtId(),
          });
        };
      }
      var W = [2, 0, 1];
      function Y(e) {
        var { waitBuyGoodsIds: t } = e;
        return Object(R.default)({
          path: "/wsctrade/cart/goodsList.json",
        }).then((e) => {
          var a,
            r,
            o =
              ((a = t),
              (r = C()(e, "0.items")),
              void 0 === a && (a = []),
              void 0 === r && (r = []),
              r.filter((e) => {
                var { kdtId: t, goodsId: r, skuId: o, activityId: i } = e,
                  n = [t, r, o, i].join("-");
                return -1 !== a.indexOf(n);
              }));
          if (!o || !o.length) return Promise.reject();
          var i =
            C()(
              (function (e) {
                var t = {
                    NORMAL_EXPRESS: {
                      title: "快递发货",
                      expressType: 0,
                      list: [],
                    },
                    LOCAL_DELIVERY: {
                      title: "同城配送",
                      expressType: 2,
                      list: [],
                    },
                    SELF_TAKE: { title: "到店自提", expressType: 1, list: [] },
                  },
                  a = [],
                  r = e.length,
                  o = !0,
                  i = 0;
                return (
                  Object(j.a)(e, (e) => {
                    var { logisticsTypeList: a } = e;
                    Array.isArray(a) &&
                      0 === a.length &&
                      (i++,
                      Object(j.a)(t, (t) => {
                        t.list.push(e);
                      })),
                      Object(j.a)(a, (a) => {
                        var r = t[a];
                        r && r.list.push(e);
                      });
                  }),
                  Object(j.a)(t, (e) => {
                    var t = e.list.length,
                      n = 0;
                    (t > i || t === r) &&
                      (Object(j.a)(e.list, (e) => {
                        n += e.payPrice * e.num;
                      }),
                      (e.totalPrice = n),
                      a.push(e)),
                      t === r && (o = !1);
                  }),
                  { needSeparate: o, data: a }
                );
              })(o),
              "data"
            ) || [];
          i.sort((e, t) => {
            var a = W.indexOf(+C()(e, "expressType")),
              r = W.indexOf(+C()(t, "expressType"));
            return a > r ? 1 : a < r ? -1 : 0;
          });
          var n = i[0],
            s = C()(n, "list"),
            c = C()(n, "expressType");
          return s && s.length
            ? (Object(j.a)(s, (e) => {
                e.imgUrl = Object(N.a)(e.attachmentUrl, "!112x112.jpg");
              }),
              { goodsList: s, expressType: c })
            : Promise.reject();
        });
      }
      var J = getApp();
      var Z = a("T9qh"),
        X = {};
      X = getApp();
      var Q = () => {
        k.default.$native.hideLoading();
      };
      class $ {
        constructor(e) {
          var t = this;
          (this.ctx = e.ctx),
            this.initProcesses(),
            this.initEvents(),
            this.initWatchs(),
            this.initCloudData(),
            this.ctx.env.getQueryAsync().then(function (e) {
              void 0 === e && (e = {}),
                t.initQuery(e),
                t.initWeappData(e),
                t.initCommon();
            });
        }
        beforePageCreate() {
          this.initLogger();
        }
        initLogger() {
          var e;
          null == (e = this.ctx.logger) ||
            e.setPageInitConfig({
              eventParams: { page_biz_version: "ranta_weapp" },
            });
        }
        initQuery(e) {
          var t;
          void 0 === e && (e = {});
          var { order_no: a, orderNo: r, request_no: o, dbid: i, phase: n } = e;
          if (
            ((this.query = {}),
            (a || r || o) && (t = a || r || o),
            n && (this.query.phase = n ? Number(n) : null),
            (this.query.kdtId = X.getKdtId()),
            i)
          ) {
            var s = X.db.get(i, !1) || {};
            (t = s.order_no),
              (this.query.queryDbid = i),
              s.phasePaymentStage && (this.query.phase = s.phasePaymentStage),
              (this.changeSubscribe = s.changeSubscribe);
          }
          (this.query.orderNo = t),
            (this.ctx.data.kdtId = this.query.kdtId),
            (this.ctx.data.orderNo = this.query.orderNo),
            (this.ctx.data.hasPaid = !1),
            (this.ctx.data.phasePaymentStage = this.query.phase);
        }
        initCommon() {
          var e, t;
          (null != (e = this.ctx.data) &&
            null != (t = e.payResult) &&
            t.isWholesaleOrder) ||
            ((this.ctx.data.requestExtraParams = "coupon"),
            (this.ctx.data.bizName = "pay_success"),
            (this.ctx.data.cpsConfigKey = "cps_goods_recommend_pay_success")),
            X.getShopInfo().then((e) => {
              null != e &&
                e.shop_name &&
                (this.ctx.data.navigationTitle = e.shop_name);
            }),
            (this.ctx.data.buyerId = X.getBuyerId()),
            (this.ctx.data.miniprogram = Z.a);
          (this.ctx.data.mpAccount = {}), (this.ctx.data.platformInfo = {});
        }
        setPayResultV2(e) {
          this.ctx.data.fetching = !1;
          var t = e.pageTemplate === L,
            a = e.pageTemplate === M,
            r = e.pageTemplate === F,
            o = "ALL_PAID" === e.payState && !a && !r;
          (this.ctx.data.hasPaid = o),
            t && setTimeout(() => this.ctx.event.emit("checkPay", !0), 0),
            (e.showError = a),
            (e.showOversale = r),
            (e.showWait = t),
            (function (e) {
              e.isScanBuyOrder = "online_scan_buy" === e.orderMark;
            })(e);
          var i = e.orderItems || [];
          delete e.orderItems, (this.ctx.data.orderItems = i);
          var n = i[0] || {},
            { goodsType: s } = n;
          (this.ctx.data.goodsType = s),
            (this.ctx.data.orderType = e.orderType),
            (this.ctx.data.payResult = e),
            (this.ctx.data.payWayStr = null == e ? void 0 : e.payWayStr),
            o && e.dialog && (this.ctx.data.showChangePriceDialog = !0);
        }
        initWeappData(e) {
          (this.ctx.data.fetching = !0),
            (this.ctx.data.changeSubscribe = this.changeSubscribe),
            (this.groupbuyShareData = {}),
            (this.showSolitaire = !1),
            (this.solitaireShareData = {}),
            k.default.$native.showLoading({ title: "加载中" }),
            this.fetchPayResult(),
            Object(P.b)(),
            getApp().on("ranta-paid-skyline", (e) => {
              this.ctx.data.isSkyline = e;
            }),
            X.logger &&
              X.logger.log({
                et: "display",
                ei: "enterpage",
                en: "浏览页面",
                pt: "paySuccess",
              });
        }
        onShareAppMessage(e) {
          var t,
            { dataset: a } = e.target || {},
            { detail: o = "" } = a || {},
            i = null,
            n = !0;
          if ("fission" === o)
            i =
              (null == (t = this.ctx.process.invoke("getFissionShare"))
                ? void 0
                : t[0]) || {};
          else if ("inSourcingCoupon" === o)
            i = this.ctx.process.invoke("getInSourcingCouponShare");
          else if (this.showSolitaire)
            (n = !1),
              (i = Object(r.a)({}, this.solitaireShareData, {
                title: this.solitaireShareData.activityName,
                imageUrl: this.solitaireShareData.shareImg,
              }));
          else if (this.ctx.data.payResult.isGroupBuy)
            i = this.groupbuyShareData;
          else {
            var s;
            (n = !1),
              (i = (function (e) {
                var t,
                  a,
                  { shareMessage: o = {}, orderItems: i = [], query: n } = e,
                  { title: s, desc: c, imgUrl: u } = o,
                  d = 0,
                  p = "",
                  l = "";
                return (
                  i.length > 1
                    ? ((d = 14), (p = "等，必须推荐给你"))
                    : ((d = 15), (p = "，必须推荐给你")),
                  (l =
                    (null == (t = i[0]) ? void 0 : t.title.length) > d
                      ? i[0].title.substr(0, d) + "...等" || !1
                      : (null == (a = i[0]) ? void 0 : a.title) || "一些东西"),
                  Object(r.a)({}, o, {
                    title: "我买了" + l + p || !1,
                    imageUrl: u,
                    path:
                      "/pages/common/blank-page/index?weappSharePath=" +
                      encodeURIComponent(
                        "/packages/order/share-page/index?order_no=" +
                          n.orderNo +
                          "&kdt_id=" +
                          n.kdtId +
                          "&is_share=1"
                      ),
                  })
                );
              })({
                shareMessage:
                  null == (s = this.ctx.data.payResult)
                    ? void 0
                    : s.shareMessage,
                orderItems: this.ctx.data.orderItems,
                query: this.query,
              }));
          }
          var c = i.loggerParams || {};
          this.ctx.logger.log({
            et: "click",
            ei: "share",
            en: "转发",
            params: Object(r.a)({ share_cmpt: "native_custom" }, c),
            si: X.getKdtId(),
          });
          var u = e.from,
            d = H[u],
            p = i.path || "/packages/home/dashboard/index",
            l = A.args.getAll(p),
            h = Object(r.a)({}, l, {
              is_share: 1,
              share_cmpt: d,
              shopAutoEnter: 1,
            });
          h.kdt_id = X.getKdtId() || "";
          var g = X.logger.getGlobal() || {},
            m = g.context || {},
            f = g.user || {};
          m.dc_ps && (h.dc_ps = m.dc_ps || ""),
            f.uuid && (h.from_uuid = f.uuid || ""),
            X.getShopInfoSync().isMultiStore &&
              (h.offlineId = X.getOfflineId());
          var b = (p = A.args.add(p, h));
          return (
            n &&
              (b =
                "/pages/common/blank-page/index?weappSharePath=" +
                encodeURIComponent(p)),
            Object(r.a)({}, i, {
              path: b,
              success: z("success"),
              fail: z("fail"),
            })
          );
        }
        fetchPayResult(e) {
          var t = this;
          return (
            void 0 === e && (e = !1),
            x.a.loading({ duration: 1e4 }),
            (function (e) {
              return Object(R.default)({
                path: "/wsctrade/order/payresult.json",
                data: Object(r.a)({}, e, { source: "weapp" }),
                config: { skipShopInfo: !0, skipKdtId: !0 },
              });
            })(q(this.ctx.data))
              .then((e) => {
                x.a.clear(), this.payResultSuccessHandler(e), this.ctx.inited();
              })
              .catch(function (e) {
                var { msg: a } = void 0 === e ? {} : e;
                return (
                  x.a.clear(),
                  t.ctx.inited(),
                  O.a
                    .confirm({
                      title: a || "未知异常",
                      showCancelButton: !1,
                      message: t.ctx.data.orderNo,
                    })
                    .then((e) => {
                      O.a.close();
                    })
                    .catch(() => {
                      O.a.close();
                    })
                );
              })
          );
        }
        payResultSuccessHandler(e) {
          var t;
          void 0 === e && (e = {});
          var {
            activityType: a,
            buttonGroup: r,
            needRedirect: o,
            redirectDTO: i,
            shareMessage: n,
            shopPayResult: s,
          } = e;
          if (
            (function (e) {
              return 401 == +e;
            })(a)
          ) {
            var c,
              u = (null == r || null == (c = r.DETAIL) ? void 0 : c.url) || "";
            return k.default.$native.redirectTo({
              url:
                "/pages/common/webview-page/index?src=" + encodeURIComponent(u),
            });
          }
          if (
            null != s &&
            null != (t = s.paymentMemberCard) &&
            t.cardAlias &&
            o &&
            i.webPageRedirectUrl
          )
            return k.default.navigate({
              url:
                "/pages/common/webview-page/index?src=" +
                encodeURIComponent(i.webPageRedirectUrl),
              type: "redirectTo",
            });
          var d = (function (e, t, a) {
            var r = "";
            if (e.indexOf("success") < 0 && (t === G || t === B)) {
              r = A.args.add("/packages/paid/pay-result/success/index", a);
            } else if (e.indexOf("auction") < 0 && t === V) {
              r = A.args.add("/packages/paid/pay-result/auction/index", a);
            }
            return r;
          })(this.ctx.env.route, e.pageTemplate, this.query);
          if (d) return k.default.$native.redirectTo({ url: d });
          n && k.default.$native.showShareMenu(),
            delete e.shopCoupons,
            (e.shopCoupons = C()(e, "shopPayResult.shopCoupons", [])),
            delete e.shopPayResult,
            e.pageTemplate !== L && Q(),
            this.setPayResultV2(e);
        }
        fetchWaitBuyList() {
          var e = X.storage.get("waitBuyGoodsIds");
          e &&
            Y({ waitBuyGoodsIds: e })
              .then((e) => {
                var { goodsList: t, expressType: a } = e;
                t &&
                  t.length &&
                  (this.ctx.data.waitBuyDialog = {
                    show: !0,
                    goodsList: t,
                    expressType: a,
                  });
              })
              .catch(() => {});
        }
        setPayResult(e) {
          void 0 === e && (e = {}),
            (e.simpleStyle =
              (function (e) {
                var { shopCoupons: t, isShowRecommendGoods: a } = e,
                  r =
                    e.paidPromotion &&
                    K.indexOf(e.paidPromotion.promotionType) > -1,
                  o = t && t.quantity > 0,
                  i = !1,
                  n =
                    e.wxSubscribeScenesList &&
                    e.wxSubscribeScenesList.length > 0 &&
                    k.default.$native.canIUse("requestSubscribeMessage");
                return (
                  r || o || a || n || (i = !0),
                  J.trigger("ranta-paid-page", i),
                  i
                );
              })(e) && !this.ctx.data.canUseTradeUmpV1);
        }
        checkPay(e) {
          var t = q(this.ctx.data);
          this.ctx.data.isRefreshing = !0;
          var a = this.fetchPayResult.bind(this),
            r = [...new Array(4).fill(1e3), ...new Array(4).fill(2e3)],
            o = 0;
          (function i() {
            if (e && o >= r.length)
              return Q(), void (this.ctx.data.isRefreshing = !1);
            var n;
            ((n = t),
            Object(R.default)({
              path: "/wsctrade/order/payresult/checkPay.json",
              data: n,
            }))
              .then((t) => {
                null != t && t.allOrderPaid
                  ? (a(), (this.ctx.data.isRefreshing = !1))
                  : e
                  ? setTimeout(i.bind(this), r[o++])
                  : (Q(), (this.ctx.data.isRefreshing = !1));
              })
              .catch(() => {
                e
                  ? setTimeout(i.bind(this), r[o++])
                  : (Q(), (this.ctx.data.isRefreshing = !1));
              });
          }).bind(this)();
        }
        initWatchs() {
          Object(T.b)(this, [
            "solitaireShareData",
            "showSolitaire",
            "groupbuyShareData",
          ]);
        }
        initEvents() {
          Object(T.d)(this, {
            checkPay: (e) => {
              this.checkPay(e);
            },
          });
        }
        initProcesses() {
          this.ctx.process.define(
            "beforeGoToUrl",
            (e) =>
              new Promise((t, a) => {
                this.ctx.cloud
                  .invoke("beforeGoToUrlV1", e)
                  .then((e) => {
                    var a = !(null == e || !e.length);
                    t({ hasBindingByCloud: a });
                  })
                  .catch((e) => {
                    a(e);
                  });
              })
          );
        }
        pageDestroyed() {
          this.query.queryDbid && X.db.delete(this.query.queryDbid);
        }
        initCloudData() {}
      }
      $.widgets = { Main: U.a };
      var ee = a("j6nr"),
        te = a.n(ee);
      class ae {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      ae.widgets = { PaidState: te.a };
      var re = a("lFLV"),
        oe = a.n(re),
        ie = a("+Fbk"),
        ne = a.n(ie),
        se = a("eaQp"),
        ce = a("YAk7"),
        ue = a("enZZ");
      class de {
        constructor(e) {
          (this.ctx = e.ctx),
            (this.kdtIdUnwatch = this.ctx.watch("kdtId", (e) => {
              (this.kdtId = e),
                (this.checkTradeUmpV1Promise = Object(se.b)({ kdtId: e }).catch(
                  () => !1
                )),
                this.init();
            })),
            (this.orderNoUnwatch = this.ctx.watch("orderNo", (e) => {
              (this.orderNo = e), this.init();
            })),
            (this.hasPaidUnwatch = this.ctx.watch("hasPaid", (e) => {
              (this.hasPaid = e), this.init();
            })),
            (this.isWxReceiptUnwatch = this.ctx.watch("isWxReceipt", (e) => {
              (this.isWxReceipt = e), this.init();
            }));
        }
        init() {
          !this.fetchedUmp &&
            this.orderNo &&
            (this.isWxReceipt || this.hasPaid) &&
            this.checkTradeUmpV1Promise &&
            (this.getAwardInfo(), (this.fetchedUmp = !0));
        }
        getAwardInfo() {
          return this.checkTradeUmpV1Promise.then((e) => {
            (this.ctx.data.canUseTradeUmpV1 = e),
              e
                ? Object(se.c)({
                    orderNo: this.orderNo,
                    kdtId: this.kdtId,
                    allowNoRecommendItem: !0,
                  })
                    .then((e) => {
                      var t;
                      this.ctx.data.newAwardInfo = e;
                      var { paidPromotionInfoList: a = [] } = e,
                        r = null != (t = a[0]) ? t : {},
                        {
                          promotionType: o,
                          title: i,
                          activityId: n,
                          presents: s,
                        } = r;
                      (this.paidPromotion = {
                        type: ce.j[o],
                        title: i,
                        paidPromotionId: n,
                        present: Object(ue.b)(s),
                      }),
                        this.ctx.inited();
                    })
                    .catch((e) => {
                      var { msg: t } = e;
                      return (
                        (this.ctx.data.newAwardInfo = {}),
                        this.ctx.inited(),
                        O.a
                          .confirm({
                            title: t || "营销权益请求失败",
                            showCancelButton: !1,
                            message: this.orderNo,
                          })
                          .then(() => {
                            O.a.close();
                          })
                          .catch(() => {
                            O.a.close();
                          })
                      );
                    })
                : ((this.ctx.data.newAwardInfo = {}), this.ctx.inited());
          });
        }
        pageDestroyed() {
          var e, t;
          null == (e = this.orderNoUnwatch) || e.call(this),
            null == (t = this.kdtIdUnwatch) || t.call(this);
        }
      }
      de.widgets = { Main: ne.a, PaidPromotionBanner: oe.a };
      var pe = a("1zPG"),
        le = a.n(pe),
        he = a("+nkf"),
        ge = a.n(he),
        me = a("h1Aa"),
        fe = a.n(me),
        be = a("co1a"),
        ye = a.n(be),
        ve = a("so+4"),
        we = a.n(ve),
        Se = a("6Wda"),
        _e = a.n(Se),
        Ie = a("b8uv"),
        ke = a.n(Ie),
        xe = a("tGD6"),
        Oe = a.n(xe),
        Pe = a("esew"),
        Ae = a.n(Pe),
        Te = a("TCh+"),
        De = a.n(Te),
        Ce = a("2bgu"),
        Ee = a("VmHG"),
        Ue = a("p00h");
      var je = 401,
        Re = 402;
      var Ne = a("cWxX"),
        Ge = a.n(Ne),
        Be = a("jQ93"),
        Le = {
          getState: function (e) {
            return {};
          },
          getters: {},
          getActions: function (e) {
            return {
              fetchYouzanFollowWhiteList() {},
              processPaidAction(t) {
                var { type: a, btnBizType: r = Ue.a.DEFAULT, url: o } = t;
                a === Ue.b.BUY_AGAIN ||
                  a === Ue.b.DIRECT_BUY_AGAIN ||
                  (a === Ue.b.DETAIL
                    ? (e.logger.log({
                        et: "click",
                        ei: "click_button_chakandingdan",
                        en: "“查看订单”按钮点击",
                        si: this.kdtId,
                      }),
                      e.event.emit("gotoOrderDetail"))
                    : a === Ue.b.SUBSCRIPTION
                    ? (e.logger.log({
                        et: "click",
                        ei: "click_button_wuliu",
                        en: "“订阅物流”按钮点击",
                        si: this.kdtId,
                      }),
                      e.event.emit("showSubscriptionDialog"))
                    : a === Ue.b.PICK_UP_CODE
                    ? r === Ue.a.DEFAULT && e.event.emit("showSelfFetchDialog")
                    : a === Ue.b.CARD_VOUCHER
                    ? e.event.emit("showVoucherCardDialog")
                    : a === Ue.b.SHARE
                    ? r === Ue.a.DEFAULT && e.event.emit("showTradeShareDialog")
                    : a === Ue.b.TAKE_GOODS_CODE
                    ? e.event.emit("showTakeGoodsDialog")
                    : [
                        Ue.b.GIVE_AWAY,
                        Ue.b.EXHIBITION_RESERVE_SHARE,
                        Ue.b.CARD_VOUCHER_EXHIBITION_DETAIL,
                      ].includes(a) ||
                      (a === Ue.b.PURCHASE_TAKE
                        ? e.event.emit("gotoIndentorShipment")
                        : a === Ue.b.PURCHASE_CENTER &&
                          e.event.emit("gotoIndentorCenter")));
              },
              getSourceBtnMap() {
                var { buttonGroup: e = {}, isGroupBuy: t } = this.payResult,
                  a = Object(Be.a)(e);
                return (
                  t && (a = Ue.e), this.hasPaid || delete a.SUBSCRIPTION, a
                );
              },
              filterBtns() {
                var e = Ue.h.slice(),
                  t = k.default.getAppOptions();
                return (
                  t &&
                    [1177, 1175, 1195].includes(t.scene) &&
                    (e = e.filter((e) => e !== Ue.b.SHARE)),
                  this.hidePickUpCodeBtn &&
                    (e = e.filter((e) => "PICK_UP_CODE" !== e)),
                  e
                );
              },
              updateBtnList() {
                var t = this,
                  {
                    isGroupBuy: a,
                    isScanBuyOrder: o,
                    orderTags: i = {},
                  } = this.payResult,
                  n = this.getSourceBtnMap(),
                  s = this.filterBtns()
                    .filter((e) => !!n[e])
                    .map((e, t, s) => {
                      var c,
                        u,
                        d,
                        p,
                        l,
                        h,
                        g,
                        m,
                        f =
                          ((u = e),
                          (d = (c = s)[0]),
                          (p = [
                            "CARD_VOUCHER",
                            "GIVE_AWAY",
                            "SUBSCRIPTION",
                            "PICK_UP_CODE",
                            Ue.b.TAKE_GOODS_CODE,
                            Ue.b.PURCHASE_TAKE,
                            Ue.b.CARD_VOUCHER_EXHIBITION_DETAIL,
                          ]),
                          (l = -1 !== p.indexOf(u)),
                          (h = d && d.type === u),
                          (g = 1 === c.length),
                          (m = p.some((e) => c.indexOf(e) > -1)),
                          l || h || g || ("DETAIL" === u && !m)
                            ? Ue.c.primary
                            : Ue.c.default),
                        b = a
                          ? Ue.a.GROUPBUY
                          : i.SOLITAIRE_BUY
                          ? Ue.a.SOLITAIRE_BUY
                          : Ue.a.DEFAULT,
                        y = n[e],
                        v =
                          Ue.b.PICK_UP_CODE === y.type && o
                            ? "查看核销码"
                            : y.defaultText;
                      return Object(r.a)({}, y, {
                        defaultText: v,
                        block: f === Ue.c.primary,
                        btnBizType: b,
                        className: f,
                      });
                    }),
                  c = Array.from(
                    new Set(
                      s.map((e) => {
                        var { type: t } = e;
                        return t === Ue.b.DIRECT_BUY_AGAIN
                          ? Ue.b.BUY_AGAIN.toLocaleLowerCase()
                          : t.toLocaleLowerCase();
                      })
                    )
                  );
                e.cloud
                  .invoke("beforeDisableOrderPaidBtns", { btns: c })
                  .then(function (e) {
                    var { disableBtns: a = [] } = void 0 === e ? {} : e;
                    t.btnList = s.filter(
                      (e) => (
                        a.includes("buyAgain") && a.push("directBuyAgain"),
                        !a.includes(Ge()(e.type.toLocaleLowerCase()))
                      )
                    );
                  })
                  .catch((e) => {
                    this.btnList = s;
                  });
              },
            };
          },
        },
        Me = [
          {
            state: {
              kdtId: 0,
              orderNo: "",
              orderItems: [],
              payResult: {},
              hasPaid: !1,
              mpData: {},
              isHideYouzanFollow: !1,
              hidePickUpCodeBtn: !1,
              btnList: [],
            },
            getters: {},
            actions: {},
          },
          Le,
        ].reduce((e, t) => {
          return (
            void 0 === (a = e) && (a = {}),
            void 0 === (o = t) && (o = {}),
            {
              state: Object(r.a)({}, a.state, o.state),
              getters: Object(r.a)({}, a.getters, o.getters),
              actions: Object(r.a)({}, a.actions, o.actions),
            }
          );
          var a, o;
        }, {});
      class Fe {
        constructor(e) {
          var t;
          (this.ctx = e.ctx),
            (this.store =
              ((t = this.ctx),
              Object(Ee.a)({
                state: () => Object(r.a)({}, Me.state, Le.getState(t)),
                getters: Object(r.a)({}, Me.getters),
                actions: Object(r.a)({}, Me.actions, Le.getActions(t)),
              }))),
            (this.ctx.data.disableAutoPopup = !1),
            Object(Ee.c)(this, [
              "kdtId",
              "orderNo",
              "orderItems",
              "payResult",
              "hasPaid",
              "mpData",
              "hidePickUpCodeBtn",
            ]),
            this.initEvent();
        }
        beforePageMount() {
          this.store.watch(
            "payResult",
            () => {
              this.store.updateBtnList();
            },
            { immediate: !0 }
          );
        }
        initEvent() {
          Object(T.d)(this, {
            gotoOrderDetail: () => this.goOrderDetail(),
            gotoIndentorCenter: () => this.gotoIndentorCenter(),
            gotoIndentorShipment: () => this.gotoIndentorShipment(),
            disableAutoPopup: () => this.disableAutoPopup(),
          });
        }
        goOrderDetail() {
          var { payResult: e = {} } = this.ctx.data,
            { buttonGroup: t = {} } = e,
            a = t.DETAIL.url,
            { orderNo: r } = this.ctx.data,
            { isVOrder: o, orderItems: i, isGroupBuy: n, activityType: s } = e,
            c = (i && i[0]) || {},
            { goodsType: u, goodsId: d } = c,
            p = "/packages/trade/order/result/index?orderNo=" + r;
          +u === Ue.d.MEMBER_CARD
            ? (p =
                "/packages/card/detail/index?goods_id=" +
                d +
                "&orderNo=" +
                r +
                "&guideDialogType=success")
            : o
            ? (p = "/packages/trade/order/list/index")
            : 206 == +u
            ? (p =
                "/packages/trade/order/unicashier-result/index?order_no=" + r)
            : n
            ? (p =
                "/packages/groupbuying/buyer-trade/detail/index?orderNo=" +
                r +
                "&isPay=true")
            : (function (e) {
                return +e === je || +e === Re;
              })(s) &&
              (p =
                "/pages/common/webview-page/index?src=" +
                encodeURIComponent(a || "")),
            k.default.$native.redirectTo({ url: p });
        }
        disableAutoPopup() {
          (this.ctx.data.disableAutoPopup = !0),
            this.ctx.event.emit("hideSubscriptionDialog"),
            this.ctx.event.emit("hideSelfFetchDialog"),
            this.ctx.event.emit("hideVoucherCardDialog");
        }
        gotoIndentorCenter() {
          var { payResult: e = {} } = this.ctx.data,
            { buttonGroup: t = {} } = e,
            { url: a } = t.PURCHASE_CENTER;
          Object(Ce.b)({ url: a });
        }
        gotoIndentorShipment() {
          var { payResult: e = {} } = this.ctx.data,
            { buttonGroup: t = {} } = e,
            { url: a } = t.PURCHASE_TAKE;
          Object(Ce.b)({ url: a });
        }
      }
      Fe.widgets = {
        PaidAction: le.a,
        WishMsgPopup: ge.a,
        SelfFetchDialog: ye.a,
        VoucherCardDialog: we.a,
        SubscriptionDialog: fe.a,
        PaidSubscriptionMsg: _e.a,
        ActivateBenefitcardDialog: ke.a,
        TakeGoodsDialog: Oe.a,
        TakeGoodsContent: Ae.a,
        SelfFetchContent: De.a,
      };
      var Ve = a("7IL2"),
        He = a.n(Ve);
      class Ke {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      Ke.widgets = { TradeShareDialog: He.a };
      var qe = a("7ayS"),
        ze = a("V6MD"),
        We = a.n(ze),
        Ye = a("FHwR"),
        Je = a.n(Ye),
        Ze = a("72lf");
      class Xe {
        constructor(e) {
          (this.isFxZppOrder = !1),
            (this.isWxReceipt = !1),
            (this.canUseTradeUmpV1 = !1),
            (this.ctx = e.ctx),
            this.initWatch(),
            Object(T.e)(this, {
              getInSourcingCouponShare: () => {
                var e = Object(Ze.a)(this.ctx.data.payResult);
                return Object(Ze.b)(e);
              },
            });
        }
        initWatch() {
          Object(T.b)(this, {
            isWxReceipt: (e) => {
              (this.isWxReceipt = e), this.setShowExtHolder();
            },
            canUseTradeUmpV1: (e) => {
              (this.canUseTradeUmpV1 = e), this.setShowExtHolder();
            },
            payResult: (e) => {
              (this.isFxZppOrder = C()(e, "isFxZppOrder", !1)),
                this.setShowExtHolder();
            },
          });
        }
        setShowExtHolder() {
          this.ctx.data.showExtHolder = !(
            this.isFxZppOrder ||
            (this.isWxReceipt && this.canUseTradeUmpV1)
          );
        }
      }
      Xe.widgets = { Main: We.a, FlowChangeUmp: Je.a };
      var Qe = a("odZP"),
        $e = a.n(Qe);
      class et {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      et.widgets = { PaidSuccessFissionCouponDialog: $e.a };
      var tt = a("BrjA"),
        at = a.n(tt),
        rt = a("l9Wl"),
        ot = a.n(rt);
      class it {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      it.widgets = { PaidSuccessAutoSendCouponDialog: at.a, CanUseGoods: ot.a };
      var nt = a("VxJ8"),
        st = a.n(nt),
        ct = a("1Qx0"),
        ut = a.n(ct),
        dt = a("KQab"),
        pt = a.n(dt);
      class lt {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      lt.widgets = {
        GroupbuyShareDialog: st.a,
        GroupbuyShareButton: ut.a,
        GroupbuyContinueButton: pt.a,
      };
      var ht = a("nEQ+"),
        gt = a.n(ht);
      class mt {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      mt.widgets = { Main: gt.a };
      var ft = a("hDMN"),
        bt = a("LFj3"),
        yt = a.n(bt),
        vt = a("gXK8"),
        wt = a.n(vt),
        St = a("/RUn"),
        _t = a.n(St),
        It = a("nV4e"),
        kt = a.n(It);
      class xt {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      xt.widgets = {
        FissionCouponUmp: wt.a,
        GuideCouponBlock: _t.a,
        BigdataCoupon: kt.a,
        InSourcingCouponUmp: yt.a,
      };
      var Ot = a("Y5MW"),
        Pt = a.n(Ot);
      class At {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      At.widgets = { PriorUseDialog: Pt.a };
      var Tt = a("XZHF"),
        Dt = a.n(Tt),
        Ct = a("hh6c"),
        Et = a.n(Ct);
      class Ut {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      Ut.widgets = { SolitaireDialog: Dt.a, SolitaireShareButton: Et.a };
      var jt = a("Ofgh"),
        Rt = a.n(jt),
        Nt = a("pGRy"),
        Gt = a.n(Nt),
        Bt = a("pMxb"),
        Lt = a.n(Bt);
      class Mt {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      Mt.widgets = {
        GroupbuySelfFetchDialog: Rt.a,
        GroupbuySelfFetchButton: Gt.a,
        LongClickSaveImage: Lt.a,
      };
      var Ft = a("L1+4"),
        Vt = a.n(Ft);
      class Ht {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      Ht.widgets = { SalesmanPayResultInfo: Vt.a };
      var Kt = a("otiX"),
        qt = a.n(Kt);
      class zt {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      zt.widgets = { PaidSubsidyDialog: qt.a };
      var Wt = a("Ujw3"),
        Yt = a.n(Wt),
        Jt = a("mKXl"),
        Zt = a.n(Jt);
      class Xt {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      Xt.widgets = { Main: Yt.a, AdImage: Zt.a };
      var Qt = a("/pw/"),
        $t = a("2Pst"),
        ea = a("bIWf"),
        ta = a("Pivv"),
        aa = a.n(ta);
      class ra {}
      ra.widgets = { Main: aa.a };
      var oa = a("Bg1o"),
        ia = a.n(oa);
      class na {}
      na.widgets = { Main: ia.a };
      var sa = a("WEzT"),
        ca = a.n(sa);
      class ua {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      ua.widgets = { Main: ca.a };
      var da = a("rLrQ"),
        pa = a("1pi8"),
        la = a.n(pa),
        ha = a("ht8f"),
        ga = a.n(ha);
      class ma {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      ma.widgets = { Main: la.a, NavigationBar: ga.a };
      var fa = a("qnge"),
        ba = {
          config: I,
          builtinBundle: {
            "@wsc-tee-trade/paid-page-setup": $,
            "@wsc-tee-trade/paid-state": ae,
            "@ext-tee-wsc-ump/paid-award-v2-block": de,
            "@wsc-tee-trade/paid-action": Fe,
            "@wsc-tee-trade/paid-trade-share-dialog": Ke,
            "@wsc-tee-statcenter/cps-recommend-goods": qe.a,
            "@wsc-tee-trade/paid-ext-holder": Xe,
            "@ext-tee-wsc-ump/paid-success-fission-coupon-dialog": et,
            "@ext-tee-wsc-ump/paid-success-auto-send-coupon-dialog": it,
            "@retail-tee-group/groupbuy-share-dialog": lt,
            "@ext-tee-wsc-ump/paid-award-block": mt,
            "@wsc-tee-statcenter/recommend-goods": ft.a,
            "@ext-tee-wsc-ump/paid-coupon-block": xt,
            "@assets-tee-extensions/prior-use-dialog": At,
            "@retail-tee-solitaire/solitaire-dialog": Ut,
            "@wsc-tee-trade/order-paid-groupbuy-self-fetch-dialog": Mt,
            "@wsc-tee-salesman/salesman-pay-result-block": Ht,
            "@ext-tee-wsc-ump/paid-subsidy-dialog": zt,
            "@wsc-tee-decorate/shop-ad": Xt,
            "@wsc-tee-decorate/jump-link": Qt.a,
            "@ext-tee-wsc-im/im-message-contact": $t.a,
            "@ext-tee-wsc-im/subscription-message": ea.a,
            "@wsc-tee-trade/paid-cps-goods-recommend-block": ra,
            "@wsc-tee-trade/paid-recommend-block": na,
            "@ext-tee-wsc-trade/paid-block-container": ua,
            "@ext-tee-wsc-decorate/page-style": da.a,
            "@wsc-tee-decorate/navigation-bar": ma,
            "@wsc-tee-shop/footer": fa.a,
          },
        },
        ya = k.default.getGlobal("ranta-app-runtime"),
        va = ya.getPageOptions({
          rantaOptions: Object(r.a)(
            { page: "/packages/paid/pay-result/success/index" },
            ba
          ),
          pageRuntimeName: "aWrDjnqdPEch",
          frameworkAppRuntime: ya,
          tee: k.default,
          usedLifecycles: [
            "beforePageMount",
            "beforePageCreate",
            "onShareAppMessage",
            "pageDestroyed",
          ],
        });
      k.default.page({
        mixins: [
          va,
          {
            data: () => ({
              isSimpleStyle: !1,
              bgColor: "#f9f9f9",
              isSkyline: !1,
            }),
            beforeMount() {
              var e = getApp();
              (this.isSkyline = "skyline" === this._$native.renderer),
                e.on("ranta-paid-page", (e) => {
                  e && ((this.isSimpleStyle = !0), (this.bgColor = "#fff"));
                });
            },
            mounted() {
              getApp().trigger("ranta-paid-skyline", this.isSkyline);
            },
          },
        ],
      });
    },
    "Pp//": function (e, t, a) {
      a("AGZf");
      t.a = function (e) {
        var t = e.title,
          a = e.icon,
          r = void 0 === a ? "none" : a,
          o = e.duration,
          i = void 0 === o ? 1500 : o;
        wx.showToast({ title: t, icon: r, duration: i });
      };
    },
    R5NK: function (e, t, a) {},
    SvqE: function (e, t) {
      e.exports = {
        d: "payResult;4;themeCSS;4;themeColors;4;orderNo;4",
        e: "showPriorUseDialog;closeAutoOpenPopup",
        el: "showPriorUseDialog",
        w: "PriorUseDialog",
        wd: "PriorUseDialog",
      };
    },
    T9qh: function (e, t, a) {
      var r,
        o,
        i = a("mK0O");
      function n(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? n(Object(a), !0).forEach(function (t) {
                Object(i.a)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : n(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      (r = { isWeixin: !0 }),
        (o = { isWeapp: !0 }),
        (t.a = s(s(s({}, r), o), {}, {}));
    },
    TWa4: function (e, t, a) {
      a.d(t, "a", function () {
        return o;
      });
      var r = a("US/N"),
        o = (e) =>
          Object(r.default)({
            path: "/wscump/common/get-template.json",
            data: e,
            method: "GET",
          });
    },
    U2jx: function (e, t) {
      e.exports = {
        d: "kdtId;4;hasPaid;4;orderNo;4;payResult;4;themeColors;4;canUseTradeUmpV1;4;isWxReceipt;4",
        wc: "SalesmanPayResultInfo",
        wd: "Main",
        pi: "navigateTo;logger;beforeGoToUrl",
      };
    },
    Ux6k: function (e, t, a) {
      a.d(t, "b", function () {
        return o;
      }),
        a.d(t, "a", function () {
          return i;
        });
      var r = a("US/N"),
        o = (e) => {
          var t = Date.now();
          return Object(r.default)({
            path: "/wscshop/shopad/current-ad.json",
            data: { popPosition: e, noCacheFlag: t },
          });
        },
        i = (e) => {
          var t = Date.now();
          return Object(r.default)({
            path: "/wscshop/shopad/close.json",
            data: { adId: e, noCacheFlag: t },
          });
        };
    },
    XGSL: function (e, t, a) {
      a.d(t, "a", function () {
        return be;
      });
      var r = a("eijD"),
        o = a("Fcif"),
        i = a("hHpg"),
        n = a("KDJo"),
        s = a("DXKY"),
        c = a("WLNV"),
        u = (a("taYb"), a("2wjL")),
        d = a("YeA1"),
        { dmc: p } = Object(d.a)(),
        l = {
          cashier: "https://cashier.youzan.com",
          uic: "https://uic.youzan.com",
          carmen: "https://open.youzan.com",
          h5: "https://h5.youzan.com",
          h5m: "https://h5.m.youzan.com",
          trade: "https://trade.youzan.com",
          qiniu: "https://img01.yzcdn.cn",
          money: "https://money.youzan.com",
          guang: "https://g.youzan.com",
          baymax: "https://open.youzan.com/bifrost",
        },
        h = { origin: "carmen", pathname: "", query: {} };
      var g = function (e) {
          var t,
            a = ((e = Object(c.a)({}, h, e)).pathname || "").startsWith("/");
          return ((t = e.origin),
          p.domain.readDomain(t).then((e) => "https://" + e.domain))
            .then((t) => t || l[e.origin])
            .catch(() => l[e.origin])
            .then((t) => {
              var r = t + (a ? "" : "/") + e.pathname;
              return u.a.add(r, e.query);
            });
        },
        m = {},
        f = 1;
      var b = {
          set(e) {
            var t = "db_" + f++;
            return (m[t] = e), t;
          },
          delete(e) {
            delete m[e];
          },
          get(e, t) {
            void 0 === t && (t = !0);
            var a = m[e];
            return t && delete m[e], a;
          },
        },
        y = a("2ktG"),
        v = () => {},
        w = {},
        S = {
          globalData: { shopInfo: { isMultiStore: !1 } },
          db: b,
          carmen: function (e) {
            if (!(e = Q((e = Object(c.a)({}, q, e)))).api)
              throw new Error("Carmen 接口必须提供 api");
            return (
              (e.path = ("/api/oauthentry/" + e.api).replace("//", "/")), $(e)
            );
          },
          request: X,
          logger: { requestError: v, onError: v, getGlobal: v, appError: v },
          isSwitchTab: () => Promise.resolve(!1),
          updateYouzanUserInfo() {},
          getOfflineId() {
            var { shopInfo: e = {} } = w;
            return e.offlineId || 0;
          },
          getKdtId: () => w.kdtId || 0,
          getFansType: () => "",
          getSessionId() {
            var { token: e = {} } = w;
            return e.sessionId || "";
          },
          getShopConfigData: () =>
            new Promise((e) => {
              e({ show_buy_btn: !0, hide_shopping_cart: !1 });
            }),
          getShopInfo: () => Promise.resolve({}),
          getImData: () =>
            new Promise((e) => {
              e({});
            }),
          getUserInfo() {},
          getPointsName: () => Promise.resolve({ pointsName: "积分" }),
          getPoints: () => X({ path: "wscump/integral/user_points.json" }),
        };
      S.storage = Object(y.a)();
      var _ = function () {
          return getApp ? getApp() : S;
        },
        I = a("x5Yp"),
        k = {};
      function x(e) {
        try {
          return (
            Object(I.a)(k) &&
              wx.getExtConfigSync &&
              (k = wx.getExtConfigSync()),
            e ? k[e] : k
          );
        } catch (e) {
          return {};
        }
      }
      var O = a("aOlM"),
        P = a("3tyi"),
        A =
          (a("PZW/"),
          a("zMoS"),
          new (a("svh/").d)({
            state: {
              config: {
                grantType: "yz_union",
                weappType: "",
                version: x("userVersion"),
              },
              pluginData: {},
              token: {},
              shop: {
                kdtId: 0,
                im: null,
                nav: {},
                vip: null,
                base: null,
                store: null,
                config: null,
                copyright: {
                  isCustomized: !1,
                  logo: "https://img01.yzcdn.cn/weapp/wsc/jda6QN.png",
                },
                theme: {
                  themeClass: "th0",
                  isFantasy: !1,
                  themeFetched: !1,
                  type: 0,
                },
                isMultiStore: !1,
                autoEntryStore: 0,
                soldOutRecommend: !1,
                openHideStore: 0,
                multiStoreSwitch: !1,
                hideTopBar: 0,
                hasBase: !1,
                logo: "",
                shop_name: "",
                shop_type: 0,
                kdt_id: 0,
                service: {},
                security: {},
                wechat_sync_shopping_list: 0,
                isServiceDue: !1,
                virtualGoodsCannotWePay: !1,
                offlineId: 0,
                chainStoreInfo: {},
                shop_business_isopen: !0,
                suspend_message: "",
              },
              sceneData: {},
              userInfo: { poi: null },
            },
            mutations: {
              UPDATE_TOKEN(e, t) {
                e.token = t;
                var a = Object(P.a)(t, [
                  "avatar",
                  "gender",
                  "kdtId",
                  "mobile",
                  "openId",
                  "userId",
                  "yzUserId",
                  "nickName",
                  "fansType",
                  "viewTrack2",
                  "platformFansId",
                  "isDefaultAvatar",
                ]);
                (a.nickname = a.nickName), delete a.nickName, (e.userInfo = a);
              },
              UPDATE_CONFIG(e, t) {
                Object.assign(e.config, t),
                  e.config.appId &&
                    (function (e) {
                      void 0 === e && (e = {});
                      (W = Object(o.a)({}, W, e)), Object(H.setRequestDep)(W);
                    })({ appId: e.config.appId, version: e.config.version });
              },
              UPDATE_PLUGIN_DATA(e, t) {
                var { pluginData: a } = e;
                (a.pluginHostAppId = t.appId), (a.pluginHostOpenId = t.openId);
              },
              UPDATE_USER_INFO(e, t) {
                e.userInfo = Object(o.a)({}, e.userInfo, t, {
                  isDefaultAvatar: !1,
                });
              },
              UPDATE_SCENE_DATA(e, t) {
                e.sceneData = Object(o.a)({}, e.sceneData, t);
              },
              UPDATE_SHOP_DATA(e, t) {
                void 0 === t && (t = {}), (e.shop = Object(o.a)({}, e.shop, t));
              },
            },
          })),
        { state: T } = (a("Y28S"), A);
      function D(e) {
        return (
          !("" === (t = e) || null == t || "null" === t || "undefined" === t) &&
          /[^\s]+~[^\s]+/.test(e)
        );
        var t;
      }
      function C(e, t) {
        return (
          void 0 === t && (t = {}),
          u.a
            .add(e, t)
            .replace(/^http(s)?:\/\/[^/]*\//, "storage://")
            .replace(/access_token=([^&]*)/, "")
            .replace(/app_id=([^&]*)/, "")
        );
      }
      function E(e) {
        var t = getApp();
        if (t && t.logger) {
          var a = t.logger.getLogParams(),
            { user: r, context: o } = a,
            i = null == o ? void 0 : o.from_params;
          D(i) && (e.from_params = i),
            r.uuid && ((e.uuid = r.uuid), (e.ftime = r.ftime));
        }
      }
      var U = {
          inited: !1,
          cacheKeySet: new Set(),
          cacheKeyMap: Object.create(null),
          cacheStorage: {},
        },
        j = Object(O.a)(() => {
          wx.setStorage({
            key: "request-cache",
            data: { cacheKeyMap: U.cacheKeyMap, cacheStorage: U.cacheStorage },
          });
        }, 1e3),
        R = () => {
          if (!U.inited) {
            U.inited = !0;
            var e = Object.create(null);
            try {
              e = wx.getStorageSync("request-cache") || {};
            } catch (e) {}
            var { cacheKeyMap: t = {}, cacheStorage: a = {} } = e,
              r = +new Date() / 1e3;
            Object.keys(t).forEach((e) => {
              var o = t[e].expireTime - r;
              o > 0 && G(e, a[e], o);
            });
          }
        };
      function N(e) {
        U.cacheKeySet.delete(e),
          delete U.cacheKeyMap[e],
          delete U.cacheStorage[e];
      }
      function G(e, t, a) {
        void 0 === a && (a = 86400);
        var r = +new Date() / 1e3;
        U.cacheKeySet.add(e),
          (U.cacheKeyMap[e] = { key: e, createTime: r, expireTime: r + a }),
          (U.cacheStorage[e] = t);
      }
      function B(e, t) {
        var { url: a, data: r } = e;
        void 0 === t && (t = null), R();
        var o = C(a, r);
        if (U.cacheKeySet.has(o)) {
          var i = +new Date() / 1e3,
            n = U.cacheStorage[o];
          if (n) {
            if ("number" == typeof t && i < U.cacheKeyMap[o].createTime + t)
              return L(n);
            if ("number" != typeof t && i < U.cacheKeyMap[o].expireTime)
              return L(n);
          }
          N(o);
        }
        return null;
      }
      function L(e) {
        return "object" == typeof e ? JSON.parse(JSON.stringify(e)) : e;
      }
      var M = a("Oq22"),
        F = a("Qzzd"),
        V = {
          init: () => V,
          mark: M.a,
          setEnv: F.c,
          setExtra: F.d,
          addTrack: () => {},
          capture: F.b,
          captureEvent: () => {},
          captureXhr: () => {},
          addProcessor: () => 0,
          removeProcessor: () => {},
          addFilter: () => 0,
          removeFilter: () => {},
          addCaptor: () => 0,
          removeCaptor: () => {},
          setPageGroup: () => {},
          setOptions: F.e,
          markRendered: () => {},
        },
        H = a("US/N"),
        K = { config: {}, method: "GET", header: {} },
        q = {
          origin: "carmen",
          header: { "content-type": "application/x-www-form-urlencoded" },
        },
        z = { origin: "h5", header: { "content-type": "application/json" } },
        W = {
          appId: "",
          version: "",
          kdtId: "",
          offlineId: "",
          accessToken: "",
          sessionId: "",
          hasShop: !1,
          hasToken: !1,
        },
        Y = [],
        J = [],
        Z = [];
      function X(e) {
        return $((e = Object(c.a)({}, z, e)));
      }
      function Q(e) {
        void 0 === e && (e = {});
        var t = (t) =>
            Object(o.a)({}, e, {
              query: Object(o.a)({}, e.query, { retail_source: t }),
            }),
          a = (_() || {}).globalData || {},
          r = x("userVersion");
        switch (a.scene) {
          case 1:
            return t("MINAPP-SCAN-" + (r = r || "3.8.0"));
          case 2:
            return t("MINAPP-FREE-" + (r = r || "3.12.0"));
          case 3:
            return t("MINAPP-SHELF-" + (r = r || "1.0.0"));
          default:
            return e;
        }
      }
      function $(e) {
        return (
          (e = Object(c.a)({}, K, e)),
          new Promise((t, a) => {
            var { success: r, fail: o, complete: i } = e;
            (e.success = (e) => {
              try {
                r ? r(e) && t(e) : t(e), i && i(e);
              } catch (e) {}
            }),
              (e.fail = (e) => {
                o ? o(e) && a(e) : a(e), i && i(e);
              }),
              ae(e.config, () =>
                (function (e) {
                  return te.apply(this, arguments);
                })(e)
              );
          })
        );
      }
      function ee(e) {
        return (t, a) =>
          new Promise((t, a) => {
            var r = _(),
              i = r && r.globalData && r.globalData.enableHttp2;
            wx.request(
              Object(o.a)({}, e, {
                success: (e) => t(e),
                fail: (e) => a(e),
                enableHttp2: i,
                complete: (t) => {
                  try {
                    V.captureXhr({
                      statusCode: t.statusCode || 0,
                      method: e.method,
                      url: e.url,
                      params: e.data,
                    });
                  } catch (e) {
                    var a = _();
                    a.logger &&
                      a.logger.appError({
                        name: "hummer_sdk_error",
                        message: e.message,
                        detail: {},
                      });
                  }
                },
              })
            );
          })
            .catch(
              (function (e, t, a) {
                return (t) => {
                  var r = t.res || t.message || t || {},
                    o = ("carmen" === e.origin ? r.error_response : r) || {};
                  if (
                    (s.a.trigger("request:api:fail", {
                      requestOptions: e,
                      response: o,
                    }),
                    a)
                  ) {
                    var i =
                      o.errMsg ||
                      o.msg ||
                      o.message ||
                      "接口调用失败，请稍后重试";
                    e.fail({ code: o.code || -9999, msg: i, res: o });
                  }
                  return Promise.reject("请求失败");
                };
              })(e, 0, a)
            )
            .then(
              (function (e, t, a) {
                return (r) => {
                  var i = (function (e, t) {
                      var a = t;
                      if ("string" === e.dataType && "string" == typeof t)
                        try {
                          a = JSON.parse(t);
                        } catch (e) {
                          var r = t
                            .toString()
                            .replace(
                              /[\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                              ""
                            );
                          try {
                            a = JSON.parse(r);
                          } catch (e) {}
                        }
                      return a;
                    })(e, r.data),
                    n = {
                      code: r.code || -9999,
                      msg: r.errMsg || r.msg || "服务器请求失败，请稍后重试",
                      res: i,
                    };
                  if (200 !== r.statusCode)
                    return (
                      s.a.trigger("request:server:fail", {
                        requestOptions: e,
                        response: r,
                      }),
                      a && e.fail(n),
                      Promise.reject(n)
                    );
                  r = i;
                  var c = "carmen" === e.origin,
                    u = "baymax" === e.origin;
                  if (
                    (function (e) {
                      void 0 === e && (e = {});
                      var t = 0 === e.code,
                        a = !0 === e.success;
                      return (
                        (void 0 !== e.response && !e.error_response) || t || a
                      );
                    })(r)
                  ) {
                    var d = c ? r.response : r.data;
                    "object" != typeof d && (d = { value: d }),
                      t &&
                        (function (e, t) {
                          var { url: a, data: r, expire: o = 86400 } = e;
                          R();
                          var i = C(a, r);
                          if (U.cacheKeySet.size > 25) {
                            var n = [...U.cacheKeySet].map(
                              (e) => U.cacheKeyMap[e]
                            );
                            n.sort((e, t) => e.expireTime - t.expireTime);
                            for (
                              var s = U.cacheKeySet.size - 25,
                                c = +new Date() / 1e3,
                                u = 0;
                              u < n.length;
                              u += 1
                            ) {
                              var d = n[u];
                              if ((N(d.key), u > s && d.expireTime > c)) break;
                            }
                          }
                          G(i, L(t), o), j();
                        })(
                          Object(o.a)({}, e, {
                            expire: e._options.config.expire,
                          }),
                          d
                        );
                    try {
                      a && e.success(d);
                    } catch (t) {
                      s.a.trigger("request:business:fail", {
                        requestOptions: e,
                        response: r,
                        error: t,
                      });
                    }
                    return d;
                  }
                  return (
                    c && (r = r.error_response),
                    u &&
                      (r.gw_err_resp
                        ? (((r = r.gw_err_resp).code = r.err_code),
                          (r.msg = r.err_msg))
                        : (r.msg = r.message)),
                    -1 === r.code ||
                    ((40010 === r.code || 40009 === r.code) && c) ||
                    4205 === r.code
                      ? new Promise((r, o) => {
                          function i() {
                            a && e.fail(n), o();
                          }
                          function c() {
                            s.a.off("auth:token:fail", i),
                              oe(e._options).then((o) => {
                                var i = ee((e = o));
                                r(i(t, a));
                              });
                          }
                          if (
                            (s.a.once("auth:token:fail", i),
                            W.hasToken && e.requestTime < W.tokenTime)
                          )
                            return ae(e._options.config, c);
                          W.hasToken &&
                            (s.a.trigger("auth:login"),
                            (W.hasKdtId = !1),
                            (W.hasToken = !1),
                            (W.hasShop = !1)),
                            ae(e._options.config, c);
                        }).catch((e) => {})
                      : (s.a.trigger("request:code:fail", {
                          requestOptions: e,
                          response: r,
                        }),
                        (n.code = r.code),
                        (n.msg = r.msg),
                        a && e.fail(n),
                        Promise.reject(n))
                  );
                };
              })(e, t, a)
            );
      }
      function te() {
        return (te = Object(r.a)(function* (e) {
          void 0 === e && (e = {});
          var t = yield oe(e),
            { success: a } = e,
            r = ee(t);
          if ((e.config || (e.config = {}), e.config.cache)) {
            var i = B(t, e.config.expire);
            if (t.method && "GET" !== t.method) return r(!1, !0);
            if (e.config.forceRefreshCache || !i) return r(!0, !0);
            if ((i && (i.fromCache = !0), e.config.needRefresh && i))
              return a(
                Object(o.a)({}, i, {
                  cacheData: { refresh: !0, refreshPromise: r(!0, !1) },
                })
              );
            a(i);
          } else r(!1, !0);
        })).apply(this, arguments);
      }
      function ae(e, t) {
        var a = () => {
            if (!e.skipKdtId && !W.hasKdtId) return re(J, t, e);
            t();
          },
          r = () => {
            if (!e.skipShopInfo && !W.hasShop) return re(Z, a, e);
            a();
          },
          o = () => {
            if (!e.skipToken && !W.hasToken) return re(Y, r, e);
            r();
          };
        "low" === e.priority ? setTimeout(() => o(), 800) : o();
      }
      function re(e, t, a) {
        void 0 === a && (a = {}),
          "high" === a.priority ? e.unshift(t) : e.push(t);
      }
      function oe(e) {
        var {
            method: t,
            query: i = {},
            path: n,
            success: s,
            fail: c,
            dataType: u = "string",
          } = e,
          { data: d = {}, origin: p, header: l = {} } = e,
          { noQuery: h, noStoreId: m, skipToken: f, useCdn: b } = e.config;
        if (!p) throw new Error("所有请求必须指定 origin:", n);
        m || (i.store_id = W.offlineId || ""),
          h ||
            ((i.app_id = W.appId),
            (i.kdt_id = i.kdt_id || i.kdtId || W.kdtId || ""),
            (i.access_token = W.accessToken || ""));
        var y = {
          is_weapp: 1,
          sid: W.sessionId,
          version: W.version,
          client: "weapp",
          bizEnv: "wsc",
        };
        f && (y.skip_sid = 1), E(y);
        try {
          var v = getApp();
          v &&
            v.globalData &&
            v.globalData.enableCdn &&
            b &&
            ((l = Object(o.a)({}, l)),
            delete y.sid,
            delete y.uuid,
            delete i.access_token,
            "h5" === p && (p = "h5m"));
        } catch (e) {}
        try {
          if (/^\/(wscaccount|passport)/.test(n) && !l["page-path"]) {
            var w,
              S = getCurrentPages(),
              I = null == (w = S[S.length - 1]) ? void 0 : w.route;
            l["page-path"] = I;
          }
        } catch (e) {}
        return (
          (l["Extra-Data"] = JSON.stringify(y)),
          g({ origin: p, pathname: n, query: i }).then(
            (function () {
              var o = Object(r.a)(function* (r) {
                var o = _() || {},
                  { key: i, apis: n = [] } = o.getCryptoInfo() || {},
                  [h] = r.split("?");
                if (n.indexOf(h) > -1 && i) {
                  var { encryptedData: g, encryptedRSAKey: m } =
                    yield (function (e, t) {
                      return a
                        .e("packages/async-main/chunk")
                        .then(a.t.bind(null, "sbP3", 7))
                        .then((a) => {
                          var { key: r, iv: o } = a.utils.generateKeyAndIv();
                          return {
                            encryptedData: a.aes.encrypt({
                              data: JSON.stringify(e),
                              key: r,
                              iv: o,
                            }),
                            encryptedRSAKey: a.rsa.encrypt({
                              data: r + ":" + o,
                              publicKey: t,
                            }),
                          };
                        });
                    })(d, i);
                  (l["x-auth-token"] = m), (d = { encryptedData: g });
                }
                return {
                  origin: p,
                  _options: e,
                  requestTime: Date.now(),
                  url: r,
                  data: d,
                  header: l,
                  method: (t || "GET").toUpperCase(),
                  success: s,
                  fail: c,
                  dataType: u,
                };
              });
              return function (e) {
                return o.apply(this, arguments);
              };
            })()
          )
        );
      }
      function ie(e) {
        return X({
          path: "/v3/message/wechat-push/query-wechat-subscribe-result.json",
          method: "POST",
          withCredentials: !0,
          data: { pageId: e },
        });
      }
      H.beforeHooks.add((e) => {
        var t = JSON.parse(e.header["Extra-Data"] || "{}");
        return E(t), (e.header["Extra-Data"] = JSON.stringify(t)), !0;
      });
      var ne = a("+I+c"),
        se = a("QxN7"),
        ce = ["level", "detail"],
        ue = getApp();
      function de(e, t, a) {
        var r = a || {},
          { level: i, detail: n } = r,
          s = Object(ne.a)(r, ce),
          c = Object(se.getErrorMsg)(t);
        ue.logger.skynetLog({
          message: "[消息订阅] " + e + (c ? "：" + c : ""),
          level: i,
          extra: { bizName: "消息订阅", logName: e, logMsg: c },
          detail: Object(o.a)({}, t, s, n),
        });
      }
      function pe(e) {
        var t, a, r, o;
        void 0 === e && (e = {});
        var i =
            null == (t = e.templates) ||
            null ==
              (a = t.map((e) => ("string" == typeof e ? { templateId: e } : e)))
              ? void 0
              : a.filter((e) => (null == e ? void 0 : e.templateId)),
          n = i.map((e) => e.templateId).slice(0, 3);
        if (!wx.canIUse("requestSubscribeMessage")) {
          return (
            de("当前小程序基础库不支持订阅"),
            null == e.onFail ||
              e.onFail({
                errCode: "UNSUPPORTED",
                errMsg: "当前小程序基础库不支持订阅",
              }),
            void (null == e.onComplete || e.onComplete())
          );
        }
        if (!Array.isArray(n) || !n.length) {
          return (
            de("templates列表为空"),
            null == e.onFail ||
              e.onFail({ errCode: "NO_TEMPLATE", errMsg: "templates列表为空" }),
            void (null == e.onComplete || e.onComplete())
          );
        }
        var s = getApp(),
          c = null;
        null != (r = s.globalData.subscribeConf) &&
          r.mainSwitch &&
          (c = setTimeout(() => {
            null == e.onShowTips || e.onShowTips();
          }, 800)),
          de("开始订阅", { templateIds: n }),
          null == (o = s.logger) ||
            o.log({
              et: "view",
              ei: "show_subscribe",
              en: "唤起授权",
              params: { component: "subscribe_push" },
            });
        var {
          subscribePos: u,
          subscribeSource: d,
          deliveryWay: p,
        } = e.onSelfLog || {};
        wx.requestSubscribeMessage({
          tmplIds: n,
          success: (t) => {
            de("订阅成功", { res: t, templateIds: n });
            var a,
              r = n.some((e) => "accept" === t[e]);
            if (r) {
              e.noToast ||
                wx.showToast({ title: "订阅通知成功", icon: "success" });
              var o,
                c = i.filter(
                  (e) =>
                    "accept" === t[null == e ? void 0 : e.templateId] &&
                    (null == e ? void 0 : e.subscribeTemplateId)
                );
              if (c.length)
                X({
                  path: "/v3/message/wechat-push/subscribe-callback.json",
                  method: "POST",
                  withCredentials: !0,
                  data: { templateList: c },
                }),
                  null == (o = s.logger) ||
                    o.log({
                      et: "click",
                      ei: "click_subscribe",
                      en: "点击订阅",
                      params: { component: "subscribe_push" },
                    });
            }
            u &&
              (null == (a = s.logger) ||
                a.log({
                  et: "click",
                  ei: (r ? "accept" : "reject") + "_msg_subscribe",
                  en: (r ? "接受" : "拒绝") + "授权订阅小程序消息",
                  params: {
                    subscribe_pos: u,
                    subscribe_source: d,
                    delivery_way: p,
                  },
                }));
            null == e.onSuccess || e.onSuccess(t);
          },
          fail: (t) => {
            de("订阅失败", t, { templateIds: n });
            var a = "订阅微信通知失败 " + (t.errCode || "");
            t.errMsg && t.errMsg.indexOf("switched off") > -1
              ? (a = "请在小程序设置中允许订阅消息")
              : 20001 === (null == t ? void 0 : t.errCode) &&
                (de("删除失效模板", t, { templateIds: n }),
                X({
                  path: "/v3/message/wechat-push/callback-remove-unused-template.json",
                  method: "POST",
                  withCredentials: !0,
                  data: { wechatTemplateIdList: n },
                })),
              e.noToast || wx.showToast({ title: a, icon: "none" }),
              null == e.onFail || e.onFail(t);
          },
          complete: () => {
            c && clearTimeout(c),
              null == e.onCloseTips || e.onCloseTips(),
              null == e.onComplete || e.onComplete();
          },
        });
      }
      a("2xJD"), a("YehF"), getApp();
      var le = getApp(),
        he = "/wscump/common/",
        ge = function (e) {
          return le.request({
            path: he + "get-template.json",
            query: { scene: e },
          });
        };
      function me(e) {
        var {
            templateIdList: t = [],
            scene: a = "",
            needAlwaysToast: r = !1,
            successCallBack: o = null,
            rejectCallBack: n = null,
            failCallBack: s = null,
            showCallBack: c = null,
            closeCallBack: u = null,
            logParam: d = {},
          } = e,
          p = Object.keys(d).length > 0;
        t.length > 0
          ? pe({
              templates: t,
              onSuccess: (e) => {
                for (var r in e)
                  if ("errMsg" !== r && "reject" === e[r]) {
                    n && n();
                    break;
                  }
                var { acceptTemplateIdList: c = [] } = (function (e) {
                  void 0 === e && (e = {});
                  var t = [];
                  try {
                    for (var a in e)
                      "errMsg" !== a && "accept" === e[a] && t.push(a);
                  } catch (e) {}
                  return { acceptTemplateIdList: t };
                })(e);
                if (c.length)
                  return (
                    p &&
                      le.logger.log({
                        et: "click",
                        ei: "allow_msg_subscribe",
                        en: "允许订阅小程序消息",
                        params: d,
                      }),
                    (function (e) {
                      var { scene: t = "", templateIdList: a = [] } = e;
                      return le.request({
                        path: he + "subscription-callback.json",
                        query: { scene: t, templateIdList: JSON.stringify(a) },
                      });
                    })({ scene: a, templateIdList: c })
                      .then(function (e) {
                        var { value: t = !1 } = void 0 === e ? {} : e;
                        t ? o && o(c) : Object(i.a)("授权失败");
                      })
                      .catch(() => {
                        Object(i.a)("授权失败");
                      })
                  );
                wx
                  .getSetting({ withSubscriptions: !0 })
                  .then((e) => {
                    var { mainSwitch: a, itemSettings: r } =
                        e.subscriptionsSetting,
                      o = t.every((e) => r && "reject" === r[e.templateId]);
                    !a || o ? s && s() : u && u();
                  })
                  .catch(() => {
                    u && u();
                  }),
                  p &&
                    le.logger.log({
                      et: "click",
                      ei: "refuse_msg_subscribe",
                      en: "拒绝订阅小程序消息",
                      params: d,
                    });
              },
              onFail: () => {
                s && s();
              },
              onShowTips: () => {
                r &&
                  Object(i.a)({
                    duration: 3e3,
                    position: "top",
                    message:
                      "勾选“总是保持以上选择”后，点击“允许”，即可长期获取签到提醒。",
                  }),
                  p &&
                    le.logger.log({
                      et: "click",
                      ei: "msg_subscribe_view",
                      en: "小程序订阅消息弹窗曝光",
                      params: d,
                    }),
                  c && c();
              },
              onCloseTips: () => {
                u && u();
              },
            })
          : u && u();
      }
      function fe(e) {
        e.needAlwaysToast && wx.showLoading(),
          (function (e) {
            var { scene: t = "", pageId: a = null } = e;
            return Promise.all([
              le.request({
                path: "/wscdeco/im/common/is-shop-not-in-black-list.json",
              }),
              le.getShopInfo(),
            ]).then((e) => {
              var [{ value: r }, { shopInfo: o = {} }] = e;
              return Object(n.c)(o) && r && null !== a
                ? Promise.all([ge(t), ie(a)]).then((e) => {
                    var [{ templateIdList: t = [] }, { templateList: a = [] }] =
                      e;
                    return [...t.map((e) => ({ templateId: e })), ...a];
                  })
                : ge(t).then((e) => {
                    var { templateIdList: t } = e;
                    return t.map((e) => ({ templateId: e }));
                  });
            });
          })({ scene: e.scene, pageId: e.pageId })
            .then((t) => {
              wx.hideLoading(), me(Object(o.a)({ templateIdList: t }, e));
            })
            .catch((e) => {
              e.msg && wx.showToast({ title: e.msg, icon: "none" });
            });
      }
      getApp();
      function be(e) {
        return ye.apply(this, arguments);
      }
      function ye() {
        return (ye = Object(r.a)(function* (e) {
          var { onClose: t = () => {} } = e;
          return fe({
            scene: "maCrmMiniProPoint",
            needAlwaysToast: !0,
            closeCallBack: () => {
              wx.setStorage({
                key: "points-expire-subscribe",
                data: new Date().toLocaleDateString(),
              }),
                t();
            },
          });
        })).apply(this, arguments);
      }
    },
    Xn04: function (e, t) {
      e.exports = {
        d: "newAwardInfo;4;orderNo;4;kdtId;4",
        e: "closeAutoOpenPopup",
        el: "openFissionPopup",
        w: "PaidSuccessFissionCouponDialog",
        wd: "PaidSuccessFissionCouponDialog",
        p: "getFissionShare",
      };
    },
    YAk7: function (e, t, a) {
      a.d(t, "i", function () {
        return s;
      }),
        a.d(t, "j", function () {
          return c;
        }),
        a.d(t, "g", function () {
          return u;
        }),
        a.d(t, "e", function () {
          return d;
        }),
        a.d(t, "f", function () {
          return p;
        }),
        a.d(t, "l", function () {
          return m;
        }),
        a.d(t, "k", function () {
          return f;
        }),
        a.d(t, "b", function () {
          return b;
        }),
        a.d(t, "c", function () {
          return y;
        }),
        a.d(t, "h", function () {
          return v;
        }),
        a.d(t, "a", function () {
          return w;
        }),
        a.d(t, "d", function () {
          return S;
        });
      var r = a("Fcif"),
        o = a("AGZf"),
        i = a("YeA1"),
        n = a("2wjL"),
        s = {
          tradeincard: "tradeincard",
          promocode: "promocode",
          couponpackage: "couponpackage",
          seller: "seller",
          seniorseller: "seniorseller",
          wheel: "wheel",
          feature: "feature",
          present: "present",
          activitiesQrCode: "activitiesQrCode",
        },
        c = {
          tradeincard: "coupon",
          promocode: "promocode",
          couponpackage: "couponPackage",
          guaguale: "guaguale",
          crazyguess: "crazyGuess",
          wheel: "wheel",
          zodiac: "zodiac",
          survey: "survey",
          activitiesQrCode: "activitiesQrCode",
          seniorseller: "seniorSalesman",
          salesman: "salesman",
          feature: "feature",
          present: "present",
        },
        u = {
          tradeincard(e) {
            var {
                orderNo: t,
                activityId: a,
                type: r = "promocard",
                detailUrl: o,
              } = e,
              { dmc: n } = Object(i.a)(),
              s =
                "/packages/user/coupon/detail/index?orderNo=" +
                t +
                "&type=" +
                r +
                "&from=payresult";
            a && (s = s + "&activityId=" + a), n.navigate(s);
          },
          promocode(e) {
            u.tradeincard(Object(r.a)({}, e, { type: "promocode" }));
          },
          couponpackage(e) {
            u.tradeincard(Object(r.a)({}, e, { type: "couponpackage" }));
          },
          seller(e) {
            var { detailUrl: t } = e,
              { dmc: a } = Object(i.a)();
            a.navigate("Tutorial", n.a.getAll(t || ""));
          },
          wheel(e) {
            var { dmc: t } = Object(i.a)();
            t.navigate(e.detailUrl).catch(() => {
              Object(o.a)("打开失败");
            });
          },
          seniorseller(e) {
            u.seller(e);
          },
          feature(e) {
            var { detailUrl: t } = e,
              a = t.match(/feature\/([^?/]+)/),
              { dmc: r } = Object(i.a)();
            r.navigate("Feature", { alias: a[1] });
          },
          present(e) {
            var { detailUrl: t, present: a } = e,
              { dmc: r } = Object(i.a)(),
              o =
                "/packages/goods/present/index?alias=" +
                t.match(/goods\/([^?/]+)/)[1] +
                "&type=present&activityId=" +
                a;
            r.navigate(o);
          },
          guaguale(e) {
            u.wheel(e);
          },
          crazyguess(e) {
            u.wheel(e);
          },
          zodiac(e) {
            u.wheel(e);
          },
          survey(e) {
            u.wheel(e);
          },
        },
        d = {
          msgImg:
            "https://img01.yzcdn.cn/upload_files/2021/05/07/Fl_JhHoGUlPwN1jMcRux-W5KVhAs.png",
          h5Logo: "https://img01.yzcdn.cn/weapp/wsc/1fxuP9X.png",
          baseSharePath: "/pages/home/dashboard/index",
        },
        p = {
          Tradeincard: "tradeincard",
          Couponpackage: "couponpackage",
          Promocode: "promocode",
          Present: "present",
          Guaguale: "guaguale",
          Crazyguess: "crazyguess",
          Wheel: "wheel",
          Zodiac: "zodiac",
          Survey: "survey",
          Feature: "feature",
          Seller: "seller",
          Seniorseller: "seniorseller",
          ActivitiesQrCode: "activitiesQrCode",
        },
        l = {
          [p.Guaguale]:
            "upload_files/2023/09/13/Fiy3PmvhNRPJBjG7RHnJVo-sDtgI.png",
          [p.Crazyguess]:
            "upload_files/2023/09/13/Fvg8HA3_EwfAvY89MiPCZtlNMolT.png",
          [p.Zodiac]:
            "upload_files/2023/09/13/FrqSVMf-pjG43ItIXKV5JR-LRGXC.png",
          [p.Survey]: "public_files/a3658561fc74be479944d2738723f136.png",
          [p.Feature]: "public_files/02f1542513680804e866af586239488c.png",
          [p.Seller]: "public_files/e483107500d617e430949f2f55b31603.png",
        },
        h = 1,
        g = 2,
        m = (e) => e === h,
        f = (e) => {
          var { imgType: t, type: a, imageUrl: r } = e;
          return t === g ? r : (r = l[a] || r);
        },
        b = {
          FETCH_SUCCESS: 1,
          HAS_FETCHED: 2,
          NONE: 3,
          ACT_ENDED: 4,
          LIMIT_EXCEEDED: 5,
          ACT_INVALID: 6,
          LINK_INVALID: 7,
          COUPON_INVALID: 8,
        },
        y = {
          [b.NONE]: "优惠券已抢光",
          [b.ACT_ENDED]: "活动已结束",
          [b.LIMIT_EXCEEDED]: "已超过最多领取次数",
          [b.ACT_INVALID]: "活动已失效",
          [b.LINK_INVALID]: "链接已失效",
          [b.COUPON_INVALID]: "优惠券已失效",
        },
        v = { RECEIVED: 1, UN_RECEIVED: 0 },
        w = { Person: 1, Group: 2 },
        S = { Money: 1, Store: 2 };
    },
    eUvf: function (e, t, a) {
      a.d(t, "c", function () {
        return i;
      }),
        a.d(t, "b", function () {
          return n;
        }),
        a.d(t, "a", function () {
          return s;
        });
      var r = a("1Uvd"),
        o = 2,
        i = (e) => e === o;
      var n = function (e, t) {
          return (
            void 0 === t && (t = 0),
            e + "~rcmd_coupon_pop~" + (t + 1) + "~" + Object(r.a)(8)
          );
        },
        s = function (e, t) {
          void 0 === t && (t = 1);
          for (
            var a = [], r = e.length, o = Math.ceil(r / t), i = 0;
            i < o;
            i++
          )
            a[i] = e.slice(t * i, t * (i + 1));
          return a;
        };
    },
    eaQp: function (e, t, a) {
      a.d(t, "d", function () {
        return n;
      }),
        a.d(t, "b", function () {
          return s;
        }),
        a.d(t, "c", function () {
          return c;
        }),
        a.d(t, "e", function () {
          return u;
        }),
        a.d(t, "a", function () {
          return d;
        });
      var r = a("Fcif"),
        o = a("US/N"),
        i = getApp(),
        n = (e) =>
          Object(o.default)({
            method: "post",
            url: "/wscump/trade/take-coupon.json",
            data: e,
          });
      function s(e) {
        return Object(o.default)({
          path: "/wscump/trade/use-trade-ump-v1.json",
          data: e,
        });
      }
      function c(e) {
        var t;
        return (
          (t = { source: "weapp", mpVersion: i.getVersion() }),
          Object(o.default)({
            path: "/wscump/trade/pay-result-ump-info.json",
            data: Object(r.a)({}, e, t),
          })
        );
      }
      var u = (e) =>
          Object(o.default)({
            method: "post",
            path: "/wscump/trade/take-promotion-coupon.json",
            data: e,
          }),
        d = (e) =>
          Object(o.default)({
            method: "get",
            path: "/wscump/coupon/coupon_use_redirect.json",
            data: e,
          });
    },
    enZZ: function (e, t, a) {
      a.d(t, "a", function () {
        return n;
      }),
        a.d(t, "b", function () {
          return s;
        });
      var r = a("Fcif"),
        o = a("YAk7"),
        i =
          (a("AGZf"),
          a("taYb"),
          a("2wjL"),
          function (e) {
            var t;
            void 0 === e && (e = {});
            var a = Object(r.a)({}, e),
              {
                paidImageUrl: i,
                promotionType: n,
                imageType: s,
              } = null != (t = e) ? t : {};
            return (
              i &&
                (a.imgUrl = Object(o.k)({ imageUrl: i, imgType: s, type: n })),
              -1 ===
                Object.keys(o.i)
                  .map((e) => o.i[e])
                  .indexOf(n) && (a = null),
              a
            );
          }),
        n = (e, t, a) => {
          var r, n, s, c;
          if (
            (e.credit &&
              (e.credit.url = "/packages/pointstore/point-center/index"),
            !1 === (null == e || null == (r = e.creditPay) ? void 0 : r.show) &&
              delete e.creditPay,
            null != (n = e.cashBack) && n[0])
          ) {
            if (
              (null == (s = e.cashBack) || null == (c = s[0])
                ? void 0
                : c.cashbackType) === o.d.Store
            )
              e.cashBack[0].url = "/packages/pre-card/home/index?entry=27";
            else {
              var u = "V" === (t || "").substr(0, 1);
              e.cashBack[0].url = u
                ? "/packages/user/cashback/list/index"
                : "/packages/user/cashback/detail/index?order_no=" + t;
            }
          } else e.cashBack && delete e.cashBack;
          return (
            e.paidPromotionInfo &&
              (e.paidPromotionInfo = i(e.paidPromotionInfo)),
            e.paidPromotionInfoList &&
              (e.paidPromotionInfoList = e.paidPromotionInfoList
                .map((e) => i(e))
                .filter((e) => e)),
            e
          );
        },
        s = (e) => {
          if (!e) return null;
          var {
            id: t,
            imgUrl: a,
            presentAlias: r,
            goodsId: o,
            alias: i,
            originPrice: n,
            title: s,
            skuId: c,
          } = e;
          return {
            id: t,
            goodsImgUrl: a,
            alias: r,
            goodsId: o,
            goodsAlias: i,
            goodsOriginPrice: n,
            goodsTitle: s,
            goodsSkuId: c,
          };
        };
    },
    f8bC: function (e, t, a) {
      a("AGZf");
      t.a = function (e) {
        var t = e.title;
        e.duration;
        wx.showLoading({ title: t });
      };
    },
    h891: function (e, t) {
      e.exports = {
        d: "orderNo;4;kdtId;4;payResult;4;isWxReceipt;4",
        e: "",
        el: "",
        w: "FissionCouponUmp;GuideCouponBlock;BigdataCoupon;InSourcingCouponUmp",
        wc: "",
        l: "",
        lc: "",
        p: "getFissionShare",
        pi: "navigateTo;logger",
        c: "",
      };
    },
    hth6: function (e, t) {
      e.exports = {
        d: "orderNo;4;themeColors;4",
        e: "openGroupbuySelfFetchDialog",
        el: "openGroupbuySelfFetchDialog",
        w: "GroupbuySelfFetchButton;LongClickSaveImage",
        wc: "LongClickSaveImage",
        wd: "GroupbuySelfFetchDialog",
      };
    },
    irfn: function (e, t) {
      e.exports = {
        d: "orderNo;4;kdtId;4;themeColors;4;isWxReceipt;4",
        e: "",
        el: "",
        w: "SalesmanPayResultInfo",
        wc: "",
        l: "",
        lc: "",
        pi: "navigateTo",
        c: "",
        cc: "",
      };
    },
    "j/Mq": function (e, t, a) {
      a.d(t, "a", function () {
        return p;
      });
      var r = a("US/N"),
        o = "wx7138c43cf7b11573",
        i = { errorType: "fail", err_msg: "授权失败，请稍后重试" },
        n = (e) => ("weapp" === e ? o : ""),
        s = "AUTHORIZED",
        c = "UNAUTHORIZED",
        u = (e) =>
          new Promise((t, a) => {
            try {
              WeixinJSBridge.invoke(
                "openBusinessView",
                {
                  businessType: "wxpayScoreEnable",
                  queryString: "apply_permissions_token=" + e,
                },
                (e) => {
                  if (0 === parseInt(e.err_code)) t();
                  else {
                    var { err_msg: r = "", err_code: o } = e,
                      i = r.includes("cancel") ? "cancel" : "wx_fail";
                    a({ errorType: i, err_msg: r, code: o });
                  }
                }
              );
            } catch (e) {
              a(i);
            }
          }),
        d = (e) =>
          new Promise((t, a) => {
            Object(r.default)({
              url: "/wscassets/api/prior-use/queryAuthState",
              method: "GET",
              data: { biz: "trade_order", wxPayScoreAppId: n() },
            })
              .then((t) => {
                var o;
                if (t !== s)
                  return t === c
                    ? ((o = "pay_success_h5_ump"),
                      Object(r.default)({
                        url: "/wscassets/api/prior-use/preAuth",
                        method: "GET",
                        data: {
                          biz: "trade_order",
                          wxPayScoreAppId: n(),
                          sources: o,
                        },
                      })).then((t) => e(t))
                    : void 0;
                a({ errorType: "fail", err_msg: "请勿重复授权" });
              })
              .then(() => {
                t();
              })
              .catch((e) => {
                "wx_fail" !== (null == e ? void 0 : e.errorType) ? a(e) : a(i);
              });
          }),
        p = (e) => {
          var { env: t } = e;
          switch (t) {
            case "weapp":
              (() => {
                var e = "release";
                try {
                  e = __wxConfig.envVersion;
                } catch (e) {}
                try {
                  wx.navigateToMiniProgram({
                    appId: o,
                    envVersion: e,
                    path: "/pages/prior-use/index?sources=pay_success_ump",
                    success: () => {
                      var e = () => {
                        wx.offAppShow(e);
                      };
                      wx.onAppShow(e);
                    },
                    fail: (e) => {},
                  });
                } catch (e) {}
              })();
              break;
            case "wechat":
              return d(u);
            default:
              return new Promise((e, t) => {
                t({ errorType: "fail", err_msg: "暂不支持该环境" });
              });
          }
        };
    },
    jvKq: function (e, t, a) {
      a.d(t, "c", function () {
        return o;
      }),
        a.d(t, "b", function () {
          return i;
        }),
        a.d(t, "a", function () {
          return n;
        });
      var r = a("US/N"),
        o = (e) =>
          Object(r.default)({
            data: e,
            method: "POST",
            path: "/wscump/trade/take-coupon.json",
          }),
        i = (e) =>
          Object(r.default)({
            method: "GET",
            origin: "uic",
            path: "/passport/api/authorize-dialog/scenes-auth-list.json",
            data: e,
          }),
        n = (e) =>
          Object(r.default)({
            method: "GET",
            path: "/wscump/coupon/coupon_use_redirect.json",
            data: e,
          });
    },
    nlLt: function (e, t, a) {
      a.d(t, "a", function () {
        return i;
      });
      var r = a("Fcif"),
        o = a("ljV+");
      function i(e, t) {
        var a,
          i,
          n,
          s = null != (a = null == e ? void 0 : e.customShareDesc) ? a : "",
          c = null != (i = null == e ? void 0 : e.id) ? i : "",
          u =
            null != (n = null == e ? void 0 : e.shareLinkImgUrl)
              ? n
              : "https://img01.yzcdn.cn/public_files/b3cb4eb52977529b77ed46870429e33a.jpg",
          d = o.args.add(
            "/packages/ump/fission/index",
            Object(r.a)({ shareback: 1, order_no: t }, {})
          );
        return (
          c && (d = o.args.add(d, { fissionId: c })),
          {
            title: s,
            imageUrl: u,
            path: d,
            loggerParams: { activity_names: ["fission"] },
          }
        );
      }
    },
    nsGZ: function (e, t) {
      e.exports = {
        d: "kdtId;4;newAwardInfo;4;themeColors;4;orderNo;4;isSkyline;4",
        e: "closeAutoOpenPopup",
        el: "openAutoSendCouponPopup",
        w: "PaidSuccessAutoSendCouponDialog;CanUseGoods",
        wc: "UserAuthorize;CanUseGoods",
        wd: "PaidSuccessAutoSendCouponDialog",
        lc: "getUserInfo",
        cc: "",
      };
    },
    p00h: function (e, t, a) {
      a.d(t, "d", function () {
        return r;
      }),
        a.d(t, "g", function () {
          return o;
        }),
        a.d(t, "f", function () {
          return i;
        }),
        a.d(t, "b", function () {
          return n;
        }),
        a.d(t, "h", function () {
          return s;
        }),
        a.d(t, "e", function () {
          return c;
        }),
        a.d(t, "c", function () {
          return u;
        }),
        a.d(t, "a", function () {
          return d;
        });
      var r = {
          VIRTUAL: 60,
          E_CARD: 61,
          MEMBER_CARD: 20,
          KNOWLEDGE: 31,
          FENXIAO: 10,
        },
        o = {
          pop_ad: "pop_ad",
          logistics_subscribe: "subscription",
          fission_coupons: "fission_coupons",
          auto_issue_coupon: "auto_issue_coupon",
          prior_use: "priorUse",
          card_grant: "card_grant",
        },
        i = [
          o.pop_ad,
          o.logistics_subscribe,
          o.fission_coupons,
          o.auto_issue_coupon,
          o.prior_use,
          o.card_grant,
        ],
        n = {
          SUBSCRIPTION: "SUBSCRIPTION",
          PICK_UP_CODE: "PICK_UP_CODE",
          CARD_VOUCHER: "CARD_VOUCHER",
          GIVE_AWAY: "GIVE_AWAY",
          DETAIL: "DETAIL",
          GROUPBUY: "GROUPBUY",
          SHARE: "SHARE",
          BUY_AGAIN: "BUY_AGAIN",
          DIRECT_BUY_AGAIN: "DIRECT_BUY_AGAIN",
          TAKE_GOODS_CODE: "TAKE_GOODS_CODE",
          PURCHASE_TAKE: "PURCHASE_TAKE",
          PURCHASE_CENTER: "PURCHASE_CENTER",
          EXHIBITION_RESERVE_SHARE: "EXHIBITION_RESERVE_SHARE",
          CARD_VOUCHER_EXHIBITION_DETAIL: "CARD_VOUCHER_EXHIBITION_DETAIL",
        },
        s = [
          n.SUBSCRIPTION,
          n.TAKE_GOODS_CODE,
          n.PICK_UP_CODE,
          n.CARD_VOUCHER,
          n.PURCHASE_TAKE,
          n.CARD_VOUCHER_EXHIBITION_DETAIL,
          n.DETAIL,
          n.GROUPBUY,
          n.SHARE,
          n.PURCHASE_CENTER,
          n.EXHIBITION_RESERVE_SHARE,
        ],
        c = {
          [n.DETAIL]: { defaultText: "查看订单", needJump: !0, type: n.DETAIL },
          [n.GROUPBUY]: {
            defaultText: "继续团购",
            needJump: !0,
            type: n.GROUPBUY,
          },
          [n.SHARE]: { defaultText: "分享一下", needJump: !0, type: n.SHARE },
          [n.PICK_UP_CODE]: {
            defaultText: "查看提货码",
            needJump: !0,
            type: n.PICK_UP_CODE,
          },
        },
        u = {
          primary: "action-block__btn-primary",
          default: "action-block__btn-default",
        },
        d = {
          DEFAULT: "NORMAL",
          GROUPBUY: "GROUPBUY",
          SOLITAIRE_BUY: "SOLITAIRE_BUY",
        };
    },
    sNje: function (e, t) {
      e.exports = {
        d: "kdtId;4;payResult;4;orderNo;4;hasPaid;4;orderItems;4;canUseTradeUmpV1;4;showAwardV2Block;4;newAwardInfo;4;themeCSS;4;themeColors;4;changeSubscribe;4;phasePaymentStage;4;yunDesignConfig;4;themeRadius;4;isSkyline;4",
        e: "closeAutoOpenPopup;openGroupbuyShareDialog;openSolitaireDialog;showSelfFetchDialog;hideSelfFetchDialog;showVoucherCardDialog;hideVoucherCardDialog;showSubscriptionDialog;hideSubscriptionDialog;showTradeShareDialog;showShopAdDialog;gotoOrderDetail;openFissionPopup;openAutoSendCouponPopup;showPriorUseDialog;openSubsidyPopup;showActivateBenefitcardDialog;showTakeGoodsDialog;gotoIndentorCenter;gotoIndentorShipment;disableAutoPopup;buyAgain;hidePickUpCodeBtn",
        el: "gotoOrderDetail;showSubscriptionDialog;hideSubscriptionDialog;showSelfFetchDialog;hideSelfFetchDialog;showVoucherCardDialog;hideVoucherCardDialog;closeAutoOpenPopup;showActivateBenefitcardDialog;showTakeGoodsDialog;buyAgain;disableAutoPopup;hidePickUpCodeBtn;handleOpenShare;SubscribeNotice;gotoIndentorCenter;gotoIndentorShipment",
        w: "SubscriptionDialog;WishMsgPopup;SelfFetchDialog;VoucherCardDialog;PaidSubscriptionMsg;ActivateBenefitcardDialog;TakeGoodsDialog;TakeGoodsContent;SelfFetchContent",
        wc: "SelfFetchDialog;VoucherCardDialog;SubscriptionDialog;GroupbuySelfFetchButton;GroupbuyShareButton;GroupbuyContinueButton;SolitaireShareButton;PriorUseDialog;WishMsgPopup;PaidSubsidyDialog;PaidSubscriptionMsg;ActivateBenefitcardDialog;TakeGoodsDialog;TakeGoodsContent;SelfFetchContent",
        wd: "PaidAction",
        p: "",
        pi: "requestSubscribeMessagePush",
        cc: "MsgSubscribe",
        li: "beforePageMount",
      };
    },
    x52n: function (e, t, a) {
      a.d(t, "b", function () {
        return o;
      }),
        a.d(t, "a", function () {
          return i;
        }),
        a.d(t, "c", function () {
          return n;
        });
      var r = a("US/N"),
        o = function (e) {
          var { keys: t, popPosition: a } = e;
          return Object(r.default)({
            path: "/wscshop/shopad/pop-config-with-keys.json",
            data: { popPosition: a, queryJson: JSON.stringify({ keys: t }) },
          });
        },
        i = () =>
          Object(r.default)({
            path: "/wscuser/scrm/api/isCrmShop.json",
            method: "GET",
          }),
        n = (e) =>
          Object(r.default)({
            path: "/wsctrade/order/getOrderInfoByTrade.json",
            method: "GET",
            data: { order_no: e },
          });
    },
    zzhz: function (e, t, a) {
      a.d(t, "a", function () {
        return p;
      }),
        a.d(t, "d", function () {
          return f;
        }),
        a.d(t, "c", function () {
          return b;
        }),
        a.d(t, "b", function () {
          return y;
        });
      var r = a("Fcif"),
        o = a("3tyi"),
        i = a("bdYe"),
        n = a.n(i),
        s = a("Mp2s"),
        c = (e) => !!e,
        u = function (e) {
          void 0 === e && (e = {});
          var t = (function (e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = "");
            var a = Object(s.a)(e, "benefitPluginInfo.showName", "");
            switch (t) {
              case "discount":
                return Object(s.a)(e, "discount", 10) / 10 + "折";
              case "points":
                return "送" + Object(s.a)(e, "points", 0) + "积分";
              case "pointsFeedBack":
                return n()(Object(s.a)(e, "rate", 0), 10) + "倍积分";
              default:
                return a;
            }
          })(e, e.key);
          return Object(r.a)({}, e, {
            appName: t || e.appName,
            icon: Object(s.a)(e, "benefitPluginInfo.icon", "") || e.icon,
          });
        },
        d = (e, t) =>
          Object.keys(Object(o.a)(e, t))
            .map((t) => {
              if (e[t]) {
                var a = Object(r.a)({}, e[t]);
                return (
                  "coupon" === t &&
                    (a.totalCount = ((e) => {
                      var { couponList: t } = e;
                      return t.reduce((e, t) => e + t.number, 0);
                    })(a)),
                  (a.key = t),
                  a
                );
              }
            })
            .filter(c),
        p = function (e, t) {
          void 0 === e && (e = {});
          var { diyTemplateList: a = [], experienceCard: o } = e,
            i = [],
            n = d(e, [
              "coupon",
              "present",
              "discount",
              "points",
              "pointsFeedBack",
              "memberPrice",
              "postage",
            ]),
            s = d(e, ["paidContent"]),
            c = d(e, ["growth"]),
            p = [];
          return (
            o && p.push(Object(r.a)({}, o, { key: "experienceCard" })),
            (i = i
              .concat(n)
              .concat(t)
              .concat(p)
              .concat(s)
              .concat(a)
              .concat(c)).map(u)
          );
        },
        l = { 31: "天", 32: "周", 33: "月" },
        h = 31,
        g = 32,
        m = 33,
        f = function (e) {
          if ((void 0 === e && (e = {}), !e)) return [];
          var t = [],
            {
              birthdayInfoList: a,
              festivalInfoList: r,
              memberdayInfoList: o,
              memberVoucherInfoList: i,
            } = e;
          if (a && a.length) {
            var n = a[0] || {},
              { benefit: s, planExecuteTime: c } = n,
              { termType: u } = n.effectiveTime || {},
              d = {
                benefitDetail: { benefit: s, planExecuteTime: c },
                name: "birthday",
                pluginName: "生日特权",
                icon: "//img01.yzcdn.cn/memberlevel/v2/birthday@2x.png",
              };
            (d.remark = l[u]
              ? "会员生日当" + l[u] + "享生日特权"
              : "会员生日享生日特权"),
              t.push(d);
          }
          if (o && o.length) {
            var p = o[0] || {},
              { termType: f } = p.effectiveTime || {},
              b = {
                name: "memberday",
                pluginName: "专属会员日",
                icon: "//img01.yzcdn.cn/memberlevel/v2/memberday@2x.png",
              };
            (b.remark =
              f === h
                ? "每日专享优惠"
                : f === g
                ? "每周专享优惠"
                : f === m
                ? "每月专享优惠"
                : ""),
              t.push(b);
          }
          return (
            r &&
              r.length &&
              t.push({
                name: "festival",
                pluginName: "节日特权",
                remark: "节日专属优惠",
                icon: "//img01.yzcdn.cn/memberlevel/v2/festival@2x.png",
              }),
            i &&
              i.length &&
              t.push({
                name: "membervoucher",
                pluginName: "会员专享券",
                icon: "//img01.yzcdn.cn/memberlevel/v2/membervoucher@2x.png",
                remark: "会员定期可领的优惠券",
              }),
            t.forEach((e) => {
              (e.desc = e.remark), (e.appName = e.pluginName);
            }),
            t
          );
        };
      function b(e) {
        return !!e && "{}" !== JSON.stringify(e);
      }
      function y(e) {
        var t = {};
        try {
          var a;
          t = JSON.parse(
            (null == e || null == (a = e.extension)
              ? void 0
              : a.AFTER_PAY_GUIDE) || "{}"
          );
        } catch (e) {}
        return t;
      }
    },
  });
