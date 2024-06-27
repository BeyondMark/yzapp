"use strict";
(exports.ids = [4]),
  (exports.modules = {
    "+CLe": function (e, t, r) {
      r.d(t, "a", function () {
        return o;
      }),
        r.d(t, "d", function () {
          return c;
        }),
        r.d(t, "b", function () {
          return d;
        }),
        r.d(t, "e", function () {
          return u;
        }),
        r.d(t, "c", function () {
          return l;
        });
      var o,
        a = r("Fcif"),
        i = r("AGZf");
      !(function (e) {
        e[(e.PlusBuy = 24)] = "PlusBuy";
      })(o || (o = {}));
      var n = function (e) {
          void 0 === e && (e = {});
          var t = [];
          return (
            Object.values(e).forEach((e) => {
              t.push(...e);
            }),
            t
          );
        },
        s = (e, t) =>
          "cart" === t.source.orderFrom
            ? e || {}
            : e
            ? Array.isArray(e)
              ? e
              : "object" == typeof e
              ? Object.values(e)
              : e
            : [];
      function c(e, t) {
        var { orderCreation: r } = e,
          { skuData: i = {}, pluginsResult: c = {} } = t,
          {
            selectedSkuComb: d,
            cartMessages: u,
            goodsId: l,
            selectedNum: p,
          } = i;
        return {
          switchData: Object(a.a)(
            {
              num: p,
              skuId: d.id,
              propertyIds: n(c.goodsAttributes),
              itemMessage: JSON.stringify(s(u, r)),
              goodsId: l,
              selectedSkuInfo: Object(a.a)({}, t),
            },
            ((e) => {
              var t,
                { display: r = {}, order: a = {} } = e,
                { seller: i } = a;
              return {
                kdtId: i.kdtId,
                storeId: i.storeId,
                activityId:
                  null == r || null == (t = r.plusBuyComponent)
                    ? void 0
                    : t.activityId,
                activityType: o.PlusBuy,
                extensions: { fromTmpAdd: "1" },
              };
            })(e)
          ),
          goodsId: l,
        };
      }
      function d(e) {
        var t,
          { goodsData: r = {}, display: a = {}, order: i = {} } = e,
          { seller: n } = i;
        return {
          goodsId: r.goodsId,
          kdtId: n.kdtId,
          storeId: n.storeId,
          activityId:
            null == a || null == (t = a.plusBuyComponent)
              ? void 0
              : t.activityId,
          activityType: o.PlusBuy,
          extensions: { fromTmpAdd: "1" },
        };
      }
      function u(e, t) {
        void 0 === t && (t = o.PlusBuy);
        var { sku: r, goodsAttributes: i, goodsData: n } = e,
          s = {};
        (s.sku = r),
          (s.goodsAttributes = i),
          (s.goods = {
            id: n.goodsId,
            title: n.title,
            picture: n.picture,
            alias: n.goodsAlias,
          }),
          (s.skuConfig = { buyText: "确定", skuSence: "buy" });
        var c = (function (e, t) {
          var { sku: r = {}, preChecked: o = {}, checked: a } = e,
            i = {};
          if (a) {
            var { pluginsResult: n = {}, skuData: s } = o.selectedSkuInfo || {};
            (i.selectedNum = s.selectedNum),
              (i.pluginsResult = n),
              (r.tree || []).forEach((e) => {
                var t = e.kS;
                i[t] = s.selectedSkuComb[t];
              }),
              (t.messageConfig = {
                initialMessages: s.cartMessages,
                placeholderMap: {},
              });
          } else t.messageConfig = { initialMessages: {}, placeholderMap: {} };
          return i;
        })(e, s);
        e.ctx.process.invoke(
          "setSkuInfo",
          Object(a.a)({}, s, {
            initialSku: c,
            event: { skuScene: "buy", module: t, skuOptions: { resetSku: !0 } },
            goodsAttributes: { reset: !0 },
          })
        );
      }
      function l(e) {
        (e.loading = !0), i.a.loading({ message: "" });
        var { order: t, goodsData: r } = e;
        return (
          e.originSku
            ? Promise.resolve(e.originSku)
            : e.ctx.process.invoke("fetchSkuData", {
                alias: r.goodsAlias,
                order: t,
              })[0]
        )
          .then((t) => {
            var r = t.itemSalePropList || [];
            (e.loading = !1), i.a.clear();
            var {
              exchangeSkuList: o = [],
              exchangePrice: n,
              original_Price: s,
            } = e.goodsData;
            return {
              sku: Object(a.a)({}, t, {
                price: n,
                oldPrice: s,
                minPrice: -1,
                maxPrice: -1,
                list: ([...t.list] || !1)
                  .filter((e) => o.some((t) => +t.skuId == +e.id))
                  .map((e) => {
                    var t = o.find((t) => +t.skuId == +e.id);
                    return (
                      (e.price = t.exchangePrice),
                      (e.oldPrice = t.originalPrice),
                      e
                    );
                  }),
                limit: { quota: 1 },
              }),
              goodsAttributes: r,
              originSku: t,
            };
          })
          .catch((t) => {
            throw ((e.loading = !1), i.a.clear(), t);
          });
      }
    },
    "+UkH": function (e, t, r) {
      r.d(t, "a", function () {
        return s;
      });
      class o {
        constructor(e, t) {
          (this.queue = e),
            (this.turnAction = t),
            (this.index = 0),
            (this.skips = []);
        }
        addSkip(e) {
          this.isSkip(e) || this.skips.push(e);
        }
        isSkip(e) {
          return this.skips.includes(e);
        }
        start() {
          var e = this.queue[this.index];
          this.isSkip(e)
            ? this.continue()
            : this.turnAction({ type: this.queue[this.index] });
        }
        continue() {
          if (((this.index += 1), this.queue[this.index])) {
            var e = this.queue[this.index];
            this.isSkip(e)
              ? this.continue()
              : this.turnAction({ type: this.queue[this.index] });
          }
        }
      }
      var a = { INIT: "INIT", READY: "READY", OPEN: "OPEN", CLOSE: "CLOSE" },
        i = ["ORDER_PAY_PROMPT", "VISIT_GIFT"];
      class n {
        constructor(e) {
          (this.options = e),
            this.init(),
            (this.popState = i.reduce((e, t) => ((e[t] = a.INIT), e), {})),
            (this.skips = []);
        }
        checkAllReady() {
          return Object.keys(this.popState).every(
            (e) => this.popState[e] === a.READY
          );
        }
        handleReadyEvent(e, t) {
          this.popExec.isSkip(e) ||
            ((("boolean" == typeof t && t) || (null != t && t.data)) &&
              this.popExec.addSkip(e),
            this.checkAllReady() ||
              (this.popState[e],
              (this.popState[e] = a.READY),
              this.checkAllReady() && this.handleAllReady()));
        }
        handleAllReady() {
          this.popExec.start();
        }
        handleCloseEvent(e) {
          this.popState[e] !== a.CLOSE && this.popExec.continue();
        }
        handleOpenEvent() {}
        handleStateChange(e) {
          var { name: t, state: r, skip: o } = e;
          if (!this.popState[t]) throw new Error("未知的 pop `" + t + "`");
          if (!a[r]) throw new Error("未知的 state `" + r + "`");
          switch (r) {
            case a.READY:
              this.handleReadyEvent(t, o);
              break;
            case a.CLOSE:
              this.handleCloseEvent(t);
              break;
            case a.OPEN:
              this.handleOpenEvent(t);
          }
        }
        init() {
          this.popExec = new o(i, (e) => {
            var { type: t } = e;
            this.options.openPop(t);
          });
        }
      }
      function s(e) {
        return new n(e);
      }
    },
    "/je5": function (e, t, r) {
      r.d(t, "b", function () {
        return u;
      }),
        r.d(t, "a", function () {
          return p;
        });
      var o = r("eijD"),
        a = r("NthX"),
        i = r.n(a),
        n = r("US/N"),
        s = "/pay/wsctrade/order/buy",
        c = 2,
        d = 3;
      function u(e) {
        return l.apply(this, arguments);
      }
      function l() {
        return (l = Object(o.a)(
          i.a.mark(function e(t) {
            var r, o, a, u, l, p, h, f, v;
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t.page = null !== (r = t.page) && void 0 !== r ? r : 1),
                      (t.pageSize =
                        null !== (o = t.pageSize) && void 0 !== o ? o : 20),
                      (e.next = 4),
                      Object(n.default)({
                        origin: "cashier",
                        withCredentials: !0,
                        method: "post",
                        path: "".concat(s, "/v2/getSelfFetchList.json"),
                        data: t,
                      })
                    );
                  case 4:
                    if (((e.t0 = e.sent), e.t0)) {
                      e.next = 7;
                      break;
                    }
                    e.t0 = {};
                  case 7:
                    return (
                      (u = e.t0),
                      (l = u.list),
                      (p = void 0 === l ? [] : l),
                      (h = u.total),
                      (f = void 0 === h ? 0 : h),
                      (v = p.map(function (e) {
                        return (
                          e.distance > 1e3
                            ? (e.distanceStr =
                                (e.distance / 1e3).toFixed(1) + "km")
                            : e.distance > 100
                            ? (e.distanceStr = e.distance + "m")
                            : e.distance < 100 &&
                              e.distance > 0 &&
                              (e.distanceStr = "<100m"),
                          c === e.orderSoldStatus
                            ? (e.shopTag = "缺货")
                            : d === e.orderSoldStatus &&
                              (e.shopTag = "部分缺货"),
                          (e.detail = e.province + e.city + e.area + e.address),
                          e
                        );
                      })),
                      e.abrupt("return", {
                        selfFetchList: v,
                        more: p.length > 0,
                        page:
                          t.page +
                          (null !== (a = t.concurrenceFetchCount) &&
                          void 0 !== a
                            ? a
                            : 1),
                        total: f,
                      })
                    );
                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function p(e) {
        return h.apply(this, arguments);
      }
      function h() {
        return (h = Object(o.a)(
          i.a.mark(function e(t) {
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      Object(n.requestV2)({
                        origin: "cashier",
                        withCredentials: !0,
                        path: "".concat(
                          s,
                          "/cross-store-re-cache-order-creation.json"
                        ),
                        method: "POST",
                        data: t,
                      })
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
    },
    "/rCb": function (e, t, r) {
      r.d(t, "a", function () {
        return o;
      });
      var o = {
        INIT: 0,
        FLAGSHIP: 1,
        EXCLUSIVE: 2,
        CHAIN: 3,
        BOUTIQUE: 4,
        SHOPPING: 5,
        REJECT: 99,
      };
    },
    "/zym": function (e, t, r) {
      function o(e, t, r) {
        if (
          (void 0 === t && (t = 2),
          void 0 === r && (r = !1),
          "number" != typeof e)
        )
          return "";
        var o = (e / 100).toFixed(t);
        return r ? parseFloat(o) : o;
      }
      r.d(t, "a", function () {
        return o;
      }),
        r.d(t, "c", function () {
          return a;
        }),
        r.d(t, "b", function () {
          return n;
        });
      var a = (e) => {
        var t = (function (e, t, r) {
          if (
            (void 0 === t && (t = 2),
            void 0 === r && (r = !1),
            "number" != typeof e)
          )
            return "";
          var o = (e / 100).toFixed(t);
          return r ? parseFloat(o) : o;
        })(e, 2, !0);
        return t >= 1e4 ? parseFloat((t / 1e4).toFixed(1)) + "w" : "" + t;
      };
      function i(e) {
        for (
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 2,
            r = e + "";
          r.length < t;

        )
          r = "0" + r;
        return r;
      }
      function n(e, t) {
        var { days: r } = t,
          { hours: o, minutes: a, seconds: n, milliseconds: s } = t;
        return (
          -1 === e.indexOf("DD") ? (o += 24 * r) : (e = e.replace("DD", i(r))),
          -1 === e.indexOf("HH") ? (a += 60 * o) : (e = e.replace("HH", i(o))),
          -1 === e.indexOf("mm") ? (n += 60 * a) : (e = e.replace("mm", i(a))),
          -1 === e.indexOf("ss") ? (s += 1e3 * n) : (e = e.replace("ss", i(n))),
          e.replace("SSS", i(s, 3))
        );
      }
    },
    "0HbT": function (e, t, r) {},
    "1RE2": function (e, t, r) {
      r.d(t, "a", function () {
        return i;
      });
      var o = r("eijD"),
        a = r("US/N");
      function i() {
        return n.apply(this, arguments);
      }
      function n() {
        return (n = Object(o.a)(function* () {
          return yield Object(a.default)({
            origin: "cashier",
            withCredentials: !0,
            method: "GET",
            path: "/wsctrade/multistore/selfFetchPoint/getCityMap.json",
          });
        })).apply(this, arguments);
      }
    },
    "1RYO": function (e, t, r) {
      t.a = (e) =>
        new Promise((t, r) => {
          wx.getSetting({
            success: (o) => {
              o.authSetting[e]
                ? t()
                : wx.authorize({ scope: e, success: t, fail: r });
            },
            fail: r,
          });
        });
    },
    "25nr": function (e, t, r) {
      var o;
      r.d(t, "b", function () {
        return o;
      }),
        r.d(t, "a", function () {
          return a;
        }),
        (function (e) {
          (e[(e.FreeOrder = 1)] = "FreeOrder"),
            (e[(e.Discount = 2)] = "Discount"),
            (e[(e.Reduce = 3)] = "Reduce");
        })(o || (o = {}));
      var a = {
        FETCHING: -1,
        NON_EXISTENT: 0,
        RECHARGING: 1,
        RECHARGE_SUCCESS: 2,
        RECHARGE_FAIL: 3,
        REFUNDING: 4,
        REFUND_SUCCESS: 5,
        FREEING: 6,
        FREE_ORDER_SUCCESS: 7,
        FREE_ORDER_REFUNDING: 8,
        FREE_ORDER_REFUND_SUCCESS: 9,
        FREE_ORDER_REFUND_FAIL: 10,
        FREE_ORDER_FAIL: 11,
        DISCOUNTING: 12,
        DISCOUNTED: 13,
      };
    },
    "2dXw": function (e, t, r) {
      r.d(t, "d", function () {
        return d;
      }),
        r.d(t, "a", function () {
          return p;
        }),
        r.d(t, "c", function () {
          return h;
        }),
        r.d(t, "b", function () {
          return f;
        });
      var o,
        a = r("Fcif"),
        i = r("AGZf");
      !(function (e) {
        (e[(e.ForbidReceive = 0)] = "ForbidReceive"),
          (e[(e.OptionalReceive = 1)] = "OptionalReceive"),
          (e[(e.ForceReceive = 2)] = "ForceReceive");
      })(o || (o = {}));
      var n;
      o.OptionalReceive, o.ForceReceive;
      !(function (e) {
        e.EXPRESS = "express";
      })(n || (n = {}));
      var s, c;
      o.ForbidReceive;
      !(function (e) {
        e[(e.Store = 2)] = "Store";
      })(s || (s = {})),
        (function (e) {
          (e[(e.Tuan = 2)] = "Tuan"), (e[(e.CashBack = 203)] = "CashBack");
        })(c || (c = {}));
      var d = (e, t) => {
          var r = e.data.grouponModel || {},
            { header: n, receiveState: s } =
              (null == r ? void 0 : r.originGrouponData) || {};
          e.data.grouponModel = Object(a.a)({}, e.data.grouponModel, {
            isChecked: t,
            receiveByGroupHeader: !n && (s === o.ForceReceive || t),
          });
          var [c] = e.process.invoke("fetchShow");
          c.then(() => {
            t && Object(i.a)("收件人已切换为团长");
          });
        },
        u = r("E2EE"),
        l = r("aBxN"),
        p = u.initGrouponModel,
        h = (e, t) => {
          v(e, t);
        },
        f = (e, t) => {
          var r = e.data.grouponModel.originGrouponData,
            o = t === u.ExpressType.EXPRESS && r.displayAgencyReceive,
            i = o && !r.header,
            n = o && r.header;
          e.data.grouponModel = Object(a.a)({}, e.data.grouponModel, {
            expressType: t,
            showGrouponMember: i,
            showGrouponHeader: n,
          });
        },
        v = (e, t) => {
          var r,
            o,
            i =
              null == t || null == (r = t.tradeConfirmation) ? void 0 : r.group,
            n =
              null == t || null == (o = t.tradeConfirmation)
                ? void 0
                : o.activityType;
          if (i && !Object(l.c)(i)) {
            var s, c;
            null != i &&
              i.headerUserName &&
              (c = {
                userName: i.headerUserName,
                tel: i.headerTel,
                province: i.headerProvince,
                city: i.headerCity,
                county: i.headerCounty,
                areaCode: i.headerAreaCode,
                addressDetail: i.headerAddressDetail,
                community: i.headerCommunity,
                idCardNumber: i.idCardNumber,
              }),
              (e.data.grouponModel = Object(a.a)({}, e.data.grouponModel, {
                isGroupon: !0,
                isChecked:
                  i.receiveState === u.GrouponReceive.ForceReceive ||
                  (null == (s = e.data.grouponModel) ? void 0 : s.isChecked),
                originGrouponData: i,
                headerInfo: c,
                isHeader: i.header,
                receiveState: i.receiveState,
                activityType: n,
              }));
            var d = m(e.data.grouponModel),
              p = u.grouponOptionalReceiveConfig[i.receiveState],
              h =
                null == u.grouponMemberReceiveConfig
                  ? void 0
                  : u.grouponMemberReceiveConfig[i.receiveState];
            e.data.grouponModel = Object(a.a)({}, e.data.grouponModel, d, {
              textConfig: p,
              memberTextConfig: h,
            });
          }
        },
        m = (e) => {
          var t = null == e ? void 0 : e.originGrouponData,
            { header: r, receiveState: o, displayAgencyReceive: a } = t,
            { isChecked: i, expressType: n } = e,
            s = n === u.ExpressType.EXPRESS && a,
            c = s && !r,
            d = s && r;
          return {
            receiveByGroupHeader:
              !r && (o === u.GrouponReceive.ForceReceive || i),
            grouponOptionalReceive: o === u.GrouponReceive.OptionalReceive,
            showGrouponMember: c,
            showGrouponHeader: d,
          };
        };
    },
    "46RF": function (e, t, r) {
      r.d(t, "a", function () {
        return o;
      });
      r("+66q").a.TIMELIMITED_DISCOUNT;
      var o = 94;
    },
    "4ofq": function (e, t, r) {
      r.d(t, "b", function () {
        return i;
      }),
        r.d(t, "e", function () {
          return n;
        }),
        r.d(t, "d", function () {
          return o;
        }),
        r.d(t, "c", function () {
          return s;
        }),
        r.d(t, "a", function () {
          return c;
        });
      var o,
        a = r("+66q"),
        i = 2,
        n = [a.a.TIMELIMITED_DISCOUNT];
      !(function (e) {
        (e[(e.EXPLAIN_VIDEO = 1)] = "EXPLAIN_VIDEO"),
          (e[(e.SHARE = 2)] = "SHARE"),
          (e[(e.GOODS_GROUP = 3)] = "GOODS_GROUP"),
          (e[(e.ALL_GOODS = 4)] = "ALL_GOODS"),
          (e[(e.GOODS_SEARCH = 5)] = "GOODS_SEARCH"),
          (e[(e.FROM_OTHER = 6)] = "FROM_OTHER");
      })(o || (o = {}));
      var s, c;
      o.ALL_GOODS, o.GOODS_SEARCH, o.GOODS_GROUP;
      !(function (e) {
        (e[(e.EXPLAIN_VIDEO = 1)] = "EXPLAIN_VIDEO"),
          (e[(e.VIDEO = 2)] = "VIDEO"),
          (e[(e.PICTURE = 3)] = "PICTURE");
      })(s || (s = {})),
        (function (e) {
          (e[(e.BUY_BTN = 1)] = "BUY_BTN"),
            (e[(e.TO_DETAIL = 2)] = "TO_DETAIL"),
            (e[(e.OTHERS = 3)] = "OTHERS"),
            (e[(e.ADD_CART = 4)] = "ADD_CART");
        })(c || (c = {}));
    },
    "4s30": function (e, t, r) {
      r.d(t, "a", function () {
        return s;
      }),
        r.d(t, "b", function () {
          return d;
        }),
        r.d(t, "c", function () {
          return u;
        });
      var o = r("Fcif"),
        a = r("eijD"),
        i = r("AGZf"),
        n = r("YcCB");
      function s(e, t) {
        return c.apply(this, arguments);
      }
      function c() {
        return (c = Object(a.a)(function* (e, t) {
          try {
            var r = e.prepayParams || {};
            r.scene = "COMMON";
            var a = Object(o.a)({}, e.preOrderInfo, {
              extendsInfo: r.extendsInfo,
              prepay: r.prepay || !1,
              prepaySuccess: r.prepay_success,
              extPoint: r.ext_point_pay_result_v_o || "",
            });
            (e.payInfo = a), (this.outBizNo = a.outBizNo || a.orderNo);
          } catch (e) {
            return i.a.fail("充值支付参数异常，请稍后重试"), Promise.reject(e);
          }
          yield t();
        })).apply(this, arguments);
      }
      function d(e) {
        i.a.clear(), i.a.loading({ message: e, duration: 3e4 });
      }
      function u(e) {
        return e
          ? Object(n.d)({ rechargeNo: e })
          : new Promise(() => {
              var e = new Error("充值单号 丢失");
              throw ((e.msg = "充值单号 丢失"), e);
            });
      }
    },
    "4t+T": function (e, t, r) {
      r.d(t, "createStore", function () {
        return u;
      }),
        r.d(t, "initWatch", function () {
          return l;
        });
      var o = r("VmHG"),
        a = r("hEKJ"),
        i = r.n(a),
        n = (r("ypj9"), "PRIOR_USE"),
        s = "CASH_ON_DELIVERY",
        c = "PEERPAY",
        d = {
          state: () => ({
            prepareData: {},
            confirmData: {},
            state: {},
            useBeforePayData: null,
            preCashierChannel: null,
            orderFinalPrice: "",
            goods: [],
            order: {},
            orderNo: "",
            isPeriodBuy: !1,
            periodBuy: null,
          }),
          getters: {
            isPreCashierPay() {
              return this.usePreCashierPay;
            },
            usePreCashierPay() {
              var e,
                t,
                r =
                  (null == (e = this.prepareData) ||
                  null == (t = e.usePreCashierPay)
                    ? void 0
                    : t.value) || !1,
                o = (() => {
                  var e = !1,
                    t = !1;
                  try {
                    (e = JSON.parse(!1)), (t = JSON.parse(!1));
                  } catch (e) {}
                  return e || t;
                })();
              return !(!r || o || !this.orderAmount);
            },
            excludePayTools() {
              var e,
                t,
                r,
                o,
                a,
                i,
                d,
                u,
                l,
                p,
                h,
                f,
                { show: v, enable: m } = this.useBeforePayData || {},
                y = v && m,
                g =
                  null == (e = this.prepareData) || null == (t = e.extensions)
                    ? void 0
                    : t.EXCLUDE_PAY_TOOL_FOR_PAYMENT,
                b =
                  (null == (r = this.prepareData) ||
                  null == (o = r.tradeConfirmation) ||
                  null == (a = o.extra)
                    ? void 0
                    : a.EXCLUDE_PAY_TOOL) ||
                  (null == (i = this.confirmData) ||
                  null == (d = i.tradeConfirmation) ||
                  null == (u = d.extra)
                    ? void 0
                    : u.EXCLUDE_PAY_TOOL),
                C = [...((null == (l = g || b) ? void 0 : l.split(",")) || [])];
              return (
                (C = y ? C.filter((e) => e !== n) : C.concat(n)),
                ((null == (p = this.state) ||
                null == (h = p.valueCard) ||
                null == (f = h.checked)
                  ? void 0
                  : f.length) || 0) > 0 && (C = C.concat([s, c])),
                Array.from(new Set(C))
              );
            },
            buyerPhone() {
              var e, t, r;
              return (
                (null == (e = this.prepareData) ||
                null == (t = e.orderCreation) ||
                null == (r = t.buyer)
                  ? void 0
                  : r.buyerPhone) || ""
              );
            },
            buyerId() {
              var e, t, r;
              return (
                (null == (e = this.prepareData) ||
                null == (t = e.orderCreation) ||
                null == (r = t.buyer)
                  ? void 0
                  : r.buyerId) || 0
              );
            },
            goodsId() {
              var e, t, r, o, a;
              return (
                (null == (e = this.goods) ||
                null == (t = e.list) ||
                null == (r = t[0])
                  ? void 0
                  : r.goodsId) ||
                (null == (o = this.goods) || null == (a = o[0])
                  ? void 0
                  : a.goodsId) ||
                0
              );
            },
            goodsName() {
              var e, t, r, o, a;
              return (
                (null == (e = this.goods) ||
                null == (t = e.list) ||
                null == (r = t[0])
                  ? void 0
                  : r.title) ||
                (null == (o = this.goods) || null == (a = o[0])
                  ? void 0
                  : a.title) ||
                ""
              );
            },
            orderAmount() {
              return i()(this.orderFinalPrice) || 0;
            },
            isPriorUseChosen() {
              var e;
              return (
                !!this.isPreCashierPay &&
                "PRIOR_USE" ===
                  (null == (e = this.preCashierChannel) ? void 0 : e.code)
              );
            },
            preferredPayChannel() {
              var {
                show: e,
                enable: t,
                confirm: r,
              } = this.useBeforePayData || {};
              return e && t && "1" === r ? "PRIOR_USE" : "";
            },
            bizExt() {
              var e,
                t = {};
              return (
                ((null != (e = this.periodBuy) && e.show) ||
                  this.isPeriodBuy) &&
                  (t.PERIOD_SETTLE = 1),
                t
              );
            },
          },
          actions: {
            updatePreCashierChannel(e) {
              this.preCashierChannel = e;
            },
          },
        },
        u = () => Object(o.a)(d),
        l = (e, t) => {
          t.forEach((t, r) => {
            r.forEach((r) => {
              e.watch(r, (e) => t(r, e), { immediate: !0 });
            });
          });
        };
    },
    "5P7O": function (e, t, r) {
      r.d(t, "a", function () {
        return i;
      }),
        r.d(t, "b", function () {
          return n;
        });
      var o = r("5HXs"),
        a = r.n(o),
        i = a()({ block: "cashier-pre" }),
        n =
          (a()({ block: "cashier-pre-copy-link" }),
          function () {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
              t[r] = arguments[r];
            return i("flex", t);
          });
    },
    "5ZYk": function (e, t, r) {
      r.d(t, "a", function () {
        return a;
      }),
        r.d(t, "b", function () {
          return i;
        });
      var o = r("US/N");
      function a(e) {
        return Object(o.default)({
          origin: "cashier",
          path: "/pay/wsctrade/order/buy/getAssetForOrder.json",
          method: "GET",
          data: { bookKey: e },
          withCredentials: !0,
        });
      }
      function i(e) {
        var { bookKey: t, chosenCoupon: r, points: a } = e,
          i = {
            book_key: t,
            coupon: { coupon_id: r.id, external_type: r.externalType },
            point: { points: a.totalPoints },
          };
        return Object(o.default)({
          origin: "cashier",
          path: "/pay/wsctrade/order/buy/useAsset.json",
          method: "POST",
          data: i,
          withCredentials: !0,
        });
      }
    },
    "5kq5": function (e, t, r) {
      r.d(t, "b", function () {
        return a;
      }),
        r.d(t, "a", function () {
          return i;
        });
      var o = r("US/N");
      function a(e) {
        return Object(o.requestUseCdn)({
          path: "/wscgoods/getItemMarqueeRecords.json",
          data: { alias: e },
          withCredentials: !0,
        });
      }
      function i(e) {
        return Object(o.default)({
          path: "/wscgoods/detail-api/item/view-count.json",
          data: { id: e },
          withCredentials: !0,
        }).then((e) => (null == e ? void 0 : e.uniqueVisitor) || 0);
      }
    },
    "5tkZ": function (e, t, r) {
      r.d(t, "a", function () {
        return a;
      });
      var o = r("US/N");
      function a() {
        return Object(o.requestUseCdn)({
          method: "GET",
          path: "/wscassets/api/security/guarantee/docs",
          data: { key: "privacy-bill-rule" },
        });
      }
    },
    "5uB3": function (e, t, r) {
      r.d(t, "a", function () {
        return i;
      });
      var o = r("D74h");
      function a(e) {
        var t = e.body;
        if ("string" == typeof (t = "" === t || '""' === t ? {} : t))
          try {
            t = JSON.parse(t);
          } catch (e) {}
        return "string" == typeof t && (t = { msg: t }), t;
      }
      class i {
        static getIns(e, t) {
          return (
            void 0 === e && (e = {}),
            null === i.instance ? new i(e, t) : i.instance
          );
        }
        constructor(e, t) {
          return (
            void 0 === e && (e = {}),
            (this.authData = null),
            (this.beatInterval = 5e3),
            (this.beatTimeout = 1e4),
            (this.maxBeatTimeoutTimes = 5),
            (this.beatTimeoutCount = 0),
            (this.beatTimer = void 0),
            (this.beatQueue = []),
            (this.ws = null),
            (this.messageCacheList = []),
            (this.requestChannel = "mmp"),
            (this.cacheable = !0),
            (this.authReady = !1),
            i.instance || (i.instance = this),
            Object.assign(this, e),
            (this.ws = t),
            this.initEvent(),
            this.ws.connect(),
            i.instance
          );
        }
        destroyed() {
          this.ws.close();
        }
        send(e, t) {
          return (
            void 0 === t && (t = {}),
            this.isReady(t)
              ? ((e = (function (e, t, r) {
                  var a =
                      Math.floor(65536 * (1 + Math.random()))
                        .toString(16)
                        .substring(2) + Date.now(),
                    i = { reqType: (t = t || o.a.NORMAL) };
                  return (
                    t !== o.a.HEARTBEAT &&
                      ((i.version = 5),
                      (i.body = JSON.stringify(e)),
                      (i.reqId = a),
                      (i.requestChannel = r)),
                    i
                  );
                })(e, t.type, this.requestChannel)),
                this.ws
                  .promiseSend(e)
                  .then((e) => a(e))
                  .catch((e) => {}))
              : this.needCache(t)
              ? this.cacheMsg({ msg: e, options: t })
              : Promise.reject(new Error("Socket is not ready"))
          );
        }
        cacheMsg(e) {
          var t = {},
            r = new Promise((e, r) => {
              (t.resolve = e), (t.reject = r);
            });
          return this.messageCacheList.push({ msgData: e, promiseValue: t }), r;
        }
        isReady(e) {
          return (
            void 0 === e && (e = {}),
            e.noAuth
              ? !(
                  !this.ws ||
                  !this.ws.socket ||
                  this.ws.socket.readyState !== this.ws.socket.OPEN
                )
              : this.authReady
          );
        }
        heartBeat() {
          var e = setTimeout(() => {
            (this.beatTimeoutCount += 1),
              this.beatTimeoutCount > this.maxBeatTimeoutTimes &&
                (this.stopHeartbeat(), this.ws && this.ws.close(!0));
          }, this.beatTimeout);
          this.beatQueue.push(e),
            this.send(null, { type: o.a.HEARTBEAT, noAuth: !0 }),
            (this.beatTimer = setTimeout(
              () => this.heartBeat(),
              this.beatInterval
            ));
        }
        clearHeartbeatTimeout() {
          (this.beatTimeoutCount = 0),
            this.beatQueue.forEach((e) => {
              clearTimeout(e);
            }),
            (this.beatQueue = []);
        }
        stopHeartbeat() {
          clearTimeout(this.beatTimer), this.clearHeartbeatTimeout();
        }
        auth() {
          if (this.authData)
            try {
              this.send(this.authData, { type: o.a.AUTO, noAuth: !0 }).then(
                () => {
                  (this.authReady = !0),
                    this.sendCache(),
                    this.ws && this.ws.eventEmitter.emit("authSuccess");
                }
              );
            } catch (e) {
              (this.authReady = !1),
                this.ws && this.ws.eventEmitter.emit("authFail");
            }
        }
        needCache(e) {
          return "boolean" == typeof e.cacheable ? e.cacheable : this.cacheable;
        }
        sendCache() {
          this.messageCacheList.length &&
            (this.messageCacheList.forEach((e) => {
              var { msgData: t, promiseValue: r } = e,
                { msg: o, options: a } = t;
              this.send(o, a).then(
                (e) => {
                  r.resolve(e);
                },
                (e) => {
                  r.reject(e);
                }
              );
            }),
            (this.messageCacheList = []));
        }
        initEvent() {
          this.ws &&
            (this.ws.eventEmitter.on("open", () => {
              this.auth(), this.heartBeat();
            }),
            this.ws.eventEmitter.on("close", () => {
              (this.authReady = !1), this.stopHeartbeat();
            }),
            this.ws.eventEmitter.on("packet", (e) => {
              e.reqType === o.a.HEARTBEAT && this.clearHeartbeatTimeout(),
                (e.reqType !== o.a.MESSAGE && e.reqType !== o.a.KICKOFF) ||
                  (this.ws &&
                    this.ws.eventEmitter.emit("message", {
                      msg: a(e),
                      reqType: e.reqType,
                    }));
            }));
        }
      }
      i.instance = null;
    },
    6141: function (e, t, r) {
      r.d(t, "a", function () {
        return O;
      });
      var o = r("Fcif"),
        a = r("eijD"),
        i = r("PIsN"),
        n = r.n(i);
      function s(e, t) {
        !(function (e, t) {
          var { orderNo: r } = t.order,
            { shop: o = {} } = e.data,
            { kdtId: a } = o;
          e.logger &&
            e.logger.log({
              et: "click",
              ei: "order_startpay",
              en: "订单页启动支付",
              si: a,
              params: { order_no: r, kdt_id: String(a) },
            });
        })(e, t);
      }
      var c = r("2xJD"),
        d = r("YehF"),
        u = r("KDJo");
      var l,
        p = r("US/N"),
        h = r("YeA1"),
        f = r("VmHG"),
        v = r("4t+T"),
        m = {
          ECARD: "E卡支付",
          CHANGE_PAY: "零钱支付",
          PRIOR_USE: "提交订单",
          ALIPAY_HBFQ: "花呗分期",
          BANK_CARD: "银行卡支付",
          PEERPAY: "找人代付",
          CASH_ON_DELIVERY: "货到付款",
          PF_OFFLINE_PAY: "线下支付",
          WX_JS: "微信支付",
          WX_H5: "微信支付",
          WX_APPLET: "微信支付",
          WX_APP: "微信支付",
        },
        y = {
          ABC_EPAY: "农行商E付",
          CASH_ON_DELIVERY: "货到付款",
          PEERPAY: "找人代付",
          WX_JS: "微信支付",
          WX_H5: "微信支付",
          WX_APPLET: "微信支付",
          WX_APP: "微信支付",
          ALIPAY_WAP: "支付宝WAP支付",
          ALIPAY_JS: "支付宝JSAPI支付",
          ALIPAY_FLOWER: "支付宝花呗支付",
          ALIPAY_HBFQ: "支付宝花呗分期",
          ALIPAY_AGREEMENT: "支付宝免密支付",
          ALIPAY_APPLET: "支付宝小程序支付",
          ECARD: "有赞E卡",
          BANK_CARD: "银行卡支付",
          INSTALMENT: "分期支付",
          PRIOR_USE: "先用后付",
        },
        g = r("zjWU"),
        b = getApp(),
        C = b.getShopInfoSync() || {};
      l = C.shopMetaInfo || {};
      class O {
        constructor(e) {
          var { ctx: t } = e;
          (this.ctx = t),
            this.initData(),
            this.initListen(),
            this.initProcess(),
            Object(h.c)(this, ["state", "display"], {
              callback: (e) => {
                var { state: r, display: o } = e;
                (t.data.biz = (function (e, t, r) {
                  var {
                      isYZRM: o,
                      isWeappMars: a,
                      isWeappGuang: i,
                      isFxZpp: n,
                    } = t,
                    { isWholesaleOrder: s } = r;
                  return s
                    ? "wsc_wholesale_buy"
                    : o
                    ? "best_sellers_trade_order"
                    : a
                    ? "mars_trade_order"
                    : i
                    ? "guang_trade_order"
                    : n
                    ? "zpp_trade_order"
                    : Object(c.c)(e)
                    ? "edu_trade_order"
                    : Object(d.e)(e)
                    ? "retail_trade_order"
                    : Object(u.d)(e)
                    ? "trade_order"
                    : "unknown";
                })(l, r, o)),
                  (t.data.quickMode = !0);
              },
              isOnce: !0,
            });
        }
        initData() {
          (this.store = Object(v.createStore)()),
            Object(f.c)(this, [
              "prepareData",
              "confirmData",
              "order",
              "useBeforePayData",
              "orderFinalPrice",
              "goods",
              "orderNo",
              "periodBuy",
              "isPeriodBuy",
              "state",
            ]);
          var e = new Map([
            [
              [
                "isPreCashierPay",
                "excludePayTools",
                "buyerPhone",
                "buyerId",
                "orderAmount",
                "preferredPayChannel",
                "bizExt",
                "preCashierChannel",
                "isPriorUseChosen",
              ],
              (e, t) => Object.assign(this.ctx.data, { [e]: t }),
            ],
          ]);
          Object(v.initWatch)(this.store, e);
        }
        initListen() {
          Object(h.d)(this, {
            "cashier:pay:success": (e) => {
              g.a.end({
                name: g.b.do_pay,
                type: "finish",
                extra: { message: "支付成功" },
              });
              try {
                this.payPromiseResolve && this.payPromiseResolve(e);
              } catch (e) {}
            },
            "cashier:close": () => {
              g.a.end({
                name: g.b.do_pay,
                type: "finish",
                extra: { message: "取消支付" },
              }),
                setTimeout(() => {
                  this.payPromiseReject(new Error("cashier:close"));
                }, 100);
            },
            "cashier:pay:fail": (e) => {
              var { type: t = "fail" } = e;
              g.a.end({
                name: g.b.do_pay,
                type: "fail" === t ? "error" : "finish",
                extra: { message: "支付失败" },
              }),
                setTimeout(() => {
                  this.payPromiseReject(new Error("cashier:pay:fail"));
                }, 100);
            },
            "cashier:change": (e) => {
              var { current: t } = e,
                r = y[t] || "",
                o = m[t] || "";
              this.store.updatePreCashierChannel({
                code: t,
                name: r,
                btnText: o,
              });
            },
            "cashier:opened": () => {
              try {
                var { data: e, hummer: t } = this.ctx,
                  r = "order-cashier-popup";
                e.buyButtonClickTime &&
                  (t.mark.start(r, e.buyButtonClickTime), t.mark.end(r));
              } catch (e) {}
            },
          });
        }
        startPay(e) {
          var t = this;
          return Object(a.a)(function* () {
            var r,
              o,
              { startPayInfo: a, usePreCashier: i } = void 0 === e ? {} : e,
              {
                prepayId: n,
                partnerId: c,
                cashierSign: d,
                cashierSalt: u,
                orderNo: l,
                bizExt: p,
              } = a || t.startPayInfo || {},
              {
                state: h,
                appId: f,
                display: {
                  yzGuarantee: v,
                  yzGuaranteeInfo: m,
                  selectedInstallmentPeriod: y,
                },
                useBeforePayData: {
                  show: g = !1,
                  enable: b = !1,
                  confirm: C = "0",
                },
                tradeTag: O,
              } = t.ctx.data;
            try {
              (r = JSON.parse(p)).appId = f;
            } catch (e) {
              r = {};
            }
            h.isYZRM
              ? (r.order_mark = "weapp_shell")
              : h.isWeappMars
              ? (r.order_mark = "weapp_jx")
              : h.isWeappGuang && (r.order_mark = "weapp_guang"),
              s(t.ctx, t.ctx.data.state),
              (o = O.continuousOrder ? "MEM_SUB" : "VALUE_COMMON");
            var P = [];
            return (
              g && b && "1" === C && P.push("PRIOR_USE"),
              y && P.push("INSTALMENT"),
              t.invokePay(
                {
                  prepayId: n,
                  cashierSalt: u,
                  cashierSign: d,
                  partnerId: c,
                  orderNo: l,
                  showGuarantee: !(!v || (null != m && m.hideYzGuarantee)),
                  wxOrderInfo: void 0,
                  scene: o,
                  tradeBizExt: r,
                  recommendPayTools: P,
                },
                i
              ),
              new Promise((e, r) => {
                (t.payPromiseResolve = e), (t.payPromiseReject = r);
              })
            );
          })();
        }
        invokePay(e, t) {
          var r,
            { order: o } = this.ctx.data;
          t ||
          (this.store.isPreCashierPay &&
            !(null != o && null != (r = o.config) && r.isStoreAndPayProcess))
            ? this.ctx.process.invoke("startPay_preCashier", e)
            : (this.ctx.process.invoke("startPay", e),
              g.a.start({ name: g.b.do_pay, timeout: 60 }));
        }
        queryPayChannels() {
          var e,
            t,
            { state: r, tradeTag: o, appId: a } = this.ctx.data,
            {
              order: { orderNo: i },
              pay: {
                extPoint: n,
                prepayParams: c = {},
                showPayResult: d = !1,
                zeroOrder: u = !1,
              },
            } = r,
            { ignorePrePayForTest: l } = c;
          if (l) return Promise.resolve([]);
          if (n && n.cashDeskUrl && n.isOutsidePay && n.isSuccess)
            return Promise.resolve([]);
          if (u) return Promise.resolve([]);
          if (d) return Promise.resolve([]);
          try {
            (e = JSON.parse(c.bizExt)).appId = a;
          } catch (t) {
            e = {};
          }
          s(this.ctx, r), (t = o.continuousOrder ? "MEM_SUB" : "VALUE_COMMON");
          var [
            p = Promise.reject(new Error("支付方式查询失败：流程缺少提供方")),
          ] = this.ctx.process.invoke("queryPayChannels", {
            prepayId: c.prepayId,
            cashierSalt: c.cashierSalt,
            cashierSign: c.cashierSign,
            partnerId: c.partnerId,
            scene: t,
            orderNo: i,
            wxOrderInfo: void 0,
            tradeBizExt: e,
          });
          return p;
        }
        doPay(e) {
          var t = new Promise((e, t) => {
            (this.payPromiseResolve = e), (this.payPromiseReject = t);
          });
          return this.ctx.process.invoke("doPay", e), t;
        }
        handlePayAfterCreateOrder(e) {
          var { display: t = {}, order: r = {} } = this.ctx.data.state || {},
            { order: a = {} } = this.ctx.data || {},
            { config: i = {} } = a || r;
          if (t.newRecommend && i.isStoreAndPayProcess)
            return this.RECHARGE_ORDER_PREPAY().then(
              (e) => (
                this.ctx.process.invoke("mutateState", (t) => {
                  t.pay.prepayParams = Object(o.a)({}, t.pay.prepayParams, e);
                }),
                (this.startPayInfo = Object(o.a)({}, e, {
                  orderNo: e.outBizNo,
                })),
                e
              )
            );
          var { orderNo: n, prePaymentPreparation: s = {} } = e;
          this.startPayInfo = Object(o.a)({}, s, { orderNo: n });
        }
        RECHARGE_ORDER_PREPAY() {
          var e,
            t,
            r,
            a,
            i,
            { state: n } = this.ctx.data;
          return Object(p.default)({
            origin: "cashier",
            withCredentials: !0,
            method: "POST",
            path: "/wsctrade/pay/recharge-order-prepay.json",
            data: Object(o.a)(
              {
                templateNo: "",
                clientSource: "",
                partnerReturnUrl:
                  null == (e = n.pay) || null == (t = e.payParams)
                    ? void 0
                    : t.partnerReturnUrl,
                outBizNo:
                  (null == (r = n.order) ? void 0 : r.mergePrepayOrderNo) ||
                  ((null == (a = n.order) ? void 0 : a.orderNos) || [])[0],
                outBizContext: {},
                tradeDesc: "",
                cardNo: "",
                payAmount: 0,
                valueCardRechargeRuleNo: "",
                goodsName: "",
                valueCardRechargeRuleVersion: "",
                productNo: "",
              },
              (null == (i = n.pay) ? void 0 : i.valueCardParams) || {}
            ),
          }).then(function (e) {
            if ((void 0 === e && (e = {}), !1 === e.success)) throw e;
            return e;
          });
        }
        initProcess() {
          this.ctx.process.define("onPaySuccessSync", () =>
            this.ctx.process.invokePipe("showSubscription")
          ),
            this.ctx.process.define("startPay", this.startPay.bind(this)),
            this.ctx.process.define(
              "queryPayChannels",
              this.queryPayChannels.bind(this)
            ),
            this.ctx.process.define("doPay", this.doPay.bind(this)),
            this.ctx.process.define(
              "handlePayAfterCreateOrder",
              this.handlePayAfterCreateOrder.bind(this)
            ),
            this.ctx.process.define("handleBeforePay", (e) => {
              var { payChannel: t, payChannelName: r } = e;
              return Promise.all([
                this.ctx.cloud.invoke("beforePayAsync", {
                  payChannel: t,
                  payChannelName: r,
                }),
                this.ctx.cloud.invoke("beforeOrderPay", {
                  payWay: { payChannel: t, payChannelName: r },
                }),
              ]);
            }),
            this.ctx.process.define("onPayItemClick", (e) => {
              var { payChannel: t, payChannelName: r } = e;
              return (
                this.ctx.cloud.emit("onPayChannelChange", {
                  payWay: { payChannel: t, payChannelName: r },
                }),
                this.ctx.cloud.invoke("beforePayItemClick", {
                  payChannel: t,
                  payChannelName: r,
                })
              );
            });
        }
      }
      O.widgets = { Installment: n.a };
    },
    "7Hse": function (e, t, r) {
      r.d(t, "b", function () {
        return a;
      }),
        r.d(t, "a", function () {
          return i;
        });
      var o = r("US/N");
      function a(e) {
        return Object(o.default)({
          origin: "cashier",
          withCredentials: !0,
          method: "post",
          path: "/wsctrade/order/invoice/queryTaxInfoListByCorpName.json",
          data: e,
        });
      }
      function i(e) {
        return Object(o.default)({
          origin: "cashier",
          withCredentials: !0,
          method: "post",
          path: "/wsctrade/order/invoice/queryCompanyDetailTaxInfo.json",
          data: e,
        });
      }
    },
    "7m36": function (e, t, r) {
      r.d(t, "a", function () {
        return o;
      });
      var o = {
        invoiceType: { normal: 1, vat: 2 },
        raiseType: { enterprise: "enterprise", personal: "personal" },
        invoiceDetailType: {
          itemDetail: "itemDetail",
          itemCategory: "itemCategory",
        },
        default: { raiseType: "enterprise", invoiceDetailType: "itemCategory" },
        invoiceLimitType: { normal: "10", vat: "01", both: "11" },
        wxInvoiceStatus: {
          ok: "chooseInvoiceTitle:ok",
          fail: "chooseInvoiceTitle:fail",
          cancel: "chooseInvoiceTitle:fail cancel",
        },
      };
    },
    "8Ulw": function (e, t, r) {
      r.d(t, "a", function () {
        return s;
      });
      var o = r("aDHN"),
        a = r("exEQ"),
        i = r("xqQ2");
      class n extends o.a {
        constructor() {
          super(a.b, a.c),
            this.mergeParams({
              package_name: "@assets-tee-extensions/cashier-pre",
            }),
            (this.tracker = new i.a({
              beforeAppshow() {},
              beforeEnterpage() {},
              batch: !1,
              plat: { yai: "cashier" },
            })),
            this.tracker.appShow();
        }
      }
      function s() {
        return new n();
      }
    },
    "8pRd": function (e, t, r) {
      r.d(t, "a", function () {
        return l;
      });
      var o = r("eijD"),
        a = r("+I+c"),
        i = r("Fcif"),
        n = r("2bgu"),
        s = r("exEQ"),
        c = ["title", "url", "weappUrl"],
        d = ["showGuarantee"],
        u = ["showGuarantee"];
      function l(e) {
        return class extends e {
          constructor(e) {
            super(
              Object(i.a)({}, e, {
                type: "YZP" === e.type ? e.type : "B",
                request: Object(s.a)(e.origin),
              })
            ),
              (this.initialized = !1),
              (this.skynet = s.c),
              (this.kdtId = e.kdtId),
              (this.rantaCtx = e.rantaCtx);
            var {
              onPaySuccess: t,
              onCashierClose: r,
              onCashierOpened: o,
              onCashierFail: d,
            } = e;
            t && this.EE.on("pay-success", t),
              r && (this.EE.on("close", r), this.EE.on("quick-close", r)),
              o && this.EE.on("opened", o),
              d && this.EE.on("cashier-fail", d),
              n.a.init(),
              this.EE.on("navigate", (e) => {
                var { title: t, url: r, weappUrl: o } = e,
                  d = Object(a.a)(e, c);
                if ("function" != typeof this.paySuccessInterceptor) {
                  var { orderNo: u } = e.postPayData || {};
                  if (o)
                    return wx.redirectTo({
                      url: o,
                      fail: (t) => {
                        s.c.error("跳转失败", {
                          orderNo: u,
                          error: t,
                          data: e,
                        });
                      },
                    });
                  Object(n.b)({
                    url: decodeURIComponent(r),
                    web: {
                      type: "znb",
                      znb: Object(i.a)({}, d, {
                        weappUrl: o,
                        title: t,
                        url: decodeURIComponent(r),
                        skipSafeLink: !0,
                      }),
                      znbFailureCb: (t) => {
                        s.c.error("跳转失败", {
                          orderNo: u,
                          error: null == t ? void 0 : t.message,
                          data: e,
                        });
                      },
                    },
                  });
                } else this.paySuccessInterceptor(e);
              });
          }
          startPay(e) {
            if (this.initialized) {
              var t = e || {},
                { showGuarantee: r } = t,
                o = Object(a.a)(t, d);
              this.EE.emit("update-show-guarantee", r), super.startPay(o);
            } else this.EE.emit("close");
          }
          extPay(e, t) {
            if ((void 0 === t && (t = {}), this.initialized)) {
              var r = e || {},
                { showGuarantee: o } = r,
                i = Object(a.a)(r, u),
                n = Object.keys(t);
              n.length &&
                n.forEach((e) => {
                  var r = t[e];
                  this.EE.emit("update-context", { keyName: e, value: r });
                }),
                this.EE.emit("update-show-guarantee", o),
                super.extPay(i);
            } else this.EE.emit("close");
          }
          doPay(e) {
            for (
              var t = this,
                r = arguments.length,
                o = new Array(r > 1 ? r - 1 : 0),
                a = 1;
              a < r;
              a++
            )
              o[a - 1] = arguments[a];
            var i = this.payChannels.find((t) => t.payChannel === e),
              n = this.rantaCtx.process.invoke("beforePay", {
                payChannel: e,
                payChannelName: i && i.payChannelName,
              });
            return Promise.all(n)
              .then(() => super.doPay(e, ...o))
              .catch(function (e) {
                throw (
                  (void 0 === e && (e = {}),
                  s.c.warn("业务方定制代码阻断支付", {
                    message: e.message || e.msg,
                    error: e,
                  }),
                  t.bindDoPayOnce(),
                  e)
                );
              });
          }
          doPayWithInterceptor(e) {
            var {
              payChannel: t,
              paySuccessInterceptor: r,
              channelSpecialLogic: o,
            } = e;
            return (
              r && (this.paySuccessInterceptor = r),
              o ? this.doPay(t, { channelSpecialLogic: o }) : this.doPay(t)
            );
          }
          init(e) {
            var t = () => super.init,
              a = this;
            return Object(o.a)(function* () {
              (a.clear = e.clear), (a.toast = e.toast);
              var o = yield r
                .e("packages/async-main/chunk")
                .then(r.t.bind(null, "sbP3", 7));
              return t()
                .call(a, e, o)
                .then(
                  (e) => (
                    (a.initialized = !0),
                    a.rantaCtx.event.emit("cashier:ready"),
                    e
                  )
                )
                .catch((e) => {
                  throw (
                    ((a.initialized = !0),
                    a.rantaCtx.event.emit("cashier:ready"),
                    e)
                  );
                });
            })();
          }
        };
      }
    },
    ANY2: function (e, t, r) {
      r.d(t, "a", function () {
        return u;
      });
      var o = r("eijD"),
        a = r("+I+c"),
        i = r("Fcif"),
        n = r("exEQ"),
        s = r("2bgu"),
        c = ["title", "url", "weappUrl"],
        d = ["showGuarantee"];
      function u(e) {
        return class extends e {
          constructor(e) {
            super(Object(i.a)({}, e, { type: "PRE", request: n.b })),
              (this.useTypeRouter = !1),
              (this.initialized = !1),
              (this.rantaCtx = e.rantaCtx);
            var {
              onPaySuccess: t,
              onCashierClose: r,
              onCashierFail: o,
              onNavigate: d,
            } = e;
            (this.skynet = n.c),
              t && this.EE.on("pay-success", t),
              r && (this.EE.on("close", r), this.EE.on("quick-close", r)),
              o && this.EE.on("cashier-fail", o),
              s.a.init(),
              this.EE.on("navigate", (e) => {
                var { title: t, url: r, weappUrl: o } = e,
                  u = Object(a.a)(e, c);
                d && d();
                var { orderNo: l } = e.postPayData || {};
                if (o)
                  return wx.redirectTo({
                    url: o,
                    fail: (t) => {
                      n.c.error("跳转失败", { orderNo: l, error: t, data: e });
                    },
                  });
                Object(s.b)({
                  url: decodeURIComponent(r),
                  web: {
                    type: "znb",
                    znb: Object(i.a)({}, u, {
                      weappUrl: o,
                      title: t,
                      url: decodeURIComponent(r),
                      skipSafeLink: !0,
                    }),
                    znbFailureCb: (t) => {
                      n.c.error("跳转失败", {
                        orderNo: l,
                        error: null == t ? void 0 : t.message,
                        data: e,
                      });
                    },
                  },
                });
              });
          }
          startPay(e) {
            if (this.initialized) {
              var t = e || {},
                { showGuarantee: r } = t,
                o = Object(a.a)(t, d);
              this.EE.emit("update-show-guarantee", r), super.startPay(o);
            } else this.EE.emit("close");
          }
          init(e) {
            var t = () => super.init,
              a = this;
            return Object(o.a)(function* () {
              (a.clear = e.clear), (a.toast = e.toast);
              var o = yield r
                .e("packages/async-main/chunk")
                .then(r.t.bind(null, "sbP3", 7));
              return t()
                .call(a, e, o)
                .then(
                  (e) => (
                    (a.initialized = !0),
                    a.rantaCtx.event.emit("cashier:ready"),
                    e
                  )
                )
                .catch((e) => {
                  throw (
                    ((a.initialized = !0),
                    a.rantaCtx.event.emit("cashier:ready"),
                    e)
                  );
                });
            })();
          }
        };
      }
    },
    APWh: function (e, t, r) {
      r.d(t, "a", function () {
        return a;
      });
      var o = r("US/N"),
        a = (e) =>
          Object(o.requestUseCdn)({
            path: "/wscshop/shop/shop-meta-info.json",
            method: "GET",
            data: { kdt_id: e },
          });
    },
    B188: function (e, t, r) {
      function o(e) {
        return (e = "00" + e).slice(-2);
      }
      function a(e) {
        var t = new Date(1e3 * e);
        return (
          t.getFullYear() + "." + o(t.getMonth() + 1) + "." + o(t.getDate())
        );
      }
      function i(e, t, r) {
        var {
            valueDesc: o,
            extraInfo: i,
            startAt: n,
            endAt: s,
            id: c,
            name: d,
            available: u = !0,
            reason: l,
            canOverlying: p = !0,
          } = e,
          h = [o],
          f = o.includes(".");
        f && (h = o.split("."));
        var v = null == i ? void 0 : i.validPeriodCopywriting;
        v || (v = a(n) + " - " + a(s));
        var m = {
          id: c,
          showDecimal: f,
          price: h[0],
          decimal: h[1],
          period: v,
          name: d,
          available: u,
          reason: l,
          canOverlying: p,
        };
        return (
          ((t && !p) || (r && r !== c)) &&
            ((m.available = !1), (m.reason = "此券暂不可和已勾选的券叠加")),
          Object.freeze(m),
          m
        );
      }
      function n(e, t, r) {
        void 0 === r && (r = {});
        var o,
          a = Object.keys(r),
          n = a.length,
          s = !1;
        if (n > 1) s = !0;
        else if (1 === n) {
          var c = e.find((e) => +e.id == +a[0]);
          c.canOverlying ? (s = !0) : (o = +c.id);
        }
        return [...e.map((e) => i(e, s, o)), ...t.map((e) => i(e))];
      }
      r.d(t, "a", function () {
        return n;
      });
    },
    B9AD: function (e, t, r) {
      r.d(t, "a", function () {
        return o;
      });
      var o = function (e) {
        return (
          void 0 === e && (e = []),
          e[
            ((t = e.length - 1),
            void 0 === t && (t = 0),
            Math.round(Math.random() * t))
          ]
        );
        var t;
      };
    },
    CaE8: function (e, t, r) {
      r.d(t, "g", function () {
        return d;
      }),
        r.d(t, "b", function () {
          return u;
        }),
        r.d(t, "c", function () {
          return p;
        }),
        r.d(t, "f", function () {
          return h;
        }),
        r.d(t, "d", function () {
          return f;
        }),
        r.d(t, "e", function () {
          return m;
        }),
        r.d(t, "a", function () {
          return y;
        });
      var o = r("eijD"),
        a = r("YcCB"),
        i = r("JLxb"),
        n = r("9ZMt"),
        s = r("AGZf"),
        c = { weapp: 23, web: 22 };
      function d() {
        if (this.cardNoSign) return Promise.resolve();
        var { templateNo: e } = this.product;
        return Object(a.e)({ templateNo: e })
          .then((e) => ((this.cardNoSign = e.cardNo), e))
          .catch((e) => {
            throw ((this.isError = !0), s.a.fail("签约开卡失败"), e);
          });
      }
      function u(e, t) {
        return l.apply(this, arguments);
      }
      function l() {
        return (l = Object(o.a)(function* (e, t) {
          try {
            var r = yield Object(a.a)(e.prepayParams);
            e.preOrderInfo = Object(i.a)(r);
          } catch (e) {
            return (
              e && e.code && 118702100 === e.code
                ? (this.rechargeDiscount.rules = [])
                : s.a.fail("暂无法充值\n请稍后重试"),
              (this.isError = !0),
              Promise.reject(e)
            );
          }
          yield t();
        })).apply(this, arguments);
      }
      function p() {
        var e = this.selected.amount;
        return {
          kdtId: this.kdtId,
          cardNo: this.cardNoSign,
          payAmount: e,
          goodsName: "充值免单自定义金额储值",
          tradeDesc: "VLCARD_RCHG",
          source: c[n.default.platform],
          rechargeFreeOrderRule: {
            ruleId: this.rechargeDiscount.ruleId,
            orderInfo: this.selected,
            ruleVersion: this.rechargeDiscount.ruleVersion,
          },
          extendsInfo: {
            kdtId: this.kdtId,
            cardNo: this.cardNoSign,
            amount: e,
            pubKdtId: this.kdtId,
            acpKdtId: this.kdtId,
            marketChannel: "1",
            weappRedirectUrl: "",
          },
        };
      }
      function h(e) {
        void 0 === e && (e = !0),
          this.ctx.process.invoke("setOrderForbidCoupon", e),
          this.ctx.process.invoke("setOrderForbidPreference", e);
      }
      function f(e) {
        return v.apply(this, arguments);
      }
      function v() {
        return (v = Object(o.a)(function* (e) {
          void 0 === e && (e = !0), h.bind(this)(e);
          try {
            this.ctx.process.invoke("mutateState", (e) => {
              e.order.config.isFreeOrderPreOrderConfirm = !0;
            });
            var [t] = this.ctx.process.invoke("confirmOrder");
            return (
              yield t,
              this.ctx.process.invoke("mutateState", (e) => {
                e.order.config.isFreeOrderPreOrderConfirm = !1;
              }),
              !0
            );
          } catch (e) {
            return Object(s.a)("初始化订单数据异常，请刷新页面后重试"), !1;
          }
        })).apply(this, arguments);
      }
      function m() {
        try {
          var [e] = this.ctx.process.invoke("getCreateOrderParam");
          return (this.orderInfo = e), e;
        } catch (e) {
          Object(s.a)("获取订单参数异常，请刷新页面后重试");
        }
      }
      function y() {
        var e = 0;
        return (
          this.ctx.process.invoke("mutateState", (t) => {
            var { originItemPrice: r = 0 } = t.pay || {};
            e = r;
          }),
          e
        );
      }
    },
    CrLP: function (e, t, r) {
      var o = r("US/N");
      t.a = {
        getOrderPayPrompt: (e, t) => (
          void 0 === t && (t = null),
          Object(o.default)({
            path: "/wsctrade/order/pay-prompt-receive.json",
            data: { kdtId: e, source: t },
          })
        ),
      };
    },
    D74h: function (e, t, r) {
      r.d(t, "a", function () {
        return s;
      }),
        r.d(t, "b", function () {
          return f;
        });
      var o = r("9DIb"),
        a = r.n(o),
        i = r("jmjq"),
        n = r.n(i),
        s =
          (r("US/N"),
          {
            AUTO: 7,
            DROP: 21,
            PICK: 22,
            INIT: 28,
            WAITING: 23,
            ADMIN: 34,
            HEARTBEAT: 1,
            ADMINONLINE: 43,
            TALK: 2,
            NEWTALK: 45,
            OWN: 33,
            HISTORY: 3,
            NORMAL: 4,
            LOST: 5,
            STATUSMAX: 39,
            UNREAD: 12,
            NEW: 13,
            READ: 14,
            MESSAGE: 11,
            KICKOFF: 9,
            FAQ: 70,
            MENU: 71,
            NOTICE: 72,
            READ_MESSAGE: 103,
            NEW_EVENT: 104,
            PAGE_VIEW: 105,
          }),
        c = "text",
        d = "faq",
        u = "check_order",
        l = "persistnotice",
        p = "petty_cash_payment",
        h = {
          [c]: "文本",
          ["image"]: "图片",
          ["card"]: "商品卡片",
          ["link"]: "链接",
          ["notice"]: "通知消息",
          ["voice"]: "语音",
          ["goodsCard"]: "来源商品卡片",
          [d]: "常见问题",
          ["order_detail"]: "订单信息",
          ["evaluation"]: "满意度评价",
          ["evaluation_miniprogrampage"]: "满意度评价",
          ["video"]: "视频",
          ["fans_persistnotice"]: "粉丝通知消息",
          [u]: "自助核对订单",
          ["card_text"]: "地址修改",
          ["coupon"]: "优惠券",
          [p]: "小额打款",
          ["linkcard"]: "图文素材",
        };
      function f(e) {
        try {
          var t = "";
          switch (e.msg_type) {
            case c:
            case l:
              t = e.content;
              break;
            case d:
              t = JSON.parse(e.content).message || "[常见问题]";
              break;
            case u:
              t = "[请你核对订单信息]";
              break;
            case p:
              try {
                var { transferAmount: r } = a()(JSON.parse(e.content));
                t = "[补偿金已到账" + n()(r, !0, !1) + "元]";
              } catch (e) {
                t = "[补偿金已到账]";
              }
              break;
            default:
              t = "[" + (h[e.msg_type] || "您有新的消息") + "]";
          }
          return t;
        } catch (e) {
          return "您有新的消息";
        }
      }
    },
    D77s: function (e, t, r) {
      r.d(t, "b", function () {
        return o;
      }),
        r.d(t, "a", function () {
          return a;
        });
      var o = function (e) {
          var { shopConfig: t, soldNum: r } = e,
            { showBuyRecord: o, goodsDetailSales: a } = t || {},
            i = o ? { show: 1, limit: !1 } : { show: 0, limit: !1 };
          if (a)
            try {
              i = JSON.parse(a) || i;
            } catch (e) {}
          if (!i) return r > 0;
          var { show: n = 0, limit: s = !1, limit_num: c = 0 } = i;
          return 0 != +n && (s ? r >= c : r > 0);
        },
        a = function (e) {
          return e > 99999 ? "10万+" : e;
        };
    },
    Dnnr: function (e, t, r) {
      r.d(t, "f", function () {
        return u;
      }),
        r.d(t, "e", function () {
          return l;
        }),
        r.d(t, "d", function () {
          return p;
        }),
        r.d(t, "a", function () {
          return h;
        }),
        r.d(t, "b", function () {
          return f;
        }),
        r.d(t, "c", function () {
          return v;
        });
      var o,
        a,
        i = r("Fcif"),
        n = r("9ZMt"),
        s = r("AGZf"),
        c = r("z9IR"),
        d = () => {};
      function u(e) {
        d = e;
      }
      function l(e) {
        o = e;
      }
      function p() {
        a = s.a.loading({ forbidClick: !0, ref: d() });
      }
      function h() {
        var e;
        null == (e = a) || e.clear();
      }
      function f(e) {
        return c.a.confirm(Object(i.a)({}, e, { ref: o }));
      }
      function v(e) {
        return n.default.getGlobal(e) || o;
      }
    },
    FyhB: function (e, t, r) {
      r.d(t, "b", function () {
        return i;
      }),
        r.d(t, "a", function () {
          return n;
        });
      var o = r("US/N"),
        a = r("WwLc"),
        i = (e) =>
          Object(o.default)({
            path: "/wscump/visit-gift/join.json",
            data: { channel: a.d, source: e },
            method: "POST",
          }),
        n = (e) =>
          Object(o.default)({
            method: "GET",
            path: "/wscump/coupon/coupon_use_redirect.json",
            data: e,
          });
    },
    GaIL: function (e, t, r) {
      var o,
        a = r("Fcif"),
        i = r("ONqW"),
        n = Object(i.a)(),
        s = { pt: "g" };
      !(function (e) {
        (e[(e.BUY_BTN = 1)] = "BUY_BTN"),
          (e[(e.TO_DETAIL = 2)] = "TO_DETAIL"),
          (e[(e.OTHERS = 3)] = "OTHERS");
      })(o || (o = {})),
        (t.a = {
          windowView: function () {
            null == n ||
              n.log(
                Object(a.a)({}, s, {
                  et: "view",
                  ei: "explain_video_window_view",
                  en: "讲解视频小窗曝光",
                })
              );
          },
          windowClick: function () {
            null == n ||
              n.log(
                Object(a.a)({}, s, {
                  et: "click",
                  ei: "explain_video_window_click",
                  en: "讲解视频小窗点击",
                })
              );
          },
          windowClose: function () {
            null == n ||
              n.log(
                Object(a.a)({}, s, {
                  et: "click",
                  ei: "explain_video_window_close",
                  en: "讲解视频小窗关闭",
                })
              );
          },
          itemCardClick: function (e) {
            var { clickType: t } = e;
            null == n ||
              n.log(
                Object(a.a)({}, s, {
                  et: "click",
                  ei: "explain_video_item_card_click",
                  en: "讲解视频商品卡片点击",
                  params: { type: t },
                })
              );
          },
          fullScreenView: function () {
            null == n ||
              n.log(
                Object(a.a)({}, s, {
                  et: "view",
                  ei: "explain_video_fullscreen_view",
                  en: "讲解视频全屏曝光",
                })
              );
          },
          itemCardBtnView: function (e) {
            var { btnType: t } = e;
            null == n ||
              n.log(
                Object(a.a)({}, s, {
                  et: "view",
                  ei: "explain_video_item_card_btn_click",
                  en: "讲解视频商品卡片按钮曝光",
                  params: { type: t },
                })
              );
          },
          goBackClick: function () {
            null == n ||
              n.log(
                Object(a.a)({}, s, {
                  et: "click",
                  ei: "explain_video_go_back_click",
                  en: "讲解视频返回按钮点击",
                })
              );
          },
        });
    },
    HCk1: function (e, t, r) {
      r.d(t, "b", function () {
        return a;
      }),
        r.d(t, "a", function () {
          return o;
        });
      var o,
        a = { FREE: 1, PAY: 2 };
      !(function (e) {
        (e[(e.Normal = 1)] = "Normal"), (e[(e.Logo = 2)] = "Logo");
      })(o || (o = {}));
    },
    HJxx: function (e, t, r) {
      r.d(t, "b", function () {
        return o;
      }),
        r.d(t, "a", function () {
          return a;
        });
      var o = (e) => {
          var t = [];
          return (
            Array.isArray(e) &&
              e.length &&
              e.forEach((e) => {
                e.list &&
                  Array.isArray(e.list) &&
                  e.list.length &&
                  e.list.forEach((e) => {
                    e.enabled &&
                      !e.finished &&
                      "IMPROVEID" !== e.name &&
                      "BINDPHONE" !== e.name &&
                      t.push(e);
                  });
              }),
            t
          );
        },
        a = (e) =>
          ((null == e ? void 0 : e.couponList) &&
            Array.isArray(null == e ? void 0 : e.couponList) &&
            (null == e ? void 0 : e.couponList.length)) ||
          ((null == e ? void 0 : e.presentList) &&
            Array.isArray(null == e ? void 0 : e.presentList) &&
            (null == e ? void 0 : e.presentList.length)) ||
          (null == e ? void 0 : e.points) > 0;
    },
    Hbp8: function (e, t, r) {
      r.d(t, "a", function () {
        return i;
      });
      var o,
        a = r("Sipi");
      o = { getItem: a.b, removeItem: a.c, setItem: a.d };
      var i = "crossStoreSelfFetchCache";
      t.b = o;
    },
    HvZ6: function (e, t, r) {
      r.d(t, "a", function () {
        return Kt;
      });
      var o,
        a = r("VmHG"),
        i = r("Fcif"),
        n = r("Sipi");
      o = { getItem: n.b, removeItem: n.c, setItem: n.d };
      function s(e) {
        var t;
        try {
          var r;
          t =
            null == (r = JSON.parse(o.getItem("crossStoreSelfFetchCache")))
              ? void 0
              : r[e];
        } catch (e) {}
        return t;
      }
      var c = r("o5pj"),
        d = r("xyw3");
      function u(e) {
        return e.reduce((e, t) => e + t, 0);
      }
      function l(e) {
        return Object(d.a)(e).toYuan();
      }
      function p(e, t, r, o) {
        var a = [];
        return (
          r && a.push(r + o),
          (!t && r) || a.push(e + (t / 100).toFixed(2)),
          a.join(" + ")
        );
      }
      var h = {
          hasHaitaoGoods() {
            var e,
              t,
              r = this.tradeState;
            return null == r || null == (e = r.goods) || null == (t = e.list)
              ? void 0
              : t.some((e) => 1 == +e.haitao);
          },
          currentAddress() {
            var e,
              t,
              r,
              o,
              a,
              i = this.tradeState;
            return Object(c.b)(
              null == i || null == (e = i.address) ? void 0 : e.inlineForm
            )
              ? this.receiveByGroupHeader
                ? null == i || null == (t = i.groupon)
                  ? void 0
                  : t.headerInfo
                : (null == i || null == (r = i.address) || null == (o = r.list)
                    ? void 0
                    : o.filter(
                        (e) => e.id === (null == i ? void 0 : i.address.id)
                      )[0]) || {}
              : null == i || null == (a = i.address)
              ? void 0
              : a.inlineForm;
          },
          receiveByGroupHeader() {
            var e;
            return null == (e = this.grouponModel)
              ? void 0
              : e.receiveByGroupHeader;
          },
          chosenCoupon() {
            var e;
            return null == (e = this.couponModel) ? void 0 : e.chosenCoupon;
          },
          currentContact() {
            var e,
              t,
              r,
              o,
              a,
              i = this.tradeState;
            return null != (e = i.contact) && e.id
              ? (null == i || null == (o = i.contact) || null == (a = o.list)
                  ? void 0
                  : a.find((e) => e.id === i.contact.id)) || {}
              : {
                  userName:
                    null == i || null == (t = i.contact) ? void 0 : t.userName,
                  telephone:
                    null == i || null == (r = i.contact) ? void 0 : r.telephone,
                };
          },
          selfFetchTime() {
            var e = this.tradeState,
              { time: t, shop: r } = e.selfFetch;
            return (
              t ||
              (!this.canSelectSelfFetchTime && r
                ? "请按约定时间提货"
                : "选择提货时间")
            );
          },
          canSelectSelfFetchTime() {
            var e = this.tradeState,
              { shop: t } = e.selfFetch;
            return (t && t.optionalSelfFetchTime && !this.orderCreated) || !1;
          },
          orderCreated() {
            var { order: e = {} } = this.tradeState,
              { orderNos: t } = e;
            return !(!Array.isArray(t) || !t.length);
          },
          expressType() {
            var e,
              t,
              r = this.tradeState,
              { display: o } = r;
            return null != o &&
              o.showExpressTab &&
              null != r &&
              null != (e = r.selfFetch) &&
              e.isAllow
              ? 1 === r.address.activeTab
                ? "self-fetch"
                : "express"
              : null != r && null != (t = r.selfFetch) && t.isAllow
              ? "self-fetch"
              : "express";
          },
          forcePoiSelect() {
            var { postage: e = {}, display: t = {} } = this.tradeState;
            return (
              "express" === this.expressType &&
              !!t.localDeliveryPosition &&
              2 === e.currentExpressType
            );
          },
          showPoiPrompt() {
            var { currentAddress: e = {}, forcePoiSelect: t = {} } = this;
            return t && 2 !== e.type && !e.downgrade;
          },
          isChoosedCard() {
            var e,
              { valueCard: t } = this.tradeState;
            return !(null == t || null == (e = t.checked) || !e.length);
          },
          guaranteeOrderInfo() {
            var e,
              {
                extra: t,
                goods: r,
                shop: o,
                order: a,
                postage: i,
              } = this.tradeState,
              n = null;
            try {
              var s;
              n =
                null ==
                (s = JSON.parse(
                  (null == t ? void 0 : t.BIZ_IDENTITY_ID) || "{}"
                ))
                  ? void 0
                  : s.bizCategory;
            } catch (e) {}
            return {
              bizCategory: n,
              aliases: ((null == r ? void 0 : r.list) || [])
                .filter((e) => !e.present)
                .map((e) => e.alias || ""),
              activityType: null == o ? void 0 : o.activityType,
              orderType: (null == a ? void 0 : a.orderType) || 0,
              orderMark:
                null == a || null == (e = a.source) ? void 0 : e.orderMark,
              expressType: null == i ? void 0 : i.currentExpressType,
            };
          },
          totalPrice() {
            var {
                points: e = {},
                pay: t = {},
                shop: r,
                pointsName: o,
                displayCard: a = {},
              } = this.tradeState,
              { showDisplayCardPrice: i } = this,
              n = ((r && r.activities) || []).reduce((e, t) => e + t.value, 0);
            n = n ? "-￥" + (n / 100).toFixed(2) : "- ￥" + l(t.decrease);
            var s = t.goodsTax + t.postageTax;
            return {
              priceLabel: p(
                "¥",
                i ? t.itemPay - a.price : t.itemPay,
                e.totalPoints,
                o
              ),
              postage: "+ ¥" + l(t.postage),
              promotions: (t.promotions || []).map(
                (e) =>
                  (e.decrease >= 0 ? "-" : "+") + " ¥" + l(Math.abs(e.decrease))
              ),
              couponDecrease: "- ¥" + l(this.couponDecrease),
              payUmpDiscountMoney: "- ¥" + l(this.payUmpDiscountMoney),
              prepayCardDecrease: "- ¥" + l(this.prepayCardDecrease),
              taxPrice: t.showTax ? "+ ¥" + l(s) : "",
              decrease: n,
            };
          },
          isDepositPresale() {
            var e, t, r, o, a;
            return (
              (null == (e = this.tradeState) || null == (t = e.pay)
                ? void 0
                : t.multiPhase) &&
              "DOWN_PAYMENT_PRE" ===
                ((null == (r = this.tradeState) ||
                null == (o = r.pay) ||
                null == (a = o.phasePayment)
                  ? void 0
                  : a.bizCode) || "")
            );
          },
          valueCardTotalAmount() {
            return this.tradeState.valueCard
              ? u(
                  this.tradeState.valueCard.list
                    .filter(
                      (e) =>
                        -1 !==
                        this.tradeState.valueCard.checked.indexOf(
                          e.summaryCardNo
                        )
                    )
                    .map((e) => e.balance)
                )
              : 0;
          },
          prepayCardAvailable() {
            return this.tradeState.valueCard
              ? u(
                  this.tradeState.valueCard.list
                    .filter((e) => e.usable)
                    .map((e) => e.balance)
                )
              : 0;
          },
          prepayCardAvailableExclusion() {
            return this.tradeState.valueCard
              ? u(
                  this.tradeState.valueCard.list
                    .filter((e) => e.usable && !e.isExclusion)
                    .map((e) => e.balance)
                )
              : 0;
          },
          prepayCardTotalAmount() {
            return this.valueCardTotalAmount;
          },
          couponDecrease() {
            var e;
            return (null == (e = this.chosenCoupon) ? void 0 : e.value) || 0;
          },
          payUmpDiscountMoney() {
            return this.tradeState.pay &&
              this.tradeState.pay.phasePayment &&
              this.tradeState.pay.phasePayment.phaseItems
              ? this.tradeState.pay.phasePayment.phaseItems.reduce(
                  (e, t) => e.payUmpDiscountMoney + t.payUmpDiscountMoney
                )
              : 0;
          },
          valueCardDecrease() {
            var { pay: e } = this.tradeState,
              t = this.valueCardTotalAmount;
            return e.multiPhase
              ? Math.min(u(this.couponDecreasedPhasePayment), t)
              : Math.min(this.couponDecreasedPrice, t);
          },
          prepayCardDecrease() {
            return this.valueCardDecrease;
          },
          newCouponProcess() {
            var e, t;
            return null == (e = this.tradeState) || null == (t = e.order)
              ? void 0
              : t.newCouponProcess;
          },
          couponDecreasedPrice() {
            return this.newCouponProcess
              ? Math.max(0, this.tradeState.pay.realPay)
              : Math.max(0, this.tradeState.pay.realPay - this.couponDecrease);
          },
          couponDecreasedPhasePayment() {
            var { pay: e } = this.tradeState;
            if (!e.multiPhase || !e) return [];
            var t = e.phasePayment.phaseItems.map((e) => e.currentPrice),
              r = this.couponDecrease;
            this.newCouponProcess && (r = 0);
            var o = [];
            return (
              (o[1] = Math.max(e.postage, 0, t[1] - r)),
              (r -= t[1] - o[1]),
              (o[0] = Math.max(0, t[0] - r)),
              o
            );
          },
          finalPrice() {
            var { pay: e } = this.tradeState;
            if (e.multiPhase)
              return this.tradeState.tradeTag.hasDepositPreSaleGoods
                ? this.finalPhasePayment.reduce((e, t) =>
                    (function (e, t) {
                      if (
                        ("number" != typeof e && "string" != typeof e) ||
                        ("number" != typeof t && "string" != typeof t)
                      )
                        return "";
                      var r = (e.toString().split(".")[1] || "").length,
                        o = (t.toString().split(".")[1] || "").length,
                        a = Math.pow(10, Math.max(r, o));
                      return (e * a + t * a) / a;
                    })(+e, +t)
                  )
                : this.finalPhasePayment[e.phasePayment.currentPhase - 1];
            if (this.tradeState.env.isPayPage)
              return Object(d.a)(this.tradeState.pay.realPay).toYuan();
            var t = this.couponDecreasedPrice - this.prepayCardDecrease;
            return Object(d.a)(t).toYuan();
          },
          finalNeedPayPrice() {
            var { pay: e, env: t } = this.tradeState;
            return e.multiPhase
              ? this.finalPhasePayment[e.phasePayment.currentPhase - 1]
              : t.isPayPage
              ? Object(d.a)(e.realPay).toYuan()
              : Object(d.a)(
                  this.couponDecreasedPrice - this.prepayCardDecrease
                ).toYuan();
          },
          goodsCount() {
            var e, t;
            return this.tradeState.goods
              ? null == (e = this.tradeState.goods) || null == (t = e.list)
                ? void 0
                : t.reduce((e, t) => e + t.num, 0)
              : 0;
          },
          haitaoZeroOrder() {
            var e,
              { pay: t, goods: r } = this.tradeState;
            return (
              (null == r || null == (e = r.list)
                ? void 0
                : e.some((e) => 1 == +e.haitao)) &&
              Object(d.a)(this.finalPrice).toCent() <
                1 * this.goodsCount + t.postage
            );
          },
          haitaoFinalPrice() {
            var { pay: e, env: t } = this.tradeState;
            return t.isPayPage
              ? Object(d.a)(e.realPay).toYuan()
              : this.haitaoZeroOrder
              ? Object(d.a)(1 * this.goodsCount + e.postage).toYuan()
              : this.finalPrice;
          },
          orderFinalPrice() {
            return this.haitaoZeroOrder
              ? this.haitaoFinalPrice
              : this.finalNeedPayPrice;
          },
          finalPhasePayment() {
            var { pay: e, env: t } = this.tradeState;
            if (!e.multiPhase) return [];
            if (t.isPayPage)
              return e.phasePayment.phaseItems
                .map((e) => e.buyerRealPay)
                .map((e) => Object(d.a)(e).toYuan());
            var r = this.couponDecreasedPhasePayment,
              o = [],
              { prepayCardDecrease: a } = this;
            return (
              (o[1] = Math.max(0, r[1] - a)),
              (a -= r[1] - o[1]),
              (o[0] = Math.max(0, r[0] - a)),
              o.map((e) => Object(d.a)(e).toYuan())
            );
          },
          showDisplayCardPrice() {
            var e;
            return (
              !!this.tradeState &&
              (null == (e = this.tradeState.display)
                ? void 0
                : e.openDisplayCard)
            );
          },
          isExistDiscountExcludePrePayCard() {
            var e = this.tradeState;
            return (
              e.pointDeduction.isUse ||
              this.couponDecrease > 0 ||
              (e.shop.activities || []).length > 0 ||
              e.customerCards.list.length > 0
            );
          },
          storedValueWarnType() {
            var e,
              t,
              r = this.tradeState,
              o = "";
            r.useStoredCustomerDiscount && +this.orderFinalPrice
              ? ((o = r.payAssetActivityTagDesc ? "recharge" : "noRecharge"),
                null != (e = r.order) &&
                  null != (t = e.config) &&
                  t.isChooseFreeOrder &&
                  (o = ""))
              : r.useStoredMemberCustomerDiscount &&
                !r.useStoreBalancePayInFull &&
                +this.orderFinalPrice &&
                (o = "notEnough");
            return o;
          },
          orderNo() {
            var e;
            return (
              (null == (e = this.tradeState.order) ? void 0 : e.orderNo) || ""
            );
          },
          orderNos() {
            var e;
            return (
              (null == (e = this.tradeState.order) ? void 0 : e.orderNos) || ""
            );
          },
        },
        f = r("US/N"),
        v = r("eijD");
      function m(e, t) {
        var { state: r } = e.data;
        t.forEach((t) => {
          e.data[t] = r[t];
        });
      }
      function y(e, t) {
        var { store: r } = e;
        t.forEach((t) => {
          e.data[t] = r[t];
        });
      }
      function g(e, t, r) {
        if (
          (e.store.updateState({ tradeState: t }),
          (e.data.state = t),
          Array.isArray(r))
        )
          m(e, r);
        else {
          var o;
          if (t.display)
            e.data.display = Object(i.a)(
              {},
              (null == (o = e.data) ? void 0 : o.display) || {},
              t.display || {}
            );
          m(e, [
            "version",
            "contact",
            "address",
            "tradeTag",
            "env",
            "postage",
            "delivery",
            "goods",
            "allMeetReduceActivities",
            "invoice",
            "customerCards",
            "unavailableCustomerCards",
            "displayCard",
            "displayFreeCard",
            "memberCard",
            "storeGiftsInfo",
            "shop",
            "extra",
            "valueCard",
            "rechargeFreeOrderRule",
            "periodBuy",
            "pointDeduction",
            "pointsName",
            "points",
            "fansBenefit",
            "pay",
            "idcard",
            "ignoreIdBinding",
            "useBeforePayData",
            "guarantee",
            "shopConfig",
            "showWxSubscribe",
            "sellingPoint",
            "selfFetch",
            "orderKeepApply",
            "payAssetActivityTagDesc",
            "shopStoredDiscountInfo",
            "useStoredCustomerDiscount",
            "useStoredMemberCustomerDiscount",
            "useStoreBalancePayInFull",
            "recommendDetaid",
            "drugMessage",
            "isPrescriptionDrugGoods",
            "isDrugShop",
            "enableUseOrderBehaviorParam",
            "enableUseUserAuthorize",
            "orderPaid",
            "isScanCodeBuy",
            "bookKey",
            "balanceMkExclusion",
            "asyncOrderUnLimitCode",
            "umpBlockBase",
          ]),
            y(e, [
              "expressType",
              "currentAddress",
              "currentContact",
              "receiveByGroupHeader",
              "hasHaitaoGoods",
              "orderCreated",
              "orderNo",
              "orderNos",
              "showPoiPrompt",
              "forcePoiSelect",
              "isChoosedCard",
              "guaranteeOrderInfo",
              "isExistDiscountExcludePrePayCard",
              "payUmpDiscountMoney",
              "totalPrice",
              "isDepositPresale",
              "prepayCardAvailable",
              "prepayCardAvailableExclusion",
              "prepayCardTotalAmount",
              "couponDecrease",
              "valueCardDecrease",
              "prepayCardDecrease",
              "couponDecreasedPhasePayment",
              "finalPrice",
              "finalNeedPayPrice",
              "haitaoZeroOrder",
              "orderFinalPrice",
              "showDisplayCardPrice",
            ]),
            (e.data.groupon = e.store.grouponModel),
            (e.data.asyncOrder = t.display.asyncOrder),
            (e.data.addressEditable = !e.store.receiveByGroupHeader),
            t.dine &&
              ((e.data.pickUpWay = t.pickUpWay), (e.data.dine = t.dine)),
            (e.data.order = Object(i.a)({}, t.order)),
            (e.data.isOrderPage = !0),
            (e.data.guaranteeFreightBarPaddingConfig = {
              freight: "padding: 10px 12px",
              guarantee: "padding: 10px 12px",
            }),
            (e.data.hotel = t.hotel || {}),
            t.meituanCoupons && (e.data.meituanCoupons = t.meituanCoupons),
            (e.data.appEnv = {
              isAlipayApp: t.isAlipayApp,
              isQQApp: t.isQQApp,
            });
        }
      }
      function b(e, t) {
        var r = e.store.tradeState;
        g(e, r, t(r));
      }
      function C(e, t) {
        return O.apply(this, arguments);
      }
      function O() {
        return (O = Object(v.a)(function* (e, t) {
          var r = e.store.tradeState;
          g(e, r, yield t(r));
        })).apply(this, arguments);
      }
      function P(e, t) {
        t.data.orderCreation = e.orderCreation;
      }
      function S(e, t) {
        var { displayConfig: r = {}, tradeConfirmation: o } = e,
          a = 60 * (new Date().getTimezoneOffset() + 480) * 1e3;
        t.data.display = Object(i.a)({}, r, {
          newRecommend: null == o ? void 0 : o.newRecommend,
          serverTime: r.serverTime + a,
          invoiceContent: +r.invoiceContent || 11,
          payPrompt: r.payPrompt || "",
          prompt: r.prompt || "",
          selectedInstallmentPeriod: r.selectedInstallmentPeriod || 0,
          installmentRate: r.installmentRate || 0,
        });
      }
      var k = {
          getState: function (e) {
            return {
              tradeState: {
                dataLoaded: !1,
                hasPrepayCardData: !1,
                isHandselFirstPhase: !1,
                pageQuery: {},
                version: 1,
                orderKeepApply: !1,
                showWxSubscribe: !1,
                isSHowStayBuyerDialog: !0,
                env: {
                  url: "",
                  isPayPage: !1,
                  takeoutAlias: "",
                  successUrl: "",
                  serverTime: 1615195472316,
                },
                display: {
                  showAddressTab: !1,
                  showExpressTab: !1,
                  openDisplayCard: !1,
                  showLocalDeliveryTime: !1,
                },
                memberCard: {},
                shop: {
                  closed: !1,
                  closedDesc: "",
                  shopName: "",
                  activities: [],
                },
                periodBuy: { chosenIndex: 0, options: [] },
                pointDeduction: {
                  status: 0,
                  isUse: !0,
                  defaultPointDeductEffect: !0,
                },
                pay: {
                  prepay: !1,
                  prepaySuccess: !1,
                  multiPhase: !1,
                  payParams: {},
                  prePayParams: {},
                  phasePayment: {},
                  promotions: [],
                  realPay: 0,
                  itemPay: 0,
                  postage: 0,
                },
                tradeTag: {},
                displayCard: {},
                displayFreeCard: {},
                riskWarnShopPrompt: "",
                epidemicSituationTips: {},
                fissionActivity: { fissionName: "", fissionTicketNum: 0 },
                fansBenefit: {
                  id: 0,
                  name: "",
                  title: "",
                  type: "",
                  typeId: 0,
                  value: 0,
                },
                extra: {},
                isRetail: !1,
                shopStoredDiscountInfo: {},
                useStoredCustomerDiscount: !1,
                useStoredMemberCustomerDiscount: !1,
                useStoreBalancePayInFull: !1,
                showPrePayCardRecharge: !1,
                disableStoredDiscount: !1,
                changeSubscribe: !1,
                ignoreIdBinding: !1,
                guarantee: {
                  hasYzSecured: !1,
                  hasFreightInsurance: !1,
                  freightInsuranceFree: "0",
                  yzGuarantee: !1,
                  yzGuaranteeInfo: {},
                  yzGuaranteeDocs: {},
                },
                useBeforePayData: {
                  show: !1,
                  enable: !0,
                  confirm: "0",
                  protocol: !1,
                  range: [null, null],
                  reason: [null, null],
                },
                contact: { id: "", list: [], editingIndex: -1, required: !1 },
                goods: {
                  messageList: {},
                  list: [],
                  unavailable: [],
                  prepareTime: 0,
                  depositPreSale: !1,
                  showGoodsBlock: !0,
                },
                allMeetReduceActivities: [],
                coupon: {
                  chosenIndex: 0,
                  list: [],
                  disabledList: [],
                  externalList: [],
                  externalDisabledList: [],
                  internalCouponId: "",
                  showCoupon: !0,
                  showFreightCoupon: !0,
                },
                points: {
                  usePoints: "",
                  userPoints: "",
                  totalPoints: "",
                  available: "",
                  externalPoint: "",
                  externalId: "",
                },
                pointsName: "积分",
                groupon: {
                  isGroupon: !1,
                  isHeader: !1,
                  isChecked: !1,
                  receiveState: 1,
                },
                valueCard: {
                  list: [],
                  disabled: [],
                  checked: [],
                  showValueCard: !0,
                },
                giveRechargeAmount: 0,
                payAssetActivityTagDesc: "",
                recommendDetaid: { desc: "", productInfos: [], templateNo: "" },
                customerCards: { list: [], id: null, isActiveSelection: !1 },
                unavailableCustomerCards: { list: [] },
                plusBuy: { exchangeGoodsList: [], selected: [] },
                postageTool: { selected: {} },
                umpSendPromotionInfo: {
                  coupons: [],
                  couponsCode: [],
                  presents: [],
                  score: 0,
                },
                storeGiftsInfo: {
                  coupons: [],
                  couponsCode: [],
                  presents: [],
                  score: 0,
                },
                rebateMessageList: [],
                postage: { postageItems: [], currentExpressType: 0 },
                delivery: { isShow: !1, text: "", startTime: "", endTime: "" },
                idcard: {
                  name: "",
                  number: "",
                  backPhoto: "",
                  frontPhoto: "",
                  verifyFalse: !1,
                },
                selfFetch: {
                  name: "",
                  tel: "",
                  time: "",
                  timeWithWeekday: "",
                  cityName: "",
                  cityCode: "",
                  address: {},
                  shop: null,
                  selected: null,
                  aheadMax: {},
                  aheadMin: {},
                  isAllow: !1,
                  list: [],
                  finished: !1,
                  page: 1,
                },
                location: {
                  cityName: "",
                  lat: "",
                  lng: "",
                  locating: !1,
                  located: !1,
                },
                address: {
                  id: "",
                  list: [],
                  activeTab: 0,
                  visible: !0,
                  showAddressBlock: !0,
                  isSelfFetchDefault: !1,
                  abConfigExpressWay: {},
                },
                order: {
                  steps: [],
                  agreeDeposit: !1,
                  newCouponProcess: !1,
                  bookKey: "",
                  ump: {},
                  items: [],
                  seller: {},
                  source: {},
                  config: {},
                  delivery: {},
                  buyerMsg: "",
                  countdownInterval: "",
                  needIdCardPhoto: !1,
                  orderNos: [],
                  showDepositAgreementVal: !0,
                  showMessage: !0,
                },
                buyerStayData: {},
                outBizNo: "",
                invoice: {
                  themeGeneral: "",
                  invoiceType: 1,
                  submit: {},
                  common: { raiseType: "enterprise", emailList: [] },
                  enterprise: {
                    userName: "",
                    taxpayerId: "",
                    bankAccount: "",
                    openingBankName: "",
                    phone: "",
                    address: "",
                    invoiceDetailType: "itemCategory",
                  },
                  personal: { userName: "", invoiceDetailType: "itemCategory" },
                },
                design: [],
                extensionConfig: {},
                cloudOrderExt: { extension: {} },
                bookKeyCloudExtension: { umpExt: "" },
                componentExtUmp: { display: !0, properties: {} },
                componentExtAddress: { display: !0, properties: {} },
                isSelectPresent: "0",
                behaviorOrderInfo: { bizType: 158, token: "" },
                enableUseOrderBehaviorParam: !1,
                shopConfig: {},
                isInCouponOverWhitelist: !0,
                bookKey: "",
                deliveryCheck: {},
                asyncOrderUnLimitCode: "",
                excludePayTools: [],
                monitorLoggerFilterCode: "",
                umpBlockBase: {},
              },
              grouponModel: {},
              couponModel: {},
              kdtId: 0,
              yzGuarantee: "",
              yzGuaranteeInfo: "",
              yzGuaranteeDocs: null,
              presentData: null,
              themeColors: {},
              _rechargePay: !1,
            };
          },
          getters: h,
          getActions: function (e) {
            return {
              getInitTradeState: () => ({
                dataLoaded: !1,
                hasPrepayCardData: !1,
                isHandselFirstPhase: !1,
                pageQuery: {},
                version: 1,
                orderKeepApply: !1,
                showWxSubscribe: !1,
                isSHowStayBuyerDialog: !0,
                env: {
                  url: "",
                  isPayPage: !1,
                  takeoutAlias: "",
                  successUrl: "",
                  serverTime: 1615195472316,
                },
                display: {
                  showAddressTab: !1,
                  showExpressTab: !1,
                  openDisplayCard: !1,
                  showLocalDeliveryTime: !1,
                },
                memberCard: {},
                shop: {
                  closed: !1,
                  closedDesc: "",
                  shopName: "",
                  activities: [],
                },
                periodBuy: { chosenIndex: 0, options: [] },
                pointDeduction: {
                  status: 0,
                  isUse: !0,
                  defaultPointDeductEffect: !0,
                },
                pay: {
                  prepay: !1,
                  prepaySuccess: !1,
                  multiPhase: !1,
                  payParams: {},
                  prePayParams: {},
                  phasePayment: {},
                  promotions: [],
                  realPay: 0,
                  itemPay: 0,
                  postage: 0,
                },
                tradeTag: {},
                displayCard: {},
                displayFreeCard: {},
                riskWarnShopPrompt: "",
                epidemicSituationTips: {},
                fissionActivity: { fissionName: "", fissionTicketNum: 0 },
                fansBenefit: {
                  id: 0,
                  name: "",
                  title: "",
                  type: "",
                  typeId: 0,
                  value: 0,
                },
                extra: {},
                isRetail: !1,
                shopStoredDiscountInfo: {},
                useStoredCustomerDiscount: !1,
                useStoredMemberCustomerDiscount: !1,
                useStoreBalancePayInFull: !1,
                showPrePayCardRecharge: !1,
                disableStoredDiscount: !1,
                changeSubscribe: !1,
                ignoreIdBinding: !1,
                guarantee: {
                  hasYzSecured: !1,
                  hasFreightInsurance: !1,
                  freightInsuranceFree: "0",
                  yzGuarantee: !1,
                  yzGuaranteeInfo: {},
                  yzGuaranteeDocs: {},
                },
                useBeforePayData: {
                  show: !1,
                  enable: !0,
                  confirm: "0",
                  protocol: !1,
                  range: [null, null],
                  reason: [null, null],
                },
                contact: { id: "", list: [], editingIndex: -1, required: !1 },
                goods: {
                  messageList: {},
                  list: [],
                  unavailable: [],
                  prepareTime: 0,
                  depositPreSale: !1,
                  showGoodsBlock: !0,
                },
                allMeetReduceActivities: [],
                coupon: {
                  chosenIndex: 0,
                  list: [],
                  disabledList: [],
                  externalList: [],
                  externalDisabledList: [],
                  internalCouponId: "",
                  showCoupon: !0,
                  showFreightCoupon: !0,
                },
                points: {
                  usePoints: "",
                  userPoints: "",
                  totalPoints: "",
                  available: "",
                  externalPoint: "",
                  externalId: "",
                },
                pointsName: "积分",
                groupon: {
                  isGroupon: !1,
                  isHeader: !1,
                  isChecked: !1,
                  receiveState: 1,
                },
                valueCard: {
                  list: [],
                  disabled: [],
                  checked: [],
                  showValueCard: !0,
                },
                giveRechargeAmount: 0,
                payAssetActivityTagDesc: "",
                recommendDetaid: { desc: "", productInfos: [], templateNo: "" },
                customerCards: { list: [], id: null, isActiveSelection: !1 },
                unavailableCustomerCards: { list: [] },
                plusBuy: { exchangeGoodsList: [], selected: [] },
                postageTool: { selected: {} },
                umpSendPromotionInfo: {
                  coupons: [],
                  couponsCode: [],
                  presents: [],
                  score: 0,
                },
                storeGiftsInfo: {
                  coupons: [],
                  couponsCode: [],
                  presents: [],
                  score: 0,
                },
                rebateMessageList: [],
                postage: { postageItems: [], currentExpressType: 0 },
                delivery: { isShow: !1, text: "", startTime: "", endTime: "" },
                idcard: {
                  name: "",
                  number: "",
                  backPhoto: "",
                  frontPhoto: "",
                  verifyFalse: !1,
                },
                selfFetch: {
                  name: "",
                  tel: "",
                  time: "",
                  timeWithWeekday: "",
                  cityName: "",
                  cityCode: "",
                  address: {},
                  shop: null,
                  selected: null,
                  aheadMax: {},
                  aheadMin: {},
                  isAllow: !1,
                  list: [],
                  finished: !1,
                  page: 1,
                },
                location: {
                  cityName: "",
                  lat: "",
                  lng: "",
                  locating: !1,
                  located: !1,
                },
                address: {
                  id: "",
                  list: [],
                  activeTab: 0,
                  visible: !0,
                  showAddressBlock: !0,
                  isSelfFetchDefault: !1,
                  abConfigExpressWay: {},
                },
                order: {
                  steps: [],
                  agreeDeposit: !1,
                  newCouponProcess: !1,
                  bookKey: "",
                  ump: {},
                  items: [],
                  seller: {},
                  source: {},
                  config: {},
                  delivery: {},
                  buyerMsg: "",
                  countdownInterval: "",
                  needIdCardPhoto: !1,
                  orderNos: [],
                  showDepositAgreementVal: !0,
                  showMessage: !0,
                },
                buyerStayData: {},
                outBizNo: "",
                invoice: {
                  themeGeneral: "",
                  invoiceType: 1,
                  submit: {},
                  common: { raiseType: "enterprise", emailList: [] },
                  enterprise: {
                    userName: "",
                    taxpayerId: "",
                    bankAccount: "",
                    openingBankName: "",
                    phone: "",
                    address: "",
                    invoiceDetailType: "itemCategory",
                  },
                  personal: { userName: "", invoiceDetailType: "itemCategory" },
                },
                design: [],
                extensionConfig: {},
                cloudOrderExt: { extension: {} },
                bookKeyCloudExtension: { umpExt: "" },
                componentExtUmp: { display: !0, properties: {} },
                componentExtAddress: { display: !0, properties: {} },
                isSelectPresent: "0",
                behaviorOrderInfo: { bizType: 158, token: "" },
                enableUseOrderBehaviorParam: !1,
                shopConfig: {},
                isInCouponOverWhitelist: !0,
                bookKey: "",
                deliveryCheck: {},
                asyncOrderUnLimitCode: "",
                excludePayTools: [],
                monitorLoggerFilterCode: "",
                umpBlockBase: {},
              }),
            };
          },
          createWatch: function (e, t) {
            var r = {
              kdtId: (e) => {
                Object(f.setRequestDep)({ kdtId: e });
              },
              yzGuarantee: (t) => {
                b(e, (e) => ((e.display.yzGuarantee = t), ["display"]));
              },
              yzGuaranteeInfo: (t) => {
                b(e, (e) => ((e.display.yzGuaranteeInfo = t), ["display"]));
              },
              yzGuaranteeDocs: (t) => {
                b(e, (e) => ((e.display.yzGuaranteeDocs = t), ["display"]));
              },
              presentData: (t) => {
                b(
                  e,
                  (e) => ((e.extensions = Object(i.a)({}, e.extensions, t)), [])
                );
              },
              grouponModel: (t) => {
                b(
                  e,
                  (r) => (
                    (r.groupon = t),
                    (e.data.receiveByGroupHeader =
                      e.store.receiveByGroupHeader),
                    (e.data.currentAddress = e.store.currentAddress),
                    (e.data.addressEditable = !e.store.receiveByGroupHeader),
                    ["groupon"]
                  )
                );
              },
              couponModel: () => {
                y(e, [
                  "payUmpDiscountMoney",
                  "totalPrice",
                  "couponDecrease",
                  "valueCardDecrease",
                  "prepayCardDecrease",
                  "couponDecreasedPhasePayment",
                  "finalPrice",
                  "finalNeedPayPrice",
                  "haitaoZeroOrder",
                  "orderFinalPrice",
                ]);
              },
            };
            Object.keys(r).forEach((e) => {
              t.watch(e, (t) => r[e](t));
            });
          },
        },
        I = [
          {
            state: {},
            getters: {},
            actions: {
              updateState(e) {
                Object.keys(e).forEach((t) => {
                  this[t] = e[t];
                });
              },
            },
          },
          k,
        ].reduce((e, t) => {
          return (
            void 0 === (r = e) && (r = {}),
            void 0 === (o = t) && (o = {}),
            {
              state: Object(i.a)({}, r.state, o.state),
              getters: Object(i.a)({}, r.getters, o.getters),
              actions: Object(i.a)({}, r.actions, o.actions),
            }
          );
          var r, o;
        }, {});
      function T(e) {
        var t = Object(a.a)({
          state: () => Object(i.a)({}, I.state, k.getState(e)),
          getters: Object(i.a)({}, I.getters),
          actions: Object(i.a)({}, I.actions, k.getActions(e)),
        });
        return (
          ((e, t) => {
            k.createWatch(e, t);
          })(e, t),
          t
        );
      }
      var E = r("AGZf");
      var D = r("lgMb"),
        w = r("Dksy"),
        _ = r("Dnnr"),
        j = r("xeEc");
      function A(e, t) {
        void 0 === t && (t = {}), (e = "[weapp]" + e), j.a.info(e, t);
      }
      var x = r("wln/"),
        N = r("Ix7h"),
        R = (e, t) => {
          var r = "",
            o = {},
            a = {},
            i = Object(N.a)(function () {
              var t = r;
              e(...arguments)
                .then((e) => {
                  o[t](e);
                })
                .catch((e) => {
                  a[t](e);
                });
            }, t);
          return function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return new Promise((e, n) => {
              (r = Math.random().toString(16).slice(2, 10)),
                (o[r] = e),
                (a[r] = n),
                i(...t);
            });
          };
        },
        L = r("zjWU"),
        F = r("NHEX"),
        M = r.n(F),
        B = r("x5Yp"),
        U = r("qYBx"),
        G = r("xers"),
        H = r.n(G),
        Y = r("5Mqe"),
        V = r.n(Y),
        W = 1,
        z = 2,
        K = 24;
      var q = (e, t) => {
          var { groupon: r, periodBuy: o } = e;
          return (
            e.idcard.number && (t.idCardNumber = e.idcard.number),
            o.options.length &&
              o.options[o.chosenIndex] &&
              (t.deliverOption = o.options[o.chosenIndex]),
            r.isGroupon &&
              ((t.groupHeader = r.isHeader),
              (t.groupHeaderReceive = r.isChecked),
              (t.receiveState = r.receiveState)),
            t
          );
        },
        J = function (e, t, r) {
          var o, a;
          void 0 === r && (r = {});
          var { expressType: n, currentContact: s, selfFetchTime: c } = t,
            d = "self-fetch" === n,
            u = { hasFreightInsurance: e.tradeTag.hasFreightInsurance };
          if (null != (o = e.dine) && o.isDineOrder)
            return (u = Object(i.a)({}, u, e.order.delivery, {
              pickUpWay: e.pickUpWay.id,
            }));
          if (e.display.showAddressTab) {
            var l,
              p = (function (e, t, r) {
                void 0 === r && (r = {});
                var { delivery: o } = e,
                  a =
                    "express" === t.expressType
                      ? Object(i.a)({}, t.currentAddress)
                      : {};
                if (!H()(a)) {
                  var n;
                  if (
                    (a.id && (a.addressId = a.id),
                    a.houseNumber &&
                      ((a.addressDetail += " " + a.houseNumber),
                      delete a.houseNumber),
                    a.lat && a.lon && ((a.lat += ""), (a.lon += "")),
                    a.tel &&
                      (a.tel =
                        (void 0 === (n = a.tel) && (n = ""),
                        n.replace(/[^-|\d]/g, ""))),
                    e.display.showLocalDeliveryBucket)
                  ) {
                    var {
                      instantTimePoint: s,
                      startTime: c,
                      endTime: d,
                      timeSpan: u,
                    } = o;
                    c || d || !s
                      ? e.display.showLocalDeliveryTime &&
                        !r.resetDelivery &&
                        ((a.deliveryStartTime = c),
                        (a.deliveryEndTime = d),
                        (a.deliveryTimeSpan = u))
                      : (a.instantTimePoint = s);
                  }
                  return a;
                }
              })(e, t, r);
            !p ||
              (null != (l = e.dine) && l.isDineOrder) ||
              (q(e, p),
              (u.address = p),
              e.display.showLocalDeliveryBucket &&
                r.isNeedAppointmentType &&
                (u.appointmentType =
                  e.delivery.startTime && e.delivery.endTime ? W : z)),
              (u.expressType = n);
          }
          if (d && (null == (a = e.dine) || !a.isDineOrder)) {
            var { selfFetch: h } = e;
            (u.selfFetch = Object(i.a)({}, h.shop, {
              selfFetchStartTime: h.selfFetchStartTime,
              selfFetchEndTime: h.selfFetchEndTime,
              appointmentId: s.id,
              appointmentTime: c,
              appointmentTel: s.telephone,
              appointmentPerson: s.userName,
            })),
              q(e, u.selfFetch),
              (u.selfFetch.lat =
                null == u.selfFetch.lat
                  ? u.selfFetch.lat
                  : u.selfFetch.lat + ""),
              (u.selfFetch.lng =
                null == u.selfFetch.lng
                  ? u.selfFetch.lng
                  : u.selfFetch.lng + ""),
              u.selfFetch.businessHoursAdvanced &&
                (u.selfFetch.businessHoursAdvanced = JSON.stringify(
                  u.selfFetch.businessHoursAdvanced
                ));
          }
          if (e.contact.required) {
            u.contacts = {
              id: s.id,
              recipients: s.userName,
              tel: s.telephone,
              groupHeader: e.groupon.isHeader,
            };
            var f = M()(e.order.delivery, "contacts.appointmentTime", "");
            f && Object.assign(u.contacts, { appointmentTime: f });
          }
          var v = d ? 1 : e.postage.currentExpressType;
          return (
            "plusBuy" === r.scene &&
              9 === v &&
              e.postage.postageItems &&
              e.postage.postageItems.length > 0 &&
              (v = e.postage.postageItems[0].expressType),
            r.isAddressIdChange || (!d && 1 === v) || (u.expressTypeChoice = v),
            isNaN(r.expressTypeChoice) ||
              ((u.expressType =
                1 == +r.expressTypeChoice ? "self-fetch" : "express"),
              (u.expressTypeChoice = +r.expressTypeChoice)),
            e.tradeTag.hasHotelGoods &&
              (u.hotelBooking = Object(i.a)(
                { tel: e.hotel.phone, recipients: e.hotel.recipients },
                e.hotel.booking
              )),
            u
          );
        },
        X = (e) => {
          var t = {},
            { valueCard: r, order: o } = e,
            { config: a = {} } = o;
          return (
            a.isChooseFreeOrder ||
              (r.checked.length &&
                (t.valueCardNos = r.checked.filter((e) => "RC" !== e)),
              (t.Nos || t.valueCardNos) && (t.kdtId = e.shop.kdtId)),
            t
          );
        };
      function Z() {
        return getApp().storage.get("gps_location");
      }
      var Q = function (e, t, r) {
        var o;
        void 0 === t && (t = {}), void 0 === r && (r = {});
        var a,
          n,
          { order: s, disableStoredDiscount: c } = e,
          { keepSelect: d, isCustomerSelect: u = !1 } = r,
          l = Object(i.a)({}, s.config, {
            buyerMsg: s.buyerMsg,
            openDisplayCard: s.openDisplayCard,
            disableStoredDiscount: c,
            storedDiscountRechargeGuide: !0,
            yzGuaranteeInfo: t.yzGuaranteeInfo,
            isWholesaleOrder: null == (o = t) ? void 0 : o.isWholesaleOrder,
            isAllowPrivacyWaybill: s.isAllowPrivacyWaybill,
          });
        ((a = Z) && (l.buyer_gps = a),
        e.goods.list.some((e) => e.isPrescriptionDrugGoods) &&
          e.isDrugShop &&
          (l.bizCategory = "MEDICINE"),
        e.invoice.submit && Object.keys(e.invoice.submit).length) &&
          (l.invoice = Object(i.a)({}, e.invoice.submit, {
            invoiceType: null == (n = e.invoice) ? void 0 : n.invoiceType,
          }));
        var p = {};
        return (
          e.tradeTag.hasOverseaGoods &&
            ((p.binding = e.ignoreIdBinding ? void 0 : !!e.idcard.binding),
            (p.idCardName = e.idcard.name),
            (p.idCardNumber = e.idcard.number),
            e.order.needIdCardPhoto &&
              ((p.idCardBackPhoto = e.idcard.backPhoto),
              (p.idCardFrontPhoto = e.idcard.frontPhoto)),
            (l.idCard = p)),
          (d || u) &&
            (l.valueCardsExtContext = JSON.stringify({
              IS_RELOAD: !!d,
              CUSTOMER_SELECT_CARD_LIST: !!u,
            })),
          e.tradeTag.hasHotelGoods &&
            e.hotel.newHotelExtensions &&
            (delete e.hotel.newHotelExtensions.bookingDesc,
            (l.newHotelExtensions = e.hotel.newHotelExtensions)),
          l
        );
      };
      function $(e, t) {
        var { source: r } = t.order;
        return (
          Array.isArray(r.itemSources) &&
            r.itemSources.forEach((t) => {
              (t.bizTracePointExt && "{}" !== t.bizTracePointExt) ||
                (t.bizTracePointExt = (function (e, t) {
                  if (null == e || !e.logger) return "";
                  var r = e.logger.getLogParams(),
                    o = M()(r, "user", {}),
                    a = Object(i.a)({}, M()(r, "context"), M()(r, "plat"), {
                      uuid: o.uuid,
                      userId: o.li,
                    });
                  return (
                    (a = Object(i.a)({}, a, { platform: "weapp" })),
                    JSON.stringify(a)
                  );
                })(e));
            }),
          r
        );
      }
      var ee = (e) => {
          var { allMeetReduceActivities: t } = e,
            r = [];
          return (
            t &&
              t.length &&
              (r = V()(t.map((e) => e.presents)).filter((e) => e.isSelected)),
            {
              SELECTED_PRESENTS: JSON.stringify(
                r.map((e) => {
                  var {
                    fromActivityId: t,
                    fromActivityType: r,
                    id: o,
                    goodsId: a,
                    skuId: i,
                  } = e;
                  return {
                    activityId: t,
                    activityType: r,
                    presentId: o,
                    goodsId: a,
                    skuId: i,
                  };
                })
              ),
            }
          );
        },
        te = (e) =>
          e.useOptimalCalculate ? { USE_OPTIMAL_CALCULATE: "1" } : {},
        re = (e) => {
          var t;
          return null != (t = e.coupon) && t.ignoreCoupon
            ? { IGNORE_APPOINT_COUPON: "1" }
            : {};
        },
        oe = (e, t) => {
          var r;
          if (
            !1 === (null == (r = e.coupon) ? void 0 : r.ignoreVirtualCoupon)
          ) {
            var o = { IGNORE_VIRTUAL_COUPON: "false" };
            return t.bigsetCoupon && (o.CHANGE_EXPRESS_RESET_COUPONS = "1"), o;
          }
          return { IGNORE_VIRTUAL_COUPON: "true" };
        };
      function ae(e, t) {
        void 0 === t && (t = {});
        var { state: r, couponModel: o } = e.data,
          {
            order: a,
            goods: i,
            displayCard: n,
            plusBuy: s,
            postageTool: c,
          } = r,
          d = a.items || [],
          u = JSON.parse(JSON.stringify(d)),
          l = i.list || [],
          p = (null == o ? void 0 : o.chosenCoupon) || {},
          h = !1;
        if (!Object(B.a)(n))
          if (a.openDisplayCard) {
            if (!u.some((e) => e.goodsId === n.goodsId)) {
              var { kdtId: f, goodsId: v, skuId: m } = n;
              u = [...u, { kdtId: f, goodsId: v, skuId: m, num: 1 }];
            }
          } else u = u.filter((e) => e.goodsId !== n.goodsId);
        if (
          (u.forEach((e) => {
            if (
              (e.extensions || (e.extensions = {}),
              r.tradeTag.hasHotelGoods &&
                (e.extensions.NEW_HOTEL_GOOD = r.hotel.newHotelExtensions
                  ? "1"
                  : "0"),
              13 === p.groupType)
            ) {
              var t =
                  l.find(
                    (e) => e.itemId === p.optimalPreferentialOrderItemIds[0]
                  ) || {},
                { outerItemId: o } = t;
              o &&
                +o == +e.extensions.OUTER_ITEM_ID &&
                ((e.extensions.USE_GOODS_EXCHANGE_COUPON = "1"), (h = !0));
            }
          }),
          c.selected)
        ) {
          var y = Object.keys(c.selected);
          if (y.length > 0) {
            for (var g of u) {
              var b = c.selected[g.skuId];
              if (
                b &&
                !g.present &&
                g.activityType !== K &&
                JSON.stringify(b.propertyIds || []) ===
                  JSON.stringify(g.propertyIds || [])
              ) {
                g.num += b.num;
                var C = y.indexOf("" + g.skuId);
                y.splice(C, 1);
              }
            }
            y.forEach((e) => {
              u.push(c.selected[e]);
            });
          }
        }
        if (Array.isArray(s.selected) && s.selected.length > 0) {
          var O = u.length;
          (u = [...u, ...s.selected]),
            13 === p.groupType &&
              u.slice(O).forEach((e) => {
                if (!h) {
                  var t =
                    l.find(
                      (e) => e.itemId === p.optimalPreferentialOrderItemIds[0]
                    ) || {};
                  t.goodsId === e.goodsId &&
                    t.skuId === e.skuId &&
                    ((h = !0), (e.extensions.USE_GOODS_EXCHANGE_COUPON = "1"));
                }
              });
        }
        var { goodsId: P, skuId: S, num: k } = t;
        if (void 0 !== P && void 0 !== S && "number" == typeof k)
          for (var I of u)
            if (I.goodsId === P && I.skuId === S) {
              I.num = k;
              break;
            }
        return u;
      }
      function ie(e, t) {
        void 0 === t && (t = e.pointDeduction.isUse);
        var { canCostPoints: r, defaultPointDeductEffect: o } =
          e.pointDeduction;
        return {
          kdtId: e.shop.kdtId,
          usePointDeduction: t,
          costPoints: t ? r : 0,
          defaultPointDeductEffect: o,
        };
      }
      function ne(e, t, r, o, a) {
        var n,
          s,
          c = e.data.couponModel || {},
          d = e.data.orderedChosenCoupons || [],
          {
            chosenCoupon: u = {},
            chosenCoupons: l,
            chosenDeliveryCoupons: p = [],
          } = c,
          { order: h, plusBuy: f } = t,
          v = {};
        u.id &&
          ((v.id = c.externalId || u.id),
          (v.couponType = u.type),
          (v.outerCoupon = c.externalId ? 1 : 0));
        var m = { coupons: [] };
        null != l && l.length
          ? (m.coupons = l.map((e) => {
              var t = c.externalId || e.id,
                r = d.findIndex((e) => e === t);
              return {
                id: t,
                couponType: e.type,
                outerCoupon: c.externalId ? 1 : 0,
                systemChoose: !1,
                chosenOrder: r,
              };
            }))
          : u.id &&
            (m.coupons = [
              Object(i.a)({}, v, { systemChoose: !1, chosenOrder: 0 }),
            ]);
        var y = null == e || null == (n = e.data) ? void 0 : n.meituanCoupons;
        if (y) {
          var { chosen: g, coupons: b } = y,
            C = function (e, t) {
              if (t) {
                var r = b.find((t) => t.id === +e);
                m.coupons.push({
                  id: e,
                  couponType: r.type,
                  outerCoupon: 0,
                  systemChoose: !1,
                  chosenOrder: h,
                });
              }
            };
          for (var [O, P] of Object.entries(g)) C(O, P);
        }
        var S = { specified: !1 };
        if (
          (null != t.customerCards.id &&
            (t.customerCards.isActiveSelection || a) &&
            ((S.customerCardId = t.customerCards.id), (S.specified = !0)),
          t.points.externalId)
        ) {
          var { activities: k } = h.ump;
          Array.isArray(k) &&
            k.forEach((e) => {
              e.usePoints && (e.externalPointId = t.points.externalId);
            });
        }
        var { activities: I = [] } = h.ump;
        Array.isArray(f.selected) &&
          f.selected.length > 0 &&
          (I = [
            ...I,
            ...f.selected.map((e) => {
              var {
                activityId: t,
                activityType: r,
                goodsId: o,
                kdtId: a,
                skuId: i,
                propertyIds: n,
              } = e;
              return {
                activityId: t,
                activityType: r,
                goodsId: o,
                kdtId: a,
                skuId: i,
                propertyIds: n,
              };
            }),
          ]),
          (m.deliveryCoupons = p || []),
          null != (s = m.deliveryCoupons) &&
            s.length &&
            (m.deliveryCoupons = m.deliveryCoupons.map((e) => ({
              id: c.externalId || e.id,
              couponType: e.type,
              outerCoupon: c.externalId ? 1 : 0,
              systemChoose: !1,
              chosenOrder: 0,
            })));
        var T = Object(i.a)({}, h.ump, {
          activities: I,
          coupon: v,
          multiCoupon: m,
          useCustomerCardInfo: S,
          costPoints: ie(t, r),
        });
        return (
          h.newCouponProcess &&
            o &&
            ((T.coupon = { systemChoose: !0 }),
            T.multiCoupon.coupons.forEach((e) => {
              e.systemChoose = !0;
            })),
          T
        );
      }
      function se(e, t) {
        var { extra: r = {} } = t,
          o = Object(i.a)(
            {},
            t.extensions,
            t.order.extensions,
            ((e) => {
              var { useBeforePayData: t = {} } = e;
              return t.show && t.enable
                ? {
                    IS_SELECTED_PRIOR_USE_PAY_WAY:
                      "1" === t.confirm ? "1" : "0",
                  }
                : {};
            })(t),
            {
              IS_SELECT_PRESENT: t.isSelectPresent,
              IS_OPTIMAL_SOLUTION: "true",
              NEW_MEMBER_FLOW: "true",
              VALUE_CARD_UMP_OVERLAY_MUTEX_INFO:
                r.VALUE_CARD_UMP_OVERLAY_MUTEX_INFO,
            },
            ee(e.data),
            ((e) => {
              var t,
                r = null == (t = e.drugMessage) ? void 0 : t.rxNo;
              return e.goods.list.some((e) => e.isPrescriptionDrugGoods)
                ? { PRESCRIPTION_NO: r }
                : {};
            })(t),
            te(t)
          );
        if (
          ((function (e, t) {
            var r,
              o =
                ((e) => {
                  try {
                    return (
                      e.goods.list.reduce((e, t) => {
                        if (t.showTax) {
                          var { goodsTax: r, num: o, postageTax: a } = t;
                          return e + (r * o + a);
                        }
                        return e;
                      }, 0) || 0
                    );
                  } catch (e) {
                    return 0;
                  }
                })(t) + "";
            try {
              r = JSON.parse(e.BIZ_ORDER_ATTRIBUTE || "{}");
            } catch (t) {
              return e;
            }
            (r = Object(i.a)({}, r, { RISK_GOODS_TAX_INFOS: o })),
              (e.BIZ_ORDER_ATTRIBUTE = JSON.stringify(r));
          })(o, t),
          t.isXhsApp)
        )
          try {
            var a = JSON.parse(o.BIZ_ORDER_ATTRIBUTE || "{}");
            (a.MARKETING_ORDER_SOURCE = "XIAOHONGSHU_MINI_PROGRAM"),
              (o.BIZ_ORDER_ATTRIBUTE = JSON.stringify(a));
          } catch (e) {}
        var n,
          s = getApp().logger.getGlobal() || {},
          c = s.context || {},
          d = s.env || {},
          u = c.weapp_version,
          l = d.version + "-" + u;
        try {
          n = JSON.parse(o.BIZ_ORDER_ATTRIBUTE || "{}");
        } catch (e) {
          return o;
        }
        return (
          (n = Object(i.a)({}, n, { APP_VERSION: l })),
          (o.BIZ_ORDER_ATTRIBUTE = JSON.stringify(n)),
          o
        );
      }
      function ce(e) {
        return e.applyInfo ? { EXHIBITIONRESERVE_ENROLLMENT: e.applyInfo } : {};
      }
      function de(e, t) {
        void 0 === e && (e = {});
        var { store: r } = t,
          o = r.tradeState,
          a = (function (e) {
            return (e.goods.unavailable || []).map((t) => {
              var { combo: r = {} } = t,
                o = {};
              try {
                1 === r.comboType &&
                  ((o.comboType = r.comboType),
                  (o.subComboList = []),
                  (r.subComboList || []).reduce((e, t) => {
                    var r = {
                      goodsId: t.goodsId,
                      groupId: t.groupId,
                      num: t.num,
                      skuId: t.skuId,
                      propertyIds: [],
                    };
                    return (
                      (t.properties || []).forEach((e) => {
                        (e.propValueList || []).reduce(
                          (e, t) => (e.push(t.propValueId), e),
                          r.propertyIds
                        );
                      }),
                      e.push(r),
                      e
                    );
                  }, o.subComboList));
              } catch (e) {}
              return {
                skuId: t.skuId,
                propertyIds: t.propertyIds || [],
                goodsId: t.goodsId,
                kdtId: e.shop.kdtId,
                activityType: t.activityType,
                activityId: t.activityId,
                combo: o,
              };
            });
          })(o),
          n = ne(t, o, void 0, void 0, !0),
          s = $(t, o),
          c = Object(i.a)({}, e.extensions, se(t, o)),
          { display: u } = t.data;
        return Object(i.a)({}, e, {
          version: o.version,
          source: s,
          config: Q(o, u),
          usePayAsset: X(o),
          items: ae(t, {}),
          seller: o.order.seller,
          ump: n,
          newCouponProcess: o.order.newCouponProcess,
          unavailableItems: a,
          delivery: J(o, r, { isNeedAppointmentType: !0 }),
          cloudOrderExt: o.cloudOrderExt,
          bookKeyCloudExtension: o.bookKeyCloudExtension,
          confirmTotalPrice: Object(d.a)(Number(r.orderFinalPrice)).toCent(),
          extensions: c,
          behaviorOrderInfo: o.behaviorOrderInfo,
        });
      }
      function ue(e, t, r) {
        void 0 === e && (e = {});
        var { store: o } = t,
          a = o.tradeState,
          { keepSelect: n, isCustomerSelect: s } = r,
          { order: c, isSelectPresent: d } = a,
          u = ne(t, a, r.isUsePointDeduction, r.setCustomerCard),
          { dine: l = {}, extra: p = {} } = a,
          { display: h } = t.data,
          f = {};
        f.payload = r;
        var v,
          m = Object(i.a)({}, e, {
            items: ae(t, f.payload),
            source: c.source,
            seller: c.seller,
            newCouponProcess: c.newCouponProcess,
            ump: u,
            config: Q(a, h, { keepSelect: n, isCustomerSelect: s }),
            delivery: J(a, o, {
              scene: r.scene,
              expressTypeChoice: r.expressTypeChoice,
              isAddressIdChange: r.isAddressIdChange,
              isFormDbId: r.isFormDbId,
              resetDelivery: r.resetDelivery,
            }),
            usePayAsset: X(a),
            extensions: Object(i.a)(
              {
                IS_SELECT_PRESENT: d,
                IS_OPTIMAL_SOLUTION: "true",
                NEW_MEMBER_FLOW: "true",
                IS_OVERLYING_COUPON:
                  String(a.isInCouponOverWhitelist) || "false",
                SITE_ID: l.isDineOrder ? l.tableId : null,
                SITE_NO: l.isDineOrder ? l.tableNumber : null,
                APPOINT_PROMOTION_INSTANCES: JSON.stringify(
                  a.appointPromotionInstances
                ),
                VALUE_CARD_UMP_OVERLAY_MUTEX_INFO:
                  p.VALUE_CARD_UMP_OVERLAY_MUTEX_INFO,
              },
              ((v = { isAddressIdChange: r.isAddressIdChange }),
              void 0 === v && (v = {}),
              v.isAddressIdChange
                ? { SWITCH_RECEIVER_ADDRESS_REMARK: "true" }
                : {}),
              ee(t.data),
              te(a),
              re(a),
              oe(a, r),
              ce(a)
            ),
            first: !t.data.dataLoaded,
            cloudOrderExt: a.cloudOrderExt,
            bookKeyCloudExtension: a.bookKeyCloudExtension,
          });
        return (
          l.isDineOrder && (m.extensions.SHELF_DINING_ORDER = "1"),
          m.payload && delete m.payload,
          m
        );
      }
      var le = r("ns2s");
      function pe(e, t, r) {
        var o,
          a,
          c,
          d,
          u,
          l,
          p,
          h,
          f,
          v,
          m,
          y,
          g,
          b,
          C,
          O,
          P,
          S,
          k,
          I,
          T,
          E,
          D,
          w,
          _,
          j,
          A,
          x,
          N,
          R,
          L;
        void 0 === e && (e = {}), void 0 === t && (t = {});
        var {
            isInitCoupon: F = !0,
            isFetchShow: M = !1,
            platformInfo: B = {},
            keepPresent: G = !1,
            isAddressIdChange: Y = !1,
            isStoreIdChange: V = !1,
            bookKey: W,
            isRetailOrderScene: z,
          } = void 0 === r ? {} : r,
          K = t || {},
          q = null != (o = K.tradeConfirmation) ? o : {},
          J = K.displayConfig,
          { shop: X } = q,
          Z = q.orderItems || [],
          Q = q.postage || {},
          $ = q.delivery || {},
          ee = q.tradeTag || {},
          te = q.orderConfig || {},
          re = q.pickUpWay || {},
          oe = te.idCard || {},
          ae = K.shopDelivery || {},
          ie = K.deliveryTimeBucket || {},
          ne = K.address || {},
          se = K.contact || {},
          { pointsName: ce } = K,
          { orderPayment: de } = q,
          ue = q.customerCards || [],
          pe = q.unavailableCustomerCards || [],
          he = q.phasePayment || {},
          fe = K["@cashier/prior-use"] || {},
          ve = q.extra || {},
          me = q.umpSendPromotionInfo || {},
          { orderType: ye } = q,
          { promotionTag: ge } = q,
          be = q.selfUmpPromotionInfo || {},
          Ce = q.selectablePresents || [],
          Oe = q.orderSellingPoint || {},
          Pe = K.orderCreation || {},
          Se = Pe.newCouponProcess || "",
          ke = Pe.items || [],
          Ie = q.orderItems || [],
          Te =
            (null == (a = Pe.extensions) ? void 0 : a.IS_SELECT_PRESENT) || "0",
          Ee =
            "1" ===
            (null == (c = Pe.extensions) ? void 0 : c.SHELF_DINING_ORDER),
          De = (null == (d = Pe.extensions) ? void 0 : d.SITE_ID) || "",
          we = (null == (u = Pe.extensions) ? void 0 : u.SITE_NO) || "",
          _e = null != (l = q.deliveryCheck) ? l : {},
          { asyncOrderUnLimitCode: je, monitorLoggerFilterCode: Ae } = K,
          { addressMapKeyConfig: xe } = K;
        if (xe)
          try {
            Object(n.d)("_ADDRESS_MAP_KEY_", xe);
          } catch (e) {}
        (e.deliveryCheck = Object(i.a)({}, e.deliveryCheck, _e)),
          G || (e.isSelectPresent = Te),
          (e.version = K.version || e.version),
          (e.orderKeepApply = K.orderKeepApply || e.orderKeepApply),
          (e.showWxSubscribe = K.showWxSubscribe || e.showWxSubscribe),
          ((ke[0] && 116 === ke[0].activityType) ||
            (Ie[0] && 116 === Ie[0].activityType)) &&
            he.currentPhase &&
            1 === he.currentPhase &&
            (e.isHandselFirstPhase = !0);
        var Ne = Z[0] || {},
          Re = s(
            (null == (p = Pe.source) ? void 0 : p.bookKey) ||
              e.order.bookKey ||
              W
          );
        if (!e.dataLoaded) {
          var Le,
            Fe,
            Me =
              (null != Re && Re.activeTab) ||
              1 === (null == (Le = q.postage) ? void 0 : Le.currentExpressType)
                ? 1
                : 0;
          (null == (Fe = e) ? void 0 : Fe.address) &&
            (e.address.activeTab = Me);
        }
        if (
          ((ve.FREIGHT_INSURANCE_FREE = ve.FREIGHT_INSURANCE_FREE || 0),
          (e.extra = Object(i.a)({}, e.extra, ve)),
          (e.excludePayTools =
            (null == ve || null == (h = ve.EXCLUDE_PAY_TOOL)
              ? void 0
              : h.split(",")) || []),
          !H()(se))
        ) {
          var Be,
            { list: Ue = [] } = se,
            Ge =
              (null == Re || null == (Be = Re.contact) ? void 0 : Be.id) ||
              se.id,
            He = Ue.find((e) => e.id === Ge) || {};
          e.contact = Object(i.a)({}, e.contact, se, He);
        }
        H()(ne) ||
          (e.address = Object(i.a)({}, e.address, ne, {
            isSelfFetchDefault:
              (null == J ? void 0 : J.openSelfDefaultSwitch) || !1,
          }));
        var { showExpressTab: Ye } = J,
          Ve = J.canSelfFetch || "selfFetch" in $;
        Ye && !Ve
          ? (e.address.activeTab = 0)
          : !Ye && Ve && (e.address.activeTab = 1);
        var We = 60 * (new Date().getTimezoneOffset() + 480) * 1e3;
        (e.env = Object(i.a)({}, e.env, { serverTime: J.serverTime + We })),
          (e.user = Object(i.a)({}, e.user, { delivery: $ })),
          (e.postage = Object(i.a)({}, e.postage, Q)),
          (e.tradeTag = Object(i.a)({}, e.tradeTag, ee)),
          (e.umpSendPromotionInfo = me),
          (e.isPrescriptionDrugGoods = Z.some(
            (e) => e.isPrescriptionDrugGoods
          )),
          (e.storeGiftsInfo = be),
          (e.allMeetReduceActivities = Ce.map((e) => {
            var t, r;
            return (
              !(null == (t = e.presents)
                ? void 0
                : t.some((e) => (null == e ? void 0 : e.isSelected))) &&
                null != (r = e.presents) &&
                r.length &&
                (e.presents[0].isSelected = !0),
              (e.presents = e.presents.map((e) => {
                var t,
                  r,
                  o =
                    null !=
                    (t =
                      null == (r = e.presentSkuList)
                        ? void 0
                        : r.find((e) => e.isSelected))
                      ? t
                      : e;
                return Object(i.a)({}, e, { sku: o.sku, skuId: o.skuId });
              })),
              e
            );
          })),
          (e.display = Object(i.a)({}, e.display, J, {
            newRecommend: q.newRecommend,
            serverTime: J.serverTime + We,
            invoiceContent: +(null == J ? void 0 : J.invoiceContent) || 11,
            payPrompt: (null == J ? void 0 : J.payPrompt) || "",
            prompt: (null == J ? void 0 : J.prompt) || "",
            selectedInstallmentPeriod:
              (null == J ? void 0 : J.selectedInstallmentPeriod) || 0,
            installmentRate: (null == J ? void 0 : J.installmentRate) || 0,
          })),
          10 === (+(null == J ? void 0 : J.invoiceContent) || 0) &&
            "itemDetail" !== e.invoice.personal.invoiceDetailType &&
            ((e.invoice.personal.invoiceDetailType = "itemDetail"),
            (e.invoice.enterprise.invoiceDetailType = "itemDetail")),
          (e.riskWarnShopPrompt =
            (null == J ? void 0 : J.riskWarnShopPrompt) ||
            e.riskWarnShopPrompt),
          (e.memberCard = Object(i.a)({}, e.memberCard, q.memberCard)),
          (e.ignoreIdBinding =
            K.ignoreIdBinding ||
            (null == (f = e) ? void 0 : f.ignoreIdBinding)),
          (e.idcard = Object(i.a)({}, e.idcard, {
            binding: (null == oe ? void 0 : oe.binding) && !e.ignoreIdBinding,
            name:
              (null == oe ? void 0 : oe.idCardName) ||
              (null == (v = e) || null == (m = v.idcard) ? void 0 : m.name) ||
              "",
            number:
              (null == oe ? void 0 : oe.idCardNumber) ||
              (null == (y = e) || null == (g = y.idcard) ? void 0 : g.number) ||
              "",
            backPhoto:
              (null == oe ? void 0 : oe.idCardBackPhoto) ||
              (null == (b = e) || null == (C = b.idcard)
                ? void 0
                : C.backPhoto) ||
              "",
            frontPhoto:
              (null == oe ? void 0 : oe.idCardFrontPhoto) ||
              (null == (O = e) || null == (P = O.idcard)
                ? void 0
                : P.frontPhoto) ||
              "",
          })),
          (e.shop = Object(i.a)({}, e.shop, X, {
            activityType: q.activityType,
            activities: q.activities || [],
            activitiesNames: q.activityNames || [],
            cashBackList: q.cashBackList || [],
          })),
          (e.goods = Object(i.a)({}, e.goods, {
            list: Z,
            unavailable: q.unavailableItems || [],
            prepareTime:
              (null == (S = q.deliveryCheck) ? void 0 : S.prepareTime) || 0,
            imgMode: K.isGoodsImgCover ? "aspectFill" : "aspectFit",
          })),
          (e.displayCard = q.displayCard || {}),
          (e.displayFreeCard = q.displayFreeCard || {}),
          [...(q.coupons || []), ...(q.unavailableCoupons || [])].length &&
            (e.coupon.ignoreCoupon = !1),
          (e.fissionActivity = Object(i.a)(
            {},
            e.fissionActivity,
            q.fissionActivity || {}
          ));
        var ze = q.fansBenefit || {};
        0 === Object.keys(ze).length &&
          (ze = { id: 0, name: "", title: "", type: "", typeId: 0, value: 0 }),
          (e.fansBenefit = Object(i.a)({}, e.fansBenefit, ze)),
          (e.pointDeduction = Object(i.a)(
            {},
            {
              status: null == (k = e.pointDeduction) ? void 0 : k.status,
              isUse: null == (I = e.pointDeduction) ? void 0 : I.isUse,
              costPoints:
                null == (T = e.pointDeduction) ? void 0 : T.costPoints,
            },
            q.pointDeduction,
            {
              isUse: !(null == (E = q.pointDeduction) || !E.costPoints),
              defaultPointDeductEffect: !q.pointDeduction,
            }
          )),
          (e.points = Object(i.a)({}, e.points, K.pointsConfig)),
          (e.customerCards = Object(i.a)({}, e.customerCards, { list: ue })),
          (e.unavailableCustomerCards = Object(i.a)(
            {},
            e.unavailableCustomerCards,
            { list: pe }
          ));
        var Ke,
          qe,
          Je = ue.find((e) => e.chosen);
        if (
          (Je &&
            Je.id &&
            (e.customerCards = Object(i.a)({}, e.customerCards, { id: Je.id })),
          (e.selfFetch = Object(i.a)({}, e.selfFetch, {
            time:
              (null == (D = e) || null == (w = D.selfFetch)
                ? void 0
                : w.time) ||
              (null == J ? void 0 : J.selfFetchTime) ||
              "",
            isAllow: (null == J ? void 0 : J.canSelfFetch) || "selfFetch" in $,
            tips: J.selfFetchTips,
          })),
          (null == (_ = e.selfFetch.shop) || !_.id) && z)
        ) {
          var Xe,
            Ze = null == (Xe = Pe.delivery) ? void 0 : Xe.defaultSelfFetch;
          null != Ze &&
            Ze.id &&
            (e.selfFetch = Object(i.a)({}, e.selfFetch, {
              shop: Ze,
              cityCode: Ze.countyId,
              cityName: Ze.city,
            }));
        }
        ((q.meituanCoupons || q.unavailableMeituanCoupons) &&
          (e.meituanCoupons = {
            coupons: q.meituanCoupons || [],
            unavailableCoupons: q.unavailableMeituanCoupons || [],
            chosen: {},
          }),
        Pe && 0 !== Object.keys(Pe).length) &&
          ((e.isRetail =
            "retail_minapp_shelf" ===
            ((null == (Ke = Pe.source) ? void 0 : Ke.orderMark) || "")),
          (e.isScanCodeBuy =
            "online_scan_buy" ===
            ((null == (qe = Pe.source) ? void 0 : qe.orderMark) || "")),
          Ee &&
            ((e.dine = Object(i.a)({}, e.dine, {
              isDineOrder: Ee,
              tableId: De,
              tableNumber: we,
            })),
            (e.pickUpWay = Object(i.a)(
              { id: null == re ? void 0 : re.calculatedPickUpWay },
              e.pickUpWay,
              re
            ))));
        if (
          (H()(ie) ||
            1 !== (null == (j = q.postage) ? void 0 : j.currentExpressType) ||
            (e.selfFetch = Object(i.a)({}, e.selfFetch, {
              timeSpan: ie.timeSpan,
              timeBucket: ie.timeBuckets,
              deliveryTimeBucket: ie,
            })),
          (e.periodBuy = Object(i.a)({}, e.periodBuy, {
            show: !!Ne.issue,
            info: Ne.issue || "",
            planTime: Ne.planExpressTime || "",
            options: Ne.deliverOptions || [],
            chosenOption: Ne.deliverOption || "",
          })),
          (e.contact = Object(i.a)({}, e.contact, {
            required:
              !J.showAddressTab &&
              Z.some((e) => {
                var { virtualType: t } = e;
                return 3 === t;
              }),
          })),
          (e.delivery = Object(i.a)({}, e.delivery, {
            text: e.delivery.text || Q.deliveryTimeDisplay || "",
            tips: J.deliveryTips,
          })),
          H()(ae) || (e.delivery = Object(i.a)({}, e.delivery, ae)),
          !H()(ie))
        ) {
          var Qe,
            { instantTimePoint: $e, timeBuckets: et, timeSpan: tt } = ie,
            { textWithWeekday: rt, text: ot } = e.delivery;
          $e && !J.showLocalDeliveryTime
            ? ((rt = "尽快送达（预计 " + le.c.time(new Date($e)) + "）"),
              (ot = le.c.dateTime(new Date($e))))
            : (Y || V) &&
              2 ===
                (null == (Qe = e.postage) ? void 0 : Qe.currentExpressType) &&
              ((rt = ""), (ot = "")),
            (e.delivery = Object(i.a)({}, e.delivery, {
              timeSpan: tt,
              timeBucket: et,
              deliveryTimeBucket: ie,
              textWithWeekday: rt,
              text: ot,
              instantTimePoint: $e,
            }));
        }
        if (ee.hasHotelGoods) {
          for (
            var at,
              it,
              nt,
              st,
              ct,
              dt = Ne.num || 0,
              ut = Math.min(...Z.map((e) => e.stockNum)),
              lt =
                (null == (at = e.hotel) || null == (it = at.recipients)
                  ? void 0
                  : it.slice(0, dt)) || [],
              pt = 0;
            pt < dt;
            pt++
          )
            lt[pt] = lt[pt] || "";
          e.hotel = Object(i.a)({}, e.hotel, {
            stockNum: ut,
            roomNumber: dt,
            recipients: lt,
            booking:
              (null == (nt = e.order) || null == (st = nt.delivery)
                ? void 0
                : st.hotelBooking) || {},
            newHotelExtensions:
              (null == (ct = e.hotel) ? void 0 : ct.newHotelExtensions) || "",
          });
        }
        if (
          ((e.pay = Object(i.a)({}, e.pay, de, {
            extraFees: (null == de ? void 0 : de.extraFees) || [],
            phasePayment: he,
            promotions: (null == de ? void 0 : de.promotions) || [],
            orderPromotions: (
              (null == de ? void 0 : de.orderPromotions) || []
            ).filter((e) => "storedCustomerDiscount" !== e.promotionType),
            multiPhase: q.multiPhasePayment,
            payCardsShowUsableNum: q.payCardsShowUsableNum,
          })),
          (e.valueCard = Object(i.a)({}, e.valueCard, {
            list: q.payValueCards || [],
            disabled: q.unavailablePayValueCards || [],
            checked: (q.payValueCards || [])
              .filter((e) => e.selected)
              .map((e) => e.summaryCardNo),
          })),
          (e.giveRechargeAmount = q.giveRechargeAmount || 0),
          (e.payAssetActivityTagDesc = q.payAssetActivityTagDesc || ""),
          (e.recommendDetaid = q.recommendDetaid),
          (e.balanceMkExclusion = q.balanceMkExclusion),
          (e.isInitCoupon = F),
          F)
        )
          if (0 === e.pay.realPay) {
            if (Se || e.order.newCouponProcess) {
              var ht = e.coupon.list.find((e) => e.choose) || {};
              e.coupon.chosenId = (null == ht ? void 0 : ht.id) || 0;
            } else e.coupon.chosenId = 0;
            e.valueCard.checked = [];
          } else if (Se || e.order.newCouponProcess) {
            var ft = e.coupon.list.find((e) => e.choose) || {};
            e.coupon.chosenId = (null == ft ? void 0 : ft.id) || 0;
          } else {
            var vt = e.coupon.list[0] || {};
            vt.value &&
              (e.coupon.chosenId = (null == vt ? void 0 : vt.id) || 0);
          }
        Pe.source && (Pe.source = Object(i.a)({}, Pe.source, B)),
          Pe.cloudOrderExt,
          Pe.bookKeyCloudExtension;
        var mt,
          yt =
            (null == (A = Pe.config) ? void 0 : A.paymentSuccessRedirect) || "";
        yt &&
          !yt.startsWith("http") &&
          ((e.env = Object(i.a)({}, e.env, { successUrl: yt })),
          null == (mt = Pe.config) || delete mt.paymentSuccessRedirect);
        if (
          ((e.order = Object(i.a)({}, e.order, te, Pe, {
            orderType: ye,
            steps: q.steps || [],
            openDisplayCard: J.openDisplayCard,
          })),
          "boolean" == typeof Se && (e.order.newCouponProcess = Se),
          "string" == typeof ce && (e.pointsName = ce),
          (e.userPrivacy = Object(i.a)({}, e.userPrivacy, K.userPrivacy || {})),
          ve.SHOP_STORED_DISCOUNT_INFO)
        ) {
          var gt = {};
          try {
            gt = JSON.parse(ve.SHOP_STORED_DISCOUNT_INFO);
          } catch (e) {}
          e.shopStoredDiscountInfo = gt;
        }
        (e.useStoredCustomerDiscount =
          "true" === ve.USE_STORED_CUSTOMER_DISCOUNT),
          (e.useStoredMemberCustomerDiscount =
            "1" === ve.VALUE_CARD_LEVEL_GROUP_TYPE),
          (e.useStoreBalancePayInFull = "1" === ve.VALUE_CARD_ONLY_FULL_PAY),
          (e.changeSubscribe = !1),
          M ||
            (e.disableStoredDiscount =
              !1 === e.shopStoredDiscountInfo.openStoredDiscount),
          (e.useBeforePayData = Object(i.a)({}, e.useBeforePayData, fe)),
          (e.enableUseOrderBehaviorParam =
            e.display.enableUseOrderBehaviorParam || !1),
          (e.enableUseUserAuthorize = J.enableUseUserAuthorize || !1);
        var bt = K.shopConfig || {};
        (e.shopConfig = Object(i.a)({}, e.shopConfig, bt)),
          (e.sellingPoint = Oe),
          (e.prevOrderInfo = K.prevOrderInfo || {}),
          (e.isInCouponOverWhitelist =
            null != (x = K.isInCouponOverWhitelist)
              ? x
              : e.isInCouponOverWhitelist),
          (e.bookKey =
            (null == Pe ? void 0 : Pe.bookKey) ||
            (null == (N = Pe.source) ? void 0 : N.bookKey) ||
            e.bookKey ||
            W),
          (e.asyncOrderUnLimitCode = je),
          (e.monitorLoggerFilterCode = Ae),
          ge
            ? ((e.hasPromotion = !0), (e.promotionInfo = ge))
            : ((e.hasPromotion = !1), (e.promotionInfo = null));
        var Ct = Z.filter((e) => 24 === e.activityType),
          Ot = Z.filter((e) => 24 !== e.activityType),
          Pt = Ct.reduce((e, t) => e + t.num * t.payPrice, 0),
          St = Ot.reduce((e, t) => e + t.num * t.payPrice, 0),
          kt = (J.openDisplayCard && e.displayCard.price) || 0,
          { extraFees: It = [] } = de;
        return (
          (It = It.map((e) =>
            Object(i.a)({}, e, { realPay: U.c.toYuan(e.realPay || 0) })
          )),
          (e.umpBlockBase = {
            goodsSumPrice: U.c.toYuan(St),
            goodsSumNum: Ot.length,
            postage: de.postage,
            postagePrice: U.c.toYuan(de.postage || 0),
            umpPlusBuyNum: Ct.length,
            umpPlusBuy: Pt,
            umpPlusBuyPrice: U.c.toYuan(Pt),
            paidCard: kt,
            paidCardPrice: U.c.toYuan(kt),
            extraFees: It,
            displayPrice:
              null != (R = e.displayCard) && R.price
                ? U.c.toYuan(null == (L = e.displayCard) ? void 0 : L.price)
                : "",
          }),
          e
        );
      }
      function he(e, t) {
        var r = t.prePaymentPreparation || {},
          o = t.paymentPreparation || {};
        (r.bizExt = o.bizExt || "{}"),
          e.tradeTag.continuousOrder
            ? (r.scene = "MEM_SUB")
            : (r.scene = "VALUE_COMMON"),
          (e.pay = Object(i.a)({}, e.pay, {
            prepayParams: r,
            prepay: r.prepay,
            prepaySuccess: r.prepaySuccess,
            payParams: t.paymentPreparation,
            showPayResult: t.showPayResult,
            extPoint: r.extPointPayResultVO,
            zeroOrder: t.zeroOrder,
          }));
      }
      function fe() {
        return (fe = Object(v.a)(function* (e, t) {
          return (
            (e.data.orderResult = t),
            b(e, (e) => {
              (e.order.orderNo = t.orderNo),
                (e.order.orderNos = t.orderNos),
                (e.order.requestNo = t.requestNo),
                (e.order.mergePrepayOrderNo = t.mergePrepayOrderNo),
                he(e, t);
            }),
            Promise.all(
              e.process.invoke("handleAfterCreateOrderParallel", t)
            ).then(() => t)
          );
        })).apply(this, arguments);
      }
      var ve = function (e, t) {
          return fe.apply(this, arguments);
        },
        me = r("z9IR");
      function ye(e) {
        return ge.apply(this, arguments);
      }
      function ge() {
        return (ge = Object(v.a)(function* (e) {
          var { storedValueWarnType: t } = e.store;
          if (t) {
            var r = () => {
              b(e, (e) => {
                e.showPrePayCardRecharge = !0;
              }),
                e.process.invoke("showPrePayCardRecharge");
            };
            switch (t) {
              case "recharge":
                me.a
                  .confirm({
                    message:
                      "“余额/卡”可用金额不足，充值后才可使用储值专享折扣。如放弃此优惠，将重新计算订单价格。",
                    cancelButtonText: "放弃优惠",
                    confirmButtonText: "去充值",
                    ref: Object(_.c)("submitDialog"),
                  })
                  .then(r)
                  .catch(() => {
                    b(e, (e) => {
                      e.disableStoredDiscount = !0;
                    }),
                      e.process.invoke("confirmOrder");
                  });
                break;
              case "noRecharge":
                me.a
                  .alert({
                    message:
                      "“余额/卡”可用金额不足，暂不支持使用储值专享折扣，系统将为你重新计算订单价格。",
                    confirmButtonText: "我知道了",
                    ref: Object(_.c)("submitDialog"),
                  })
                  .then(() => {
                    b(e, (e) => {
                      e.disableStoredDiscount = !0;
                    }),
                      e.process.invoke("confirmOrder");
                  });
                break;
              case "notEnough":
                me.a
                  .confirm({
                    message:
                      "仅限余额（不含礼品卡) 全额支付时，可享受储值会员优惠。如放弃优惠，将重新计算订单价格。",
                    cancelButtonText: "放弃优惠",
                    confirmButtonText: "去充值",
                    ref: Object(_.c)("submitDialog"),
                  })
                  .then(r)
                  .catch(() => {
                    b(e, (e) => {
                      e.disableStoredDiscount = !0;
                    }),
                      e.process.invoke("setCustomCard", "", !0),
                      e.process.invoke("confirmOrder", { setCustomerCard: !0 });
                  });
            }
            return Promise.reject("储值折扣优惠冲突");
          }
        })).apply(this, arguments);
      }
      var be = r("nOsF");
      function Ce(e) {
        return Oe.apply(this, arguments);
      }
      function Oe() {
        return (Oe = Object(v.a)(function* (e) {
          var t,
            {
              order: r,
              idcard: o,
              tradeTag: a,
              hasHaitaoGoods: i,
            } = (null == e ? void 0 : e.data) || {},
            n = Object(be.a)({ order: r, idcard: o, tradeTag: a });
          return n
            ? (me.a
                .confirm({
                  ref: Object(_.c)("idcardTipDialog"),
                  title: "填写身份证信息",
                  message: i
                    ? "为保障海淘商品顺利清关，请填写身份证信息。"
                    : "该商品下单需要填写身份证信息。",
                  confirmButtonText: "去填写",
                  confirmButtonColor:
                    null == (t = e.store.themeColors) ? void 0 : t.general,
                })
                .then(() => {
                  e.event.emit("trade-buy-core:validate-effect", {
                    type: "validateIdCardAndPrompt:show",
                  });
                })
                .catch(() => {}),
              Promise.reject(n))
            : Promise.resolve("身份证已填写");
        })).apply(this, arguments);
      }
      var Pe = r("Jcb6");
      function Se(e) {
        return ke.apply(this, arguments);
      }
      function ke() {
        return (ke = Object(v.a)(function* (e) {
          var { contact: t } = e.data;
          if (t.required) {
            var r = "",
              o = { userName: !1, telephone: !1 };
            if (
              (t.userName || ((o.userName = !0), (r = "请输入正确的姓名")),
              (t.telephone && Object(Pe.b)(t.telephone)) ||
                ((o.telephone = !0), (r = "请输入正确的手机号")),
              r)
            )
              return (
                Object(E.a)(r),
                e.event.emit("trade-buy-core:validate-effect", {
                  type: "validateContact:validateError",
                  errorInfo: o,
                }),
                Promise.reject(r)
              );
          }
          return Promise.resolve("");
        })).apply(this, arguments);
      }
      function Ie(e) {
        return Te.apply(this, arguments);
      }
      function Te() {
        return (Te = Object(v.a)(function* (e) {
          var {
            state: t,
            receiveByGroupHeader: r,
            currentAddress: o = {},
            expressType: a,
            showPoiPrompt: i,
            display: n,
          } = e.data;
          if (null == n || !n.showAddressTab) return Promise.resolve();
          var { id: s, inlineForm: c } = (null == t ? void 0 : t.address) || {};
          if ("express" === a && n.showExpressTab) {
            if (r) return Promise.resolve();
            if (!(s || !Object(B.a)(c)))
              return (
                setTimeout(() => {
                  e.event.emit("trade-buy-core:validate-effect", {
                    type: "validateAddress:toEdit",
                  });
                }, 1e3),
                Object(E.a)("请选择收货地址"),
                Promise.reject("请选择收货地址")
              );
            var d = o;
            if (
              "选择省份" === d.province ||
              "选择城市" === d.city ||
              "选择地区" === d.county ||
              !d.areaCode
            )
              return (
                setTimeout(() => {
                  e.event.emit("trade-buy-core:validate-effect", {
                    type: "validateAddress:toEdit",
                  });
                }, 1e3),
                Object(E.a)("地址信息不完整，请重新编辑地址"),
                Promise.reject("地址信息不完整，请重新编辑地址")
              );
            if (i)
              return (
                me.a
                  .confirm({
                    message: "为提高同城配送准确性，请进行地图定位选点",
                    confirmButtonText: "去选点",
                    ref: Object(_.c)("addressBlockDialog"),
                  })
                  .then(() => {
                    e.event.emit("trade-buy-core:validate-effect", {
                      type: "validateAddress:toEdit",
                    });
                  })
                  .catch(() => {}),
                Promise.reject("为提高同城配送准确性，请进行地图定位选点")
              );
            if (!Object(Pe.c)(d, d.tel))
              return (
                Object(E.a)("请填写正确的手机号"),
                setTimeout(() => {
                  e.event.emit("trade-buy-core:validate-effect", {
                    type: "validateAddress:toEdit",
                  });
                }, 1500),
                Promise.reject("请填写正确的手机号")
              );
          }
          return Promise.resolve();
        })).apply(this, arguments);
      }
      function Ee(e) {
        return De.apply(this, arguments);
      }
      function De() {
        return (De = Object(v.a)(function* (e) {
          var { delivery: t, display: r, expressType: o } = e.data;
          return "express" === o && r.showLocalDeliveryBucket && !t.text
            ? (e.event.emit("trade-buy-core:validate-effect", {
                type: "validateLocalDelivery:show",
              }),
              Promise.reject("请选择期望送达时间"))
            : Promise.resolve("");
        })).apply(this, arguments);
      }
      function we(e) {
        return _e.apply(this, arguments);
      }
      function _e() {
        return (_e = Object(v.a)(function* (e) {
          var {
              expressType: t,
              display: r,
              selfFetch: o,
              periodBuy: a,
            } = e.data,
            i = M()(o, "shop.optionalSelfFetchTime", !1);
          return new Promise((n, s) => {
            if ("self-fetch" === t && null != r && r.canSelfFetch) {
              if (!o.shop)
                return (
                  e.event.emit("trade-buy-core:validate-effect", {
                    type: "validateSelfFetch:selectPoint",
                  }),
                  Object(E.a)("请选择提货地址"),
                  s("请选择提货地址")
                );
              if (
                !o.time &&
                i &&
                !((null != a && a.info) || (null != a && a.planTime))
              )
                return (
                  e.event.emit("trade-buy-core:validate-effect", {
                    type: "validateSelfFetch:selectTime",
                  }),
                  s("请选择提货时间")
                );
            }
            n(!0);
          });
        })).apply(this, arguments);
      }
      function je(e) {
        return Ae.apply(this, arguments);
      }
      function Ae() {
        return (Ae = Object(v.a)(function* (e) {
          var { buyerMsg: t } = e.data.order;
          return t && t.length > 250
            ? (Object(E.a)("留言字数不能超过 250 个字"),
              Promise.reject("留言字数不能超过 250 个字"))
            : "";
        })).apply(this, arguments);
      }
      function xe(e) {
        return Ne.apply(this, arguments);
      }
      function Ne() {
        return (Ne = Object(v.a)(function* (e) {
          var t = e.data.contact || {};
          return t.required && !t.id
            ? e.process.invoke("saveContact", {
                userName: t.userName,
                telephone: t.telephone,
              })
            : Promise.resolve(!0);
        })).apply(this, arguments);
      }
      function Re(e) {
        return Le.apply(this, arguments);
      }
      function Le() {
        return (Le = Object(v.a)(function* (e) {
          var { _rechargePay: t } = e.store,
            { payRechargeInfo: r } = e.data;
          return !t && r && r.btnText
            ? (e.process.invoke("doRecharge"),
              Promise.reject("进行充值并支付流程"))
            : (e.store.updateState({ _rechargePay: !1 }), Promise.resolve());
        })).apply(this, arguments);
      }
      function Fe(e) {
        return Me.apply(this, arguments);
      }
      function Me() {
        return (Me = Object(v.a)(function* (e) {
          var t,
            o,
            a,
            i,
            { order: n = {}, enableUseOrderBehaviorParam: s } = e.data,
            c = {
              platform:
                (null == (t = n.source) ? void 0 : t.platform) || "mobile",
              buyer_id: (null == (o = n.buyer) ? void 0 : o.buyerId) || 0,
              order_receiver_phone:
                (null == (a = n.buyer) ? void 0 : a.buyerPhone) || "",
              book_key: n.bookKey || "",
              kdtId: (null == (i = n.seller) ? void 0 : i.kdtId) || 0,
            };
          return s
            ? (E.a.clear(),
              new Promise((t, o) => {
                r.e("packages/async-main/chunk")
                  .then(r.bind(null, "9RNk"))
                  .then((r) => {
                    var { behaviorVerify: a } = r;
                    !(function (r) {
                      r({
                        bizType: 158,
                        bizData: JSON.stringify(c) || "",
                        onSuccess: (r) => {
                          b(e, (e) => {
                            (e.behaviorOrderInfo.bizType = 158),
                              (e.behaviorOrderInfo.token = r);
                          }),
                            t(!0);
                        },
                        onCancel: () => {
                          o(!1);
                        },
                        onFail: (e) => {
                          o(!1);
                        },
                      });
                    })(a);
                  })
                  .catch((e) => o(e));
              }))
            : Promise.resolve();
        })).apply(this, arguments);
      }
      function Be(e) {
        return Ue.apply(this, arguments);
      }
      function Ue() {
        return (Ue = Object(v.a)(function* (e) {
          yield ye(e),
            yield Ce(e),
            yield Se(e),
            yield Ie(e),
            yield Ee(e),
            yield we(e),
            yield je(e),
            yield xe(e),
            yield Re(e),
            yield Fe(e);
        })).apply(this, arguments);
      }
      function Ge(e, t) {
        return He.apply(this, arguments);
      }
      function He() {
        return (He = Object(v.a)(function* (e, t) {
          var { code: r, msg: o } = t.error;
          return [101350001, 101350002, 101350003].indexOf(r) >= 0
            ? (b(e, (e) => {
                (e.shop.closed = !0), (e.shop.closedDesc = o);
              }),
              Object(E.a)(o),
              Promise.reject(t))
            : t;
        })).apply(this, arguments);
      }
      function Ye(e, t) {
        return Ve.apply(this, arguments);
      }
      function Ve() {
        return (Ve = Object(v.a)(function* (e, t) {
          var { code: r, msg: o } = t.error;
          return w.a.DELIVERY_ERROR.indexOf(r) >= 0
            ? (e.process
                .invoke("confirmOrder", { resetDelivery: !0 })[0]
                .then(() => Object(E.a)(o)),
              Promise.reject(t))
            : w.a.GOODS_SOLDOUT.indexOf(r) >= 0
            ? (e.process
                .invoke("confirmOrder", { clearLoading: !1 })[0]
                .then(() => Object(E.a)(o)),
              Promise.reject(t))
            : w.a.BILL_EXCEPTION_UNSAFTY_REVIEW === r
            ? (Object(_.b)({
                message: o,
                showCancelButton: !0,
                cancelButtonText: "取消下单",
                confirmButtonText: "继续下单",
              })
                .then(() => {
                  e.process.invoke("submitOrderAfterRisk");
                })
                .catch(() => {}),
              Promise.reject(t))
            : w.a.BILL_EXCEPTION_UNSAFTY === r
            ? (Object(_.b)({
                message: o,
                showCancelButton: !0,
                cancelButtonText: "取消",
                confirmButtonText: "查看帮助",
              })
                .then(() => {
                  e.dmc.navigate("BillExceptionUnsafty");
                })
                .catch(() => {}),
              Promise.reject(t))
            : t;
        })).apply(this, arguments);
      }
      function We(e, t) {
        return ze.apply(this, arguments);
      }
      function ze() {
        return (ze = Object(v.a)(function* (e, t) {
          var { code: r, msg: o } = t.error;
          return w.a.RECEIVER_NEED_REALNAME === r
            ? (Object(_.b)({
                title: "请填写收货人真实姓名",
                message: o,
                confirmButtonText: "去修改",
                ref: Object(_.c)("addressBlockDialog"),
              }).then(() => {
                e.event.emit("trade-buy-core:validate-effect", {
                  type: "validateAddress:toEdit",
                });
              }),
              Promise.reject(t))
            : t;
        })).apply(this, arguments);
      }
      function Ke(e, t) {
        return qe.apply(this, arguments);
      }
      function qe() {
        return (qe = Object(v.a)(function* (e, t) {
          var r, o;
          return null != (r = e.data.order) &&
            null != (o = r.config) &&
            o.isChooseFreeOrder &&
            !String(t.error).includes("Error: processor")
            ? (e.process.invoke("freeOrderJumpToResult", { orderNo: "" }),
              Promise.reject(t))
            : t;
        })).apply(this, arguments);
      }
      function Je(e, t) {
        return Xe.apply(this, arguments);
      }
      function Xe() {
        return (Xe = Object(v.a)(function* (e, t) {
          yield Ge(e, t), yield Ye(e, t), yield We(e, t), yield Ke(e, t);
        })).apply(this, arguments);
      }
      var Ze = R(et, 1e3),
        Qe = R(function (e, t) {
          return Object(f.requestV2)({
            origin: "cashier",
            withCredentials: !0,
            path: "/pay/wsctrade/order/buy/create-async-book-key.json",
            method: "POST",
            data: e,
          }).then((e) => {
            var { asyncOrderBookKey: r } = e;
            return et({ asyncOrderBookKey: r }, t);
          });
        }, 1e3);
      function $e(e, t) {
        var { bookKey: r, message: o } = t;
        A(o, { error: e, bookKey: r, stack: e.stack });
      }
      function et(e, t) {
        var r = t.data.asyncOrder
            ? "/pay/wsctrade/order/buy/postAsyncOrderResult.json"
            : "/pay/wsctrade/order/buy/v2/bill-fast.json",
          o = Date.now() + "_" + Math.floor(1e6 * Math.random() + 1);
        try {
          var a;
          $e(
            {},
            {
              bookKey: null == e || null == (a = e.source) ? void 0 : a.bookKey,
              message: JSON.stringify({
                title: "判断重复下单",
                status: "start",
                asyncOrder: t.data.asyncOrder,
                rand: o,
              }),
            }
          );
        } catch (e) {}
        return Object(f.requestV2)({
          origin: "cashier",
          withCredentials: !0,
          path: r,
          method: "POST",
          data: e,
        })
          .then((r) => {
            try {
              var a;
              $e(
                {},
                {
                  bookKey:
                    null == e || null == (a = e.source) ? void 0 : a.bookKey,
                  message: JSON.stringify({
                    title: "判断重复下单",
                    status: "fulfilled",
                    asyncOrder: t.data.asyncOrder,
                    rand: o,
                  }),
                }
              );
            } catch (e) {}
            return Object(x.d)(t), r;
          })
          .catch((r) => {
            var a, i, n, s;
            try {
              var c;
              $e(
                {},
                {
                  bookKey:
                    null == e || null == (c = e.source) ? void 0 : c.bookKey,
                  message: JSON.stringify({
                    title: "判断重复下单",
                    status: "rejected",
                    asyncOrder: t.data.asyncOrder,
                    rand: o,
                  }),
                }
              );
            } catch (e) {}
            (r.code = +r.code || (null == (a = r.data) ? void 0 : a.code)),
              (r.msg =
                r.msg ||
                (null == (i = r.data) ? void 0 : i.msg) ||
                (null == (n = r.data) ? void 0 : n.message) ||
                r.message ||
                "订单创建失败，请稍后重试");
            var { code: d } = r;
            if (w.a.LIMIT_ORDER.indexOf(d) >= 0) {
              if ((Object(x.b)(t), x.a.limitTryCount < 3))
                return new Promise((r, o) => {
                  setTimeout(() => {
                    x.a.limitCreate && Ze(e, t).then(r).catch(o);
                  }, 1e3 + 2e3 * x.a.limitTryCount);
                });
              Object(x.c)(t);
            } else if (d === w.a.ASYNC_ORDER) {
              if ((Object(x.b)(t), x.a.limitTryCount < 7))
                return new Promise((r, o) => {
                  setTimeout(() => {
                    Ze(e, t).then(r).catch(o);
                  }, 1e3);
                });
              Object(x.c)(t);
            } else
              w.a.RECEIVER_NEED_REALNAME === d
                ? t.data.limitOrder.limitCreate && Object(x.d)(t)
                : (w.a.DELIVERY_ERROR.includes(d) ||
                    (function (e, t) {
                      return (
                        void 0 === e && (e = ""),
                        e.split(",").includes(String(t))
                      );
                    })(
                      null == (s = t.data) ? void 0 : s.asyncOrderUnLimitCode,
                      d
                    )) &&
                  Object(x.d)(t);
            throw r;
          });
      }
      function tt() {
        return (tt = Object(v.a)(function* (e, t) {
          void 0 === e && (e = {});
          var { loading: r = !0, confirmRisk: o = !1 } = e;
          r && Object(_.d)();
          try {
            yield Be(t), yield t.process.invokePipe("hook:beforeCreateOrder");
          } catch (e) {
            throw (
              (L.a.end({
                name: L.b.create_order,
                extra: {
                  message: "创建订单前置流程错误",
                  err: JSON.stringify(e),
                },
              }),
              r && Object(_.a)(),
              e)
            );
          }
          var { asyncOrder: a } = t.data,
            n = de(
              {
                version: "",
                source: {},
                config: {},
                usePayAsset: {},
                items: [],
                seller: {},
                ump: {},
                newCouponProcess: !1,
                unavailableItems: [],
                asyncOrder: a,
                delivery: {},
                cloudOrderExt: {},
                bookKeyCloudExtension: {},
                confirmTotalPrice: 0,
                extensions: {
                  CONFIRM_TRADE_RISK_DIALOG: JSON.stringify(o),
                  TRADE_PAGE_TYPE: "TRADE_BUY_PAGE",
                },
                behaviorOrderInfo: {},
              },
              t
            ),
            s = (yield t.process.invokePipe("genCreateParams", n)) || n;
          return (a ? Qe : Ze)(s, t)
            .then(
              (function () {
                var o = Object(v.a)(function* (o) {
                  var a;
                  try {
                    var n;
                    A(
                      "1 track_orderCreate[bookKey:" +
                        (null == s || null == (n = s.source)
                          ? void 0
                          : n.bookKey) +
                        "] 创建订单成功"
                    ),
                      getApp().trigger("trade:order:create"),
                      yield ve(t, o),
                      yield t.process.invokePipe(
                        "hook:afterCreateOrder",
                        Object(i.a)({}, o, { payload: e })
                      );
                  } catch (e) {
                    var c;
                    A(
                      "1-1 track_orderCreate[bookKey:" +
                        (null == s || null == (c = s.source)
                          ? void 0
                          : c.bookKey) +
                        "] 上报埋点前的前端流程报错",
                      { error: JSON.stringify(e) }
                    );
                  }
                  return (
                    A(
                      "2 track_orderCreate[bookKey:" +
                        (null == s || null == (a = s.source)
                          ? void 0
                          : a.bookKey) +
                        "] emit:onCreateOrder"
                    ),
                    t.event.emit("onCreateOrder", o),
                    r && Object(_.a)(),
                    o
                  );
                });
                return function (e) {
                  return o.apply(this, arguments);
                };
              })()
            )
            .catch(
              (function () {
                var o = Object(v.a)(function* (o) {
                  var a, n;
                  void 0 === o && (o = {}), r && Object(_.a)();
                  var s = Object(i.a)({}, o, {
                    code: o.code || (null == (a = o.data) ? void 0 : a.code),
                    msg:
                      o.msg ||
                      (null == (n = o.data) ? void 0 : n.msg) ||
                      "订单创建失败，请稍后重试",
                  });
                  try {
                    yield Je(t, { error: s, payload: e }),
                      yield t.process.invokePipe("hook:afterCreateOrderError", {
                        error: s,
                        payload: e,
                      }),
                      Object(D.b)(s, { message: s.msg, log: !0 });
                  } catch (o) {}
                  throw o;
                });
                return function (e) {
                  return o.apply(this, arguments);
                };
              })()
            );
        })).apply(this, arguments);
      }
      var rt = {
        limitCreate: !1,
        limitCreateStatus: "wating",
        limitTryCount: 0,
      };
      function ot() {
        return (ot = Object(v.a)(function* (e, t) {
          return (
            b(e, (e) => {
              he(e, t);
            }),
            t
          );
        })).apply(this, arguments);
      }
      function at(e) {
        E.a.loading();
        var { orderNos: t } = e.data;
        return Object(f.default)({
          origin: "cashier",
          withCredentials: !0,
          method: "POST",
          path: "/pay/wsctrade/order/buy/prepay.json",
          data: { orderNoList: t },
        })
          .then(
            (function () {
              var t = Object(v.a)(function* (t) {
                E.a.clear();
                var r = t.prePaymentPreparation || {};
                if (!1 !== t.success && r.prepaySuccess)
                  return (
                    (function (e) {
                      rt.limitCreate &&
                        ((rt.limitTryCount = 0),
                        (rt.limitCreate = !1),
                        (e.data.limitOrder = Object(i.a)({}, rt)));
                    })(e),
                    yield (function (e, t) {
                      return ot.apply(this, arguments);
                    })(e, t),
                    yield e.process.invokePipe("hook:afterPrepay", t),
                    t
                  );
                throw t;
              });
              return function (e) {
                return t.apply(this, arguments);
              };
            })()
          )
          .catch(function (t) {
            if (
              (void 0 === t && (t = {}),
              E.a.clear(),
              (function (e) {
                (rt.limitCreate = !0),
                  (rt.limitCreateStatus = "wating"),
                  (rt.limitTryCount += 1),
                  (e.data.limitOrder = Object(i.a)({}, rt));
              })(e),
              rt.limitTryCount < 3)
            )
              return new Promise((t, r) => {
                setTimeout(() => {
                  rt.limitCreate && at(e).then(t).catch(r);
                }, 1e3 + 2e3 * rt.limitTryCount);
              });
            throw (
              ((function (e) {
                (rt.limitCreate = !0),
                  (rt.limitCreateStatus = "fail"),
                  (rt.limitTryCount = 0),
                  (e.data.limitOrder = Object(i.a)({}, rt));
              })(e),
              (t.prepay = !0),
              t)
            );
          });
      }
      function it(e) {
        var t,
          {
            orderCreation: r,
            isTTApp: o = !1,
            isRetailOrderScene: a = !1,
          } = void 0 === e ? {} : e,
          i =
            (null == r || null == (t = r.source) ? void 0 : t.orderMark) ||
            "wx_shop";
        return a
          ? o
            ? { platform: "dy_mini_program", orderMark: "fulfill_tool" }
            : { platform: "weapp", orderMark: "retail_minapp_shelf" }
          : { platform: "weapp", orderMark: i };
      }
      function nt(e) {
        (e.delivery = {}),
          delete e.selfFetch.time,
          delete e.selfFetch.timeWithWeekday,
          delete e.selfFetch.selfFetchStartTime,
          delete e.selfFetch.selfFetchEndTime;
      }
      function st() {
        return (st = Object(v.a)(function* (e, t, r) {
          var o,
            a,
            n,
            { isRetailOrderScene: s } = e.data;
          s &&
            null != (o = e.data.state.env) &&
            o.isTTApp &&
            (e.data.prepareData = t),
            (e.data.confirmData = Object(i.a)({}, t, {
              isInitCoupon:
                null == (a = null == r ? void 0 : r.isInitCoupon) || a,
            }));
          var {
              isAddressIdChange: c,
              isStoreIdChange: d,
              goodsId: u,
              skuId: l,
              num: p,
            } = r,
            { tradeState: h } = e.store;
          if (void 0 !== u && void 0 !== l && "number" == typeof p)
            for (var f of h.order.items)
              if (f.goodsId === u && f.skuId === l) {
                f.num = p;
                break;
              }
          null != r && r.resetDelivery && nt(h);
          var v = it({ orderCreation: h.order, isRetailOrderScene: s }),
            m = pe(h, t, {
              isInitCoupon:
                null == (n = null == r ? void 0 : r.isInitCoupon) || n,
              isFetchShow: !0,
              platformInfo: v,
              keepPresent: !0,
              isAddressIdChange: c,
              isStoreIdChange: d,
              isRetailOrderScene: s,
            });
          (m =
            (yield e.process.invokePipe("hook:mutateStateAfterFetch", m)) || m),
            S(t, e),
            (m.dataLoaded = !0),
            (e.data.dataLoaded = !0),
            g(e, m),
            e.logger &&
              e.logger.log({
                et: "custom",
                ei: "trade_buy_set_confirm_data",
                en: "confirm数据更新",
                pt: "trade",
                params: {},
              });
        })).apply(this, arguments);
      }
      var ct,
        dt,
        ut,
        lt = function (e, t, r) {
          return st.apply(this, arguments);
        };
      function pt(e) {
        var t, r, o;
        null != (t = e.store.tradeState) &&
          null != (r = t.order) &&
          null != (o = r.config) &&
          o.isChooseFreeOrder &&
          ((t.order.config.isForbidPreference = !0),
          (t.order.config.isForbidCoupon = !0),
          t.giftCard && (t.giftCard.checked = []),
          t.valueCard && (t.valueCard.checked = []));
      }
      ut =
        (null == (ct = getApp()) || null == (dt = ct.globalData)
          ? void 0
          : dt.isRetailApp) || !1;
      var ht = !1,
        ft = [];
      function vt(e) {
        var { ctx: t, tasks: r = [], e: o, data: a } = e;
        (ht = !1),
          r.forEach((e) => {
            var { resolve: t, reject: r } = e;
            o ? r(o) : t(a);
          }),
          ft.length > 0 &&
            setTimeout(() => {
              mt(t);
            }, 200);
      }
      function mt(e) {
        return yt.apply(this, arguments);
      }
      function yt() {
        return (yt = Object(v.a)(function* (e) {
          var t = ft[ft.length - 1],
            r = ft.slice(0);
          (ft.length = 0), (ht = !0);
          var { payload: o = {} } = t,
            {
              loading: a = !0,
              clearLoading: n = !0,
              changeDeliveryTime: s,
            } = o,
            c = null;
          try {
            pt(e),
              yield e.process.invokePipe("hook:beforeFetchShow", o),
              a && (ut ? (e.data.retailLoading = !0) : Object(_.d)());
            var d = ue({ payload: o }, e, o);
            c = yield e.process.invokePipe("genConfirmParams", d);
          } catch (e) {
            return void Object(D.b)(e, {
              message:
                (null == e ? void 0 : e.msg) || "前置验证失败，请稍后重试",
              log: !0,
            });
          }
          return Object(f.requestV2)({
            origin: "cashier",
            withCredentials: !0,
            path: "/pay/wsctrade/order/buy/confirm.json",
            method: "POST",
            data: c,
          })
            .then(
              (function () {
                var t = Object(v.a)(function* (t) {
                  void 0 === t && (t = {});
                  var {
                    redirectConfig: { orderCreated: c, teamLocked: d } = {
                      orderCreated: !1,
                      teamLocked: !1,
                    },
                    tradeConfirmation: { orderItems: u = [] },
                  } = t;
                  return c
                    ? Promise.reject({
                        code: 100100,
                        msg: "订单信息已更新，页面刷新中",
                      })
                    : d
                    ? Promise.reject({
                        code: 100101,
                        msg: "该店铺因存在异常，暂不支持购买，请联系商家",
                      })
                    : s && 0 === u.length
                    ? Promise.reject({
                        code: 100103,
                        msg: "当前配送时间库存不足，请重新选择",
                      })
                    : (yield lt(e, t, o),
                      yield e.process.invokePipe(
                        "hook:afterFetchShow",
                        Object(i.a)({}, t, { payload: o })
                      ),
                      e.event.emit("onConfirmOrder", t),
                      vt({ ctx: e, tasks: r, e: null, data: t }),
                      a &&
                        (ut ? (e.data.retailLoading = !1) : n && Object(_.a)()),
                      t);
                });
                return function (e) {
                  return t.apply(this, arguments);
                };
              })()
            )
            .catch(
              (function () {
                var t = Object(v.a)(function* (t) {
                  var s, c, d;
                  void 0 === t && (t = {});
                  var u = Object(i.a)({}, t, {
                    code: t.code || (null == (s = t.data) ? void 0 : s.code),
                    msg:
                      t.msg ||
                      (null == (c = t.data) ? void 0 : c.msg) ||
                      (null == (d = t.data) ? void 0 : d.message) ||
                      t.message ||
                      "订单信息更新失败，请刷新重试",
                  });
                  vt({ ctx: e, tasks: r, e: t || new Error(), data: null }),
                    a &&
                      (ut ? (e.data.retailLoading = !1) : n && Object(_.a)());
                  try {
                    yield e.process.invokePipe("hook:afterFetchShowError", {
                      error: u,
                      payload: o,
                    }),
                      Object(D.b)(u, { message: u.msg, log: !0 });
                  } catch (t) {}
                  throw t;
                });
                return function (e) {
                  return t.apply(this, arguments);
                };
              })()
            );
        })).apply(this, arguments);
      }
      function gt(e, t) {
        return bt.apply(this, arguments);
      }
      function bt() {
        return (bt = Object(v.a)(function* (e, t) {
          if (
            (t.logger &&
              t.logger.log({ et: "custom", ei: "trade_buy_confirm_start" }),
            t.data.orderCreated)
          )
            return Promise.resolve({});
          var r = new Promise((t, r) => {
            ft.push({ resolve: t, reject: r, payload: e });
          });
          return ht || mt(t), r;
        })).apply(this, arguments);
      }
      var Ct = r("tmLU"),
        Ot = r("9ZMt");
      function Pt(e, t) {
        var { orderNote: r } = t;
        r && (e.order.buyerMsg = r);
      }
      function St() {
        return (St = Object(v.a)(function* (e, t, r) {
          var o;
          void 0 === r && (r = {});
          var a,
            { bookKey: i = "" } = r;
          (t.prevOrderInfo = JSON.parse(
            (null == t ? void 0 : t.prevOrderInfo) || "{}"
          )),
            (e.data.prepareData = t);
          var { isRetailOrderScene: n } = e.data,
            { isTTApp: s = !1 } = e.data.state.env,
            c = it({
              orderCreation: t.orderCreation,
              isTTApp: s,
              isRetailOrderScene: n,
            });
          ((a = pe(e.data.state, t, {
            platformInfo: c,
            bookKey: i,
            isRetailOrderScene: n,
          })).address =
            (yield e.process.invokePipe(
              "hook:beforeUpdateAddress",
              null == (o = a) ? void 0 : o.address
            )) || a.address),
            (a =
              (yield e.process.invokePipe("hook:mutateStateAfterFetch", a)) ||
              a),
            P(t, e),
            S(t, e),
            (a.dataLoaded = !0),
            (e.data.dataLoaded = !0),
            g(e, a),
            Pt(a, t.prevOrderInfo);
        })).apply(this, arguments);
      }
      var kt = function (e, t, r) {
          return St.apply(this, arguments);
        },
        It = r("PKOW");
      function Tt(e, t) {
        return Et.apply(this, arguments);
      }
      function Et() {
        return (Et = Object(v.a)(function* (e, t) {
          var { code: r, data: o } = t.error;
          if (100100 === r) {
            var { orderNos: a = [] } = o,
              [i] = a;
            return (
              Object(It.f)({
                pageType: It.b.PAY,
                type: It.a.REDIRECT,
                query: { orderNo: i },
              }),
              Promise.reject(t)
            );
          }
          return t;
        })).apply(this, arguments);
      }
      function Dt(e, t) {
        return wt.apply(this, arguments);
      }
      function wt() {
        return (wt = Object(v.a)(function* (e, t) {
          var { code: r } = t.error;
          return 346000010 === r
            ? (e.event.emit("follow:show", {
                extraData: {
                  bizCode: 7,
                  activityKey: e.data.kdtId,
                  targetUrl: "",
                  fromOrder: e.isBuyPage,
                },
              }),
              Promise.reject(t))
            : t;
        })).apply(this, arguments);
      }
      function _t(e, t) {
        return jt.apply(this, arguments);
      }
      function jt() {
        return (jt = Object(v.a)(function* (e, t) {
          yield Tt(e, t), yield Dt(e, t);
        })).apply(this, arguments);
      }
      function At() {
        return (At = Object(v.a)(function* (e, t) {
          void 0 === e && (e = {});
          var {
              useLocal: r,
              bookKey: o,
              addressId: a,
              usePointDeduction: n,
              useOptimalCalculate: s = null,
            } = e,
            c = {
              useVersion2: !0,
              useNewCoupon: !0,
              isSupportDefaultSelfFetch: !0,
              useOrderKeep: !0,
              isOptimalSolution: !0,
              isOverlyingCoupon: !0,
              isNewMemberFlow: !0,
              usePointDeduction: !1 !== n,
              defaultPointDeductEffect: !0,
              bookKey: o,
              addressId: a,
              useOptimalCalculate: s,
            },
            { scene: d } =
              (null == Ot.default.$native.getEnterOptionsSync
                ? void 0
                : Ot.default.$native.getEnterOptionsSync()) ||
              (null == Ot.default.$native.getLaunchOptionsSync
                ? void 0
                : Ot.default.$native.getLaunchOptionsSync()) ||
              {};
          d && (c.scene = d);
          var u =
              (yield t.process.invokePipe("genPrepareByBookKeyParams", c)) || c,
            { usePrefetch: l, prefetchKey: p } = e,
            h = function (e) {
              return (
                void 0 === e && (e = {}),
                Object(f.requestV2)({
                  origin: "cashier",
                  withCredentials: !0,
                  path: "/pay/wsctrade/order/buy/prepare-by-book-key.json",
                  data: Object(i.a)({}, u, e),
                })
              );
            };
          return (
            l
              ? Object(Ct.b)({ prefetchKey: p, normalFetchCb: h }).then((e) =>
                  e.bookKey && "retail-shelf" === e.scene && e.hasError
                    ? h({ bookKey: e.bookKey })
                    : e
                )
              : Object(f.requestV2)({
                  origin: "cashier",
                  withCredentials: !0,
                  path: "/pay/wsctrade/order/buy/prepare-by-book-key.json",
                  data: u,
                })
          )
            .then(
              (function () {
                var r = Object(v.a)(function* (r) {
                  void 0 === r && (r = {});
                  var {
                    redirectConfig: { orderCreated: o, teamLocked: a } = {
                      orderCreated: !1,
                      teamLocked: !1,
                    },
                  } = r;
                  return o
                    ? Promise.reject({
                        code: 100100,
                        msg: "订单信息已更新，页面刷新中",
                        data: r,
                      })
                    : a
                    ? Promise.reject({
                        code: 100101,
                        msg: "该店铺因存在异常，暂不支持购买，请联系商家",
                      })
                    : (t.event.emit("onPrepareByBookKey", r),
                      kt(t, r, e),
                      yield t.process.invokePipe(
                        "hook:afterPrepareByBookKey",
                        Object(i.a)({}, r, { payload: e })
                      ),
                      r);
                });
                return function (e) {
                  return r.apply(this, arguments);
                };
              })()
            )
            .catch(
              (function () {
                var r = Object(v.a)(function* (r) {
                  var o, a, n;
                  void 0 === r && (r = {});
                  var s =
                      r.msg ||
                      (null == (o = r.data) ? void 0 : o.msg) ||
                      (null == (a = r.data) ? void 0 : a.message) ||
                      r.message,
                    c = Object(i.a)({}, r, {
                      code: r.code || (null == (n = r.data) ? void 0 : n.code),
                      msg: s || "系统繁忙，请刷新重试",
                    });
                  try {
                    yield _t(t, { error: c, payload: e }),
                      yield t.process.invokePipe(
                        "hook:afterPrepareByBookKeyError",
                        { error: c, payload: e }
                      );
                  } catch (r) {}
                  throw r;
                });
                return function (e) {
                  return r.apply(this, arguments);
                };
              })()
            );
        })).apply(this, arguments);
      }
      var xt = {
        start: { ei: "create_order_setup_start", en: "提交订单流程开始" },
        one: { ei: "create_order_setup_one", en: "提交订单第一步" },
        two: { ei: "create_order_setup_two", en: "提交订单第二步" },
        three: { ei: "create_order_setup_three", en: "提交订单第三步" },
        four: { ei: "create_order_setup_four", en: "提交订单第四步" },
        five: { ei: "create_order_setup_five", en: "提交订单第五步" },
        successStart: {
          ei: "create_order_success_setup_start",
          en: "提交订单成功开始处理",
        },
        successOne: {
          ei: "create_order_success_setup_one",
          en: "提交订单成功处理第一步",
        },
        successTwo: {
          ei: "create_order_success_setup_two",
          en: "提交订单成功处理第二步",
        },
        skipResult: {
          ei: "create_order_success_skip_result",
          en: "跳转支付成功页",
        },
      };
      function Nt(e) {
        return function (t, r) {
          void 0 === r && (r = {});
          try {
            var o = xt[t];
            e.logger.log({
              et: "custom",
              ei: o.ei,
              en: o.en,
              pt: "trade",
              params: { desc: JSON.stringify(r) },
            });
          } catch (e) {}
        };
      }
      function Rt(e) {
        return Lt.apply(this, arguments);
      }
      function Lt() {
        return (Lt = Object(v.a)(function* (e) {
          var t = Nt(e);
          try {
            var r, o;
            t("successStart");
            var { orderResult: a, order: i } = e.data,
              { orderNo: n, showPayResult: s } = a;
            if (
              (t("successOne", {
                isChooseFreeOrder:
                  null == i || null == (r = i.config)
                    ? void 0
                    : r.isChooseFreeOrder,
              }),
              null != i && null != (o = i.config) && o.isChooseFreeOrder)
            )
              return (
                e.process.invoke("freeOrderJumpToResult", { orderNo: n }),
                Promise.reject("充值免单订单跳转")
              );
            if ((t("successTwo", { showPayResult: s }), s))
              return (
                e.process.invoke("onPaySuccess", a), Promise.reject("0元单跳转")
              );
          } catch (e) {}
        })).apply(this, arguments);
      }
      function Ft(e) {
        return Mt.apply(this, arguments);
      }
      function Mt() {
        return (Mt = Object(v.a)(function* (e) {
          var { pay: t } = e.data;
          if (t.prepay && !t.prepaySuccess) {
            var [r] = e.process.invoke("createPrepay");
            return r;
          }
          return Promise.resolve();
        })).apply(this, arguments);
      }
      function Bt() {
        return (Bt = Object(v.a)(function* (e) {
          try {
            return yield Rt(e), yield Ft(e), Promise.resolve();
          } catch (e) {
            throw e;
          }
        })).apply(this, arguments);
      }
      function Ut(e, t) {
        if (!e) return e;
        var r = {};
        return (
          Object.keys(e).forEach((o) => {
            var a = e[o];
            r[o] = (function (e, t, r) {
              return function () {
                for (
                  var o = arguments.length, a = new Array(o), i = 0;
                  i < o;
                  i++
                )
                  a[i] = arguments[i];
                return Promise.resolve()
                  .then(() => t(...a))
                  .catch((t) => {
                    if (t && t instanceof Error) {
                      var o = {
                        bookKey: r.data.bookKey,
                        kdtId: r.data.kdtId,
                        platform: "weapp",
                      };
                      j.a.error(
                        "【clientProcessError】" + e,
                        { message: t.message, stack: t.stack },
                        o
                      );
                    }
                    throw t;
                  });
              };
            })(o, a, t);
          }),
          r
        );
      }
      var Gt = null,
        Ht = function (e) {
          var t,
            r = new Promise((e) => {
              t = e;
            });
          Gt = e.watch("dataLoaded", (e) => {
            e && t();
          });
          var o = Ut(
            {
              prepareByBookKey: (t) =>
                (function (e, t) {
                  return At.apply(this, arguments);
                })(t, e).catch((e) => {
                  throw e;
                }),
              createOrder: (t) =>
                (function (e, t) {
                  return tt.apply(this, arguments);
                })(t, e),
              confirmOrder: (t) =>
                (null != t && t.isFormDbId) || e.data.dataLoaded
                  ? gt(t, e)
                  : r.then(() => gt(t, e)),
              createPrepay: () => at(e),
              checkOrderPay: () =>
                (function (e) {
                  return Bt.apply(this, arguments);
                })(e),
              resetTradeBuyCore: () => {
                var t = e.store.getInitTradeState();
                g(e, t);
              },
            },
            e
          );
          return (
            Object.keys(o).forEach((t) => e.process.define(t, o[t])),
            () => {
              Object.keys(o).forEach((t) => e.process.undef(t, o[t])),
                Gt && Gt();
            }
          );
        },
        Yt = r("yS26"),
        Vt = function (e) {
          e.process.define("mutateState", (t) => (b(e, t), Promise.resolve()));
          var t = {};
          function r(r, o, a) {
            t[r] = function () {
              for (
                var t = arguments.length, r = new Array(t), i = 0;
                i < t;
                i++
              )
                r[i] = arguments[i];
              if ((b(e, (e) => o(e, ...r)), a)) return a();
            };
          }
          return (
            r("setOrderMessage", (e, t) => {
              e.order.buyerMsg = t;
            }),
            r("setOrderPrivacyBill", (e, t) => {
              e.order.isAllowPrivacyWaybill = t;
            }),
            r("setInvoiceSubmit", (e, t) => {
              (e.invoice.submit = t.submit),
                (e.invoice.invoiceType = t.invoiceType),
                (e.invoice.common = t.common),
                (e.invoice.enterprise = t.enterprise),
                (e.invoice.personal = t.personal);
            }),
            r("setPrepayCardCheckStatus", (e, t) => {
              var { valueCard: r } = t;
              e.valueCard = Object(i.a)({}, r);
            }),
            r("setDisableStoredDiscount", (e, t) => {
              e.disableStoredDiscount = t;
            }),
            r("setOrderForbidCoupon", (e, t) => {
              e.order.config.isForbidCoupon = t;
            }),
            r("setOrderForbidPreference", (e, t) => {
              e.order.config.isForbidPreference = t;
            }),
            r("setDepositAgreement", (e, t) => {
              e.order.showDepositAgreementVal = t;
            }),
            r("updateByCrossStoreSelfFetchCache", (e, t) => {
              var r = s(t);
              return (
                r &&
                  ((e.postage.currentExpressType =
                    (null == r ? void 0 : r.activeTab) || 0),
                  (e.selfFetch = null == r ? void 0 : r.selfFetch),
                  (e.address.activeTab = null == r ? void 0 : r.activeTab)),
                []
              );
            }),
            (function (e) {
              var {
                ctx: t,
                defineProcess: r,
                defineAsyncProcess: o,
                initProcessMap: a,
              } = e;
              r("switchAddressTab", (e, r) => {
                var { id: o } = r;
                return (
                  (e.address.activeTab = o),
                  (t.data.expressType = t.store.expressType),
                  ["address"]
                );
              }),
                r(
                  "selectContact",
                  (e, t) => {
                    var r, o;
                    e.contact.id = t;
                    var a =
                      (null == (r = e.contact) || null == (o = r.list)
                        ? void 0
                        : o.find((e) => e.id === t)) || {};
                    (e.contact.userName = a.userName),
                      (e.contact.telephone = a.telephone);
                  },
                  () => t.process.invoke("onExpressChanged")
                ),
                r(
                  "setNewContact",
                  (e, t) => {
                    var { userName: r, telephone: o } = t;
                    void 0 !== r && (e.contact.userName = r),
                      void 0 !== o && (e.contact.telephone = o),
                      (e.contact.id = "");
                  },
                  () => t.process.invoke("onExpressChanged")
                ),
                r(
                  "setSelfFetch",
                  (e, t) => (
                    (e.selfFetch = Object(i.a)({}, e.selfFetch, t)),
                    ["selfFetch"]
                  ),
                  () => (
                    t.process.invoke("onExpressChanged"),
                    t.process.invoke("confirmOrder")
                  )
                ),
                r(
                  "selectAddress",
                  (e, t) => {
                    (e.address.id = t),
                      Object(B.a)(e.address.inlineForm) ||
                        (e.address.inlineForm = {});
                    try {
                      var r = Ot.default.getApp();
                      if (r.getYouZanYunSdk) {
                        var { scene: o } = Ot.default.getAppOptions();
                        r.getYouZanYunSdk().app.trigger(
                          "ecloud:address:select",
                          [e.address, o]
                        );
                      }
                    } catch (e) {}
                  },
                  () => (
                    t.process.invoke("onExpressChanged"),
                    t.process.invoke("confirmOrder", { isAddressIdChange: !0 })
                  )
                ),
                r(
                  "selectExpressType",
                  (e, t) => {
                    e.postage.currentExpressType = t;
                  },
                  () => t.process.invoke("confirmOrder", { expressChanged: !0 })
                ),
                r(
                  "setSelfFetchTime",
                  (e, t) => {
                    (e.selfFetch.time = t.text),
                      (e.selfFetch.timeWithWeekday = t.textWithWeekday),
                      (e.selfFetch.selfFetchStartTime = t.startTime || ""),
                      (e.selfFetch.selfFetchEndTime = t.endTime || "");
                  },
                  () => t.process.invoke("confirmOrder")
                ),
                r("setPeriodBuyChosenIndex", (e, t) => {
                  e.periodBuy.chosenIndex = t;
                }),
                r("setVerifyFail", (e, t) => {
                  e.idcard.verifyFalse = t;
                }),
                r("updateAddress", (e, t) => {
                  e.address.list.some(
                    (r, o) =>
                      r.id === t.id && (e.address.list.splice(o, 1, t), !0)
                  ),
                    t.isDefault &&
                      e.address.list
                        .filter((e) => e.id !== t.id && e.isDefault)
                        .forEach((e) => {
                          e.isDefault = !1;
                        });
                }),
                r("addAddress", (e, t) => {
                  (t.id && e.address.list.some((e) => e.id === t.id)) ||
                    (e.address.list.unshift(t),
                    t.isDefault &&
                      e.address.list
                        .filter((e) => e.id !== t.id && e.isDefault)
                        .forEach((e) => {
                          e.isDefault = !1;
                        }));
                }),
                r(
                  "setAddressId",
                  (e, t) => {
                    e.address.id = t;
                  },
                  () => t.process.invoke("onExpressChanged")
                ),
                r("deleteAddress", (e, t) => {
                  if (
                    ((e.address.list = e.address.list.filter(
                      (e) => e.id !== t
                    )),
                    t === e.address.id)
                  ) {
                    e.address.id = "";
                    var r = e.address.list[0];
                    Object(B.a)(r) || (e.address.id = r.id);
                  }
                }),
                r("setIdcard", (e, t) => {
                  e.idcard = Object(i.a)({}, t);
                });
              var n = !1;
              o(
                "updateAddressState",
                (function () {
                  var e = Object(v.a)(function* (e, r) {
                    var o;
                    if (
                      ((n = !1),
                      -1 !==
                        (
                          (null == (o = e.address) ? void 0 : o.list) || []
                        ).findIndex((e) => +e.id == +r.id))
                    )
                      e.address.list.some(
                        (t, o) =>
                          t.id === r.id && (e.address.list.splice(o, 1, r), !0)
                      );
                    else {
                      if (r.id && e.address.list.some((e) => e.id === r.id))
                        return;
                      e.address.list.push(r);
                    }
                    r.isDefault &&
                      e.address.list
                        .filter((e) => e.id !== r.id && e.isDefault)
                        .forEach((e) => {
                          e.isDefault = !1;
                        }),
                      r.id !== e.address.id &&
                        ((n = !0), (e.address.id = r.id)),
                      Object(B.a)(e.address.inlineForm) ||
                        (e.address.inlineForm = {});
                    var a = yield t.process.invokePipe(
                      "hook:beforeUpdateAddress",
                      e.address
                    );
                    e.address = a || e.address;
                  });
                  return function (t, r) {
                    return e.apply(this, arguments);
                  };
                })(),
                () => (
                  t.process.invoke("onExpressChanged"),
                  t.process.invoke("confirmOrder", { isAddressIdChange: n })
                )
              ),
                (a.saveContact = (e) => {
                  if (!e.userName || !e.telephone)
                    return Promise.reject("参数缺失");
                  var r = e.id ? "update" : "add";
                  return Object(Yt.b)(e).then((o) => {
                    var a = o.value || o,
                      n = Object(i.a)({}, e, { id: a });
                    return (
                      t.process.invoke("updateContactState", {
                        contact: n,
                        method: r,
                      }),
                      t.process.invoke("onExpressChanged"),
                      Object(E.a)(
                        "add" === r ? "联系人添加成功" : "联系人编辑成功"
                      ),
                      a
                    );
                  });
                }),
                r("updateContactState", (e, t) => {
                  var { contact: r, method: o } = t,
                    { id: a } = r,
                    { list: n } = e.contact,
                    s = n.slice(),
                    c = Object(i.a)({}, r, { id: a }),
                    d = n.map((e) => e.id).indexOf(r.id);
                  "add" === o ? s.push(c) : s.splice(d, 1, c),
                    r.isDefault &&
                      s
                        .filter((e) => e.id !== a && e.isDefault)
                        .forEach((e) => {
                          e.isDefault = !1;
                        }),
                    (e.contact = Object(i.a)({}, e.contact, r, {
                      list: s,
                      id: a,
                    }));
                }),
                r("deleteContact", (e, t) => {
                  var r = e.contact.list.slice(),
                    o = r.map((e) => e.id).indexOf(t);
                  r.splice(o, 1),
                    (e.contact = Object(i.a)({}, e.contact, { list: r })),
                    t === e.contact.id &&
                      (e.contact = Object(i.a)({}, e.contact, {
                        id: "",
                        userName: "",
                        telephone: "",
                      }));
                });
            })({
              ctx: e,
              defineProcess: r,
              defineAsyncProcess: function (r, o, a) {
                t[r] = Object(v.a)(function* () {
                  for (
                    var t = arguments.length, r = new Array(t), i = 0;
                    i < t;
                    i++
                  )
                    r[i] = arguments[i];
                  if ((yield C(e, (e) => o(e, ...r)), a)) return a();
                });
              },
              initProcessMap: t,
            }),
            (function (e, t) {
              t(
                "setUmpActivity",
                (e, t) => {
                  (e.appointPromotionInstances = t),
                    (e.coupon = Object(i.a)({}, e.coupon, {
                      ignoreCoupon: !0,
                    })),
                    (e.customerCards = { list: [] });
                },
                () => e.process.invoke("confirmOrder")
              ),
                t(
                  "setBestActivity",
                  (e) => {
                    (e.useOptimalCalculate = !0),
                      (e.coupon = Object(i.a)({}, e.coupon, {
                        ignoreCoupon: !0,
                      })),
                      (e.customerCards = { list: [] });
                  },
                  () => e.process.invoke("confirmOrder")
                ),
                t("setIgnoreVirtualCoupon", (e, t) => {
                  e.coupon = Object(i.a)({}, e.coupon || {}, {
                    ignoreVirtualCoupon: t,
                  });
                }),
                t("setPointDeductionUsed", (e, t) => {
                  e.pointDeduction.isUse = t;
                }),
                t("setPointDeductionCost", (e, t) => {
                  (e.pointDeduction.canCostPoints = t),
                    (e.pointDeduction.isUse = 0 !== t);
                }),
                t("setCustomCard", (e, t, r) => {
                  (e.customerCards.id = t),
                    (e.customerCards.isActiveSelection = !!r);
                }),
                t("setDisplayCard", (e, t) => {
                  e.order.openDisplayCard = t;
                });
            })(e, r),
            Object.keys(t).forEach((r) => e.process.define(r, t[r])),
            () => {
              Object.keys(t).forEach((r) => e.process.undef(r, t[r]));
            }
          );
        },
        Wt = r("taYb"),
        zt = function (e) {
          var t = Ht(e),
            r = (function (e) {
              var t,
                r,
                o = {
                  getDeliveryParam: (t) => J(e.store.tradeState, e.store, t),
                  fetchPromotion:
                    ((r = Object(v.a)(function* (t) {
                      void 0 === t && (t = {});
                      var r = yield ue({}, e, t);
                      return Object(f.requestV2)({
                        origin: "cashier",
                        path: "/pay/wsctrade/order/buy/confirm.json",
                        method: "POST",
                        data: Wt.a.toCamelCase(r),
                        withCredentials: !0,
                      });
                    })),
                    function (e) {
                      return r.apply(this, arguments);
                    }),
                  modifyCacheOrder:
                    ((t = Object(v.a)(function* (t) {
                      void 0 === t && (t = {});
                      var { order: r, extra: o } = e.store.tradeState,
                        { skus: a } = t;
                      return Object(f.requestV2)({
                        origin: "cashier",
                        path: "/pay/wsctrade/order/buy/modify-cache.json",
                        method: "POST",
                        data: Wt.a.toCamelCase({
                          bookKey: o.bookKey,
                          buyerId: r.buyer.buyerId,
                          modifyCacheItems: [...a],
                        }),
                        withCredentials: !0,
                      });
                    })),
                    function (e) {
                      return t.apply(this, arguments);
                    }),
                };
              return (
                Object.keys(o).forEach((t) => e.process.define(t, o[t])),
                () => {
                  Object.keys(o).forEach((t) => e.process.undef(t, o[t]));
                }
              );
            })(e),
            o = Vt(e);
          return () => {
            t(), r(), o();
          };
        };
      class Kt {
        constructor(e) {
          var t;
          (this.initStoreCtxData = () => {
            Object(a.c)(this, [
              "grouponModel",
              "couponModel",
              "kdtId",
              "yzGuarantee",
              "yzGuaranteeInfo",
              "yzGuaranteeDocs",
              "presentData",
              "themeColors",
            ]);
          }),
            (this.ctx = e.ctx),
            (this.ctx.store = T(this.ctx)),
            (this.store = this.ctx.store),
            this.initStoreCtxData(),
            ((t = this.ctx).data.state = t.store.tradeState),
            (t.data.address = {}),
            (t.data.dataLoaded = !1),
            (t.data.orderNo = ""),
            (t.data.orderNos = []),
            (t.data.orderCreated = !1),
            (t.data.limitOrder = {
              limitCreate: !1,
              limitCreateStatus: "",
              limitTryCount: 0,
            }),
            (t.data.asyncOrder = !1),
            (this.offEvent = (function (e) {
              var t = {
                "trade-recharge:on-close": () => {
                  e.data.showPrepay = !1;
                },
                "trade-recharge:on-select": (t) => {
                  (e.data.showPrepay = !1),
                    b(e, (e) => {
                      (e.order.config.isStoreAndPayProcess =
                        t.isStoreAndPayProcess),
                        (e.pay.valueCardParams = Object(i.a)(
                          {
                            valueCardRechargeRuleNo: t.ruleNo,
                            valueCardRechargeRuleVersion: t.ruleVersion,
                          },
                          t
                        ));
                    }),
                    e.store.updateState({ _rechargePay: !0 }),
                    e.process.invoke("submitOrder");
                },
                "recharge-free-order:on-confirm": (t) => {
                  var { rechargeNo: r = "" } = t;
                  if (!r) return E.a.fail("执行优惠流程失败，未获取充值单号");
                  b(e, (e) => {
                    (e.order.extensions.RECHARGE_ORDER_FREE = r),
                      (e.order.config.isChooseFreeOrder = !0),
                      e.giftCard && (e.giftCard.checked = []),
                      e.valueCard && (e.valueCard.checked = []),
                      (e.disableStoredDiscount = !0);
                  }),
                    e.store.updateState({ _rechargePay: !0 }),
                    e.process.invoke("submitOrder");
                },
              };
              return (
                Object.keys(t).forEach((r) => e.event.listen(r, t[r])),
                () => {
                  Object.keys(t).forEach((r) => e.event.remove(r, t[r]));
                }
              );
            })(this.ctx)),
            (this.destroyProcess = zt(this.ctx)),
            (this.ctx.data.coreReady = !0);
        }
        pageDestroyed() {
          var e, t;
          null == (e = this.offEvent) || e.call(this),
            null == (t = this.destroyProcess) || t.call(this);
        }
      }
    },
    IQp6: function (e, t, r) {
      r.d(t, "a", function () {
        return s;
      });
      var o = r("aDHN"),
        a = r("exEQ"),
        i = r("xqQ2");
      class n extends o.a {
        constructor() {
          super(a.b, a.c),
            this.mergeParams({
              package_name: "@assets-tee-extensions/cashier",
            }),
            (this.tracker = new i.a({
              beforeAppshow() {},
              beforeEnterpage() {},
              batch: !1,
              plat: { yai: "cashier" },
            })),
            this.tracker.appShow();
        }
      }
      function s() {
        return new n();
      }
    },
    IfCE: function (e, t, r) {
      t.a = {
        formatPrice: (e) =>
          e % 100 == 0 ? Math.round(e / 100) : (e / 100).toFixed(2),
        noticeText(e, t, r) {
          var o = "";
          return (
            !e &&
              t.showUseSpecification &&
              (o += r
                ? "取消使用该卡类，可重新享受店铺活动、优惠券、积分、储值专享折扣等优惠。"
                : "该卡不可与店铺活动、优惠券、积分、储值专享折扣同时使用，限原价购买。"),
            !e &&
              t.freezingSumDnom > 0 &&
              (o +=
                "待付款订单冻结金额" +
                this.formatPrice(t.freezingSumDnom) +
                "元，取消后冻结余额可释放。"),
            o
          );
        },
        showFreeze: (e, t) => !e && t.freezingSumDnom > 0,
      };
    },
    JLg1: function (e, t, r) {
      r.d(t, "a", function () {
        return o;
      });
      var o = "RC";
    },
    KPy4: function (e, t, r) {
      var o = r("Fcif"),
        a = r("zMoS");
      t.a = {
        formatPrice: (e) =>
          e % 100 == 0 ? Math.round(e / 100) : (e / 100).toFixed(2),
        valueCardRecommendAmount(e) {
          var t = Object(a.a)(e, "productInfos[0].amount", 0);
          return this.formatPrice(t);
        },
        hasCardRecommendDesc: (e) => Object(a.a)(e, "desc.length", 0) > 0,
        showBalance: (e) => !!e.balance || 0 === e.balance,
        showReason: (e, t) => (e && t.unusableReason) || !1,
        showFreeze: (e, t) => !e && t.freezingSumDnom > 0,
        checked: (e, t, r) =>
          !(t || !e.summaryCardNo) &&
          -1 !== Object(a.a)(r, "checked", []).indexOf(e.summaryCardNo),
        showRecommend: (e) => "" !== e && (e || 0 === e),
        intPrice: (e) => (
          void 0 === e && (e = 0), Number(e).toFixed(2).split(".")[0]
        ),
        centPrice: (e) => (
          void 0 === e && (e = 0), Number(e).toFixed(2).split(".")[1]
        ),
        balance(e) {
          var {
            valueCard: t,
            disabled: r,
            payAssetActivityTagDesc: a,
            newRecommend: i,
          } = e;
          if (!t) return {};
          var n = t[r ? "disabled" : "list"].find(
            (e) => 102 === e.cardType && 1001 === e.cardSubType
          );
          if (n) {
            var s = this.formatPrice(n.balance);
            return Object(o.a)({}, n, {
              balance: s,
              balanceInt: this.intPrice(s),
              balanceCent: this.centPrice(s),
            });
          }
          return r || !a || i
            ? {}
            : { balance: 0, balanceInt: "0", balanceCent: "00" };
        },
      };
    },
    "Kfn+": function (e, t, r) {
      r.d(t, "b", function () {
        return i;
      }),
        r.d(t, "a", function () {
          return n;
        });
      var o = r("eijD"),
        a = (e) =>
          class {
            constructor() {
              (this.middleware = []),
                (this.zanPayResolve = null),
                (this.zanPayReject = null);
            }
            initPayEnv() {
              (e.data.biz = "prepaid_recharge"), (e.data.quickMode = !0);
            }
            setConfig(e) {
              this.initListener(e);
            }
            initListener(t) {
              var { onPaySuccess: r, onCashierFail: o, onCashierClose: a } = t;
              e.event.remove("cashier:pay:prepaid:success"),
                e.event.remove("cashier:pay:prepaid:fail"),
                e.event.remove("cashier:pay:prepaid:close"),
                e.event.listen("cashier:pay:prepaid:success", () => {
                  r && r(), this.zanPayResolve && this.zanPayResolve();
                }),
                e.event.listen("cashier:pay:prepaid:fail", () => {
                  o && o(), this.zanPayReject && this.zanPayReject();
                }),
                e.event.listen("cashier:pay:prepaid:close", () => {
                  a && a(), this.zanPayReject && this.zanPayReject();
                });
            }
            use(e) {
              if ("function" != typeof e)
                throw new TypeError("middleware must be a function");
              return this.middleware.push(e), this;
            }
            compose(e) {
              if (!Array.isArray(e))
                throw new TypeError("Middleware stack must be an array!");
              return function (t, r) {
                var o = -1;
                return (function a(i) {
                  if (i <= o)
                    return Promise.reject(
                      new Error("next() called multiple times")
                    );
                  o = i;
                  var n = e[i];
                  if ((i === e.length && (n = r), !n)) return Promise.resolve();
                  try {
                    return Promise.resolve(n(t, () => a(i + 1)));
                  } catch (e) {
                    return Promise.reject(e);
                  }
                })(0);
              };
            }
            pay(t, r) {
              var a = this;
              return Object(o.a)(function* () {
                if (!t.payInfo)
                  throw new TypeError(
                    "支付所需的数据需要放入 ctx.payInfo，payInfo 内容参考文档 https://npm.qima-inc.com/package/@youzan/zan-pay-tee"
                  );
                var {
                    prepayId: o,
                    partnerId: i,
                    cashierSign: n,
                    cashierSalt: s,
                    orderNo: c,
                    outBizNo: d,
                  } = t.payInfo,
                  u = {
                    prepayId: o,
                    partnerId: i,
                    cashierSign: n,
                    cashierSalt: s,
                    orderNo: c || d,
                    showGuarantee: !1,
                  };
                e.process.invoke("prepaidStartPay", u),
                  yield a.beforeZanPay(),
                  yield r();
              })();
            }
            beforeZanPay() {
              var e = this;
              return Object(o.a)(function* () {
                return new Promise((t, r) => {
                  (e.zanPayResolve = t), (e.zanPayReject = r);
                });
              })();
            }
            startPay(e) {
              var t = this;
              return Object(o.a)(function* () {
                var r = t.compose([...t.middleware, t.pay.bind(t)]);
                yield r(e);
              })();
            }
          };
      function i(e) {
        var t = new (a(e))();
        t.initPayEnv(), e.process.define("prepaidCommonPay", () => t);
      }
      function n(e, t) {
        return e % 100 != 0 || t ? (e / 100).toFixed(2) : Math.round(e / 100);
      }
    },
    MTtC: function (e, t, r) {
      r.d(t, "c", function () {
        return o;
      }),
        r.d(t, "b", function () {
          return a;
        }),
        r.d(t, "e", function () {
          return i;
        }),
        r.d(t, "d", function () {
          return n;
        }),
        r.d(t, "a", function () {
          return s;
        });
      var o = { AVATAR: 1, NAME: 2, MOBILE: 3, BIRTHDAY: 5 },
        a = {
          STRING: 0,
          NUMBER: 1,
          DATE: 2,
          REGION: 3,
          GENDER: 4,
          AVATAR: 5,
          SINGLE_SELECT: 7,
          MULTIPLE_SELECT: 8,
        },
        i = { MALE: "1", FEMALE: "2", UNKNOWN: "0" },
        n = { 1: "男", 2: "女", 0: "未知" },
        s = { STANDARD: 1, CUSTOM: 2 };
    },
    PBCL: function (e, t, r) {
      var o;
      r.d(t, "a", function () {
        return o;
      }),
        (function (e) {
          (e[(e.Normal = 1)] = "Normal"), (e[(e.Logo = 2)] = "Logo");
        })(o || (o = {}));
    },
    RC8l: function (e, t, r) {
      var o, a;
      r.d(t, "b", function () {
        return o;
      }),
        r.d(t, "c", function () {
          return a;
        }),
        r.d(t, "a", function () {
          return i;
        }),
        (function (e) {
          (e.VALID = "valid"), (e.TYR = "try"), (e.CLOSE = "close");
        })(o || (o = {})),
        (function (e) {
          (e[(e.DONE = 4)] = "DONE"),
            (e[(e.UNDO = -1)] = "UNDO"),
            (e[(e.REJECT = 5)] = "REJECT"),
            (e[(e.FAIL = 99)] = "FAIL");
        })(a || (a = {}));
      var i = {
        WSC: "https://help.youzan.com/displaylist/detail_4_4-2-604",
        RETAIL: "https://help.youzan.com/displaylist/detail_5_5-2-30173",
      };
    },
    RPi2: function (e, t, r) {
      r.d(t, "a", function () {
        return J;
      });
      var o = r("Fcif"),
        a = r("VmHG"),
        i = r("uzJ0"),
        n = r.n(i),
        s = r("xers"),
        c = r.n(s),
        d = r("qYBx"),
        u = {
          ECARD: "E卡支付",
          CHANGE_PAY: "零钱支付",
          PRIOR_USE: "提交订单",
          ALIPAY_HBFQ: "花呗分期",
          BANK_CARD: "银行卡支付",
          PEERPAY: "找人代付",
          CASH_ON_DELIVERY: "货到付款",
          PF_OFFLINE_PAY: "线下支付",
          WX_JS: "微信支付",
          WX_H5: "微信支付",
          WX_APPLET: "微信支付",
          WX_APP: "微信支付",
          BANK_TRANSFER_LARGE: "银行转账",
        };
      function l(e, t, r) {
        var o,
          a,
          i,
          n = e.presaleStartTime,
          s = e.presaleEndTime;
        if (0 === e.presaleTimeType) {
          var c = new Date(n);
          return (
            (((o = c),
            (a = r.serverTime),
            (i = new Date(a)),
            new Date(
              i.getFullYear(),
              i.getMonth(),
              i.getDate()
            ).getFullYear() === o.getFullYear())
              ? d.b.formatDate(c, "MM月DD号")
              : d.b.formatDate(c, "YYYY年MM月DD号")) + "开始发货"
          );
        }
        if (1 === e.presaleTimeType)
          return (
            (null != t && t.multiPhase ? "尾款支付" : "付款") +
            " " +
            e.presaleStartTimeAfterPay +
            " 天后发货"
          );
        var u = d.b.formatDate(new Date(n), "MM月DD号"),
          l = d.b.formatDate(new Date(s), "MM月DD号");
        return n && s
          ? "预计 " + (u === l ? u : u + " ~ " + l)
          : n
          ? u + "开始发货"
          : s
          ? "最晚" + l + "发货"
          : "";
      }
      var p = {
          isSelectedSkuComb() {
            return !(!this.noneSku && !this.selectedSkuComb);
          },
          isPhysical() {
            return this.goodsType.isPhysical;
          },
          isVirtualTicket() {
            return this.goodsType.isVirtualTicket;
          },
          isPriorUse() {
            return "PRIOR_USE" === this.skuPayChannel;
          },
          isCanPay() {
            return !this.lockState.isLocked;
          },
          isLoading() {
            return this.lockState.isLocked && "loading" === this.lockState.type;
          },
          isOrderWarning() {
            return this.lockState.isLocked && "loading" !== this.lockState.type;
          },
          payBtnDisabled() {
            return (
              !this.isSelectedSkuComb ||
              this.isPriorUse ||
              this.isOrderWarning ||
              !this.prepareIsReady ||
              this.isFirstOpen
            );
          },
          freight() {
            var { postage: e = 0 } = this.pay;
            return e ? "含运费¥" + n()(String(e)) : 0;
          },
          payText() {
            return this.isOrderWarning || this.isPriorUse
              ? "提交订单"
              : this.payRechargeInfo && this.payRechargeInfo.btnText
              ? this.payRechargeInfo.btnText
              : (this.prepareIsReady &&
                  0 != +this.orderFinalPrice &&
                  this.skuPayChannel &&
                  u[this.skuPayChannel]) ||
                "立即支付";
          },
          payPriceFormat() {
            return this.showPriorUseSummary
              ? "0.00"
              : this.payRechargeInfo && this.payRechargeInfo.btnText
              ? this.payRechargeInfo.amount
              : this.orderFinalPrice;
          },
          prepareIsReady() {
            return this.selectedSkuComb && !c()(this.prepareData);
          },
          orderWarning() {
            var { isLocked: e, type: t, message: r } = this.lockState,
              o = "";
            return e && "loading" !== t && (o = r || ""), o;
          },
          pointStr() {
            var { points: e = {}, pointsName: t = "" } = this;
            return e.usePoints && e.available ? [e.totalPoints, t] : "";
          },
          preSaleTips() {
            var e,
              t = null == (e = this.goods.list) ? void 0 : e[0];
            return t && t.presale ? l(t, this.pay, this.display) : "";
          },
        },
        h = r("eijD"),
        f = r("9ZMt"),
        v = r("AGZf"),
        m = r("z9IR"),
        y = r("tS13"),
        g = r("Tewj"),
        b = r("9Eee"),
        C = r("YeA1"),
        O = r("PKOW"),
        P = r("81cE"),
        S = r("w/BL"),
        k = r("US/N");
      function I(e, t) {
        void 0 === t && (t = {});
        var r = t;
        try {
          r = JSON.parse(e);
        } catch (e) {}
        return r;
      }
      var { dmc: T } = Object(C.a)(),
        E = {
          state: {
            showPopup: !1,
            showDiscountDetail: !1,
            showSubmitBlock: !0,
            bookKey: null,
            noneSku: !0,
            selectedSkuComb: null,
            supportSkuDirectOrder: !1,
            skuHeight: 0,
            stepperMaxLimit: 1,
            stepperMinLimit: 1,
            themeVars: "",
            goodsType: {},
            skuPayChannel: "",
            lockState: {},
            isFirstOpen: !0,
            pay: {},
            prepareData: null,
            orderFinalPrice: 0,
            payRechargeInfo: {},
            expressWaySelected: {},
            showPrivacyBillRulePopup: !1,
            expressPostageItems: [],
            currentExpressWay: 0,
            points: {},
            pointsName: "",
            goods: {},
            display: {},
            kdtId: 0,
            showEvent: {},
            forcePoiSelect: !1,
            localSelfFetch: null,
            localAddressId: "",
            isHouseNumberRequired: !1,
            isShowForcePoiSelectAddress: !1,
          },
          getters: p,
          getActions: function (e) {
            return {
              handleSkuOrderShow(e) {
                this.showEvent = e;
              },
              onSkuDirectOrderUpdateSku(e) {
                var {
                  noneSku: t,
                  selectedSkuComb: r,
                  quotaLimit: { stepperMinLimit: o, stepperMaxLimit: a },
                } = e;
                t &&
                  r &&
                  (r.messages && (r.messages = [].slice.call(r.messages)),
                  r.priceTags && (r.priceTags = [].slice.call(r.priceTags)),
                  r.tags && (r.tags = [].slice.call(r.tags))),
                  (this.selectedSkuComb = r),
                  (this.stepperMaxLimit = a),
                  (this.stepperMinLimit = o),
                  (this.noneSku = t);
              },
              setBookKey(e) {
                this.bookKey = e;
              },
              triggerTradeSubmit(t) {
                var r = Object(b.a)(
                  {
                    submitAction: y.d.TRADE_SUBMIT,
                    skuScene: y.c.BUY,
                    skuDirectOrderScene: "sku",
                    supportSkuDirectOrder: this.supportSkuDirectOrder,
                    activityName: null == t ? void 0 : t.activityName,
                    tradeData: null == t ? void 0 : t.tradeData,
                    pluginsResult: null == t ? void 0 : t.pluginsResult,
                  },
                  {}
                );
                (this.tradeSubmitParams = t), e.event.emit("submit:act", r);
              },
              calculateSkuHeight() {
                g.default.trigger("calculateSkuHeight");
              },
              setSkuHeight(e) {
                this.skuHeight = e;
              },
              setLockState(t) {
                var r,
                  o,
                  a = t,
                  { display: i, goods: n } = e.data,
                  s = null == i ? void 0 : i.riskWarnShopPrompt,
                  c =
                    (null == i ? void 0 : i.prompt) ||
                    (null == n ||
                    null == (r = n.unavailable) ||
                    null == (o = r[0])
                      ? void 0
                      : o.unavailableDesc);
                (s || c) &&
                  (a = {
                    isLocked: !(!s && !c),
                    type: s ? "risk" : "unavailable",
                    message: s || c,
                  }),
                  Object.assign(e.data, { lockState: a }),
                  a.isLocked && clearTimeout(this.timer),
                  a.isLocked &&
                    "loading" === a.type &&
                    (this.timer = setTimeout(
                      () => this.setLockState({ isLocked: !1 }),
                      1500
                    ));
              },
              fetchShow() {
                var t = this;
                return Object(h.a)(function* () {
                  var r;
                  t.setLockState({ isLocked: !0, type: "loading" });
                  try {
                    (r = yield e.process.invokePipe("confirmOrder", {})),
                      t.setLockState({ isLocked: !1 });
                  } catch (e) {
                    var o, a;
                    Object(v.a)(
                      e.message ||
                        e.msg ||
                        (null == (o = e.data) ? void 0 : o.msg) ||
                        (null == (a = e.data) ? void 0 : a.message) ||
                        "系统繁忙，请稍后再试"
                    ),
                      t.setLockState({ isLocked: !0, type: "error" });
                  }
                  return r;
                })();
              },
              resetTradeBuyState: () =>
                Object(h.a)(function* () {
                  e.process.invoke("mutateState", (e) => {
                    e.display.openDisplayCard = !1;
                  });
                })(),
              fetchShowByBookKey(t) {
                var r = this;
                return Object(h.a)(function* () {
                  r.setLocalSelfFetch();
                  var a,
                    { invoice: i } = e.data,
                    { id: n, list: s = [] } = e.data.address || {},
                    c = Object(o.a)({}, t, {
                      useCustomLoading: !0,
                      isOverlyingCoupon: !0,
                      useLocal: !1,
                      usePrefetch: !1,
                      query: t,
                      useOptimalCalculate: e.data.isSupportEstimated || !1,
                    }),
                    d = s.find((e) => e.id === n);
                  d && (c.addressId = d.id),
                    r.setLockState({ isLocked: !0, type: "loading" });
                  try {
                    e.data.orderCreated
                      ? yield e.process.invoke("resetTradeBuyCore")
                      : yield r.resetTradeBuyState(),
                      v.a.loading(),
                      (a = yield e.process.invokePipe("prepareByBookKey", c)),
                      r.setLockState({ isLocked: !1 }),
                      v.a.clear(),
                      e.process.invoke("mutateState", (t) => {
                        if (
                          ((t.display.asyncOrder = !1), r.selectedContactId)
                        ) {
                          var { list: a = [] } = e.data.contact || {},
                            n = a.find((e) => e.id === r.selectedContactId);
                          if (n) {
                            var {
                              id: s,
                              telephone: c,
                              userName: d,
                              userId: u,
                            } = n;
                            t.contact = Object(o.a)({}, t.contact, {
                              id: s,
                              telephone: c,
                              userName: d,
                              userId: u,
                            });
                          }
                        }
                        i && (t.invoice = i);
                        var { address: l, expressType: p } = e.data;
                        l &&
                          l.isSelfFetchDefault &&
                          "self-fetch" === p &&
                          !r.localAddressId &&
                          (t.address.id = "");
                      }),
                      r.updateLocalAddress(),
                      r.updateLocalSelfFetch();
                  } catch (t) {
                    346000010 !== t.code || "goods_detail" !== e.data.pageKey
                      ? Object(v.a)(t.msg || "系统繁忙，请稍后重试")
                      : v.a.clear(),
                      r.setLockState({ isLocked: !0, type: "error" });
                  }
                  return (r.isFirstOpen = !1), a;
                })();
              },
              createOrder(t) {
                var r = this;
                return Object(h.a)(function* () {
                  if (e.data.orderCreated) return Promise.resolve();
                  if ("self-fetch" === e.data.expressType && !e.data.contact.id)
                    return Object(v.a)("请选择提货人"), Promise.reject();
                  r.setLockState({ isLocked: !0, type: "loading" });
                  var o = yield e.process.invokePipe("createOrder", {
                      confirmRisk: t,
                    }),
                    { orderNo: a, prePaymentPreparation: i } = o,
                    {
                      cashierSalt: n,
                      cashierSign: s,
                      partnerId: c,
                      prepayId: d,
                      bizExt: u,
                    } = i;
                  return (
                    (e.data.payParams = {
                      orderNo: a,
                      cashierSalt: n,
                      cashierSign: s,
                      partnerId: c,
                      prepayId: d,
                      tradeBizExt: I(u),
                    }),
                    o
                  );
                })();
              },
              startPay() {
                this.setLockState({ isLocked: !0, type: "loading" }),
                  e.process
                    .invoke("checkOrderPay")[0]
                    .then(() => {
                      e.process.invoke("startPay", { usePreCashier: !0 })[0];
                    })
                    .finally(() => {
                      this.setLockState({ isLocked: !1 });
                    });
              },
              goToPayFail() {
                var { orderNo: t } = e.data.orderResult;
                Object(O.f)({
                  pageType: O.b.PAY,
                  type: O.a.NAVIGATE,
                  query: { orderNo: t },
                });
              },
              onPaySuccess() {
                var {
                    orderResult: t,
                    payParams: r,
                    pay: o,
                    weappPaySuccessPath: a,
                  } = e.data,
                  { paymentPreparation: i } = t,
                  { partnerReturnUrl: n } = i,
                  { orderNo: s } = r;
                this.setLockState({ isLocked: !1 }),
                  e.event.emit("skuOrder:hide", null);
                var c = {
                    order_no: s,
                    pay_result: "success",
                    pay_money: o.realPay,
                  },
                  u = getApp().db.set(c),
                  l = a ? decodeURIComponent(a) : "/packages/order/paid/index",
                  p = d.f.args.add(l, { dbid: u });
                T.navigate(p);
              },
              setOrderItemNum(t) {
                this.tradeSubmitParams &&
                  this.tradeSubmitParams.tradeData &&
                  (this.tradeSubmitParams.tradeData.selectedNum = t),
                  e.process
                    .invoke(
                      "mutateState",
                      (e) => ((e.order.items[0].num = t), [])
                    )[0]
                    .then(() => {
                      this.fetchShow();
                    });
              },
              handleFetchShow() {
                this.prepareIsReady && this.fetchShow();
              },
              skuNumChange(e) {
                this.bookKey &&
                  e &&
                  this.isSelectedSkuComb &&
                  this.setOrderItemNum(e);
              },
              handleSkuHide() {
                this.setBookKey(null),
                  (this.isFirstOpen = !0),
                  this.setLockState({ isLocked: !1 });
              },
              fetchSkuByBookKey(e) {
                this.supportSkuDirectOrder &&
                  (e
                    ? (this.setBookKey(e.bookKey), this.fetchShowByBookKey(e))
                    : this.setLockState({ isLocked: !1 }));
              },
              goodsBookLoad() {
                this.setBookKey(null),
                  this.setLockState({ isLocked: !0, type: "loading" });
              },
              doSubmit(t) {
                void 0 === t && (t = !1),
                  e.process.invoke("validateSkuComb")[0].then(() => {
                    var r = this.isCanPay && this.prepareIsReady;
                    if (t || r) {
                      if ((Object(S.j)(), e.data.orderCreated))
                        return m.a
                          .confirm({
                            message:
                              "当前商品已创建待支付订单，您可直接前往支付",
                            showCancelButton: !0,
                            cancelButtonText: "重新下单",
                            confirmButtonText: "前往支付",
                          })
                          .then(() => {
                            var { orderNo: t } = e.data.orderResult || {};
                            Object(O.f)({
                              pageType: O.b.PAY,
                              type: O.a.REDIRECT,
                              query: { orderNo: t },
                            });
                          })
                          .catch(() => {
                            this.triggerTradeSubmit(this.tradeSubmitParams);
                          });
                      this.createOrder().then(() => {
                        Object(S.i)(), this.startPay();
                      });
                    }
                  });
              },
              toggleDiscountDetail(e) {
                this.showDiscountDetail =
                  void 0 === e ? !this.showDiscountDetail : e;
                var t = this.showDiscountDetail ? 400 : 0;
                setTimeout(() => {
                  this.showSubmitBlock = !this.showDiscountDetail;
                }, t);
              },
              setExpressWaySelected(e) {
                var { currentExpressType: t, postageItems: r } = e || {},
                  a =
                    ((r || []).find((e) => e.available) || {}).expressType || 0,
                  i = "number" == typeof t ? t : a,
                  n = r.find((e) => e.expressType === i),
                  s = Object(o.a)({}, n || {});
                this.prepareIsReady
                  ? (s.postage = Object(P.a)(s.postage, s.expressPayMode))
                  : (s.postage = "");
                var c = r.map((e) => {
                  var t =
                    e.expressType === s.expressType
                      ? Object(P.a)(e.postage, e.expressPayMode)
                      : "";
                  return Object(o.a)({}, e, {
                    cellTitle: e.postageTitle + " " + t,
                  });
                });
                (this.currentExpressWay = i),
                  (this.expressPostageItems = c || []),
                  (this.expressWaySelected = s);
              },
              togglePrivacyBillRulePopup(e) {
                void 0 === e && (e = !this.showPrivacyBillRulePopup),
                  (this.showPrivacyBillRulePopup = e);
              },
              beforeCreateValidateEffect(e) {
                var { type: t } = e;
                switch (t) {
                  case "validateAddress:toEdit":
                    this.onAddressCardEdit();
                    break;
                  case "validateSelfFetch:selectTime":
                    this.handleChangeSelfFetchTimePopupShow(!0);
                    break;
                  case "validateSelfFetch:selectPoint":
                    this.handleChangeAddressListPopupShow(!0);
                    break;
                  case "validateLocalDelivery:show":
                    this.handleChangeTimePickerPopupShow(!0);
                }
              },
              onAddressAdd() {
                this.toAddressEditPage(1);
              },
              onAddressCardEdit(t) {
                var { id: r, list: o } = e.data.address,
                  { forcePoiSelect: a } = this,
                  i = e.lambdas.setDb({
                    list: o,
                    forcePoiSelect: a,
                    id: t || r,
                    delta: 1,
                  });
                this.toAddressEditPage(i);
              },
              toAddressEditPage(e) {
                var t = this.isShowForcePoiSelectAddress,
                  { isHouseNumberRequired: r } = this,
                  o =
                    "/packages/trade-buy-subpage/order/address-edit/index?" +
                    ("dbid=" +
                      e +
                      "&isShowRetailDeliveryAddress=" +
                      t +
                      "&houseNumberRequired=" +
                      r);
                f.default.navigate({ url: o, type: "navigateTo" });
              },
              updateGuaranteeDetail() {
                var t,
                  r,
                  { guaranteeData: o, goodsBaseInfo: a, kdtId: i } = e.data;
                if (
                  null != o &&
                  null != (t = o.componentResponseList) &&
                  t.length
                ) {
                  var n = [
                      "quality_goods",
                      "self_owned_brand",
                      "authorized_brand",
                    ],
                    s =
                      (null == (r = o.componentResponseList)
                        ? void 0
                        : r.filter((e) => !n.includes(e.key))) || [],
                    { alias: c, id: d } = a;
                  Object(k.default)({
                    path: "/wscassets/api/security/guarantee/fetchDetailProps3",
                    method: "POST",
                    data: {
                      alias: c,
                      pageSource: "STANDARD",
                      featureKeys: s,
                      orderCreateTime: 0,
                      kdtId: i,
                      tpKey: "",
                      tpVersion: 1,
                      isFxg: !0,
                    },
                  }).then((t) => {
                    var { securedFeatureList: r = [] } = t,
                      a = {
                        mainSupportContent: o.componentResponseList,
                        securedItemSnapshotList: [
                          {
                            alias: c,
                            goodsId: d,
                            securedComponentList: r.map((e) => {
                              var {
                                featureContent: t,
                                featureDesc: r,
                                featureKey: o,
                                featureSort: a,
                              } = e;
                              return { content: t, desc: r, key: o, sort: a };
                            }),
                          },
                        ],
                      };
                    e.process.invoke(
                      "mutateState",
                      (e) => ((e.display.yzGuaranteeInfo = a), [])
                    );
                  });
                }
              },
              handlePointConfirm() {
                e.process.invoke("handleEmptySku"),
                  this.setLockState({ isLocked: !0, type: "error" });
              },
              handleResetState() {},
              setLocalSelfFetch() {
                var { expressType: t, selfFetch: r } = e.data;
                "self-fetch" === t && (this.localSelfFetch = r);
              },
              handleSelectLocalAddress(e) {
                this.localAddressId = e;
              },
              updateLocalSelfFetch() {
                var { shop: e } = this.localSelfFetch || {};
                e &&
                  (this.handleSelectSelfFetchAddress(e),
                  this.fetchShow(),
                  (this.localSelfFetch = null));
              },
              updateLocalAddress() {
                this.localAddressId &&
                  (this.handleChangeExpressTab(0),
                  e.process.invoke("selectAddress", this.localAddressId));
              },
            };
          },
        },
        D = {
          selectAddress() {
            var e,
              { list: t = [] } = this.address;
            return 0 === t.length
              ? null
              : this.isPhysical && null != (e = this.currentAddress) && e.id
              ? this.currentAddress
              : t.find((e) => e.isDefault) || t[0];
          },
          selectContact() {
            var e,
              { id: t = 0, list: r = [] } = this.contact;
            return t && 0 !== r.length
              ? null != (e = this.currentContact) && e.id
                ? this.currentContact
                : r.find((e) => e.isDefault) || r[0]
              : null;
          },
          isOnlySuportSelfFetch() {
            var {
              supportExpress: e,
              supportLocalDelivery: t,
              supportSelfFetch: r,
            } = this.distribution || {};
            return !e && !t && r;
          },
        },
        w = r("Hrzu"),
        _ = r("Uol7"),
        j = function () {
          return Object(k.default)({
            origin: "cashier",
            withCredentials: !0,
            method: "POST",
            path: "/wsctrade/uic/contact/getContactList.json",
            config: _.a,
          });
        },
        A = [],
        x = r("64Ju"),
        N = r("3tyi"),
        R = r("5Mqe"),
        L = r.n(R),
        F = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        M = (e) => ((e = e.split("")), F.filter((t, r) => "1" === e[r]));
      function B() {
        return (B = Object(h.a)(function* (e) {
          var t = yield Object(k.default)({
            origin: "cashier",
            withCredentials: !0,
            path: "/pay/wsctrade/order/buy/v2/getSelfFetchTime.json",
            method: "POST",
            data: {
              kdtId: e.kdtId,
              offlineId: e.id,
              fromApp: f.default.getEnv(),
            },
          });
          return {
            timeBucket: t.timeBucket.map((e) => ({
              openTime: e.startTime,
              closeTime: e.endTime,
              weekdays: M(e.switchs),
            })),
            timeSpan: t.timeSpan,
            aheadMax: { value: t.aheadMax, type: t.aheadMaxType },
            aheadMin: { value: t.aheadMin, type: t.aheadMinType },
          };
        })).apply(this, arguments);
      }
      function U(e) {
        var {
          location: t,
          kdtId: r,
          seller: o,
          goods: a,
          cityCode: i,
          firstOneFill: n = !1,
        } = e;
        return (
          null != o && o.storeId
            ? (function (e) {
                var { location: t, kdtId: r, seller: o, goods: a } = e,
                  i = [].concat(a.list, a.unavailable);
                return Object(k.default)({
                  origin: "cashier",
                  withCredentials: !0,
                  path: "/pay/wsctrade/order/buy/v2/getSelfFetch.json",
                  method: "POST",
                  data: {
                    lat: +t.lat || -256,
                    lng: +t.lng || -256,
                    kdtId: r,
                    storeId: o.storeId,
                    items: i.map((e) =>
                      Object(N.a)(e, ["goodsId", "skuId", "num"])
                    ),
                  },
                });
              })({ location: t, kdtId: r, seller: o, goods: a })
            : (function (e) {
                var {
                    location: t,
                    kdtId: r,
                    seller: o,
                    goods: a,
                    cityCode: i,
                    firstOneFill: n,
                  } = e,
                  s = [].concat(a.list, a.unavailable),
                  c =
                    null == s
                      ? void 0
                      : s.map((e) => {
                          var t;
                          return null == (t = e.combo)
                            ? void 0
                            : t.subComboList.map((e) => {
                                var { goodsId: t, groupId: r, skuId: o } = e;
                                return { goodsId: t, groupId: r, skuId: o };
                              });
                        });
                c = L()(c);
                var d = {
                  lat: +t.lat || -256,
                  lng: +t.lng || -256,
                  kdtId: r,
                  firstOneFill: n,
                  storeId: o.storeId,
                  items: s.map((e) => {
                    var t;
                    return {
                      goodsId: e.goodsId,
                      skuId: e.skuId,
                      num: e.num,
                      combo: (null == e ? void 0 : e.combo) && {
                        comboType:
                          null == e || null == (t = e.combo)
                            ? void 0
                            : t.comboType,
                        subComboList: c,
                      },
                    };
                  }),
                };
                return (
                  i && (d.cityCode = i),
                  Object(k.default)({
                    origin: "cashier",
                    withCredentials: !0,
                    method: "POST",
                    path: "/pay/wsctrade/order/buy/getDefaultSelfFetch.json",
                    data: d,
                  })
                );
              })({
                location: t,
                kdtId: r,
                seller: o,
                goods: a,
                cityCode: i,
                firstOneFill: n,
              })
        ).then((e) => {
          var t;
          return (
            (e.distanceStr =
              (t = null == e ? void 0 : e.distance) > 1e3
                ? (t / 1e3).toFixed(1) + "km"
                : t > 100
                ? t + "m"
                : t < 100 && t > 0
                ? "<100m"
                : void 0),
            e
          );
        });
      }
      var G = {
          state: {
            currentAddress: {},
            currentContact: {},
            address: { id: 0, list: [] },
            contact: { id: 0, list: [] },
            isAddressFixed: !1,
            isShowAddressDeliveryPopup: !1,
            isShowContactListPopup: !1,
            isShowTimePickerPopup: !1,
            isShowSelfFetchTimePopup: !1,
            distribution: {},
            isShowAddress: !0,
          },
          getters: D,
          getActions: function (e) {
            return {
              parseOrderContactInfo(e) {
                var t;
                if (!e || !e.length) return { id: 0, list: [] };
                var r = e.sort((e, t) => t.isDefault - e.isDefault);
                return {
                  id: (null == (t = r[0]) ? void 0 : t.id) || 0,
                  list: r,
                };
              },
              fetchAddressList(t) {
                return (
                  void 0 === t && (t = !1),
                  Object(w.a)(t)
                    .then((t) => {
                      var r = this.parseOrderContactInfo(t);
                      e.process.invoke(
                        "mutateState",
                        (e) => (
                          (e.address = Object(o.a)({}, e.address, {
                            id: r.id,
                            list: r.list,
                          })),
                          ["address"]
                        )
                      );
                    })
                    .catch((t) => {
                      var r;
                      null == (r = e.hummer) ||
                        r.capture("获取用户地址或联系人失败:" + t);
                    })
                );
              },
              fetchContactList(t) {
                return (
                  void 0 === t && (t = !1),
                  (function () {
                    var e =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0];
                    return !e && A.length > 0
                      ? Promise.resolve(A)
                      : j()
                          .then(function (e) {
                            return (A = e), e;
                          })
                          .catch(function () {
                            return (A = []), [];
                          });
                  })(t)
                    .then((t) => {
                      e.process.invoke("mutateState", (e) => {
                        var r = this.parseOrderContactInfo(t);
                        return (
                          (e.contact = Object(o.a)({}, e.contact, {
                            id: r.id,
                            list: r.list,
                          })),
                          ["contact"]
                        );
                      });
                    })
                    .catch((t) => {
                      var r;
                      null == (r = e.hummer) ||
                        r.capture("获取用户地址或联系人失败:" + t);
                    })
                );
              },
              setAddressBlockFixed(e) {
                this.isAddressFixed = e;
              },
              setSelectedContactId(e) {
                Object(S.c)(), (this.selectedContactId = e);
              },
              handleAddressCellClick() {
                this.selectAddress && this.handleChangeAddressListPopupShow(!0);
              },
              handleChangeTimePickerPopupShow(e) {
                this.isShowTimePickerPopup = e;
              },
              handleChangeAddressListPopupShow(e) {
                this.isShowAddressDeliveryPopup = e;
              },
              handleChangeContactListPopupShow(e) {
                this.isShowContactListPopup = e;
              },
              handleChangeSelfFetchTimePopupShow(e) {
                this.isShowSelfFetchTimePopup = e;
              },
              handleSelfFetchTimeClick() {
                null != Object(x.a)(e.data.selfFetch)
                  ? this.handleChangeSelfFetchTimePopupShow(!0)
                  : Object(v.a)("没有可选的自提时间");
              },
              handleContactCellClick() {
                var { list: e } = this.contact || {};
                this.selectContact || (e || []).length > 0
                  ? this.handleChangeContactListPopupShow(!0)
                  : this.goToContactEdit();
              },
              goToContactEdit(e) {
                var t = e ? JSON.stringify(e) : "";
                f.default.navigate({
                  url:
                    "packages/trade-buy-subpage/order/contact/index?contactStr=" +
                    t +
                    "&textRule=normal",
                  type: "navigateTo",
                });
              },
              onLogContactClick(e) {
                this.selectContact && (e ? Object(S.m)() : Object(S.a)());
              },
              pickDefaultSelfFetch() {
                var t = this;
                return Object(h.a)(function* () {
                  if (!t.localAddressId) {
                    var {
                      kdtId: r,
                      order: o,
                      goods: a,
                      selfFetch: i = {},
                    } = e.data;
                    if (!i.shop || !i.shop.id) {
                      var n = {
                        location: {},
                        kdtId: r,
                        seller: (o || {}).seller,
                        goods: a,
                        cityCode: null == i ? void 0 : i.cityCode,
                      };
                      try {
                        var [s] = yield e.process.invoke("getLocation"),
                          c = yield s;
                        n.location = c;
                      } catch (e) {}
                      try {
                        var d = yield U(n);
                        e.logger &&
                          e.logger.log({
                            et: "custom",
                            ei: "trade_buy_get_default_self_fetch",
                            en: "获取默认自提点",
                            pt: "trade",
                            params: {
                              desc: JSON.stringify({ shop: d, params: n }),
                            },
                          }),
                          e.process.invoke("setSelfFetch", {
                            shop: d,
                            cityCode: null == d ? void 0 : d.countyId,
                            cityName: null == d ? void 0 : d.city,
                          });
                      } catch (e) {}
                    }
                  }
                })();
              },
              onChangeIsAddressShow(e) {
                this.isShowAddress = e;
              },
              handleSelectSelfFetchAddress(t) {
                var r;
                (null == (r = (e.data.selfFetch || {}).shop)
                  ? void 0
                  : r.id) !== t.id &&
                  (e.process.invoke("setSelfFetch", {
                    shop: t,
                    cityCode: t.countyId,
                    cityName: t.city,
                    time: "",
                    selfFetchStartTime: "",
                    selfFetchEndTime: "",
                  }),
                  this.handleChangeExpressTab(1),
                  this.handleSelectLocalAddress(""),
                  t.optionalSelfFetchTime && this.setSelfFetchTime(t),
                  this.handleChangeAddressListPopupShow(!1));
              },
              setSelfFetchTime: (t) =>
                Object(h.a)(function* () {
                  var r = yield (function (e) {
                    return B.apply(this, arguments);
                  })(t);
                  e.process.invoke("setSelfFetch", r);
                })(),
              handleChangeExpressTab(t) {
                e.process.invoke("switchAddressTab", { id: t }),
                  setTimeout(() => {
                    0 === t
                      ? e.process.invoke("mutateState", (e) => {
                          e.selfFetch = Object(o.a)({}, e.selfFetch, {
                            shop: {},
                          });
                        })
                      : 1 === t &&
                        e.process.invoke("mutateState", (e) => {
                          e.address.id = "";
                        });
                  });
              },
            };
          },
        },
        H = r("Bg0V"),
        Y = {
          state: {
            pickerOpts: {},
            goodsBaseInfo: {},
            goodsMetaInfo: {},
            skuData: {},
            showDatePicker: !1,
            goodsSkuData: {},
          },
          getters: {
            goodsAttributesOpt() {
              var e = (this.goodsMetaInfo || {}).supportItemProps || !0,
                { itemSalePropList: t, id: r } = this.goodsBaseInfo,
                o = e ? t : null;
              return {
                show: !!(o || []).length,
                kdtId: this.kdtId,
                goodsId: r,
                goodsAttributes: o,
                skuId: this.selectedId,
                price: (this.selectedSkuComb || {}).price || 0,
                activityName: (this.showEvent || {}).activityName,
                activityInfo: (this.skuData || {}).activityInfo,
              };
            },
            selectedId() {
              var { skuId: e, id: t } = this.selectedSkuComb || {};
              return t || e || (this.goodsSkuData.goods || {}).skuId || 0;
            },
          },
          getActions: () => ({
            onDateTimeClick(e) {
              (this.pickerOpts = e), (this.showDatePicker = !0);
            },
            onPickerCancel() {
              this.showDatePicker = !1;
            },
            onPickerConfirm(e) {
              var { type: t, index: r } = this.pickerOpts;
              "time" !== t && (e = Object(H.a)(new Date(e), t));
              var o = f.default.getGlobal("sku-message-ref");
              o && o.onDateTimerPicker(r, { detail: { value: e } }),
                this.onPickerCancel();
            },
          }),
        },
        V = [{ state: {}, getters: {}, actions: {} }, E, G, Y].reduce(
          (e, t) => {
            return (
              void 0 === (r = e) && (r = {}),
              void 0 === (a = t) && (a = {}),
              {
                state: Object(o.a)({}, r.state, a.state),
                getters: Object(o.a)({}, r.getters, a.getters),
                actions: Object(o.a)({}, r.actions, a.actions),
              }
            );
            var r, a;
          },
          {}
        );
      function W(e) {
        var t = (function (e) {
            var t = {
              onPrepareByBookKey(t) {
                var r,
                  o,
                  a,
                  i,
                  { orderCreation: n, tradeConfirmation: s } = t,
                  c =
                    (null == (r = n.config)
                      ? void 0
                      : r.paymentSuccessRedirect) || "";
                c &&
                  !c.startsWith("http") &&
                  (null == (i = n.config) || delete i.paymentSuccessRedirect);
                e.data.weappPaySuccessPath = c;
                var d =
                  (null == s ||
                  null == (o = s.extra) ||
                  null == (a = o.EXCLUDE_PAY_TOOL)
                    ? void 0
                    : a.split(",")) || [];
                e.data.excludePayTools = d;
              },
              onConfirmOrder(t) {
                var r,
                  o,
                  { tradeConfirmation: a } = t,
                  i =
                    (null == a ||
                    null == (r = a.extra) ||
                    null == (o = r.EXCLUDE_PAY_TOOL)
                      ? void 0
                      : o.split(",")) || [];
                e.data.excludePayTools = i;
              },
              "goodsBook:load": e.store.goodsBookLoad,
              "skuBookkey:finish": e.store.fetchSkuByBookKey,
              onCouponChange: e.store.fetchShow,
              "trade-buy-core:validate-effect":
                e.store.beforeCreateValidateEffect,
            };
            return (
              Object.keys(t).forEach((r) => e.event.listen(r, t[r])),
              () => {
                Object.keys(t).forEach((r) => e.event.remove(r, t[r]));
              }
            );
          })(e),
          r = (function (e) {
            var { store: t } = e,
              r = {
                "sku:num-change": t.skuNumChange,
                "orderSku:hide": t.handleSkuHide,
              };
            return (
              Object.keys(r).forEach((e) => g.default.on(e, r[e])),
              () => {
                Object.keys(r).forEach((e) => g.default.off(e, r[e]));
              }
            );
          })(e),
          o = (function (e) {
            var { store: t } = e,
              r = {
                "address-save": (r) => {
                  e.process.invoke("updateAddressState", r),
                    t.handleChangeExpressTab(0),
                    t.handleFetchShow(),
                    t.handleChangeAddressListPopupShow(!1);
                },
                "address-delete": (r) => {
                  e.process.invoke("deleteAddress", r),
                    t.selectAddress && t.handleFetchShow(),
                    t.handleChangeAddressListPopupShow(!1);
                },
                set_contact: (t) => {
                  var { contact: r, method: o } = t;
                  e.process.invoke("updateContactState", {
                    contact: r,
                    method: o,
                  });
                },
                delete_contact: (t) => {
                  e.process.invoke("deleteContact", t);
                },
                "get-state": (t) => {
                  t({ order: e.data.order });
                },
                "select-self-fetch-address": (e, r) => {
                  t.handleSelectSelfFetchAddress(e, r);
                },
              };
            return (
              Object.keys(r).forEach((t) => e.lambdas.onEvent(t, r[t])),
              () => {
                Object.keys(r).forEach((t) => e.lambdas.offEvent(t, r[t]));
              }
            );
          })(e);
        return () => {
          r(), o(), t();
        };
      }
      function z(e) {
        return (t) => (null == e || null == e.test ? void 0 : e.test(t));
      }
      var K = [
          {
            name: "addressEdit",
            pattern: /address-edit/,
            hashRoute: "#/address-edit",
            match: z(/address-edit/),
          },
          {
            name: "addressMap",
            pattern: /address-map/,
            hashRoute: "#/address-map",
            match: z(/address-map/),
          },
          {
            name: "addressCity",
            pattern: /address-city/,
            hashRoute: "#/address-city",
            match: z(/address-city/),
          },
          {
            name: "contactEdit",
            pattern: /contact-edit/,
            hashRoute: "#/contact-edit",
            match: z(/contact-edit/),
          },
        ],
        q = function (e) {
          var { path: t, query: r } = (function (e) {
            var [t, r = ""] = e.split("?"),
              [o, a] = r.split("#");
            return { path: t, query: o, hash: a };
          })(e);
          K.some((e) => {
            var { hashRoute: r, match: o } = e;
            if (o(t)) {
              return !0;
            }
            return !1;
          });
        };
      class J {
        constructor(e) {
          var t;
          (this.ctx = e.ctx),
            (this.store =
              ((t = this.ctx),
              Object(a.a)({
                state: () => Object(o.a)({}, V.state),
                getters: Object(o.a)({}, V.getters),
                actions: Object(o.a)(
                  {},
                  V.actions,
                  E.getActions(t),
                  G.getActions(t),
                  Y.getActions()
                ),
              }))),
            (this.ctx.store = this.store),
            Object(a.c)(this, [
              "supportSkuDirectOrder",
              "themeVars",
              "sku",
              "goodsType",
              "address",
              "contact",
              "currentAddress",
              "currentContact",
              "skuPayChannel",
              "lockState",
              "pay",
              "prepareData",
              "orderFinalPrice",
              "payRechargeInfo",
              "points",
              "pointsName",
              "distribution",
              "goods",
              "display",
              "goodsMetaInfo",
              "goodsBaseInfo",
              "kdtId",
              "skuData",
              "goodsSkuData",
              "forcePoiSelect",
              "isHouseNumberRequired",
              "isShowForcePoiSelectAddress",
            ]),
            this.store.updateGuaranteeDetail(),
            this.ctx.watch("guaranteeData", () => {
              this.store.updateGuaranteeDetail();
            }),
            Object(C.b)(this, ["extra", "forcePoiSelect"], {
              callback() {
                var e,
                  t,
                  r,
                  o,
                  a,
                  i,
                  { HOUSE_NUMBER_REQUIRED: n } = this.ctx.data.extra || {},
                  { forcePoiSelect: s } = this.ctx.data;
                this.ctx.data.isHouseNumberRequired = s && !!+n;
                var c = app.getShopInfoSync() || {};
                (o = null == (e = c.shopMetaInfo) ? void 0 : e.shop_role),
                  (a = null == (t = c.shopMetaInfo) ? void 0 : t.shop_topic),
                  (i = null == (r = c.shopMetaInfo) ? void 0 : r.shop_type),
                  (this.ctx.data.isShowForcePoiSelectAddress =
                    s &&
                    this.checkWscSingleStore({
                      shopRole: o,
                      shopTopic: a,
                      shopType: i,
                    }));
              },
            }),
            (this.offEvent = W(this.ctx)),
            (this.undefProcess = (function (e) {
              var t,
                r = {
                  modifyCreateOrderOrderMark:
                    ((t = Object(h.a)(function* (t) {
                      return (
                        (t.source.orderMark = "wx_shop"),
                        (t.source.platform = "weapp"),
                        (t.config.isFromItemDetail = !0),
                        (t.extensions.ATTR_SOURCE_PAGE = e.data.pageKey || ""),
                        (t.extensions.USE_OPTIMAL_CALCULATE = e.data
                          .isSupportEstimated
                          ? "1"
                          : "0"),
                        t
                      );
                    })),
                    function (e) {
                      return t.apply(this, arguments);
                    }),
                  goToOrderSubPage: q,
                  onPaySuccess: e.store.onPaySuccess,
                  goToPayFail: e.store.goToPayFail,
                  submitOrder: e.store.doSubmit,
                };
              return (
                Object.keys(r).forEach((t) => e.process.define(t, r[t])),
                () => {
                  Object.keys(r).forEach((t) => e.process.undef(t, r[t]));
                }
              );
            })(this.ctx));
        }
        checkWscSingleStore(e) {
          var { shopRole: t, shopTopic: r, shopType: o } = e || {};
          return 0 === t && 0 === r && [0, 2, 9].includes(o);
        }
        pageDestroyed() {
          this.offEvent && this.offEvent(),
            this.undefProcess && this.undefProcess();
        }
      }
    },
    SEvj: function (e, t, r) {
      r.d(t, "d", function () {
        return o;
      }),
        r.d(t, "c", function () {
          return a;
        }),
        r.d(t, "a", function () {
          return i;
        }),
        r.d(t, "b", function () {
          return n;
        }),
        r.d(t, "e", function () {
          return s;
        });
      var o = {
          message: "",
          showCancelButton: !1,
          confirmButtonText: "我知道了",
          cancelButtonText: "取消",
        },
        a = "请确认是否已完成支付",
        i = "CASH_ON_DELIVERY",
        n = "您正在选择货到付款，下单后由商家发货，送货上门并收款。",
        s = {
          CHANGE_PAY: "有赞零钱支付",
          ECARD: "有赞E卡支付",
          PRIOR_USE: "先用后付",
          INSTALMENT: "有赞分期支付",
          ALIPAY_WAP: "支付宝支付",
          ALIPAY_AGREEMENT: "支付宝支付",
          ALIPAY_APPLET: "支付宝支付",
          ALIPAY_FLOWER: "花呗支付",
          ALIPAY_HBFQ: "花呗分期支付",
        };
    },
    T5YU: function (e, t, r) {
      r.d(t, "b", function () {
        return a;
      }),
        r.d(t, "a", function () {
          return i;
        });
      var o = r("US/N");
      function a(e) {
        return Object(o.requestV2)({
          path: "/wscgoods/seckill-api/get-question.json?questionId=" + e,
          withCredentials: !0,
        });
      }
      function i(e) {
        return Object(o.requestV2)({
          path: "wscgoods/seckill-api/seckill-question-remind.json",
          data: e,
          method: "POST",
          withCredentials: !0,
        });
      }
    },
    TlkG: function (e, t, r) {
      r.d(t, "a", function () {
        return o;
      }),
        r.d(t, "b", function () {
          return a;
        }),
        r.d(t, "c", function () {
          return d;
        }),
        r.d(t, "d", function () {
          return u;
        });
      var o = {
          bargain: 1,
          benefit: 3,
          forceRiseFollower: 7,
          seckill: 8,
          luckyDrawGroup: 9,
        },
        a = { bargain: 0 },
        i = {
          title: "成为店铺粉丝立享福利价",
          subTitle: "还能了解最新优惠信息",
          btnText: "成为粉丝",
        },
        n = {
          title: "成为店铺粉丝才能发起砍价",
          subTitle: "还能了解最新优惠信息",
          btnText: "成为粉丝",
        },
        s = {
          title: "成为店铺粉丝才能参与抽奖",
          subTitle: "还能了解最新优惠信息",
          btnText: "成为粉丝",
        },
        c = { title: "成为店铺粉丝才能购买" };
      function d(e) {
        var { bizCode: t, bizSubCode: r } = void 0 === e ? {} : e;
        return t === o.bargain && r === a.bargain
          ? "bargain"
          : t === o.benefit
          ? "benefit"
          : t === o.luckyDrawGroup
          ? "luckyDrawGroup"
          : t === o.forceRiseFollower
          ? "forceRiseFollower"
          : t === o.seckill
          ? "seckill"
          : "";
      }
      function u(e) {
        var { bizCode: t, bizSubCode: r } = e;
        return t === o.bargain && r === a.bargain
          ? n
          : t === o.benefit
          ? i
          : t === o.luckyDrawGroup
          ? s
          : t === o.forceRiseFollower && c;
      }
    },
    VbWc: function (e, t, r) {
      r.d(t, "a", function () {
        return o;
      }),
        r.d(t, "b", function () {
          return a;
        });
      var o = function () {
          for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
            t[o] = arguments[o];
          return r
            .e("packages/async-main/chunk")
            .then(r.t.bind(null, "gyjr", 7))
            .then((e) => e.getProtocolData(...t));
        },
        a = function () {
          for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
            t[o] = arguments[o];
          return r
            .e("packages/async-main/chunk")
            .then(r.t.bind(null, "CV91", 7))
            .then((e) => e.protocolSign(...t));
        };
    },
    WwLc: function (e, t, r) {
      r.d(t, "d", function () {
        return o;
      }),
        r.d(t, "f", function () {
          return a;
        }),
        r.d(t, "i", function () {
          return i;
        }),
        r.d(t, "a", function () {
          return n;
        }),
        r.d(t, "j", function () {
          return s;
        }),
        r.d(t, "e", function () {
          return c;
        }),
        r.d(t, "g", function () {
          return d;
        }),
        r.d(t, "c", function () {
          return u;
        }),
        r.d(t, "b", function () {
          return l;
        }),
        r.d(t, "h", function () {
          return p;
        }),
        r.d(t, "k", function () {
          return h;
        });
      var o = 2,
        a = { ASYNC_SEND: 1000030072, BIND_MOBILE: 1000030078 },
        i = { MONEY: 1, DISCOUNT: 2, GOODS: 3, MEET_GIVE: 4 },
        n = 1,
        s = { SELF: 0, ONE: 1, TWO: 2, THREE: 3, FOUR: 4, ERR: 99 },
        c = {
          1000030029: "FETCHED",
          1000030071: "FETCHED",
          1000030072: "ASYNC",
        },
        d = {
          FETCHED: { title: "你已领过该礼包", btnText: "查看详情" },
          ASYNC: {
            title: "送你一个优惠礼包",
            desc: "请在个人中心优惠券列表查看",
            btnText: "立即查看",
          },
          FAIL: { title: "来晚一步，抢光了" },
        },
        u = { 10007: "新人", 10008: "进店" },
        l = { NEW: 10007, OLD: 10008 },
        p = {
          CARD: { KEY: 1, VALUE: "card" },
          CODE: { KEY: 2, VALUE: "code" },
        },
        h = { 1: "首页", 2: "商详页", 3: "社区团购", 4: "微页面" };
    },
    "Y+cZ": function (e, t, r) {
      var o = r("e5r9");
      r.d(t, "ActivityName", function () {
        return o.a;
      });
      r("sDGD"), r("0HbT"), r("y+Xi");
    },
    YcCB: function (e, t, r) {
      r.d(t, "b", function () {
        return c;
      }),
        r.d(t, "e", function () {
          return a;
        }),
        r.d(t, "a", function () {
          return i;
        }),
        r.d(t, "d", function () {
          return n;
        }),
        r.d(t, "c", function () {
          return s;
        });
      var o = r("US/N");
      function a(e) {
        return Object(o.default)({
          path: "/prepaid/recommend/api/card/giftcard/recharge/agreement/sign.json",
          method: "POST",
          origin: "cashier",
          data: e,
          withCredentials: !0,
        });
      }
      function i(e) {
        return Object(o.default)({
          path: "/prepaid/recommend/api/card/giftcard/recharge/pre/order.json",
          method: "POST",
          origin: "cashier",
          data: e,
          withCredentials: !0,
        });
      }
      function n(e) {
        return Object(o.default)({
          path: "/prepaid/recommend/api/card/recommend/recharge/status.json",
          method: "GET",
          origin: "cashier",
          data: e,
          withCredentials: !0,
        });
      }
      function s(e) {
        return Object(o.default)({
          path: "/prepaid/recommend/api/card/recharge/giftpacks.json",
          method: "POST",
          origin: "cashier",
          data: e,
          withCredentials: !0,
        });
      }
      function c(e) {
        return Object(o.default)({
          path: "/prepaid/api/card/query/recharge/free/order/status.json",
          method: "GET",
          data: e,
          withCredentials: !0,
        });
      }
    },
    Yiq8: function (e, t, r) {
      r.d(t, "f", function () {
        return i;
      }),
        r.d(t, "b", function () {
          return n;
        }),
        r.d(t, "e", function () {
          return s;
        }),
        r.d(t, "d", function () {
          return c;
        }),
        r.d(t, "q", function () {
          return d;
        }),
        r.d(t, "a", function () {
          return u;
        }),
        r.d(t, "c", function () {
          return l;
        }),
        r.d(t, "o", function () {
          return p;
        }),
        r.d(t, "m", function () {
          return h;
        }),
        r.d(t, "g", function () {
          return f;
        }),
        r.d(t, "n", function () {
          return v;
        }),
        r.d(t, "j", function () {
          return m;
        }),
        r.d(t, "h", function () {
          return y;
        }),
        r.d(t, "i", function () {
          return g;
        }),
        r.d(t, "l", function () {
          return b;
        }),
        r.d(t, "p", function () {
          return C;
        }),
        r.d(t, "k", function () {
          return O;
        });
      var o = r("Fcif"),
        a = r("hvsR");
      function i(e) {
        void 0 === e && (e = {}),
          Object(a.b)(
            "view",
            "prepaid_card_show",
            "储值卡组件曝光",
            Object(o.a)({}, e, { component: "prepaid_recommend" })
          );
      }
      function n(e) {
        void 0 === e && (e = {}),
          Object(a.b)(
            "click",
            "close_pay_list",
            "储值推荐-主动关闭收银台",
            Object(o.a)({}, e, { component: "prepaid_recommend" })
          );
      }
      function s(e) {
        void 0 === e && (e = {}),
          Object(a.b)(
            "click",
            "on_recharge",
            "储值推荐-充值入口",
            Object(o.a)({}, e, { component: "prepaid_recommend" })
          );
      }
      function c(e) {
        void 0 === e && (e = {}),
          Object(a.b)(
            "click",
            "on_close",
            "储值推荐-充值关闭",
            Object(o.a)({}, e, { component: "prepaid_recommend" })
          );
      }
      function d(e) {
        void 0 === e && (e = {}),
          Object(a.b)(
            "click",
            "start_pay",
            "储值推荐-开始充值",
            Object(o.a)({}, e, { component: "prepaid_recommend" })
          );
      }
      function u() {
        Object(a.b)("click", "online_freeOrder_choose", "选择充值免单");
      }
      function l(e) {
        Object(a.b)(
          "click",
          "online_freeOrder_choose_rule",
          "充值免单选择规则",
          e
        );
      }
      function p(e) {
        void 0 === e && (e = {}),
          Object(a.b)(
            "view",
            "rechargeList_show",
            "下单页充值列表-曝光",
            Object(o.a)({}, e, { component: "tradeRechargeList" })
          );
      }
      function h(e) {
        void 0 === e && (e = {}),
          Object(a.b)(
            "click",
            "rechargeList_select",
            "下单页充值列表-选择档位",
            Object(o.a)({}, e, { component: "tradeRechargeList" })
          );
      }
      function f(e) {
        void 0 === e && (e = {}),
          Object(a.b)(
            "click",
            "rechargeList_closeGiftPack",
            "下单页充值列表-关闭礼包弹窗",
            Object(o.a)({}, e, { component: "tradeRechargeList" })
          );
      }
      function v(e) {
        void 0 === e && (e = {}),
          Object(a.b)(
            "click",
            "rechargeList_selectGiftPack",
            "下单页充值列表-选择礼包",
            Object(o.a)({}, e, { component: "tradeRechargeList" })
          );
      }
      function m(e) {
        void 0 === e && (e = {}),
          Object(a.b)(
            "view",
            "rechargeList_exclusionShow",
            "下单页充值列表-展示互斥弹窗",
            Object(o.a)({}, e, { component: "tradeRechargeList" })
          );
      }
      function y(e) {
        void 0 === e && (e = {}),
          Object(a.b)(
            "click",
            "rechargeList_exclusionCancel",
            "下单页充值列表-互斥点击取消",
            Object(o.a)({}, e, { component: "tradeRechargeList" })
          );
      }
      function g(e) {
        void 0 === e && (e = {}),
          Object(a.b)(
            "click",
            "rechargeList_exclusionConfirm",
            "下单页充值列表-互斥点击去充值",
            Object(o.a)({}, e, { component: "tradeRechargeList" })
          );
      }
      function b(e) {
        void 0 === e && (e = {}),
          Object(a.b)(
            "click",
            "rechargeList_recharge",
            "下单页充值列表-点击充值",
            Object(o.a)({}, e, { component: "tradeRechargeList" })
          );
      }
      function C(e) {
        void 0 === e && (e = {}),
          Object(a.b)(
            "custom",
            "rechargeList_success",
            "下单页充值列表-充值成功",
            Object(o.a)({}, e, { component: "tradeRechargeList" })
          );
      }
      function O(e) {
        void 0 === e && (e = {}),
          Object(a.b)(
            "custom",
            "rechargeList_fail",
            "下单页充值列表-充值失败",
            Object(o.a)({}, e, { component: "tradeRechargeList" })
          );
      }
    },
    ZLeZ: function (e, t, r) {
      r.d(t, "b", function () {
        return a;
      }),
        r.d(t, "d", function () {
          return i;
        }),
        r.d(t, "a", function () {
          return n;
        }),
        r.d(t, "c", function () {
          return s;
        });
      var o = r("US/N"),
        a = (e, t, r, a) =>
          Object(o.default)({
            path: "/wscgoods/makeuporder/comboList.json",
            data: { goodsId: e, skuId: t, randomString: r, offlineId: a },
          }),
        i = (e, t) =>
          Object(o.default)({
            path: "/wscgoods/makeuporder/updateComboPrice.json",
            method: "POST",
            data: { goodsList: e, offlineId: t },
          }),
        n = (e) =>
          Promise.all(
            e.map((e) =>
              Object(o.default)({
                path: "/wscshop/trade/cart/goods.json",
                method: "POST",
                data: e,
              })
                .then(() => ({ success: !0 }))
                .catch(() => ({ success: !1 }))
            )
          ),
        s = (e) =>
          Object(o.default)({
            path: "/wsctrade/cart/selectGoods.json",
            method: "POST",
            data: e,
          });
    },
    ZSrH: function (e, t, r) {
      r.d(t, "a", function () {
        return o;
      }),
        r.d(t, "b", function () {
          return a;
        }),
        r.d(t, "c", function () {
          return i;
        });
      var o = (e, t) =>
          e.map((e) => ({
            activityId: 0,
            activityType: "",
            cartBizMarkDTO: { cartBizMark: { tpps: "" } },
            disableSelect: !1,
            goodsId: e.itemId,
            kdtId: t,
            messages: "",
            num: 1,
            payPrice: e.promotionTotalPrice,
            skuId: e.skuId,
            storeId: e.storeId,
            propertyIds: JSON.stringify(e.propertyIds),
          })),
        a = (e, t) => ({
          activityAlias: "",
          activityId: 0,
          cartId: e.cartId,
          goodsId: e.itemId,
          kdtId: t,
          skuId: e.skuId,
        }),
        i = (e) => e.map((e) => ({ itemId: e.itemId, skuId: e.skuId }));
    },
    Zflq: function (e, t, r) {
      r.d(t, "a", function () {
        return L;
      });
      var o = r("Fcif"),
        a = {
          state: {
            themeColors: {},
            points: {
              usePoints: "",
              userPoints: "",
              totalPoints: "",
              available: "",
              externalPoint: "",
            },
            pointsName: "积分",
          },
          getters: {
            themeStyle() {
              return "--theme-general:" + this.themeColors.general;
            },
            pointsDescription() {
              var { points: e, point: t, pointsName: r } = this;
              return "共" + t + r + "，本单抵扣" + e.totalPoints + r;
            },
            point() {
              var { points: e } = this;
              return e.externalPoint || e.userPoints;
            },
          },
          actions: {},
        },
        i = 1,
        n = 2,
        s = {
          state: {
            themeColors: {},
            isShowPointDeductionPrompt: !1,
            isShowPointDeductionDialog: !1,
            pointDeduction: { status: 0, isUse: !0 },
            pointsName: "积分",
            orderCreated: !1,
          },
          getters: {
            useConditions() {
              var e = [],
                { pointsName: t } = this,
                {
                  minAmount: r,
                  rate: o,
                  maxDeductionAmount: a,
                  maxDeductionType: s,
                  maxDeductionRate: c,
                  pointDeductionRatioType: d,
                  deductionRequiredPoints: u,
                  deductionAmount: l,
                } = this.pointDeduction || {},
                p = 2 === d,
                h = p ? u : o,
                f = p ? Math.max(l, r / 100) : r / 100,
                v = 1;
              return (
                e.push(v++ + "、订单金额大于" + f + "元"),
                e.push(v++ + "、" + t + "数量大于" + h),
                (s && s !== i) ||
                  (a > 0 && e.push(v++ + "、每笔订单最多抵" + a / 100 + "元")),
                e.push(v++ + "、部分商品不可用"),
                e.push(v++ + "、" + t + "不可以抵运费"),
                s === n && e.push(v++ + "、最高可抵订单金额的" + c + "%"),
                e
              );
            },
            disableValueClass() {
              var { pointDeduction: e } = this,
                { status: t } = e || {};
              return 2 === t ? "point-deduction__disable--value" : "";
            },
            needLink() {
              var { pointDeduction: e } = this,
                { status: t } = e || {};
              return 3 === t;
            },
            pointPrice() {
              var { pointDeduction: e } = this,
                {
                  rate: t,
                  canCostPoints: r,
                  pointDeductionRatioType: o,
                  deductionRequiredPoints: a,
                  deductionAmount: i,
                } = e || {},
                n = 2 === o;
              return "-￥" + (r * ((n ? i : 1) / (n ? a : t))).toFixed(2);
            },
            pointDesc() {
              var { pointsName: e, pointDeduction: t } = this,
                {
                  status: r,
                  userPoint: o,
                  minAmount: a,
                  rate: i,
                  canCostPoints: n,
                  pointDeductionRatioType: s,
                  deductionRequiredPoints: c,
                  deductionAmount: d,
                  isUse: u,
                } = t || {},
                l = 2 === s,
                p = l ? c : i;
              if (!(r && o && a && p)) return "";
              var h = l ? Math.max(d, a / 100) : a / 100;
              switch (r) {
                case 1:
                  return "共" + o + e + "，满" + p + e + "可用";
                case 2:
                  return "可用" + e + "抵现不足" + h + "元";
                case 3:
                  return n > 0
                    ? u
                      ? this.pointPrice
                      : "" + n + e + "可用"
                    : "";
                default:
                  return "";
              }
            },
          },
          getActions: function (e) {
            return {
              togglePointDeductionInfoDialog(e) {
                this.isShowPointDeductionPrompt = e;
              },
              togglePointDeductionDialog(e) {
                this.isShowPointDeductionDialog = e;
              },
              onPointDeductionSwitchChange() {
                if (
                  ((this.isShowPointDeductionDialog = !1),
                  3 === this.pointDeduction.status)
                ) {
                  var t = !this.pointDeduction.isUse;
                  e.process.invoke("setPointDeductionUsed", t),
                    e.process.invoke("confirmOrder", {
                      isUsePointDeduction: t,
                    });
                }
              },
            };
          },
        },
        c = r("x5Yp"),
        d = {
          NO_DISCOUNT: "暂无会员优惠可用",
          CANT_USE_IN_STORE: "暂无本店可用",
          CANT_USE_OVERLAY: "不可与付费卡叠加使用",
          HAS_MEMBER_DISCOUNT: "有可使用的会员优惠",
          EMPTY: "",
        },
        u = {
          state: {
            showTips: !1,
            showMembership: !1,
            themeColors: {},
            themeCSS: "",
            customerCards: { list: [], id: null },
            display: { openDisplayCard: !1 },
            unavailableCustomerCards: { list: [] },
            displayCard: {},
            displayFreeCard: {},
            orderCreated: !1,
          },
          getters: {
            showMembershipCell() {
              var { EMPTY: e, NO_DISCOUNT: t } = d;
              return (
                (this.hasCustomerCards ||
                  this.hasOneDisplayCard ||
                  this.hasDisabledCustomerCards) &&
                ![e, t].includes(this.membershipTitle)
              );
            },
            showCustomerCardCheck() {
              return this.hasOneCustomerCards && !this.hasDisabledCustomerCards;
            },
            canMembershipLink() {
              var { customerCards: e, unavailableCustomerCards: t } = this,
                r = e.list ? e.list.length : 0,
                o = t.list ? t.list.length : 0;
              return r + o > 1 || (r + o === 1 && 1 === o);
            },
            isMembershipDisabled() {
              var { membershipTitle: e } = this,
                {
                  NO_DISCOUNT: t,
                  CANT_USE_IN_STORE: r,
                  CANT_USE_OVERLAY: o,
                } = d;
              return [t, r, o].includes(e);
            },
            chosenCustomCard() {
              var { list: e = [], id: t } = this.customerCards || {};
              return e.find((e) => e.id === t);
            },
            hasOneDisplayCard() {
              return (
                !Object(c.a)(this.displayCard) ||
                !Object(c.a)(this.displayFreeCard)
              );
            },
            isMembershipLink() {
              var {
                  orderCreated: e,
                  customerCards: t,
                  unavailableCustomerCards: r,
                  hasDisabledCustomerCards: o,
                } = this,
                a = t.list ? t.list.length : 0,
                i = r.list ? r.list.length : 0;
              return !e && (a + i > 1 || (a + i === 1 && o));
            },
            hasDisabledCustomerCards() {
              var e, t;
              return !(
                null == (e = this.unavailableCustomerCards) ||
                null == (t = e.list) ||
                !t.length
              );
            },
            hasCustomerCards() {
              var e, t;
              return !(
                null == (e = this.customerCards) ||
                null == (t = e.list) ||
                !t.length
              );
            },
            hasOneCustomerCards() {
              var e, t;
              return (
                1 ===
                (null == (e = this.customerCards) || null == (t = e.list)
                  ? void 0
                  : t.length)
              );
            },
            displayCustomerCard() {
              return this.hasOneCustomerCards
                ? this.customerCards.list[0]
                : this.chosenCustomCard || {};
            },
            membershipTitle() {
              return this.displayCustomerCard.name
                ? this.displayCustomerCard.name
                : this.display.openDisplayCard
                ? this.hasCustomerCards
                  ? d.CANT_USE_OVERLAY
                  : ""
                : this.hasCustomerCards
                ? d.HAS_MEMBER_DISCOUNT
                : this.hasDisabledCustomerCards
                ? d.CANT_USE_IN_STORE
                : d.NO_DISCOUNT;
            },
          },
          getActions: function (e) {
            return {
              hideMembershipDialog() {
                this.showMembership = !1;
              },
              onShowMembershipTips() {
                this.showTips = !0;
              },
              onHideMembershipTips() {
                this.showTips = !1;
              },
              onClickMembershipCell() {
                this.showMembership = this.isMembershipLink;
              },
              onMembershipChangeSwitch(t) {
                if (!this.orderCreated) {
                  var r = t ? this.customerCards.list[0].id : "";
                  e.process.invoke("setCustomCard", r, !0),
                    t &&
                      this.hasOneDisplayCard &&
                      e.process.invoke("setDisplayCard", !1),
                    e.process.invoke("confirmOrder", { setCustomerCard: !0 });
                }
              },
              onMembershipSelect(t) {
                var {
                    customerCards: r,
                    orderCreated: o,
                    hasDisplayCard: a,
                  } = this,
                  i = r.id;
                if (o || i === t) this.hideMembershipDialog();
                else {
                  e.process.invoke("setCustomCard", t, !0),
                    t && a && e.process.invoke("setDisplayCard", !1),
                    e.logger &&
                      e.logger.log({
                        et: "custom",
                        ei: "trade_buy_set_member_ship",
                        en: "切换会员优惠",
                        pt: "trade",
                        params: { desc: JSON.stringify(t) },
                      });
                  var [n] = e.process.invoke("confirmOrder");
                  n.then(() => {
                    this.hideMembershipDialog();
                  }).catch(() => {
                    e.process.invoke("setDisplayCard", i, !0);
                  });
                }
              },
            };
          },
        },
        l = r("87Y/"),
        p = r.n(l),
        h = {
          currentAddressData() {
            return this.currentAddress;
          },
          hasCurrentAddress() {
            return !!this.currentAddress.areaCode;
          },
          hasDisplayCard() {
            return !Object(c.a)(this.displayCard);
          },
          hasFreeMemberCard() {
            return !Object(c.a)(this.displayFreeCard);
          },
          freecardBenefitInfo() {
            var { freeCardDesc: e } = this.displayFreeCard;
            return e || "免费领取会员";
          },
          displayCardStyles() {
            var { general: e = "#ee0a24" } = this.themeColors || {},
              { cardType: t } = this.displayCard,
              r = 1 === t;
            return {
              themeColor: e,
              iconColor: r ? e : "#1F2231",
              themeStyle:
                "\n        padding: 0 12px 8px; background-color: #fff;\n        --theme-color: " +
                (r ? e : "#202332") +
                ";\n        --bg-color: " +
                (r ? p()(e, 0.06) : "#fff3e4") +
                ";\n        --title-color: " +
                (r ? "#111" : "#51351d") +
                ";\n        --discount-color: " +
                (r ? e : "#51351d") +
                ";\n        --desc-color: " +
                (r ? "#969799" : "rgb(81, 53, 29, .5)") +
                ";\n        --price-color: " +
                (r ? "#333" : "#51351d") +
                ";\n        --expiry-date-color: " +
                (r ? "#999" : "#A89480") +
                ";\n        --protocol-name-color: " +
                (r ? e : "#51351d") +
                ";\n        --coupon-guide-bg-color: " +
                (r ? "#fff" : "#1F2231") +
                ";\n        --coupon-guide-color: " +
                (r ? e : "#FFE6CC") +
                ";\n      ",
              couponGuideStyle:
                (this.display.openDisplayCard
                  ? ""
                  : "animation: coupon-guide-animate 1.8s linear; animation-fill-mode: forwards;") +
                "\n          transform: scale(0) rotate(4deg);",
            };
          },
          showDisplayCardPrice() {
            return this.displayCard && this.display.openDisplayCard;
          },
        },
        f = r("AGZf"),
        v = r("lgMb"),
        m = r("US/N"),
        y = {
          state: {
            themeColors: {},
            display: { openDisplayCard: !1 },
            displayCard: {},
            displayFreeCard: {},
            orderCreated: !1,
            currentAddress: {},
            showFreeMemberDialog: !1,
            agreeTitle: "商家会员卡注册及授权协议",
            agreeDetail: "",
            kdtId: 0,
          },
          getters: h,
          getActions: function (e) {
            return {
              postLog(t) {
                e.logger && e.logger.log(t);
              },
              onDisplayCardToggle(t) {
                var { orderCreated: r, display: o } = this;
                if (!r) {
                  var a,
                    { openDisplayCard: i } = o;
                  e.process.invoke("setDisplayCard", !i),
                    !0 == !i && e.process.invoke("setCustomCard", null),
                    e.process.invoke(
                      "setIgnoreVirtualCoupon",
                      !t || t.ignoreVirtualCoupon
                    ),
                    t.ignoreVirtualCoupon || (a = { bigsetCoupon: !0 });
                  var [n] = e.process.invoke("confirmOrder", a);
                  n.then(() => {
                    t.conflictTip && Object(f.a)(t.conflictTip),
                      !t.ignoreVirtualCoupon && this.onShowCouponList();
                  }).catch(() => {
                    e.process.invoke("setDisplayCard", i);
                  });
                }
              },
              onShowVirtualCouponList(t) {
                var r;
                e.process.invoke(
                  "setIgnoreVirtualCoupon",
                  !t || t.ignoreVirtualCoupon
                ),
                  t.ignoreVirtualCoupon || (r = { bigsetCoupon: !0 });
                var [o] = e.process.invoke("confirmOrder", r);
                o.then(() => {
                  !t.ignoreVirtualCoupon && this.onShowCouponList();
                });
              },
              onRegister() {
                var t;
                this.postLog({
                  et: "click",
                  ei: "click_trade_memberfree",
                  en: "下单页入会组件点击",
                  params: {
                    freeCardDesc:
                      (null == (t = this.displayFreeCard)
                        ? void 0
                        : t.freeCardDesc) || "",
                  },
                });
                var { areaCode: r, userName: o } = this.currentAddressData,
                  a = [
                    {
                      attributeId: 2,
                      attributeType: 1,
                      value: o || "匿名用户",
                    },
                    { attributeId: 6, attributeType: 1, value: r },
                  ];
                Object(m.requestV2)({
                  path: "/wscuser/scrm/api/benefitcard/join-free-level-member.json",
                  method: "POST",
                  data: {
                    attributeList: a,
                    clickWay: 0,
                    sceneType: 1,
                    member_src_way: "900",
                  },
                  withCredentials: !0,
                })
                  .then((t) => {
                    if (t) {
                      var [r] = e.process.invoke("confirmOrder");
                      r.then(() => {
                        var e;
                        this.postLog({
                          et: "view",
                          ei: "view_trade_memberfreetoast",
                          en: "下单页入会成功",
                          params: {
                            freeCardDesc:
                              (null == (e = this.displayFreeCard)
                                ? void 0
                                : e.freeCardDesc) || "",
                          },
                        }),
                          Object(f.a)("注册成功，已为你选择最佳优惠");
                      }).catch((e) => {
                        Object(v.b)(e, { message: "注册失败，请稍后重试" });
                      });
                    }
                  })
                  .catch((e) => {
                    Object(v.b)(e, { message: "注册失败，请稍后重试" });
                  });
              },
              openAgree(e) {
                Object(m.default)({
                  path: "/wscuser/scrm/api/benefitcard/agreement-by-alias.json",
                  method: "GET",
                  data: { alias: e },
                  withCredentials: !0,
                }).then((e) => {
                  var t,
                    { components: r = [] } = e;
                  (this.agreeTitle = e.title),
                    (this.agreeDetail =
                      (null == (t = r[0]) ? void 0 : t.content) || ""),
                    (this.showFreeMemberDialog = !0);
                });
              },
              handleFreeMemberClose() {
                this.showFreeMemberDialog = !1;
              },
              handleDisplayCardToggle(t) {
                var {
                    pointDesc: r,
                    orderCreated: o,
                    valueCard: a,
                    display: i,
                  } = this,
                  n = !!r && !o,
                  { hidePrePayCard: s = !1 } = e.data.yunDesignConfig || {},
                  c = null == a ? void 0 : a.showValueCard,
                  d = null == i ? void 0 : i.showPrePayCards,
                  u = c && !s && d,
                  l = "因订单中存在会员卡商品，不支持使用";
                n && u
                  ? (t.conflictTip = l + "积分/储值余额")
                  : n
                  ? (t.conflictTip = l + "积分抵扣")
                  : u && (t.conflictTip = l + "储值余额"),
                  this.onDisplayCardToggle(t);
              },
            };
          },
        },
        g = {
          state: {
            pay: {},
            showList: !1,
            themeColors: {},
            themeCSS: "",
            showActivityDialog: !1,
            isDirtyActivityDialog: !1,
          },
          getters: {
            activityValue() {
              var e,
                t = (null == (e = this.pay) ? void 0 : e.orderPromotions) || [],
                r = t.reduce((e, t) => e + t.decrease, 0);
              return r
                ? "-￥" + (r / 100).toFixed(2)
                : t
                    .map((e) => e.name)
                    .slice(0, 3)
                    .join("，");
            },
            orderPromotions() {
              var e;
              return (
                (null == (e = this.pay) ? void 0 : e.orderPromotions) || []
              );
            },
          },
          actions: {
            onActivityDialogClose() {
              this.showActivityDialog = !1;
            },
            onActivityCellClick() {
              (this.showActivityDialog = !0), (this.isDirtyActivityDialog = !0);
            },
          },
        },
        b = r("5Xe+"),
        C = r.n(b),
        O = (e) => (e / 100).toFixed(2),
        P = {
          allCoupons() {
            return this.couponModel.availableCoupons || [];
          },
          chosenCoupon() {
            return this.couponModel.chosenCoupon || {};
          },
          chosenCoupons() {
            var { length: e } = Object.keys(this.chosenCoupon);
            return (
              this.couponModel.chosenCoupons || (e && [this.chosenCoupon]) || []
            );
          },
          allDeliveryCoupons() {
            return this.couponModel.availableDeliveryCoupons || [];
          },
          unavailableDeliveryCoupons() {
            return this.couponModel.unavailableDeliveryCoupons || [];
          },
          chosenDeliveryCoupon() {
            return this.couponModel.chosenDeliveryCoupon || {};
          },
          chosenDeliveryCoupons() {
            var { length: e } = Object.keys(this.chosenDeliveryCoupon);
            return (
              this.couponModel.chosenDeliveryCoupons ||
              (e && [this.chosenDeliveryCoupon]) ||
              []
            );
          },
          isRecommendedCoupons() {
            return this.couponModel.isRecommendedCoupons;
          },
          newCouponValue() {
            var e = this.chosenCoupons.reduce((e, t) => {
              var r, o;
              return (
                e +
                (null != (r = null != (o = t.value) ? o : t.denominations)
                  ? r
                  : 0)
              );
            }, 0);
            return O(e);
          },
          newDeliveryCouponValue() {
            var e = this.chosenDeliveryCoupons.reduce((e, t) => {
              var r, o;
              return (
                e +
                (null != (r = null != (o = t.value) ? o : t.denominations)
                  ? r
                  : 0)
              );
            }, 0);
            return O(e);
          },
          hasGoods() {
            var e, t;
            return null == (e = this.goods) || null == (t = e.list)
              ? void 0
              : t.length;
          },
          isReserveOrder() {
            var e,
              { extensions: t = {} } =
                (null == (e = this.state) ? void 0 : e.order) || {},
              { EXHIBITIONRESERVE_ENROLLMENT: r } = t;
            try {
              var o = JSON.parse(r),
                { activityId: a } = o;
              return !!a;
            } catch (e) {
              return !1;
            }
          },
          isShowCouponCell() {
            var e,
              t,
              r,
              o =
                null == (e = this.state) || null == (t = e.coupon)
                  ? void 0
                  : t.showCoupon,
              a = !(null != (r = this.display) && r.forbidCoupon);
            return !!(o && this.hasGoods && a);
          },
          isShowDeliveryCouponCell() {
            var e, t, r, o;
            return (
              !!(
                (null != this &&
                  null != (e = this.allDeliveryCoupons) &&
                  e.length) ||
                (null != this &&
                  null != (t = this.unavailableDeliveryCoupons) &&
                  t.length)
              ) &&
              !(
                !(null == (r = this.state) || null == (o = r.coupon)
                  ? void 0
                  : o.showFreightCoupon) || !this.hasGoods
              )
            );
          },
          tagBackgroundColor() {
            return p()(this.themeColors.general, 0.2);
          },
          availableCoupons() {
            return this.couponModel.availableCoupons || [];
          },
          unavailableCoupons() {
            return this.couponModel.unavailableCoupons || [];
          },
          chosenCouponIndex() {
            return this.chosenCoupon.id || this.couponModel.chosenId;
          },
          couponOpt() {
            return C()(this, [
              "allCoupons",
              "chosenCoupon",
              "chosenCoupons",
              "newCouponValue",
              "isRecommendedCoupons",
            ]);
          },
          deliveryCouponOpt() {
            return {
              customTitle: "运费券",
              allCoupons: this.allDeliveryCoupons,
              chosenCoupon: this.chosenDeliveryCoupon,
              chosenCoupons: this.chosenDeliveryCoupons,
              newCouponValue: this.newDeliveryCouponValue,
              showCouponGroupType: 16,
            };
          },
        },
        S = r("taYb"),
        k = r("DXKY"),
        I = {
          state: {
            state: {},
            couponModel: {},
            order: { newCouponProcess: !1 },
            goods: {},
            display: {},
            themeColors: {},
            exchangeButtonText: "兑换",
            exchanging: !1,
            lastCouponList: [],
            isInCouponOverWhitelist: !1,
            showCouponList: !1,
            couponListDirty: !1,
            showCouponListGroupType: null,
          },
          getters: P,
          getActions: function (e) {
            return {
              onShowCouponList(t) {
                (this.showCouponListGroupType = t),
                  (this.showCouponList = !0),
                  (this.couponListDirty = !0),
                  e.event.emit("showCouponList", t);
              },
              onCouponListClose() {
                (this.showCouponList = !1), this.handleMetuxToast();
              },
              onCouponChange(t) {
                e.process.invoke("setCouponChosenIdProcess", t),
                  (this.lastCouponList =
                    this.couponModel.availableCoupons || []);
              },
              exchangeCoupon(t) {
                var [r] = e.process.invoke("exchangeCouponPromise", t);
                r.then((t) => {
                  var r = S.a.toCamelCase(t);
                  this.availableCoupons.some((e) => e.id === r.id)
                    ? Object(f.a)("该优惠码你已经拥有，已为你自动选中～")
                    : (e.process.invoke("addCouponProcess", r),
                      Object(f.a)("兑换成功")),
                    this.couponModel.chosenId !== r.id &&
                      ((this.lastCouponList =
                        this.couponModel.availableCoupons || []),
                      e.process.invoke("setCouponChosenIdProcess", r.id)),
                    this.finishExchange();
                }).catch((e) => {
                  Object(f.a)(e.msg || "兑换失败"), this.finishExchange();
                });
              },
              onExchange(e) {
                this.exchanging ||
                  ((this.exchanging = !0),
                  (this.exchangeButtonText = "验证中..."),
                  this.exchangeCoupon(e));
              },
              finishExchange() {
                (this.exchanging = !1),
                  (this.exchangeButtonText = "兑换"),
                  k.a.trigger("finishExchange");
              },
              onCouponClear() {
                this.onChange(-1), this.onClose();
              },
              handleMetuxToast() {
                var e = this.lastCouponList.find(
                  (e) => e.id === this.chosenCouponIndex
                );
                if (e) {
                  var { metuxPromotions: t = [] } = e;
                  t.length > 0 &&
                    (Object(f.a)("该优惠券与部分活动不可叠加使用"),
                    (e.metuxPromotions = []));
                }
              },
            };
          },
        },
        T = r("mztD"),
        E = r("sqpL");
      function D(e, t) {
        var r, o;
        if (null == e || null == t) return !1;
        var a =
            null == (r = e.plusBuyComponent) ? void 0 : r.showPlusBuyComponent,
          i = null == (o = t.exchangeGoodsList) ? void 0 : o.length;
        return a && i;
      }
      function w(e, t) {
        var r;
        return null == e || null == t
          ? []
          : (null == (r = e.list)
              ? void 0
              : r.filter((e) => {
                  var r;
                  return null == (r = t.selected)
                    ? void 0
                    : r.some((t) => e.fromTmpAdded && t.goodsId === e.goodsId);
                })) || [];
      }
      var _ = {
          state: { plusBuy: {}, plusSwipe: { closeStatus: !1 } },
          getters: {
            showPlusBuy() {
              var { display: e, plusBuy: t } = this;
              return D(e, t) && this.plusBuyGoodsList.length;
            },
            showPlusPop() {
              var { display: e, plusBuy: t, plusSwipe: r } = this;
              return (
                D(e, t) &&
                this.plusBuyGoodsList.length &&
                t.showExchangeGoodsPop &&
                !r.closeStatus
              );
            },
            plusBuyGoodsList() {
              var { goods: e, plusBuy: t } = this;
              return (function (e, t) {
                return (t.exchangeGoodsList || []).map((t) => {
                  var r,
                    a =
                      null == (r = e.list)
                        ? void 0
                        : r.find(
                            (e) => e.fromTmpAdded && t.goodsId === e.goodsId
                          );
                  if (!Object(c.a)(a))
                    return Object(o.a)({}, t, {
                      desc: Object(E.a)(a),
                      price: (a.payPrice / 100).toFixed(2),
                      originalPrice: (a.price / 100).toFixed(2),
                      original_Price: a.price,
                      picture: Object(T.a)(a.imgUrl, "!180x180.jpg"),
                    });
                  var i = Object(o.a)({}, t, {
                    price: (t.exchangePrice / 100).toFixed(2),
                    originalPrice: (t.originalPrice / 100).toFixed(2),
                    original_Price: t.originalPrice,
                  });
                  try {
                    i.picture = Object(T.a)(
                      JSON.parse(t.picture)[0].url,
                      "!500x500.jpg"
                    );
                  } catch (e) {
                    i.picture = "";
                  }
                  return i;
                });
              })(e, t);
            },
            selectedCount() {
              var { goods: e, plusBuy: t } = this;
              return (function (e, t) {
                return w(e, t).length;
              })(e, t);
            },
            payPrice() {
              var { goods: e, plusBuy: t } = this;
              return (function (e, t) {
                return (
                  w(e, t).reduce((e, t) => e + t.payPrice, 0) / 100
                ).toFixed(2);
              })(e, t);
            },
          },
          actions: {
            closePlusSwipe() {
              this.plusSwipe.closeStatus = !0;
            },
          },
        },
        j = {
          state: { prepareData: {}, confirmData: null },
          getters: {
            hasReward() {
              return this.state.hasPromotion;
            },
            promotionInfo() {
              return this.state.promotionInfo;
            },
            umpBlockBase() {
              return this.state.umpBlockBase;
            },
          },
          getActions: function (e) {
            return {
              showRewardPopup(t) {
                e.event.emit("reward:show", { show: t });
              },
              confirmBestPrice() {
                e.process.invoke("setUmpActivity", []);
              },
            };
          },
        },
        A = {
          state: {
            showRecommend: !1,
            toRecharge: !1,
            isSelectRc: !1,
            valueCard: { list: [], disabled: [], checked: [] },
            showStoredDiscountTips: !1,
          },
          getters: {
            hasExclusionCard() {
              var { checked: e, list: t } = this.valueCard || {},
                r = [...(e || [])],
                o = [...(t || [])];
              return r.some(
                (e) => (o.find((t) => t.summaryCardNo === e) || {}).isExclusion
              );
            },
          },
          getActions: function (e) {
            return {
              toggleShowRecommend(e) {
                this.showRecommend = e;
              },
              toggleToRecharge(e) {
                this.toRecharge = e;
              },
              toggleIsSelectRc(e) {
                this.isSelectRc = e;
              },
              toggleStoredDiscountTips(e) {
                this.showStoredDiscountTips = e;
              },
              onPrepayCardConfirm(t) {
                var {
                  valueCard: r,
                  exclusionCard: o,
                  isCustomerDiscountNotFullPay: a,
                  keepSelect: i,
                  isCustomerSelect: n = !1,
                } = t;
                e.process.invoke("setPrepayCardCheckStatus", { valueCard: r }),
                  e.logger &&
                    e.logger.log({
                      et: "custom",
                      ei: "trade_buy_set_prepay_card",
                      en: "切换余额/卡",
                      pt: "trade",
                      params: { desc: JSON.stringify(r) },
                    }),
                  a &&
                    (e.process.invoke("setDisableStoredDiscount", !0),
                    e.process.invoke("confirmOrder", {
                      keepSelect: i,
                      isCustomerSelect: n,
                    })),
                  this.toggleShowRecommend(!1),
                  o &&
                    (e.process.invoke("setUmpActivity", []),
                    e.process.invoke(
                      "setOrderForbidCoupon",
                      this.hasExclusionCard
                    ),
                    e.process.invoke(
                      "setOrderForbidPreference",
                      this.hasExclusionCard
                    ),
                    e.process.invoke(
                      "setDisableStoredDiscount",
                      this.hasExclusionCard
                    ),
                    e.process.invoke("confirmOrder", { isCustomerSelect: n }));
              },
            };
          },
        },
        x = r("VmHG"),
        N = [
          { state: { themeTag: {} }, getters: {}, actions: {} },
          a,
          s,
          u,
          y,
          g,
          I,
          _,
          j,
          A,
        ].reduce((e, t) => {
          return (
            void 0 === (r = e) && (r = {}),
            void 0 === (a = t) && (a = {}),
            {
              state: Object(o.a)({}, r.state, a.state),
              getters: Object(o.a)({}, r.getters, a.getters),
              actions: Object(o.a)({}, r.actions, a.actions),
            }
          );
          var r, a;
        }, {});
      var R = r("YeA1");
      function L(e) {
        if (e.ctx.store) e.store = e.ctx.store;
        else {
          var t;
          (e.ctx.store =
            ((t = e.ctx),
            Object(x.a)({
              state: () => Object(o.a)({}, N.state),
              getters: Object(o.a)({}, N.getters),
              actions: Object(o.a)(
                {},
                N.actions,
                s.getActions(t),
                u.getActions(t),
                y.getActions(t),
                I.getActions(t),
                j.getActions(t),
                _.actions,
                A.getActions(t)
              ),
            }))),
            (e.store = e.ctx.store);
          e.ctx.process.define(
            "selectCustomerCard",
            e.store.onMembershipSelect
          ),
            Object(x.c)(e, [
              "themeColors",
              "themeTag",
              "points",
              "pointsName",
              "orderCreated",
              "pointDeduction",
              "themeCSS",
              "customerCards",
              "display",
              "unavailableCustomerCards",
              "displayCard",
              "displayFreeCard",
              "pay",
              "couponModel",
              "order",
              "goods",
              "isInCouponOverWhitelist",
              "plusBuy",
              "currentAddress",
              "state",
              "kdtId",
              "valueCard",
            ]),
            Object(R.e)(e, {
              openValueCard: () => {
                var { payAssetActivityTagDesc: t = "", valueCard: r } =
                  e.ctx.data;
                (t ||
                  !!(
                    (null != r && r.list.length) ||
                    (null != r && r.disabled.length)
                  )) &&
                  e.store.toggleShowRecommend(!0);
              },
              closeValueCard: () => {
                e.store.toggleToRecharge(!1), e.store.toggleShowRecommend(!1);
              },
            });
        }
      }
    },
    aBxN: function (e, t, r) {
      r.d(t, "c", function () {
        return n;
      }),
        r.d(t, "b", function () {
          return c;
        }),
        r.d(t, "a", function () {
          return d;
        });
      var o = r("Fcif"),
        a = r("lCVF"),
        i = r.n(a);
      function n(e) {
        return !((t = e),
        (r = typeof t),
        null === t ||
          ("object" !== r && "function" !== r) ||
          Object.keys(e).length);
        var t, r;
      }
      var s = 1;
      function c(e, t, r) {
        return (
          void 0 === e && (e = 0),
          void 0 === r && (r = 0),
          t === s
            ? {
                value: i()(e),
                label: "元",
                fetchGoodsRange: [r, Math.ceil(1.3 * r)],
              }
            : { value: e, label: "件" }
        );
      }
      function d(e, t) {
        var { meetType: r, originLackValue: a } = t,
          i = Object.values(e).reduce(
            (e, t) => (r === s ? e + t.price * t.num : e + t.num),
            0
          );
        return Object(o.a)({}, t, { meet: a - i < 0, lackValue: a - i });
      }
    },
    "b+JF": function (e, t, r) {
      r.d(t, "a", function () {
        return v;
      }),
        r.d(t, "b", function () {
          return l;
        });
      var o = {};
      function a(e) {
        void 0 === e && (e = "$uniqueId$"), o[e] || (o[e] = 0);
        var t = ++o[e];
        return "$lodash$" === e ? "" + t : "" + (e + t);
      }
      var i,
        n = r("pthN"),
        s =
          ((i = function (e, t) {
            return (i =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
              })(e, t);
          }),
          function (e, t) {
            function r() {
              this.constructor = e;
            }
            i(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((r.prototype = t.prototype), new r()));
          }),
        c = function () {
          return (c =
            Object.assign ||
            function (e) {
              for (var t, r = 1, o = arguments.length; r < o; r++)
                for (var a in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        };
      var d,
        u = (function (e) {
          function t(t) {
            var r = e.call(this) || this;
            if (
              ((r.instance = t),
              !(
                (null == t ? void 0 : t.onOpen) &&
                (null == t ? void 0 : t.onMessage) &&
                (null == t ? void 0 : t.onError) &&
                (null == t ? void 0 : t.onClose)
              ))
            )
              throw new Error(
                "get wx socket ins failed, you can pass `socketProviderOption` params to catch log"
              );
            return (
              t.onOpen(function (e) {
                r.emit("open", e);
              }),
              t.onMessage(function (e) {
                r.emit("message", e);
              }),
              t.onError(function (e) {
                r.emit("error", e);
              }),
              t.onClose(function (e) {
                r.emit("close", e);
              }),
              r
            );
          }
          return (
            s(t, e),
            (t.prototype.send = function (e) {
              this.instance.send({ data: e });
            }),
            (t.prototype.close = function (e, t) {
              try {
                this.instance.close({ code: e, reason: t });
              } catch (e) {}
            }),
            (t.prototype.addEventListener = function (e, t) {
              this.on(e, t);
            }),
            (t.prototype.removeEventListener = function (e, t) {
              this.off(e, t);
            }),
            Object.defineProperty(t.prototype, "readyState", {
              get: function () {
                return this.instance.readyState;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "CLOSED", {
              get: function () {
                return this.instance.CLOSED;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "CLOSING", {
              get: function () {
                return this.instance.CLOSING;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "CONNECTING", {
              get: function () {
                return this.instance.CONNECTING;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "OPEN", {
              get: function () {
                return this.instance.OPEN;
              },
              enumerable: !1,
              configurable: !0,
            }),
            t
          );
        })(n.EventEmitter),
        l = {
          DOM: {
            connect: function (e, t) {
              return new WebSocket(e, t);
            },
          },
          WEAPP: {
            connect: function (e, t, r) {
              var o = (function (e, t, r) {
                return (
                  void 0 === r && (r = {}),
                  wx.connectSocket(c({ url: e, protocols: t }, r))
                );
              })(e, t, r);
              return new u(o);
            },
          },
        };
      !(function (e) {
        (e[(e.Normal = 0)] = "Normal"),
          (e[(e.Stop = 1)] = "Stop"),
          (e[(e.Immediate = 2)] = "Immediate");
      })(d || (d = {}));
      var p = {
          proto: [],
          maxRetryAttempts: 10,
          beatInterval: 3e4,
          beatTimeout: 2e4,
          maxBeatTimeoutTimes: 2,
          tryInterval: 2e3,
          maxTryInterval: 3e4,
          tryAccelerate: 2,
          connectTimeout: 2e3,
          mapRequestId: function (e) {
            return e.requestId;
          },
          mapResult: function (e) {
            return 200 === e.args.code;
          },
          socketProvider: l.DOM,
        },
        h = (function () {
          function e(e) {
            var t = this;
            if (
              (void 0 === e && (e = {}),
              (this.socket = null),
              (this.reconnectStrategy = d.Normal),
              (this.connectTimer = null),
              (this.reconnectTryCount = 0),
              (this.reconnectDelayTimer = null),
              (this._onClose = function (e) {
                t.connectTimer && clearTimeout(t.connectTimer),
                  t.socket && (t._removeAllEventListeners(), (t.socket = null)),
                  t.eventEmitter.emit("close", e),
                  t._reconnect();
              }),
              (this._onMessage = function (e) {
                t.eventEmitter.emit(
                  "packet",
                  (function (e) {
                    try {
                      return JSON.parse(e);
                    } catch (e) {
                      return "";
                    }
                  })(e.data)
                );
              }),
              (this._onError = function (e) {
                t.connectTimer && clearTimeout(t.connectTimer),
                  t.socket && (t._removeAllEventListeners(), (t.socket = null)),
                  t.eventEmitter.emit("error", e),
                  t._reconnect();
              }),
              (this._onOpen = function (e) {
                t.connectTimer &&
                  (clearTimeout(t.connectTimer), (t.connectTimer = null)),
                  t.eventEmitter.emit("open", e);
              }),
              !e.url)
            )
              throw new Error("url not set");
            Object.defineProperty(this, "eventEmitter", {
              enumerable: !1,
              configurable: !1,
              value: new n(),
            }),
              (this.option = Object.assign({}, p, e));
          }
          return (
            (e.prototype.connect = function () {
              var e = this;
              this.eventEmitter.emit("connecting"),
                (this.socket = this.option.socketProvider.connect(
                  this.option.url,
                  this.option.proto,
                  this.option.socketProviderOption || {}
                )),
                this.socket.addEventListener("close", this._onClose),
                this.socket.addEventListener("message", this._onMessage),
                this.socket.addEventListener("error", this._onError),
                this.socket.addEventListener("open", this._onOpen),
                (this.connectTimer = setTimeout(function () {
                  e.socket && e.socket.close(4020, "connect timeout");
                }, this.option.connectTimeout)),
                this.reconnectStrategy === d.Immediate &&
                  (this.reconnectStrategy = d.Normal);
            }),
            (e.prototype.delayReconnect = function () {
              (this.reconnectStrategy = d.Normal),
                (this.reconnectTryCount = 0),
                this._doClose();
            }),
            (e.prototype.reconnect = function () {
              (this.reconnectStrategy = d.Immediate),
                (this.reconnectTryCount = 0),
                this._doClose();
            }),
            (e.prototype.close = function (e, t, r) {
              void 0 === e && (e = !1),
                void 0 === t && (t = 1e3),
                void 0 === r && (r = "normal close"),
                (this.reconnectStrategy = e ? d.Normal : d.Stop),
                this._doClose(t, r);
            }),
            (e.prototype.send = function (e) {
              if (!this.socket)
                throw new Error(
                  "websocket is null, call connect before send message"
                );
              if (this.socket.readyState !== this.socket.OPEN)
                throw new Error(
                  "websocket is not ready, state is '" +
                    this.socket.readyState +
                    "'"
                );
              this.socket.send(JSON.stringify(e));
            }),
            (e.prototype._doClose = function (e, t) {
              void 0 === e && (e = 1e3),
                void 0 === t && (t = "normal close"),
                this.socket &&
                  this.socket.readyState !== this.socket.CLOSING &&
                  this.socket.readyState !== this.socket.CLOSED &&
                  this.socket.close(e, t);
            }),
            (e.prototype._reconnect = function () {
              this.reconnectStrategy === d.Stop
                ? this.eventEmitter.emit("stop")
                : this.option.maxRetryAttempts &&
                  this.reconnectTryCount >= this.option.maxRetryAttempts
                ? (this.eventEmitter.emit(
                    "error",
                    "Reconnect attempts more than maxRetryAttempts"
                  ),
                  this.eventEmitter.emit("stop"))
                : (this.eventEmitter.emit("reconnect"),
                  this.reconnectStrategy === d.Immediate
                    ? this.connect()
                    : this._delayedConnect());
            }),
            (e.prototype.getDelay = function (e) {
              var t =
                e.tryInterval *
                Math.pow(e.tryAccelerate, this.reconnectTryCount);
              return t > e.maxTryInterval ? e.maxTryInterval : t;
            }),
            (e.prototype._delayedConnect = function () {
              var e = this;
              this.reconnectDelayTimer &&
                (clearTimeout(this.reconnectDelayTimer),
                (this.reconnectDelayTimer = null)),
                (this.reconnectTryCount += 1),
                (this.reconnectDelayTimer = setTimeout(function () {
                  e.connect();
                }, this.getDelay(this.option)));
            }),
            (e.prototype._removeAllEventListeners = function () {
              this.socket &&
                (this.socket.removeEventListener("close", this._onClose),
                this.socket.removeEventListener("message", this._onMessage),
                this.socket.removeEventListener("error", this._onError),
                this.socket.removeEventListener("open", this._onOpen));
            }),
            (e.prototype.on = function (e, t, r) {
              return this.eventEmitter.on(e, t, r), this;
            }),
            (e.prototype.addListener = function (e, t, r) {
              return this.eventEmitter.addListener(e, t, r), this;
            }),
            (e.prototype.once = function (e, t, r) {
              return this.eventEmitter.once(e, t, r), this;
            }),
            (e.prototype.off = function (e, t, r, o) {
              return this.eventEmitter.off(e, t, r, o), this;
            }),
            (e.prototype.removeListener = function (e, t, r, o) {
              return this.eventEmitter.removeListener(e, t, r, o), this;
            }),
            (e.prototype.removeAllListeners = function (e) {
              return this.eventEmitter.removeAllListeners(e), this;
            }),
            e
          );
        })(),
        f = (function () {
          var e = function (t, r) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
              })(t, r);
          };
          return function (t, r) {
            function o() {
              this.constructor = t;
            }
            e(t, r),
              (t.prototype =
                null === r
                  ? Object.create(r)
                  : ((o.prototype = r.prototype), new o()));
          };
        })(),
        v = (function (e) {
          function t(t) {
            void 0 === t && (t = {});
            var r = e.call(this, t) || this;
            return (
              (r.promiseMap = new Map()),
              r.eventEmitter.on("packet", function (e) {
                var t = r.option.mapRequestId(e);
                if (t && r.promiseMap.has(t)) {
                  var o = r.promiseMap.get(t),
                    a = o.resolve,
                    i = o.reject;
                  r.promiseMap.delete(t),
                    !0 === r.option.mapResult(e) ? a(e) : i(e);
                }
              }),
              r.eventEmitter.on("close", function () {
                r.rejectAll();
              }),
              r
            );
          }
          return (
            f(t, e),
            (t.prototype.rejectAll = function () {
              this.promiseMap.forEach(function (e) {
                e.reject("reject by close");
              }),
                (this.promiseMap = new Map());
            }),
            (t.prototype.promiseSend = function (e, t) {
              var r = this;
              void 0 === t && (t = this.option.timeout);
              var o = this.option.mapRequestId(e);
              return new Promise(
                o
                  ? function (a, i) {
                      r.promiseMap.set(o, { resolve: a, reject: i }),
                        "number" == typeof t &&
                          t &&
                          setTimeout(function () {
                            return i("timeout");
                          }, t),
                        r.send(e);
                    }
                  : function (t) {
                      r.send(e), t(!0);
                    }
              );
            }),
            t
          );
        })(h);
      function m(e, t) {
        return e.cId === t.cId && e.mId === t.mId && e.mv === t.mv;
      }
      var y = {
        login: { cId: 0, mId: 1, mv: 1 },
        heartbeat: { cId: 998, mId: 998, mv: 1 },
        sendMessage: { cId: 1, mId: 7, mv: 1 },
        messageAck: { cId: 1, mId: 6, mv: 1 },
        fetchMessageHistory: { cId: 1, mId: 5, mv: 1 },
        passivityLogout: { cId: 0, mId: 2, mv: 0 },
        receiveMessage: { cId: 1, mId: 2, mv: 1 },
      };
      function g(e) {
        for (var t in y) if (m(e, y[t])) return t;
        return null;
      }
      var b = (function () {
          var e = function (t, r) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
              })(t, r);
          };
          return function (t, r) {
            function o() {
              this.constructor = t;
            }
            e(t, r),
              (t.prototype =
                null === r
                  ? Object.create(r)
                  : ((o.prototype = r.prototype), new o()));
          };
        })(),
        C = function () {
          return (C =
            Object.assign ||
            function (e) {
              for (var t, r = 1, o = arguments.length; r < o; r++)
                for (var a in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        },
        O = function (e, t) {
          var r = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (r[o] = e[o]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (o = Object.getOwnPropertySymbols(e); a < o.length; a++)
              t.indexOf(o[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[a]) &&
                (r[o[a]] = e[o[a]]);
          }
          return r;
        };
      !(function (e) {
        function t(t, r) {
          void 0 === r && (r = {});
          var o = e.call(this, r) || this;
          return (
            (o.login = t),
            (o.auth = "none"),
            (o.heartbeatTimer = null),
            (o.heartbeatQueue = []),
            (o.timeoutCount = 0),
            (o._onPacket = function (e) {
              var t = g(e);
              switch (t) {
                case "passivityLogout":
                  (o.auth = "passivityLogout"), o.close(!1);
                case "login":
                case "receiveMessage":
                  o.eventEmitter.emit(t, e.args);
                  break;
                case "heartbeat":
                  o.eventEmitter.emit(t, e);
              }
            }),
            (o._onHeartbeat = function () {
              o.clearHeartbeat();
            }),
            o.verifyLogin(),
            o.on("open", function () {
              o.sendAuth(), o.startHeartbeat();
            }),
            o.on("connecting", function () {
              return (o.auth = "none");
            }),
            o.on("reconnect", function () {
              return (o.auth = "none");
            }),
            o.on("packet", o._onPacket),
            o.on("heartbeat", o._onHeartbeat),
            o.on("error", function () {
              (o.auth = "none"), o.stopHeartbeat();
            }),
            o.on("close", function () {
              (o.auth = "none"), o.stopHeartbeat();
            }),
            o
          );
        }
        b(t, e),
          (t.prototype.verifyLogin = function () {
            if (
              ((e = this.login.userId),
              "string" != (t = typeof e) &&
                ("object" != t ||
                  null == e ||
                  Array.isArray(e) ||
                  "[object String]" != Object.prototype.toString.call(e)))
            )
              throw new Error("userId 必须是字符串");
            var e, t;
            if (this.login.userId.length > 128)
              throw new Error("userId 不能超过128字符");
          }),
          (t.prototype.sendAuth = function () {
            var e = this;
            if ("none" !== this.auth)
              throw new Error("Auth already " + this.auth);
            this.eventEmitter.emit("authing"),
              (this.auth = "authing"),
              this.once("login", function (t) {
                200 === t.code
                  ? ((e.auth = "success"),
                    e.eventEmitter.emit("authSuccess", t))
                  : ((e.auth = "fail"), e.eventEmitter.emit("authFail", t));
              }),
              this.send(
                C(C({ version: 1 }, y.login), {
                  requestId: a("login-"),
                  args: this.login,
                })
              );
          }),
          (t.prototype.clearHeartbeat = function () {
            this.timeoutCount = 0;
            for (var e = 0, t = this.heartbeatQueue; e < t.length; e++) {
              var r = t[e];
              clearTimeout(r);
            }
            this.heartbeatQueue = [];
          }),
          (t.prototype.sendHeartbeat = function () {
            var e = this,
              t = a("hearbeat-");
            if (this.socket && this.socket.readyState === this.socket.OPEN) {
              var r = setTimeout(function () {
                (e.timeoutCount += 1),
                  e.timeoutCount > e.option.maxBeatTimeoutTimes && e.close(!0);
              }, this.option.beatTimeout);
              this.heartbeatQueue.push(r),
                this.send(C(C({}, y.heartbeat), { version: 1, requestId: t })),
                (this.heartbeatTimer = setTimeout(function () {
                  return e.sendHeartbeat();
                }, this.option.beatInterval));
            }
          }),
          (t.prototype.startHeartbeat = function () {
            this.sendHeartbeat();
          }),
          (t.prototype.stopHeartbeat = function () {
            this.heartbeatTimer && clearTimeout(this.heartbeatTimer),
              (this.heartbeatTimer = null),
              this.clearHeartbeat();
          }),
          (t.prototype.sendMessage = function (e) {
            var t = e.to,
              r = e.content,
              o = e.msgType,
              i = O(e, ["to", "content", "msgType"]),
              n = C(
                C(C({}, y.sendMessage), {
                  version: 1,
                  args: { to: t, content: r, msgType: o },
                  requestId: a("message-"),
                }),
                i
              );
            return this.promiseSend(n).then(function (e) {
              return e.args;
            });
          }),
          (t.prototype.fetchHistory = function (e) {
            var t = e.userId,
              r = e.msgId,
              o = e.limit,
              i = void 0 === o ? 10 : o,
              n = O(e, ["userId", "msgId", "limit"]);
            return this.promiseSend(
              C(
                C(C({}, y.fetchMessageHistory), {
                  version: 1,
                  args: { userId: t, msgId: r, limit: i },
                  requestId: a("fetch-history-"),
                }),
                n
              )
            ).then(function (e) {
              return e.args;
            });
          });
      })(v);
    },
    b1eA: function (e, t, r) {
      function o(e) {
        return (e = "00" + e).slice(-2);
      }
      function a(e) {
        var t = new Date(1e3 * e);
        return (
          t.getFullYear() + "." + o(t.getMonth() + 1) + "." + o(t.getDate())
        );
      }
      r.d(t, "b", function () {
        return a;
      }),
        r.d(t, "a", function () {
          return i;
        });
      var i = { 10: "抖音券", 11: "美团券" };
    },
    cS3X: function (e, t, r) {
      var o = r("taYb"),
        a = r("US/N"),
        i = r("lgMb"),
        n = r("rIfD");
      t.a = {
        exchangeCoupon: n.a,
        fetchPlusBuy: (e, t) => {
          var r, o, i, n, s, c, d;
          return Object(a.default)({
            origin: "cashier",
            path: "/pay/wsctrade/order/buy/plusBuy.json",
            method: "POST",
            data: {
              kdtId:
                null == e || null == (r = e.order) || null == (o = r.seller)
                  ? void 0
                  : o.kdtId,
              offlineId:
                null == e || null == (i = e.order) || null == (n = i.seller)
                  ? void 0
                  : n.storeId,
              activityId:
                (null == e ||
                null == (s = e.display) ||
                null == (c = s.plusBuyComponent)
                  ? void 0
                  : c.activityId) || 0,
              expressTypeChoice: t
                ? 1
                : null == e || null == (d = e.postage)
                ? void 0
                : d.currentExpressType,
            },
            withCredentials: !0,
          });
        },
        fetchSkuData: (e) => {
          var t,
            { alias: r, order: n } = e;
          return Object(a.requestV2)({
            origin: "cashier",
            method: "GET",
            path: "/wsctrade/fetch-sku.json",
            data: {
              alias: r,
              offlineId:
                (null == n || null == (t = n.seller) ? void 0 : t.storeId) ||
                "",
            },
            withCredentials: !0,
          })
            .then((e) => o.a.toCamelCase(e))
            .catch((e) => {
              throw (
                (Object(i.b)(e, { message: "商品信息获取失败，请稍后重试" }), e)
              );
            });
        },
        getAddsOnePageDetail: (e) =>
          Object(a.default)({
            path: "/wscump/adds-on-page/get-detail.json",
            data: e,
            withCredentials: !0,
          }),
        getPostageConfigList: () =>
          Object(a.default)({
            origin: "cashier",
            method: "GET",
            path: "/wscump/trade/postage-config-list.json",
            withCredentials: !0,
          }),
        queryOrderPreparation: (e) =>
          Object(a.default)({
            origin: "cashier",
            method: "GET",
            data: e,
            path: "/pay/wsctrade/order/buy/query-order-preparation.json",
            withCredentials: !0,
          }),
      };
    },
    dBcf: function (e, t, r) {
      r.d(t, "a", function () {
        return o;
      });
      var o = { 1: "待生效", 2: "已生效", 3: "已失效" };
    },
    ddKh: function (e, t, r) {
      r.d(t, "e", function () {
        return o;
      }),
        r.d(t, "b", function () {
          return a;
        }),
        r.d(t, "a", function () {
          return i;
        }),
        r.d(t, "c", function () {
          return n;
        }),
        r.d(t, "d", function () {
          return s;
        });
      var o = 1177,
        a = 200,
        i = {
          value: "",
          miniValue: "",
          isNewSend: void 0,
          useThresholdCopywriting: "",
        },
        n = "live-coupon-icon",
        s = "live-coupon-popup";
    },
    ddwB: function (e, t, r) {
      r.d(t, "a", function () {
        return s;
      });
      var o = r("eijD"),
        a = r("US/N");
      function i() {
        return Object(a.default)({
          method: "GET",
          path: "/wscshopcore/shop-cert/getShopCertStatus.json",
          origin: "yzh5",
          withCredentials: !0,
        });
      }
      var n = r("RC8l");
      function s() {
        return c.apply(this, arguments);
      }
      function c() {
        return (c = Object(o.a)(function* () {
          var {
            certStatus: e,
            lifecycleStatus: t,
            validBeginTime: r,
            isWsc: o,
            currentTime: a,
            supportShopVisibleDialog: s,
            certDialogEffectiveTime: c,
          } = yield i();
          return e !== n.c.DONE && s
            ? t !== n.b.VALID || a < r + 12096e5 || (t === n.b.VALID && r < c)
              ? { isShow: !1, status: e }
              : { isShow: !0, status: e, isWsc: o }
            : { isShow: !1, status: e };
        })).apply(this, arguments);
      }
    },
    dwfD: function (e, t, r) {
      r.d(t, "a", function () {
        return o;
      });
      var o = () => ({
        payParams: {
          orderNo: "",
          cashierSalt: "",
          cashierSign: "",
          partnerId: "",
          prepayId: "",
        },
        goodsType: { isPhysical: !1, isVirtualTicket: !1 },
        skuPayChannel: "",
        excludePayTools: [],
        weappPaySuccessPath: "",
        lockState: { isLocked: !1 },
      });
    },
    e5r9: function (e, t, r) {
      var o;
      r.d(t, "a", function () {
        return o;
      }),
        (function (e) {
          (e.GOODS = "goods"),
            (e.DISCOUNT = "discount"),
            (e.POINTS = "points"),
            (e.GROUPON = "groupOn"),
            (e.LADDER_GROUPON = "ladderGroupOn"),
            (e.AUCTION = "auction"),
            (e.TUAN = "tuan"),
            (e.F_CODE = "fCode"),
            (e.TIMELIMITED_DISCOUNT = "timelimitedDiscount"),
            (e.PRESENT = "presentExchange"),
            (e.SECKILL = "seckill"),
            (e.DEPOSIT_EXPANSION = "depositExpansion"),
            (e.HELP_DEPOSIT_EXPANSION = "helpDepositExpansion"),
            (e.HELPCUT = "helpcut"),
            (e.IN_SOURCING_FISSION = "inSourcingFission"),
            (e.LIMITED_SECKILL = "limitedSeckill"),
            (e.GIFT = "gift");
        })(o || (o = {}));
    },
    h1PR: function (e, t, r) {
      r.d(t, "a", function () {
        return s;
      }),
        r.d(t, "d", function () {
          return c;
        }),
        r.d(t, "b", function () {
          return d;
        }),
        r.d(t, "c", function () {
          return u;
        });
      var o = r("Fcif"),
        a = r("US/N"),
        i = r("HCk1"),
        n = r("MTtC"),
        s = (e) => {
          var t,
            r =
              null ==
              (t = e.find((e) =>
                e.dataType === n.b.GENDER
                  ? e.isRequired && (!e.value || e.value === n.e.UNKNOWN)
                  : !e.value && e.isRequired
              ))
                ? void 0
                : t.name;
          return !!r && "请补充" + r + "信息";
        };
      function c(e) {
        var t = (function (e) {
            var { scene: t = i.b.PAY } = e,
              r = e.pageQuery || {},
              o = [
                "NEW_SALES_KDTID",
                "RECRUIT_ENTRANCE",
                "RECRUIT_MEMBER_TYPE",
                "RECRUIT_SRC",
              ];
            t === i.b.FREE &&
              (o = o.concat([
                "sales_id",
                "sales_ch",
                "from_source",
                "fromBiz",
                "from_params",
                "member_src_way",
                "member_src_channel",
                "referee_id",
                "referee_scene",
              ]));
            var a,
              n =
                ((a = r), o.reduce((e, t) => (t in a && (e[t] = a[t]), e), {}));
            return (
              "true" === r.IS_SALES &&
                r.NEW_SALES_ID &&
                ((n.IS_SALES = r.IS_SALES), (n.NEW_SALES_ID = r.NEW_SALES_ID)),
              n.from_params ||
                (n.from_params = (function (e) {
                  if (
                    e.getLogParamsFunc &&
                    "function" == typeof e.getLogParamsFunc
                  ) {
                    var t = e.getLogParamsFunc(),
                      { from_params: r } =
                        (null == t ? void 0 : t.context) || {};
                    return r;
                  }
                })(e)),
              n
            );
          })(e),
          r = e.pageQuery || {},
          { from_params: n } = r,
          s = { salesId: t.NEW_SALES_ID, salesKdtId: t.NEW_SALES_KDTID };
        return s.salesId && s.salesKdtId
          ? Object(a.default)({
              path: "/wscuser/shopping-guide/api/bindRelation.json",
              data: Object(o.a)({}, s, { fromParams: n }),
              method: "POST",
            }).catch(() => {})
          : Promise.resolve();
      }
      var d = (e) => {
          var t = e.customerAttributes || [];
          if (Array.isArray(t))
            return (
              0 ===
              t.filter((e) =>
                e.dataType === n.b.GENDER
                  ? !(
                      !e.isRequired ||
                      ((!e.value || e.value !== n.e.UNKNOWN) && e.value)
                    )
                  : !(!e.isRequired || e.value)
              ).length
            );
        },
        u = (e) => e.filter((e) => e.isChange && e.isEditable);
    },
    h1zt: function (e, t, r) {
      function o(e, t) {
        void 0 === t && (t = 2);
        for (var r = e + ""; r.length < t; ) r = "0" + r;
        return r;
      }
      function a(e, t) {
        if ((void 0 === t && (t = "date"), !e)) return "";
        var r = e.getFullYear(),
          a = e.getMonth() + 1,
          i = e.getDate(),
          n = r + "-" + o(a) + "-" + o(i);
        if ("datetime" === t) {
          var s = e.getHours(),
            c = e.getMinutes();
          n += " " + o(s) + ":" + o(c);
        }
        return n;
      }
      r.d(t, "a", function () {
        return a;
      });
    },
    hdqa: function (e, t, r) {
      r.d(t, "a", function () {
        return l;
      });
      var o = r("Fcif"),
        a = {
          state: {
            order: { buyerMsg: "" },
            goods: { list: [] },
            shopConfig: { buyerMsgTips: {} },
          },
          getters: {
            showMessage() {
              var e;
              return (
                this.goods.list &&
                this.goods.list.length &&
                !(null == (e = this.order) || !e.showMessage)
              );
            },
          },
          getActions: function (e) {
            return {
              setOrderMessage(t) {
                e.process.invoke("setOrderMessage", t);
              },
              logFocus() {
                e.process.invoke("logFocusMessage");
              },
            };
          },
        },
        i = r("87Y/"),
        n = r.n(i),
        s = {
          state: {
            hasHaitaoGoods: !1,
            tradeTag: {},
            orderFinalPrice: 0,
            prepayCardDecrease: 0,
            display: {},
            invoice: {
              themeGeneral: "",
              invoiceType: 1,
              submit: {
                emailList: [],
                invoiceDetailType: "",
                raiseType: "",
                taxpayerId: "",
                userName: "",
              },
              common: { raiseType: "enterprise", emailList: [] },
              enterprise: {
                userName: "",
                taxpayerId: "",
                bankAccount: "",
                openingBankName: "",
                phone: "",
                address: "",
                invoiceDetailType: "itemCategory",
              },
              personal: { userName: "", invoiceDetailType: "itemCategory" },
            },
            themeColors: {},
            themeCSS: {},
            themeType: {},
            invoiceFormVisible: !1,
          },
          getters: {
            showInvoiceCell() {
              return this.tradeTag.showInvoiceCell;
            },
            isElectronic() {
              return this.tradeTag.useElectronicInvoice;
            },
            styleVar() {
              var e = "";
              try {
                var { general: t } = this.themeColors;
                e =
                  "--invoice-tag-active-background-color-alpha-10: " +
                  n()(t, 0.1) +
                  "; --invoice-tag-active-color: " +
                  t;
              } catch (e) {}
              return e;
            },
            warningTips() {
              return this.prepayCardDecrease && 0 == +this.orderFinalPrice
                ? "使用 余额/卡 支付暂不支持开具电子发票，不计入开票金额当中"
                : this.goods.list.every((e) => 10 == +e.goodsType || e.fx)
                ? "分销商品暂不支持开具电子发票，不计入开票金额当中"
                : "";
            },
            invoiceInfo() {
              var e = "请填写开票信息";
              this.hasHaitaoGoods && (e = "跨境商品暂不支持开发票"),
                this.warningTips && (e = "暂不支持开发票");
              var { submit: t = {}, invoiceType: r = 1 } = this.invoice || {},
                { raiseType: o, userName: a, invoiceDetailType: i } = t;
              o &&
                a &&
                i &&
                (e =
                  (1 === r ? "普票" : "专票") +
                  " （" +
                  ("personal" === o ? "个人" : "企业") +
                  "-" +
                  ("itemDetail" === i ? "商品明细" : "商品类别") +
                  "）");
              return e;
            },
            disableValueClass() {
              return "跨境商品暂不支持开发票" === this.invoiceInfo ||
                "暂不支持开发票" === this.invoiceInfo
                ? "new-invoice-cell__disable--value"
                : "";
            },
          },
          getActions: function (e) {
            return {
              setInvoiceSubmit(t) {
                e.logger &&
                  e.logger.log({
                    et: "custom",
                    ei: "trade_buy_set_invoice_info",
                    en: "设置发票信息",
                    pt: "trade",
                    params: { desc: JSON.stringify(t) },
                  }),
                  e.process.invoke("setInvoiceSubmit", t);
              },
              updateInvoiceData(e) {
                this.invoice = e;
              },
              changeIsShowInvoicePopup(e) {
                (e && this.hasHaitaoGoods) || (this.invoiceFormVisible = e);
              },
            };
          },
        },
        c = r("VmHG"),
        d = [
          { state: { dataLoaded: !1, tradeTag: {} }, getters: {} },
          a,
          s,
        ].reduce((e, t) => {
          return (
            void 0 === (r = e) && (r = {}),
            void 0 === (a = t) && (a = {}),
            {
              state: Object(o.a)({}, r.state, a.state),
              getters: Object(o.a)({}, r.getters, a.getters),
              actions: Object(o.a)({}, r.actions, a.actions),
            }
          );
          var r, a;
        }, {});
      var u = r("YeA1");
      function l(e) {
        var t;
        e.ctx.store
          ? (e.store = e.ctx.store)
          : ((e.ctx.store =
              ((t = e.ctx),
              Object(c.a)({
                state: () => Object(o.a)({}, d.state),
                getters: Object(o.a)({}, d.getters),
                actions: Object(o.a)(
                  {},
                  d.actions,
                  a.getActions(t),
                  s.getActions(t)
                ),
              }))),
            (e.store = e.ctx.store),
            Object(c.c)(e, [
              "order",
              "goods",
              "shopConfig",
              "tradeTag",
              "dataLoaded",
              "hasHaitaoGoods",
              "orderFinalPrice",
              "prepayCardDecrease",
              "themeColors",
              "themeType",
              "themeCSS",
              "display",
            ]),
            Object(u.e)(e, { invoiceActionSubmit: e.store.setInvoiceSubmit }));
      }
    },
    hvsR: function (e, t, r) {
      r.d(t, "a", function () {
        return o;
      }),
        r.d(t, "b", function () {
          return a;
        });
      var o = {};
      function a(e, t, r, a) {
        void 0 === e && (e = "click"),
          void 0 === t && (t = ""),
          void 0 === r && (r = ""),
          void 0 === a && (a = {});
        try {
          var { logger: i } = o;
          i && i.log({ et: e, ei: t, en: r, params: a });
        } catch (e) {}
      }
    },
    icCW: function (e, t, r) {
      r.d(t, "b", function () {
        return a;
      }),
        r.d(t, "d", function () {
          return i;
        }),
        r.d(t, "c", function () {
          return n;
        }),
        r.d(t, "a", function () {
          return s;
        });
      var o = r("US/N");
      function a(e) {
        return Object(o.default)({
          path: "/wscump/common/follow-report.json",
          method: "POST",
          data: e,
        });
      }
      function i(e) {
        return Object(o.default)({
          path: "/wscump/common/qr-code.json",
          data: e,
        });
      }
      function n(e) {
        return Object(o.default)({
          path: "/wscump/common/get-fans-article.json",
          data: e,
        });
      }
      function s(e) {
        return Object(o.default)({
          path: "/wscump/common/check-need-follow.json",
          data: e,
        });
      }
    },
    jggy: function (e, t, r) {
      r.d(t, "a", function () {
        return a;
      }),
        r.d(t, "b", function () {
          return i;
        });
      var o = r("US/N");
      function a(e) {
        return Object(o.default)({
          method: "GET",
          path: "/wscuser/member/fast-join-result",
          data: e,
        });
      }
      function i() {
        return Object(o.default)({
          method: "GET",
          path: "/wscuser/scrm/api/ump/getMissionListV2.json",
        });
      }
    },
    k88A: function (e, t, r) {
      r.d(t, "a", function () {
        return a;
      });
      var o = r("US/N").default;
      function a(e) {
        return o({
          path: "/prepaid/recommend/api/card/giftcard/recharge/agreement/sign.json",
          method: "POST",
          origin: "cashier",
          data: e,
          withCredentials: !0,
        });
      }
    },
    m72t: function (e, t, r) {
      function o(e, t, r) {
        if (null !== e) {
          var o = (e[r ? "disabled" : "list"] || []).filter(
            (e) => !(102 === e.cardType && 1001 === e.cardSubType)
          );
          return (e[r ? "disabled" : "list"] = o), e;
        }
      }
      function a(e) {
        var t = "";
        switch (e) {
          case "valueCard":
            t = "储值卡";
        }
        return t;
      }
      function i(e, t, r) {
        return e[t][r ? "disabled" : "list"];
      }
      function n(e, t, r) {
        return 50 === (e[t][r ? "disabled" : "list"] || []).length;
      }
      function s(e, t, r) {
        return (
          !(!e || null == e || null == e[t]) &&
          !!e[t][r ? "disabled" : "list"].length
        );
      }
      function c(e, t, r, o) {
        return !o && -1 !== e[r].checked.indexOf(t.summaryCardNo);
      }
      r.d(t, "a", function () {
        return o;
      }),
        r.d(t, "f", function () {
          return a;
        }),
        r.d(t, "c", function () {
          return i;
        }),
        r.d(t, "d", function () {
          return n;
        }),
        r.d(t, "e", function () {
          return s;
        }),
        r.d(t, "b", function () {
          return c;
        });
    },
    mXrz: function (e, t, r) {
      r.d(t, "a", function () {
        return d;
      }),
        r.d(t, "b", function () {
          return u;
        });
      var o = r("DXqK"),
        a = r("9ZMt"),
        i = r("WwLc"),
        n = (e) =>
          e.map((e) => {
            var {
                couponId: t,
                title: r,
                activityType: a,
                preferentialMode: n,
                thresholdCopyWriting: s,
                dateType: c,
                fetchId: d,
                activityTypeGroup: u,
                validTimeCopywriting: l,
              } = e,
              { value: p, unit: h } = ((e) => {
                var t,
                  r,
                  o = "";
                switch (e.preferentialMode) {
                  case i.i.MONEY:
                    (r = e.value
                      ? e.value / 100
                      : e.minValue / 100 + "~" + e.maxValue / 100),
                      (o = "元");
                    break;
                  case i.i.DISCOUNT:
                    (r = e.value / 10), (o = "折");
                    break;
                  case i.i.GOODS:
                    r = "兑换券";
                    break;
                  case i.i.MEET_GIVE:
                    r =
                      e.preferentialShortCopyWriting ||
                      (null == (t = e.preferentialCopyWriting)
                        ? void 0
                        : t.split("，")[1]);
                    break;
                  default:
                    (o = "元"), (r = e.value / 100);
                }
                return { value: r, unit: o };
              })(e),
              f = ((e, t) => {
                var r = String(e).length;
                return t === i.i.GOODS
                  ? 22
                  : t === i.i.MEET_GIVE
                  ? Math.max(12, 26 - 2 * r)
                  : r < 5
                  ? 26
                  : 5 === r
                  ? 22
                  : 6 === r
                  ? 18
                  : 12;
              })(p, n),
              v = "";
            return (
              (v =
                c === i.a
                  ? Object(o.d)(e.validStartTime, "YYYY.MM.DD") +
                    "-" +
                    Object(o.d)(e.validEndTime, "YYYY.MM.DD")
                  : "领到券" +
                    (0 === e.relativeValidTimeBeginInterval ? "当" : "次") +
                    "日起" +
                    e.relativeValidTimeDuration +
                    "天内有效"),
              {
                value: p,
                unit: h,
                couponId: t,
                fetchId: d,
                title: r,
                activityType: a,
                condition: s,
                time: l || v,
                size: f,
                activityTypeGroup: u,
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
        d = (e, t, r) => {
          if (r || !e) {
            var o = a.default.getEnv(),
              d = i.e[r] || "FAIL",
              u = i.g[d];
            if (((u.showType = i.j.ERR), u.btnText)) {
              var l;
              switch (o) {
                case "weapp":
                  l = "/packages/user/coupon/list/index";
                  break;
                default:
                  l =
                    "/pages/web-view/index?url=https%3A%2F%2Fh5.youzan.com%2Fwscump%2Fcoupon%2Fcollection%3Fkdt_id%3D491391";
              }
              u.link = l;
            }
            return u;
          }
          var {
              activityInfo: p,
              sendImmediatelyCoupons: h,
              sendAfterPayCoupons: f,
            } = e,
            {
              shopName: v,
              showType: m = i.j.ONE,
              imageUrl: y,
              color: g,
              appIdentity: b,
              participateFrequency: C,
            } = p,
            {
              title: O,
              subTitle: P,
              totalMoney: S,
            } = ((e, t, r) => {
              var o = e.length,
                a = t.length,
                n = "",
                d = "",
                u = 0;
              if (o) {
                var l = s(e);
                (u = l ? 0 : c(e)),
                  (n = l ? "送你" + i.c[r] + "红包" : "送你" + u + "元红包");
              }
              if (a) {
                var p = "购买消费后" + (o ? "再" : "") + "送",
                  h = s(t) ? "" + p + a + "张券" : "" + p + c(t) + "元";
                (n = o ? n : h), (d = o ? h : "");
              }
              return { title: n, subTitle: d, totalMoney: u };
            })(h, f, b),
            k = n(h),
            I = n(f),
            T = m === i.j.SELF ? "background: " + g + ";" : "",
            E = k.length || m !== i.j.THREE ? "" : "small-title",
            D =
              b === i.b.NEW
                ? "新客进店礼包在首次进店时发放，"
                : "老客进店礼包每" + C + "天进店时发放";
          return {
            title: O,
            fetchedCoupons: k,
            subTitle: P,
            payCoupons: I,
            kdtId: t,
            showType: m,
            imageUrl: y,
            color: g,
            style: T,
            hasCoupon: !0,
            titleClass: E,
            useSelfStyle: m === i.j.SELF,
            shopName: v,
            typeRule: D,
            totalMoney: S,
          };
        },
        u = {
          scene: "coupon_notice_scene",
          subscribePage: "商详页",
          subscribeType: "进店有礼",
          authorizationType: "coupon",
          windowType: "micro_visit_gift",
        };
    },
    n7Ns: function (e, t, r) {
      t.a = class {
        constructor() {
          this.count = 0;
        }
        provide() {
          this.count++;
        }
        consume() {
          this.count = Math.max(0, this.count - 1);
        }
        clear() {
          this.count = 0;
        }
        isEmpty() {
          return 0 === this.count;
        }
        getCount() {
          return this.count;
        }
      };
    },
    okrm: function (e, t, r) {
      var o = r("BANk"),
        a = r("US/N");
      function i(e) {
        return Object(a.default)({
          origin: "h5",
          path: "/wscshop/token/upload-image.json",
          method: "GET",
        }).then((t) => {
          !(function (e, t) {
            var r = {};
            (r.file = e), (r.token = t);
            var o = e.split(".");
            o.length > 1 && (r["x:ext"] = "." + o[o.length - 1]),
              (function (e) {
                void 0 === e && (e = {});
                var t = "";
                for (var r of Object.keys(e)) {
                  t +=
                    '\r\n--XXX\r\nContent-Disposition: form-data; name="' +
                    r +
                    '"\r\n\r\n' +
                    e[r];
                }
              })(r);
          })(e, t.token);
          return (function (e, t, r) {
            return new Promise((e, a) => {
              Object(o.a)({
                url: "https://up.yzcdn.cn/",
                filePath: t,
                fileType: "image",
                fileName: "file",
                name: "file",
                formData: { token: r, "x:skip_save": 1 },
                success: (t) => {
                  try {
                    t = JSON.parse(t.data);
                  } catch (e) {
                    a(e);
                  }
                  0 == +t.code ? e(t) : a(t);
                },
                fail: (e) => {
                  a(e);
                },
              });
            });
          })(0, e, t.token);
        });
      }
      t.a = function (e, t) {
        return (
          void 0 === t && (t = {}),
          new Promise((t, r) => {
            i(e).then(t).catch(r);
          })
        );
      };
    },
    ol0k: function (e, t, r) {
      r.d(t, "a", function () {
        return i;
      });
      var o = r("TlkG"),
        a = r("icCW");
      function i(e) {
        void 0 === e && (e = {});
        var {
            activityType: t,
            activityKey: r,
            followWays: i = [],
            threshold: n,
            useFollow: s,
          } = e,
          c = o.a[t];
        if (
          ((i && i.length) || i.push(1),
          c === o.a.seckill && (!s || (s && !i.includes(2))))
        )
          return { needFollow: !1 };
        if (c === o.a.luckyDrawGroup && !n) return { needFollow: !1 };
        var d = o.b[t] || 0;
        return Object(a.a)({
          bizCode: c,
          bizSubCode: d,
          channel: 1,
          activityKey: r,
        }).then((e) => ({
          needFollow: e,
          extraData: { bizCode: c, bizSubCode: d, activityKey: r },
        }));
      }
    },
    ovI7: function (e, t, r) {
      r.d(t, "a", function () {
        return u;
      });
      var o = r("NHEX"),
        a = r.n(o),
        i = r("9DIb"),
        n = r.n(i),
        s =
          (r("tS13"),
          function () {
            return (s =
              Object.assign ||
              function (e) {
                for (var t, r = 1, o = arguments.length; r < o; r++)
                  for (var a in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
              }).apply(this, arguments);
          }),
        c = {
          showPrice: "",
          price: 0,
          pointsPrice: 0,
          oldPrice: 0,
          priceTitle: "",
          notShowPriceTitle: !1,
          soldNum: 0,
          stockNum: 0,
        };
      function d(e) {
        return (
          void 0 === e && (e = []),
          e.reduce(function (e, t) {
            var r;
            return s(s({}, e), (((r = {})[t.skuId] = t), r));
          }, {})
        );
      }
      function u(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = null);
        var r = e.props,
          o = void 0 === r ? [] : r,
          i = e.messages,
          u = void 0 === i ? [] : i,
          l = e.skus,
          p = void 0 === l ? [] : l,
          h = e.hideStock,
          f = void 0 !== h && h,
          v = [],
          m = s(s({}, c), { hideStock: f, tree: o, list: v, messages: u }),
          y = d(e.skuPrices),
          g = d(e.skuStocks);
        if (t) {
          var b = d(t.skuPrices),
            C = d(t.skuStocks);
          (v = p.map(function (e) {
            var t = e.skuId,
              r = y[t].price,
              o = C[t];
            o && o.disable && (o = s(s({}, o), { stockNum: 0 }));
            var a = b[t];
            return (
              a &&
                a.price > 0 &&
                (a = s(s({}, a), { notShowPriceTitle: a.price >= r })),
              s(s(s(s(s(s({}, c), e), { oldPrice: r }), a), o), { id: t })
            );
          })),
            (m = s(s(s(s({}, m), t.spuStock), t.spuPrice), {
              collectionId: a()(t, "spuStock.skuId", 0),
              collectionPrice: a()(t, "spuPrice.price", 0),
              oldPrice: a()(e, "spuPrice.price", 0),
              list: v,
            }));
        } else
          (v = p.map(function (e) {
            var t = e.skuId;
            return s(s(s(s(s(s({}, c), e), { oldPrice: 0 }), y[t]), g[t]), {
              id: t,
            });
          })),
            (m = s(s(s(s({}, m), e.spuStock), e.spuPrice), {
              collectionId: a()(e, "spuStock.skuId", 0),
              collectionPrice: a()(e, "spuPrice.price", 0),
              list: v,
            }));
        var O = 1 / 0,
          P = 0,
          S = 1 / 0,
          k = 0,
          I = 0 === m.list.length;
        return (
          I
            ? ((m.collectionPrice = O = P = m.price), (S = k = m.oldPrice || 0))
            : ((m.stockNum = m.list.reduce(function (e, t) {
                return e + (t.stockNum || 0);
              }, 0)),
              m.list.forEach(function (e) {
                e.disable ||
                  (m.stockNum > 0 && 0 === e.stockNum) ||
                  ((O = Math.min(O, e.price)),
                  (P = Math.max(P, e.price)),
                  (S = Math.min(S, e.oldPrice)),
                  (k = Math.max(k, e.oldPrice)));
              }),
              (m.price = O || P || 0),
              (m.oldPrice = S || k || 0)),
          (m.price = m.price || O || P || 0),
          isFinite(k) || (k = 0),
          (m.oldPrice = m.oldPrice || S || k || 0),
          n()(
            s(s({}, m), {
              noneSku: I,
              minPrice: O,
              maxPrice: P,
              minVipSavedPrice: 1 / 0,
              maxVipSavedPrice: 0,
              isAllVipPriceAdvantage: 0,
              oldMinPrice: S,
              oldMaxPrice: k,
            })
          )
        );
      }
    },
    pg5i: function (e, t, r) {
      r.d(t, "a", function () {
        return a;
      });
      var o = r("US/N");
      function a(e) {
        return Object(o.default)({
          method: "POST",
          path: "/wscump/helpcut/recommend-response.json",
          data: e,
        });
      }
    },
    pthN: function (e, t, r) {
      var o = Object.prototype.hasOwnProperty,
        a = "~";
      function i() {}
      function n(e, t, r) {
        (this.fn = e), (this.context = t), (this.once = r || !1);
      }
      function s(e, t, r, o, i) {
        if ("function" != typeof r)
          throw new TypeError("The listener must be a function");
        var s = new n(r, o || e, i),
          c = a ? a + t : t;
        return (
          e._events[c]
            ? e._events[c].fn
              ? (e._events[c] = [e._events[c], s])
              : e._events[c].push(s)
            : ((e._events[c] = s), e._eventsCount++),
          e
        );
      }
      function c(e, t) {
        0 == --e._eventsCount ? (e._events = new i()) : delete e._events[t];
      }
      function d() {
        (this._events = new i()), (this._eventsCount = 0);
      }
      Object.create &&
        ((i.prototype = Object.create(null)), new i().__proto__ || (a = !1)),
        (d.prototype.eventNames = function () {
          var e,
            t,
            r = [];
          if (0 === this._eventsCount) return r;
          for (t in (e = this._events))
            o.call(e, t) && r.push(a ? t.slice(1) : t);
          return Object.getOwnPropertySymbols
            ? r.concat(Object.getOwnPropertySymbols(e))
            : r;
        }),
        (d.prototype.listeners = function (e) {
          var t = a ? a + e : e,
            r = this._events[t];
          if (!r) return [];
          if (r.fn) return [r.fn];
          for (var o = 0, i = r.length, n = new Array(i); o < i; o++)
            n[o] = r[o].fn;
          return n;
        }),
        (d.prototype.listenerCount = function (e) {
          var t = a ? a + e : e,
            r = this._events[t];
          return r ? (r.fn ? 1 : r.length) : 0;
        }),
        (d.prototype.emit = function (e, t, r, o, i, n) {
          var s = a ? a + e : e;
          if (!this._events[s]) return !1;
          var c,
            d,
            u = this._events[s],
            l = arguments.length;
          if (u.fn) {
            switch ((u.once && this.removeListener(e, u.fn, void 0, !0), l)) {
              case 1:
                return u.fn.call(u.context), !0;
              case 2:
                return u.fn.call(u.context, t), !0;
              case 3:
                return u.fn.call(u.context, t, r), !0;
              case 4:
                return u.fn.call(u.context, t, r, o), !0;
              case 5:
                return u.fn.call(u.context, t, r, o, i), !0;
              case 6:
                return u.fn.call(u.context, t, r, o, i, n), !0;
            }
            for (d = 1, c = new Array(l - 1); d < l; d++)
              c[d - 1] = arguments[d];
            u.fn.apply(u.context, c);
          } else {
            var p,
              h = u.length;
            for (d = 0; d < h; d++)
              switch (
                (u[d].once && this.removeListener(e, u[d].fn, void 0, !0), l)
              ) {
                case 1:
                  u[d].fn.call(u[d].context);
                  break;
                case 2:
                  u[d].fn.call(u[d].context, t);
                  break;
                case 3:
                  u[d].fn.call(u[d].context, t, r);
                  break;
                case 4:
                  u[d].fn.call(u[d].context, t, r, o);
                  break;
                default:
                  if (!c)
                    for (p = 1, c = new Array(l - 1); p < l; p++)
                      c[p - 1] = arguments[p];
                  u[d].fn.apply(u[d].context, c);
              }
          }
          return !0;
        }),
        (d.prototype.on = function (e, t, r) {
          return s(this, e, t, r, !1);
        }),
        (d.prototype.once = function (e, t, r) {
          return s(this, e, t, r, !0);
        }),
        (d.prototype.removeListener = function (e, t, r, o) {
          var i = a ? a + e : e;
          if (!this._events[i]) return this;
          if (!t) return c(this, i), this;
          var n = this._events[i];
          if (n.fn)
            n.fn !== t ||
              (o && !n.once) ||
              (r && n.context !== r) ||
              c(this, i);
          else {
            for (var s = 0, d = [], u = n.length; s < u; s++)
              (n[s].fn !== t ||
                (o && !n[s].once) ||
                (r && n[s].context !== r)) &&
                d.push(n[s]);
            d.length
              ? (this._events[i] = 1 === d.length ? d[0] : d)
              : c(this, i);
          }
          return this;
        }),
        (d.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = a ? a + e : e), this._events[t] && c(this, t))
              : ((this._events = new i()), (this._eventsCount = 0)),
            this
          );
        }),
        (d.prototype.off = d.prototype.removeListener),
        (d.prototype.addListener = d.prototype.on),
        (d.prefixed = a),
        (d.EventEmitter = d),
        (e.exports = d);
    },
    rNuj: function (e, t, r) {
      r.d(t, "a", function () {
        return i;
      });
      var o = r("hvsR"),
        a = [r("Kfn+").b];
      class i {
        constructor(e) {
          (this.ctx = e.ctx),
            (o.a.logger = this.ctx.logger),
            a.forEach((e) => {
              "function" == typeof e && e.call(this, this.ctx);
            });
        }
      }
    },
    rekS: function (e, t, r) {
      var o = r("Fcif"),
        a =
          (r("xers"),
          r("5Xe+"),
          r("GFyo"),
          r("Sipi"),
          r("KEq0"),
          r("jmjq"),
          r("+66q")),
        i = (r("tS13"), r("VfJb"), r("2xJD"), r("NHEX"), r("YehF"), r("ONqW"));
      r("gBZH"),
        r("w2Y9"),
        r("lCVF"),
        r("+I+c"),
        r("Nvad"),
        r("Y+cZ"),
        r("d/TA");
      r("sIkL"), r("AGZf");
      var n = r("YeA1");
      var s = r("9ZMt"),
        c = r("sXPE"),
        d = "权益卡",
        u = "免费会员",
        l = "付费会员",
        p = "商详页_限购按钮",
        h = "click",
        f = "_button_free",
        v = "_button_pay",
        m = "_button_card";
      c.h.LIMIT_BUY_GUIDE;
      r("4ofq"),
        Object(o.a)({}, a.l, { deposit: "预售价", [a.a.COUPON]: "券后价" });
      var y = r("MLLI"),
        { platform: g } = Object(y.b)();
    },
    sDGD: function (e, t) {},
    tr7U: function (e, t, r) {
      r.d(t, "c", function () {
        return n;
      }),
        r.d(t, "a", function () {
          return s;
        }),
        r.d(t, "d", function () {
          return c;
        }),
        r.d(t, "b", function () {
          return d;
        });
      var o = r("5HXs"),
        a = r.n(o),
        i = a()({ block: "zan-pay" }),
        n = a()({ block: "zan-pay-home" }),
        s = a()({ block: "zan-pay-copy-link" }),
        c = a()({ block: "zan-pay-selected-bar" }),
        d = function () {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return i("flex", t);
        };
    },
    "w/BL": function (e, t, r) {
      r.d(t, "h", function () {
        return f;
      }),
        r.d(t, "b", function () {
          return m;
        }),
        r.d(t, "f", function () {
          return y;
        }),
        r.d(t, "e", function () {
          return g;
        }),
        r.d(t, "g", function () {
          return b;
        }),
        r.d(t, "d", function () {
          return C;
        }),
        r.d(t, "a", function () {
          return O;
        }),
        r.d(t, "m", function () {
          return P;
        }),
        r.d(t, "c", function () {
          return S;
        }),
        r.d(t, "k", function () {
          return k;
        }),
        r.d(t, "i", function () {
          return I;
        }),
        r.d(t, "j", function () {
          return T;
        }),
        r.d(t, "l", function () {
          return E;
        });
      var o = r("Fcif"),
        a = r("+I+c"),
        i = r("ONqW"),
        n = ["params"],
        s = null,
        c = null,
        d = { goods_id: 0, goods_name: "" },
        u = { user_id: "" },
        l = () => {
          var e, t, r;
          return null == (e = s.data.goods) ||
            null == (t = e.list) ||
            null == (r = t[0])
            ? void 0
            : r.skuId;
        },
        p = () => {
          var e;
          return null == (e = s.data.orderResult) ? void 0 : e.orderNo;
        },
        h = (e) => {
          Object(i.a)().log(e);
        },
        f = (e, t) => {
          (s = e), (c = t.loggerParams);
          var { goodsBaseInfo: r, userInfo: o } = s.data;
          (d.goods_id = (null == r ? void 0 : r.id) || 0),
            (d.goods_name = (null == r ? void 0 : r.title) || ""),
            (u.user_id = (null == o ? void 0 : o.userId) || "");
        },
        v = (e, t) => {
          var { params: r } = e,
            i = Object(a.a)(e, n);
          return Object(o.a)({}, i, { params: Object(o.a)({}, r, t) });
        },
        m = () => h(c.addressList),
        y = () => h(c.creatAddress),
        g = () => h(c.contactsList),
        b = () => h(c.creatCantacts),
        C = () => h(c.changePayment),
        O = () => h(c.addNewContacts),
        P = () => h(c.writeContacts),
        S = () => h(c.changeContacts),
        k = () => {
          h(
            v(
              c.paySuccess,
              Object(o.a)({}, u, d, { order_no: p(), sku_id: l() })
            )
          );
        },
        I = () => {
          var e, t;
          h(
            v(
              c.orderCreate,
              Object(o.a)({}, u, d, {
                orders_combine_id: p(),
                order_no: p(),
                prepay_id:
                  null == (e = s.data.orderResult) ||
                  null == (t = e.prePaymentPreparation)
                    ? void 0
                    : t.prepayId,
                sku_id: l(),
              })
            )
          );
        },
        T = () => {
          h(v(c.payClick, Object(o.a)({}, d, { abTraceId: 0 })));
        },
        E = (e) => {
          h({
            et: "view",
            ei: "sku_direct_order_component_view",
            en: "极速下单弹窗曝光",
            params: {
              page_source: e || "",
              component: "sku_creat_order_component",
            },
          });
        };
    },
    "wln/": function (e, t, r) {
      r.d(t, "a", function () {
        return a;
      }),
        r.d(t, "b", function () {
          return i;
        }),
        r.d(t, "c", function () {
          return n;
        }),
        r.d(t, "d", function () {
          return s;
        });
      var o = r("Fcif"),
        a = { limitCreate: !1, limitCreateStatus: "wating", limitTryCount: 0 };
      function i(e) {
        (a.limitCreate = !0),
          (a.limitCreateStatus = "wating"),
          (a.limitTryCount += 1),
          (e.data.limitOrder = Object(o.a)({}, a));
      }
      function n(e) {
        (a.limitCreate = !0),
          (a.limitCreateStatus = "fail"),
          (a.limitTryCount = 0),
          (e.data.limitOrder = Object(o.a)({}, a));
      }
      function s(e) {
        a.limitCreate &&
          ((a.limitTryCount = 0),
          (a.limitCreate = !1),
          (e.data.limitOrder = Object(o.a)({}, a)));
      }
    },
    "x/JP": function (e, t, r) {
      r.d(t, "a", function () {
        return d;
      });
      var o,
        a = r("Fcif"),
        i = r("8mzt"),
        n = { kdtId: -1, userId: -1 };
      o = i.a;
      try {
        var s = getApp(),
          { yzUserId: c } = s.getToken() || {};
        (n.userId = c), (n.kdtId = s.getKdtId());
      } catch (e) {}
      var d = {
        log(e) {
          var { name: t, data: r, extra: i, level: s = "info" } = e;
          if ("function" == typeof o.log)
            try {
              o.log({
                appName: "retail-h5-prepaid",
                logIndex: "web-skynet-logger",
                level: s,
                name: t,
                message: JSON.stringify(r),
                extra: Object(a.a)({}, n, i),
              });
            } catch (e) {}
        },
        info(e, t) {
          var { data: r, extra: o } = t;
          this.log({ name: e, data: r, extra: o, level: "info" });
        },
        warn(e, t) {
          var { data: r, extra: o } = t;
          this.log({ name: e, data: r, extra: o, level: "warn" });
        },
        error(e, t) {
          var { data: r, extra: o } = t;
          this.log({ name: e, data: r, extra: o, level: "error" });
        },
      };
    },
    xSgL: function (e, t, r) {
      r.d(t, "a", function () {
        return o;
      });
      var o = (e) => ({
        goodsType: {
          isPhysical: !!e.isPhysical,
          isVirtualTicket: !!e.isVirtualTicket,
        },
      });
    },
    xyqL: function (e, t, r) {
      r.d(t, "a", function () {
        return a;
      });
      var o = r("Fcif");
      function a() {
        var e = [];
        return (
          e.push(
            Object(o.a)(
              { payChannel: "WX_APPLET", payChannelName: "微信支付" },
              { available: !0 }
            )
          ),
          e
        );
      }
    },
    "y+Xi": function (e, t) {},
    yMpf: function (e, t, r) {
      r.d(t, "a", function () {
        return i;
      });
      var o = r("eijD"),
        a = r("US/N"),
        i = (function () {
          var e = Object(o.a)(function* () {
            var e = yield Object(a.default)({
                path: "/wsctrade/order/static-config.json",
                method: "POST",
                data: { keys: ["sku_order_config"] },
              }),
              t = {};
            try {
              t = JSON.parse(null == e ? void 0 : e.sku_order_config);
            } catch (e) {}
            return t;
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
    },
    ypj9: function (e, t) {},
    z0eK: function (e, t, r) {
      r.d(t, "a", function () {
        return o;
      });
      var o = { GROWTH: 1, CONSUME: 2, STORE: 3 };
    },
    zdpX: function (e, t, r) {
      r.d(t, "b", function () {
        return a;
      }),
        r.d(t, "a", function () {
          return i;
        });
      var o = r("US/N");
      function a(e) {
        return Object(o.default)({
          method: "GET",
          path: "/wscuser/member/fast-join-info",
          data: e,
        });
      }
      function i(e) {
        return Object(o.default)({
          method: "POST",
          path: "/wscuser/member/fast-join",
          data: e,
        });
      }
    },
    "zf/e": function (e, t, r) {
      r.d(t, "a", function () {
        return a;
      });
      var o = r("US/N");
      function a(e) {
        return Object(o.requestV2)({
          path: "/wscgoods/detail-api/weixin-temp-qr.json",
          data: e,
          method: "POST",
        });
      }
    },
  });
