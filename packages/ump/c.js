"use strict";
(exports.ids = [6]),
  (exports.modules = {
    "1RJ/": function (t, e, n) {
      n.d(e, "a", function () {
        return i;
      });
      var a = getApp();
      function i(t) {
        var {
          scene: e = "",
          successCallBack: n = null,
          failCallBack: i = null,
        } = t;
        wx.showLoading(),
          a
            .request({
              path: "/wscump/common/get-template.json",
              query: { scene: e },
            })
            .then((t) => {
              wx.hideLoading(),
                t && t.templateIdList
                  ? wx.requestSubscribeMessage({
                      tmplIds: t.templateIdList,
                      success: () => {
                        n && n();
                      },
                      fail: (t) => {
                        i && i(t);
                      },
                    })
                  : n && n();
            })
            .catch((t) => {
              wx.hideLoading(), t && wx.showToast({ title: t, icon: "none" });
            });
      }
    },
    "4gzz": function (t, e, n) {
      n.d(e, "b", function () {
        return a;
      }),
        n.d(e, "a", function () {
          return i;
        }),
        n.d(e, "c", function () {
          return o;
        });
      var a = { phone: /^1\d{10}$/ },
        i = 7,
        o = { start: 1, singIn: 2 };
    },
    "5C+H": function (t, e, n) {
      n.d(e, "a", function () {
        return a;
      });
      var a = {
        url: {
          activityHomePage: "/packages/ump/collect-gift/home/index",
          homePage: "/packages/home/dashboard/index",
          userIntegralCenterPage: "/packages/user/integral/index",
          usingCouponPage: (t) => {
            var { couponGroupId: e } = t;
            return (
              "/packages/shop/goods/group/index?pageType=coupon&group_id=" + e
            );
          },
        },
        asserts: {
          guideImages: {
            step1:
              "https://img01.yzcdn.cn/public_files/2019/09/24/897fcec40bf6effbc23663d96c4c4da0.png",
            step2_top:
              "https://b.yzcdn.cn/public_files/2018/10/22/494fdacec1a0663871dd4999c7caef25.png",
            step2_bom:
              "https://img01.yzcdn.cn/public_files/2018/10/22/9912c1434bc9bc29dd729a3144e9b0ed.png",
            bg: "https://img01.yzcdn.cn/wsc/20180908/images/collect-gift-bg-small.png",
          },
          collectGiftShareCover:
            "https://img01.yzcdn.cn/wsc/20180828/images/collect-gift-share-cover.png",
        },
        api: {
          isShowCollectGift: "wscump/collect_gift/is_show_collect_gift.json",
          getCollectGift: "wscump/collect_gift/get_collect_gift.json",
          getCollectGiftJoin: "wscump/collect_gift/get_collect_gift_join.json",
          joinCollectGift: "wscump/collect_gift/join_collect_gift.json",
          getChannelAccount: "/wscump/collect_gift/get_channel_account.json",
        },
      };
    },
    "5rC6": function (t) {
      t.exports = JSON.parse("{}");
    },
    "7rEJ": function (t, e, n) {
      var a = {
          showSheet: !1,
          showFollow: !1,
          showFeature: !1,
          showBuy: !1,
          showCodePop: !1,
          showHandselPop: !1,
          showSku: !1,
          showPrizePop: !1,
          reminderIsOpen: !1,
          showError: !1,
          cartGoodsNum: 0,
          shareLink: "",
          voucherAlias: "",
          shopName: "",
          pageQuery: {},
          activity: {},
          currentTask: {},
          skuInfo: {},
          currentTickets: {},
          userInfo: {},
          userTicket: {
            loading: !1,
            finished: !1,
            pageNo: 1,
            pageSize: 10,
            codes: [],
          },
          navigationInfo: { statusBarHeight: 20, navHeight: 44 },
          sliderList: [],
          leaderBoard: [],
          taskGoodsList: [],
          recommendGoods: [],
        },
        i = n("Fcif"),
        o = n("Fm61"),
        r = n("otsx"),
        s = {
          showEnd(t) {
            var { showError: e, activity: n } = t;
            return (
              e ||
              (!n.joinStatus &&
                [r.m.DRAWING, r.m.DRAWED].indexOf(n.status) > -1)
            );
          },
          remainTime(t) {
            var { endAt: e = 0 } = t.activity;
            return e - Date.now();
          },
          userTasks(t) {
            var { userTaskDTOS: e = [] } = t.activity || {},
              n = {};
            return (
              e &&
                e.length &&
                e.forEach((t) => {
                  n[t.taskType] = t;
                }),
              n
            );
          },
          taskList(t, e) {
            var { tasks: n, joinStatus: a, status: o } = t.activity;
            if (!a || 2 !== o) return [];
            var { userTasks: s = {} } = e;
            return (n || [])
              .map((t) => {
                var e = r.n[t.type],
                  n = s[t.type] || {},
                  a = n.status ? "已完成" : e.btnText;
                return Object(i.a)({}, t, e, n, {
                  num: t.winTicketNums,
                  btnText: a,
                });
              })
              .sort((t, e) => t.status - e.status);
          },
          goodsTask(t, e) {
            var { taskList: n } = e;
            return n.filter((t) => t.type === r.o.GOODS).pop();
          },
          prizeInfo(t, e) {
            var { level: n } = t.activity.userDrawResultDTO || {};
            return e.prizeList.filter((t) => t.level === n)[0] || {};
          },
          actionBtns(t, e) {
            var { prizeInfo: n } = e,
              {
                status: a = r.m.ING,
                joinStatus: i,
                userDrawResultDTO: o = {},
              } = t.activity || {},
              { prizeType: s } = n,
              { prizeStatus: c } = o;
            return r.a[a](i, s, c);
          },
          prizeList(t) {
            var { prizes: e = [] } = t.activity;
            return e.map((t) => {
              var { prizeType: e, level: n } = t;
              return (
                (t.img = r.i[e] || ""),
                (t.levelStr = r.j[n]),
                e === r.l.COUPON &&
                  ((t.valueStr = Object(o.b)(t)),
                  (t.fontSize =
                    t.valueCopywriting.length > 5 ? "18px" : "30px"),
                  3 === t.preferentialMode && (t.fontSize = "16px"),
                  (t.showTitle = t.preferentialCopywriting + "券")),
                e === r.l.MONEY &&
                  ((t.title = t.storedMoney + "元店铺红包"),
                  (t.showTitle = "店铺红包" + t.storedMoney + "元")),
                e === r.l.GOODS &&
                  ((t.img = JSON.parse(t.goodsPictureUrl)[0].url),
                  (t.showTitle = t.title)),
                t
              );
            });
          },
          featureList(t, e) {
            var { userTasks: n } = e;
            return n[2]
              ? (n[2].browsePageTasks || []).sort((t, e) => t.status - e.status)
              : [];
          },
          concat(t) {
            var { areaCode: e, phoneNumber: n = "" } = t.activity;
            return "" + (e ? e + "-" : "") + n;
          },
          extraData(t) {
            var { alias: e } = t.activity;
            return {
              bizCode: 4,
              bizSubCode: 1,
              activityKey: e,
              feature: { alias: e },
            };
          },
          prizePop(t, e) {
            var n,
              a,
              i,
              { isWin: o, prizeInfo: s } = e,
              {
                code: c,
                level: u,
                prizeStatus: p,
                ranking: d,
                winType: l,
                sendResult: h,
              } = t.activity.userDrawResultDTO || {},
              m = {},
              g = "",
              T = "",
              v = p === r.k.FAIL;
            return (
              o && !v
                ? ((m = r.h[s.prizeType](p)),
                  (n = r.j[u] + " 等 奖"),
                  (a = s.title),
                  (g = l ? "NO." + d : c),
                  s.prizeType === r.l.GOODS && (i = r.e[p] || ""),
                  s.prizeType !== r.l.GOODS && (i = r.g[p]))
                : o && v
                ? ((n = h),
                  (a = ""),
                  (T = "奖品发放失败"),
                  (i = "进店逛逛"),
                  (m = { preText: "联系", nextText: "商家", type: "CONCAT" }))
                : ((n = "很遗憾你没有中奖"),
                  (a = "再接再厉，下次锦鲤就是你"),
                  (m = { preText: "进店", nextText: "逛逛", type: "HOME" })),
              {
                isFail: v,
                winCode: g,
                levelStr: n,
                stateStr: T,
                title: a,
                desc: i,
                btnInfo: { type: m.type, text: m.preText + "\n" + m.nextText },
              }
            );
          },
          userRanking(t) {
            var { ranking: e } = t.activity.userDrawResultDTO || {};
            return 999999 === e ? "100+" : e;
          },
          isWin(t) {
            var { userDrawResultDTO: e } = t.activity;
            return e && 2 === e.lotteryStatus;
          },
          myCodeDesc(t, e) {
            var { userRanking: n, isWin: a } = e,
              {
                status: i,
                isOpenRank: o,
                userDrawResultDTO: s = {},
              } = t.activity;
            return [r.m.ING, r.m.DRAWING].indexOf(i) > -1 && o
              ? "排名：" + n
              : i === r.m.DRAWED && a
              ? "恭喜你，抽中" + r.j[s.level] + "等奖"
              : i !== r.m.DRAWED || a
              ? ""
              : "很遗憾，未中奖";
          },
          rules(t, e) {
            var {
                isOpenRank: n,
                topNum: a,
                areaCode: i,
                phoneNumber: o = "",
              } = t.activity,
              { prizeList: s } = e,
              c = n
                ? "排行榜前" + a + "名用户直接中一等奖，排除排行榜中奖者后"
                : "",
              u = s[0] || {},
              p = s[1],
              d = p && p.prizeType === r.l.COUPON ? "优惠券" : "",
              l = p
                ? "，抽完二等奖后再从剩余用户中奖码中抽取一等奖" +
                  u.sendNum +
                  "名"
                : "",
              h = p ? "，二等奖为" + d + p.title + "。" : "",
              m = i ? i + "-" : "",
              g = "";
            p
              ? (g =
                  p.prizeType !== r.l.GOODS
                    ? "" +
                      d +
                      p.title +
                      "在抽奖结束后30分钟内发放到中奖者账户内，" +
                      u.title +
                      "在抽奖结束后5个工作日内发货。"
                    : u.title +
                      "、" +
                      p.title +
                      "在抽奖结束后5个工作日内发货。")
              : (g = u.title + "在抽奖结束后5个工作日内发货。");
            return [
              "开奖时间：活动结束后立即开奖。",
              "1、活动结束后" +
                c +
                "，在所有参与用户的抽奖码中随机抽取中奖的抽奖码，抽中者获奖；",
              "2、抽奖优先抽取" +
                (p ? "二等奖" : "一等奖") +
                (p ? p.sendNum : u.sendNum) +
                "名" +
                l +
                "，一等奖为" +
                u.title +
                h,
              "3、同一用户本次活动中仅能中奖一次，持有多张中奖码，中奖概率叠加。",
              "4、" + g,
              "5、客服电话：" + m + o,
            ];
          },
        },
        c = n("2wjL"),
        u = n("Hhx2"),
        p = n("TXmq"),
        d = {
          GET_ACTIVITY(t, e) {
            var { commit: n, dispatch: a, state: i, getters: o } = t,
              { alias: s, voucherAlias: u } = i.pageQuery;
            Object(p.c)({ alias: s })
              .then((t) => {
                n("SET_ACTIVITY", t);
                var {
                    joinStatus: i,
                    shareVoucherAlias: p,
                    status: d,
                    hasFollow: l,
                  } = t,
                  h = "packages/ump/lottery-code/index?alias=" + s;
                if (i) {
                  h = c.a.add(h, { voucherAlias: p });
                  var { userTasks: m, goodsTask: g } = o;
                  if (
                    (l &&
                      m[1] &&
                      0 === m[1].status &&
                      a("JOIN", { eventType: 5 }),
                    g && !g.status && d === r.m.ING && !e)
                  ) {
                    var T = JSON.stringify(g.goodsIdList || []);
                    a("GET_GOODS_LIST", { ids: T, type: "SET_TASK_GOODS" });
                  }
                }
                u &&
                  !i &&
                  (n("SET_VOUCHER_ALIAS", u),
                  n("TOGGLE_POP_VISIBLE", {
                    name: "showHandselPop",
                    value: !0,
                  })),
                  [r.m.DRAWING, r.m.DRAWED].indexOf(d) > -1 &&
                    n("TOGGLE_POP_VISIBLE", {
                      name: "showPrizePop",
                      value: !0,
                    }),
                  n("SET_SHARE_LINK", h),
                  !e && a("GET_RECOMMEND_GOODS"),
                  e || 2 !== d || a("GET_REMINDER_STATE");
              })
              .catch((t) => {
                wx.showToast({
                  title: t.msg || "获取活动信息失败",
                  icon: "none",
                }),
                  n("SET_ERR_PAGE");
              });
          },
          JOIN(t, e) {
            var { commit: n, state: a, dispatch: o } = t,
              { alias: r } = a.activity;
            Object(p.l)(Object(i.a)({ alias: r }, e))
              .then((t) => {
                var { eventType: a } = e,
                  { tickets: i } = t;
                n("SET_CUR_TICKETS", {
                  title:
                    (5 == a ? "已关注，" : "恭喜你") +
                    "获得" +
                    i.length +
                    "个幸运码",
                  tickets: i,
                }),
                  2 === a &&
                    n("TOGGLE_POP_VISIBLE", {
                      name: "showHandselPop",
                      value: !1,
                    }),
                  n("TOGGLE_POP_VISIBLE", { name: "showCodePop", value: !0 }),
                  o("GET_ACTIVITY", !0);
              })
              .catch((t) => {
                wx.showToast({ title: t.msg || "抽奖失败", icon: "none" });
              });
          },
          GET_SLIDER_LIST(t) {
            var { commit: e, state: n } = t,
              { alias: a } = n.pageQuery;
            Object(p.j)({ alias: a }).then((t) => {
              t && t.length && e("SET_SLIDER_LIST", t || []);
            });
          },
          GET_USER_TICKETS(t, e) {
            var { state: n } = t,
              { pageNo: a, pageSize: i } = e,
              { alias: o } = n.activity;
            return Object(p.k)({ pageNo: a, pageSize: i, alias: o });
          },
          GET_RANKING_LIST(t, e) {
            var { state: n } = t,
              { pageNo: a, pageSize: i } = e,
              { drawActivityId: o } = n.activity;
            return Object(p.f)({ pageNo: a, pageSize: i, drawId: o });
          },
          GET_GOODS_LIST(t, e) {
            var { commit: n } = t,
              { ids: a, type: i } = e;
            Object(p.e)({ ids: a }).then((t) => {
              n(i, t);
            });
          },
          GET_CART_GOODS_NUM(t) {
            var { state: e, commit: n } = t,
              a = e.activity.id;
            Object(p.m)({ activityId: a }).then((t) => {
              var e = (t || []).length;
              n("SET_CART_GOODS_NUM", e);
            });
          },
          GET_GOODS_SKU(t, e) {
            var { commit: n } = t,
              { goods: a, buyText: i, type: o } = e;
            Object(p.d)({ alias: a.alias }).then((t) => {
              var e = Object(u.a)(t);
              e.stockNum
                ? (n("SET_SKU_DATA", { sku: e, goods: a, buyText: i, type: o }),
                  n("TOGGLE_POP_VISIBLE", { name: "showSku", value: !0 }),
                  n("TOGGLE_POP_VISIBLE", { name: "showBuy", value: !1 }))
                : wx.showToast({ title: "该商品已售罄！", icon: "none" });
            });
          },
          ADD_CART(t, e) {
            var { commit: n, dispatch: a } = t;
            Object(p.a)(Object(i.a)({}, e))
              .then(() => {
                wx.showToast({ title: "已成功添加到购物车", icon: "none" }),
                  n("TOGGLE_POP_VISIBLE", { name: "showSku", value: !1 }),
                  a("GET_CART_GOODS_NUM");
              })
              .catch((t) => {
                wx.showToast({
                  title: t.msg || "添加购物车失败，请重试",
                  icon: "none",
                });
              });
          },
          GET_RECOMMEND_GOODS(t) {
            var { state: e, commit: n } = t,
              { recommendType: a, recommendGoodsIds: i } =
                e.activity.recommendGoods,
              o = JSON.stringify(i);
            Object(p.g)({ type: a, ids: o }).then((t) => {
              n("SET_RECOMMEND_GOODS", t);
            });
          },
          GET_REMINDER_STATE(t) {
            var { commit: e, state: n } = t,
              a = n.activity.id;
            Object(p.h)({ activityId: a, bizId: 1, subBizId: 0 })
              .then((t) => {
                e("SET_REMINDER_OPEN", +t.value || 0);
              })
              .catch((t) => {
                wx.showToast({
                  title: t.msg || "获取开奖通知开启状态失败",
                  icon: "none",
                });
              });
          },
          SET_REMINDER_STATE(t, e) {
            var { commit: n, state: a } = t,
              i = a.activity.id;
            Object(p.n)({ activityId: i, bizId: 1, subBizId: 0, isOpen: e })
              .then(() => {
                n("SET_REMINDER_OPEN", !!e);
                var t = e ? "开启" : "关闭";
                wx.showToast({ title: "已" + t + "开奖通知", icon: "none" });
              })
              .catch((t) => {
                wx.showToast({
                  title: t.msg || "设置失败，请重试",
                  icon: "none",
                });
              });
          },
          GET_RESULT_LIST(t, e) {
            var { state: n } = t,
              { pageNo: a, pageSize: i, winType: o } = e,
              { drawActivityId: r } = n.activity;
            return Object(p.i)({
              pageNo: a,
              pageSize: i,
              drawId: r,
              winType: o,
            });
          },
        },
        l = n("a1Mm"),
        h = n("xyw3"),
        m = {
          INIT_PAGE_QUERY(t, e) {
            t.pageQuery = e;
          },
          TOGGLE_SHEET_SHOW(t) {
            t.showSheet = !t.showSheet;
          },
          TOGGLE_TASK_POPUP(t, e) {
            var { name: n, value: a } = e;
            t[n] = a;
          },
          SET_ACTIVITY(t, e) {
            var { avatar: n, nickName: a } = e;
            (t.activity = e), (t.userInfo = { avatar: n, nickName: a });
          },
          TOGGLE_POP_VISIBLE(t, e) {
            var { name: n, value: a } = e;
            t[n] = a;
          },
          SET_SLIDER_LIST(t, e) {
            t.sliderList = (e || []).map((t, e) =>
              Object(i.a)({}, t, {
                text: "获得" + t.num + "张幸运码",
                show: 0 === e,
                avatar: t.avatar || r.d,
              })
            );
          },
          SET_USER_TICKETS(t, e) {
            void 0 === e && (e = []), (t.userTickets = t.userTickets.concat(e));
          },
          SET_SHARE_LINK(t, e) {
            t.shareLink = e;
          },
          SET_VOUCHER_ALIAS(t, e) {
            t.voucherAlias = e;
          },
          SET_CURRENT_TASK(t, e) {
            t.currentTask = e;
          },
          SET_TASK_GOODS(t, e) {
            t.taskGoodsList = e
              .filter((t) => !t.isVirtual)
              .map((t) => {
                var e = Object(h.a)(t.price).toYuan().split("."),
                  n = e[0],
                  a = e[1];
                return Object(i.a)({}, t, { priceInYuan: n, priceInFen: a });
              });
          },
          SET_CART_GOODS_NUM(t, e) {
            t.cartGoodsNum = e;
          },
          SET_SKU_DATA(t, e) {
            t.skuInfo = e;
          },
          SET_CUR_TICKETS(t, e) {
            t.currentTickets = e;
          },
          SET_SHOP_NAME(t, e) {
            t.shopName = e;
          },
          SET_REMINDER_OPEN(t, e) {
            t.reminderIsOpen = !!e;
          },
          SET_USER_INFO(t, e) {
            var { avatar: n, nickName: a } = e;
            n && (t.userInfo.avatar = n), a && (t.userInfo.nickName = a);
          },
          SET_RECOMMEND_GOODS(t, e) {
            t.recommendGoods = (e || [])
              .filter((t) => !t.isVirtual)
              .map((t, e) => {
                var {
                    algs: n,
                    alias: a,
                    id: i,
                    imageUrl: r,
                    title: s,
                    url: c,
                    price: u,
                  } = t,
                  p = Object(o.d)(t, e);
                return {
                  id: i,
                  algs: n,
                  alias: a,
                  title: s,
                  url: c,
                  bannerId: Object(o.a)(e),
                  loggerParams: p,
                  price: Object(h.a)(u).toYuan(),
                  imgUrl: Object(l.a)(r, "!290x0.jpg"),
                };
              });
          },
          INIT_NAVIGATION(t, e) {
            t.navigationInfo = e;
          },
          SET_ERR_PAGE(t) {
            t.showError = !0;
          },
        };
      e.a = { namespaced: !0, state: a, getters: s, actions: d, mutations: m };
    },
    "81F4": function (t, e, n) {
      n.d(e, "g", function () {
        return i;
      }),
        n.d(e, "b", function () {
          return o;
        }),
        n.d(e, "f", function () {
          return r;
        }),
        n.d(e, "e", function () {
          return s;
        }),
        n.d(e, "n", function () {
          return c;
        }),
        n.d(e, "a", function () {
          return u;
        }),
        n.d(e, "c", function () {
          return p;
        }),
        n.d(e, "o", function () {
          return d;
        }),
        n.d(e, "j", function () {
          return l;
        }),
        n.d(e, "l", function () {
          return h;
        }),
        n.d(e, "k", function () {
          return m;
        }),
        n.d(e, "h", function () {
          return g;
        }),
        n.d(e, "p", function () {
          return T;
        }),
        n.d(e, "i", function () {
          return v;
        }),
        n.d(e, "d", function () {
          return S;
        }),
        n.d(e, "m", function () {
          return y;
        });
      var a = "packages",
        i = "神秘好友",
        o = a + "/ump/bargain-purchase/home/index",
        r =
          "https://img01.yzcdn.cn/wsc-minapp/bargain-detail/home/2018-08-06/profile.png",
        s = "「发现一个好货，邀请好友砍价拿走」",
        c = "「朋友一生一起走，帮砍一刀有没有」",
        u = {
          creatorOngoing: 1,
          creatorCutMinPrice: 2,
          creatorNeedButNoMinBuy: 3,
          creatorHasPurchased: 4,
          creatorCutExpired: 5,
          creatorActivityFinished: 6,
          creatorSoldOut: 7,
          creatorReserve: 15,
          creatorNeedLogin: 16,
          sponsorCanCut: 8,
          sponsorHasMinPrice: 9,
          sponsorActivityNoChance: 10,
          sponsorStoreNoChance: 11,
          sponsorCutFinished: 12,
          sponsorActivityFinished: 13,
          sponsorSoldOut: 14,
          sponsorNeedLogin: 17,
        },
        p = [1, 2, 3, 4, 5, 6, 7, 15],
        d = [1, 2, 3, 8, 9, 10, 11],
        l = [1, 2, 3, 4, 5, 6, 7, 15],
        h = [2, 5, 6, 7],
        m = [1, 3],
        g = {
          4: "已砍价购买",
          5: "砍价已过期",
          6: "活动已结束",
          7: "商品已售罄",
          12: "砍价已结束",
          13: "活动已结束",
          14: "商品已砍光",
        },
        T = {
          1: {
            getTip: (t) => {
              var { currentPrice: e } = t;
              return "恭喜你!已砍至" + e + "元啦!";
            },
            getBtnGroup: () => [
              {
                content: "现价购买",
                event: "onPurchase",
                class: "prime yellow-background",
              },
              {
                content: "邀请好友帮砍",
                event: "onInviteFriend",
                class: "prime gradient-red-background",
              },
            ],
          },
          2: {
            getTip: (t) => {
              var { currentPrice: e } = t;
              return "恭喜你!已砍至" + e + "元啦!";
            },
            getBtnGroup: (t) => {
              var { currentPrice: e } = t;
              return [
                {
                  content: e + "元购买",
                  event: "onPurchase",
                  class: "prime gradient-red-background",
                },
              ];
            },
          },
          3: {
            getTip: (t) => {
              var { totalNum: e, cutedNum: n, minPrice: a } = t;
              return (
                "还差<span class='strong'> " +
                (e - n) +
                " </span>人即可<span class='strong'> " +
                +a +
                " </span>元拿走"
              );
            },
            getBtnGroup: (t) => {
              var { currentPrice: e } = t;
              return [
                {
                  content: ["现价购买", "¥" + e],
                  event: "onPurchase",
                  class: "prime yellow-background price",
                },
                {
                  content: ["邀请好友帮砍"],
                  event: "onInviteFriend",
                  class: "prime gradient-red-background",
                },
              ];
            },
          },
          8: {
            getTip: (t) => {
              var { currentPrice: e, originPrice: n } = t;
              return "已砍" + (Number(n) - Number(e)).toFixed(2) + "元";
            },
            getBtnGroup: () => [
              {
                content: "我也要砍价拿",
                event: "onCreateNewBargain",
                class: "minor yellow-background",
              },
              {
                content: "帮好友砍一刀",
                class: "prime gradient-red-background",
                isAuthorizeRequired: !0,
              },
            ],
          },
          9: {
            getTip: () => "已砍至最低价",
            getBtnGroup: () => [
              {
                content: "我也要砍价拿",
                event: "onCreateNewBargain",
                class: "prime yellow-background",
              },
              { content: "已砍至最低价", class: "minor gray-background" },
            ],
          },
          10: {
            getTip: () => "已砍过此商品",
            getBtnGroup: () => [
              {
                content: "我也要砍价拿",
                event: "onCreateNewBargain",
                class: "prime yellow-background ",
              },
              { content: "已砍过此商品", class: "minor gray-background" },
            ],
          },
          11: {
            getTip: () => "砍价机会已用光",
            getBtnGroup: () => [
              {
                content: "我也要砍价拿",
                event: "onCreateNewBargain",
                class: "prime yellow-background",
              },
              { content: "砍价机会已用光", class: "minor gray-background" },
            ],
          },
        },
        v = {
          4: {
            getBtnGroup: (t) => {
              var { orderNo: e } = t;
              return [
                {
                  content: "查看订单",
                  navigateTo:
                    "/" + a + "/trade/order/result/index?orderNo=" + e,
                },
                {
                  content: "进入店铺",
                  navigateTo: "/" + a + "/home/dashboard/index",
                  openType: "switchTab",
                },
              ];
            },
          },
          5: {
            getBtnGroup: (t) => {
              var { alias: e, activityId: n } = t;
              return [
                {
                  content: "重新发起砍价",
                  navigateTo:
                    "/pages/goods/detail/index?alias=" +
                    e +
                    "&type=helpcut&activityId=" +
                    n,
                },
              ];
            },
          },
          6: {
            getBtnGroup: () => [
              {
                content: "进入店铺",
                openType: "switchTab",
                navigateTo: "/" + a + "/home/dashboard/index",
              },
            ],
          },
          7: {
            getBtnGroup: () => [
              {
                content: "进入店铺",
                openType: "switchTab",
                navigateTo: "/" + a + "/home/dashboard/index",
              },
            ],
          },
          12: {
            getBtnGroup: (t) => {
              var { alias: e, activityId: n } = t;
              return [
                {
                  content: "我也要砍价拿",
                  navigateTo:
                    "/pages/goods/detail/index?alias=" +
                    e +
                    "&type=helpcut&activityId=" +
                    n,
                },
              ];
            },
          },
          13: {
            getBtnGroup: () => [
              {
                content: "查看店铺商品",
                navigateTo: "/" + a + "/home/dashboard/index",
                openType: "switchTab",
              },
            ],
          },
          14: {
            getBtnGroup: () => [
              {
                content: "查看店铺商品",
                openType: "switchTab",
                navigateTo: "/" + a + "/home/dashboard/index",
              },
            ],
          },
        },
        _ = {
          getTip: (t) => {
            var { cutedPrice: e, leastPrice: n } = t;
            return {
              status: "",
              tip: [
                { type: "normal", content: "已砍" },
                { type: "price", content: e },
                { type: "normal", content: "元，仅差" },
                { type: "priceBig", content: n },
                { type: "normal", content: "元" },
              ],
            };
          },
          getBtn: (t) => {
            var { leastCutNum: e, minPrice: n } = t;
            return {
              content: "再邀请" + e + "人帮砍，可" + +n + "元拿",
              event: "invite",
            };
          },
          needProcess: !0,
          needCutDown: !0,
          cutDownText: "后过期",
          needCurrentBuy: (t) => t,
          needPopup: (t) => t,
        },
        f = {
          getTip: (t) => {
            var { leastPrice: e } = t;
            return {
              status: "",
              tip: [
                {
                  type: "normal",
                  content: "砍价结束，仅差",
                  class: "title-normal",
                },
                {
                  type: "price",
                  content: e,
                  class: "title-price price-" + e.length,
                },
                { type: "normal", content: "元砍成", class: "title-normal" },
              ],
            };
          },
          getBtn: () => ({ content: "重新发起砍价", event: "restart" }),
          needStartBtn: () => !1,
          needProcess: !0,
          needPopup: () => !0,
        },
        E = {
          getTip: (t) => {
            var { originalPrice: e } = t;
            return {
              status: "恭喜你！",
              tip: [
                {
                  type: "normal",
                  content: "已砍成价值",
                  class: "title-normal",
                },
                {
                  type: "priceBig",
                  content: e,
                  class: "title-price price-" + e.length,
                },
                { type: "normal", content: "元的商品", class: "title-normal" },
              ],
            };
          },
          getBtn: (t) => {
            var { minPrice: e } = t;
            return { content: "点击" + +e + "元拿", event: "buy" };
          },
          needPopup: () => !0,
        },
        S = {
          1: _,
          2: E,
          3: _,
          4: {
            getTip: (t) => {
              var { originalPrice: e } = t;
              return {
                status: "恭喜你！",
                tip: [
                  { type: "normal", content: "已砍成价值" },
                  { type: "priceBig", content: e },
                  { type: "normal", content: "元的商品" },
                ],
              };
            },
            getBtn: (t) => {
              var { canRestartBargain: e } = t;
              return {
                content: e ? "重新发起砍价" : "你已领取该商品，不能重复砍价",
                event: e ? "restart" : "",
                disable: !e,
              };
            },
          },
          5: f,
          6: {
            getTip: () => ({ status: "活动已结束，很遗憾未砍成" }),
            showRecommend: !0,
            needPopup: () => !0,
          },
          7: {
            getTip: () => ({ status: "库存不足，活动已结束" }),
            showRecommend: !0,
            needPopup: () => !0,
          },
          15: {
            getTip: (t) => {
              var { originalPrice: e, minPrice: n } = t;
              return {
                status: "",
                needWrap: !0,
                tip: [
                  { type: "normal", content: "价值" },
                  { type: "priceBig", content: e },
                  { type: "normal", content: "元商品" },
                  { type: "normal", content: n },
                  { type: "normal", content: "元拿" },
                ],
              };
            },
            needCutDown: !0,
            cutDownText: "后开始",
            getBtn: (t) => {
              var { finishBook: e } = t;
              return { content: e ? "已预约" : "立即预约", event: "reserve" };
            },
          },
        },
        y = {
          1: { type: "frameless", showRedPacket: !0 },
          2: {
            type: "frame",
            needGoodsImg: !0,
            content: E.getTip,
            btn: E.getBtn,
          },
          3: { type: "frameless", showRedPacket: !0 },
          5: {
            type: "frame",
            needGoodsImg: !0,
            content: f.getTip,
            btn: f.getBtn,
            extraBtn: () => ({ need: !0, content: "进店逛逛", event: "shop" }),
            needProcess: !0,
            showRecommendBottom: () => !0,
          },
          6: {
            type: "frame",
            content: () => ({ status: "活动已结束，很遗憾未砍成" }),
            viceBtn: () => ({ content: "进店逛逛", event: "shop" }),
            showRecommendTop: !0,
          },
          7: {
            type: "frame",
            content: () => ({ status: "库存不足，活动已结束" }),
            viceBtn: () => ({ content: "进店逛逛", event: "shop" }),
            showRecommendTop: !0,
          },
        };
    },
    "8P+v": function (t, e, n) {
      n.d(e, "c", function () {
        return u;
      }),
        n.d(e, "a", function () {
          return d;
        }),
        n.d(e, "b", function () {
          return l;
        }),
        n.d(e, "d", function () {
          return h;
        }),
        n.d(e, "e", function () {
          return m;
        });
      var a = n("Fcif"),
        i = n("53ek"),
        o = n("1Uvd"),
        r = n("OPDa"),
        s = n("Yt9W"),
        c = getApp(),
        u = (t) =>
          Object(i.a)(
            {
              sku: {
                isNoSku: (t) => t.sku.none_sku,
                id: (t) => t.sku.collection_id,
                tree: (t) => t.sku.tree,
              },
              skuForSkuComponent: (t) => t.sku,
            },
            [],
            t
          ),
        p = () => {
          var t = [0, 1, 2, 3, 5, 6, 7, 8, 9],
            e = [13, 15, 18],
            n = e.map((e) => t.map((t) => "" + e + t)),
            a = (t) => Math.floor(t * Math.random()),
            i = a(e.length),
            o = a(t.length),
            r = n[i][o],
            s = a(1e4);
          return r + "****" + (s = s ? s + 1e3 : s);
        },
        d = function (t, e, n) {
          void 0 === t && (t = 0), void 0 === e && (e = 0);
          var a = e,
            i = e;
          isNaN(+e) && (e = 0),
            isNaN(+t) || +t <= 0 ? (t = 100) : t - e > 0 && (t -= e);
          for (var o = [], r = 0; r < 10; r++) {
            n ||
              ((a = (+e + Math.random() * t).toFixed(2)),
              (i = (+e + Math.random() * t).toFixed(2)));
            var s = p(),
              c = parseInt(3 * Math.random() + "", 10),
              u = [
                s + "发起了砍价",
                s + "大刀一挥帮好友砍掉了 " + a + " 元",
                s + "砍价成功了，" + i + " 元购得商品",
              ];
            o.push({ isShort: c < 1, message: u[c], mobile: o.concat(p()) });
          }
          return o;
        },
        l = (t, e) =>
          r.a.getPageSpmTypeId() + "~" + t + "~" + e + "~" + Object(o.a)(8),
        h = (t) => {
          var {
            et: e = "view",
            ei: n = "view",
            en: i,
            pt: o = "helpCut",
            params: r = {},
          } = t;
          c.logger &&
            c.logger.log({
              et: e,
              ei: n,
              en: i,
              pt: o,
              params: Object(a.a)({ spm: "helpCut" }, r),
            });
        },
        m = (t, e) => {
          var n = getCurrentPages() || [],
            a = n[n.length - 1],
            i = null == a ? void 0 : a.route;
          Object(s.d)(i, t, e, "helpCut", n);
        };
    },
    "9CuX": function (t, e, n) {
      n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return i;
        });
      var a = { PackageBuy: "packagebuy", CodeLottery: "lotteryCode" },
        i = { PackageBuy: 7, CodeLottery: 204 };
    },
    "9Mjh": function (t) {
      t.exports = JSON.parse("{}");
    },
    A2ad: function (t, e, n) {
      n.d(e, "a", function () {
        return o;
      });
      var a = n("GFa9"),
        i = n("dUha"),
        o = (t) => {
          Object(i.b)({ alias: t, groupType: "card" })
            .then((t) => {
              var {
                isSwitchTab: e = !0,
                weappUrl: n = "/packages/home/dashboard/index",
              } = t || {};
              e ? a.a.switchTab({ url: n }) : a.a.navigate({ url: n });
            })
            .catch((t) => {
              var { msg: e } = t;
              wx.showToast({ title: e, icon: "none" });
            });
        };
    },
    AqvM: function (t, e, n) {
      e.a = (t) => [
        (e) => (t(e), Promise.resolve(e)),
        (e) => (t(e), Promise.reject(e)),
      ];
    },
    CKyg: function (t, e, n) {
      n.d(e, "a", function () {
        return i;
      });
      var a = n("2wjL"),
        i = function (t) {
          try {
            if (!t && !t.length) return "";
            for (var e = 0, n = ""; e < t.length; ) {
              var i = t[e].config && t[e].config.path,
                o = t[e].config && t[e].config.link,
                { type: r } = t[e];
              if ("ZNB.share" === r) {
                if (i) {
                  var s = a.a.getAll(i);
                  if (s.src) {
                    var c = decodeURIComponent(s.src),
                      u = a.a.getAll(c);
                    u.sl && (n = u.sl);
                  }
                }
                if (o) {
                  var p = a.a.getAll(o);
                  (n = p.sl), p.sl && (n = p.sl);
                }
              }
              e++;
            }
            return n;
          } catch (t) {
            return "";
          }
        };
    },
    CKzp: function (t, e, n) {
      n.d(e, "b", function () {
        return o;
      }),
        n.d(e, "c", function () {
          return r;
        }),
        n.d(e, "d", function () {
          return s;
        }),
        n.d(e, "a", function () {
          return c;
        });
      var a = n("5C+H"),
        i = getApp(),
        o = () => i.request({ path: a.a.api.getCollectGift }),
        r = () => i.request({ path: a.a.api.getCollectGiftJoin }),
        s = (t) =>
          i.request({ path: a.a.api.joinCollectGift, query: { imgUrl: t } }),
        c = () => i.request({ path: a.a.api.getChannelAccount });
    },
    CLQl: function (t, e, n) {},
    ETTj: function (t, e, n) {
      n.d(e, "a", function () {
        return o;
      });
      n("VQj9");
      var a = n("cQKx"),
        i = getApp();
      function o(t) {
        return new Promise((e, n) => {
          i.carmen({
            api: "youzan.logistics.geo/1.0.0/get",
            data: {
              city: t.city,
              address: "" + t.province + t.city + t.county + t.address_detail,
            },
            method: "GET",
            success(t) {
              var { lat: n, lng: i } = t,
                o = Object(a.a)(i, n);
              e({ lat: o.lat, lon: o.lng });
            },
            fail: n,
          });
        });
      }
    },
    FkHu: function (t, e, n) {
      n.d(e, "a", function () {
        return s;
      });
      var a = {
          selector: "#van-notify",
          type: "danger",
          message: "",
          background: "",
          duration: 3e3,
          zIndex: 110,
          top: 0,
          color: n("kFi4").f,
          safeAreaInsetTop: !1,
          onClick: () => {},
          onOpened: () => {},
          onClose: () => {},
        },
        i = Object.assign({}, a);
      function o(t) {
        return null == t ? {} : "string" == typeof t ? { message: t } : t;
      }
      function r() {
        var t = getCurrentPages();
        return t[t.length - 1];
      }
      function s(t) {
        var e = (
          (t = Object.assign(Object.assign({}, i), o(t))).context || r()
        ).selectComponent(t.selector);
        if ((delete t.context, delete t.selector, e))
          return e.setData(t), e.show(), e;
      }
      (s.clear = function (t) {
        var e = (
          (t = Object.assign(Object.assign({}, a), o(t))).context || r()
        ).selectComponent(t.selector);
        e && e.hide();
      }),
        (s.setDefaultOptions = (t) => {
          Object.assign(i, t);
        }),
        (s.resetDefaultOptions = () => {
          i = Object.assign({}, a);
        });
    },
    Fm61: function (t, e, n) {
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "d", function () {
          return s;
        }),
        n.d(e, "b", function () {
          return c;
        }),
        n.d(e, "c", function () {
          return u;
        });
      var a = n("Fcif"),
        i = n("lOd/"),
        o = n("OPDa"),
        r = (t) =>
          "lotteryCode." +
          o.a.getPageSpmTypeId() +
          "~recommend_fixed~" +
          (t + 1) +
          "~" +
          i.c,
        s = (t, e) => {
          var { id: n, algs: a = "" } = t || {},
            i = {
              component: "recommend_fixed",
              recommend_name: "推荐商品",
              banner_id: r(e),
              alg: a,
              item_id: n,
              item_type: "goods",
              goods_id: n,
            };
          return JSON.stringify(i);
        },
        c = (t) => {
          var { preferentialMode: e, valueCopywriting: n, value: a } = t;
          return 3 === e
            ? "兑换商品"
            : 1 !== e || a < 9999900
            ? n
            : a / 1e6 + "万";
        },
        u = (t) => {
          var e,
            n = {};
          null != (e = t.itemActivitySpuModels) &&
            e.length &&
            (n = (t.itemActivitySpuModels || []).reduce((t, e) =>
              void 0 === t.minPrice || t.minPrice > e.minPrice ? e : t
            ));
          var i = (t.list || []).map((t) => {
            var e = (n.list || []).find((e) => {
              var { id: n } = e;
              return n === t.id;
            });
            return Object(a.a)({}, t, e);
          });
          return (
            (t.list = i),
            (t.maxPrice = n.maxPrice || t.maxPrice),
            (t.minPrice = n.minPrice || t.minPrice),
            (t.oldPrice = n.oldPrice || t.oldPrice),
            (t.price = n.price || t.price),
            (t.priceTitle = n.priceTitle || t.priceTitle),
            (t.type = n.type || t.type),
            t
          );
        };
    },
    Kleg: function (t, e, n) {
      n.d(e, "a", function () {
        return c;
      });
      var a = n("Fcif"),
        i = n("zMoS"),
        o = n("lRMv"),
        r = getApp(),
        s = !1,
        c = (t, e) => {
          var { umpAlias: n, cardAlias: c, activityType: u = 4, query: p } = t;
          return Promise.all([
            r.getShopInfo(),
            r
              .request({
                path: "/wscuser/membercard/groupon/getJoinedGroupsCompatLadder.json",
                data: {
                  ump_alias: n,
                  card_alias: c,
                  activity_type: u,
                  kdt_id: r.getKdtId(),
                },
              })
              .then((t) => t)
              .catch(() => []),
          ]).then((t) => {
            var [c, u] = t,
              d = Object(i.a)(u, "0.kdtId");
            if (d)
              return (
                r.updateKdtId(d, !1, { mark: "914" }),
                s || (wx.reLaunch({ url: e }), (s = !0)),
                !0
              );
            var { chainStoreInfo: l } = c,
              h = l && l.isMultiOnlineShop,
              m = l && l.isRootShop;
            return (
              !h ||
              !m ||
              (Object(o.g)(
                Object(a.a)({}, p, {
                  umpAlias: n,
                  umpType: "groupOn",
                  redirectUrl: e,
                })
              ),
              !1)
            );
          });
        };
    },
    MAT0: function (t, e, n) {
      n.d(e, "c", function () {
        return o;
      }),
        n.d(e, "a", function () {
          return r;
        }),
        n.d(e, "e", function () {
          return s;
        }),
        n.d(e, "d", function () {
          return c;
        }),
        n.d(e, "b", function () {
          return u;
        });
      var a = n("RY8z"),
        i = n("otsx"),
        o = () => {
          a.a.switchTab({ url: i.f });
        },
        r = () => {
          a.a.navigate({
            url: "/packages/user/coupon/list/index?type=promocard&title=我的优惠券",
          });
        },
        s = (t) => {
          a.a.navigate({
            url: "/packages/trade/order/result/index?orderNo=" + t,
          });
        },
        c = () => {
          a.a.navigate({ url: "/packages/pre-card/home/index" });
        },
        u = (t) => {
          a.a.navigate({ url: "/pages/goods/detail/index?alias=" + t });
        };
    },
    N2ab: function (t, e, n) {
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return s;
        }),
        n.d(e, "d", function () {
          return c;
        }),
        n.d(e, "e", function () {
          return u;
        }),
        n.d(e, "b", function () {
          return p;
        });
      var a = n("amjV"),
        i = getApp(),
        o = (t) => ((t.query = { kdt_id: a.a.kdtId }), i.request(t));
      function r(t) {
        var { alias: e, promoterId: n } = t;
        return o({
          path: "/wscump/wine-tasting/api/activity/get.json",
          method: "post",
          data: { alias: e, promoterId: n },
        });
      }
      function s(t) {
        var { alias: e, appIdentity: n } = t;
        return o({
          path: "/wscump/wine-tasting/api/activity/checkIn.json",
          method: "post",
          data: { alias: e, appIdentity: n },
        });
      }
      function c(t) {
        var {
          alias: e,
          mobile: n,
          name: a,
          company: i,
          position: r,
          promoterId: s,
          spreadVoucherAlias: c,
        } = t;
        return o({
          path: "/wscump/wine-tasting/api/activity/apply.json",
          method: "post",
          data: {
            alias: e,
            mobile: n,
            name: a,
            company: i,
            position: r,
            promoterId: s,
            spreadVoucherAlias: c,
          },
        });
      }
      function u(t) {
        return o({
          path: "/wscump/lottery-code/set-reminder-state.json",
          method: "POST",
          data: t,
        });
      }
      function p(t) {
        return o({
          path: "/wscump/wine-tasting/api/activity/getTemplateInfo.json",
          method: "POST",
          data: t,
        });
      }
    },
    NDSq: function (t, e, n) {
      n.d(e, "b", function () {
        return p;
      }),
        n.d(e, "a", function () {
          return d;
        }),
        n.d(e, "e", function () {
          return l;
        }),
        n.d(e, "c", function () {
          return h;
        }),
        n.d(e, "d", function () {
          return m;
        });
      var a = n("Fcif"),
        i = n("jmjq"),
        o = n.n(i),
        r = n("q29p"),
        s = n.n(r),
        c = n("OPDa"),
        u = n("1Uvd"),
        p = (t) => {
          var e = "";
          return (
            t.canUseStartTime && t.canUseEndTime
              ? (e =
                  s()(t.canUseStartTime, "YYYY.MM.DD") +
                  "-" +
                  s()(t.canUseEndTime, "YYYY.MM.DD"))
              : 2 === t.canUseTimeType
              ? (e = "领取后" + t.canUseDays + "天内可用")
              : 3 === t.canUseTimeType &&
                (e = "领取后次日起" + t.canUseDays + "天内可用"),
            e
          );
        },
        d = (t) => {
          var e = o()(t.useRule, !0, !1),
            n = p(t);
          return Object(a.a)({}, t, {
            value: t.amount,
            unit: "元",
            threshold: "满" + +e + "元使用",
            name: t.name,
            validTime: n,
          });
        },
        l = function (t, e) {
          void 0 === e && (e = "");
          var n = { "d+": 0, "h+": 0, "m+": 0, "s+": 0 };
          if (
            (t >= 86400 && ((n["d+"] = Math.floor(t / 86400)), (t %= 86400)),
            t >= 3600 && ((n["h+"] = Math.floor(t / 3600)), (t %= 3600)),
            t >= 60 && ((n["m+"] = Math.floor(t / 60)), (n["s+"] = t % 60)),
            e)
          ) {
            for (var a in n)
              new RegExp("(" + a + ")").test(e) &&
                (e = e.replace(
                  RegExp.$1,
                  1 === RegExp.$1.length
                    ? n[a]
                    : ("00" + n[a]).substr(("" + n[a]).length)
                ));
            return e;
          }
          return {
            day: n["d+"],
            hour: n["h+"],
            minute: n["m+"],
            second: n["s+"],
          };
        },
        h = (t) =>
          c.a.getPageSpmTypeId() +
          "~grouponRecommend~" +
          t +
          "~" +
          Object(u.a)(8);
      function m() {
        var t = getCurrentPages(),
          e = t[t.length - 1],
          { options: n } = e,
          a = e.route + "?";
        return (
          Object.keys(n).forEach((t) => {
            a += t + "=" + n[t] + "&";
          }),
          a.substring(0, a.length - 1)
        );
      }
    },
    NS6W: function (t, e, n) {
      var a = n("Fcif"),
        i = (n("9Mjh"), n("esrA")),
        o = Object(i.a)({
          a: {
            p: [
              {
                r: ["packages/ump/new-lottery/casino/index"],
                c: [
                  { t: "m", c: [{ moduleId: "b17-0", name: "CasinoBlock" }] },
                ],
                m: [],
              },
            ],
          },
          m: [
            [
              "b17-0",
              "@wsc-tee-ump/casino-block",
              { w: { Roulette: "b17-0", WinnerList: "b17-0" } },
            ],
          ],
          e: [["@wsc-tee-ump/casino-block", n("iEu1"), { framework: "weapp" }]],
          f: "weapp",
        }),
        r = n("9ZMt"),
        s = n("hHpg"),
        c = n("NERQ"),
        u = n("2wjL"),
        p = n("lRMv"),
        d = n("ZduY"),
        l = n("a1Mm"),
        h = n("yNXm"),
        m = (t, e) => Math.floor(Math.random() * t + e),
        g = (t) =>
          t.map((t) => {
            var { awardType: e = 0, imageUrl: n = "", awardName: a = "" } = t;
            return (
              (t.imageUrl = n || h.f[e]),
              t.imageUrl.replace("http:", "https:"),
              (t.imageUrl = Object(l.a)(t.imageUrl, "!120x120.jpg")),
              (t.awardName = a || h.h[e]),
              t
            );
          }),
        T = (t, e, n, i, o) => {
          t.sort((t, e) => t.awardSort - e.awardSort);
          var r = ((t, e, n, i) =>
              Object(a.a)(
                {
                  awardName: t,
                  awardWords: e,
                  imageUrl: n || h.f[0],
                  jumpUrl: i || {},
                },
                h.C
              ))(e, n, i, o),
            s = [],
            { length: c } = t;
          return (
            t.map((t) => s.push(Object(a.a)({}, t, { show: !0 }))),
            (s.length = h.B - 1),
            c < h.v && s.fill(Object(a.a)({}, r, { show: !0 }), c, h.B - 1),
            s.push({ show: !1 }),
            { animationList: s, unWinningAward: r }
          );
        },
        v = (t) =>
          t.map((t, e, n) => {
            var i = h.m[e];
            return Object(a.a)({ index: i }, n[i]);
          }),
        _ = (t) =>
          t.map((t) => {
            var {
              awardName: e = "",
              awardType: n = "",
              id: a,
              imageUrl: i,
              pointsValue: o,
              position: r,
            } = t;
            return { id: a, img: i, type: n, name: e, point: o, position: r };
          }),
        f = n("v6dD"),
        E = n("YeA1"),
        S = n("1F7m"),
        y = n("gc3r"),
        O = n("jHjV"),
        b = n("hIZB"),
        I = getApp(),
        w = {
          config: o,
          builtinBundle: {
            "@wsc-tee-ump/casino-block": class {
              constructor(t) {
                var { ctx: e } = t;
                (this.ctx = e),
                  (this.ctx.data.alias = ""),
                  (this.ctx.data.shopLogo = ""),
                  (this.ctx.data.shopName = ""),
                  (this.ctx.data.inited = !1),
                  (this.ctx.data.showLogo = !1),
                  (this.ctx.data.showDetail = !1),
                  (this.ctx.data.recordUrl = ""),
                  (this.ctx.data.bgImageUrl = ""),
                  (this.ctx.data.winnerList = []),
                  (this.ctx.data.pointsName = "积分"),
                  (this.ctx.data.followExtraData = {}),
                  (this.ctx.data.shareImage = ""),
                  (this.ctx.data.shareTitle = ""),
                  (this.ctx.data.salesman = {}),
                  (this.ctx.data.appTemplateType = h.l.COMMON_DRAW),
                  (this.ctx.data.wecomCustomerQrCode = ""),
                  (this.ctx.data.showWecomQrCodePopup = !1),
                  (this.ctx.data.unReactiveData = {
                    circleNum: 0,
                    targetPosition: 0,
                    currentCircle: 0,
                    interval: h.k.NORMAL,
                  }),
                  (this.ctx.data.btnCode = 0),
                  (this.ctx.data.curIndex = -1),
                  (this.ctx.data.joinTimes = 0),
                  (this.ctx.data.redirectUrl = ""),
                  this.ctx.process.define(
                    "openDetail",
                    this.openDetail.bind(this)
                  ),
                  this.ctx.process.define(
                    "toggleFollowPopup",
                    this.toggleFollowPopup.bind(this)
                  ),
                  this.ctx.process.define(
                    "hideLotteryResult",
                    this.hideLotteryResult.bind(this)
                  ),
                  this.ctx.process.define(
                    "handleClickBtn",
                    this.handleClickBtn.bind(this)
                  ),
                  this.ctx.process.define(
                    "closeWecomQrCodePopup",
                    this.closeWecomQrCodePopup.bind(this)
                  ),
                  this.ctx.process.define(
                    "closeDetail",
                    this.closeDetail.bind(this)
                  ),
                  this.ctx.process.define(
                    "closeFailPopup",
                    this.closeFailPopup.bind(this)
                  ),
                  this.ctx.process.define(
                    "handleLevel",
                    this.handleLevel.bind(this)
                  ),
                  this.ctx.process.define("jumpToLink", (t) => {
                    var { type: e, jumpUrl: n } = t;
                    return Object(b.a)(e, n);
                  }),
                  (this.startLottery = this.handleClickBtn.bind(this)),
                  Object(E.c)(
                    this,
                    ["remainPoints", "lotteryBaseDetailInfo", "remainTimes"],
                    {
                      callback: () => {
                        var {
                          remainPoints: t,
                          lotteryBaseDetailInfo: e,
                          remainTimes: n,
                        } = this.ctx.data;
                        t &&
                          e &&
                          n &&
                          (this.lotteryDetailInfo = Object(a.a)({}, e, {
                            remainPoints: t,
                            remainTimes: n,
                          }));
                      },
                    }
                  );
              }
              beforePageMount(t) {
                var { query: e = {}, route: n } = t;
                (this.route = n), this.onLoad(e);
              }
              setYZData(t) {
                Object.entries(t).forEach((t) => {
                  var [e, n] = t;
                  Object(O.a)(this.ctx.data, e, n);
                });
              }
              onLoad(t) {
                var { alias: e } = t;
                y.a.call(this, { sst: 14, gst: S.a.TINY_PAGE });
                var n = u.a.add("/" + this.route, t);
                this.setYZData({
                  alias: e,
                  followExtraData: {
                    bizCode: 2,
                    bizSubCode: 0,
                    activityKey: e,
                    feature: t,
                    targetUrl: n,
                    targetImg:
                      "https://img01.yzcdn.cn/wscump/lottery/lucky-draw-preview2.png",
                  },
                }),
                  Object(p.g)(
                    Object(a.a)({}, t, {
                      umpAlias: e,
                      umpType: "wheel",
                      redirectUrl: n,
                    })
                  ).then(() => {
                    this.initBaseInfo(), this.initData();
                  });
              }
              initBaseInfo() {
                var { alias: t } = this.ctx.data;
                I.getShopInfo().then((e) => {
                  var n = e.shop_name,
                    a = e.logo,
                    i = h.n + "?alias=" + t;
                  this.setYZData({ shopName: n, shopLogo: a, recordUrl: i });
                }),
                  I.getPointsName()
                    .then((t) => {
                      var { pointsName: e = "积分" } = t;
                      this.setYZData({ pointsName: e });
                    })
                    .catch(() => {
                      this.setYZData({ pointsName: "积分" });
                    }),
                  Object(d.a)().then((t) => {
                    var { value: e } = t;
                    this.setYZData({ isOpenGuideLottery: e });
                  });
              }
              initData() {
                var { alias: t } = this.ctx.data,
                  e = I.getKdtId();
                this.getUserPoints(),
                  this.getWinners(t),
                  wx.showLoading({ title: "加载中" }),
                  Object(d.c)({ alias: t, kdtId: e })
                    .then(
                      (t) => (
                        this.checkShowRecommendGoods(t.activityStatus),
                        this.processInfo(t),
                        this.getShareSetting(t.id),
                        this.getStatus()
                      )
                    )
                    .then(() => {
                      wx.hideLoading(), this.setYZData({ inited: !0 });
                    })
                    .catch((t) => {
                      wx.hideLoading(),
                        Object(s.a)(t.msg || "获取活动信息失败");
                    });
              }
              getShareSetting(t) {
                Object(d.g)({ activityId: t }).then((t) => {
                  this.setYZData({
                    shareImage: t.bannerImageUrl,
                    shareTitle: t.shareTitle,
                  });
                });
              }
              getUserPoints() {
                var t = I.getKdtId();
                Object(d.h)({ kdt_id: t })
                  .then((t) => {
                    this.setYZData({ credit: t.currentPoints || 0 }),
                      (this.ctx.data.remainPoints = t.currentPoints || 0);
                  })
                  .catch((t) => {
                    if (I.checkSpecialShopDZ())
                      return (
                        this.setYZData({ credit: "-" }),
                        void s.a.fail(t.msg || t.message || "获取用户积分失败")
                      );
                    s.a.fail("获取用户积分失败");
                  });
              }
              getWinners(t) {
                Object(d.d)({ alias: t })
                  .then((t) => {
                    (this.lotteryWinningList =
                      null == t
                        ? void 0
                        : t.map((t) => {
                            var {
                              avatar: e,
                              awardName: n,
                              createAt: a,
                              userName: i,
                            } = t;
                            return {
                              name: n,
                              avatar: e,
                              nickname: i,
                              winningTime: a,
                            };
                          })),
                      null == t ||
                        t.forEach((t) => {
                          t.createAt = Object(f.b)(
                            t.createAt,
                            "YYYY-MM-DD HH:mm:ss"
                          );
                        }),
                      this.setYZData({ winnerList: t });
                  })
                  .catch((t) => {
                    s.a.fail(t || "获取信息失败");
                  });
              }
              checkShowRecommendGoods(t) {
                t === h.u.END &&
                  Object(d.f)({ scene: "wsc~wheel~rec" })
                    .then((t) => {
                      this.setYZData({
                        recommendGoods: t,
                        openType: h.i.END,
                        showFailPopup: !0,
                      });
                    })
                    .catch((t) => {
                      Object(s.a)(t.msg || "获取推荐商品失败");
                    });
              }
              processInfo(t) {
                var {
                    view: e,
                    endDate: n,
                    turntables: a,
                    startDate: i,
                    costPoints: o,
                    activityStatus: r,
                    unWinningName: s,
                    unWinningWords: c,
                    unWinningJumpUrl: u,
                    unWinningImageUrl: p,
                    orderJumpUrl: d,
                    appTemplateType: l,
                    wecomCustomerQrCode: m,
                  } = t,
                  {
                    bgImageUrl: f,
                    description: E,
                    joinThresholdDesc: S,
                    isShowLogoImage: y,
                    isShowWinnerList: O,
                    bgColor: b = h.d,
                  } = e,
                  { animationList: I, unWinningAward: w } = T(a, s, c, p, u),
                  P = v(I);
                (P = g(P)),
                  this.setYZData({
                    view: e,
                    endDate: n,
                    startDate: i,
                    costPoints: o,
                    description: E,
                    joinThresholdDesc: S,
                    activityStatus: r,
                    unWinningAward: w,
                    animationList: P,
                    showLogo: y,
                    showWinnerList: O,
                    bgImageUrl: f || h.e,
                    themeColor: h.g,
                    bgColor: b,
                    orderJumpUrl: d,
                    appTemplateType: l,
                    wecomCustomerQrCode: m,
                  }),
                  (this.ctx.data.lotteryBaseDetailInfo = {
                    activityStatus: r,
                    desc: E,
                    costPoints: o,
                    awardList: _(P),
                  });
              }
              onShareAppMessage() {
                this.handleShareSuccess();
                var {
                    alias: t,
                    shareTitle: e,
                    shareImage: n,
                  } = this.ctx.data || {},
                  a = "/packages/ump/new-lottery/casino/index?alias=" + t;
                return { title: e || h.s, path: a, imageUrl: n || h.r };
              }
              handleShareSuccess() {
                I.logger.log({
                  et: "click",
                  ei: "vera_index_share",
                  en: "点击分享按钮",
                });
                var { alias: t } = this.ctx.data;
                Object(d.j)({ alias: t })
                  .then((t) => {
                    t ? Object(s.a)("分享成功") : Object(s.a)("分享无效"),
                      this.getStatus();
                  })
                  .catch(() => {
                    this.getStatus();
                  });
              }
              closeDetail() {
                this.ctx.data.showDetail = !1;
              }
              openDetail() {
                I.logger.log({
                  et: "click",
                  ei: "verb_index_rule",
                  en: "点击活动规则",
                }),
                  (this.ctx.data.showDetail = !0);
              }
              handleJoined() {
                this.getUserPoints();
              }
              openFailPopup(t) {
                this.setYZData(Object(a.a)({}, t, { showFailPopup: !0 }));
              }
              closeFailPopup() {
                this.ctx.data.showFailPopup = !1;
              }
              closeWecomQrCodePopup() {
                this.ctx.data.showWecomQrCodePopup = !1;
              }
              updateTasks(t) {
                this.setYZData({ failPopupTasks: t });
              }
              getStatus() {
                var t = I.getKdtId(),
                  { alias: e } = this.ctx.data;
                return Object(d.b)({ alias: e, kdtId: t })
                  .then((t) => {
                    var e = t.joinTimeSurplus || 0,
                      n = this.formatTasks(t.tasks || []);
                    this.setYZData({ joinTimes: e }),
                      (this.ctx.data.remainTimes = e),
                      this.updateTasks(n),
                      this.resetBtnStatus();
                  })
                  .catch((t) => {
                    1605406003 === t.code
                      ? this.setYZData({ btnCode: h.u.UNSTART })
                      : 1605406002 === t.code
                      ? this.setYZData({ btnCode: h.u.END })
                      : s.a.fail(t.msg || "获取按钮状态失败");
                  });
              }
              resetBtnStatus() {
                this.ctx.data.unReactiveData.inLottery = !1;
              }
              resetLotteryInfo() {
                (this.ctx.data.unReactiveData.currentCircle = 0),
                  (this.ctx.data.unReactiveData.interval = h.k.NORMAL),
                  this.setYZData({
                    curIndex: -1,
                    isWinning: !1,
                    winningAward: [],
                  });
              }
              handleClickBtn() {
                if (
                  (I.logger.log({
                    et: "click",
                    ei: "verb_index_verb",
                    en: "点击抽奖按钮",
                  }),
                  !this.ctx.data.unReactiveData.inLottery)
                )
                  return this.resetLotteryInfo(), this.joinLottery();
              }
              formatTasks(t) {
                return (
                  t.forEach((t) => {
                    (t.buttonText = t.finished ? "已完成" : h.w[t.taskType]),
                      (t.imgUrl = h.y[t.taskType]);
                  }),
                  t
                );
              }
              joinLottery() {
                var t = I.getKdtId(),
                  {
                    btnCode: e,
                    alias: n,
                    isOpenGuideLottery: a,
                    joinTimes: i,
                    tasks: o,
                  } = this.ctx.data;
                if (e !== h.u.UNSTART) {
                  if (e !== h.u.END) {
                    if (!(i <= 0)) {
                      this.ctx.data.unReactiveData.inLottery = !0;
                      var r = u.a.add(
                        "/packages/ump/new-lottery/casino/index",
                        { alias: n, shopAutoEnter: 1, kdt_id: t }
                      );
                      return (
                        this.setYZData({ redirectUrl: r }),
                        Object(d.i)({ alias: n, kdtId: t })
                          .then((t) => {
                            this.processLottery(t);
                          })
                          .catch((t) => {
                            switch (t.code) {
                              case 1605406005:
                              case 1605406006:
                                Object(s.a)("暂无抽奖机会，无法抽奖");
                                break;
                              case 1605406012:
                                this.handlePointLack();
                                break;
                              case 1605406007:
                                this.toggleFollowPopup();
                                break;
                              case 1605406008:
                              case 1605406013:
                                if (a)
                                  return (
                                    this.resetBtnStatus(), Promise.reject(t)
                                  );
                                this.handleLevel();
                                break;
                              case 1605406009:
                              case 1605406010:
                              case 1605406011:
                                this.handleLevel();
                                break;
                              case 1605406014:
                                this.ctx.data.showWecomQrCodePopup = !0;
                                break;
                              default:
                                s.a.fail(
                                  (null == t ? void 0 : t.msg) ||
                                    (null == t ? void 0 : t.message) ||
                                    "抽奖失败"
                                );
                            }
                            this.resetBtnStatus();
                          })
                      );
                    }
                    0 === o.length
                      ? Object(s.a)("已无抽奖机会")
                      : this.openFailPopup({ openType: h.i.OTHER_TASKS });
                  } else this.openFailPopup({ openType: h.i.END });
                } else Object(s.a)("活动未开始");
              }
              handleLevel() {
                c.a
                  .confirm({
                    title: "",
                    showCancelButton: !0,
                    message: "抱歉，当前不符合抽奖条件，请先查看活动规则",
                    confirmButtonText: "立即查看",
                    cancelButtonText: "知道了",
                  })
                  .then(() => {
                    this.openDetail();
                  });
              }
              processLottery(t) {
                var { isWinning: e, awardList: n } = t;
                n.forEach((t) => {
                  t.imageUrl &&
                    (t.imageUrl = Object(l.a)(t.imageUrl, "!120x120.jpg"));
                }),
                  this.setYZData({ isWinning: e, winningAward: n });
                var a = this.calcPosition();
                (this.ctx.data.unReactiveData.targetPosition = a),
                  this.startScroll();
              }
              calcPosition() {
                var {
                    isWinning: t,
                    winningAward: e,
                    animationList: n,
                    unWinningAward: a,
                  } = this.ctx.data,
                  i = t ? e[0] : a,
                  o = [];
                n.forEach((t, e) => {
                  t.id === i.id && o.push(e);
                });
                var r = m(o.length, 0),
                  s = o[r];
                return h.m[s];
              }
              startScroll() {
                var { interval: t } = this.ctx.data.unReactiveData,
                  e = m(h.c.RANGE, h.c.MIN);
                (this.ctx.data.unReactiveData.circleNum = e),
                  setTimeout(() => {
                    this.doAnimation();
                  }, t);
              }
              doAnimation() {
                var {
                    curIndex: t,
                    unReactiveData: e,
                    timer: n = null,
                  } = this.ctx.data,
                  {
                    circleNum: a,
                    targetPosition: i,
                    currentCircle: o,
                  } = e || {};
                if (t === i && o === a)
                  clearTimeout(n),
                    this.getUserPoints(),
                    this.showLotteryResult(),
                    setTimeout(() => {
                      this.getStatus();
                    }, 100);
                else {
                  var r = (t + 1) % h.v;
                  this.ctx.data.unReactiveData.currentCircle =
                    0 === r && -1 !== t ? o + 1 : o;
                  var s = this.calcInterval(o, a, t, i),
                    c = setTimeout(() => {
                      this.doAnimation();
                    }, s);
                  this.setYZData({ timer: c, curIndex: r });
                }
              }
              calcInterval(t, e, n, a) {
                var { unReactiveData: i } = this.ctx.data,
                  { interval: o } = i || {},
                  r = t * h.v + n,
                  s = e * h.v + a;
                return (
                  (o = r > h.q && r + h.q < s ? h.k.FAST : h.k.NORMAL),
                  (this.ctx.data.unReactiveData.interval = o),
                  o
                );
              }
              showLotteryResult() {
                var {
                    isWinning: t,
                    winningAward: e,
                    unWinningAward: n,
                  } = this.ctx.data,
                  a = t ? e[0] : n;
                this.setYZData({
                  resultAward: a,
                  showResult: !0,
                  curIndex: -1,
                });
              }
              handlePointLack() {
                var t,
                  e,
                  n =
                    null == (t = this.ctx.data) || null == (e = t.tasks)
                      ? void 0
                      : e.filter((t) => t.taskType === h.z.POINTS);
                this.openFailPopup({
                  showFailPopup: !0,
                  openType: h.i.LACK_OF_POINTS,
                  failPopupTasks: n,
                });
              }
              toggleFollowPopup() {
                this.ctx.data.showFollowPopup = !this.ctx.data.showFollowPopup;
              }
              hideLotteryResult() {
                this.ctx.data.showResult = !1;
              }
            },
          },
        },
        P = r.default.getGlobal("ranta-app-runtime"),
        A = P.getPageOptions({
          rantaOptions: Object(a.a)(
            { page: "packages/ump/new-lottery/casino/index" },
            w
          ),
          pageRuntimeName: "aWrDjnqdPEch",
          frameworkAppRuntime: P,
          tee: r.default,
          usedLifecycles: ["beforePageMount", "onShareAppMessage"],
        });
      r.default.page({ mixins: [A] });
    },
    O3h0: function (t, e, n) {
      n.d(e, "a", function () {
        return i;
      }),
        n.d(e, "b", function () {
          return o;
        });
      var a = n("6i0Q");
      function i() {
        return a.a.getThemeColor("general");
      }
      function o(t, e, n) {
        void 0 === t && (t = "成功"),
          void 0 === e && (e = "success"),
          void 0 === n && (n = 2e3),
          wx.showToast({ title: t, icon: e, mask: !0, duration: n });
      }
    },
    PBVU: function (t, e, n) {
      n.d(e, "a", function () {
        return i;
      });
      var a = n("jA1y"),
        i = (t) =>
          Object(a.c)({
            path: "/wscshop/ump/periodBuy/list.json",
            origin: "h5",
            data: t,
          });
    },
    QBT5: function (t, e, n) {
      n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "c", function () {
          return i;
        }),
        n.d(e, "f", function () {
          return r;
        }),
        n.d(e, "e", function () {
          return s;
        }),
        n.d(e, "b", function () {
          return c;
        }),
        n.d(e, "g", function () {
          return p;
        }),
        n.d(e, "d", function () {
          return d;
        }),
        n.d(e, "h", function () {
          return l;
        });
      var a =
          "https://img01.yzcdn.cn/public_files/2018/09/07/af3aa756277cb619b9eb6062ec46cf57.png",
        i =
          "https://b.yzcdn.cn/public_files/6354789a19fb165557c16c7dc1d0c3f7.png",
        o = {
          GO_HOME: { type: "GO_HOME", text: "进店逛逛" },
          INVITE: { type: "INVITE", text: "去邀请好友" },
          JOIN: { type: "JOIN", text: "去邀请好友" },
          START_NEW: { type: "START_NEW", text: "发起新助力" },
          START_NEW_PLAIN: {
            type: "START_NEW",
            isPlain: !0,
            text: "发起新助力",
          },
          USE_COUPON: { type: "USE_COUPON", text: "立即使用" },
        },
        r = (t) => {
          var { mainCouponValue: e = 0, helperCouponValue: n = 0 } = t;
          return {
            BEFORE_HELP: {
              topImg:
                "https://b.yzcdn.cn/public_files/6f3c2f46bbab8e5db62ea0a6e5d5aa01.png",
              mainText: ["帮我助力", "送你 " + n + " 元优惠券"],
              isShowCoupon: !1,
              button: { type: "help", text: "立即助力" },
            },
            AFTER_HELP: {
              topImg:
                "https://b.yzcdn.cn/public_files/3d5a887ea6bcfe47ded613bb7ac78128.png",
              mainText: [],
              isShowCoupon: !0,
              button: {
                type: "startNew",
                text: "发起我的助力，领" + e + "元券",
              },
              subButton: o.GO_HOME,
            },
            AFTER_HELP_AND_ACT_LIMIT: {
              topImg:
                "https://b.yzcdn.cn/public_files/3d5a887ea6bcfe47ded613bb7ac78128.png",
              mainText: [],
              isShowCoupon: !0,
              button: { type: "goHome", text: "进店逛逛" },
              buttonWrapStyle: { marginTop: "64px" },
            },
            HAS_HELPED: {
              topImg:
                "https://b.yzcdn.cn/public_files/ee068654d0b0b3295e6a03f02bad3b52.png",
              mainText: [],
              isShowCoupon: !0,
              button: {
                type: "startNew",
                text: "发起我的助力，领" + e + "元券",
              },
              subButton: o.GO_HOME,
            },
            HAS_HELPED_AND_ACT_LIMIT: {
              topImg:
                "https://b.yzcdn.cn/public_files/ee068654d0b0b3295e6a03f02bad3b52.png",
              mainText: [],
              isShowCoupon: !0,
              button: { type: "goHome", text: "进店逛逛" },
              buttonWrapStyle: { marginTop: "64px" },
            },
            HELP_FULL: {
              topImg:
                "https://b.yzcdn.cn/public_files/6f3c2f46bbab8e5db62ea0a6e5d5aa01.png",
              mainText: ["来晚了，好友助力已满"],
              isShowCoupon: !1,
              button: {
                type: "startNew",
                text: "发起我的助力，领" + e + "元券",
              },
              subButton: o.GO_HOME,
            },
            HELP_FULL_AND_ACT_LIMIT: {
              topImg:
                "https://b.yzcdn.cn/public_files/6f3c2f46bbab8e5db62ea0a6e5d5aa01.png",
              mainText: ["来晚了，好友助力已满"],
              isShowCoupon: !1,
              button: { type: "goHome", text: "进店逛逛" },
              buttonWrapStyle: { marginTop: "64px" },
            },
            HELP_EXPIRED: {
              topImg:
                "https://b.yzcdn.cn/public_files/6f3c2f46bbab8e5db62ea0a6e5d5aa01.png",
              mainText: ["来晚了，活动已结束"],
              isShowCoupon: !1,
              button: {
                type: "startNew",
                text: "发起我的助力，领" + e + "元券",
              },
              subButton: o.GO_HOME,
            },
            HELP_EXPIRED_AND_ACT_LIMIT: {
              topImg:
                "https://b.yzcdn.cn/public_files/6f3c2f46bbab8e5db62ea0a6e5d5aa01.png",
              mainText: ["来晚了，活动已结束"],
              isShowCoupon: !1,
              button: { type: "goHome", text: "进店逛逛" },
              buttonWrapStyle: { marginTop: "64px" },
            },
            HELP_LIMIT: {
              topImg:
                "https://b.yzcdn.cn/public_files/6f3c2f46bbab8e5db62ea0a6e5d5aa01.png",
              mainText: ["助力次数已达上限"],
              isShowCoupon: !1,
              button: {
                type: "startNew",
                text: "发起我的助力，领" + e + "元券",
              },
              subButton: o.GO_HOME,
            },
            HELP_LIMIT_AND_ACT_LIMIT: {
              topImg:
                "https://b.yzcdn.cn/public_files/6f3c2f46bbab8e5db62ea0a6e5d5aa01.png",
              mainText: ["助力次数已达上限"],
              isShowCoupon: !1,
              button: { type: "goHome", text: "进店逛逛" },
              buttonWrapStyle: { marginTop: "64px" },
            },
          };
        },
        s = { HELPED: 1, FULL: 2, END: 3, HELP_LIMIT: 4 },
        c = 864e5,
        u = 3,
        p = function (t) {
          var {
            needNum: e = 0,
            helpedNum: n = 0,
            startGroupStatus: a = 0,
          } = void 0 === t ? {} : t;
          return {
            BEFORE_START: {
              tipText: "邀请 " + e + " 位好友领券，即可获得",
              couponButton: null,
              helpGetTip: "好友可获得",
              isShowAvatar: !1,
              isShowStartCountDown: !0,
              isShowHelpEndCountDown: !1,
              button: o.GO_HOME,
            },
            BEFORE_JOIN: {
              tipText: "邀请 " + e + " 位好友领券，即可获得",
              couponInvalid: !1,
              couponButton: null,
              helpGetTip: "好友可获得",
              isShowAvatar: !0,
              isShowStartCountDown: !1,
              isShowHelpEndCountDown: !1,
              button: o.JOIN,
            },
            AFTER_JOIN: {
              tipText: "邀请 " + e + " 位好友领券，即可获得",
              couponInvalid: !1,
              couponShowBottomRightIcon: !1,
              couponButton: null,
              helpGetTip: n ? "已有 " + n + " 位好友获得" : "好友可获得",
              isShowAvatar: !0,
              isShowStartCountDown: !1,
              isShowHelpEndCountDown: !0,
              button: o.INVITE,
            },
            HELP_END_AND_ACT_NOT_END: {
              tipText: "恭喜你获得",
              couponInvalid: !1,
              couponShowBottomRightIcon: !0,
              couponButton: o.USE_COUPON,
              helpGetTip: "已有 " + n + " 位好友获得",
              isShowAvatar: !0,
              isShowStartCountDown: !1,
              isShowHelpEndCountDown: !1,
              button: a === u ? null : o.START_NEW_PLAIN,
            },
            HELP_END_AND_ACT_END: {
              tipText: "恭喜你获得",
              couponInvalid: !1,
              couponShowBottomRightIcon: !0,
              couponButton: o.USE_COUPON,
              helpGetTip: "已有 " + n + " 位好友获得",
              isShowAvatar: !0,
              isShowStartCountDown: !1,
              isShowHelpEndCountDown: !1,
              button: null,
            },
            HELP_END_AND_ACT_END_AND_COUPON_INVALID: {
              tipText: "恭喜你获得",
              couponInvalid: !0,
              couponExt: { status: 3 },
              couponButton: o.GO_HOME,
              helpGetTip: "已有 " + n + " 位好友获得",
              isShowAvatar: !0,
              isShowStartCountDown: !1,
              isShowHelpEndCountDown: !1,
              button: null,
            },
            HELP_FAIL_BEFORE_ACT_END: {
              tipText: "邀请 " + e + " 位好友领券，即可获得",
              couponInvalid: !1,
              couponButton: null,
              helpGetTip: "",
              isShowAvatar: !0,
              failTip: "助力失败，有效期内助力人数不足",
              isShowStartCountDown: !1,
              isShowHelpEndCountDown: !1,
              button: a === u ? o.GO_HOME : o.START_NEW,
            },
            HELP_FAIL_AFTER_ACT_END: {
              tipText: "邀请 " + e + " 位好友领券，即可获得",
              couponInvalid: !1,
              couponButton: null,
              helpGetTip: "",
              isShowAvatar: !0,
              failTip: "助力失败，活动期间助力人数不足",
              isShowStartCountDown: !1,
              isShowHelpEndCountDown: !1,
              button: o.GO_HOME,
            },
          };
        },
        d = { NORMAL: 1, USED: 2, UNAVAILABLE: 3 },
        l = { HELPER: 0, CREATOR: 1 };
    },
    QKcl: function (t, e, n) {
      n.d(e, "a", function () {
        return i;
      });
      var a = getApp(),
        i = (t) =>
          a.request({
            path: "/wscump/coupon/coupon_use_redirect.json",
            query: t,
          });
    },
    QQZL: function (t, e, n) {
      var a = {
          activityInfo: {},
          groupInfo: {},
          voucherAlias: "",
          groupEndTime: 0,
          isCreator: !1,
          shopName: "",
          queryOptions: {},
          recommendGoods: [],
          sheetShow: !1,
          friendShow: !1,
          helpResult: {},
          hasResult: !1,
          shareImage: "",
        },
        i = n("Fcif"),
        o = n("QBT5"),
        r = n("a1Mm"),
        s = n("jmjq"),
        c = n.n(s),
        u = n("NDSq"),
        p = n("w2Y9"),
        d = n.n(p),
        l = getApp(),
        h = {
          activityStatusType(t) {
            var e,
              n,
              a,
              i,
              r,
              s,
              {
                activityInfo: c = {},
                groupInfo: u = {},
                voucherAlias: p,
                isCreator: d,
                groupEndTime: l,
              } = t,
              h =
                null !=
                (e =
                  null == (n = u.groupVoucherDTO) ? void 0 : n.alreadyHelpNum)
                  ? e
                  : 0,
              m = null != (a = c.groupCapacity) ? a : 0,
              g = !!h && h === m;
            return c.startAt > Date.now()
              ? "BEFORE_START"
              : d
              ? c.endAt > Date.now() && !p
                ? "BEFORE_JOIN"
                : c.endAt > Date.now() && p && !g && l > Date.now()
                ? "AFTER_JOIN"
                : c.endAt > Date.now() && p && !g && l < Date.now()
                ? "HELP_FAIL_BEFORE_ACT_END"
                : c.endAt > Date.now() && g
                ? "HELP_END_AND_ACT_NOT_END"
                : c.endAt < Date.now() && g
                ? (null !=
                  (i =
                    null == (r = u.groupVoucherDTO) ||
                    null == (s = r.userCouponDTO)
                      ? void 0
                      : s.couponStatus)
                    ? i
                    : 0) === o.d.UNAVAILABLE
                  ? "HELP_END_AND_ACT_END_AND_COUPON_INVALID"
                  : "HELP_END_AND_ACT_END"
                : c.endAt < Date.now() && !g
                ? "HELP_FAIL_AFTER_ACT_END"
                : void 0
              : "BEFORE_JOIN";
          },
          isFinishedBeforeJoin(t) {
            var { activityInfo: e = {}, voucherAlias: n } = t;
            return e.endAt < Date.now() && !n;
          },
          formatRecommendGoods(t) {
            var { recommendGoods: e } = t;
            return e.map((t) => {
              var {
                algs: e,
                title: n,
                price: a,
                alias: i,
                showCouponTag: o,
                imageUrl: s,
                goodsId: u,
              } = t;
              return {
                algs: e,
                title: n,
                alias: i,
                imgUrl: Object(r.a)(s || "", "!200x0.jpg"),
                id: u,
                showCouponTag: o,
                price: c()(a, !0, !1),
              };
            });
          },
          helpedNum(t) {
            var e,
              n,
              { groupInfo: a } = t;
            return null !=
              (e =
                null == a || null == (n = a.groupVoucherDTO)
                  ? void 0
                  : n.alreadyHelpNum)
              ? e
              : 0;
          },
          activityStatus(t, e) {
            var { activityInfo: n, groupInfo: a } = t,
              { activityStatusType: i, helpedNum: r } = e,
              { groupCapacity: s = 0 } = n,
              { startGroupStatus: c } = a;
            return Object(o.g)({
              startGroupStatus: c,
              needNum: s,
              helpedNum: r,
            })[i];
          },
          needFriend(t, e) {
            var n,
              { activityInfo: a } = t,
              { helpedNum: i } = e;
            return (
              (null != (n = null == a ? void 0 : a.groupCapacity) ? n : 0) - i
            );
          },
          couponInfo(t, e) {
            var n,
              a,
              { activityInfo: o, groupInfo: r } = t,
              { activityStatus: s } = e,
              { startGroupCoupon: c = {}, title: p } = o,
              d =
                null !=
                (n =
                  null == r || null == (a = r.groupVoucherDTO)
                    ? void 0
                    : a.userCouponDTO)
                  ? n
                  : {};
            return Object(u.a)(
              Object(i.a)(
                {
                  canUseStartTime: d.startTime || "",
                  canUseEndTime: d.endTime || "",
                  name: p,
                },
                c,
                s.couponExt || {}
              )
            );
          },
          helpGroupCouponInfo(t) {
            var { activityInfo: e } = t,
              { helpGroupCoupon: n = {} } = e,
              a = c()(n.amount, !0, !1);
            return "满" + +c()(n.useRule, !0, !1) + "减" + +a;
          },
          startDistanceTime(t) {
            var { activityInfo: e } = t,
              { startAt: n } = e;
            return Math.max(n - Date.now(), 0);
          },
          helpDistanceTime(t) {
            var { groupEndTime: e } = t;
            return Math.max(e - Date.now(), 0);
          },
          weappSharePath(t) {
            var { activityInfo: e = {}, voucherAlias: n } = t,
              a = l.getKdtId(),
              { alias: i } = e;
            return d.a.add("/packages/ump/split-coupon-friend/index", {
              alias: i,
              voucherAlias: n,
              kdt_id: a,
            });
          },
          totalNum(t) {
            var e,
              { activityInfo: n = {} } = t;
            return null != (e = n.groupCapacity) ? e : 4;
          },
          avatarStyle(t, e) {
            var { totalNum: n } = e;
            return n <= 4
              ? { type: 1, num: n }
              : 5 === n
              ? { type: 2, num: n }
              : { type: 3, num: 4 };
          },
          helpUsers(t) {
            var e,
              n,
              { groupInfo: a } = t;
            return (
              null !=
              (e =
                null == a || null == (n = a.groupVoucherDTO)
                  ? void 0
                  : n.helpUserInfos)
                ? e
                : []
            ).map((t) =>
              Object(i.a)({}, t, { userPicture: t.userPicture || o.a })
            );
          },
          statusInfo(t, e) {
            var n,
              a,
              i,
              r,
              { activityInfo: s } = t,
              { helpResultStatus: u } = e,
              p =
                null !=
                (n =
                  null == s || null == (a = s.startGroupCoupon)
                    ? void 0
                    : a.amount)
                  ? n
                  : 0,
              d =
                null !=
                (i =
                  null == s || null == (r = s.helpGroupCoupon)
                    ? void 0
                    : r.amount)
                  ? i
                  : 0;
            return (
              Object(o.f)({
                mainCouponValue: +c()(p, !0, !1),
                helperCouponValue: +c()(d, !0, !1),
              })[u] || {}
            );
          },
          helpResultStatus(t) {
            var { helpResult: e } = t,
              { success: n, canStartGroup: a, failStatus: i } = e;
            return Object.keys(e).length
              ? n && a
                ? "AFTER_HELP"
                : n && !a
                ? "AFTER_HELP_AND_ACT_LIMIT"
                : i === o.e.HELPED && a
                ? "HAS_HELPED"
                : i !== o.e.HELPED || a
                ? i === o.e.FULL && a
                  ? "HELP_FULL"
                  : i !== o.e.FULL || a
                  ? i === o.e.END && a
                    ? "HELP_EXPIRED"
                    : i !== o.e.END || a
                    ? i === o.e.HELP_LIMIT && a
                      ? "HELP_LIMIT"
                      : i !== o.e.HELP_LIMIT || a
                      ? void 0
                      : "HELP_LIMIT_AND_ACT_LIMIT"
                    : "HELP_EXPIRED_AND_ACT_LIMIT"
                  : "HELP_FULL_AND_ACT_LIMIT"
                : "HAS_HELPED_AND_ACT_LIMIT"
              : "BEFORE_HELP";
          },
          coupon(t) {
            var e,
              { helpResult: n, activityInfo: a } = t,
              o = null != (e = null == n ? void 0 : n.winCoupon) ? e : {};
            return Object(u.a)(
              Object(i.a)(
                {
                  canUseStartTime: o.startTime || "",
                  canUseEndTime: o.endTime || "",
                },
                a.helpGroupCoupon,
                { name: a.title }
              )
            );
          },
          rules(t) {
            var { activityInfo: e } = t,
              {
                groupCapacity: n,
                startGroupLimitTimes: a = 0,
                helpGroupLimitTimes: i = 0,
                groupValidity: o,
                startGroupCoupon: r = {},
              } = e,
              s = [
                "发起者发起助力活动，在活动有效期内邀请" +
                  n +
                  "名好友，好友助力成功后，即可领取专属优惠券；",
              ];
            a
              ? s.push(
                  "每个用户同一时间最多可发起一个分享活动，每人允许发起" +
                    a +
                    "次，超出后则不可再次发起；"
                )
              : s.push("每个用户同一时间最多可发起一个分享活动；"),
              i &&
                s.push("每个用户最多可助力" + i + "次，超出后则不可再次助力；");
            var c = Object(u.b)(r);
            return [
              ...s,
              "每个分享活动发起后" +
                Object(u.e)(o, "dd天hh时mm分") +
                "内未集齐好友则活动失败，无法获得奖励；",
              "优惠券" + c + "有效，过期后失效，无法使用。",
            ];
          },
          shareConfig(t, e) {
            var { shareImage: n } = t,
              { weappSharePath: a } = e;
            return {
              imageUrl: n,
              title: "点一下帮我助力，你也能领优惠券",
              path: a,
            };
          },
        },
        m = n("dUha"),
        g = getApp(),
        T = {
          FETCH_SHOP_NAME(t) {
            var { commit: e } = t,
              n = g.getShopInfoSync();
            e("SET_SHOP_NAME", n.shopName || n.shop_name);
          },
          FETCH_ACTIVITY_INFO(t) {
            var { commit: e, state: n } = t,
              { alias: a, voucherAlias: r } = n.queryOptions || {},
              s = r ? { voucherAlias: r } : {};
            Object(m.e)(Object(i.a)({ alias: a }, s))
              .then((t) => {
                var n,
                  a,
                  i,
                  s,
                  u,
                  { activityInfo: p = {}, groupInfo: d, userType: l } = t;
                e("SET_ACTIVITY_INFO", p || {}),
                  e("SET_GROUP_INFO", d || {}),
                  e("SET_IS_CREATOR", l === o.h.CREATOR),
                  e("SET_FERIEND_SHOW", l !== o.h.CREATOR);
                var h =
                    null !=
                    (n =
                      null == d || null == (a = d.groupVoucherDTO)
                        ? void 0
                        : a.voucherAlias)
                      ? n
                      : "",
                  T =
                    null !=
                    (i =
                      null == d || null == (s = d.groupVoucherDTO)
                        ? void 0
                        : s.endTime)
                      ? i
                      : 0;
                e("SET_VOUCHER_ALIAS", h || r),
                  e("SET_GROUP_END_TIME", T),
                  e("SET_HAS_RESULT", !0);
                var v = p.recommendGoodsType || 0,
                  _ = p.recommendGoodsIds || [],
                  f =
                    (null == p || null == (u = p.startGroupCoupon)
                      ? void 0
                      : u.couponId) || 0,
                  E = (null == p ? void 0 : p.helpGroupCoupon) || {};
                Object(m.d)({ couponValue: +c()(E.amount, !0, !1) })
                  .then((t) => {
                    var n;
                    e(
                      "shareImage",
                      null != (n = null == t ? void 0 : t.img) ? n : o.c
                    );
                  })
                  .catch(() => {}),
                  (1 === v && 0 === _.length) ||
                    Object(m.f)({
                      type: v,
                      goodsIds: _,
                      couponIds: [f],
                      offlineId: g.getOfflineId() || 0,
                    }).then(function (t) {
                      var n;
                      void 0 === t && (t = []);
                      var a = t.splice(0, 8),
                        i = a.map((t) => t.id);
                      i.length &&
                        Object(m.a)({
                          goodsIdList: i,
                          activityId:
                            null == p || null == (n = p.startGroupCoupon)
                              ? void 0
                              : n.couponId,
                        })
                          .then((t) => {
                            var n = a.map(
                              (e) => (
                                t.includes(e.id) && (e.showCouponTag = !0), e
                              )
                            );
                            e("SET_RECOMMEND_GOODS", n);
                          })
                          .catch(() => {});
                    });
              })
              .catch((t) => {
                var { msg: e } = t;
                wx.showToast({
                  duration: 3e3,
                  title: e || "获取详情数据失败",
                  icon: "none",
                });
              });
          },
        },
        v = {
          SET_QUERY_OPTIONS(t, e) {
            t.queryOptions = e;
          },
          SET_GROUP_END_TIME(t, e) {
            t.groupEndTime = e;
          },
          SET_VOUCHER_ALIAS(t, e) {
            t.voucherAlias = e;
          },
          SET_SHOP_NAME(t, e) {
            t.shopName = e;
          },
          SET_ACTIVITY_INFO(t, e) {
            t.activityInfo = e;
          },
          SET_GROUP_INFO(t, e) {
            t.groupInfo = e;
          },
          SET_IS_CREATOR(t, e) {
            t.isCreator = e;
          },
          SET_RECOMMEND_GOODS(t, e) {
            t.recommendGoods = e;
          },
          SET_SHEET_SHOW(t, e) {
            t.sheetShow = e;
          },
          SET_FERIEND_SHOW(t, e) {
            t.friendShow = e;
          },
          SET_HELP_RESULT(t, e) {
            t.helpResult = e;
          },
          SET_HAS_RESULT(t, e) {
            t.hasResult = e;
          },
          SET_SHARE_IMAGE(t, e) {
            t.shareImage = e;
          },
        };
      e.a = { namespaced: !0, state: a, getters: h, actions: T, mutations: v };
    },
    QrL0: function (t, e, n) {
      var a = {
          totalMoney: 0,
          otherHordeId: 0,
          joinStatus: 0,
          currentUserMoney: 0,
          showPop: !1,
          showShare: !1,
          nickName: "你的好友",
          shopName: "",
          countDown: "00:00:00",
          queryOptions: {},
          activity: {},
          customConfig: {},
          backgroundStyle: {},
          rules: [],
          goodsList: [],
          users: [],
          activityUser: [],
          currentJoinedList: [],
        },
        i = n("UT5u"),
        o = {
          activityCardInfo(t, e) {
            var { remainNum: n } = e;
            return Object(i.a)(t.activity, n);
          },
          remainNum(t) {
            var { joinPersonNum: e } = t.activity;
            return e - t.users.length;
          },
          avatarList(t, e) {
            var { hordeType: n } = t.activity,
              {
                remainNum: a,
                activityCardInfo: { isFail: i },
              } = e,
              o = [];
            if (
              (t.users.forEach((t) => {
                o.push({
                  avatar:
                    t.avatar ||
                    "https://b.yzcdn.cn/public_files/2018/04/25/4d6c6efc8173fb2758323e33ac2d6f67.png",
                  isFail: i,
                });
              }),
              a > 0 && 2 !== n)
            )
              for (
                var r = i
                    ? "https://b.yzcdn.cn/public_files/60dd74517db353390175e516238f2a2a.png"
                    : "https://img01.yzcdn.cn/public_files/2018/11/13/67444bebc957bd7e7470995b92c3b03a.png",
                  s = !i,
                  c = 0;
                c < a;
                c++
              )
                o.push({ avatar: r, isShare: s });
            return o;
          },
          shopConcat(t) {
            var { areaCode: e, shopConcat: n = "" } = t.activity;
            return "" + (e ? e + "-" : "") + n;
          },
          joinPopInfo(t) {
            var { joinStatus: e, activity: n, totalMoney: a } = t,
              i = e;
            return (
              [
                "",
                {
                  headerTitle: "你已成功开启1个瓜分团",
                  showNumTitle: !0,
                  title: "人即可瓜分优惠礼包",
                  money: n.totalMoney,
                  btnType: "SHARE",
                  btnText: "邀请微信好友一起瓜分",
                },
                {
                  preTitle: "你已加入",
                  headerTitle: "的瓜分团",
                  showNumTitle: !0,
                  title: "人即可瓜分优惠礼包",
                  money: n.totalMoney,
                  btnType: "SHARE",
                  btnText: "邀请微信好友一起瓜分",
                },
                {
                  headerTitle: "你已达到活动参与次数上限",
                  title: "累计获得优惠券",
                  money: a,
                  btnType: "LIMIT",
                  btnText: "立即使用优惠券",
                },
                {
                  headerTitle: "你已加入一个瓜分团\n瓜分成功后可加入新团",
                  title: "",
                  money: 0,
                  showFail: !0,
                  btnType: "JOINED",
                  btnText: "前往我的瓜分团",
                },
                {
                  headerTitle: "好友已集齐，立即瓜分吧",
                  title: "瓜分优惠礼包",
                  money: n.totalMoney,
                  btnType: "FETCH",
                  btnText: "立即领取",
                },
              ][i] || ""
            );
          },
        },
        r = n("Fcif"),
        s = n("taYb"),
        c = n("2wjL"),
        u = n("T6re"),
        p = getApp(),
        d = {
          INIT_ACTIVITY_INFO(t, e) {
            var { commit: n, dispatch: a, state: i } = t,
              { activityId: o, alias: r } = i.queryOptions,
              c = e || i.activity.hordeId || i.queryOptions.hordeId,
              d = { activityId: o, alias: r, isNew: !0 };
            if ((c && (d.hordeId = c), !o)) {
              p.logger.appError({
                name: "carve_coupon_error",
                message: "缺少必要参数 activityId",
                detail: __wxConfig ? __wxConfig.appLaunchInfo : {},
              });
              return a("TO_HOME_PAGE", "参与瓜分失败，你可以到店铺逛逛别的哦");
            }
            Object(u.c)(d)
              .then((t) => {
                wx.stopPullDownRefresh();
                var e = s.a.toCamelCase(t);
                n("INIT_DATA", e);
                var {
                  isOpened: i,
                  isJoined: o,
                  joinNum: r,
                  joinPersonNum: c,
                  hordeType: u,
                } = e;
                i || !o || (0 !== c - r && 2 !== u) || n("SET_POP_VISIBLE", 5),
                  i && o && a("OPEN_PACKAGE");
              })
              .catch((t) => {
                wx.stopPullDownRefresh();
                var e = t.msg || "获取信息失败";
                a("TO_HOME_PAGE", e);
              });
          },
          FETCH_PACKAGE(t, e) {
            var { commit: n, dispatch: a, state: i } = t,
              { activityId: o, alias: p } = i.queryOptions,
              { hordeId: d, joinPersonNum: l } = i.activity,
              h = e ? {} : { hordeId: d };
            Object(u.b)(Object(r.a)({ activityId: o, alias: p }, h))
              .then((t) => {
                var i = s.a.toCamelCase(t),
                  o = i.hordeId;
                if (o && !t.ids)
                  return (
                    n("SET_POP_VISIBLE", 4), void n("SET_OTHER_HORDDE_ID", o)
                  );
                if ((i.totalMoney || 0 === i.totalMoney) && !o)
                  return (
                    n("SET_TOTAL_MONEY", i.totalMoney),
                    void n("SET_POP_VISIBLE", 3)
                  );
                i.joinNum < l && n("SET_POP_VISIBLE", e ? 1 : 2);
                n("SET_JOIN_RESULT", i), a("INIT_ACTIVITY_INFO", o);
              })
              .catch((t) => {
                if ([160540265, 160540263, 160540261].indexOf(t.code) > -1) {
                  var e = c.a.add(
                    "/packages/ump/carve-coupon/index",
                    i.queryOptions
                  );
                  wx.redirectTo({ url: e });
                } else
                  wx.showToast({ title: t.msg || "领取失败", icon: "none" });
              });
          },
          OPEN_PACKAGE(t) {
            var { commit: e, state: n } = t,
              { activityId: a } = n.queryOptions,
              { hordeId: i } = n.activity;
            Object(u.e)({ activityId: a, hordeId: i })
              .then((t) => {
                e("SET_OPEN_RESULT", s.a.toCamelCase(t));
              })
              .catch(() => {
                wx.showToast({ title: "开包失败", icon: "none" });
              });
          },
          GET_USER_LIST(t) {
            var { commit: e, state: n } = t,
              { activityId: a } = n.queryOptions;
            Object(u.d)({
              activityId: a,
              includeMock: 1,
              pageNum: 1,
              pageSize: 10,
            }).then((t) => {
              e("SET_USER_LIST", t.items);
            });
          },
          TO_HOME_PAGE(t, e) {
            setTimeout(() => {
              wx.showToast({ title: e, icon: "none" }),
                p
                  .isSwitchTab("/packages/home/dashboard/index")
                  .then((t) =>
                    t
                      ? wx.reLaunch({ url: "/packages/home/dashboard/index" })
                      : wx.redirectTo({ url: "/packages/home/dashboard/index" })
                  );
            }, 1e3);
          },
        },
        l = n("a1Mm"),
        h = n("xyw3"),
        m = n("1Uvd"),
        g = Object(m.a)(8),
        T = (t, e) => "carve." + t + "~recommend_fixed~" + (e + 1) + "~" + g,
        v = {
          SET_QUERY_OPTIONS(t, e) {
            t.queryOptions = e;
          },
          INIT_DATA(t, e) {
            var { goods: n, totalMoney: a, users: o, customConfig: s } = e,
              c = Object(r.a)({}, e, {
                totalMoney: a / 100,
                goods: null,
                users: null,
                customConfig: null,
              }),
              u = n.map((t, e) => {
                var {
                  title: n,
                  price: a,
                  alias: i,
                  showCouponTag: o,
                  picture: r,
                } = t;
                return {
                  title: n,
                  alias: i,
                  imgUrl: Object(l.a)(r[0].url || "", "!200x0.jpg"),
                  showCouponTag: o,
                  bannerId: T(c.activityId, e),
                  price: Object(h.a)(a, !0, !1).toYuan(),
                };
              }),
              { themeType: p, themeImage: d } = s,
              m =
                "background-image: url(" +
                (2 === p
                  ? d
                  : "https://img01.yzcdn.cn/public_files/d1b2beffd9ec29bfef55500ec47b6968.png") +
                ")";
            (t.nickName = Object(i.c)(o, c)),
              (t.rules = Object(i.d)(c, t.shopName)),
              (t.users = Object(i.b)(e)),
              (t.goodsList = u),
              (t.activity = c),
              (t.customConfig = s || {}),
              (t.backgroundStyle = m);
          },
          SET_USER_LIST(t, e) {
            t.activityUser = e.map((t) =>
              Object(r.a)({}, t, {
                divideMoney: t.divideMoney / 100,
                avatar:
                  t.avatar ||
                  "https://b.yzcdn.cn/public_files/2018/04/25/4d6c6efc8173fb2758323e33ac2d6f67.png",
              })
            );
          },
          SET_JOIN_RESULT(t, e) {
            t.activity = Object(r.a)({}, t.activity, e, { isJoined: !0 });
          },
          SET_OTHER_HORDDE_ID(t, e) {
            t.otherHordeId = e;
          },
          SET_POP_VISIBLE(t, e) {
            (t.joinStatus = e || 0), (t.showPop = !t.showPop);
          },
          SET_OPEN_RESULT(t, e) {
            var n = {},
              {
                totalMoney: a,
                curUserId: i,
                joinPersonNum: o,
                grantType: s,
                joinNum: c,
              } = t.activity,
              u = 0,
              p = 0;
            e.userHordeInfos.forEach((t) => {
              (p += t.money),
                t.yzUid === i && (u = t.money / 100),
                (n[t.yzUid] = t.money);
            });
            var d = (100 * a - p) / (o - c),
              l = 0,
              h = 0,
              m = t.users.map((t, e) => {
                var a = t.isMock ? d : n[t.userId];
                return (
                  a > h && ((h = a), (l = e)),
                  Object(r.a)({}, t, { money: (a / 100).toFixed(2) })
                );
              });
            2 === s && (m[l].hasMaxMoney = !0),
              (t.currentUserMoney = u),
              (t.activity.isOpened = !0),
              (t.currentJoinedList = m);
          },
          SET_SHARE_VISIBLE(t, e) {
            t.showShare = e;
          },
          SET_SHOP_NAME(t, e) {
            t.shopName = e;
          },
          SET_NICK_NAME(t, e) {
            t.nickName = e;
          },
          SET_TOTAL_MONEY(t, e) {
            t.totalMoney = e / 100;
          },
        };
      e.a = { namespaced: !0, state: a, getters: o, actions: d, mutations: v };
    },
    RQUM: function (t, e, n) {
      n.d(e, "f", function () {
        return o;
      }),
        n.d(e, "e", function () {
          return r;
        }),
        n.d(e, "c", function () {
          return u;
        }),
        n.d(e, "h", function () {
          return l;
        }),
        n.d(e, "a", function () {
          return s;
        }),
        n.d(e, "d", function () {
          return c;
        }),
        n.d(e, "b", function () {
          return p;
        }),
        n.d(e, "g", function () {
          return d;
        });
      var a = n("Fcif"),
        i = n("xyw3"),
        o = (t, e, n) => {
          var a = 0,
            o = 0;
          if (t) {
            var r = n ? 0 : -1,
              s = e
                .filter((t) => t.stockNum > r)
                .sort((t, e) => t.collocationPrice - e.collocationPrice),
              c = s.length,
              u = s[0].collocationPrice,
              p = s[c - 1].collocationPrice;
            (a = p),
              (o =
                u !== p
                  ? Object(i.a)(u).toYuan() + "-" + Object(i.a)(p).toYuan()
                  : Object(i.a)(u).toYuan());
          } else
            (a = e[0].collocationPrice),
              (o = Object(i.a)(e[0].collocationPrice).toYuan());
          return { price: a, priceInYuan: o };
        },
        r = (t, e, n, a) => {
          var o = a ? 0 : -1,
            r = n
              .filter((t) => t.stockNum > o)
              .sort((t, e) => t.price - e.price),
            s = r.length;
          if (!t) return { price: e, originPrice: Object(i.a)(e).toYuan() };
          var c = r[0].price,
            u = r[s - 1].price;
          return {
            price: u,
            originPrice:
              c !== u
                ? Object(i.a)(c).toYuan() + "-" + Object(i.a)(u).toYuan()
                : Object(i.a)(c).toYuan(),
          };
        },
        s = function (t, e, n) {
          void 0 === n && (n = 0);
          var a = n,
            o = 0,
            r = 0;
          return (
            e
              ? ((a = 0),
                (o = 0),
                t.forEach((t) => {
                  (r += t.price * t.num),
                    (a += t.collocationPrice * t.num),
                    (o += (t.price - t.collocationPrice) * t.num);
                }))
              : (t.forEach((t) => {
                  r += t.price * t.num;
                }),
                (o = r - n)),
            {
              showSave: o > 0,
              originPrice: Object(i.a)(r).toYuan(),
              totalPrice: Object(i.a)(a).toYuan(),
              savePrice: Object(i.a)(o).toYuan(),
            }
          );
        },
        c = (t) => t.map((t) => t.goodsId),
        u = function (t, e, n, a) {
          void 0 === a && (a = 1);
          var i = "";
          return (
            e && (i = "已选择商品数量：" + a),
            n && (i = "请添加商品留言"),
            t && (i = "请选择商品规格"),
            i
          );
        },
        p = (t, e) => {
          var n = 0,
            a = 0,
            o = 0;
          return (
            t.forEach((t) => {
              t.id === e &&
                ((o = t.collocationPrice),
                (a = Object(i.a)(t.collocationPrice).toYuan()),
                (n = Object(i.a)(t.price).toYuan()));
            }),
            { originPrice: n, activityPrice: a, collocationPrice: o }
          );
        },
        d = (t, e) => {
          var { isMatchPackage: n } = e,
            { hasMultiSkus: o, skus: r = [] } = t;
          if (o && 1 === r.length) {
            var s = ((t) => {
              var e = {};
              try {
                e = JSON.parse(t);
              } catch (t) {
                e = {};
              }
              return e;
            })(r[0].sku);
            if (
              ((t.desc = s.map((t) => t.v).join("，")),
              (t.currentSkuId = r[0].id),
              (t.price = r[0].price),
              (t.originPrice = Object(i.a)(r[0].price).toYuan()),
              n)
            ) {
              var c = p(t.skus, t.currentSkuId);
              t = Object(a.a)({}, t, c);
            }
            return t;
          }
        },
        l = (t, e, n) => {
          var a = t.length,
            i = t.some((t) => !t.skuId),
            o = t.some((t) => n.indexOf("" + t.activityId + t.goodsId) > -1);
          return a < 1
            ? "至少选择一个套餐"
            : e && a < 2
            ? "至少选择一个搭配商品"
            : i
            ? "还有商品没选规格哦"
            : o
            ? "还有商品没填留言哦"
            : "";
        };
    },
    T6re: function (t, e, n) {
      n.d(e, "c", function () {
        return i;
      }),
        n.d(e, "d", function () {
          return o;
        }),
        n.d(e, "b", function () {
          return r;
        }),
        n.d(e, "e", function () {
          return s;
        }),
        n.d(e, "a", function () {
          return c;
        });
      var a = getApp(),
        i = (t) =>
          a.request({
            query: t,
            path: "/wscump/coupon/carve_coupon_activity_info.json",
          }),
        o = (t) =>
          a.request({
            query: t,
            options: { useCdn: !0 },
            path: "/wscump/split-coupon/success-join-records.json",
          }),
        r = (t) =>
          a.request({
            data: t,
            method: "POST",
            path: "/wscump/coupon/carve_coupon.json",
          }),
        s = (t) =>
          a.request({
            query: t,
            path: "/wscump/coupon/carve_coupon_result.json",
          }),
        c = (t) =>
          a.request({
            path: "/wscump/coupon/coupon_use_redirect.json",
            query: t,
          });
    },
    TMo0: function (t, e, n) {
      e.a = (t) =>
        new Promise((e, n) => {
          wx.getSetting({
            success: (a) => {
              a.authSetting[t]
                ? e()
                : wx.authorize({ scope: t, success: e, fail: n });
            },
            fail: n,
          });
        });
    },
    TXmq: function (t, e, n) {
      n.d(e, "c", function () {
        return r;
      }),
        n.d(e, "l", function () {
          return s;
        }),
        n.d(e, "j", function () {
          return c;
        }),
        n.d(e, "k", function () {
          return u;
        }),
        n.d(e, "e", function () {
          return p;
        }),
        n.d(e, "m", function () {
          return d;
        }),
        n.d(e, "d", function () {
          return l;
        }),
        n.d(e, "a", function () {
          return h;
        }),
        n.d(e, "g", function () {
          return m;
        }),
        n.d(e, "f", function () {
          return g;
        }),
        n.d(e, "b", function () {
          return T;
        }),
        n.d(e, "i", function () {
          return v;
        }),
        n.d(e, "n", function () {
          return _;
        }),
        n.d(e, "h", function () {
          return f;
        });
      var a = n("Fcif"),
        i = n("Fm61"),
        o = getApp(),
        r = (t) =>
          o.request({ path: "/wscump/lottery-code/activity.json", data: t }),
        s = (t) =>
          o.request({ path: "/wscump/lottery-code/join.json", data: t }),
        c = (t) =>
          o.request({ path: "/wscump/lottery-code/slider-list.json", data: t }),
        u = (t) =>
          o.request({
            path: "/wscump/lottery-code/user-tickets.json",
            data: t,
          }),
        p = (t) =>
          o.request({ path: "/wscump/lottery-code/goods-list.json", data: t }),
        d = (t) =>
          o.request({
            path: "/wscump/plusbuy/cart-search.json",
            type: "GET",
            data: t,
          }),
        l = (t) =>
          o
            .request({
              path: "/wscshop/sku/skudata.json",
              data: Object(a.a)({}, t, { v: 2 }),
            })
            .then((t) => Object(i.c)(t)),
        h = (t) =>
          o.request({
            path: "/wscshop/trade/cart/goods.json",
            type: "POST",
            errorMsg: "添加购物车失败，请重试",
            data: t,
          }),
        m = (t) =>
          o.request({
            path: "/wscump/lottery-code/recommend-goods.json",
            data: t,
          }),
        g = (t) =>
          o.request({
            path: "/wscump/lottery-code/ranking-list.json",
            data: t,
          }),
        T = (t) =>
          o.request({
            method: "POST",
            path: "/wscump/lottery-code/poster.json",
            data: t,
          }),
        v = (t) =>
          o.request({ path: "/wscump/lottery-code/result-list.json", data: t }),
        _ = (t) =>
          o.request({
            path: "/wscump/lottery-code/set-reminder-state.json",
            method: "POST",
            data: t,
          }),
        f = (t) =>
          o.request({
            path: "/wscump/lottery-code/reminder-state.json",
            data: t,
          });
    },
    UT5u: function (t, e, n) {
      n.d(e, "d", function () {
        return s;
      }),
        n.d(e, "e", function () {
          return c;
        }),
        n.d(e, "a", function () {
          return u;
        }),
        n.d(e, "c", function () {
          return p;
        }),
        n.d(e, "b", function () {
          return d;
        });
      var a = n("Fcif"),
        i = n("v6dD"),
        o = n("GFa9"),
        r = n("T6re"),
        s = (t) => {
          var {
              joinPersonNum: e,
              grantType: n,
              totalMoney: a,
              ticket: o = {},
              hordeValidTime: r,
              endAt: s,
              startAt: c,
            } = t,
            { validEndTime: u, validStartTime: p } = o,
            d =
              Object(i.b)(c, "YYYY.MM.DD HH:mm:ss") +
              "-" +
              Object(i.b)(s, "YYYY.MM.DD HH:mm:ss"),
            {
              dateType: l,
              canUseDate: h,
              limit: m,
              allGoodsCanUse: g,
              payMsg: T,
            } = o.rules || {},
            v = ((t) => {
              if (!t) return "";
              var e = t / 60 / 1e3,
                n = Math.floor(e / 1440),
                a = Math.floor((e - 60 * n * 24) / 60);
              return (
                n +
                "日" +
                a +
                "时" +
                Math.floor(e - 60 * n * 24 - 60 * a) +
                "分"
              );
            })(r),
            _ =
              1 === l
                ? "领取后在" +
                  Object(i.b)(p, "YYYY.MM.DD HH:mm:ss") +
                  "-" +
                  Object(i.b)(u, "YYYY.MM.DD HH:mm:ss") +
                  "内有效"
                : "瓜分成功后" + h.slice(3);
          return [
            "1. 用户可邀请好友瓜分优惠礼包，满" +
              e +
              "人则" +
              { 1: "平均", 2: "随机" }[n] +
              "瓜分总金额为" +
              a +
              "元的优惠礼包；",
            "2. 每个用户同一时间最多瓜分一个优惠礼包，" +
              ("无限" === m
                ? "每人不限瓜分次数"
                : "每人允许瓜分" + m + "次，超出后则不可再次参与瓜分") +
              "；",
            "3. 活动时间为" +
              d +
              "，在活动时间内，每个优惠礼包发起后" +
              v +
              "内未集齐好友则瓜分失败，无法获得奖励；",
            "4. 优惠礼包" + _ + "，过期后失效，无法使用；",
            "5.优惠礼包" +
              (g ? "全部商品可用" : "部分商品可用") +
              "，" +
              T +
              "。",
          ];
        },
        c = (t, e) => {
          var { ticket: n = {} } = t,
            { alias: i } = n;
          Object(r.a)(Object(a.a)({}, e, { alias: i, groupType: "card" }))
            .then((t) => {
              var {
                isSwitchTab: e = !0,
                weappUrl: n = "/packages/home/dashboard/index",
              } = t || {};
              e ? o.a.switchTab({ url: n }) : o.a.navigate({ url: n });
            })
            .catch((t) => {
              var { msg: e } = t;
              wx.showToast({ title: e, icon: "none" });
            });
        },
        u = (t, e) => {
          var n = !1,
            a = !1,
            i = !1,
            o = !1,
            r = "",
            s = "",
            c = "",
            u = "",
            p = [],
            {
              endAt: d,
              hordeRemainNum: l,
              remainTime: h,
              isInvalid: m,
              shopConcat: g,
              isJoined: T,
              hordeId: v,
              isOpened: _,
              hordeType: f,
              joinPersonNum: E,
              yzUids: S,
            } = t,
            y = E.length - S.length;
          if (
            (v ||
              ((r = "点击 [领取] 瓜分优惠礼包"),
              (n = !0),
              (c = ""),
              (u = "fetch-card"),
              (p = [
                {
                  key: 0,
                  text: "领取",
                  type: "FETCH_NEW",
                  btnClass: "btn__red",
                },
              ])),
            v &&
              !_ &&
              ((o = !0),
              (a = !0),
              (u = ""),
              (c = "top"),
              (p = T
                ? [
                    {
                      key: 1,
                      text: "邀请微信好友一起瓜分",
                      type: "SHARE",
                      btnClass: "btn__red btn__wechat",
                    },
                  ]
                : [
                    {
                      key: 2,
                      text: "立即瓜分",
                      type: "FETCH_OLD",
                      btnClass: "btn__red btn__top",
                    },
                    {
                      key: 3,
                      text: "瓜分新礼包",
                      type: "FETCH_NEW",
                      btnClass: "btn__yellow btn__bottom",
                    },
                  ])),
            T && (0 === e || 2 === f || 0 === y) && _)
          ) {
            var { payMsg: O, allGoodsCanUse: b } = t.ticket.rules;
            (u = "success-card"),
              (r = "恭喜你，成功获得优惠券"),
              (o = !1),
              (n = !0),
              (a = !1),
              (s =
                "" +
                (b ? "全部商品" : "部分商品") +
                ("无使用门槛" === O ? "满任意金额可用" : O)),
              (p = [
                {
                  key: 4,
                  text: "立即使用",
                  type: "USE",
                  btnClass: "btn__red btn__top",
                },
                {
                  key: 5,
                  text: "瓜分新礼包",
                  type: "FETCH_NEW",
                  btnClass: "btn__yellow btn__bottom",
                },
              ]);
          }
          return (
            h <= 0 &&
              e > 0 &&
              2 !== f &&
              ((r = "很遗憾，瓜分时间已过期"),
              (c = "bottom"),
              (u = "fail-card"),
              (o = !1),
              (n = !1),
              (a = !1),
              (i = !0),
              (p = [
                {
                  key: 6,
                  text: "瓜分新礼包",
                  type: "FETCH_NEW",
                  btnClass: "btn__yellow",
                },
              ])),
            0 !== e ||
              T ||
              ((r = "很遗憾，礼包已满员"),
              (c = "bottom"),
              (u = "fail-card"),
              (o = !1),
              (n = !1),
              (a = !1),
              (i = !0),
              (p = [
                {
                  key: 7,
                  text: "瓜分新礼包",
                  type: "FETCH_NEW",
                  btnClass: "btn__yellow",
                },
              ])),
            Date.now() - d >= 0 &&
              ((r = "哎呀，来晚啦，活动已结束"),
              (c = ""),
              (u = "fail-card"),
              (o = !1),
              (n = !1),
              (a = !1),
              (i = !0),
              (p = [])),
            l <= 0 &&
              !T &&
              !v &&
              ((r = "哎呀，来晚啦，礼包派发完啦"),
              (c = ""),
              (o = !1),
              (n = !1),
              (a = !1),
              (i = !0),
              (u = "fail-card"),
              (p = [])),
            m &&
              !v &&
              ((o = !1),
              (n = !1),
              (a = !1),
              (i = !0),
              (r = "活动已提前停止"),
              (c = ""),
              (u = "fail-card"),
              (s = "如有问题，请拨打电话联系客服\n" + g),
              (p = [])),
            {
              title: r,
              avatarSlot: c,
              showNumTitle: o,
              showMoney: n,
              showTime: a,
              isFail: i,
              desc: s,
              btns: p,
              cardClass: u,
            }
          );
        },
        p = (t, e) => {
          var n = "你的好友",
            { curUserId: a } = e;
          return (
            t.forEach((t) => {
              t.userId === a && (n = t.nickName);
            }),
            n
          );
        },
        d = (t) => {
          var { users: e, hordeType: n } = t;
          if (2 !== n) return e;
          for (
            var a = [...e], i = t.joinPersonNum - (t.joinNum || 0), o = 0;
            o < i;
            o++
          )
            a.push({
              nickName: "匿名用户",
              isMock: !0,
              avatar:
                "https://b.yzcdn.cn/public_files/2018/04/25/4d6c6efc8173fb2758323e33ac2d6f67.png",
            });
          return a;
        };
    },
    WDeX: function (t, e, n) {
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "b", function () {
          return s;
        });
      var a = n("1Ch5"),
        i = n("fZnw"),
        o = n("QoyE"),
        r = function (t) {
          return (
            void 0 === t &&
              (t = {
                count: 1,
                sizeType: ["compressed"],
                sourceType: ["album"],
              }),
            o.b.chooseImage(t).then(
              (t) => {
                var {
                  tempFilePaths: [e],
                } = t;
                return e;
              },
              (t) =>
                Promise.reject({
                  type: "wx:chooseImage",
                  code: -99999,
                  msg: t.errMsg,
                })
            )
          );
        },
        s = Object(i.c)(a.a);
    },
    ZduY: function (t, e, n) {
      n.d(e, "d", function () {
        return o;
      }),
        n.d(e, "c", function () {
          return r;
        }),
        n.d(e, "h", function () {
          return s;
        }),
        n.d(e, "b", function () {
          return c;
        }),
        n.d(e, "i", function () {
          return u;
        }),
        n.d(e, "j", function () {
          return p;
        }),
        n.d(e, "a", function () {
          return d;
        }),
        n.d(e, "f", function () {
          return l;
        }),
        n.d(e, "g", function () {
          return h;
        }),
        n.d(e, "e", function () {
          return m;
        });
      var a = getApp(),
        i = function (t, e, n) {
          return new Promise((i, o) => {
            a.request({
              method: t,
              path: e,
              data: n,
              success(t) {
                i(t);
              },
              fail(t) {
                o(t);
              },
            }).catch((t) => {
              o(t);
            });
          });
        },
        o = (t) => i("get", "/wscump/lottery/get-activity-winners.json", t),
        r = (t) => i("get", "/wscump/lottery/get-activity-info.json", t),
        s = (t) => i("get", "/wscump/lottery/get-user-points.json", t),
        c = (t) => i("get", "/wscump/lottery/check-status.json", t),
        u = (t) => i("get", "/wscump/lottery/join-lottery.json", t),
        p = (t) => i("get", "/wscump/lottery/share-activity.json", t),
        d = () => i("get", "/wscump/lottery/check-open-guide.json", {}),
        l = (t) => i("post", "/wscump/helpcut/recommend-response.json", t),
        h = (t) => i("get", "/wscump/lottery/get-share-setting.json", t),
        m = (t) =>
          a.request({
            method: "get",
            path: "/wscump/coupon/coupon_use_redirect.json",
            data: t,
          });
    },
    amjV: function (t, e, n) {
      var a = getApp();
      e.a = new (class {
        constructor() {
          (this._activeInfo = {}),
            (this._kdtId = a.getKdtId()),
            (this._query = {}),
            (this._mobile = "");
        }
        get activeInfo() {
          return this._activeInfo;
        }
        set activeInfo(t) {
          this._activeInfo = t;
        }
        get kdtId() {
          return this._kdtId;
        }
        set kdtId(t) {
          this._kdtId = t;
        }
        get query() {
          return this._query;
        }
        set query(t) {
          this._query = t;
        }
        get mobile() {
          return this._mobile;
        }
        set mobile(t) {
          this._mobile = t;
        }
        init(t) {
          var e = t.kdtId || t.kdt_id;
          (this.query = t),
            (this.kdtId = e || a.getKdtId()),
            a.updateKdtId(this.kdtId, !0, { mark: "922" }),
            (this.mobile = a.getMobile()),
            a.logger.log({
              et: "view",
              ei: "wine-tasting",
              en: "品鉴会",
              params: t,
            });
        }
      })();
    },
    clnt: function (t, e, n) {
      n.d(e, "c", function () {
        return i;
      }),
        n.d(e, "b", function () {
          return o;
        }),
        n.d(e, "g", function () {
          return r;
        }),
        n.d(e, "d", function () {
          return s;
        }),
        n.d(e, "a", function () {
          return c;
        }),
        n.d(e, "f", function () {
          return u;
        }),
        n.d(e, "h", function () {
          return p;
        }),
        n.d(e, "e", function () {
          return l;
        });
      var a = getApp();
      function i(t, e, n, a, i, o) {
        o.save(),
          o.beginPath(),
          o.moveTo(t + i, e),
          o.lineTo(t + n - i, e),
          o.quadraticCurveTo(t + n, e, t + n, e + i),
          o.lineTo(t + n, e + a - i),
          o.quadraticCurveTo(t + n, e + a, t + n - i, e + a),
          o.lineTo(t + i, e + a),
          o.quadraticCurveTo(t, e + a, t, e + a - i),
          o.lineTo(t, e + i),
          o.quadraticCurveTo(t, e, t + i, e),
          o.closePath(),
          o.restore();
      }
      function o(t, e, n, a, i) {
        i.save(),
          i.beginPath(),
          i.arc(e, n, a, 0, 2 * Math.PI, !1),
          i.closePath(),
          i.clip(),
          i.drawImage(t, e - a, n - a, 2 * a, 2 * a),
          i.beginPath(),
          i.arc(e - a, n - a, a, 0, 2 * Math.PI, !0),
          i.closePath(),
          i.restore();
      }
      function r(t) {
        return a.downloadFile({ url: t }).then((t) => t.tempFilePath);
      }
      function s(t) {
        return new Promise((e, n) => {
          a.carmen({
            api: "youzan.shop.weapp/1.0.0/qrcode",
            query: { path: t },
            success: (t) => {
              var n = t.attachment_url || "";
              "string" == typeof n && (n = n.replace(/^http:/, "https:")), e(n);
            },
            fail: (t) => {
              n(t);
            },
          });
        });
      }
      function c(t, e) {
        return new Promise((n, a) => {
          wx.canvasToTempFilePath(
            {
              canvasId: t,
              success: (t) => {
                n(t.tempFilePath);
              },
              fail: a,
              complete: () => {
                wx.hideLoading();
              },
            },
            e
          );
        });
      }
      function u(t) {
        return new Promise((e, n) => {
          wx.getImageInfo({
            src: t,
            success(t) {
              e({ width: t.width, height: t.height });
            },
            fail(t) {
              n(t);
            },
          });
        });
      }
      function p(t) {
        return new Promise((e, n) => {
          wx.saveImageToPhotosAlbum({ filePath: t, success: e, fail: n });
        });
      }
      function d(t) {
        return t && t.replace(/[\u4e00-\u9fcc]/g, "aa").length;
      }
      function l(t, e) {
        if (d(t) <= e) return t;
        for (var n = Math.floor(e / 2); n < t.length; n++)
          if (d(t.substr(0, n)) >= e) return t.substr(0, n) + "...";
      }
    },
    dUha: function (t, e, n) {
      n.d(e, "g", function () {
        return i;
      }),
        n.d(e, "b", function () {
          return o;
        }),
        n.d(e, "f", function () {
          return r;
        }),
        n.d(e, "a", function () {
          return s;
        }),
        n.d(e, "h", function () {
          return c;
        }),
        n.d(e, "e", function () {
          return u;
        }),
        n.d(e, "c", function () {
          return p;
        }),
        n.d(e, "d", function () {
          return d;
        });
      var a = getApp(),
        i = (t) =>
          a.request({
            method: "POST",
            data: t,
            path: "/wscump/split-coupon-friend/help-group.json",
          }),
        o = (t) =>
          a.request({
            path: "/wscump/coupon/coupon_use_redirect.json",
            query: t,
          }),
        r = (t) =>
          a.request({
            method: "POST",
            data: t,
            path: "/wscump/split-coupon-friend/get-recommend-goods.json",
          }),
        s = (t) =>
          a.request({
            method: "POST",
            data: t,
            path: "/wscump/split-coupon-friend/check-recommend-goods-can-use-coupon.json",
          }),
        c = (t) =>
          a.request({
            method: "POST",
            data: t,
            path: "/wscump/split-coupon-friend/start-group.json",
          }),
        u = (t) =>
          a.request({
            method: "GET",
            query: t,
            path: "/wscump/split-coupon-friend/getDetailByAlias.json",
          }),
        p = (t) =>
          a.request({
            method: "POST",
            data: t,
            path: "/wscump/split-coupon-friend/poster.json",
          }),
        d = (t) =>
          a.request({
            method: "POST",
            data: t,
            path: "/wscump/split-coupon-friend/weapp-share-img.json",
          });
    },
    g0GZ: function (t, e, n) {
      var a = n("Fcif"),
        i = (n("5rC6"), n("esrA")),
        o = Object(i.a)({
          a: {
            p: [
              {
                r: ["/packages/ump/helpcut/index"],
                c: [
                  { t: "m", c: [{ moduleId: "b13-0", name: "HelpcutBlock" }] },
                ],
                m: [],
              },
            ],
          },
          m: [
            [
              "b13-0",
              "@wsc-tee-ump/helpcut-block",
              { w: { HelpcutRule: "b13-0" } },
            ],
          ],
          e: [
            ["@wsc-tee-ump/helpcut-block", n("pejs"), { framework: "weapp" }],
          ],
          f: "weapp",
        }),
        r = n("9ZMt"),
        s = n("eijD"),
        c = n("VmHG"),
        u = n("2wjL"),
        p = n("81F4"),
        d = {
          isNewHelpCut: !1,
          hasLogin: !0,
          needFollow: !1,
          hasAuthorized: !1,
          isCreator: !0,
          lastId: null,
          userCutPrice: "",
          allHelpcutListNumber: 0,
          allHelpcutList: [],
          userCutDetail: {},
          skuInfo: {},
          userInfo: {},
          shopInfo: {},
          goodsDetail: {},
          queryOptions: {},
          initiatorInfo: {},
          bargainDetail: {},
          couponResult: {},
          couponGoodsList: [],
          followExtraData: {},
          recommendGoods: [],
          recommendGoodsThree: [],
          bargainUser: [],
          bargainRecords: [],
          sponsorFetched: !1,
          fetchRecordIng: !0,
          fetchRecordFail: !1,
          showSkuModal: !1,
          showActionSheet: !1,
          showCouponPop: !1,
          showCutSuccess: !1,
          showFollowPopup: !1,
          finishBook: !1,
          defaultAvatar: p.f,
          currentStock: 0,
          helpcutInfo: {},
          hasBehaviorReady: !1,
        },
        l = n("v6dD"),
        h = {
          minPriceYuan(t) {
            var { minPrice: e = "" } = t.bargainDetail || {};
            return e.split(".")[0];
          },
          minPriceFen(t) {
            var { minPrice: e = "" } = t.bargainDetail || {};
            return e.split(".")[1];
          },
          expireTime(t, e) {
            var { bargainExpireTime: n = "", activityStartTime: a = "" } =
              t.bargainDetail || {};
            return t.isNewHelpCut && 15 === e.activityStatus ? a : n;
          },
          isActionSuccess: (t, e) =>
            !(e.activityStatus < 0) && p.o.indexOf(e.activityStatus) > -1,
          stampCopywriting: (t, e) => p.h[e.activityStatus] || "",
          sloganCopywriting: (t, e) =>
            p.c.indexOf(e.activityStatus) > -1 ? p.e : p.n,
          bargainProgress(t) {
            var { originPrice: e } = t.goodsDetail || {},
              { minPrice: n = "", currentPrice: a = "" } =
                t.bargainDetail || {};
            return (Number(e) - Number(a)) / (Number(e) - Number(n));
          },
          newBargainInfo(t) {
            var { bargainRecords: e = {}, defaultAvatar: n } = t,
              a = e.newCutPrice,
              { newRecords: i = [] } = e,
              o = i.slice(0, 3),
              r = [],
              s = [];
            o.forEach((t, e) => {
              (o[e].nickName = t.nickName || "神秘用户"),
                (o[e].avatar = t.avatar || n),
                r.push(o[e].nickName),
                s.push(o[e].avatar);
            });
            var c = r.join("、");
            return (
              (s = s.slice(0, 3)),
              i.length > 2 && (c = c.slice(0, 9) + "…等" + i.length + "名好友"),
              i.length > 3 &&
                s.push(
                  "https://b.yzcdn.cn/public_files/bbffbe97f0aea2460466dd7177481bf7.png"
                ),
              i.length > 2 && s.reverse(),
              {
                hasNewCut: a,
                newCutNum: i.length,
                newShowList: o,
                newShowNickname: c,
                newShowAvatarList: s,
              }
            );
          },
          actionTip(t, e) {
            var { originPrice: n } = t.goodsDetail || {},
              {
                currentPrice: a,
                totalNum: i,
                cutedNum: o,
                minPrice: r,
              } = t.bargainDetail || {};
            return e.activityStatus < 0
              ? ""
              : e.isActionSuccess
              ? (p.p[e.activityStatus] || {}).getTip({
                  totalNum: i,
                  cutedNum: o,
                  minPrice: r,
                  originPrice: n,
                  currentPrice: a,
                })
              : "";
          },
          actionBtnGroup(t, e) {
            var { alias: n } = t.goodsDetail || {},
              {
                orderNo: a,
                activityId: i,
                currentPrice: o,
              } = t.bargainDetail || {};
            return e.activityStatus < 0
              ? []
              : e.isActionSuccess
              ? (p.p[e.activityStatus] || {}).getBtnGroup({ currentPrice: o })
              : (p.i[e.activityStatus] || {}).getBtnGroup({
                  orderNo: a,
                  alias: n,
                  activityId: i,
                });
          },
          activityStatus(t) {
            var {
                activityStartTime: e,
                activityEndTime: n,
                bargainExpireTime: a,
                isCreator: i,
                activityStock: o,
                canJoinCut: r,
                minPrice: s,
                currentPrice: c,
                isPurchased: u,
                needMinPriceBuy: d,
                isWholeStoreLimit: l,
                bargainDetailSeted: h,
                needFollow: m,
              } = t.bargainDetail || {},
              { hasLogin: g, isCreator: T } = t;
            if (!h) return -1;
            var v = new Date().getTime();
            return !g || m
              ? T
                ? p.a.creatorNeedLogin
                : p.a.sponsorNeedLogin
              : i
              ? u
                ? p.a.creatorHasPurchased
                : o <= 0
                ? p.a.creatorSoldOut
                : e > v
                ? p.a.creatorReserve
                : a <= v
                ? n <= v
                  ? p.a.creatorActivityFinished
                  : p.a.creatorCutExpired
                : c === s
                ? p.a.creatorCutMinPrice
                : d
                ? p.a.creatorNeedButNoMinBuy
                : p.a.creatorOngoing
              : o <= 0
              ? p.a.sponsorSoldOut
              : u || a <= v
              ? n <= v
                ? p.a.sponsorActivityFinished
                : p.a.sponsorCutFinished
              : r
              ? p.a.sponsorCanCut
              : c === s
              ? p.a.sponsorHasMinPrice
              : l
              ? p.a.sponsorActivityNoChance
              : p.a.sponsorStoreNoChance;
          },
          rules(t) {
            var { shopInfo: e = {}, bargainDetail: n = {} } = t;
            return [
              "1.活动期间消费者邀请好友帮忙砍价，邀请" +
                n.totalNum +
                "名好友砍到底价￥" +
                n.minPrice +
                "后，即可按￥" +
                n.minPrice +
                "购买商品；",
              "2.好友帮忙砍到最低价¥" +
                n.minPrice +
                "后，消费者须在" +
                Object(l.b)(n.activityEndTime, "YYYY-MM-DD HH:mm:ss") +
                "前购买砍价商品，逾期商品将恢复原价；",
              "3.同一商品，同一用户仅可享受" +
                (n.startNum || "一") +
                "次优惠价格;",
              "4.同一商品，同一用户仅能帮好友砍价" +
                (n.joinNum || "一") +
                "次；",
              "5.砍价商品数量有限。商品售罄后，商品将无法购买，即使你已经发起砍价；",
              "6.若系统判断用户为恶意刷单，" +
                e.name +
                "针对已下单的商品有权不予发货；对于刷单金额较大或行为较为恶劣者，" +
                e.name +
                "有权追究用户的法律责任。",
            ];
          },
          isShowAction: (t, e) =>
            !(e.activityStatus < 0) && p.j.indexOf(e.activityStatus) > -1,
          newBargainRecords(t) {
            var { records: e = [] } = t.bargainRecords;
            return (
              e.forEach((e) => {
                e.extra =
                  t.goodsDetail.yzUid === e.yzUid
                    ? "使用狂砍一刀道具"
                    : Object(l.b)(e.createdAt, "YYYY-MM-DD HH:mm:ss");
              }),
              Object(a.a)({}, t.bargainRecords, { records: e })
            );
          },
          newActionTip(t, e) {
            var {
              cutedPrice: n,
              leastPrice: a,
              cutedNum: i,
              minPrice: o,
              currentCanBuy: r,
              originalPrice: s,
            } = t.bargainDetail || {};
            return e.activityStatus < 0
              ? ""
              : e.isShowAction
              ? (p.d[e.activityStatus] || {}).getTip({
                  cutedPrice: n,
                  cutedNum: i,
                  minPrice: o,
                  leastPrice: a,
                  currentCanBuy: r,
                  originalPrice: s,
                })
              : {};
          },
          newActionBtn(t, e) {
            var {
              currentCanBuy: n,
              minPrice: a,
              currentPrice: i,
              leastCutNum: o,
              helpCutLimit: r,
            } = t.bargainDetail || {};
            if (e.activityStatus < 0) return {};
            var s = p.d[e.activityStatus] || {};
            return e.isShowAction
              ? s.getBtn
                ? s.getBtn({
                    currentCanBuy: n,
                    minPrice: a,
                    currentPrice: i,
                    leastCutNum: o,
                    finishBook: t.finishBook,
                    canRestartBargain: !r,
                  })
                : null
              : {};
          },
          newActionExtra(t, e) {
            var { currentCanBuy: n, hasNewCut: a } = t.bargainDetail || {},
              { hasNewCut: i } = t.bargainRecords || {},
              o = a || i;
            if (e.activityStatus < 0) return [];
            if (e.isShowAction) {
              var r = p.d[e.activityStatus] || {};
              return {
                needProcess: r.needProcess || !1,
                needCutDown: r.needCutDown || !1,
                cutDownText: r.cutDownText || "",
                showRecommend: r.showRecommend || !1,
                needPopup: r.needPopup && r.needPopup(o),
                needStartBtn: r.needStartBtn && r.needStartBtn(n),
                needCurrentBuy: r.needCurrentBuy && r.needCurrentBuy(n),
              };
            }
            return {};
          },
          isShowPopup: (t, e) =>
            !(e.activityStatus < 0) && p.l.indexOf(e.activityStatus) > -1,
          isShowHelpcutPopup: (t, e) =>
            !(e.activityStatus < 0) && p.k.indexOf(e.activityStatus) > -1,
          popupOptions(t, e) {
            var {
              hasLogin: n,
              needFollow: a,
              isCreator: i,
              hasAuthorized: o,
            } = t;
            if (!n || a || !o) {
              var { minPrice: r, originalPrice: s } = t.bargainDetail || {};
              return {
                type: "initPopup",
                hasTitle: !i,
                title: "求求你帮我砍一刀",
                showInitTitle: !0,
                initTitle: i ? "" : "这个商品我想" + +r + "元拿",
                originalPrice: +s,
                minPrice: +r,
                showInitGoods: !0,
                showInitBtn: !0,
                initBtnText: i ? "点击" + r + "元拿" : "帮他砍一刀",
              };
            }
            if (e.activityStatus < 0) return {};
            var c = p.m[e.activityStatus] || {};
            if (e.isShowHelpcutPopup)
              return { type: c.type, showRedPacket: c.showRedPacket };
            if (e.isShowPopup) {
              var {
                  cutedPrice: u,
                  leastPrice: d,
                  minPrice: l,
                  currentCanBuy: h,
                  currentPrice: m,
                  originalPrice: g,
                } = t.bargainDetail || {},
                T =
                  c.content &&
                  c.content({
                    currentCanBuy: h,
                    cutedPrice: u,
                    leastPrice: d,
                    originalPrice: g,
                  }),
                v =
                  c.btn &&
                  c.btn({ currentCanBuy: h, currentPrice: m, minPrice: l }),
                _ = c.extraBtn && c.extraBtn({ currentCanBuy: h }),
                f = c.viceBtn && c.viceBtn(),
                E =
                  c.showRecommendBottom &&
                  c.showRecommendBottom({ currentCanBuy: h });
              return {
                type: c.type,
                needGoodsImg: c.needGoodsImg,
                status: (T && T.status) || "",
                tip: (T && T.tip) || null,
                btn: v || null,
                extraBtn: _ || null,
                viceBtn: f || null,
                needProcess: c.needProcess,
                showRecommendBottom: E || !1,
                showRecommendTop: c.showRecommendTop || !1,
              };
            }
            return {};
          },
          helpPopupOptions(t) {
            var {
                isCreator: e,
                allHelpcutListNumber: n,
                allHelpcutList: a,
                showCouponPop: i,
                couponResult: o,
                userCutPrice: r,
                userCutDetail: s,
                hasAuthorized: c,
              } = t,
              u = "{}" === JSON.stringify(s);
            if (e || !c || u) return {};
            var p = i,
              d = n || p,
              l = d ? "frameless" : "frame",
              h = r && Number(r).toFixed(2),
              m = h
                ? "谢谢你帮我砍了" + h + "元！"
                : s.msg || "来晚了，助力活动已结束",
              g = "更多好物低价抢！",
              T = "选我";
            if (1 === n) {
              var v = a[0],
                _ = Number(v.minPrice / 100 || 0).toFixed(2);
              (g = "限时商品" + _ + "元拿！"), (T = "立即" + _ + "元拿");
            }
            var f = {
              type: l,
              showRecommend: !0,
              showHelpcutRecommend: !p,
              hasTitle: d,
              hasCoupon: p,
              title: m,
              cutTitle: g,
              allHelpcutList: a,
              couponResult: o,
              cutBtn: T,
            };
            return d || (f.viceBtn = { content: "进店逛逛", event: "shop" }), f;
          },
        },
        m = n("Yt9W"),
        g = n("Hhx2"),
        T = n("KQ2A"),
        v = n("DXKY"),
        _ = n("jah2"),
        f = n("8P+v"),
        E = n("1F1z"),
        S = n("RY8z"),
        y = getApp(),
        O = {
          FETCH_SHOP_NAME(t) {
            var { commit: e } = t,
              n = y.getShopInfoSync();
            e("SET_SHOP_NAME", n.shopName || n.shop_name);
          },
          FETCH_BARGAIN_USER_LIST(t) {
            var { commit: e, state: n } = t,
              {
                minPrice: a,
                currentPrice: i,
                needMinPriceBuy: o,
              } = n.bargainDetail;
            e("SET_BARGAIN_USER_LIST", Object(f.a)(i, a, o));
          },
          FETCH_RECOMMEND_GOODS(t, e) {
            var { commit: n, state: i } = t,
              { isCustomGoods: o, goodsIds: r = [] } = e || {},
              s = { isCustomGoods: o, goodsIds: r },
              { id: c } = i.goodsDetail || {};
            Object(_.h)(
              Object(a.a)({}, o ? s : {}, {
                scene: "wsc~helpcut~rec",
                extraParam: { goodsIds: [c] },
              })
            )
              .then(function (t) {
                void 0 === t && (t = []),
                  n("SET_RECOMMEND_GOODS", t),
                  (t || []).forEach((t, e) => {
                    Object(f.d)({
                      et: "view",
                      ei: "view",
                      en: "商品曝光",
                      params: {
                        component: "recommend",
                        page_type: "helpcut",
                        alg: t.algs,
                        banenr_id: Object(f.b)("recommend", e + 1),
                        goods_id: t.id,
                        item_type: "goods",
                        item_id: t.id,
                      },
                    });
                  });
              })
              .catch(() => {
                wx.showToast({ title: "获取推荐商品失败", icon: "none" });
              });
          },
          FETCH_BARGAIN_RECORDS(t) {
            var { commit: e, state: n } = t;
            e("SET_LAST_RECORD");
            var { sponsorId: a } = n.queryOptions || {};
            if (a && "undefined" !== a) {
              var { isNewHelpCut: i, lastId: o } = n;
              (i ? _.b : _.a)(
                i ? { sponsorId: a, recordId: o } : { sponsorId: a }
              )
                .then((t) => {
                  e("SET_BARGAIN_RECORDS", t);
                })
                .catch(() => {
                  e("SET_RECORDS_FAIL"),
                    wx.showToast({ title: "获取砍价记录失败", icon: "none" });
                });
            }
          },
          FETCH_INIT_DETAIL(t) {
            var { commit: e, state: n } = t,
              { umpActivityId: i } = n.queryOptions || {};
            Object(_.j)({ activityId: i }).then(function (t) {
              void 0 === t && (t = {});
              var { activity: i = {} } = t;
              e("SET_GOODS_DETAIL", t),
                e("SET_CREATOR", t),
                e("SET_NEED_FOLLOW", t.needFollow),
                e(
                  "SET_QUERY_OPTIONS",
                  Object(a.a)({}, n.queryOptions, {
                    sponsorId: t.id,
                    alias: t.goodsAlias,
                  })
                ),
                e("SET_BARGAIN_DETAIL", t),
                e("SET_EXTRA_DATA", i.id);
            });
          },
          FETCH_CURRENT_STOCK(t) {
            var { commit: e, state: n } = t,
              { umpActivityId: a } = n.queryOptions || {};
            return Object(_.j)({ activityId: a })
              .then((t) => {
                e("SET_CURRENT_STOCK", t);
              })
              .catch((t) => {
                throw t;
              });
          },
          FETCH_BARGAIN_DETAIL(t) {
            var { commit: e, state: n, dispatch: i } = t,
              { sponsorId: o, umpActivityId: r } = n.queryOptions || {},
              { isNewHelpCut: s, lastId: c, hasAuthorized: u } = n;
            e("SET_LAST_RECORD"),
              (s ? _.j : _.i)(
                s
                  ? { sponsorId: o, activityId: r, recordId: c }
                  : { sponsorId: o }
              )
                .then(function (t) {
                  void 0 === t && (t = {});
                  var {
                    kdtPhoneNumber: o,
                    initiatorInfo: r = {},
                    activity: c = {},
                  } = t;
                  Object(f.e)(c.umpActivityId, {
                    act_type: "21",
                    act_id: c.umpActivityId,
                  }),
                    e("SET_GOODS_DETAIL", t),
                    s
                      ? (e("SET_HAS_LOGIN", t.hasLogin),
                        e("SET_NEED_FOLLOW", t.needFollow),
                        e("SET_CREATOR", t),
                        e(
                          "SET_QUERY_OPTIONS",
                          Object(a.a)({}, n.queryOptions, {
                            sponsorId: t.id,
                            alias: t.goodsAlias,
                          })
                        ),
                        n.isCreator ||
                          t.needFollow ||
                          !u ||
                          (i("GET_HELPCUT_LIST"), i("HANDLE_HELP_CUT")),
                        t.bargainRecords &&
                          e("SET_BARGAIN_RECORDS", t.bargainRecords),
                        t.hadRemind && e("SET_FINISH_BOOK"))
                      : (e("SET_SHOP_PHONE", o), e("SET_INITIATOR_INFO", r)),
                    e("SET_BARGAIN_DETAIL", t),
                    e("SET_EXTRA_DATA", c.id),
                    e("SET_SPONSOR_SUCCESS"),
                    i("FETCH_RECOMMEND_GOODS", c),
                    i("FETCH_BARGAIN_USER_LIST");
                })
                .catch((t) => {
                  var { msg: e } = t;
                  wx.showToast({
                    duration: 3e3,
                    title: e || "获取砍价详情数据失败",
                    icon: "none",
                  });
                });
          },
          HANDLE_PURCHASE(t) {
            var { state: e, commit: n } = t,
              { alias: a } = e.goodsDetail || {};
            E.a
              .getSkuData(a)
              .then(f.c)
              .then(function (t) {
                void 0 === t && (t = {}),
                  (t = Object(g.a)(t)),
                  n("SET_SKU_INFO", t);
              })
              .catch((t) => {
                y.logger.appError({
                  name: "set-sku-error",
                  message: "获取商品详情失败",
                  detail: t,
                }),
                  wx.showToast({ title: "获取商品详情失败", icon: "none" });
              });
          },
          HANDLE_BUY(t, e) {
            var n,
              i,
              { state: o } = t,
              { sponsorId: r } = o.queryOptions || {},
              { id: s } = o.goodsDetail || {},
              {
                umpActivityId: c,
                currentPrice: u,
                currentCanBuy: p,
              } = o.bargainDetail || {},
              d = {},
              l = 1;
            e
              ? ((d = e.detail.messages), (l = e.detail.selectedSkuComb.id))
              : (l =
                  null == o ||
                  null == (n = o.skuInfo) ||
                  null == (i = n.goodsDetail)
                    ? void 0
                    : i.skuId);
            Object(_.k)({ sponsorId: r })
              .then(function (t) {
                if ((void 0 === t && (t = {}), t.sponsorId)) {
                  var e = {
                    activityType: 21,
                    activityId: c,
                    activityAlias: String(r),
                  };
                  Object(T.d)(
                    Object(a.a)({}, (!o.isNewHelpCut || p) && e, {
                      num: 1,
                      price: Math.floor(100 * parseFloat(u)),
                      messages: d,
                      skuId: l,
                      goodsId: s,
                    })
                  );
                } else wx.showToast({ title: "发放优惠权益失败，请重试", icon: "none" });
              })
              .catch((t) => {
                wx.showToast({
                  title: t.msg || "发放优惠权益失败，请重试",
                  icon: "none",
                });
              });
          },
          HANDLE_HELP_CUT(t, e) {
            var { state: a, dispatch: i } = t;
            return new Promise((t) => {
              a.hasBehaviorReady ? t() : v.a.on("behavior:ready", t);
            })
              .then(() => {
                var t = y.getKdtId(),
                  { sponsorId: o } = a.queryOptions || {},
                  r = y.getToken("userId") || "",
                  s = y.getBuyerId() || "",
                  c = JSON.stringify({
                    kdtId: t,
                    fansId: r,
                    buyerId: s,
                    sponsorId: o,
                  });
                r ||
                  s ||
                  Object(m.f)("帮砍获取 fansId、buyerId 失败", y.getToken()),
                  n
                    .e("packages/async-main/chunk")
                    .then(n.bind(null, "ORXP"))
                    .then((t) => {
                      var { default: n } = t;
                      n({
                        bizType: 2,
                        bizData: c,
                        onSuccess: (t) => {
                          i("HELPCUT_VERIFY", {
                            token: t,
                            sponsorId: o,
                            userInfo: e,
                          });
                        },
                      });
                    });
              })
              .catch((t) => {
                wx.showToast({
                  duration: 3e3,
                  title: t.msg || "获取行为组件失败",
                  icon: "none",
                });
              });
          },
          HELPCUT_VERIFY(t, e) {
            var { state: n, commit: i } = t,
              { token: o, sponsorId: r, userInfo: s = {} } = e || {},
              { currentPrice: c } = n.bargainDetail || {};
            Object(_.l)({ sponsorId: r, token: o })
              .then((t) => {
                var { couponResult: e, cutPrice: o, rcmdItems: r = [] } = t,
                  u = (Number(c) - Number(o)).toFixed(2);
                if ((i("SET_USER_CUT_PRICE", o), n.isNewHelpCut))
                  return (
                    i("SET_USER_CUT_DETAIL", t),
                    i("SET_SHOW_COUPON_POP", !!e),
                    i("SET_COUPON_RESULT", e),
                    void i("SET_COUPON_GOODS", r.slice(0, 3))
                  );
                n.bargainRecords.push({
                  avatar: s.avatarUrl || p.f,
                  nickName: s.nickName || p.g,
                  cutPrice: o,
                }),
                  i("SET_BARGAIN_RECORDS", Object(a.a)({}, n.bargainRecords)),
                  i(
                    "UPDATE_BARGAIN_DETAIL",
                    Object(a.a)({}, n.bargainDetail, {
                      canJoinCut: !1,
                      currentPrice: u,
                      isWholeStoreLimit: !1,
                    })
                  ),
                  e
                    ? (i("SET_SHOW_COUPON_POP", !0), i("SET_COUPON_RESULT", e))
                    : i("SET_SHOW_CUT_SUCESS", !0);
              })
              .catch(function (t) {
                void 0 === t && (t = {}),
                  n.isNewHelpCut
                    ? i("SET_USER_CUT_DETAIL", t)
                    : 160540353 !== t.code
                    ? wx.showToast({
                        title: t.msg || "助力砍价失败, 请刷新或重试",
                      })
                    : i("SET_SHOW_FOLLOW_POP", !0);
              });
          },
          GET_HELPCUT_LIST(t) {
            var { state: e, commit: n } = t,
              { umpActivityId: a } = e.queryOptions || {};
            Object(_.g)({ pageSize: 3, activityId: a }).then((t) => {
              n("SET_HELPCUT_LIST_NUMBER", t.list.length),
                n("SET_HELPCUT_LIST", t.list);
            });
          },
          RESTART_BARGAIN(t, e) {
            var { state: n } = t,
              { queryOptions: i = {} } = n,
              o = e ? { sponsorId: e } : {},
              r = u.a.add(
                "/packages/ump/helpcut/index",
                Object(a.a)(
                  {
                    kdtId: i.kdtId || i.kdt_id,
                    umpAlias: i.umpAlias,
                    umpActivityId: i.umpActivityId,
                    shopAutoEnter: 1,
                  },
                  o
                )
              );
            S.a.navigate({ url: r });
          },
          ENTER_SHOP() {
            S.a.switchTab({ url: "/packages/home/dashboard/index" });
          },
          ENTER_GOODS_DETAIL(t, e) {
            var { state: n } = t,
              { alias: a, umpActivityId: i, umpAlias: o } = e,
              { queryOptions: r = {} } = n,
              s = o || r.umpAlias;
            i
              ? S.a.navigate({
                  url:
                    "/pages/goods/detail/index?type=helpCut&alias=" +
                    a +
                    "&activityId=" +
                    i +
                    "&umpAlias=" +
                    s +
                    "&umpType=helpCut&shopAutoEnter=1",
                })
              : S.a.navigate({ url: "/pages/goods/detail/index?alias=" + a });
          },
          USE_COUPON(t, e) {
            var { state: n } = t,
              { couponId: a, groupType: i } = e;
            Object(_.f)({ couponId: a, groupType: i }).then((t) => {
              var e = t.weappUrl;
              t.isSwitchTab
                ? S.a.switchTab({ url: e })
                : S.a.navigate({ url: e });
            });
          },
        },
        b = n("a1Mm"),
        I = {
          namespaced: !0,
          state: d,
          getters: h,
          actions: O,
          mutations: {
            SET_QUERY_OPTIONS(t, e) {
              t.queryOptions = e;
            },
            SET_LAST_RECORD(t) {
              t.lastId = wx.getStorageSync("last_helpcut_id");
            },
            SET_GREY(t, e) {
              t.isNewHelpCut = e;
            },
            SET_AUTHORIZED(t, e) {
              t.hasAuthorized = !!e;
            },
            SET_FINISH_BOOK(t) {
              t.finishBook = !0;
            },
            SET_HAS_LOGIN(t, e) {
              t.hasLogin = e;
            },
            SET_NEED_FOLLOW(t, e) {
              t.needFollow = e;
            },
            SET_CREATOR(t, e) {
              var { isCreator: n, hasLogin: a } = e,
                { is_share: i } = t.queryOptions;
              t.isCreator = n || (!a && i);
            },
            SET_SHOP_PHONE(t, e) {
              t.shopInfo = { name: t.shopInfo.name, phoneNumber: e };
            },
            SET_SHOP_NAME(t, e) {
              t.shopInfo.name = e;
            },
            SET_INITIATOR_INFO(t, e) {
              t.initiatorInfo = { avatar: e.avatar, nickName: e.nickName };
            },
            SET_USER_INFO(t, e) {
              t.userInfo = e;
            },
            SET_BARGAIN_RECORDS(t, e) {
              (t.bargainRecords = e),
                (t.fetchRecordIng = !1),
                null != e &&
                  e.lastId &&
                  wx.setStorageSync("last_helpcut_id", e.lastId);
            },
            SET_BARGAIN_USER_LIST(t, e) {
              t.bargainUser = e;
            },
            SET_RECORDS_FAIL(t) {
              t.fetchRecordFail = !0;
            },
            SET_RECOMMEND_GOODS(t, e) {
              (t.recommendGoods = e), (t.recommendGoodsThree = e.slice(0, 3));
            },
            SET_SPONSOR_SUCCESS(t) {
              t.sponsorFetched = !0;
            },
            UPDATE_BARGAIN_DETAIL(t, e) {
              t.bargainDetail = e;
            },
            SET_USER_CUT_DETAIL(t, e) {
              t.userCutDetail = e;
            },
            SET_USER_CUT_PRICE(t, e) {
              t.userCutPrice = e;
            },
            SET_SHOW_FOLLOW_POP(t, e) {
              t.showFollowPopup = e;
            },
            SET_COUPON_RESULT(t, e) {
              t.couponResult = e;
            },
            SET_SHOW_COUPON_POP(t, e) {
              t.showCouponPop = e;
            },
            SET_COUPON_GOODS(t, e) {
              t.couponGoodsList = e;
            },
            SET_SHOW_CUT_SUCESS(t, e) {
              t.showCutSuccess = e;
            },
            SET_SHOW_ACTION_SHEET(t, e) {
              t.showActionSheet = e;
            },
            SET_SKU_CLOSE(t) {
              t.showSkuModal = !1;
            },
            SET_HELPCUT_LIST_NUMBER(t, e) {
              t.allHelpcutListNumber = e;
            },
            SET_HELPCUT_LIST(t, e) {
              t.allHelpcutList = e;
            },
            SET_HELPCUT_INFO(t, e) {
              t.helpcutInfo = e;
            },
            SET_BEHAVIOR_READY(t, e) {
              t.hasBehaviorReady = e;
            },
            SET_EXTRA_DATA(t, e) {
              var { isNewHelpCut: n, isCreator: a } = t,
                { sponsorId: i } = t.queryOptions,
                o = t.queryOptions || {};
              !a && (o.sponsorId = i.toString()),
                (t.followExtraData = {
                  bizCode: 1,
                  bizSubCode: n && a ? 0 : 1,
                  activityKey: e,
                  feature: o,
                  targetUrl: u.a.add("packages/ump/helpcut/index", o),
                });
            },
            SET_GOODS_DETAIL(t, e) {
              var {
                goodsAlias: n,
                goodsId: a,
                goodsName: i,
                originalPrice: o,
                thumbUrl: r,
                yzUid: s,
                activity: c = {},
              } = e || {};
              (t.goodsDetail = {
                alias: n,
                id: a,
                originPrice: (o / 100).toFixed(2),
                cover: Object(b.a)(r, "!200x0.jpg"),
                title: i,
                originCover: Object(b.a)(r, "!800x0.jpg"),
                yzUid: s,
              }),
                (t.currentStock = c.currentStock);
            },
            SET_CURRENT_STOCK(t, e) {
              var { activity: n = {} } = e || {};
              t.currentStock = n.currentStock;
            },
            SET_SKU_INFO(t, e) {
              var { minPrice: n, currentPrice: a } = t.bargainDetail || {},
                { id: i, alias: o, title: r, cover: s } = t.goodsDetail || {},
                { skuForSkuComponent: c, sku: u } = e;
              (t.showSkuModal = !0),
                (t.skuInfo = {
                  extraData: {
                    currentPrice: a,
                    lowestPrice: n,
                    hideSkuStepper: !0,
                    useCustomHeaderPrice: !0,
                  },
                  sku: c,
                  goodsDetail: {
                    id: i,
                    alias: o,
                    title: r,
                    picture: s,
                    skuId: u.id,
                  },
                });
            },
            SET_BARGAIN_DETAIL(t, e) {
              var { defaultAvatar: n } = t,
                { isFirstCut: a } = t.queryOptions;
              delete t.queryOptions.isFirstCut;
              var {
                  alias: i,
                  status: o,
                  orderNo: r,
                  minPrice: s,
                  goodsId: c,
                  isCreator: u,
                  avatar: p,
                  canJoinCut: d,
                  isJoinCut: l,
                  currentCanBuy: h,
                  currentPrice: m,
                  goodsStock: g,
                  activity: T = {},
                  totalNum: v,
                  cutedNum: _,
                  cutedPrice: f,
                  leastPrice: E,
                  originalPrice: S,
                  firstCut: y = 0,
                  leastCutNum: O,
                  expiredAt: b = new Date().getTime(),
                  needFollow: I,
                  isFirstCut: w,
                  hasNewCut: P,
                  helpCutLimit: A,
                } = e,
                {
                  id: N,
                  joinNum: C = 0,
                  startNum: D = 0,
                  currentStock: R,
                  umpActivityId: x,
                  isMinPriceBuy: L,
                  endAt: j = new Date().getTime(),
                  startAt: k,
                } = T;
              t.bargainDetail = {
                goodsId: c,
                orderNo: r,
                joinNum: C,
                startNum: D,
                totalNum: v,
                cutedNum: _,
                cutedPrice: (f / 100).toFixed(2),
                leastPrice: (E / 100).toFixed(2),
                originalPrice: (S / 100).toFixed(2),
                firstCut: (y / 100).toFixed(2),
                leastCutNum: O,
                isCreator: u,
                avatar: p || n,
                canJoinCut: d,
                currentCanBuy: h,
                umpAlias: i,
                umpActivityId: x,
                activityId: N,
                needMinPriceBuy: L,
                isPurchased: 1 === o,
                isWholeStoreLimit: l,
                activityEndTime: j,
                activityStartTime: k,
                bargainExpireTime: b,
                minPrice: (s / 100).toFixed(2),
                currentPrice: (m / 100).toFixed(2),
                activityStock: Math.min(R, g),
                bargainDetailSeted: !0,
                needFollow: I,
                showFirstCut: (w || a) && y,
                hasNewCut: P,
                helpCutLimit: A,
              };
            },
          },
        },
        w = n("5tio"),
        P = n("PidN"),
        A = n("lRMv"),
        N = n("OTjV"),
        C = getApp(),
        D = {
          config: o,
          builtinBundle: {
            "@wsc-tee-ump/helpcut-block": class {
              constructor(t) {
                var { ctx: e } = t;
                (this.store = Object(N.a)(I)),
                  (e.store = this.store),
                  (this.ctx = e);
                var n = Object(c.d)(this, [
                  "sponsorFetched",
                  "queryOptions",
                  "recommendGoods",
                  "skuInfo",
                  "showSkuModal",
                  "goodsDetail",
                  "bargainDetail",
                  "showFollowPopup",
                  "followExtraData",
                  "isNewHelpCut",
                  "hasLogin",
                  "needFollow",
                  "isCreator",
                  "hasAuthorized",
                  "newActionExtra",
                  "activityStatus",
                  "helpcutInfo",
                ]);
                Object.assign(this, n),
                  Object(c.b)(this, [
                    "SET_QUERY_OPTIONS",
                    "SET_SKU_CLOSE",
                    "SET_SHOW_FOLLOW_POP",
                    "SET_GREY",
                    "SET_LAST_RECORD",
                    "SET_AUTHORIZED",
                    "SET_HELPCUT_INFO",
                  ]),
                  Object(c.b)(this, [
                    "HANDLE_BUY",
                    "FETCH_SHOP_NAME",
                    "FETCH_BARGAIN_DETAIL",
                    "FETCH_BARGAIN_RECORDS",
                  ]),
                  this.store.watch("bargainDetail", (t) => {
                    var {
                        totalNum: e = 0,
                        cutedNum: n = 0,
                        joinNum: a = 0,
                        minPrice: i = 0,
                        startNum: o = 0,
                      } = t,
                      r = {
                        totalNum: e,
                        cutedNum: n,
                        startNum: o,
                        joinNum: a,
                        minPrice: i,
                      };
                    this.SET_HELPCUT_INFO(r), (this.helpcutInfo = r);
                  });
              }
              onPullDownRefresh() {
                var { queryOptions: t } = this;
                this.load(t), wx.stopPullDownRefresh();
              }
              beforePageMount(t) {
                var { query: e = {}, route: n } = t;
                (this.route = n), this.load(e);
              }
              load(t) {
                void 0 === t && (t = {});
                var { umpAlias: e = "" } = t,
                  n = u.a.add("/" + this.route, t);
                Object(P.a)(t, e, "helpCut", n, {
                  name: "helpCut_without_ump_alias",
                  message: "砍价缺少必要参数",
                })
                  .then(() => {
                    this.getGrey(t);
                  })
                  .catch(() => {
                    this.getGrey(t);
                  });
              }
              getGrey(t) {
                var e = this,
                  { umpActivityId: n } = t;
                Object(_.c)(n)
                  .then(
                    (function () {
                      var n = Object(s.a)(function* (n) {
                        e.SET_GREY(n.value),
                          yield e.initAuthorizeStatus(n.value),
                          e.init(t);
                      });
                      return function (t) {
                        return n.apply(this, arguments);
                      };
                    })()
                  )
                  .catch(() => {
                    this.SET_GREY(!1), this.init(t);
                  });
              }
              init(t) {
                this.SET_QUERY_OPTIONS(t),
                  this.SET_LAST_RECORD(),
                  this.FETCH_SHOP_NAME(),
                  this.FETCH_BARGAIN_DETAIL(),
                  this.FETCH_BARGAIN_RECORDS(),
                  C.logger &&
                    C.logger.log({
                      et: "display",
                      ei: "enterpage",
                      en: "浏览页面",
                      pt: "helpCut",
                      params: { status: this.activityStatus, spm: "helpCut" },
                    });
              }
              initAuthorizeStatus() {
                return C.resolveTeeAPI()
                  .then((t) => t.getUserPrivacy())
                  .then((t) => {
                    this.SET_AUTHORIZED(t.nicknameAndAvatar && t.mobile);
                  });
              }
              onShareAppMessage() {
                var { sponsorId: t } = this.queryOptions || {},
                  {
                    umpActivityId: e,
                    activityId: n,
                    minPrice: i,
                    umpAlias: o,
                  } = this.bargainDetail || {},
                  { title: r, originCover: s } = this.goodsDetail || {},
                  c = u.a.add(
                    this.isNewHelpCut ? "packages/ump/helpcut/index" : p.b,
                    Object(a.a)(
                      {},
                      A.i,
                      {
                        sponsorId: t,
                        umpAlias: o,
                        umpActivityId: this.isNewHelpCut ? n : e,
                      },
                      Object(w.a)("native_custom")
                    )
                  );
                return m.b.processShareData({
                  title:
                    "我想要 " +
                    i +
                    " 元拿走 " +
                    (r.length >= 10 ? r.slice(0, 10) + "..." : r) +
                    " ,帮我砍一下吧！",
                  path: c,
                  imageUrl: s,
                });
              }
            },
          },
        },
        R = r.default.getGlobal("ranta-app-runtime"),
        x = R.getPageOptions({
          rantaOptions: Object(a.a)({ page: "/packages/ump/helpcut/index" }, D),
          pageRuntimeName: "aWrDjnqdPEch",
          frameworkAppRuntime: R,
          tee: r.default,
          usedLifecycles: [
            "beforePageMount",
            "onPullDownRefresh",
            "onShareAppMessage",
          ],
        });
      r.default.page({ mixins: [x] });
    },
    "i+tm": function (t, e, n) {
      n.d(e, "c", function () {
        return s;
      }),
        n.d(e, "e", function () {
          return c;
        }),
        n.d(e, "d", function () {
          return u;
        }),
        n.d(e, "a", function () {
          return p;
        }),
        n.d(e, "b", function () {
          return d;
        });
      var a = n("Fcif"),
        i = n("8B9M"),
        o = Object(i.a)();
      function r(t) {
        try {
          o.logger && o.logger.log(Object(a.a)({}, t));
        } catch (t) {}
      }
      function s(t) {
        r({ et: "click", ei: "click_invite", en: "点击邀请好友", pt: t });
      }
      function c(t) {
        r({
          et: "click",
          ei: "share",
          en: "分享",
          params: { share_cmpt: "native" === t ? "native_custom" : t },
        });
      }
      function u(t) {
        r({ et: "click", ei: "click_join", en: "点击抽奖", pt: t });
      }
      function p(t) {
        r({ et: "click", ei: "click_add", en: "点击加购", pt: t });
      }
      function d(t, e, n) {
        r({
          et: "click",
          ei: "bulk_buy",
          en: "批量购买",
          pt: t,
          params: { activity_code: e, goods_id_list: n },
        });
      }
    },
    iEu1: function (t, e) {
      t.exports = {
        d: "inited;2;bgColor;2;bgImageUrl;2;showLogo;2;shopName;2;credit;2;recordUrl;2;showFollowPopup;2;resultAward;2;isWinning;2;showResult;2;showWecomQrCodePopup;2;wecomCustomerQrCode;2;endDate;2;showDetail;2;description;2;joinThresholdDesc;2;showFailPopup;2;failPopupTasks;2;recommendGoods;2;openType;2;orderJumpUrl;2;alias;2;followExtraData;2;costPoints;2;animationList;2;unWinningAward;2;activityStatus;2;startDate;2;pointsName;2;tasks;2;appTemplateType;2;btnCode;2;curIndex;2;joinTimes;2;redirectUrl;2;winnerList;2;showWinnerList;2;remainPoints;2;lotteryBaseDetailInfo;2;remainTimes;2",
        w: "CasinoBlock;FailPopup;ResultPopup;Roulette;Detail;WecomQrCodePopup;WinnerList;TaskItem",
        wc: "FailPopup;ResultPopup;Roulette;Detail;WecomQrCodePopup;WinnerList;TaskItem",
        p: "openDetail;toggleFollowPopup;hideLotteryResult;handleClickBtn;closeWecomQrCodePopup;closeDetail;closeFailPopup;handleLevel;jumpToLink",
        pi: "openDetail;toggleFollowPopup;hideLotteryResult;handleClickBtn;closeWecomQrCodePopup;closeDetail;closeFailPopup;handleLevel;jumpToLink",
        li: "beforePageMount;onShareAppMessage",
      };
    },
    jah2: function (t, e, n) {
      n.d(e, "c", function () {
        return i;
      }),
        n.d(e, "b", function () {
          return o;
        }),
        n.d(e, "a", function () {
          return r;
        }),
        n.d(e, "j", function () {
          return s;
        }),
        n.d(e, "i", function () {
          return c;
        }),
        n.d(e, "h", function () {
          return u;
        }),
        n.d(e, "k", function () {
          return p;
        }),
        n.d(e, "l", function () {
          return d;
        }),
        n.d(e, "d", function () {
          return l;
        }),
        n.d(e, "e", function () {
          return h;
        }),
        n.d(e, "g", function () {
          return m;
        }),
        n.d(e, "f", function () {
          return g;
        }),
        n.d(e, "m", function () {
          return T;
        });
      n("53ek");
      var a = getApp(),
        i = (t) =>
          a.request({
            path: "/wscump/helpcut/v2/is-in-white-list",
            query: { activityId: t },
          }),
        o = (t) =>
          a.request({
            path: "/wscump/helpcut/v2/get-bargain-records.json",
            query: t,
          }),
        r = (t) =>
          a.request({
            path: "/wscump/helpcut/get-bargain-records.json",
            query: t,
          }),
        s = (t) =>
          a.request({ path: "/wscump/helpcut/v2/get-sponsor", query: t }),
        c = (t) => a.request({ path: "/wscump/helpcut/get-sponsor", query: t }),
        u = (t) =>
          a.request({
            method: "POST",
            path: "/wscump/helpcut/recommend-response.json",
            data: t,
          }),
        p = (t) =>
          a.request({ data: t, path: "/wscump/helpcut/give-buy-rights.json" }),
        d = (t) =>
          a.request({ data: t, path: "/wscump/helpcut/helpcut-verify.json" }),
        l = (t) =>
          a.request({
            method: "POST",
            path: "/wscump/cardsnap/helpcut-post-v2.json",
            data: t,
          }),
        h = (t) =>
          a.request({
            data: t,
            method: "POST",
            path: "/wscump/helpcut/get-poster.json",
          }),
        m = (t) =>
          a.request({ path: "/wscump/helpcut/v2/get-helpcut-list", data: t }),
        g = (t) =>
          a.request({
            path: "/wscump/coupon/coupon_use_redirect.json",
            data: t,
          }),
        T = (t) =>
          a.request({
            path: "/wscump/helpcut/set-msg-push.json",
            method: "POST",
            data: t,
          });
    },
    otsx: function (t, e, n) {
      n.d(e, "f", function () {
        return a;
      }),
        n.d(e, "d", function () {
          return i;
        }),
        n.d(e, "b", function () {
          return o;
        }),
        n.d(e, "l", function () {
          return r;
        }),
        n.d(e, "i", function () {
          return s;
        }),
        n.d(e, "j", function () {
          return c;
        }),
        n.d(e, "m", function () {
          return u;
        }),
        n.d(e, "o", function () {
          return p;
        }),
        n.d(e, "k", function () {
          return d;
        }),
        n.d(e, "e", function () {
          return l;
        }),
        n.d(e, "g", function () {
          return m;
        }),
        n.d(e, "a", function () {
          return v;
        }),
        n.d(e, "h", function () {
          return _;
        }),
        n.d(e, "c", function () {
          return f;
        }),
        n.d(e, "n", function () {
          return E;
        });
      var a = "/packages/home/dashboard/index",
        i =
          "https://img01.yzcdn.cn/public_files/2018/09/07/af3aa756277cb619b9eb6062ec46cf57.png",
        o = 204,
        r = { NOT_WIN: 0, COUPON: 1, GOODS: 9, MONEY: 10 },
        s = {
          [r.COUPON]:
            "https://b.yzcdn.cn/public_files/650c1112f9daea9468a94a3c1157e18b.jpg",
          [r.MONEY]:
            "https://b.yzcdn.cn/public_files/e9aaa615104095dc1f6a8c5de1a2f814.jpg",
        },
        c = { 1: "一", 2: "二" },
        u = { NOT_START: 1, ING: 2, DRAWING: 3, DRAWED: 4 },
        p = { FOLLOW: 1, FEATURE: 2, GOODS: 3 },
        d = { SENDING: 0, NOT_USE: 1, USED: 2, FAIL: 3, OUT_DATE: 4 },
        l = { 1: "请在7天内下单", 4: "开奖超过7天 奖品已失效" },
        h = {
          1: [{ text: "领取奖品", type: "FETCH", subText: "请在7天内下单" }],
          2: [{ text: "查看订单", type: "ORDER" }],
        },
        m = {
          0: "预计30分钟内到账，可在“个人中心”查看",
          1: "恭喜中奖，奖品预计在30分钟内到账",
          2: "恭喜中奖，奖品预计在30分钟内到账",
          3: "进店逛逛",
        },
        g = {
          0: { preText: "正在", nextText: "发放", type: "DISABLE" },
          2: { preText: "立即", nextText: "使用", type: "COUPON" },
          3: { preText: "联系", nextText: "商家", type: "CONCAT" },
        },
        T = {
          0: () => [{ text: "进店逛逛", type: "HOMEPAGE" }],
          1: (t) =>
            t === d.USED
              ? [{ text: "立即使用", type: "COUPON" }]
              : [{ text: "进店逛逛", type: "HOMEPAGE" }],
          9: (t) => (h[t] ? h[t] : [{ text: "进店逛逛", type: "HOMEPAGE" }]),
          10: () => [{ text: "立即查看", type: "MONEY" }],
        },
        v = {
          1: () => [
            { text: "抽奖未开始", type: "DISABLE" },
            { text: "进店逛逛", type: "HOMEPAGE" },
          ],
          2: (t) =>
            t
              ? [
                  {
                    text: "邀请好友抽奖，提升中奖率",
                    type: "SHARE",
                    authList: ["nicknameAndAvatar"],
                  },
                ]
              : [
                  {
                    text: "立即抽奖",
                    type: "DRAW",
                    authList: ["mobile", "nicknameAndAvatar"],
                  },
                ],
          3: () => [{ text: "进店逛逛", type: "HOMEPAGE" }],
          4: function (t, e, n) {
            return void 0 === e && (e = r.NOT_WIN), T[e](n);
          },
        },
        _ = {
          1: (t) => g[t],
          9: (t) =>
            t === d.USED
              ? { preText: "查看", nextText: "订单", type: "ORDER" }
              : t === d.OUT_DATE
              ? { preText: "活动", nextText: "结束", type: "DISABLE" }
              : { preText: "领取", nextText: "奖品", type: "FETCH" },
          10: () => ({ preText: "立即", nextText: "查看", type: "MONEY" }),
        },
        f = {
          1: () => ({ text: "参与抽奖获得" }),
          2: () => ({ text: "成为公众号粉丝获得" }),
          3: () => ({
            text: "购买指定商品获得",
            img: "https://b.yzcdn.cn/public_files/5666dc10fcd215b58ec77215a9b2b36c.png",
          }),
          4: () => ({
            text: "浏览指定页面获得",
            img: "https://b.yzcdn.cn/public_files/f366de63b065fbe44ca95b35b19d4923.png",
          }),
          5: (t) => ({ text: t + "助力获得" }),
        },
        E = {
          1: {
            name: "showFollow",
            title: "成为公众号粉丝",
            preDesc: "回馈公众号粉丝额外领取",
            nextDesc: "个幸运码",
            btnText: "去完成",
            icon: "https://b.yzcdn.cn/public_files/057324f8d179bb1dc480ae0c53a86cf7.png",
          },
          2: {
            name: "showFeature",
            title: "浏览指定页面30秒",
            preDesc: "奖励",
            nextDesc: "个幸运码",
            btnText: "去看看",
            icon: "https://b.yzcdn.cn/public_files/f366de63b065fbe44ca95b35b19d4923.png",
          },
          3: {
            name: "showBuy",
            title: "购买指定商品",
            preDesc: "奖励",
            nextDesc: "个幸运码",
            btnText: "去购买",
            icon: "https://b.yzcdn.cn/public_files/5666dc10fcd215b58ec77215a9b2b36c.png",
          },
        };
    },
    pejs: function (t, e) {
      t.exports = {
        w: "HelpcutBlock;ActivityCard;ActivityCoupon;ActivityHeader;ActivityRecords;ActivityStatus;BargainRule;BargainUser;HelpcutFirstcut;HelpcutGoods;HelpcutInvitePost;HelpcutPopup;HelpcutRecords;HelpcutRule;HelpcutStatus;HelpcutSuccess;InitiatorInfo;InvitePost",
        wc: "HelpcutBlock;ActivityCard;ActivityCoupon;ActivityHeader;ActivityRecords;ActivityStatus;BargainRule;BargainUser;HelpcutFirstcut;HelpcutGoods;HelpcutInvitePost;HelpcutPopup;HelpcutRecords;HelpcutRule;HelpcutStatus;HelpcutSuccess;InitiatorInfo;InvitePost",
        li: "beforePageMount;onPullDownRefresh;onShareAppMessage",
      };
    },
    rwCI: function (t, e, n) {
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return s;
        }),
        n.d(e, "b", function () {
          return o;
        });
      var a = getApp();
      function i(t, e) {
        return new Promise((n, i) => {
          a.request({
            path: t,
            data: e,
            success: (t) => {
              n(t);
            },
            fail: (t) => {
              i(t);
            },
          }).catch((t) => {
            i(t);
          });
        });
      }
      function o(t) {
        return i("wscump/discount-packages/activitybygoods.json", {
          goodsId: t,
        });
      }
      function r(t) {
        return i("wscump/discount-packages/activity.json", {
          activityAlias: t,
        });
      }
      function s(t) {
        return i("wscump/discount-packages/skus.json", t);
      }
    },
    uDJY: function (t, e, n) {},
    yNXm: function (t, e, n) {
      n.d(e, "d", function () {
        return a;
      }),
        n.d(e, "g", function () {
          return i;
        }),
        n.d(e, "B", function () {
          return o;
        }),
        n.d(e, "v", function () {
          return r;
        }),
        n.d(e, "m", function () {
          return s;
        }),
        n.d(e, "u", function () {
          return c;
        }),
        n.d(e, "t", function () {
          return u;
        }),
        n.d(e, "k", function () {
          return p;
        }),
        n.d(e, "c", function () {
          return d;
        }),
        n.d(e, "q", function () {
          return l;
        }),
        n.d(e, "C", function () {
          return h;
        }),
        n.d(e, "b", function () {
          return m;
        }),
        n.d(e, "D", function () {
          return g;
        }),
        n.d(e, "n", function () {
          return T;
        }),
        n.d(e, "f", function () {
          return v;
        }),
        n.d(e, "h", function () {
          return _;
        }),
        n.d(e, "r", function () {
          return f;
        }),
        n.d(e, "s", function () {
          return E;
        }),
        n.d(e, "e", function () {
          return S;
        }),
        n.d(e, "j", function () {
          return y;
        }),
        n.d(e, "a", function () {
          return O;
        }),
        n.d(e, "o", function () {
          return b;
        }),
        n.d(e, "p", function () {
          return I;
        }),
        n.d(e, "z", function () {
          return w;
        }),
        n.d(e, "w", function () {
          return P;
        }),
        n.d(e, "y", function () {
          return A;
        }),
        n.d(e, "i", function () {
          return N;
        }),
        n.d(e, "A", function () {
          return C;
        }),
        n.d(e, "x", function () {
          return D;
        }),
        n.d(e, "l", function () {
          return R;
        });
      var a = "#FFA15E",
        i = "#F34900",
        o = 9,
        r = 8,
        s = { 0: 0, 1: 1, 2: 2, 3: 7, 4: 8, 5: 3, 6: 6, 7: 5, 8: 4 },
        c = {
          UNSTART: 1,
          ACTIVE: 2,
          END: 3,
          INLOTTERY: 4,
          TOMORROW: 5,
          JOINED: 6,
          SHARE: 7,
        },
        u = { 2: !0, 4: !0 },
        p = { NORMAL: 150, FAST: 50 },
        d = { RANGE: 2, MIN: 3 },
        l = 6,
        h = { id: 0 },
        m = {
          LUCKY:
            "https://img01.yzcdn.cn/upload_files/2021/11/15/Fkl0shMv5jyjZOB-D0gEPgbKGnbE.png",
          UNLUCKY: "https://img01.yzcdn.cn/wsc/ump/lottery/unlucky-new-bg.png",
        },
        g = {
          1: "/packages/user/coupon/list/index?type=promocard&title=我的优惠券",
          2: "/packages/user/coupon/list/index?type=promocode&title=我的优惠码",
          3: "/packages/ump/presents/index",
          4: "/packages/user/integral/index",
          31: "/packages/user/coupon/list/index?type=promocard&title=我的优惠券",
        },
        T = "/packages/ump/new-lottery/list/index",
        v = {
          0: "https://img01.yzcdn.cn/upload_files/2021/11/15/Fv4PiBcpNqAtsOm_1IyNr1Ss2PGn.png",
          1: "https://img01.yzcdn.cn/upload_files/2021/11/15/FlksqPY_sDB50FqfTqWdLnqcJ8rb.png",
          2: "https://img01.yzcdn.cn/upload_files/2021/11/15/FlksqPY_sDB50FqfTqWdLnqcJ8rb.png",
          3: "https://img01.yzcdn.cn/upload_files/2021/11/15/Fp5eG1gHRsFz_953Zcvfey9VP1xm.png",
          4: "https://img01.yzcdn.cn/upload_files/2021/11/15/FlAug0d3HXVrkSEy6LAJkI768Ht7.png",
          31: "https://img01.yzcdn.cn/upload_files/2021/11/15/FlksqPY_sDB50FqfTqWdLnqcJ8rb.png",
        },
        _ = {
          0: "谢谢参与",
          1: "优惠券",
          2: "优惠码",
          3: "赠品",
          4: "积分",
          31: "优惠券礼包",
        },
        f =
          "https://img01.yzcdn.cn/public_files/2019/11/06/4e8635e3c0ec1dedef67a6341c0d2318.png",
        E = "幸运大抽奖",
        S =
          "https://img01.yzcdn.cn/upload_files/2021/11/10/Fq2pApTgpP4EsBJ-hZ4RvFAgXFBM.png",
        y = { FREE_LEVEL: 1, PAID_LEVEL: 2, FREE_CARD: 3, PAID_CARD: 4 },
        O = { COUPON: 1, CODE: 2, PRESENT: 3, POINTS: 4, COUPON_PACKAGE: 31 },
        b = {
          [O.COUPON]: "立即使用",
          [O.CODE]: "立即使用",
          [O.PRESENT]: "0元领取",
          [O.POINTS]: "立即查看",
          [O.COUPON_PACKAGE]: "立即领取",
        },
        I = {
          [O.COUPON]: "立即查看",
          [O.CODE]: "立即查看",
          [O.PRESENT]: "0元领取",
          [O.POINTS]: "立即查看",
          [O.COUPON_PACKAGE]: "立即查看",
        },
        w = { ORDER: "1", SHARE: "2", POINTS: "3" },
        P = { [w.ORDER]: "去下单", [w.SHARE]: "去分享", [w.POINTS]: "前往" },
        A = {
          [w.ORDER]:
            "https://img01.yzcdn.cn/upload_files/2021/11/15/FuR839zglLPIt3VcBun6kH9tK8vN.png",
          [w.SHARE]:
            "https://img01.yzcdn.cn/upload_files/2021/11/15/FiLVPGy3tvaRmCjAd5aXgJM5iJJK.png",
          [w.POINTS]:
            "https://img01.yzcdn.cn/upload_files/2021/11/15/FujGiSdFA8evdUYet_GHpvC15Me-.png",
        },
        N = { OTHER_TASKS: "0", END: "1", LACK_OF_POINTS: "2" },
        C = {
          [w.ORDER]: { name: "下单任务曝光", ei: "view_shoptask" },
          [w.SHARE]: { name: "分享任务曝光", ei: "view_sharetask" },
          [w.POINTS]: { name: "获取积分曝光", ei: "view_pointstask" },
        },
        D = {
          [w.ORDER]: { name: "下单任务点击", ei: "click_shoptask" },
          [w.SHARE]: { name: "分享任务点击", ei: "click_sharetask" },
          [w.POINTS]: { name: "获取积分点击", ei: "click_pointstask" },
        },
        R = { COMMON_DRAW: 1, COMMUNITY_DRAW: 2 };
    },
  });
