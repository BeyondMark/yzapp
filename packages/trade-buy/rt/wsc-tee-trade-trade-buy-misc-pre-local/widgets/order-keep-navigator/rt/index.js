"use strict";
var r = require("~/r");
r(
  "sRlI",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "4Oq2": function (e, t, i) {
      i.d(t, "a", function () {
        return h;
      }),
        i.d(t, "b", function () {
          return l;
        });
      var r = i("9ZMt"),
        a = i("twMw"),
        o = i("NgLJ"),
        n = i.n(o),
        s = i("MLLI"),
        d = {
          bottom: 58,
          height: 32,
          left: 278,
          right: 365,
          top: 26,
          width: 87,
          canUseNav: !0,
        },
        c = { inited: !1, rectInfo: {} },
        u = function () {
          var e,
            t = a.a.statusBarHeight,
            i = void 0 === t ? 20 : t,
            o = a.a.isAndroid,
            s = a.a.SDKVersion,
            d = i + (o ? 48 : 44);
          try {
            e = r.default.$native.getMenuButtonBoundingClientRect();
          } catch (e) {}
          return (
            e || (e = Object.create(null)),
            s && (e.canUseNav = n()("2.5.2", s) < 1),
            (e.top = e.top || d),
            (c.rectInfo = e),
            (c.inited = !0),
            e
          );
        },
        h = Object.create(null);
      function l() {
        var e =
            !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          t = h.top,
          i = h.height,
          r = h.canUseNav,
          o = e ? a.a : Object(s.b)(),
          n = o.statusBarHeight,
          d = void 0 === n ? 20 : n,
          c = t - d + 6 + i + d,
          u = c <= 105 ? c : 105;
        return r ? u : 0;
      }
      Object.keys(d).forEach(function (e) {
        Object.defineProperty(h, e, {
          get: function () {
            if (!c.inited || (!c.rectInfo[e] && "canUseNav" !== e)) {
              var t = u()[e];
              return t || !1 === t ? t : (setTimeout(u, 300), d[e]);
            }
            return c.rectInfo[e];
          },
        });
      });
    },
    sRlI: function (e, t, i) {
      i.r(t);
      var r = i("eijD"),
        a = i("Fcif"),
        o = i("9ZMt"),
        n = i("US/N"),
        s = i("YeA1"),
        d = i("MLLI"),
        c = i("4Oq2"),
        u = [
          "packages/goods/cart/index",
          "packages/goods/detail/index",
          "pages/goods/detail/index",
          "packages/goods-v2/detail/index",
          "packages/goods-v3/detail/index",
          "packages/trade/cart/index",
          "packages/trade-cart/cart/index",
          "packages/trade/cart-v1/index",
        ],
        h = () => {
          var e = Object(d.b)(),
            { statusBarHeight: t, windowWidth: i, fontSizeSetting: r = 16 } = e,
            { top: a, height: o, right: n, width: s } = c.a,
            u = i - n;
          return {
            height: Object(c.b)(),
            paddingTop: t,
            fontSizeSetting: r,
            textWidth: i - 2 * s - 4 * u,
            customIconStyle:
              "width: " +
              o +
              "px;height: " +
              o +
              "px;left: " +
              u +
              "px;top: " +
              a +
              "px;",
          };
        },
        l = {
          data: () =>
            Object(a.a)(
              {
                orderInitData: {},
                showOrderkeep: !1,
                displayData: {},
                buyerStayData: {},
                isSHowStayBuyerDialog: !0,
                canUseNav: !0,
                titleText: "确认订单",
                shopConfig: {},
                goods: {},
                pointDeduction: {},
                coupon: {},
                shop: {},
                pay: {},
                order: {},
                orderKeepApply: !0,
                display: {},
                orderPaid: !1,
                themeColors: {},
              },
              h()
            ),
          computed: {
            orderCreated() {
              var { order: e = {} } = this,
                { orderNos: t } = e;
              return !(!Array.isArray(t) || !t.length);
            },
            orderFinalPrice() {
              return this.ctx.data.orderFinalPrice;
            },
          },
          created() {
            var e = this;
            return Object(r.a)(function* () {
              Object(s.b)(e, [
                "shopConfig",
                "goods",
                "pointDeduction",
                "coupon",
                "shop",
                "pay",
                "order",
                "orderKeepApply",
                "display",
                "orderPaid",
                "titleText",
                "themeColors",
              ]);
              var t = (yield e.ctx.env.getQueryAsync()) || {},
                {
                  orderNo: i,
                  orderFrom: r = "",
                  bookKey: a,
                  addressId: o,
                  prevBookKey: n = "",
                } = t;
              (e.orderInitData = {
                orderFrom: r,
                addressId: o,
                bookKey: a,
                prevBookKey: n,
                orderNo: i,
              }),
                e.initNavBar();
              var { canUseNav: d } = c.a;
              d || (e.canUseNav = !d);
            })();
          },
          destroyed() {
            this.giveUp ||
              (this.setTimeoutTimer && clearTimeout(this.setTimeoutTimer),
              this.canOrderKeep() &&
                this.orderKeepApply &&
                this.triggerOnUnloadOrderKeep());
          },
          methods: {
            initNavBar() {
              var {
                height: e,
                paddingTop: t,
                fontSizeSetting: i,
                textWidth: r,
                customIconStyle: a,
              } = h();
              (this.height = e),
                (this.paddingTop = t),
                (this.fontSizeSetting = i),
                (this.textWidth = r),
                (this.customIconStyle = a);
            },
            canOrderKeep() {
              var e,
                t,
                i,
                r =
                  null == (e = this.goods) || null == (t = e.list)
                    ? void 0
                    : t.length,
                a = getCurrentPages(),
                o = a[a.length - 2],
                n = (null == o ? void 0 : o.route) || "",
                s = (null == (i = this.display) ? void 0 : i.forbidPay) || !r;
              return u.indexOf(n) > -1 && !s && !this.payResultSuccess;
            },
            orderKeepDispalyData() {
              var { buyerStayData: e } = this,
                { attractiveHints: t } = e;
              return { title: "确认放弃付款吗？", content: t && t[0] };
            },
            orderKeepComfirm() {
              this.showOrderkeep = !1;
            },
            orderKeepGiveup() {
              (this.giveUp = !0),
                (this.showOrderkeep = !1),
                setTimeout(() => {
                  o.default.navigateBack();
                }, 50);
            },
            triggerOnUnloadOrderKeep() {
              var e;
              if (!this.loadingStayBuy && !this.orderPaid) {
                var { orderCreated: t } = this,
                  {
                    bookKey: i,
                    orderFrom: r,
                    addressId: o,
                    prevBookKey: n,
                  } = this.orderInitData,
                  s = ((null == (e = this.order) ? void 0 : e.orderNos) ||
                    [])[0];
                (this.loadingStayBuy = !0),
                  this.ORDER_KEEP().then(() => {
                    var e = this.orderKeepDispalyData(),
                      { isSHowStayBuyerDialog: d } = this;
                    if (d) {
                      var c = {
                        displayData: Object(a.a)({}, e, {
                          orderNo: s || "",
                          orderCreated: t,
                          price: this.orderFinalPrice,
                        }),
                      };
                      (c.orderData = {
                        bookKey: i || n,
                        addressId: o,
                        orderFrom: r,
                        orderNo: s,
                      }),
                        getApp().trigger("order:leave:stop", c);
                    }
                    this.loadingStayBuy = !1;
                  });
              }
            },
            triggerOrderKeepDialog() {
              var e,
                { orderCreated: t } = this,
                i = ((null == (e = this.order) ? void 0 : e.orderNos) || [])[0];
              this.loadingStayBuy ||
                ((this.loadingStayBuy = !0),
                this.ORDER_KEEP()
                  .then(() => {
                    var e = this.orderKeepDispalyData(),
                      { isSHowStayBuyerDialog: r } = this;
                    r
                      ? ((this.showOrderkeep = !0),
                        (this.displayData = Object(a.a)({}, e, {
                          orderNo: i,
                          orderCreated: t,
                          price: this.orderFinalPrice,
                        })))
                      : ((this.giveUp = !0), o.default.navigateBack()),
                      (this.loadingStayBuy = !1);
                  })
                  .catch(() => {
                    (this.giveUp = !0), o.default.navigateBack();
                  }));
            },
            onBackTap() {
              this.canOrderKeep() && this.orderKeepApply
                ? this.triggerOrderKeepDialog()
                : wx.navigateBack({
                    fail: () => {
                      o.default.navigate({
                        url: "/pages/home/dashboard/index",
                        type: "reLaunch",
                      });
                    },
                  });
            },
            RESET_BUYER_STAY() {
              this.buyerStayData = {};
            },
            SET_BUYER_STAY_SHOW(e) {
              this.isSHowStayBuyerDialog = e;
            },
            SET_BUYER_STAY(e) {
              this.buyerStayData = Object(a.a)({}, this.buyerStayData, e);
            },
            ORDER_KEEP() {
              this.RESET_BUYER_STAY();
              var {
                  goods: e,
                  pointDeduction: t,
                  coupon: i,
                  shop: r,
                  pay: o,
                  order: s,
                } = this,
                { activities: d = [] } = r,
                { orderCreated: c } = this,
                u =
                  (null == s ? void 0 : s.mergePrepayOrderNo) ||
                  ((null == s ? void 0 : s.orderNos) || [])[0],
                h = c ? 1 : 0,
                {
                  realPay: l,
                  decrease: g,
                  itemPay: p,
                  originPostage: y,
                  postage: v,
                  pay: f,
                  originItemPrice: m,
                  originDecrease: S,
                } = o,
                { availableCoupons: O = [] } = i;
              if (O.length > 30 || d.length > 20 || e.list.length > 15)
                return this.SET_BUYER_STAY_SHOW(!1), Promise.resolve(1);
              var b = O.map((e) => {
                  var {
                    choose: t,
                    condition: i,
                    discount: r,
                    denominations: a,
                    endAt: o,
                    id: n,
                    name: s,
                    originCondition: d,
                    startAt: c,
                    unitDesc: u,
                    valueDesc: h,
                    value: l,
                  } = e;
                  return {
                    choose: t,
                    condition: i,
                    discount: r,
                    denominations: a,
                    endAt: o,
                    id: n,
                    name: s,
                    originCondition: d,
                    startAt: c,
                    unitDesc: u,
                    valueDesc: h,
                    value: l,
                  };
                }),
                I = {
                  realPay: l,
                  decrease: g,
                  itemPay: p,
                  originPostage: y,
                  postage: v,
                  pay: f,
                  originItemPrice: m,
                  originDecrease: S,
                },
                D = e.list.map((e) => {
                  var {
                    alias: t,
                    goodsId: i,
                    kdtId: r,
                    num: a,
                    skuId: o,
                    activities: n = [],
                  } = e;
                  return {
                    alias: t,
                    goodsId: i,
                    kdtId: r,
                    num: a,
                    skuId: o,
                    activities: n,
                  };
                }),
                B = d.map((e) => {
                  var {
                    value: t,
                    title: i,
                    type: r,
                    typeId: a,
                    startAt: o,
                    name: n,
                    id: s,
                    endAt: d,
                  } = e;
                  return {
                    value: t,
                    title: i,
                    type: r,
                    typeId: a,
                    startAt: o,
                    name: n,
                    id: s,
                    endAt: d,
                  };
                }),
                { isUse: P, costPoints: k } = t,
                K = Object(a.a)({}, t, { costPoints: P ? k : 0 });
              return Object(n.default)({
                origin: "cashier",
                withCredentials: !0,
                method: "POST",
                path: "/pay/wsctrade/order/buy/fetchOrderKeep.json",
                data: {
                  pointDeduction: K,
                  orderNo: u,
                  stayType: h,
                  orderItems: D,
                  coupons: b,
                  activities: B,
                  orderPayment: I,
                },
              })
                .then((e) => {
                  this.SET_BUYER_STAY(e);
                })
                .catch((e) => {
                  if (102570009 === +e.code)
                    return this.SET_BUYER_STAY_SHOW(!1), Promise.resolve(1);
                  throw e;
                });
            },
          },
          ud: !0,
        };
      t.default = o.default.component(l);
    },
    twMw: function (e, t, i) {
      i.d(t, "a", function () {
        return o;
      });
      var r = i("9ZMt"),
        a = {
          inited: !1,
          isFetching: !1,
          systemInfo: {
            SDKVersion: "",
            batteryLevel: 100,
            benchmarkLevel: 1,
            brand: "",
            fontSizeSetting: 16,
            language: "zh",
            model: "",
            pixelRatio: 1,
            platform: "",
            screenHeight: 0,
            screenWidth: 0,
            statusBarHeight: 0,
            system: "",
            version: "",
            windowHeight: 0,
            windowWidth: 0,
          },
        };
      a.isFetching ||
        ((a.isFetching = !0),
        r.default.$native.getSystemInfo &&
          r.default.$native.getSystemInfo({
            success: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              (a.systemInfo = e), (a.inited = !0);
            },
            fail: function (e) {},
            complete: function () {
              a.isFetching = !1;
            },
          }));
      var o = Object.create(null);
      Object.keys(a.systemInfo).forEach(function (e) {
        Object.defineProperty(o, e, {
          get: function () {
            return a.inited
              ? a.systemInfo[e]
              : (r.default.$native.getSystemInfoSync &&
                  ((a.systemInfo = r.default.$native.getSystemInfoSync()),
                  (a.inited = !0)),
                a.systemInfo)[e];
          },
        });
      }),
        Object.defineProperty(o, "isAndroid", {
          get: function () {
            return /android/i.test(o.system);
          },
        }),
        Object.defineProperty(o, "isIphoneX", {
          get: function () {
            return /iphone x/i.test(o.model);
          },
        }),
        (t.b = function () {
          return (
            !a.inited &&
              r.default.$native.getSystemInfoSync &&
              ((a.systemInfo = r.default.$native.getSystemInfoSync()),
              (a.inited = !0)),
            a.systemInfo
          );
        });
    },
  })
);
