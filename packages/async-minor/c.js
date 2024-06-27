"use strict";
(exports.ids = [10]),
  (exports.modules = {
    "1oaI": function (e, t, a) {
      var r = a("eijD"),
        n = a("1Uvd"),
        i = a("OPDa"),
        o = a("STCT"),
        s = getApp(),
        c = getApp();
      t.a = Behavior({
        data: { state: { isShow: !1 } },
        attached() {
          this.setIsShow();
        },
        methods: {
          setIsShow() {
            var e = this;
            return Object(r.a)(function* () {
              (yield e.isShowMarketingPage()) &&
                (e.setYZData({ "state.isShow": !0 }),
                c.logger &&
                  c.logger.log({
                    et: "view",
                    ei: "component_view",
                    en: "组件曝光",
                    params: {
                      component: "side_ad",
                      banner_id: e.getBannerId(),
                    },
                  }));
            })();
          },
          isShowMarketingPage: () =>
            Object(r.a)(function* () {
              try {
                return (
                  "1" ===
                  (yield s.requestUseCdn({ path: o.a.api.isShowMarketingPage }))
                    .floating_nav_enable
                );
              } catch (e) {
                return !1;
              }
            })(),
          getBannerId: () =>
            i.a.getPageSpmTypeId() + "~popup_ad.0~0~" + Object(n.a)(8),
        },
      });
    },
    "3cdT": function (e, t, a) {
      a.d(t, "b", function () {
        return r;
      }),
        a.d(t, "c", function () {
          return n;
        }),
        a.d(t, "d", function () {
          return i;
        }),
        a.d(t, "e", function () {
          return o;
        }),
        a.d(t, "a", function () {
          return s;
        });
      var r = 2,
        n = { ASYNC_SEND: 1000030072, BIND_MOBILE: 1000030078 },
        i = { MONEY: 1, DISCOUNT: 2, GOODS: 3 },
        o = { 1: "首页", 2: "商详页", 3: "社区团购", 4: "微页面" },
        s = 1;
    },
    "6SJJ": function (e, t, a) {
      var r = getApp();
      t.a = {
        getHotWords: () =>
          r.request({ path: "/wscdeco/decorate/search-page/hot-words.json" }),
      };
    },
    "9/mx": function (e, t, a) {
      a.d(t, "b", function () {
        return i;
      }),
        a.d(t, "a", function () {
          return o;
        });
      var r = a("7sy2"),
        n = getApp(),
        i = (e) =>
          Object(r.e)({
            path: "/wscuser/levelcenter/api/userLevelDetail.json",
            data: { type: e },
          }),
        o = (e) =>
          n.request({
            path: "/wscuser/level/api/getPlanGiftBag.json",
            data: { planId: e },
          });
    },
    "91TL": function (e, t, a) {
      a.d(t, "a", function () {
        return n;
      });
      var r = getApp(),
        n = function (e) {
          var { keys: t, popPosition: a } = e;
          return new Promise((e) => {
            setTimeout(e, 1e3);
          }).then(() =>
            r.requestUseCdn({
              path: "/wscshop/shopad/pop-config-with-keys.json",
              data: { popPosition: a, queryJson: JSON.stringify({ keys: t }) },
            })
          );
        };
    },
    "9gsa": function (e, t, a) {
      a.d(t, "b", function () {
        return n;
      }),
        a.d(t, "a", function () {
          return i;
        });
      var r = a("Fcif"),
        n = (e) =>
          new Promise((t, a) => {
            wx.request({
              url: "https://h5.youzan.com/wscshop/weapp/share/feature/time_line_data.json",
              data: Object(r.a)({}, e),
              success: (e) => {
                var { data: r = {}, statusCode: n } = e,
                  { code: i, data: o = {} } = r;
                (200 === n && 0 === i) || a("err"), t(o);
              },
              fail: () => {
                a("err");
              },
            });
          }),
        i = (e) =>
          new Promise((t, a) => {
            wx.request({
              url: "https://h5.youzan.com/wscshop/poster/async-feature-screenshot.json",
              data: Object(r.a)({}, e),
              success: (e) => {
                var { data: r = {}, statusCode: n } = e,
                  { code: i, data: o = {} } = r;
                (200 === n && 0 === i) || a("err"), t(o);
              },
              fail: () => {
                a("err");
              },
            });
          });
    },
    AYYc: function (e, t, a) {
      a.d(t, "a", function () {
        return n;
      });
      var r = a("jA1y"),
        n = (e) =>
          Object(r.c)({ path: "/wscshop/flow-entrance/info.json", data: e });
    },
    D2kW: function (e, t, a) {
      var r = a("v6dD");
      t.a = {
        statusList(e) {
          var t = [];
          return (
            e.liveStartAt &&
              t.push(
                Object(r.b)(e.liveStartAt.replace(/-/g, "/"), "MM-DD HH:mm")
              ),
            e.pageView && t.push(e.pageView + "次观看"),
            t
          );
        },
        priceText(e) {
          if (e.showPriceInfo && 2 !== e.sellerType) {
            var t = 0;
            return (
              (t = e.buyStatus ? e.buyStatus.price : e.price),
              e.buyStatus && e.buyStatus.isBought
                ? "已购买"
                : 0 == t
                ? "免费"
                : "￥ " + (t / 100).toFixed(2)
            );
          }
          return "";
        },
      };
    },
    Dq5y: function (e, t, a) {
      t.a = {
        statusList(e, t, a) {
          var r = [],
            n = "已包含内容" + e + "个";
          return e && r.push(n), !a && t && r.push(t + "人已购"), r;
        },
        priceText: (e, t, a) =>
          a
            ? e
              ? "已购买"
              : 0 === t
              ? "免费"
              : t
              ? "￥ " + (t / 100).toFixed(2)
              : ""
            : "",
      };
    },
    E4In: function (e, t, a) {
      a.d(t, "a", function () {
        return o;
      }),
        a.d(t, "b", function () {
          return s;
        });
      var r = a("Fcif"),
        n = a("WNIS"),
        i = getApp(),
        o = () =>
          i.request({
            path: "/wscuser/ump/api/getCouponCount",
            data: { kdt_id: i.getKdtId(), status: n.b.Valid },
          }),
        s = (e) =>
          i.request({
            path: "/wscuser/ump/api/getCouponList",
            data: Object(r.a)(
              { kdt_id: i.getKdtId(), status: n.b.Valid, withDetail: !0 },
              e
            ),
          });
    },
    Jcqw: function (e, t, a) {
      a.d(t, "a", function () {
        return n;
      }),
        a.d(t, "b", function () {
          return i;
        });
      var r = getApp(),
        n = (e) =>
          r.request({
            path: "/wscdeco/decorate/marketing_page_config.json",
            data: e,
          }),
        i = (e) =>
          r.request({
            path: "/wscdeco/decorate/marketing-detail.json",
            data: e,
          });
    },
    Jth9: function (e, t, a) {
      a.d(t, "a", function () {
        return h;
      });
      var r = a("DXqK"),
        n = a("3cdT"),
        i = { SELF: 0, ONE: 1, TWO: 2, THREE: 3, FOUR: 4, ERR: 99 },
        o = (e) =>
          e.map((e) => {
            var {
                couponId: t,
                title: a,
                activityType: i,
                preferentialMode: o,
                thresholdCopyWriting: s,
                dateType: c,
                fetchId: u,
                activityTypeGroup: p,
                validTimeCopywriting: d,
              } = e,
              { value: l, unit: h } = ((e) => {
                var t,
                  a = "";
                switch (e.preferentialMode) {
                  case n.d.MONEY:
                    (t = e.value
                      ? e.value / 100
                      : e.minValue / 100 + "~" + e.maxValue / 100),
                      (a = "元");
                    break;
                  case n.d.DISCOUNT:
                    (t = e.value / 10), (a = "折");
                    break;
                  case n.d.GOODS:
                    t = "兑换券";
                }
                return { value: t, unit: a };
              })(e),
              g = ((e, t) => {
                var a = String(e).length;
                return t === n.d.GOODS
                  ? 22
                  : a < 5
                  ? 28
                  : 5 === a
                  ? 22
                  : 6 === a
                  ? 18
                  : 12;
              })(l, o),
              f = "";
            return (
              (f =
                c === n.a
                  ? Object(r.d)(e.validStartTime, "YYYY.MM.DD") +
                    "-" +
                    Object(r.d)(e.validEndTime, "YYYY.MM.DD")
                  : "领到券" +
                    (0 === e.relativeValidTimeBeginInterval ? "当" : "次") +
                    "日起" +
                    e.relativeValidTimeDuration +
                    "天内有效"),
              {
                value: l,
                unit: h,
                couponId: t,
                fetchId: u,
                title: a,
                activityType: i,
                condition: s,
                time: d || f,
                size: g,
                activityTypeGroup: p,
              }
            );
          }),
        s = (e) => e.some((e) => 1 !== e.preferentialMode),
        c = (e) => {
          var t = 0;
          return (
            e.forEach((e) => {
              t += e.value || e.maxValue;
            }),
            t / 100
          );
        },
        u = {
          1000030029: "FETCHED",
          1000030071: "FETCHED",
          1000030072: "ASYNC",
        },
        p = {
          FETCHED: { title: "你已领过该礼包", btnText: "查看详情" },
          ASYNC: {
            title: "送你一个优惠礼包",
            desc: "请在个人中心优惠券列表查看",
            btnText: "立即查看",
          },
          FAIL: { title: "来晚一步，抢光了" },
        },
        d = { 10007: "新人", 10008: "进店" },
        l = 10007,
        h = (e, t, a) => {
          if (a || !e) {
            var r = p[u[a] || "FAIL"];
            if (((r.showType = i.ERR), r.btnText)) {
              r.link = "/packages/user/coupon/list/index";
            }
            return r;
          }
          var {
              activityInfo: n,
              sendImmediatelyCoupons: h,
              sendAfterPayCoupons: g,
            } = e,
            {
              shopName: f,
              showType: m = i.ONE,
              imageUrl: v,
              color: y,
              appIdentity: b,
              participateFrequency: T,
            } = n,
            {
              title: w,
              subTitle: I,
              totalMoney: C,
            } = ((e, t, a) => {
              var r = e.length,
                n = t.length,
                i = "",
                o = "",
                u = 0;
              if (r) {
                var p = s(e);
                (u = p ? 0 : c(e)),
                  (i = p ? "送你" + d[a] + "红包" : "送你" + u + "元红包");
              }
              if (n) {
                var l = "购买消费后" + (r ? "再" : "") + "送",
                  h = s(t) ? "" + l + n + "张券" : "" + l + c(t) + "元";
                (i = r ? i : h), (o = r ? h : "");
              }
              return { title: i, subTitle: o, totalMoney: u };
            })(h, g, b),
            S = o(h),
            j = o(g),
            k = m === i.SELF ? "background: " + y + ";" : "",
            O = S.length || m !== i.THREE ? "" : "small-title",
            A =
              b === l
                ? "新客进店礼包在首次进店时发放，"
                : "老客进店礼包每" + T + "天进店时发放";
          return {
            title: w,
            fetchedCoupons: S,
            subTitle: I,
            payCoupons: j,
            kdtId: t,
            showType: m,
            imageUrl: v,
            color: y,
            style: k,
            hasCoupon: !0,
            titleClass: O,
            useSelfStyle: m === i.SELF,
            shopName: f,
            typeRule: A,
            totalMoney: C,
          };
        };
    },
    "JxL/": function (e, t, a) {
      var r = a("Fcif");
      t.a = Behavior({
        methods: {
          getCloudLoggerInfo(e, t) {
            void 0 === t && (t = {});
            var a = getCurrentPages();
            return Object(r.a)({}, t, {
              ad_name: this.getAdNameByType(e),
              page_url: a[a.length - 1].route,
              img_url: this.getAdImageInfo(),
            });
          },
          getAdExtraParams() {},
          getAdNameByType: (e) =>
            ({
              payment_reminders: "催付弹窗",
              pop_ad: "弹窗广告",
              check_in: "签到弹窗",
              enter_shop: "进店有礼弹窗",
              member_guide: "引导办会员",
              ump_conference: "活动会场",
            }[e]),
        },
      });
    },
    LOL7: function (e, t, a) {
      a.d(t, "b", function () {
        return i;
      }),
        a.d(t, "a", function () {
          return o;
        });
      var r = a("O829"),
        n = getApp(),
        i = () => n.request({ path: r.a.api.isShowCollectGift }),
        o = () => n.request({ path: r.a.api.closeCollectGiftShow });
    },
    MQib: function (e, t, a) {
      a.d(t, "a", function () {
        return r;
      });
      a("T6h7"), a("jmjq");
      var r = { FREE: 1, PAY: 2 };
    },
    O829: function (e, t, a) {
      a.d(t, "a", function () {
        return r;
      });
      var r = {
        url: { activityHomePage: "/packages/ump/collect-gift/home/index" },
        api: {
          isShowCollectGift: "wscump/collect_gift/is_show_collect_gift.json",
          closeCollectGiftShow:
            "/wscump/collect_gift/close_collect_gift_show.json",
        },
      };
    },
    QY3K: function (e, t, a) {
      a.d(t, "a", function () {
        return r;
      });
      a("2wjL");
      function r(e) {
        void 0 === e && (e = {});
        var { image: t = {}, alias: a, price: r, title: n } = e,
          { url: i, width: o, height: s } = t;
        i &&
          o &&
          s &&
          a &&
          wx.setStorage({
            key: "goodsDetail-" + a,
            data: { image: t, title: n, price: r },
          });
      }
    },
    RC6s: function (e, t, a) {
      var r = a("a1Mm"),
        n = a("Xq7Z");
      t.a = Behavior({
        properties: {
          goodsInfo: {
            type: Object,
            value: {},
            observer() {
              this.computePaidContent();
            },
          },
        },
        data: {
          isPaidContent: !1,
          goodsType: "",
          mediaIconUrlAndFreeText: ["", ""],
        },
        attached() {
          this.computePaidContent();
        },
        methods: {
          computePaidContent() {
            var {
                goodsInfo: { owlType: e, showPaidContent: t = !1 },
              } = this.data,
              a = !!e && t;
            this.setData({
              isPaidContent: a,
              goodsType: a ? "知识付费" : "",
              mediaIconUrlAndFreeText: this.computeMediaIconUrlAndFreeText(),
            });
          },
          computeMediaIconUrlAndFreeText() {
            var {
              goodsInfo: { owlType: e, mediaType: t },
            } = this.data;
            if (1 === e) return [this.getCdnIconUrl("COLUMN"), ""];
            if (2 === e)
              switch (t) {
                case 1:
                  return [this.getCdnIconUrl("TEXT"), n.d.READ];
                case 2:
                  return [this.getCdnIconUrl("AUDIO"), n.d.LISTEN];
                case 3:
                  return [this.getCdnIconUrl("VIDEO"), n.d.WATCH];
                default:
                  return ["", ""];
              }
            else if (4 === e) return [this.getCdnIconUrl("LIVE"), n.d.WATCH];
            return ["", ""];
          },
          getCdnIconUrl: (e) => (
            n.b[e] || (n.b[e] = Object(r.a)(n.h[e], "!40x40.png")), n.b[e]
          ),
        },
      });
    },
    SBQm: function (e, t, a) {
      a.d(t, "a", function () {
        return r;
      }),
        a.d(t, "b", function () {
          return n;
        }),
        a.d(t, "c", function () {
          return i;
        });
      var r = { multi: 0, single: 1 },
        n = { theme: 0, custome: 1 },
        i = { dark: 0, light: 1 };
    },
    STCT: function (e, t, a) {
      a.d(t, "a", function () {
        return r;
      });
      var r = {
        url: { activityMarketingPage: "/packages/ext-marketing-page/index" },
        api: {
          isShowMarketingPage: "/wscdeco/decorate/marketing_page_config.json",
        },
      };
    },
    XdBP: function (e, t, a) {
      a.d(t, "a", function () {
        return r;
      });
      var r = {
        kdtId: { type: Number, required: !0 },
        groupAlias: { type: String, required: !0 },
        hasAuthorized: { type: Boolean, required: !0 },
        scene: { type: String, required: !0 },
        pageQuery: { type: Object, required: !0 },
        hasLevel: { type: Boolean, required: !0 },
      };
    },
    Y1sx: function (e, t, a) {
      var r = a("Fcif"),
        n = a("jA1y");
      a("a1Mm"), a("taYb"), a("zMoS");
      var i = !1,
        o = 0,
        s = getApp(),
        c = "/wsctrade/cartGoodstList.json",
        u = "/wsctrade/cart/updateCartGoodsNum.json",
        p = "/wsctrade/cart/deleteGoods.json",
        d = "/wsctrade/cart/deleteBatchList.json",
        l = "/wsctrade/cart/selectGoods.json",
        h = "/wsctrade/cart/unselectGoods.json",
        g = "/wsctrade/cart/batchSelectGoods.json",
        f = "/wsctrade/cart/batchUnselectGoods.json",
        m = "/wsctrade/cart/selectALLGoods.json",
        v = "/wsctrade/cart/unselectAllGoods.json",
        y = "/wsctrade/cart/reselect-goods.json",
        b = "/wsctrade/order/book.json",
        T = "/wscgoods/detail-api/calculate-price.json";
      function w(e) {
        var {
            kdtId: t,
            goodsId: a,
            skuId: r,
            storeId: n,
            channelId: i,
            activityId: o,
            cartId: s = null,
            activityAlias: c = "",
          } = e,
          u = {
            cartId: s,
            kdtId: t,
            goodsId: a,
            skuId: r,
            activityId: o,
            activityAlias: c,
          };
        return n > 0 && (u.storeId = n), i > 0 && (u.channelId = i), u;
      }
      function I(e, t, a) {
        void 0 === a && (a = "POST");
        var r = {};
        return (
          i && (r = { skipKdtId: !0, skipShopInfo: !0 }),
          Object(n.c)({ path: e, data: t, method: a, config: r })
        );
      }
      function C(e) {
        return I(T, e);
      }
      var S,
        j,
        k,
        O =
          ((S = (e) => C(e)),
          (j = 300),
          (k = null),
          function () {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
              t[a] = arguments[a];
            return new Promise((e, a) => {
              var r = this;
              clearTimeout(k),
                (k = setTimeout(() => {
                  S.apply(r, t)
                    .then((t) => {
                      e(t);
                    })
                    .catch((e) => {
                      a(e);
                    });
                }, j));
            });
          });
      t.a = {
        fetchCartList: function (e) {
          var { cartGroupId: t } = e,
            a = { store_id: s.getOfflineId() || 0, supportReviveGroup: !0 };
          return (
            i && (a.cart_type = "all"),
            o > 0 && (a.channelId = o),
            t && (a.groupId = t),
            I(c, a, "GET")
          );
        },
        updateCartItem: function (e) {
          var { num: t } = e;
          return I(u, Object(r.a)({}, w(e), { num: t }));
        },
        deleteCartItem: function (e) {
          return I(p, w(e));
        },
        deleteCartBatch: function (e) {
          var t = e.map((e) => w(e));
          return I(d, { ids: t });
        },
        postBookKey: function (e) {
          return I(b, e);
        },
        checkItem: function (e, t) {
          var a = w(t);
          return I(e ? l : h, a);
        },
        checkBatch: function (e, t) {
          var a = { goodsList: (t || []).map((e) => w(e)) };
          return I(e ? g : f, a);
        },
        groupCheckAll: function (e, t) {
          o > 0 && (a.channelId = o);
          var a = { goodsList: (t || []).map((e) => w(e)) };
          return I(e ? g : f, a);
        },
        checkAll: function (e, t) {
          return o > 0 && (t.channelId = o), I(e ? m : v, t);
        },
        bill: function (e) {
          return Object(n.b)({
            api: "youzan.trade.bill.goods.url/3.0.0/get",
            data: e,
          });
        },
        reselectGoods: function (e) {
          return I(
            y,
            Object(r.a)({}, w(e), {
              messages: e.messages,
              propertyIds: e.propertyIds,
              extraAttribute: e.extraAttribute,
            })
          );
        },
        calculatePrice: C,
        handleAsyncPropPriceApiDebounce: O,
      };
    },
    ZjUY: function (e, t, a) {
      a.d(t, "c", function () {
        return g;
      }),
        a.d(t, "a", function () {
          return f;
        }),
        a.d(t, "b", function () {
          return T;
        });
      var r = a("Fcif"),
        n = a("+I+c"),
        i = a("WNIS"),
        o = a("v6dD"),
        s = 1,
        c = 2,
        u = 31,
        p = 32,
        d = 33,
        l = { 1: "一", 2: "二", 3: "三", 4: "四", 5: "五", 6: "六", 7: "日" };
      var h = [
          "planType",
          "couponList",
          "effectiveTime",
          "isFree",
          "pointDiscount",
          "pointRate",
          "point",
          "isMemberPrice",
        ],
        g = (e) => {
          var {
              planType: t,
              couponList: a,
              effectiveTime: g,
              isFree: f,
              pointDiscount: m,
              pointRate: v,
              point: y,
              isMemberPrice: b,
            } = e,
            T = Object(n.a)(e, h),
            w = ((e, t, a, r, n) => {
              var i = [];
              return (
                t &&
                  i.push({
                    icon: "https://img01.yzcdn.cn/upload_files/2020/08/12/FtX6bRYCOkvCMdDSjueHMe0CLlBc.png",
                    facadeShowName: t / 10 + "折",
                  }),
                n &&
                  i.push({
                    icon: "https://img01.yzcdn.cn/upload_files/2021/04/15/FoD3JBAijPl-8DfIigvRI8VBF9Ej.png",
                    facadeShowName: "会员价",
                  }),
                e &&
                  i.push({
                    icon: "https://img01.yzcdn.cn/upload_files/2020/08/12/Fvv48DyEPCkmXxSCmcIHmVBLN7-N.png",
                    facadeShowName: "包邮",
                  }),
                a &&
                  i.push({
                    icon: "https://img01.yzcdn.cn/upload_files/2020/08/12/FknvorIIUp83mx0fRBmDjJ4alLqv.png",
                    facadeShowName: a / 10 + "倍积分",
                  }),
                r &&
                  i.push({
                    icon: "https://img01.yzcdn.cn/upload_files/2020/08/12/FjLAxv1hsUpNRu_Hp9cj7xjPfbXi.png",
                    facadeShowName: "送" + r + "积分",
                  }),
                i
              );
            })(f, m, v, y, b),
            I = (function (e, t) {
              return t === i.i.Birthday
                ? e.termType === u
                  ? "生日当天"
                  : e.termType === p
                  ? "生日当周"
                  : "生日当月"
                : e.termType === d
                ? Array.isArray(e.cycleMonthDays)
                  ? "每月 " +
                    (e.cycleMonthDays || []).map((e) => e + "日").join("、")
                  : "每月 " + e.cycleBegin + "日 - " + e.cycleEnd + "日"
                : e.termType === p
                ? "每周 " +
                  (null == e || null == (a = e.cycleWeekDays)
                    ? void 0
                    : a.map((e) => "周" + l[e]).join("、"))
                : e.termType === u
                ? "每天 " + e.cycleBegin + " - " + e.cycleEnd
                : e.termType === c
                ? Object(o.b)(null == e ? void 0 : e.termBeginAt, "MM月DD日") +
                  " - " +
                  Object(o.b)(null == e ? void 0 : e.termEndAt, "MM月DD日")
                : e.termType === s
                ? "长期有效"
                : void 0;
              var a;
            })(g, t);
          return Object(r.a)(
            { coupons: a, benefitList: w, planEffectiveTime: I, planType: t },
            T
          );
        },
        f = (e) => {
          switch (e) {
            case i.i.Birthday:
              return {
                popBackgroundSrc:
                  "https://b.yzcdn.cn/public_files/d3f9d3c42be9ded24108766e784f5cbf.png",
                popBackgroundTranslate: "4px",
                popBackgroundHeight: "76px",
                popVipMaskTop: "80px",
              };
            case i.i.MemberDay:
              return {
                popBackgroundSrc:
                  "https://b.yzcdn.cn/public_files/447a17e7d98639ac88ecfa6301046902.png",
                popBackgroundTranslate: "32px",
                popBackgroundHeight: "125px",
                popVipMaskTop: "129px",
              };
            case i.i.Festival:
              return {
                popBackgroundSrc:
                  "https://b.yzcdn.cn/public_files/d6b1f2cfee98bbccb04d8c5c7ef716af.png",
                popBackgroundTranslate: "29px",
                popBackgroundHeight: "112px",
                popVipMaskTop: "119px",
              };
            default:
              return "";
          }
        },
        m = "home/dashboard",
        v = "feature",
        y = "levelcenter",
        b = "other",
        T = function (e, t) {
          return (
            void 0 === t && (t = {}),
            e.includes(m)
              ? m
              : e.includes(v)
              ? t.alias || v
              : e.includes(y)
              ? y
              : b
          );
        };
    },
    asq2: function (e, t, a) {
      t.a = Behavior({
        methods: {
          closePopContent() {
            this.setYZData({ visible: !1 });
          },
          onClickClose() {
            this.closePopContent(),
              this.triggerEvent("close-pop", {
                currentShow: !1,
                image_url: this.getAdImageInfo(),
                isRealClose: !0,
              });
          },
          onOtherClose(e) {
            void 0 === e && (e = !1),
              this.closePopContent(),
              this.triggerEvent("close-pop", { isRealClose: e });
          },
        },
      });
    },
    ayAB: function (e, t, a) {
      a.d(t, "b", function () {
        return i;
      }),
        a.d(t, "a", function () {
          return o;
        });
      var r = a("3cdT"),
        n = getApp(),
        i = (e) =>
          n.request({
            path: "/wscump/visit-gift/join.json",
            data: { channel: r.b, source: e },
            method: "POST",
          }),
        o = (e) =>
          n.request({
            path: "/wscump/coupon/coupon_use_redirect.json",
            data: e,
          });
    },
    "c6+E": function (e, t, a) {
      a.d(t, "a", function () {
        return r;
      }),
        a.d(t, "b", function () {
          return n;
        });
      var r = { Free: 1, Pay: 2 },
        n = { UNKNOWN: "unknown", SUCCESS: "success", THRESHOLD: "threshold" };
    },
    cgm0: function (e, t, a) {
      var r = a("LOL7");
      t.a = Behavior({
        data: { state: { isShow: !1 } },
        attached() {
          Object(r.b)().then((e) => {
            var { value: t } = e;
            return this.setYZData({ "state.isShow": t });
          });
        },
      });
    },
    flXC: function (e, t, a) {
      t.a = Behavior({ properties: { pageData: { type: Object, value: {} } } });
    },
    gUUB: function (e, t, a) {
      a.d(t, "a", function () {
        return r;
      });
      var r = Behavior({
        methods: {
          touchStart(e) {
            (this.direction = ""),
              (this.deltaX = 0),
              (this.deltaY = 0),
              (this.offsetX = 0),
              (this.offsetY = 0),
              (this.startX = e.touches[0].clientX),
              (this.startY = e.touches[0].clientY);
          },
          touchMove(e) {
            var t = e.touches[0];
            (this.deltaX = t.clientX - this.startX),
              (this.deltaY = t.clientY - this.startY),
              (this.offsetX = Math.abs(this.deltaX)),
              (this.offsetY = Math.abs(this.deltaY)),
              (this.direction =
                this.offsetX > this.offsetY
                  ? "horizontal"
                  : this.offsetX < this.offsetY
                  ? "vertical"
                  : "");
          },
        },
      });
    },
    iBvy: function (e, t, a) {
      t.a = Behavior({
        properties: {
          linkType: { type: Number, value: "link" },
          appId: String,
          path: String,
          itemInfo: { type: Object, value: {} },
          im: { type: Object, value: {} },
          useShortLink: { type: Number, value: 0 },
          shortLink: { type: String, value: "" },
        },
      });
    },
    lDC5: function (e, t, a) {
      var r = 5,
        n = 6;
      t.a = {
        subtitle(e, t) {
          var a = e.summary || "",
            r = e.columnTitle || "";
          return t ? r : a;
        },
        statusList(e, t, a) {
          var r = [e.publishAt],
            n = e.pageView + "次" + a;
          return !t && e.pageView && r.push(n), r;
        },
        priceText(e, t, a) {
          if (2 !== e.sellerType) {
            var r = "￥" + (e.price / 100).toFixed(2);
            return [
              "已购买",
              "免费试" + a,
              r,
              "",
              "会员免费",
              r,
              r,
              "免费",
              "",
            ][t];
          }
          return "";
        },
        priceTextClass: (e) => (e ? "" : "text-red"),
        priceTagText: (e, t) =>
          t === r ? "会员价" : t === n ? e.groupOnNum + "人团购价" : "",
        contentUrl: (e) =>
          "/packages/paidcontent/content/index?alias=" + e.alias,
        thumbnailUrl: (e) => (e.picture || {}).cover || "",
        icon: (e) =>
          [
            "",
            "https://img01.yzcdn.cn/weapp/paidcontent/doc.png",
            "https://img01.yzcdn.cn/weapp/paidcontent/music.png",
            "https://img01.yzcdn.cn/weapp/paidcontent/video.png",
          ][e.mediaType || 0],
      };
    },
    lGl3: function (e, t, a) {
      a.d(t, "a", function () {
        return i;
      }),
        a.d(t, "b", function () {
          return o;
        });
      var r = a("eijD"),
        n = getApp(),
        i = (function () {
          var e = Object(r.a)(function* (e) {
            var { extraParams: t } = e;
            return n.request({
              path: "/retail/scrm/api/behaviorReport.json",
              data: { scene: "member_repurchase_coupon", extraParams: t },
              method: "POST",
            });
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        o = (function () {
          var e = Object(r.a)(function* () {
            return n.request({
              path: "/retail/scrm/api/getUserCouponTips.json",
              method: "GET",
            });
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
    },
    mvTU: function (e, t, a) {
      t.a = Behavior({
        properties: {
          appId: String,
          layout: { type: Number, value: 0 },
          sizeType: { type: Number, value: 0 },
          showTitle: { type: Boolean, value: !0 },
          showSubTitle: Boolean,
          showPrice: { type: Boolean, value: !0 },
          showBuyButton: { type: Boolean, value: !0 },
          buyButtonType: { type: Number, value: 1 },
          showCornerMark: Boolean,
          cornerMarkType: { type: Number, value: 0 },
          cornerMarkImage: String,
          imageRatio: Number,
          imageFillStyle: { type: Number, value: 2 },
          buttonText: String,
          extraData: { type: Object, value: {} },
          redirectType: { type: Number, value: 3 },
          pageMargin: { type: Number, value: 15 },
          goodsMargin: { type: Number, value: 10 },
          textStyleType: { type: Number, value: 1 },
          textAlignType: { type: String, value: "left" },
          borderRadiusType: { type: Number, value: 1 },
          showUmpTags: Boolean,
          umpTagsMaxCount: Number,
          showLastSelfDefineItem: Boolean,
        },
        methods: {
          setLoadStatus(e) {
            this.selectComponent("#cap-goods-layout").setSwipeStatus(e);
          },
          handleGoodsBuyClick(e) {
            this.triggerEvent("buy", e.detail);
          },
          handleGoodsItemClick(e) {
            this.triggerEvent("item-click", e.detail);
          },
          handleLoadMore() {
            this.triggerEvent("load-more");
          },
        },
      });
    },
    oePL: function (e, t, a) {
      var r = a("9KEa"),
        { platform: n } = Object(r.b)(),
        i = 4,
        o = 5;
      t.a = {
        subtitle(e, t) {
          var a = e.lastUpdatedInfo || {},
            r = e.summary || "";
          return t && a && a.lastUpdatedTitle
            ? a.publishAt + "更新：" + a.lastUpdatedTitle
            : r;
        },
        statusList(e, t) {
          var a = [],
            r = (e.isUpdate ? "已更新" : "共") + e.contentsCount + "期";
          e.contentsCount && a.push(r);
          var i = e.subscriptionsCount + ("ios" === n ? "人订阅" : "人已购");
          return !t && e.subscriptionsCount && a.push(i), a;
        },
        priceText(e, t) {
          var a = "￥" + (e.price / 100).toFixed(2);
          return ["已购买", "免费", a, "会员免费", a, a, ""][t];
        },
        priceTagText: (e, t) =>
          t === i ? "会员价" : t === o ? e.groupOnNum + "人团购价" : "",
        columnUrl: (e) => "/packages/paidcontent/column/index?alias=" + e.alias,
        thumbnailUrl: (e) => e.cover || "",
      };
    },
    pQaC: function (e, t, a) {
      a.d(t, "b", function () {
        return i;
      }),
        a.d(t, "a", function () {
          return o;
        });
      var r = a("Fcif"),
        n = getApp(),
        i = (e) => {
          var t = Date.now();
          return n.request({
            path: "/wscshop/shopad/current-ad.json",
            data: Object(r.a)({ noCacheFlag: t }, e),
          });
        },
        o = (e) => {
          var t = Date.now();
          return n.request({
            path: "/wscshop/shopad/close.json",
            data: { adId: e, noCacheFlag: t },
          });
        };
    },
    rGNL: function (e, t, a) {
      var r = a("XCh3"),
        n = a("2wjL"),
        i = getApp();
      t.a = Behavior({
        methods: {
          traggerLogger(e, t, a) {
            var { info: n, componentName: o = "", bizName: s = "" } = this.data,
              { linkOpt: { source: c = "" } = {} } = n,
              u = i.getKdtId();
            Object(r.a)({
              et: e,
              ei: t,
              en: a,
              params: { biz_name: s, from_source: c + "_" + u, component: o },
            });
          },
          handelClick() {
            var { linkOpt: { path: e = "", source: t = "" } = {} } =
                this.data.info,
              a = i.getKdtId();
            if (e) {
              this.traggerClickLogger && this.traggerClickLogger();
              var r = n.a.add(e, { from_source: t + "_" + a, kdt_id: a });
              wx.navigateToMiniProgram({
                appId: "wxf1fdc416d4ced1b3",
                path: r,
              });
            }
          },
        },
      });
    },
    u55p: function (e, t, a) {
      var r = a("6i0Q");
      t.a = Behavior({
        data: { themeColor: "" },
        attached() {
          this.getThemeColor("general");
        },
        methods: {
          getThemeColor(e) {
            r.a.getThemeColor(e).then((e) => {
              this.setData({ themeColor: e });
            });
          },
        },
      });
    },
    wIGu: function (e, t, a) {
      a.d(t, "c", function () {
        return i;
      }),
        a.d(t, "b", function () {
          return o;
        }),
        a.d(t, "a", function () {
          return s;
        });
      a("c6+E");
      var r = getApp(),
        n = function (e) {
          return (
            void 0 === e && (e = {}),
            (e.data = e.data || {}),
            (e.data.timeStamp = e.data.timeStamp || Date.now()),
            r.request(e)
          );
        },
        i = () =>
          n({ path: "/wscuser/level/api/guide/homePageShowGuide.json" }),
        o = () => n({ path: "/wscuser/level/api/getLevelGiftBag.json" });
      function s() {
        return r.request({
          path: "/wscuser/level/api/checkMemRegistrationState.json",
        });
      }
    },
  });
