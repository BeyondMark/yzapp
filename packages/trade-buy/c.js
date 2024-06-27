"use strict";
(exports.ids = [8]),
  (exports.modules = {
    "/BRk": function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a,
        s = (a = r("fq/J")) && a.__esModule ? a : { default: a };
      function o(e, t) {
        for (var r = 0; r < t.length; r++) {
          var a = t[r];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function i(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var n = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            i(this, "watchers", void 0),
            i(this, "__notifyTimes", void 0),
            i(this, "_id", void 0),
            (this.watchers = new Map()),
            (this.__notifyTimes = {}),
            (this._id = 0);
        }
        var t, r, a;
        return (
          (t = e),
          (r = [
            {
              key: "watch",
              value: function (e, t, r) {
                var a = this;
                if (e && t) {
                  this.__notifyTimes[e] > 0 && t.call(r, r.data[e]);
                  var o = ++this._id,
                    i = this.watchers.get(e) || {
                      key: e,
                      unWatch: function () {
                        a._unWatchAll(e);
                      },
                      noticeHandler: new Map(),
                    };
                  return (
                    i.noticeHandler.set(o, { id: o, handler: t }),
                    this.watchers.set(e, i),
                    this._unWatch(e, o)
                  );
                }
                s.default.info(
                  "ranta-adapter: watch: 缺少 watch name 或者 回调函数 callback"
                );
              },
            },
            {
              key: "unWatch",
              value: function (e) {
                this._unWatchAll(e);
              },
            },
            {
              key: "_unWatch",
              value: function (e, t) {
                var r = this;
                return function () {
                  var a = r.watchers.get(e);
                  a && a.noticeHandler.delete(t);
                };
              },
            },
            {
              key: "_unWatchAll",
              value: function (e) {
                var t = this.watchers.get(e);
                t &&
                  (t.noticeHandler.clear(),
                  (t.unWatch = function () {}),
                  this.watchers.set(e, t)),
                  this.watchers.delete(e);
              },
            },
            {
              key: "notify",
              value: function (e, t, r) {
                void 0 === this.__notifyTimes[e]
                  ? (this.__notifyTimes[e] = 1)
                  : (this.__notifyTimes[e] += 1);
                var a = this.watchers.get(e);
                a &&
                  a.noticeHandler.forEach(function (e) {
                    e.handler.apply(r, t);
                  });
              },
            },
          ]) && o(t.prototype, r),
          a && o(t, a),
          e
        );
      })();
      (t.default = n), (e.exports = t.default);
    },
    "4LIW": function (e, t, r) {
      function a(e) {
        e.logger &&
          e.logger.log({
            et: "click",
            ei: "orderCreateBtnClick",
            en: "提交订单按钮点击",
            pt: "trade",
            params: {},
          });
      }
      r.d(t, "b", function () {
        return a;
      }),
        r.d(t, "a", function () {
          return o;
        });
      var s = {
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
      function o(e) {
        return function (t, r) {
          void 0 === r && (r = "");
          try {
            var a = s[t];
            e.logger &&
              e.logger.log({
                et: "custom",
                ei: a.ei,
                en: a.en,
                pt: "trade",
                params: { desc: JSON.stringify(r) },
              });
          } catch (e) {}
        };
      }
    },
    "4NdJ": function (e, t, r) {
      r.d(t, "c", function () {
        return s;
      }),
        r.d(t, "b", function () {
          return o;
        }),
        r.d(t, "d", function () {
          return i;
        }),
        r.d(t, "a", function () {
          return n;
        });
      var a = {};
      var s = function (e, t) {
          void 0 === e && (e = a);
          var { action: r } = t,
            s = { component: "goods_num_selector" };
          switch (r) {
            case "plus":
              s.add_nums = 1;
              break;
            case "minus":
              s.less_nums = 1;
          }
          e.logger &&
            e.logger.log({
              et: "click",
              ei: "add_or_less_nums",
              en: "加减数量",
              params: s,
            });
        },
        o = function (e, t) {
          void 0 === e && (e = a);
          var { value: r } = t;
          e.logger &&
            e.logger.log({
              et: "custom",
              ei: "modify_nums",
              en: "直接修改数量值",
              params: {
                modify_value: Number(r),
                component: "goods_num_selector",
              },
            });
        },
        i = function (e) {
          void 0 === e && (e = a),
            e.logger &&
              e.logger.log({
                et: "view",
                ei: "goods_num_selector_show",
                en: "商品数量选择器曝光",
                params: { component: "goods_num_selector" },
              });
        },
        n = (e) => {
          a = e;
        };
    },
    "4Ns+": function (e, t, r) {
      r.d(t, "a", function () {
        return s;
      }),
        r.d(t, "b", function () {
          return o;
        });
      var a = r("mztD"),
        s = {
          hotel: [
            {
              path: Object(a.a)(
                "v2/image/wap/trade/new_order/hotel_guide/step1_2@2x.png"
              ),
              title: "1.选择房型并支付",
              svg: !0,
              name: "room-type",
            },
            {
              path: Object(a.a)(
                "v2/image/wap/trade/new_order/hotel_guide/step2_2@2x.png"
              ),
              title: "2.商家接单确认",
              svg: !0,
              name: "confirm",
            },
            {
              path: Object(a.a)(
                "v2/image/wap/trade/new_order/hotel_guide/step3_2@2x.png"
              ),
              title: "3.预订成功",
              svg: !0,
              name: "success",
            },
          ],
        },
        o = [
          {
            path: Object(a.a)(
              "upload_files/2021/08/10/FkynPpIqsWFKOSFXnyDtOig2_k7B.png"
            ),
            title: "选择商品\n开团/参团",
          },
          {
            path: Object(a.a)(
              "upload_files/2021/08/10/Fgfoe-3X5BK79VUKtwpiRJ7NA8I1.png"
            ),
            title: "邀请好友\n参团支付",
          },
          {
            path: Object(a.a)(
              "upload_files/2021/08/10/FuZhZzhbuMkYHes5AYvRqoT6IhGG.png"
            ),
            title: "人满参团\n失败退款",
          },
        ];
    },
    "4vZ5": function (e, t, r) {
      t.a = {
        WAIT_PAY: "待付款",
        WAIT_PAY_START: "未开始",
        PAID: "已付",
        CLOSE: "已关闭",
        SUCCESS: "已完成",
      };
    },
    "60W9": function (e, t, r) {
      r.d(t, "a", function () {
        return a;
      });
      var a = "default-self-fetch-cache";
    },
    "6aEl": function (e, t, r) {
      r.d(t, "a", function () {
        return s;
      }),
        r.d(t, "b", function () {
          return o;
        });
      var a = r("US/N");
      function s(e) {
        return Object(a.default)({
          origin: "cashier",
          path: "/pay/wsctrade/order/buy/getAssetForOrder.json",
          method: "GET",
          data: { bookKey: e },
          withCredentials: !0,
        });
      }
      function o(e) {
        var { bookKey: t, chosenCoupon: r, points: s } = e,
          o = {
            book_key: t,
            coupon: { coupon_id: r.id, external_type: r.externalType },
            point: { points: s.totalPoints },
          };
        return Object(a.default)({
          origin: "cashier",
          path: "/pay/wsctrade/order/buy/useAsset.json",
          method: "POST",
          data: o,
          withCredentials: !0,
        });
      }
    },
    "6rHZ": function (e, t) {
      e.exports = {
        d: "defaultYzGuarantee;0;defaultFreightInsurance;0;monitorLoggerFilterCode;0;isTTVerifyScene;0;pageTitle;0;tradeGoodsVisible;0;isGrouponModelShow;0;state;4;order;4;orderCreated;4;couponDecrease;4;prepayCardDecrease;4;payUmpDiscountMoney;4;totalPrice;4;orderFinalPrice;4;chosenCoupon;4;pageStyleConfig;4;cloudDelivery;4;cloudGoodsList;4;cloudGoodsInfo;4;coreReady;4;useBeforePayData;4;yzGuarantee;4;pay;4;dataLoaded;4",
        e: "follow:show;lifecycle:pageShow;trade-buy-core:validate-effect",
        el: "onCouponChange;onActivityChanged;onDeleteAddress;onConfirmOrder;onCreateOrder",
        wd: "Skeleton",
        lc: "onEvent;offEvent;onEventOnce;getDb;setDb;getUserInfo;getOrderGrowthParams;getOrderGrowthBizParams",
        p: "handleBeforeFetchShow;handleBeforeCreateOrder;handleAfterOrderPrepay;setNewHotelNum;setHotelPhone;setHotelRecipients;setPageTitle;reTryInit;handlePrepareDefaultError;switchDine;changeCreateOrderParamsSource;changeCreateOrderParamsExt",
        pi: "setTitleName;prepareByBookKey;confirmOrder;deleteAddress;mutateState;setPageTitle;switchAddressTab;updateContactState;deleteContact;updateByCrossStoreSelfFetchCache;reTryInit;updateAddressState;switchAddressTab",
        li: "onPageShow;onPageHide;pageDestroyed;beforePageMount",
      };
    },
    "7+Ia": function (e, t, r) {
      r.d(t, "a", function () {
        return u;
      });
      var a = r("Fcif"),
        s = {
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
        o = r("87Y/"),
        i = r.n(o),
        n = {
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
                  i()(t, 0.1) +
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
                { raiseType: a, userName: s, invoiceDetailType: o } = t;
              a &&
                s &&
                o &&
                (e =
                  (1 === r ? "普票" : "专票") +
                  " （" +
                  ("personal" === a ? "个人" : "企业") +
                  "-" +
                  ("itemDetail" === o ? "商品明细" : "商品类别") +
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
        d = r("VmHG"),
        c = [
          { state: { dataLoaded: !1, tradeTag: {} }, getters: {} },
          s,
          n,
        ].reduce((e, t) => {
          return (
            void 0 === (r = e) && (r = {}),
            void 0 === (s = t) && (s = {}),
            {
              state: Object(a.a)({}, r.state, s.state),
              getters: Object(a.a)({}, r.getters, s.getters),
              actions: Object(a.a)({}, r.actions, s.actions),
            }
          );
          var r, s;
        }, {});
      var l = r("YeA1");
      function u(e) {
        var t;
        e.ctx.store
          ? (e.store = e.ctx.store)
          : ((e.ctx.store =
              ((t = e.ctx),
              Object(d.a)({
                state: () => Object(a.a)({}, c.state),
                getters: Object(a.a)({}, c.getters),
                actions: Object(a.a)(
                  {},
                  c.actions,
                  s.getActions(t),
                  n.getActions(t)
                ),
              }))),
            (e.store = e.ctx.store),
            Object(d.c)(e, [
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
            Object(l.e)(e, { invoiceActionSubmit: e.store.setInvoiceSubmit }));
      }
    },
    "7PBX": function (e, t, r) {
      r.d(t, "a", function () {
        return a;
      }),
        r.d(t, "b", function () {
          return s;
        }),
        r.d(t, "c", function () {
          return c;
        }),
        r.d(t, "d", function () {
          return l;
        });
      var a = {
          bargain: 1,
          benefit: 3,
          forceRiseFollower: 7,
          seckill: 8,
          luckyDrawGroup: 9,
        },
        s = { bargain: 0 },
        o = {
          title: "成为店铺粉丝立享福利价",
          subTitle: "还能了解最新优惠信息",
          btnText: "成为粉丝",
        },
        i = {
          title: "成为店铺粉丝才能发起砍价",
          subTitle: "还能了解最新优惠信息",
          btnText: "成为粉丝",
        },
        n = {
          title: "成为店铺粉丝才能参与抽奖",
          subTitle: "还能了解最新优惠信息",
          btnText: "成为粉丝",
        },
        d = { title: "成为店铺粉丝才能购买" };
      function c(e) {
        var { bizCode: t, bizSubCode: r } = void 0 === e ? {} : e;
        return t === a.bargain && r === s.bargain
          ? "bargain"
          : t === a.benefit
          ? "benefit"
          : t === a.luckyDrawGroup
          ? "luckyDrawGroup"
          : t === a.forceRiseFollower
          ? "forceRiseFollower"
          : t === a.seckill
          ? "seckill"
          : "";
      }
      function l(e) {
        var { bizCode: t, bizSubCode: r } = e;
        return t === a.bargain && r === s.bargain
          ? i
          : t === a.benefit
          ? o
          : t === a.luckyDrawGroup
          ? n
          : t === a.forceRiseFollower && d;
      }
    },
    ANll: function (e, t, r) {
      r.d(t, "a", function () {
        return qt;
      });
      var a,
        s = r("VmHG"),
        o = r("Fcif"),
        i = r("Sipi");
      a = { getItem: i.b, removeItem: i.c, setItem: i.d };
      function n(e) {
        var t;
        try {
          var r;
          t =
            null == (r = JSON.parse(a.getItem("crossStoreSelfFetchCache")))
              ? void 0
              : r[e];
        } catch (e) {}
        return t;
      }
      var d = r("o5pj"),
        c = r("xyw3");
      function l(e) {
        return e.reduce((e, t) => e + t, 0);
      }
      function u(e) {
        return Object(c.a)(e).toYuan();
      }
      function p(e, t, r, a) {
        var s = [];
        return (
          r && s.push(r + a),
          (!t && r) || s.push(e + (t / 100).toFixed(2)),
          s.join(" + ")
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
              a,
              s,
              o = this.tradeState;
            return Object(d.b)(
              null == o || null == (e = o.address) ? void 0 : e.inlineForm
            )
              ? this.receiveByGroupHeader
                ? null == o || null == (t = o.groupon)
                  ? void 0
                  : t.headerInfo
                : (null == o || null == (r = o.address) || null == (a = r.list)
                    ? void 0
                    : a.filter(
                        (e) => e.id === (null == o ? void 0 : o.address.id)
                      )[0]) || {}
              : null == o || null == (s = o.address)
              ? void 0
              : s.inlineForm;
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
              a,
              s,
              o = this.tradeState;
            return null != (e = o.contact) && e.id
              ? (null == o || null == (a = o.contact) || null == (s = a.list)
                  ? void 0
                  : s.find((e) => e.id === o.contact.id)) || {}
              : {
                  userName:
                    null == o || null == (t = o.contact) ? void 0 : t.userName,
                  telephone:
                    null == o || null == (r = o.contact) ? void 0 : r.telephone,
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
              { display: a } = r;
            return null != a &&
              a.showExpressTab &&
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
                shop: a,
                order: s,
                postage: o,
              } = this.tradeState,
              i = null;
            try {
              var n;
              i =
                null ==
                (n = JSON.parse(
                  (null == t ? void 0 : t.BIZ_IDENTITY_ID) || "{}"
                ))
                  ? void 0
                  : n.bizCategory;
            } catch (e) {}
            return {
              bizCategory: i,
              aliases: ((null == r ? void 0 : r.list) || [])
                .filter((e) => !e.present)
                .map((e) => e.alias || ""),
              activityType: null == a ? void 0 : a.activityType,
              orderType: (null == s ? void 0 : s.orderType) || 0,
              orderMark:
                null == s || null == (e = s.source) ? void 0 : e.orderMark,
              expressType: null == o ? void 0 : o.currentExpressType,
            };
          },
          totalPrice() {
            var {
                points: e = {},
                pay: t = {},
                shop: r,
                pointsName: a,
                displayCard: s = {},
              } = this.tradeState,
              { showDisplayCardPrice: o } = this,
              i = ((r && r.activities) || []).reduce((e, t) => e + t.value, 0);
            i = i ? "-￥" + (i / 100).toFixed(2) : "- ￥" + u(t.decrease);
            var n = t.goodsTax + t.postageTax;
            return {
              priceLabel: p(
                "¥",
                o ? t.itemPay - s.price : t.itemPay,
                e.totalPoints,
                a
              ),
              postage: "+ ¥" + u(t.postage),
              promotions: (t.promotions || []).map(
                (e) =>
                  (e.decrease >= 0 ? "-" : "+") + " ¥" + u(Math.abs(e.decrease))
              ),
              couponDecrease: "- ¥" + u(this.couponDecrease),
              payUmpDiscountMoney: "- ¥" + u(this.payUmpDiscountMoney),
              prepayCardDecrease: "- ¥" + u(this.prepayCardDecrease),
              taxPrice: t.showTax ? "+ ¥" + u(n) : "",
              decrease: i,
            };
          },
          isDepositPresale() {
            var e, t, r, a, s;
            return (
              (null == (e = this.tradeState) || null == (t = e.pay)
                ? void 0
                : t.multiPhase) &&
              "DOWN_PAYMENT_PRE" ===
                ((null == (r = this.tradeState) ||
                null == (a = r.pay) ||
                null == (s = a.phasePayment)
                  ? void 0
                  : s.bizCode) || "")
            );
          },
          valueCardTotalAmount() {
            return this.tradeState.valueCard
              ? l(
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
              ? l(
                  this.tradeState.valueCard.list
                    .filter((e) => e.usable)
                    .map((e) => e.balance)
                )
              : 0;
          },
          prepayCardAvailableExclusion() {
            return this.tradeState.valueCard
              ? l(
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
              ? Math.min(l(this.couponDecreasedPhasePayment), t)
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
            var a = [];
            return (
              (a[1] = Math.max(e.postage, 0, t[1] - r)),
              (r -= t[1] - a[1]),
              (a[0] = Math.max(0, t[0] - r)),
              a
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
                        a = (t.toString().split(".")[1] || "").length,
                        s = Math.pow(10, Math.max(r, a));
                      return (e * s + t * s) / s;
                    })(+e, +t)
                  )
                : this.finalPhasePayment[e.phasePayment.currentPhase - 1];
            if (this.tradeState.env.isPayPage)
              return Object(c.a)(this.tradeState.pay.realPay).toYuan();
            var t = this.couponDecreasedPrice - this.prepayCardDecrease;
            return Object(c.a)(t).toYuan();
          },
          finalNeedPayPrice() {
            var { pay: e, env: t } = this.tradeState;
            return e.multiPhase
              ? this.finalPhasePayment[e.phasePayment.currentPhase - 1]
              : t.isPayPage
              ? Object(c.a)(e.realPay).toYuan()
              : Object(c.a)(
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
              Object(c.a)(this.finalPrice).toCent() <
                1 * this.goodsCount + t.postage
            );
          },
          haitaoFinalPrice() {
            var { pay: e, env: t } = this.tradeState;
            return t.isPayPage
              ? Object(c.a)(e.realPay).toYuan()
              : this.haitaoZeroOrder
              ? Object(c.a)(1 * this.goodsCount + e.postage).toYuan()
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
                .map((e) => Object(c.a)(e).toYuan());
            var r = this.couponDecreasedPhasePayment,
              a = [],
              { prepayCardDecrease: s } = this;
            return (
              (a[1] = Math.max(0, r[1] - s)),
              (s -= r[1] - a[1]),
              (a[0] = Math.max(0, r[0] - s)),
              a.map((e) => Object(c.a)(e).toYuan())
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
              a = "";
            r.useStoredCustomerDiscount && +this.orderFinalPrice
              ? ((a = r.payAssetActivityTagDesc ? "recharge" : "noRecharge"),
                null != (e = r.order) &&
                  null != (t = e.config) &&
                  t.isChooseFreeOrder &&
                  (a = ""))
              : r.useStoredMemberCustomerDiscount &&
                !r.useStoreBalancePayInFull &&
                +this.orderFinalPrice &&
                (a = "notEnough");
            return a;
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
        y = r("US/N"),
        f = r("eijD");
      function v(e, t) {
        var { state: r } = e.data;
        t.forEach((t) => {
          e.data[t] = r[t];
        });
      }
      function m(e, t) {
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
          v(e, r);
        else {
          var a;
          if (t.display)
            e.data.display = Object(o.a)(
              {},
              (null == (a = e.data) ? void 0 : a.display) || {},
              t.display || {}
            );
          v(e, [
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
            m(e, [
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
            (e.data.order = Object(o.a)({}, t.order)),
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
        return P.apply(this, arguments);
      }
      function P() {
        return (P = Object(f.a)(function* (e, t) {
          var r = e.store.tradeState;
          g(e, r, yield t(r));
        })).apply(this, arguments);
      }
      function O(e, t) {
        t.data.orderCreation = e.orderCreation;
      }
      function S(e, t) {
        var { displayConfig: r = {}, tradeConfirmation: a } = e,
          s = 60 * (new Date().getTimezoneOffset() + 480) * 1e3;
        t.data.display = Object(o.a)({}, r, {
          newRecommend: null == a ? void 0 : a.newRecommend,
          serverTime: r.serverTime + s,
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
                Object(y.setRequestDep)({ kdtId: e });
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
                  (e) => ((e.extensions = Object(o.a)({}, e.extensions, t)), [])
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
                m(e, [
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
        T = [
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
            void 0 === (a = t) && (a = {}),
            {
              state: Object(o.a)({}, r.state, a.state),
              getters: Object(o.a)({}, r.getters, a.getters),
              actions: Object(o.a)({}, r.actions, a.actions),
            }
          );
          var r, a;
        }, {});
      function I(e) {
        var t = Object(s.a)({
          state: () => Object(o.a)({}, T.state, k.getState(e)),
          getters: Object(o.a)({}, T.getters),
          actions: Object(o.a)({}, T.actions, k.getActions(e)),
        });
        return (
          ((e, t) => {
            k.createWatch(e, t);
          })(e, t),
          t
        );
      }
      var w = r("AGZf");
      var x = r("lgMb"),
        D = r("Dksy"),
        E = r("PfmZ"),
        _ = r("xeEc");
      function A(e, t) {
        void 0 === t && (t = {}), (e = "[weapp]" + e), _.a.info(e, t);
      }
      var j = r("g3wL"),
        N = r("Ix7h"),
        R = (e, t) => {
          var r = "",
            a = {},
            s = {},
            o = Object(N.a)(function () {
              var t = r;
              e(...arguments)
                .then((e) => {
                  a[t](e);
                })
                .catch((e) => {
                  s[t](e);
                });
            }, t);
          return function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
              t[i] = arguments[i];
            return new Promise((e, i) => {
              (r = Math.random().toString(16).slice(2, 10)),
                (a[r] = e),
                (s[r] = i),
                o(...t);
            });
          };
        },
        F = r("zjWU"),
        B = r("NHEX"),
        M = r.n(B),
        L = r("x5Yp"),
        G = r("qYBx"),
        U = r("xers"),
        W = r.n(U),
        H = r("5Mqe"),
        z = r.n(H),
        K = 1,
        V = 2,
        q = 24;
      var Y = (e, t) => {
          var { groupon: r, periodBuy: a } = e;
          return (
            e.idcard.number && (t.idCardNumber = e.idcard.number),
            a.options.length &&
              a.options[a.chosenIndex] &&
              (t.deliverOption = a.options[a.chosenIndex]),
            r.isGroupon &&
              ((t.groupHeader = r.isHeader),
              (t.groupHeaderReceive = r.isChecked),
              (t.receiveState = r.receiveState)),
            t
          );
        },
        J = function (e, t, r) {
          var a, s;
          void 0 === r && (r = {});
          var { expressType: i, currentContact: n, selfFetchTime: d } = t,
            c = "self-fetch" === i,
            l = { hasFreightInsurance: e.tradeTag.hasFreightInsurance };
          if (null != (a = e.dine) && a.isDineOrder)
            return (l = Object(o.a)({}, l, e.order.delivery, {
              pickUpWay: e.pickUpWay.id,
            }));
          if (e.display.showAddressTab) {
            var u,
              p = (function (e, t, r) {
                void 0 === r && (r = {});
                var { delivery: a } = e,
                  s =
                    "express" === t.expressType
                      ? Object(o.a)({}, t.currentAddress)
                      : {};
                if (!W()(s)) {
                  var i;
                  if (
                    (s.id && (s.addressId = s.id),
                    s.houseNumber &&
                      ((s.addressDetail += " " + s.houseNumber),
                      delete s.houseNumber),
                    s.lat && s.lon && ((s.lat += ""), (s.lon += "")),
                    s.tel &&
                      (s.tel =
                        (void 0 === (i = s.tel) && (i = ""),
                        i.replace(/[^-|\d]/g, ""))),
                    e.display.showLocalDeliveryBucket)
                  ) {
                    var {
                      instantTimePoint: n,
                      startTime: d,
                      endTime: c,
                      timeSpan: l,
                    } = a;
                    d || c || !n
                      ? e.display.showLocalDeliveryTime &&
                        !r.resetDelivery &&
                        ((s.deliveryStartTime = d),
                        (s.deliveryEndTime = c),
                        (s.deliveryTimeSpan = l))
                      : (s.instantTimePoint = n);
                  }
                  return s;
                }
              })(e, t, r);
            !p ||
              (null != (u = e.dine) && u.isDineOrder) ||
              (Y(e, p),
              (l.address = p),
              e.display.showLocalDeliveryBucket &&
                r.isNeedAppointmentType &&
                (l.appointmentType =
                  e.delivery.startTime && e.delivery.endTime ? K : V)),
              (l.expressType = i);
          }
          if (c && (null == (s = e.dine) || !s.isDineOrder)) {
            var { selfFetch: h } = e;
            (l.selfFetch = Object(o.a)({}, h.shop, {
              selfFetchStartTime: h.selfFetchStartTime,
              selfFetchEndTime: h.selfFetchEndTime,
              appointmentId: n.id,
              appointmentTime: d,
              appointmentTel: n.telephone,
              appointmentPerson: n.userName,
            })),
              Y(e, l.selfFetch),
              (l.selfFetch.lat =
                null == l.selfFetch.lat
                  ? l.selfFetch.lat
                  : l.selfFetch.lat + ""),
              (l.selfFetch.lng =
                null == l.selfFetch.lng
                  ? l.selfFetch.lng
                  : l.selfFetch.lng + ""),
              l.selfFetch.businessHoursAdvanced &&
                (l.selfFetch.businessHoursAdvanced = JSON.stringify(
                  l.selfFetch.businessHoursAdvanced
                ));
          }
          if (e.contact.required) {
            l.contacts = {
              id: n.id,
              recipients: n.userName,
              tel: n.telephone,
              groupHeader: e.groupon.isHeader,
            };
            var y = M()(e.order.delivery, "contacts.appointmentTime", "");
            y && Object.assign(l.contacts, { appointmentTime: y });
          }
          var f = c ? 1 : e.postage.currentExpressType;
          return (
            "plusBuy" === r.scene &&
              9 === f &&
              e.postage.postageItems &&
              e.postage.postageItems.length > 0 &&
              (f = e.postage.postageItems[0].expressType),
            r.isAddressIdChange || (!c && 1 === f) || (l.expressTypeChoice = f),
            isNaN(r.expressTypeChoice) ||
              ((l.expressType =
                1 == +r.expressTypeChoice ? "self-fetch" : "express"),
              (l.expressTypeChoice = +r.expressTypeChoice)),
            e.tradeTag.hasHotelGoods &&
              (l.hotelBooking = Object(o.a)(
                { tel: e.hotel.phone, recipients: e.hotel.recipients },
                e.hotel.booking
              )),
            l
          );
        },
        Z = (e) => {
          var t = {},
            { valueCard: r, order: a } = e,
            { config: s = {} } = a;
          return (
            s.isChooseFreeOrder ||
              (r.checked.length &&
                (t.valueCardNos = r.checked.filter((e) => "RC" !== e)),
              (t.Nos || t.valueCardNos) && (t.kdtId = e.shop.kdtId)),
            t
          );
        };
      function X() {
        return getApp().storage.get("gps_location");
      }
      var Q = function (e, t, r) {
        var a;
        void 0 === t && (t = {}), void 0 === r && (r = {});
        var s,
          i,
          { order: n, disableStoredDiscount: d } = e,
          { keepSelect: c, isCustomerSelect: l = !1 } = r,
          u = Object(o.a)({}, n.config, {
            buyerMsg: n.buyerMsg,
            openDisplayCard: n.openDisplayCard,
            disableStoredDiscount: d,
            storedDiscountRechargeGuide: !0,
            yzGuaranteeInfo: t.yzGuaranteeInfo,
            isWholesaleOrder: null == (a = t) ? void 0 : a.isWholesaleOrder,
            isAllowPrivacyWaybill: n.isAllowPrivacyWaybill,
          });
        ((s = X) && (u.buyer_gps = s),
        e.goods.list.some((e) => e.isPrescriptionDrugGoods) &&
          e.isDrugShop &&
          (u.bizCategory = "MEDICINE"),
        e.invoice.submit && Object.keys(e.invoice.submit).length) &&
          (u.invoice = Object(o.a)({}, e.invoice.submit, {
            invoiceType: null == (i = e.invoice) ? void 0 : i.invoiceType,
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
            (u.idCard = p)),
          (c || l) &&
            (u.valueCardsExtContext = JSON.stringify({
              IS_RELOAD: !!c,
              CUSTOMER_SELECT_CARD_LIST: !!l,
            })),
          e.tradeTag.hasHotelGoods &&
            e.hotel.newHotelExtensions &&
            (delete e.hotel.newHotelExtensions.bookingDesc,
            (u.newHotelExtensions = e.hotel.newHotelExtensions)),
          u
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
                    a = M()(r, "user", {}),
                    s = Object(o.a)({}, M()(r, "context"), M()(r, "plat"), {
                      uuid: a.uuid,
                      userId: a.li,
                    });
                  return (
                    (s = Object(o.a)({}, s, { platform: "weapp" })),
                    JSON.stringify(s)
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
              (r = z()(t.map((e) => e.presents)).filter((e) => e.isSelected)),
            {
              SELECTED_PRESENTS: JSON.stringify(
                r.map((e) => {
                  var {
                    fromActivityId: t,
                    fromActivityType: r,
                    id: a,
                    goodsId: s,
                    skuId: o,
                  } = e;
                  return {
                    activityId: t,
                    activityType: r,
                    presentId: a,
                    goodsId: s,
                    skuId: o,
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
        ae = (e, t) => {
          var r;
          if (
            !1 === (null == (r = e.coupon) ? void 0 : r.ignoreVirtualCoupon)
          ) {
            var a = { IGNORE_VIRTUAL_COUPON: "false" };
            return t.bigsetCoupon && (a.CHANGE_EXPRESS_RESET_COUPONS = "1"), a;
          }
          return { IGNORE_VIRTUAL_COUPON: "true" };
        };
      function se(e, t) {
        void 0 === t && (t = {});
        var { state: r, couponModel: a } = e.data,
          {
            order: s,
            goods: o,
            displayCard: i,
            plusBuy: n,
            postageTool: d,
          } = r,
          c = s.items || [],
          l = JSON.parse(JSON.stringify(c)),
          u = o.list || [],
          p = (null == a ? void 0 : a.chosenCoupon) || {},
          h = !1;
        if (!Object(L.a)(i))
          if (s.openDisplayCard) {
            if (!l.some((e) => e.goodsId === i.goodsId)) {
              var { kdtId: y, goodsId: f, skuId: v } = i;
              l = [...l, { kdtId: y, goodsId: f, skuId: v, num: 1 }];
            }
          } else l = l.filter((e) => e.goodsId !== i.goodsId);
        if (
          (l.forEach((e) => {
            if (
              (e.extensions || (e.extensions = {}),
              r.tradeTag.hasHotelGoods &&
                (e.extensions.NEW_HOTEL_GOOD = r.hotel.newHotelExtensions
                  ? "1"
                  : "0"),
              13 === p.groupType)
            ) {
              var t =
                  u.find(
                    (e) => e.itemId === p.optimalPreferentialOrderItemIds[0]
                  ) || {},
                { outerItemId: a } = t;
              a &&
                +a == +e.extensions.OUTER_ITEM_ID &&
                ((e.extensions.USE_GOODS_EXCHANGE_COUPON = "1"), (h = !0));
            }
          }),
          d.selected)
        ) {
          var m = Object.keys(d.selected);
          if (m.length > 0) {
            for (var g of l) {
              var b = d.selected[g.skuId];
              if (
                b &&
                !g.present &&
                g.activityType !== q &&
                JSON.stringify(b.propertyIds || []) ===
                  JSON.stringify(g.propertyIds || [])
              ) {
                g.num += b.num;
                var C = m.indexOf("" + g.skuId);
                m.splice(C, 1);
              }
            }
            m.forEach((e) => {
              l.push(d.selected[e]);
            });
          }
        }
        if (Array.isArray(n.selected) && n.selected.length > 0) {
          var P = l.length;
          (l = [...l, ...n.selected]),
            13 === p.groupType &&
              l.slice(P).forEach((e) => {
                if (!h) {
                  var t =
                    u.find(
                      (e) => e.itemId === p.optimalPreferentialOrderItemIds[0]
                    ) || {};
                  t.goodsId === e.goodsId &&
                    t.skuId === e.skuId &&
                    ((h = !0), (e.extensions.USE_GOODS_EXCHANGE_COUPON = "1"));
                }
              });
        }
        var { goodsId: O, skuId: S, num: k } = t;
        if (void 0 !== O && void 0 !== S && "number" == typeof k)
          for (var T of l)
            if (T.goodsId === O && T.skuId === S) {
              T.num = k;
              break;
            }
        return l;
      }
      function oe(e, t) {
        void 0 === t && (t = e.pointDeduction.isUse);
        var { canCostPoints: r, defaultPointDeductEffect: a } =
          e.pointDeduction;
        return {
          kdtId: e.shop.kdtId,
          usePointDeduction: t,
          costPoints: t ? r : 0,
          defaultPointDeductEffect: a,
        };
      }
      function ie(e, t, r, a, s) {
        var i,
          n,
          d = e.data.couponModel || {},
          c = e.data.orderedChosenCoupons || [],
          {
            chosenCoupon: l = {},
            chosenCoupons: u,
            chosenDeliveryCoupons: p = [],
          } = d,
          { order: h, plusBuy: y } = t,
          f = {};
        l.id &&
          ((f.id = d.externalId || l.id),
          (f.couponType = l.type),
          (f.outerCoupon = d.externalId ? 1 : 0));
        var v = { coupons: [] };
        null != u && u.length
          ? (v.coupons = u.map((e) => {
              var t = d.externalId || e.id,
                r = c.findIndex((e) => e === t);
              return {
                id: t,
                couponType: e.type,
                outerCoupon: d.externalId ? 1 : 0,
                systemChoose: !1,
                chosenOrder: r,
              };
            }))
          : l.id &&
            (v.coupons = [
              Object(o.a)({}, f, { systemChoose: !1, chosenOrder: 0 }),
            ]);
        var m = null == e || null == (i = e.data) ? void 0 : i.meituanCoupons;
        if (m) {
          var { chosen: g, coupons: b } = m,
            C = function (e, t) {
              if (t) {
                var r = b.find((t) => t.id === +e);
                v.coupons.push({
                  id: e,
                  couponType: r.type,
                  outerCoupon: 0,
                  systemChoose: !1,
                  chosenOrder: h,
                });
              }
            };
          for (var [P, O] of Object.entries(g)) C(P, O);
        }
        var S = { specified: !1 };
        if (
          (null != t.customerCards.id &&
            (t.customerCards.isActiveSelection || s) &&
            ((S.customerCardId = t.customerCards.id), (S.specified = !0)),
          t.points.externalId)
        ) {
          var { activities: k } = h.ump;
          Array.isArray(k) &&
            k.forEach((e) => {
              e.usePoints && (e.externalPointId = t.points.externalId);
            });
        }
        var { activities: T = [] } = h.ump;
        Array.isArray(y.selected) &&
          y.selected.length > 0 &&
          (T = [
            ...T,
            ...y.selected.map((e) => {
              var {
                activityId: t,
                activityType: r,
                goodsId: a,
                kdtId: s,
                skuId: o,
                propertyIds: i,
              } = e;
              return {
                activityId: t,
                activityType: r,
                goodsId: a,
                kdtId: s,
                skuId: o,
                propertyIds: i,
              };
            }),
          ]),
          (v.deliveryCoupons = p || []),
          null != (n = v.deliveryCoupons) &&
            n.length &&
            (v.deliveryCoupons = v.deliveryCoupons.map((e) => ({
              id: d.externalId || e.id,
              couponType: e.type,
              outerCoupon: d.externalId ? 1 : 0,
              systemChoose: !1,
              chosenOrder: 0,
            })));
        var I = Object(o.a)({}, h.ump, {
          activities: T,
          coupon: f,
          multiCoupon: v,
          useCustomerCardInfo: S,
          costPoints: oe(t, r),
        });
        return (
          h.newCouponProcess &&
            a &&
            ((I.coupon = { systemChoose: !0 }),
            I.multiCoupon.coupons.forEach((e) => {
              e.systemChoose = !0;
            })),
          I
        );
      }
      function ne(e, t) {
        var { extra: r = {} } = t,
          a = Object(o.a)(
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
              a =
                ((e) => {
                  try {
                    return (
                      e.goods.list.reduce((e, t) => {
                        if (t.showTax) {
                          var { goodsTax: r, num: a, postageTax: s } = t;
                          return e + (r * a + s);
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
            (r = Object(o.a)({}, r, { RISK_GOODS_TAX_INFOS: a })),
              (e.BIZ_ORDER_ATTRIBUTE = JSON.stringify(r));
          })(a, t),
          t.isXhsApp)
        )
          try {
            var s = JSON.parse(a.BIZ_ORDER_ATTRIBUTE || "{}");
            (s.MARKETING_ORDER_SOURCE = "XIAOHONGSHU_MINI_PROGRAM"),
              (a.BIZ_ORDER_ATTRIBUTE = JSON.stringify(s));
          } catch (e) {}
        var i,
          n = getApp().logger.getGlobal() || {},
          d = n.context || {},
          c = n.env || {},
          l = d.weapp_version,
          u = c.version + "-" + l;
        try {
          i = JSON.parse(a.BIZ_ORDER_ATTRIBUTE || "{}");
        } catch (e) {
          return a;
        }
        return (
          (i = Object(o.a)({}, i, { APP_VERSION: u })),
          (a.BIZ_ORDER_ATTRIBUTE = JSON.stringify(i)),
          a
        );
      }
      function de(e) {
        return e.applyInfo ? { EXHIBITIONRESERVE_ENROLLMENT: e.applyInfo } : {};
      }
      function ce(e, t) {
        void 0 === e && (e = {});
        var { store: r } = t,
          a = r.tradeState,
          s = (function (e) {
            return (e.goods.unavailable || []).map((t) => {
              var { combo: r = {} } = t,
                a = {};
              try {
                1 === r.comboType &&
                  ((a.comboType = r.comboType),
                  (a.subComboList = []),
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
                  }, a.subComboList));
              } catch (e) {}
              return {
                skuId: t.skuId,
                propertyIds: t.propertyIds || [],
                goodsId: t.goodsId,
                kdtId: e.shop.kdtId,
                activityType: t.activityType,
                activityId: t.activityId,
                combo: a,
              };
            });
          })(a),
          i = ie(t, a, void 0, void 0, !0),
          n = $(t, a),
          d = Object(o.a)({}, e.extensions, ne(t, a)),
          { display: l } = t.data;
        return Object(o.a)({}, e, {
          version: a.version,
          source: n,
          config: Q(a, l),
          usePayAsset: Z(a),
          items: se(t, {}),
          seller: a.order.seller,
          ump: i,
          newCouponProcess: a.order.newCouponProcess,
          unavailableItems: s,
          delivery: J(a, r, { isNeedAppointmentType: !0 }),
          cloudOrderExt: a.cloudOrderExt,
          bookKeyCloudExtension: a.bookKeyCloudExtension,
          confirmTotalPrice: Object(c.a)(Number(r.orderFinalPrice)).toCent(),
          extensions: d,
          behaviorOrderInfo: a.behaviorOrderInfo,
        });
      }
      function le(e, t, r) {
        void 0 === e && (e = {});
        var { store: a } = t,
          s = a.tradeState,
          { keepSelect: i, isCustomerSelect: n } = r,
          { order: d, isSelectPresent: c } = s,
          l = ie(t, s, r.isUsePointDeduction, r.setCustomerCard),
          { dine: u = {}, extra: p = {} } = s,
          { display: h } = t.data,
          y = {};
        y.payload = r;
        var f,
          v = Object(o.a)({}, e, {
            items: se(t, y.payload),
            source: d.source,
            seller: d.seller,
            newCouponProcess: d.newCouponProcess,
            ump: l,
            config: Q(s, h, { keepSelect: i, isCustomerSelect: n }),
            delivery: J(s, a, {
              scene: r.scene,
              expressTypeChoice: r.expressTypeChoice,
              isAddressIdChange: r.isAddressIdChange,
              isFormDbId: r.isFormDbId,
              resetDelivery: r.resetDelivery,
            }),
            usePayAsset: Z(s),
            extensions: Object(o.a)(
              {
                IS_SELECT_PRESENT: c,
                IS_OPTIMAL_SOLUTION: "true",
                NEW_MEMBER_FLOW: "true",
                IS_OVERLYING_COUPON:
                  String(s.isInCouponOverWhitelist) || "false",
                SITE_ID: u.isDineOrder ? u.tableId : null,
                SITE_NO: u.isDineOrder ? u.tableNumber : null,
                APPOINT_PROMOTION_INSTANCES: JSON.stringify(
                  s.appointPromotionInstances
                ),
                VALUE_CARD_UMP_OVERLAY_MUTEX_INFO:
                  p.VALUE_CARD_UMP_OVERLAY_MUTEX_INFO,
              },
              ((f = { isAddressIdChange: r.isAddressIdChange }),
              void 0 === f && (f = {}),
              f.isAddressIdChange
                ? { SWITCH_RECEIVER_ADDRESS_REMARK: "true" }
                : {}),
              ee(t.data),
              te(s),
              re(s),
              ae(s, r),
              de(s)
            ),
            first: !t.data.dataLoaded,
            cloudOrderExt: s.cloudOrderExt,
            bookKeyCloudExtension: s.bookKeyCloudExtension,
          });
        return (
          u.isDineOrder && (v.extensions.SHELF_DINING_ORDER = "1"),
          v.payload && delete v.payload,
          v
        );
      }
      var ue = r("ns2s");
      function pe(e, t, r) {
        var a,
          s,
          d,
          c,
          l,
          u,
          p,
          h,
          y,
          f,
          v,
          m,
          g,
          b,
          C,
          P,
          O,
          S,
          k,
          T,
          I,
          w,
          x,
          D,
          E,
          _,
          A,
          j,
          N,
          R,
          F;
        void 0 === e && (e = {}), void 0 === t && (t = {});
        var {
            isInitCoupon: B = !0,
            isFetchShow: M = !1,
            platformInfo: L = {},
            keepPresent: U = !1,
            isAddressIdChange: H = !1,
            isStoreIdChange: z = !1,
            bookKey: K,
            isRetailOrderScene: V,
          } = void 0 === r ? {} : r,
          q = t || {},
          Y = null != (a = q.tradeConfirmation) ? a : {},
          J = q.displayConfig,
          { shop: Z } = Y,
          X = Y.orderItems || [],
          Q = Y.postage || {},
          $ = Y.delivery || {},
          ee = Y.tradeTag || {},
          te = Y.orderConfig || {},
          re = Y.pickUpWay || {},
          ae = te.idCard || {},
          se = q.shopDelivery || {},
          oe = q.deliveryTimeBucket || {},
          ie = q.address || {},
          ne = q.contact || {},
          { pointsName: de } = q,
          { orderPayment: ce } = Y,
          le = Y.customerCards || [],
          pe = Y.unavailableCustomerCards || [],
          he = Y.phasePayment || {},
          ye = q["@cashier/prior-use"] || {},
          fe = Y.extra || {},
          ve = Y.umpSendPromotionInfo || {},
          { orderType: me } = Y,
          { promotionTag: ge } = Y,
          be = Y.selfUmpPromotionInfo || {},
          Ce = Y.selectablePresents || [],
          Pe = Y.orderSellingPoint || {},
          Oe = q.orderCreation || {},
          Se = Oe.newCouponProcess || "",
          ke = Oe.items || [],
          Te = Y.orderItems || [],
          Ie =
            (null == (s = Oe.extensions) ? void 0 : s.IS_SELECT_PRESENT) || "0",
          we =
            "1" ===
            (null == (d = Oe.extensions) ? void 0 : d.SHELF_DINING_ORDER),
          xe = (null == (c = Oe.extensions) ? void 0 : c.SITE_ID) || "",
          De = (null == (l = Oe.extensions) ? void 0 : l.SITE_NO) || "",
          Ee = null != (u = Y.deliveryCheck) ? u : {},
          { asyncOrderUnLimitCode: _e, monitorLoggerFilterCode: Ae } = q,
          { addressMapKeyConfig: je } = q;
        if (je)
          try {
            Object(i.d)("_ADDRESS_MAP_KEY_", je);
          } catch (e) {}
        (e.deliveryCheck = Object(o.a)({}, e.deliveryCheck, Ee)),
          U || (e.isSelectPresent = Ie),
          (e.version = q.version || e.version),
          (e.orderKeepApply = q.orderKeepApply || e.orderKeepApply),
          (e.showWxSubscribe = q.showWxSubscribe || e.showWxSubscribe),
          ((ke[0] && 116 === ke[0].activityType) ||
            (Te[0] && 116 === Te[0].activityType)) &&
            he.currentPhase &&
            1 === he.currentPhase &&
            (e.isHandselFirstPhase = !0);
        var Ne = X[0] || {},
          Re = n(
            (null == (p = Oe.source) ? void 0 : p.bookKey) ||
              e.order.bookKey ||
              K
          );
        if (!e.dataLoaded) {
          var Fe,
            Be,
            Me =
              (null != Re && Re.activeTab) ||
              1 === (null == (Fe = Y.postage) ? void 0 : Fe.currentExpressType)
                ? 1
                : 0;
          (null == (Be = e) ? void 0 : Be.address) &&
            (e.address.activeTab = Me);
        }
        if (
          ((fe.FREIGHT_INSURANCE_FREE = fe.FREIGHT_INSURANCE_FREE || 0),
          (e.extra = Object(o.a)({}, e.extra, fe)),
          (e.excludePayTools =
            (null == fe || null == (h = fe.EXCLUDE_PAY_TOOL)
              ? void 0
              : h.split(",")) || []),
          !W()(ne))
        ) {
          var Le,
            { list: Ge = [] } = ne,
            Ue =
              (null == Re || null == (Le = Re.contact) ? void 0 : Le.id) ||
              ne.id,
            We = Ge.find((e) => e.id === Ue) || {};
          e.contact = Object(o.a)({}, e.contact, ne, We);
        }
        W()(ie) ||
          (e.address = Object(o.a)({}, e.address, ie, {
            isSelfFetchDefault:
              (null == J ? void 0 : J.openSelfDefaultSwitch) || !1,
          }));
        var { showExpressTab: He } = J,
          ze = J.canSelfFetch || "selfFetch" in $;
        He && !ze
          ? (e.address.activeTab = 0)
          : !He && ze && (e.address.activeTab = 1);
        var Ke = 60 * (new Date().getTimezoneOffset() + 480) * 1e3;
        (e.env = Object(o.a)({}, e.env, { serverTime: J.serverTime + Ke })),
          (e.user = Object(o.a)({}, e.user, { delivery: $ })),
          (e.postage = Object(o.a)({}, e.postage, Q)),
          (e.tradeTag = Object(o.a)({}, e.tradeTag, ee)),
          (e.umpSendPromotionInfo = ve),
          (e.isPrescriptionDrugGoods = X.some(
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
                  a =
                    null !=
                    (t =
                      null == (r = e.presentSkuList)
                        ? void 0
                        : r.find((e) => e.isSelected))
                      ? t
                      : e;
                return Object(o.a)({}, e, { sku: a.sku, skuId: a.skuId });
              })),
              e
            );
          })),
          (e.display = Object(o.a)({}, e.display, J, {
            newRecommend: Y.newRecommend,
            serverTime: J.serverTime + Ke,
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
          (e.memberCard = Object(o.a)({}, e.memberCard, Y.memberCard)),
          (e.ignoreIdBinding =
            q.ignoreIdBinding ||
            (null == (y = e) ? void 0 : y.ignoreIdBinding)),
          (e.idcard = Object(o.a)({}, e.idcard, {
            binding: (null == ae ? void 0 : ae.binding) && !e.ignoreIdBinding,
            name:
              (null == ae ? void 0 : ae.idCardName) ||
              (null == (f = e) || null == (v = f.idcard) ? void 0 : v.name) ||
              "",
            number:
              (null == ae ? void 0 : ae.idCardNumber) ||
              (null == (m = e) || null == (g = m.idcard) ? void 0 : g.number) ||
              "",
            backPhoto:
              (null == ae ? void 0 : ae.idCardBackPhoto) ||
              (null == (b = e) || null == (C = b.idcard)
                ? void 0
                : C.backPhoto) ||
              "",
            frontPhoto:
              (null == ae ? void 0 : ae.idCardFrontPhoto) ||
              (null == (P = e) || null == (O = P.idcard)
                ? void 0
                : O.frontPhoto) ||
              "",
          })),
          (e.shop = Object(o.a)({}, e.shop, Z, {
            activityType: Y.activityType,
            activities: Y.activities || [],
            activitiesNames: Y.activityNames || [],
            cashBackList: Y.cashBackList || [],
          })),
          (e.goods = Object(o.a)({}, e.goods, {
            list: X,
            unavailable: Y.unavailableItems || [],
            prepareTime:
              (null == (S = Y.deliveryCheck) ? void 0 : S.prepareTime) || 0,
            imgMode: q.isGoodsImgCover ? "aspectFill" : "aspectFit",
          })),
          (e.displayCard = Y.displayCard || {}),
          (e.displayFreeCard = Y.displayFreeCard || {}),
          [...(Y.coupons || []), ...(Y.unavailableCoupons || [])].length &&
            (e.coupon.ignoreCoupon = !1),
          (e.fissionActivity = Object(o.a)(
            {},
            e.fissionActivity,
            Y.fissionActivity || {}
          ));
        var Ve = Y.fansBenefit || {};
        0 === Object.keys(Ve).length &&
          (Ve = { id: 0, name: "", title: "", type: "", typeId: 0, value: 0 }),
          (e.fansBenefit = Object(o.a)({}, e.fansBenefit, Ve)),
          (e.pointDeduction = Object(o.a)(
            {},
            {
              status: null == (k = e.pointDeduction) ? void 0 : k.status,
              isUse: null == (T = e.pointDeduction) ? void 0 : T.isUse,
              costPoints:
                null == (I = e.pointDeduction) ? void 0 : I.costPoints,
            },
            Y.pointDeduction,
            {
              isUse: !(null == (w = Y.pointDeduction) || !w.costPoints),
              defaultPointDeductEffect: !Y.pointDeduction,
            }
          )),
          (e.points = Object(o.a)({}, e.points, q.pointsConfig)),
          (e.customerCards = Object(o.a)({}, e.customerCards, { list: le })),
          (e.unavailableCustomerCards = Object(o.a)(
            {},
            e.unavailableCustomerCards,
            { list: pe }
          ));
        var qe,
          Ye,
          Je = le.find((e) => e.chosen);
        if (
          (Je &&
            Je.id &&
            (e.customerCards = Object(o.a)({}, e.customerCards, { id: Je.id })),
          (e.selfFetch = Object(o.a)({}, e.selfFetch, {
            time:
              (null == (x = e) || null == (D = x.selfFetch)
                ? void 0
                : D.time) ||
              (null == J ? void 0 : J.selfFetchTime) ||
              "",
            isAllow: (null == J ? void 0 : J.canSelfFetch) || "selfFetch" in $,
            tips: J.selfFetchTips,
          })),
          (null == (E = e.selfFetch.shop) || !E.id) && V)
        ) {
          var Ze,
            Xe = null == (Ze = Oe.delivery) ? void 0 : Ze.defaultSelfFetch;
          null != Xe &&
            Xe.id &&
            (e.selfFetch = Object(o.a)({}, e.selfFetch, {
              shop: Xe,
              cityCode: Xe.countyId,
              cityName: Xe.city,
            }));
        }
        ((Y.meituanCoupons || Y.unavailableMeituanCoupons) &&
          (e.meituanCoupons = {
            coupons: Y.meituanCoupons || [],
            unavailableCoupons: Y.unavailableMeituanCoupons || [],
            chosen: {},
          }),
        Oe && 0 !== Object.keys(Oe).length) &&
          ((e.isRetail =
            "retail_minapp_shelf" ===
            ((null == (qe = Oe.source) ? void 0 : qe.orderMark) || "")),
          (e.isScanCodeBuy =
            "online_scan_buy" ===
            ((null == (Ye = Oe.source) ? void 0 : Ye.orderMark) || "")),
          we &&
            ((e.dine = Object(o.a)({}, e.dine, {
              isDineOrder: we,
              tableId: xe,
              tableNumber: De,
            })),
            (e.pickUpWay = Object(o.a)(
              { id: null == re ? void 0 : re.calculatedPickUpWay },
              e.pickUpWay,
              re
            ))));
        if (
          (W()(oe) ||
            1 !== (null == (_ = Y.postage) ? void 0 : _.currentExpressType) ||
            (e.selfFetch = Object(o.a)({}, e.selfFetch, {
              timeSpan: oe.timeSpan,
              timeBucket: oe.timeBuckets,
              deliveryTimeBucket: oe,
            })),
          (e.periodBuy = Object(o.a)({}, e.periodBuy, {
            show: !!Ne.issue,
            info: Ne.issue || "",
            planTime: Ne.planExpressTime || "",
            options: Ne.deliverOptions || [],
            chosenOption: Ne.deliverOption || "",
          })),
          (e.contact = Object(o.a)({}, e.contact, {
            required:
              !J.showAddressTab &&
              X.some((e) => {
                var { virtualType: t } = e;
                return 3 === t;
              }),
          })),
          (e.delivery = Object(o.a)({}, e.delivery, {
            text: e.delivery.text || Q.deliveryTimeDisplay || "",
            tips: J.deliveryTips,
          })),
          W()(se) || (e.delivery = Object(o.a)({}, e.delivery, se)),
          !W()(oe))
        ) {
          var Qe,
            { instantTimePoint: $e, timeBuckets: et, timeSpan: tt } = oe,
            { textWithWeekday: rt, text: at } = e.delivery;
          $e && !J.showLocalDeliveryTime
            ? ((rt = "尽快送达（预计 " + ue.c.time(new Date($e)) + "）"),
              (at = ue.c.dateTime(new Date($e))))
            : (H || z) &&
              2 ===
                (null == (Qe = e.postage) ? void 0 : Qe.currentExpressType) &&
              ((rt = ""), (at = "")),
            (e.delivery = Object(o.a)({}, e.delivery, {
              timeSpan: tt,
              timeBucket: et,
              deliveryTimeBucket: oe,
              textWithWeekday: rt,
              text: at,
              instantTimePoint: $e,
            }));
        }
        if (ee.hasHotelGoods) {
          for (
            var st,
              ot,
              it,
              nt,
              dt,
              ct = Ne.num || 0,
              lt = Math.min(...X.map((e) => e.stockNum)),
              ut =
                (null == (st = e.hotel) || null == (ot = st.recipients)
                  ? void 0
                  : ot.slice(0, ct)) || [],
              pt = 0;
            pt < ct;
            pt++
          )
            ut[pt] = ut[pt] || "";
          e.hotel = Object(o.a)({}, e.hotel, {
            stockNum: lt,
            roomNumber: ct,
            recipients: ut,
            booking:
              (null == (it = e.order) || null == (nt = it.delivery)
                ? void 0
                : nt.hotelBooking) || {},
            newHotelExtensions:
              (null == (dt = e.hotel) ? void 0 : dt.newHotelExtensions) || "",
          });
        }
        if (
          ((e.pay = Object(o.a)({}, e.pay, ce, {
            extraFees: (null == ce ? void 0 : ce.extraFees) || [],
            phasePayment: he,
            promotions: (null == ce ? void 0 : ce.promotions) || [],
            orderPromotions: (
              (null == ce ? void 0 : ce.orderPromotions) || []
            ).filter((e) => "storedCustomerDiscount" !== e.promotionType),
            multiPhase: Y.multiPhasePayment,
            payCardsShowUsableNum: Y.payCardsShowUsableNum,
          })),
          (e.valueCard = Object(o.a)({}, e.valueCard, {
            list: Y.payValueCards || [],
            disabled: Y.unavailablePayValueCards || [],
            checked: (Y.payValueCards || [])
              .filter((e) => e.selected)
              .map((e) => e.summaryCardNo),
          })),
          (e.giveRechargeAmount = Y.giveRechargeAmount || 0),
          (e.payAssetActivityTagDesc = Y.payAssetActivityTagDesc || ""),
          (e.recommendDetaid = Y.recommendDetaid),
          (e.balanceMkExclusion = Y.balanceMkExclusion),
          (e.isInitCoupon = B),
          B)
        )
          if (0 === e.pay.realPay) {
            if (Se || e.order.newCouponProcess) {
              var ht = e.coupon.list.find((e) => e.choose) || {};
              e.coupon.chosenId = (null == ht ? void 0 : ht.id) || 0;
            } else e.coupon.chosenId = 0;
            e.valueCard.checked = [];
          } else if (Se || e.order.newCouponProcess) {
            var yt = e.coupon.list.find((e) => e.choose) || {};
            e.coupon.chosenId = (null == yt ? void 0 : yt.id) || 0;
          } else {
            var ft = e.coupon.list[0] || {};
            ft.value &&
              (e.coupon.chosenId = (null == ft ? void 0 : ft.id) || 0);
          }
        Oe.source && (Oe.source = Object(o.a)({}, Oe.source, L)),
          Oe.cloudOrderExt,
          Oe.bookKeyCloudExtension;
        var vt,
          mt =
            (null == (A = Oe.config) ? void 0 : A.paymentSuccessRedirect) || "";
        mt &&
          !mt.startsWith("http") &&
          ((e.env = Object(o.a)({}, e.env, { successUrl: mt })),
          null == (vt = Oe.config) || delete vt.paymentSuccessRedirect);
        if (
          ((e.order = Object(o.a)({}, e.order, te, Oe, {
            orderType: me,
            steps: Y.steps || [],
            openDisplayCard: J.openDisplayCard,
          })),
          "boolean" == typeof Se && (e.order.newCouponProcess = Se),
          "string" == typeof de && (e.pointsName = de),
          (e.userPrivacy = Object(o.a)({}, e.userPrivacy, q.userPrivacy || {})),
          fe.SHOP_STORED_DISCOUNT_INFO)
        ) {
          var gt = {};
          try {
            gt = JSON.parse(fe.SHOP_STORED_DISCOUNT_INFO);
          } catch (e) {}
          e.shopStoredDiscountInfo = gt;
        }
        (e.useStoredCustomerDiscount =
          "true" === fe.USE_STORED_CUSTOMER_DISCOUNT),
          (e.useStoredMemberCustomerDiscount =
            "1" === fe.VALUE_CARD_LEVEL_GROUP_TYPE),
          (e.useStoreBalancePayInFull = "1" === fe.VALUE_CARD_ONLY_FULL_PAY),
          (e.changeSubscribe = !1),
          M ||
            (e.disableStoredDiscount =
              !1 === e.shopStoredDiscountInfo.openStoredDiscount),
          (e.useBeforePayData = Object(o.a)({}, e.useBeforePayData, ye)),
          (e.enableUseOrderBehaviorParam =
            e.display.enableUseOrderBehaviorParam || !1),
          (e.enableUseUserAuthorize = J.enableUseUserAuthorize || !1);
        var bt = q.shopConfig || {};
        (e.shopConfig = Object(o.a)({}, e.shopConfig, bt)),
          (e.sellingPoint = Pe),
          (e.prevOrderInfo = q.prevOrderInfo || {}),
          (e.isInCouponOverWhitelist =
            null != (j = q.isInCouponOverWhitelist)
              ? j
              : e.isInCouponOverWhitelist),
          (e.bookKey =
            (null == Oe ? void 0 : Oe.bookKey) ||
            (null == (N = Oe.source) ? void 0 : N.bookKey) ||
            e.bookKey ||
            K),
          (e.asyncOrderUnLimitCode = _e),
          (e.monitorLoggerFilterCode = Ae),
          ge
            ? ((e.hasPromotion = !0), (e.promotionInfo = ge))
            : ((e.hasPromotion = !1), (e.promotionInfo = null));
        var Ct = X.filter((e) => 24 === e.activityType),
          Pt = X.filter((e) => 24 !== e.activityType),
          Ot = Ct.reduce((e, t) => e + t.num * t.payPrice, 0),
          St = Pt.reduce((e, t) => e + t.num * t.payPrice, 0),
          kt = (J.openDisplayCard && e.displayCard.price) || 0,
          { extraFees: Tt = [] } = ce;
        return (
          (Tt = Tt.map((e) =>
            Object(o.a)({}, e, { realPay: G.c.toYuan(e.realPay || 0) })
          )),
          (e.umpBlockBase = {
            goodsSumPrice: G.c.toYuan(St),
            goodsSumNum: Pt.length,
            postage: ce.postage,
            postagePrice: G.c.toYuan(ce.postage || 0),
            umpPlusBuyNum: Ct.length,
            umpPlusBuy: Ot,
            umpPlusBuyPrice: G.c.toYuan(Ot),
            paidCard: kt,
            paidCardPrice: G.c.toYuan(kt),
            extraFees: Tt,
            displayPrice:
              null != (R = e.displayCard) && R.price
                ? G.c.toYuan(null == (F = e.displayCard) ? void 0 : F.price)
                : "",
          }),
          e
        );
      }
      function he(e, t) {
        var r = t.prePaymentPreparation || {},
          a = t.paymentPreparation || {};
        (r.bizExt = a.bizExt || "{}"),
          e.tradeTag.continuousOrder
            ? (r.scene = "MEM_SUB")
            : (r.scene = "VALUE_COMMON"),
          (e.pay = Object(o.a)({}, e.pay, {
            prepayParams: r,
            prepay: r.prepay,
            prepaySuccess: r.prepaySuccess,
            payParams: t.paymentPreparation,
            showPayResult: t.showPayResult,
            extPoint: r.extPointPayResultVO,
            zeroOrder: t.zeroOrder,
          }));
      }
      function ye() {
        return (ye = Object(f.a)(function* (e, t) {
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
      var fe = function (e, t) {
          return ye.apply(this, arguments);
        },
        ve = r("z9IR");
      function me(e) {
        return ge.apply(this, arguments);
      }
      function ge() {
        return (ge = Object(f.a)(function* (e) {
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
                ve.a
                  .confirm({
                    message:
                      "“余额/卡”可用金额不足，充值后才可使用储值专享折扣。如放弃此优惠，将重新计算订单价格。",
                    cancelButtonText: "放弃优惠",
                    confirmButtonText: "去充值",
                    ref: Object(E.c)("submitDialog"),
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
                ve.a
                  .alert({
                    message:
                      "“余额/卡”可用金额不足，暂不支持使用储值专享折扣，系统将为你重新计算订单价格。",
                    confirmButtonText: "我知道了",
                    ref: Object(E.c)("submitDialog"),
                  })
                  .then(() => {
                    b(e, (e) => {
                      e.disableStoredDiscount = !0;
                    }),
                      e.process.invoke("confirmOrder");
                  });
                break;
              case "notEnough":
                ve.a
                  .confirm({
                    message:
                      "仅限余额（不含礼品卡) 全额支付时，可享受储值会员优惠。如放弃优惠，将重新计算订单价格。",
                    cancelButtonText: "放弃优惠",
                    confirmButtonText: "去充值",
                    ref: Object(E.c)("submitDialog"),
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
      var be = r("slIH");
      function Ce(e) {
        return Pe.apply(this, arguments);
      }
      function Pe() {
        return (Pe = Object(f.a)(function* (e) {
          var t,
            {
              order: r,
              idcard: a,
              tradeTag: s,
              hasHaitaoGoods: o,
            } = (null == e ? void 0 : e.data) || {},
            i = Object(be.a)({ order: r, idcard: a, tradeTag: s });
          return i
            ? (ve.a
                .confirm({
                  ref: Object(E.c)("idcardTipDialog"),
                  title: "填写身份证信息",
                  message: o
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
              Promise.reject(i))
            : Promise.resolve("身份证已填写");
        })).apply(this, arguments);
      }
      var Oe = r("Jcb6");
      function Se(e) {
        return ke.apply(this, arguments);
      }
      function ke() {
        return (ke = Object(f.a)(function* (e) {
          var { contact: t } = e.data;
          if (t.required) {
            var r = "",
              a = { userName: !1, telephone: !1 };
            if (
              (t.userName || ((a.userName = !0), (r = "请输入正确的姓名")),
              (t.telephone && Object(Oe.b)(t.telephone)) ||
                ((a.telephone = !0), (r = "请输入正确的手机号")),
              r)
            )
              return (
                Object(w.a)(r),
                e.event.emit("trade-buy-core:validate-effect", {
                  type: "validateContact:validateError",
                  errorInfo: a,
                }),
                Promise.reject(r)
              );
          }
          return Promise.resolve("");
        })).apply(this, arguments);
      }
      function Te(e) {
        return Ie.apply(this, arguments);
      }
      function Ie() {
        return (Ie = Object(f.a)(function* (e) {
          var {
            state: t,
            receiveByGroupHeader: r,
            currentAddress: a = {},
            expressType: s,
            showPoiPrompt: o,
            display: i,
          } = e.data;
          if (null == i || !i.showAddressTab) return Promise.resolve();
          var { id: n, inlineForm: d } = (null == t ? void 0 : t.address) || {};
          if ("express" === s && i.showExpressTab) {
            if (r) return Promise.resolve();
            if (!(n || !Object(L.a)(d)))
              return (
                setTimeout(() => {
                  e.event.emit("trade-buy-core:validate-effect", {
                    type: "validateAddress:toEdit",
                  });
                }, 1e3),
                Object(w.a)("请选择收货地址"),
                Promise.reject("请选择收货地址")
              );
            var c = a;
            if (
              "选择省份" === c.province ||
              "选择城市" === c.city ||
              "选择地区" === c.county ||
              !c.areaCode
            )
              return (
                setTimeout(() => {
                  e.event.emit("trade-buy-core:validate-effect", {
                    type: "validateAddress:toEdit",
                  });
                }, 1e3),
                Object(w.a)("地址信息不完整，请重新编辑地址"),
                Promise.reject("地址信息不完整，请重新编辑地址")
              );
            if (o)
              return (
                ve.a
                  .confirm({
                    message: "为提高同城配送准确性，请进行地图定位选点",
                    confirmButtonText: "去选点",
                    ref: Object(E.c)("addressBlockDialog"),
                  })
                  .then(() => {
                    e.event.emit("trade-buy-core:validate-effect", {
                      type: "validateAddress:toEdit",
                    });
                  })
                  .catch(() => {}),
                Promise.reject("为提高同城配送准确性，请进行地图定位选点")
              );
            if (!Object(Oe.c)(c, c.tel))
              return (
                Object(w.a)("请填写正确的手机号"),
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
      function we(e) {
        return xe.apply(this, arguments);
      }
      function xe() {
        return (xe = Object(f.a)(function* (e) {
          var { delivery: t, display: r, expressType: a } = e.data;
          return "express" === a && r.showLocalDeliveryBucket && !t.text
            ? (e.event.emit("trade-buy-core:validate-effect", {
                type: "validateLocalDelivery:show",
              }),
              Promise.reject("请选择期望送达时间"))
            : Promise.resolve("");
        })).apply(this, arguments);
      }
      function De(e) {
        return Ee.apply(this, arguments);
      }
      function Ee() {
        return (Ee = Object(f.a)(function* (e) {
          var {
              expressType: t,
              display: r,
              selfFetch: a,
              periodBuy: s,
            } = e.data,
            o = M()(a, "shop.optionalSelfFetchTime", !1);
          return new Promise((i, n) => {
            if ("self-fetch" === t && null != r && r.canSelfFetch) {
              if (!a.shop)
                return (
                  e.event.emit("trade-buy-core:validate-effect", {
                    type: "validateSelfFetch:selectPoint",
                  }),
                  Object(w.a)("请选择提货地址"),
                  n("请选择提货地址")
                );
              if (
                !a.time &&
                o &&
                !((null != s && s.info) || (null != s && s.planTime))
              )
                return (
                  e.event.emit("trade-buy-core:validate-effect", {
                    type: "validateSelfFetch:selectTime",
                  }),
                  n("请选择提货时间")
                );
            }
            i(!0);
          });
        })).apply(this, arguments);
      }
      function _e(e) {
        return Ae.apply(this, arguments);
      }
      function Ae() {
        return (Ae = Object(f.a)(function* (e) {
          var { buyerMsg: t } = e.data.order;
          return t && t.length > 250
            ? (Object(w.a)("留言字数不能超过 250 个字"),
              Promise.reject("留言字数不能超过 250 个字"))
            : "";
        })).apply(this, arguments);
      }
      function je(e) {
        return Ne.apply(this, arguments);
      }
      function Ne() {
        return (Ne = Object(f.a)(function* (e) {
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
        return Fe.apply(this, arguments);
      }
      function Fe() {
        return (Fe = Object(f.a)(function* (e) {
          var { _rechargePay: t } = e.store,
            { payRechargeInfo: r } = e.data;
          return !t && r && r.btnText
            ? (e.process.invoke("doRecharge"),
              Promise.reject("进行充值并支付流程"))
            : (e.store.updateState({ _rechargePay: !1 }), Promise.resolve());
        })).apply(this, arguments);
      }
      function Be(e) {
        return Me.apply(this, arguments);
      }
      function Me() {
        return (Me = Object(f.a)(function* (e) {
          var t,
            a,
            s,
            o,
            { order: i = {}, enableUseOrderBehaviorParam: n } = e.data,
            d = {
              platform:
                (null == (t = i.source) ? void 0 : t.platform) || "mobile",
              buyer_id: (null == (a = i.buyer) ? void 0 : a.buyerId) || 0,
              order_receiver_phone:
                (null == (s = i.buyer) ? void 0 : s.buyerPhone) || "",
              book_key: i.bookKey || "",
              kdtId: (null == (o = i.seller) ? void 0 : o.kdtId) || 0,
            };
          return n
            ? (w.a.clear(),
              new Promise((t, a) => {
                r.e("packages/async-main/chunk")
                  .then(r.bind(null, "9RNk"))
                  .then((r) => {
                    var { behaviorVerify: s } = r;
                    !(function (r) {
                      r({
                        bizType: 158,
                        bizData: JSON.stringify(d) || "",
                        onSuccess: (r) => {
                          b(e, (e) => {
                            (e.behaviorOrderInfo.bizType = 158),
                              (e.behaviorOrderInfo.token = r);
                          }),
                            t(!0);
                        },
                        onCancel: () => {
                          a(!1);
                        },
                        onFail: (e) => {
                          a(!1);
                        },
                      });
                    })(s);
                  })
                  .catch((e) => a(e));
              }))
            : Promise.resolve();
        })).apply(this, arguments);
      }
      function Le(e) {
        return Ge.apply(this, arguments);
      }
      function Ge() {
        return (Ge = Object(f.a)(function* (e) {
          yield me(e),
            yield Ce(e),
            yield Se(e),
            yield Te(e),
            yield we(e),
            yield De(e),
            yield _e(e),
            yield je(e),
            yield Re(e),
            yield Be(e);
        })).apply(this, arguments);
      }
      function Ue(e, t) {
        return We.apply(this, arguments);
      }
      function We() {
        return (We = Object(f.a)(function* (e, t) {
          var { code: r, msg: a } = t.error;
          return [101350001, 101350002, 101350003].indexOf(r) >= 0
            ? (b(e, (e) => {
                (e.shop.closed = !0), (e.shop.closedDesc = a);
              }),
              Object(w.a)(a),
              Promise.reject(t))
            : t;
        })).apply(this, arguments);
      }
      function He(e, t) {
        return ze.apply(this, arguments);
      }
      function ze() {
        return (ze = Object(f.a)(function* (e, t) {
          var { code: r, msg: a } = t.error;
          return D.a.DELIVERY_ERROR.indexOf(r) >= 0
            ? (e.process
                .invoke("confirmOrder", { resetDelivery: !0 })[0]
                .then(() => Object(w.a)(a)),
              Promise.reject(t))
            : D.a.GOODS_SOLDOUT.indexOf(r) >= 0
            ? (e.process
                .invoke("confirmOrder", { clearLoading: !1 })[0]
                .then(() => Object(w.a)(a)),
              Promise.reject(t))
            : D.a.BILL_EXCEPTION_UNSAFTY_REVIEW === r
            ? (Object(E.b)({
                message: a,
                showCancelButton: !0,
                cancelButtonText: "取消下单",
                confirmButtonText: "继续下单",
              })
                .then(() => {
                  e.process.invoke("submitOrderAfterRisk");
                })
                .catch(() => {}),
              Promise.reject(t))
            : D.a.BILL_EXCEPTION_UNSAFTY === r
            ? (Object(E.b)({
                message: a,
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
      function Ke(e, t) {
        return Ve.apply(this, arguments);
      }
      function Ve() {
        return (Ve = Object(f.a)(function* (e, t) {
          var { code: r, msg: a } = t.error;
          return D.a.RECEIVER_NEED_REALNAME === r
            ? (Object(E.b)({
                title: "请填写收货人真实姓名",
                message: a,
                confirmButtonText: "去修改",
                ref: Object(E.c)("addressBlockDialog"),
              }).then(() => {
                e.event.emit("trade-buy-core:validate-effect", {
                  type: "validateAddress:toEdit",
                });
              }),
              Promise.reject(t))
            : t;
        })).apply(this, arguments);
      }
      function qe(e, t) {
        return Ye.apply(this, arguments);
      }
      function Ye() {
        return (Ye = Object(f.a)(function* (e, t) {
          var r, a;
          return null != (r = e.data.order) &&
            null != (a = r.config) &&
            a.isChooseFreeOrder &&
            !String(t.error).includes("Error: processor")
            ? (e.process.invoke("freeOrderJumpToResult", { orderNo: "" }),
              Promise.reject(t))
            : t;
        })).apply(this, arguments);
      }
      function Je(e, t) {
        return Ze.apply(this, arguments);
      }
      function Ze() {
        return (Ze = Object(f.a)(function* (e, t) {
          yield Ue(e, t), yield He(e, t), yield Ke(e, t), yield qe(e, t);
        })).apply(this, arguments);
      }
      var Xe = R(et, 1e3),
        Qe = R(function (e, t) {
          return Object(y.requestV2)({
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
        var { bookKey: r, message: a } = t;
        A(a, { error: e, bookKey: r, stack: e.stack });
      }
      function et(e, t) {
        var r = t.data.asyncOrder
            ? "/pay/wsctrade/order/buy/postAsyncOrderResult.json"
            : "/pay/wsctrade/order/buy/v2/bill-fast.json",
          a = Date.now() + "_" + Math.floor(1e6 * Math.random() + 1);
        try {
          var s;
          $e(
            {},
            {
              bookKey: null == e || null == (s = e.source) ? void 0 : s.bookKey,
              message: JSON.stringify({
                title: "判断重复下单",
                status: "start",
                asyncOrder: t.data.asyncOrder,
                rand: a,
              }),
            }
          );
        } catch (e) {}
        return Object(y.requestV2)({
          origin: "cashier",
          withCredentials: !0,
          path: r,
          method: "POST",
          data: e,
        })
          .then((r) => {
            try {
              var s;
              $e(
                {},
                {
                  bookKey:
                    null == e || null == (s = e.source) ? void 0 : s.bookKey,
                  message: JSON.stringify({
                    title: "判断重复下单",
                    status: "fulfilled",
                    asyncOrder: t.data.asyncOrder,
                    rand: a,
                  }),
                }
              );
            } catch (e) {}
            return Object(j.d)(t), r;
          })
          .catch((r) => {
            var s, o, i, n;
            try {
              var d;
              $e(
                {},
                {
                  bookKey:
                    null == e || null == (d = e.source) ? void 0 : d.bookKey,
                  message: JSON.stringify({
                    title: "判断重复下单",
                    status: "rejected",
                    asyncOrder: t.data.asyncOrder,
                    rand: a,
                  }),
                }
              );
            } catch (e) {}
            (r.code = +r.code || (null == (s = r.data) ? void 0 : s.code)),
              (r.msg =
                r.msg ||
                (null == (o = r.data) ? void 0 : o.msg) ||
                (null == (i = r.data) ? void 0 : i.message) ||
                r.message ||
                "订单创建失败，请稍后重试");
            var { code: c } = r;
            if (D.a.LIMIT_ORDER.indexOf(c) >= 0) {
              if ((Object(j.b)(t), j.a.limitTryCount < 3))
                return new Promise((r, a) => {
                  setTimeout(() => {
                    j.a.limitCreate && Xe(e, t).then(r).catch(a);
                  }, 1e3 + 2e3 * j.a.limitTryCount);
                });
              Object(j.c)(t);
            } else if (c === D.a.ASYNC_ORDER) {
              if ((Object(j.b)(t), j.a.limitTryCount < 7))
                return new Promise((r, a) => {
                  setTimeout(() => {
                    Xe(e, t).then(r).catch(a);
                  }, 1e3);
                });
              Object(j.c)(t);
            } else
              D.a.RECEIVER_NEED_REALNAME === c
                ? t.data.limitOrder.limitCreate && Object(j.d)(t)
                : (D.a.DELIVERY_ERROR.includes(c) ||
                    (function (e, t) {
                      return (
                        void 0 === e && (e = ""),
                        e.split(",").includes(String(t))
                      );
                    })(
                      null == (n = t.data) ? void 0 : n.asyncOrderUnLimitCode,
                      c
                    )) &&
                  Object(j.d)(t);
            throw r;
          });
      }
      function tt() {
        return (tt = Object(f.a)(function* (e, t) {
          void 0 === e && (e = {});
          var { loading: r = !0, confirmRisk: a = !1 } = e;
          r && Object(E.d)();
          try {
            yield Le(t), yield t.process.invokePipe("hook:beforeCreateOrder");
          } catch (e) {
            throw (
              (F.a.end({
                name: F.b.create_order,
                extra: {
                  message: "创建订单前置流程错误",
                  err: JSON.stringify(e),
                },
              }),
              r && Object(E.a)(),
              e)
            );
          }
          var { asyncOrder: s } = t.data,
            i = ce(
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
                asyncOrder: s,
                delivery: {},
                cloudOrderExt: {},
                bookKeyCloudExtension: {},
                confirmTotalPrice: 0,
                extensions: {
                  CONFIRM_TRADE_RISK_DIALOG: JSON.stringify(a),
                  TRADE_PAGE_TYPE: "TRADE_BUY_PAGE",
                },
                behaviorOrderInfo: {},
              },
              t
            ),
            n = (yield t.process.invokePipe("genCreateParams", i)) || i;
          return (s ? Qe : Xe)(n, t)
            .then(
              (function () {
                var a = Object(f.a)(function* (a) {
                  var s;
                  try {
                    var i;
                    A(
                      "1 track_orderCreate[bookKey:" +
                        (null == n || null == (i = n.source)
                          ? void 0
                          : i.bookKey) +
                        "] 创建订单成功"
                    ),
                      getApp().trigger("trade:order:create"),
                      yield fe(t, a),
                      yield t.process.invokePipe(
                        "hook:afterCreateOrder",
                        Object(o.a)({}, a, { payload: e })
                      );
                  } catch (e) {
                    var d;
                    A(
                      "1-1 track_orderCreate[bookKey:" +
                        (null == n || null == (d = n.source)
                          ? void 0
                          : d.bookKey) +
                        "] 上报埋点前的前端流程报错",
                      { error: JSON.stringify(e) }
                    );
                  }
                  return (
                    A(
                      "2 track_orderCreate[bookKey:" +
                        (null == n || null == (s = n.source)
                          ? void 0
                          : s.bookKey) +
                        "] emit:onCreateOrder"
                    ),
                    t.event.emit("onCreateOrder", a),
                    r && Object(E.a)(),
                    a
                  );
                });
                return function (e) {
                  return a.apply(this, arguments);
                };
              })()
            )
            .catch(
              (function () {
                var a = Object(f.a)(function* (a) {
                  var s, i;
                  void 0 === a && (a = {}), r && Object(E.a)();
                  var n = Object(o.a)({}, a, {
                    code: a.code || (null == (s = a.data) ? void 0 : s.code),
                    msg:
                      a.msg ||
                      (null == (i = a.data) ? void 0 : i.msg) ||
                      "订单创建失败，请稍后重试",
                  });
                  try {
                    yield Je(t, { error: n, payload: e }),
                      yield t.process.invokePipe("hook:afterCreateOrderError", {
                        error: n,
                        payload: e,
                      }),
                      Object(x.b)(n, { message: n.msg, log: !0 });
                  } catch (a) {}
                  throw a;
                });
                return function (e) {
                  return a.apply(this, arguments);
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
      function at() {
        return (at = Object(f.a)(function* (e, t) {
          return (
            b(e, (e) => {
              he(e, t);
            }),
            t
          );
        })).apply(this, arguments);
      }
      function st(e) {
        w.a.loading();
        var { orderNos: t } = e.data;
        return Object(y.default)({
          origin: "cashier",
          withCredentials: !0,
          method: "POST",
          path: "/pay/wsctrade/order/buy/prepay.json",
          data: { orderNoList: t },
        })
          .then(
            (function () {
              var t = Object(f.a)(function* (t) {
                w.a.clear();
                var r = t.prePaymentPreparation || {};
                if (!1 !== t.success && r.prepaySuccess)
                  return (
                    (function (e) {
                      rt.limitCreate &&
                        ((rt.limitTryCount = 0),
                        (rt.limitCreate = !1),
                        (e.data.limitOrder = Object(o.a)({}, rt)));
                    })(e),
                    yield (function (e, t) {
                      return at.apply(this, arguments);
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
              w.a.clear(),
              (function (e) {
                (rt.limitCreate = !0),
                  (rt.limitCreateStatus = "wating"),
                  (rt.limitTryCount += 1),
                  (e.data.limitOrder = Object(o.a)({}, rt));
              })(e),
              rt.limitTryCount < 3)
            )
              return new Promise((t, r) => {
                setTimeout(() => {
                  rt.limitCreate && st(e).then(t).catch(r);
                }, 1e3 + 2e3 * rt.limitTryCount);
              });
            throw (
              ((function (e) {
                (rt.limitCreate = !0),
                  (rt.limitCreateStatus = "fail"),
                  (rt.limitTryCount = 0),
                  (e.data.limitOrder = Object(o.a)({}, rt));
              })(e),
              (t.prepay = !0),
              t)
            );
          });
      }
      function ot(e) {
        var t,
          {
            orderCreation: r,
            isTTApp: a = !1,
            isRetailOrderScene: s = !1,
          } = void 0 === e ? {} : e,
          o =
            (null == r || null == (t = r.source) ? void 0 : t.orderMark) ||
            "wx_shop";
        return s
          ? a
            ? { platform: "dy_mini_program", orderMark: "fulfill_tool" }
            : { platform: "weapp", orderMark: "retail_minapp_shelf" }
          : { platform: "weapp", orderMark: o };
      }
      function it(e) {
        (e.delivery = {}),
          delete e.selfFetch.time,
          delete e.selfFetch.timeWithWeekday,
          delete e.selfFetch.selfFetchStartTime,
          delete e.selfFetch.selfFetchEndTime;
      }
      function nt() {
        return (nt = Object(f.a)(function* (e, t, r) {
          var a,
            s,
            i,
            { isRetailOrderScene: n } = e.data;
          n &&
            null != (a = e.data.state.env) &&
            a.isTTApp &&
            (e.data.prepareData = t),
            (e.data.confirmData = Object(o.a)({}, t, {
              isInitCoupon:
                null == (s = null == r ? void 0 : r.isInitCoupon) || s,
            }));
          var {
              isAddressIdChange: d,
              isStoreIdChange: c,
              goodsId: l,
              skuId: u,
              num: p,
            } = r,
            { tradeState: h } = e.store;
          if (void 0 !== l && void 0 !== u && "number" == typeof p)
            for (var y of h.order.items)
              if (y.goodsId === l && y.skuId === u) {
                y.num = p;
                break;
              }
          null != r && r.resetDelivery && it(h);
          var f = ot({ orderCreation: h.order, isRetailOrderScene: n }),
            v = pe(h, t, {
              isInitCoupon:
                null == (i = null == r ? void 0 : r.isInitCoupon) || i,
              isFetchShow: !0,
              platformInfo: f,
              keepPresent: !0,
              isAddressIdChange: d,
              isStoreIdChange: c,
              isRetailOrderScene: n,
            });
          (v =
            (yield e.process.invokePipe("hook:mutateStateAfterFetch", v)) || v),
            S(t, e),
            (v.dataLoaded = !0),
            (e.data.dataLoaded = !0),
            g(e, v),
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
      var dt,
        ct,
        lt,
        ut = function (e, t, r) {
          return nt.apply(this, arguments);
        };
      function pt(e) {
        var t, r, a;
        null != (t = e.store.tradeState) &&
          null != (r = t.order) &&
          null != (a = r.config) &&
          a.isChooseFreeOrder &&
          ((t.order.config.isForbidPreference = !0),
          (t.order.config.isForbidCoupon = !0),
          t.giftCard && (t.giftCard.checked = []),
          t.valueCard && (t.valueCard.checked = []));
      }
      lt =
        (null == (dt = getApp()) || null == (ct = dt.globalData)
          ? void 0
          : ct.isRetailApp) || !1;
      var ht = !1,
        yt = [];
      function ft(e) {
        var { ctx: t, tasks: r = [], e: a, data: s } = e;
        (ht = !1),
          r.forEach((e) => {
            var { resolve: t, reject: r } = e;
            a ? r(a) : t(s);
          }),
          yt.length > 0 &&
            setTimeout(() => {
              vt(t);
            }, 200);
      }
      function vt(e) {
        return mt.apply(this, arguments);
      }
      function mt() {
        return (mt = Object(f.a)(function* (e) {
          var t = yt[yt.length - 1],
            r = yt.slice(0);
          (yt.length = 0), (ht = !0);
          var { payload: a = {} } = t,
            {
              loading: s = !0,
              clearLoading: i = !0,
              changeDeliveryTime: n,
            } = a,
            d = null;
          try {
            pt(e),
              yield e.process.invokePipe("hook:beforeFetchShow", a),
              s && (lt ? (e.data.retailLoading = !0) : Object(E.d)());
            var c = le({ payload: a }, e, a);
            d = yield e.process.invokePipe("genConfirmParams", c);
          } catch (e) {
            return void Object(x.b)(e, {
              message:
                (null == e ? void 0 : e.msg) || "前置验证失败，请稍后重试",
              log: !0,
            });
          }
          return Object(y.requestV2)({
            origin: "cashier",
            withCredentials: !0,
            path: "/pay/wsctrade/order/buy/confirm.json",
            method: "POST",
            data: d,
          })
            .then(
              (function () {
                var t = Object(f.a)(function* (t) {
                  void 0 === t && (t = {});
                  var {
                    redirectConfig: { orderCreated: d, teamLocked: c } = {
                      orderCreated: !1,
                      teamLocked: !1,
                    },
                    tradeConfirmation: { orderItems: l = [] },
                  } = t;
                  return d
                    ? Promise.reject({
                        code: 100100,
                        msg: "订单信息已更新，页面刷新中",
                      })
                    : c
                    ? Promise.reject({
                        code: 100101,
                        msg: "该店铺因存在异常，暂不支持购买，请联系商家",
                      })
                    : n && 0 === l.length
                    ? Promise.reject({
                        code: 100103,
                        msg: "当前配送时间库存不足，请重新选择",
                      })
                    : (yield ut(e, t, a),
                      yield e.process.invokePipe(
                        "hook:afterFetchShow",
                        Object(o.a)({}, t, { payload: a })
                      ),
                      e.event.emit("onConfirmOrder", t),
                      ft({ ctx: e, tasks: r, e: null, data: t }),
                      s &&
                        (lt ? (e.data.retailLoading = !1) : i && Object(E.a)()),
                      t);
                });
                return function (e) {
                  return t.apply(this, arguments);
                };
              })()
            )
            .catch(
              (function () {
                var t = Object(f.a)(function* (t) {
                  var n, d, c;
                  void 0 === t && (t = {});
                  var l = Object(o.a)({}, t, {
                    code: t.code || (null == (n = t.data) ? void 0 : n.code),
                    msg:
                      t.msg ||
                      (null == (d = t.data) ? void 0 : d.msg) ||
                      (null == (c = t.data) ? void 0 : c.message) ||
                      t.message ||
                      "订单信息更新失败，请刷新重试",
                  });
                  ft({ ctx: e, tasks: r, e: t || new Error(), data: null }),
                    s &&
                      (lt ? (e.data.retailLoading = !1) : i && Object(E.a)());
                  try {
                    yield e.process.invokePipe("hook:afterFetchShowError", {
                      error: l,
                      payload: a,
                    }),
                      Object(x.b)(l, { message: l.msg, log: !0 });
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
        return (bt = Object(f.a)(function* (e, t) {
          if (
            (t.logger &&
              t.logger.log({ et: "custom", ei: "trade_buy_confirm_start" }),
            t.data.orderCreated)
          )
            return Promise.resolve({});
          var r = new Promise((t, r) => {
            yt.push({ resolve: t, reject: r, payload: e });
          });
          return ht || vt(t), r;
        })).apply(this, arguments);
      }
      var Ct = r("tmLU"),
        Pt = r("9ZMt");
      function Ot(e, t) {
        var { orderNote: r } = t;
        r && (e.order.buyerMsg = r);
      }
      function St() {
        return (St = Object(f.a)(function* (e, t, r) {
          var a;
          void 0 === r && (r = {});
          var s,
            { bookKey: o = "" } = r;
          (t.prevOrderInfo = JSON.parse(
            (null == t ? void 0 : t.prevOrderInfo) || "{}"
          )),
            (e.data.prepareData = t);
          var { isRetailOrderScene: i } = e.data,
            { isTTApp: n = !1 } = e.data.state.env,
            d = ot({
              orderCreation: t.orderCreation,
              isTTApp: n,
              isRetailOrderScene: i,
            });
          ((s = pe(e.data.state, t, {
            platformInfo: d,
            bookKey: o,
            isRetailOrderScene: i,
          })).address =
            (yield e.process.invokePipe(
              "hook:beforeUpdateAddress",
              null == (a = s) ? void 0 : a.address
            )) || s.address),
            (s =
              (yield e.process.invokePipe("hook:mutateStateAfterFetch", s)) ||
              s),
            O(t, e),
            S(t, e),
            (s.dataLoaded = !0),
            (e.data.dataLoaded = !0),
            g(e, s),
            Ot(s, t.prevOrderInfo);
        })).apply(this, arguments);
      }
      var kt = function (e, t, r) {
          return St.apply(this, arguments);
        },
        Tt = r("PKOW");
      function It(e, t) {
        return wt.apply(this, arguments);
      }
      function wt() {
        return (wt = Object(f.a)(function* (e, t) {
          var { code: r, data: a } = t.error;
          if (100100 === r) {
            var { orderNos: s = [] } = a,
              [o] = s;
            return (
              Object(Tt.f)({
                pageType: Tt.b.PAY,
                type: Tt.a.REDIRECT,
                query: { orderNo: o },
              }),
              Promise.reject(t)
            );
          }
          return t;
        })).apply(this, arguments);
      }
      function xt(e, t) {
        return Dt.apply(this, arguments);
      }
      function Dt() {
        return (Dt = Object(f.a)(function* (e, t) {
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
      function Et(e, t) {
        return _t.apply(this, arguments);
      }
      function _t() {
        return (_t = Object(f.a)(function* (e, t) {
          yield It(e, t), yield xt(e, t);
        })).apply(this, arguments);
      }
      function At() {
        return (At = Object(f.a)(function* (e, t) {
          void 0 === e && (e = {});
          var {
              useLocal: r,
              bookKey: a,
              addressId: s,
              usePointDeduction: i,
              useOptimalCalculate: n = null,
            } = e,
            d = {
              useVersion2: !0,
              useNewCoupon: !0,
              isSupportDefaultSelfFetch: !0,
              useOrderKeep: !0,
              isOptimalSolution: !0,
              isOverlyingCoupon: !0,
              isNewMemberFlow: !0,
              usePointDeduction: !1 !== i,
              defaultPointDeductEffect: !0,
              bookKey: a,
              addressId: s,
              useOptimalCalculate: n,
            },
            { scene: c } =
              (null == Pt.default.$native.getEnterOptionsSync
                ? void 0
                : Pt.default.$native.getEnterOptionsSync()) ||
              (null == Pt.default.$native.getLaunchOptionsSync
                ? void 0
                : Pt.default.$native.getLaunchOptionsSync()) ||
              {};
          c && (d.scene = c);
          var l =
              (yield t.process.invokePipe("genPrepareByBookKeyParams", d)) || d,
            { usePrefetch: u, prefetchKey: p } = e,
            h = function (e) {
              return (
                void 0 === e && (e = {}),
                Object(y.requestV2)({
                  origin: "cashier",
                  withCredentials: !0,
                  path: "/pay/wsctrade/order/buy/prepare-by-book-key.json",
                  data: Object(o.a)({}, l, e),
                })
              );
            };
          return (
            u
              ? Object(Ct.b)({ prefetchKey: p, normalFetchCb: h }).then((e) =>
                  e.bookKey && "retail-shelf" === e.scene && e.hasError
                    ? h({ bookKey: e.bookKey })
                    : e
                )
              : Object(y.requestV2)({
                  origin: "cashier",
                  withCredentials: !0,
                  path: "/pay/wsctrade/order/buy/prepare-by-book-key.json",
                  data: l,
                })
          )
            .then(
              (function () {
                var r = Object(f.a)(function* (r) {
                  void 0 === r && (r = {});
                  var {
                    redirectConfig: { orderCreated: a, teamLocked: s } = {
                      orderCreated: !1,
                      teamLocked: !1,
                    },
                  } = r;
                  return a
                    ? Promise.reject({
                        code: 100100,
                        msg: "订单信息已更新，页面刷新中",
                        data: r,
                      })
                    : s
                    ? Promise.reject({
                        code: 100101,
                        msg: "该店铺因存在异常，暂不支持购买，请联系商家",
                      })
                    : (t.event.emit("onPrepareByBookKey", r),
                      kt(t, r, e),
                      yield t.process.invokePipe(
                        "hook:afterPrepareByBookKey",
                        Object(o.a)({}, r, { payload: e })
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
                var r = Object(f.a)(function* (r) {
                  var a, s, i;
                  void 0 === r && (r = {});
                  var n =
                      r.msg ||
                      (null == (a = r.data) ? void 0 : a.msg) ||
                      (null == (s = r.data) ? void 0 : s.message) ||
                      r.message,
                    d = Object(o.a)({}, r, {
                      code: r.code || (null == (i = r.data) ? void 0 : i.code),
                      msg: n || "系统繁忙，请刷新重试",
                    });
                  try {
                    yield Et(t, { error: d, payload: e }),
                      yield t.process.invokePipe(
                        "hook:afterPrepareByBookKeyError",
                        { error: d, payload: e }
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
      var jt = {
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
            var a = jt[t];
            e.logger.log({
              et: "custom",
              ei: a.ei,
              en: a.en,
              pt: "trade",
              params: { desc: JSON.stringify(r) },
            });
          } catch (e) {}
        };
      }
      function Rt(e) {
        return Ft.apply(this, arguments);
      }
      function Ft() {
        return (Ft = Object(f.a)(function* (e) {
          var t = Nt(e);
          try {
            var r, a;
            t("successStart");
            var { orderResult: s, order: o } = e.data,
              { orderNo: i, showPayResult: n } = s;
            if (
              (t("successOne", {
                isChooseFreeOrder:
                  null == o || null == (r = o.config)
                    ? void 0
                    : r.isChooseFreeOrder,
              }),
              null != o && null != (a = o.config) && a.isChooseFreeOrder)
            )
              return (
                e.process.invoke("freeOrderJumpToResult", { orderNo: i }),
                Promise.reject("充值免单订单跳转")
              );
            if ((t("successTwo", { showPayResult: n }), n))
              return (
                e.process.invoke("onPaySuccess", s), Promise.reject("0元单跳转")
              );
          } catch (e) {}
        })).apply(this, arguments);
      }
      function Bt(e) {
        return Mt.apply(this, arguments);
      }
      function Mt() {
        return (Mt = Object(f.a)(function* (e) {
          var { pay: t } = e.data;
          if (t.prepay && !t.prepaySuccess) {
            var [r] = e.process.invoke("createPrepay");
            return r;
          }
          return Promise.resolve();
        })).apply(this, arguments);
      }
      function Lt() {
        return (Lt = Object(f.a)(function* (e) {
          try {
            return yield Rt(e), yield Bt(e), Promise.resolve();
          } catch (e) {
            throw e;
          }
        })).apply(this, arguments);
      }
      function Gt(e, t) {
        if (!e) return e;
        var r = {};
        return (
          Object.keys(e).forEach((a) => {
            var s = e[a];
            r[a] = (function (e, t, r) {
              return function () {
                for (
                  var a = arguments.length, s = new Array(a), o = 0;
                  o < a;
                  o++
                )
                  s[o] = arguments[o];
                return Promise.resolve()
                  .then(() => t(...s))
                  .catch((t) => {
                    if (t && t instanceof Error) {
                      var a = {
                        bookKey: r.data.bookKey,
                        kdtId: r.data.kdtId,
                        platform: "weapp",
                      };
                      _.a.error(
                        "【clientProcessError】" + e,
                        { message: t.message, stack: t.stack },
                        a
                      );
                    }
                    throw t;
                  });
              };
            })(a, s, t);
          }),
          r
        );
      }
      var Ut = null,
        Wt = function (e) {
          var t,
            r = new Promise((e) => {
              t = e;
            });
          Ut = e.watch("dataLoaded", (e) => {
            e && t();
          });
          var a = Gt(
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
              createPrepay: () => st(e),
              checkOrderPay: () =>
                (function (e) {
                  return Lt.apply(this, arguments);
                })(e),
              resetTradeBuyCore: () => {
                var t = e.store.getInitTradeState();
                g(e, t);
              },
            },
            e
          );
          return (
            Object.keys(a).forEach((t) => e.process.define(t, a[t])),
            () => {
              Object.keys(a).forEach((t) => e.process.undef(t, a[t])),
                Ut && Ut();
            }
          );
        },
        Ht = r("yS26"),
        zt = function (e) {
          e.process.define("mutateState", (t) => (b(e, t), Promise.resolve()));
          var t = {};
          function r(r, a, s) {
            t[r] = function () {
              for (
                var t = arguments.length, r = new Array(t), o = 0;
                o < t;
                o++
              )
                r[o] = arguments[o];
              if ((b(e, (e) => a(e, ...r)), s)) return s();
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
              e.valueCard = Object(o.a)({}, r);
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
              var r = n(t);
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
                defineAsyncProcess: a,
                initProcessMap: s,
              } = e;
              r("switchAddressTab", (e, r) => {
                var { id: a } = r;
                return (
                  (e.address.activeTab = a),
                  (t.data.expressType = t.store.expressType),
                  ["address"]
                );
              }),
                r(
                  "selectContact",
                  (e, t) => {
                    var r, a;
                    e.contact.id = t;
                    var s =
                      (null == (r = e.contact) || null == (a = r.list)
                        ? void 0
                        : a.find((e) => e.id === t)) || {};
                    (e.contact.userName = s.userName),
                      (e.contact.telephone = s.telephone);
                  },
                  () => t.process.invoke("onExpressChanged")
                ),
                r(
                  "setNewContact",
                  (e, t) => {
                    var { userName: r, telephone: a } = t;
                    void 0 !== r && (e.contact.userName = r),
                      void 0 !== a && (e.contact.telephone = a),
                      (e.contact.id = "");
                  },
                  () => t.process.invoke("onExpressChanged")
                ),
                r(
                  "setSelfFetch",
                  (e, t) => (
                    (e.selfFetch = Object(o.a)({}, e.selfFetch, t)),
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
                      Object(L.a)(e.address.inlineForm) ||
                        (e.address.inlineForm = {});
                    try {
                      var r = Pt.default.getApp();
                      if (r.getYouZanYunSdk) {
                        var { scene: a } = Pt.default.getAppOptions();
                        r.getYouZanYunSdk().app.trigger(
                          "ecloud:address:select",
                          [e.address, a]
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
                    (r, a) =>
                      r.id === t.id && (e.address.list.splice(a, 1, t), !0)
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
                    Object(L.a)(r) || (e.address.id = r.id);
                  }
                }),
                r("setIdcard", (e, t) => {
                  e.idcard = Object(o.a)({}, t);
                });
              var i = !1;
              a(
                "updateAddressState",
                (function () {
                  var e = Object(f.a)(function* (e, r) {
                    var a;
                    if (
                      ((i = !1),
                      -1 !==
                        (
                          (null == (a = e.address) ? void 0 : a.list) || []
                        ).findIndex((e) => +e.id == +r.id))
                    )
                      e.address.list.some(
                        (t, a) =>
                          t.id === r.id && (e.address.list.splice(a, 1, r), !0)
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
                        ((i = !0), (e.address.id = r.id)),
                      Object(L.a)(e.address.inlineForm) ||
                        (e.address.inlineForm = {});
                    var s = yield t.process.invokePipe(
                      "hook:beforeUpdateAddress",
                      e.address
                    );
                    e.address = s || e.address;
                  });
                  return function (t, r) {
                    return e.apply(this, arguments);
                  };
                })(),
                () => (
                  t.process.invoke("onExpressChanged"),
                  t.process.invoke("confirmOrder", { isAddressIdChange: i })
                )
              ),
                (s.saveContact = (e) => {
                  if (!e.userName || !e.telephone)
                    return Promise.reject("参数缺失");
                  var r = e.id ? "update" : "add";
                  return Object(Ht.b)(e).then((a) => {
                    var s = a.value || a,
                      i = Object(o.a)({}, e, { id: s });
                    return (
                      t.process.invoke("updateContactState", {
                        contact: i,
                        method: r,
                      }),
                      t.process.invoke("onExpressChanged"),
                      Object(w.a)(
                        "add" === r ? "联系人添加成功" : "联系人编辑成功"
                      ),
                      s
                    );
                  });
                }),
                r("updateContactState", (e, t) => {
                  var { contact: r, method: a } = t,
                    { id: s } = r,
                    { list: i } = e.contact,
                    n = i.slice(),
                    d = Object(o.a)({}, r, { id: s }),
                    c = i.map((e) => e.id).indexOf(r.id);
                  "add" === a ? n.push(d) : n.splice(c, 1, d),
                    r.isDefault &&
                      n
                        .filter((e) => e.id !== s && e.isDefault)
                        .forEach((e) => {
                          e.isDefault = !1;
                        }),
                    (e.contact = Object(o.a)({}, e.contact, r, {
                      list: n,
                      id: s,
                    }));
                }),
                r("deleteContact", (e, t) => {
                  var r = e.contact.list.slice(),
                    a = r.map((e) => e.id).indexOf(t);
                  r.splice(a, 1),
                    (e.contact = Object(o.a)({}, e.contact, { list: r })),
                    t === e.contact.id &&
                      (e.contact = Object(o.a)({}, e.contact, {
                        id: "",
                        userName: "",
                        telephone: "",
                      }));
                });
            })({
              ctx: e,
              defineProcess: r,
              defineAsyncProcess: function (r, a, s) {
                t[r] = Object(f.a)(function* () {
                  for (
                    var t = arguments.length, r = new Array(t), o = 0;
                    o < t;
                    o++
                  )
                    r[o] = arguments[o];
                  if ((yield C(e, (e) => a(e, ...r)), s)) return s();
                });
              },
              initProcessMap: t,
            }),
            (function (e, t) {
              t(
                "setUmpActivity",
                (e, t) => {
                  (e.appointPromotionInstances = t),
                    (e.coupon = Object(o.a)({}, e.coupon, {
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
                      (e.coupon = Object(o.a)({}, e.coupon, {
                        ignoreCoupon: !0,
                      })),
                      (e.customerCards = { list: [] });
                  },
                  () => e.process.invoke("confirmOrder")
                ),
                t("setIgnoreVirtualCoupon", (e, t) => {
                  e.coupon = Object(o.a)({}, e.coupon || {}, {
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
        Kt = r("taYb"),
        Vt = function (e) {
          var t = Wt(e),
            r = (function (e) {
              var t,
                r,
                a = {
                  getDeliveryParam: (t) => J(e.store.tradeState, e.store, t),
                  fetchPromotion:
                    ((r = Object(f.a)(function* (t) {
                      void 0 === t && (t = {});
                      var r = yield le({}, e, t);
                      return Object(y.requestV2)({
                        origin: "cashier",
                        path: "/pay/wsctrade/order/buy/confirm.json",
                        method: "POST",
                        data: Kt.a.toCamelCase(r),
                        withCredentials: !0,
                      });
                    })),
                    function (e) {
                      return r.apply(this, arguments);
                    }),
                  modifyCacheOrder:
                    ((t = Object(f.a)(function* (t) {
                      void 0 === t && (t = {});
                      var { order: r, extra: a } = e.store.tradeState,
                        { skus: s } = t;
                      return Object(y.requestV2)({
                        origin: "cashier",
                        path: "/pay/wsctrade/order/buy/modify-cache.json",
                        method: "POST",
                        data: Kt.a.toCamelCase({
                          bookKey: a.bookKey,
                          buyerId: r.buyer.buyerId,
                          modifyCacheItems: [...s],
                        }),
                        withCredentials: !0,
                      });
                    })),
                    function (e) {
                      return t.apply(this, arguments);
                    }),
                };
              return (
                Object.keys(a).forEach((t) => e.process.define(t, a[t])),
                () => {
                  Object.keys(a).forEach((t) => e.process.undef(t, a[t]));
                }
              );
            })(e),
            a = zt(e);
          return () => {
            t(), r(), a();
          };
        };
      class qt {
        constructor(e) {
          var t;
          (this.initStoreCtxData = () => {
            Object(s.c)(this, [
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
            (this.ctx.store = I(this.ctx)),
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
                        (e.pay.valueCardParams = Object(o.a)(
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
                  if (!r) return w.a.fail("执行优惠流程失败，未获取充值单号");
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
            (this.destroyProcess = Vt(this.ctx)),
            (this.ctx.data.coreReady = !0);
        }
        pageDestroyed() {
          var e, t;
          null == (e = this.offEvent) || e.call(this),
            null == (t = this.destroyProcess) || t.call(this);
        }
      }
    },
    BhWZ: function (e, t, r) {
      var a = r("Sipi"),
        s = "is-pre-cashier-floating-btn-showed";
      t.a = {
        get: () => Object(a.b)(s) || !1,
        set: (e) => {
          Object(a.d)(s, e);
        },
      };
    },
    CzYR: function (e, t) {
      e.exports = {
        d: "viewportMargins;0;isPreCashierPay;4;buyerId;4;goods;4;orderNo;4;orderFinalPrice;4;prepareData;4;themeCSS;4",
        e: "",
        el: "cashier:viewport:in;cashier:viewport:out",
        w: "Main;CashierPre",
        wc: "Cashier;CashierPre",
        wd: "Main",
        l: "",
        lc: "",
        p: "",
        pi: "",
        c: "",
        cc: "",
      };
    },
    DzvT: function (e, t, r) {
      var a = r("taYb"),
        s = r("US/N"),
        o = r("lgMb"),
        i = r("xjQ3");
      t.a = {
        exchangeCoupon: i.a,
        fetchPlusBuy: (e, t) => {
          var r, a, o, i, n, d, c;
          return Object(s.default)({
            origin: "cashier",
            path: "/pay/wsctrade/order/buy/plusBuy.json",
            method: "POST",
            data: {
              kdtId:
                null == e || null == (r = e.order) || null == (a = r.seller)
                  ? void 0
                  : a.kdtId,
              offlineId:
                null == e || null == (o = e.order) || null == (i = o.seller)
                  ? void 0
                  : i.storeId,
              activityId:
                (null == e ||
                null == (n = e.display) ||
                null == (d = n.plusBuyComponent)
                  ? void 0
                  : d.activityId) || 0,
              expressTypeChoice: t
                ? 1
                : null == e || null == (c = e.postage)
                ? void 0
                : c.currentExpressType,
            },
            withCredentials: !0,
          });
        },
        fetchSkuData: (e) => {
          var t,
            { alias: r, order: i } = e;
          return Object(s.requestV2)({
            origin: "cashier",
            method: "GET",
            path: "/wsctrade/fetch-sku.json",
            data: {
              alias: r,
              offlineId:
                (null == i || null == (t = i.seller) ? void 0 : t.storeId) ||
                "",
            },
            withCredentials: !0,
          })
            .then((e) => a.a.toCamelCase(e))
            .catch((e) => {
              throw (
                (Object(o.b)(e, { message: "商品信息获取失败，请稍后重试" }), e)
              );
            });
        },
        getAddsOnePageDetail: (e) =>
          Object(s.default)({
            path: "/wscump/adds-on-page/get-detail.json",
            data: e,
            withCredentials: !0,
          }),
        getPostageConfigList: () =>
          Object(s.default)({
            origin: "cashier",
            method: "GET",
            path: "/wscump/trade/postage-config-list.json",
            withCredentials: !0,
          }),
        queryOrderPreparation: (e) =>
          Object(s.default)({
            origin: "cashier",
            method: "GET",
            data: e,
            path: "/pay/wsctrade/order/buy/query-order-preparation.json",
            withCredentials: !0,
          }),
      };
    },
    EgJK: function (e, t) {
      e.exports = {
        d: "showPrepay;0;showRechargeFreeOrder;0;buyButtonClickTime;2;display;4;memberCard;4;miniprogram;4;address;4;currentAddress;4;order;4;valueCard;4;goods;4;pay;4;finalPrice;4;orderFinalPrice;4;themeColors;4;isDepositPresale;4;kdtId;4;useBeforePayData;4;shop;4;rechargeFreeOrderRule;4;useStoredCustomerDiscount;4;useStoredMemberCustomerDiscount;4;useStoreBalancePayInFull;4;payAssetActivityTagDesc;4;recommendDetaid;4;drugMessage;4;isPrescriptionDrugGoods;4;displayCard;4;enableUseOrderBehaviorParam;4;yzGuarantee;4;enableUseUserAuthorize;4;points;4;pointsName;4;isDrugShop;4;showSubscribeGuide;4;state;4;preCashierChannel;4;isPreCashierPay;4;isPriorUseChosen;4;dataLoaded;4;isTTVerifyScene;4;extra;6;payRechargeInfo;4;orderResult;4;monitorLoggerFilterCode;4",
        e: "toggleRequiredPopup",
        el: "cashier:pay:success;cashier:pay:fail;cashier:ready",
        w: "BottomSubmit",
        wc: "UserAuthorize;PostagetoolTip;BottomSubmit",
        wd: "Main",
        lc: "hexToRgb;getUserInfo",
        p: "goToPaySuccess;updateCreateParamsOnPreCashierPay;gotoPayResult;onPaySuccess;onPayFail;submitOrder;submitOrderAfterRisk",
        pi: "queryPayChannels;createOrder;mutateState;confirmOrder;startPay;getDeliveryParam;createPrepay;freeOrderGetStatus;showSubscription;invoke-protocol;setBestActivity;doPay;extPay;gotoPayResult;onPaySuccess;onPayFail;submitOrder;checkOrderPay",
        cc: "UserAuthorizePopup;SubscribeGuide",
      };
    },
    EjT0: function (e, t) {
      e.exports = {
        d: "postage;4;extra;4",
        e: "",
        el: "",
        w: "Main",
        wc: "",
        wd: "Main",
        l: "",
        lc: "",
        p: "",
        pi: "",
        c: "",
        cc: "",
      };
    },
    Fa1b: function (e, t, r) {
      r.d(t, "a", function () {
        return h;
      });
      var a = r("US/N"),
        s = r("9ZMt"),
        o = r("lgMb"),
        i = 1;
      function n(e) {
        return Object(a.requestV2)({
          path: "wscump/gift/giftid.json",
          data: { orderNo: e },
        }).then((e) => {
          if (e && e.alias) return e.alias;
          throw new Error("retry");
        });
      }
      var d = r("qYBx"),
        c = r("xyw3"),
        l = r("AGZf"),
        u = getApp(),
        { args: p } = d.f;
      function h(e) {
        void 0 === e && (e = {});
        var { kdtId: t } = this.ctx.data,
          {
            groupon: r,
            pay: a,
            tradeTag: d,
            order: h,
            env: y,
            giftCard: f,
            valueCard: v,
            shop: m,
            isHandselFirstPhase: g,
            goods: b,
            outBizNo: C,
            changeSubscribe: P,
          } = this.state,
          { finalPrice: O, isEduOrder: S } = this,
          k = (h.config.gift && h.config.gift.giftOrder) || h.gift;
        if (g)
          return Promise.resolve(
            "/packages/ump/handsel-expand/index?order_no=" +
              h.orderNo +
              "&kdt_id=" +
              t
          );
        if (k)
          return (
            (giftRetry = 1),
            n(h.orderNo)
              .then(
                (e) =>
                  "/packages/ump/gift/share/index?presenter_view=1&gift_id=" + e
              )
              .catch((e) => {
                e.code && giftRetry < 3
                  ? ((giftRetry += 1),
                    setTimeout(() => {
                      !(function e(t) {
                        n(t)
                          .then((e) => {
                            s.default.navigate({
                              url:
                                "/packages/ump/gift/share/index?presenter_view=1&gift_id=" +
                                e,
                            });
                          })
                          .catch((r) => {
                            (r.code = r.code || (r.data || {}).code),
                              r.code && i < 3
                                ? ((i += 1),
                                  setTimeout(() => {
                                    e(t);
                                  }, 1e3))
                                : Object(o.b)(r, {
                                    message: "礼盒信息获取失败，请稍后重试",
                                  });
                          });
                      })(h.orderNo);
                    }, 1e3))
                  : Object(l.a)(e.msg || "获取礼盒id 失败");
              })
          );
        if (r.isGroupon) {
          var { goodsId: T } = b.list[0] || {};
          return S
            ? Promise.resolve(
                "/packages/paidcontent/groupon/index?orderNo=" +
                  h.orderNo +
                  "&goodId=" +
                  T
              )
            : Promise.resolve(
                "/packages/collage/groupon/detail/index?orderNo=" +
                  h.orderNo +
                  "&type=" +
                  r.activityType +
                  "&from=pay"
              );
        }
        if (23 === m.activityType) {
          var I = 0;
          try {
            I = h.ump.activities[0].activityId;
          } catch (e) {}
          return Promise.resolve(
            "/packages/collage/lottery/detail/index?order_no=" +
              h.orderNo +
              "&activity_id=" +
              I
          );
        }
        var w = {
          order_no: C || h.requestNo || h.orderNo,
          isToOrderList: h.orderNos && h.orderNos.length > 1,
          pay_result: "success",
          pay_money: Object(c.a)(O).toCent(),
          changeSubscribe: P,
        };
        a &&
          a.phasePayment &&
          a.phasePayment.currentPhase &&
          (w.phasePaymentStage = a.phasePayment.currentPhase),
          ((f && f.checked && f.checked.length) ||
            (v && v.checked && v.checked.length)) &&
            (w.phasePaymentStage = 2),
          (w.depositPreSale = d.hasDepositPreSaleGoods);
        var x = u.db.set(w),
          D = y.successUrl
            ? decodeURIComponent(y.successUrl)
            : "/packages/order/paid/index",
          E = p.add(D, { dbid: x });
        return Promise.resolve(E);
      }
    },
    FvJv: function (e, t, r) {
      r.d(t, "a", function () {
        return a;
      }),
        r.d(t, "d", function () {
          return d;
        }),
        r.d(t, "b", function () {
          return c;
        }),
        r.d(t, "e", function () {
          return l;
        }),
        r.d(t, "c", function () {
          return u;
        });
      var a,
        s = r("Fcif"),
        o = r("AGZf");
      !(function (e) {
        e[(e.PlusBuy = 24)] = "PlusBuy";
      })(a || (a = {}));
      var i = function (e) {
          void 0 === e && (e = {});
          var t = [];
          return (
            Object.values(e).forEach((e) => {
              t.push(...e);
            }),
            t
          );
        },
        n = (e, t) =>
          "cart" === t.source.orderFrom
            ? e || {}
            : e
            ? Array.isArray(e)
              ? e
              : "object" == typeof e
              ? Object.values(e)
              : e
            : [];
      function d(e, t) {
        var { orderCreation: r } = e,
          { skuData: o = {}, pluginsResult: d = {} } = t,
          {
            selectedSkuComb: c,
            cartMessages: l,
            goodsId: u,
            selectedNum: p,
          } = o;
        return {
          switchData: Object(s.a)(
            {
              num: p,
              skuId: c.id,
              propertyIds: i(d.goodsAttributes),
              itemMessage: JSON.stringify(n(l, r)),
              goodsId: u,
              selectedSkuInfo: Object(s.a)({}, t),
            },
            ((e) => {
              var t,
                { display: r = {}, order: s = {} } = e,
                { seller: o } = s;
              return {
                kdtId: o.kdtId,
                storeId: o.storeId,
                activityId:
                  null == r || null == (t = r.plusBuyComponent)
                    ? void 0
                    : t.activityId,
                activityType: a.PlusBuy,
                extensions: { fromTmpAdd: "1" },
              };
            })(e)
          ),
          goodsId: u,
        };
      }
      function c(e) {
        var t,
          { goodsData: r = {}, display: s = {}, order: o = {} } = e,
          { seller: i } = o;
        return {
          goodsId: r.goodsId,
          kdtId: i.kdtId,
          storeId: i.storeId,
          activityId:
            null == s || null == (t = s.plusBuyComponent)
              ? void 0
              : t.activityId,
          activityType: a.PlusBuy,
          extensions: { fromTmpAdd: "1" },
        };
      }
      function l(e, t) {
        void 0 === t && (t = a.PlusBuy);
        var { sku: r, goodsAttributes: o, goodsData: i } = e,
          n = {};
        (n.sku = r),
          (n.goodsAttributes = o),
          (n.goods = {
            id: i.goodsId,
            title: i.title,
            picture: i.picture,
            alias: i.goodsAlias,
          }),
          (n.skuConfig = { buyText: "确定", skuSence: "buy" });
        var d = (function (e, t) {
          var { sku: r = {}, preChecked: a = {}, checked: s } = e,
            o = {};
          if (s) {
            var { pluginsResult: i = {}, skuData: n } = a.selectedSkuInfo || {};
            (o.selectedNum = n.selectedNum),
              (o.pluginsResult = i),
              (r.tree || []).forEach((e) => {
                var t = e.kS;
                o[t] = n.selectedSkuComb[t];
              }),
              (t.messageConfig = {
                initialMessages: n.cartMessages,
                placeholderMap: {},
              });
          } else t.messageConfig = { initialMessages: {}, placeholderMap: {} };
          return o;
        })(e, n);
        e.ctx.process.invoke(
          "setSkuInfo",
          Object(s.a)({}, n, {
            initialSku: d,
            event: { skuScene: "buy", module: t, skuOptions: { resetSku: !0 } },
            goodsAttributes: { reset: !0 },
          })
        );
      }
      function u(e) {
        (e.loading = !0), o.a.loading({ message: "" });
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
            (e.loading = !1), o.a.clear();
            var {
              exchangeSkuList: a = [],
              exchangePrice: i,
              original_Price: n,
            } = e.goodsData;
            return {
              sku: Object(s.a)({}, t, {
                price: i,
                oldPrice: n,
                minPrice: -1,
                maxPrice: -1,
                list: ([...t.list] || !1)
                  .filter((e) => a.some((t) => +t.skuId == +e.id))
                  .map((e) => {
                    var t = a.find((t) => +t.skuId == +e.id);
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
            throw ((e.loading = !1), o.a.clear(), t);
          });
      }
    },
    HKyO: function (e, t, r) {
      r.d(t, "a", function () {
        return F;
      });
      var a = r("Fcif"),
        s = {
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
        o = 1,
        i = 2,
        n = {
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
                  rate: a,
                  maxDeductionAmount: s,
                  maxDeductionType: n,
                  maxDeductionRate: d,
                  pointDeductionRatioType: c,
                  deductionRequiredPoints: l,
                  deductionAmount: u,
                } = this.pointDeduction || {},
                p = 2 === c,
                h = p ? l : a,
                y = p ? Math.max(u, r / 100) : r / 100,
                f = 1;
              return (
                e.push(f++ + "、订单金额大于" + y + "元"),
                e.push(f++ + "、" + t + "数量大于" + h),
                (n && n !== o) ||
                  (s > 0 && e.push(f++ + "、每笔订单最多抵" + s / 100 + "元")),
                e.push(f++ + "、部分商品不可用"),
                e.push(f++ + "、" + t + "不可以抵运费"),
                n === i && e.push(f++ + "、最高可抵订单金额的" + d + "%"),
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
                  pointDeductionRatioType: a,
                  deductionRequiredPoints: s,
                  deductionAmount: o,
                } = e || {},
                i = 2 === a;
              return "-￥" + (r * ((i ? o : 1) / (i ? s : t))).toFixed(2);
            },
            pointDesc() {
              var { pointsName: e, pointDeduction: t } = this,
                {
                  status: r,
                  userPoint: a,
                  minAmount: s,
                  rate: o,
                  canCostPoints: i,
                  pointDeductionRatioType: n,
                  deductionRequiredPoints: d,
                  deductionAmount: c,
                  isUse: l,
                } = t || {},
                u = 2 === n,
                p = u ? d : o;
              if (!(r && a && s && p)) return "";
              var h = u ? Math.max(c, s / 100) : s / 100;
              switch (r) {
                case 1:
                  return "共" + a + e + "，满" + p + e + "可用";
                case 2:
                  return "可用" + e + "抵现不足" + h + "元";
                case 3:
                  return i > 0
                    ? l
                      ? this.pointPrice
                      : "" + i + e + "可用"
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
        d = r("x5Yp"),
        c = {
          NO_DISCOUNT: "暂无会员优惠可用",
          CANT_USE_IN_STORE: "暂无本店可用",
          CANT_USE_OVERLAY: "不可与付费卡叠加使用",
          HAS_MEMBER_DISCOUNT: "有可使用的会员优惠",
          EMPTY: "",
        },
        l = {
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
              var { EMPTY: e, NO_DISCOUNT: t } = c;
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
                a = t.list ? t.list.length : 0;
              return r + a > 1 || (r + a === 1 && 1 === a);
            },
            isMembershipDisabled() {
              var { membershipTitle: e } = this,
                {
                  NO_DISCOUNT: t,
                  CANT_USE_IN_STORE: r,
                  CANT_USE_OVERLAY: a,
                } = c;
              return [t, r, a].includes(e);
            },
            chosenCustomCard() {
              var { list: e = [], id: t } = this.customerCards || {};
              return e.find((e) => e.id === t);
            },
            hasOneDisplayCard() {
              return (
                !Object(d.a)(this.displayCard) ||
                !Object(d.a)(this.displayFreeCard)
              );
            },
            isMembershipLink() {
              var {
                  orderCreated: e,
                  customerCards: t,
                  unavailableCustomerCards: r,
                  hasDisabledCustomerCards: a,
                } = this,
                s = t.list ? t.list.length : 0,
                o = r.list ? r.list.length : 0;
              return !e && (s + o > 1 || (s + o === 1 && a));
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
                  ? c.CANT_USE_OVERLAY
                  : ""
                : this.hasCustomerCards
                ? c.HAS_MEMBER_DISCOUNT
                : this.hasDisabledCustomerCards
                ? c.CANT_USE_IN_STORE
                : c.NO_DISCOUNT;
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
                    orderCreated: a,
                    hasDisplayCard: s,
                  } = this,
                  o = r.id;
                if (a || o === t) this.hideMembershipDialog();
                else {
                  e.process.invoke("setCustomCard", t, !0),
                    t && s && e.process.invoke("setDisplayCard", !1),
                    e.logger &&
                      e.logger.log({
                        et: "custom",
                        ei: "trade_buy_set_member_ship",
                        en: "切换会员优惠",
                        pt: "trade",
                        params: { desc: JSON.stringify(t) },
                      });
                  var [i] = e.process.invoke("confirmOrder");
                  i.then(() => {
                    this.hideMembershipDialog();
                  }).catch(() => {
                    e.process.invoke("setDisplayCard", o, !0);
                  });
                }
              },
            };
          },
        },
        u = r("87Y/"),
        p = r.n(u),
        h = {
          currentAddressData() {
            return this.currentAddress;
          },
          hasCurrentAddress() {
            return !!this.currentAddress.areaCode;
          },
          hasDisplayCard() {
            return !Object(d.a)(this.displayCard);
          },
          hasFreeMemberCard() {
            return !Object(d.a)(this.displayFreeCard);
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
        y = r("AGZf"),
        f = r("lgMb"),
        v = r("US/N"),
        m = {
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
                var { orderCreated: r, display: a } = this;
                if (!r) {
                  var s,
                    { openDisplayCard: o } = a;
                  e.process.invoke("setDisplayCard", !o),
                    !0 == !o && e.process.invoke("setCustomCard", null),
                    e.process.invoke(
                      "setIgnoreVirtualCoupon",
                      !t || t.ignoreVirtualCoupon
                    ),
                    t.ignoreVirtualCoupon || (s = { bigsetCoupon: !0 });
                  var [i] = e.process.invoke("confirmOrder", s);
                  i.then(() => {
                    t.conflictTip && Object(y.a)(t.conflictTip),
                      !t.ignoreVirtualCoupon && this.onShowCouponList();
                  }).catch(() => {
                    e.process.invoke("setDisplayCard", o);
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
                var [a] = e.process.invoke("confirmOrder", r);
                a.then(() => {
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
                var { areaCode: r, userName: a } = this.currentAddressData,
                  s = [
                    {
                      attributeId: 2,
                      attributeType: 1,
                      value: a || "匿名用户",
                    },
                    { attributeId: 6, attributeType: 1, value: r },
                  ];
                Object(v.requestV2)({
                  path: "/wscuser/scrm/api/benefitcard/join-free-level-member.json",
                  method: "POST",
                  data: {
                    attributeList: s,
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
                          Object(y.a)("注册成功，已为你选择最佳优惠");
                      }).catch((e) => {
                        Object(f.b)(e, { message: "注册失败，请稍后重试" });
                      });
                    }
                  })
                  .catch((e) => {
                    Object(f.b)(e, { message: "注册失败，请稍后重试" });
                  });
              },
              openAgree(e) {
                Object(v.default)({
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
                    orderCreated: a,
                    valueCard: s,
                    display: o,
                  } = this,
                  i = !!r && !a,
                  { hidePrePayCard: n = !1 } = e.data.yunDesignConfig || {},
                  d = null == s ? void 0 : s.showValueCard,
                  c = null == o ? void 0 : o.showPrePayCards,
                  l = d && !n && c,
                  u = "因订单中存在会员卡商品，不支持使用";
                i && l
                  ? (t.conflictTip = u + "积分/储值余额")
                  : i
                  ? (t.conflictTip = u + "积分抵扣")
                  : l && (t.conflictTip = u + "储值余额"),
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
        P = (e) => (e / 100).toFixed(2),
        O = {
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
              var r, a;
              return (
                e +
                (null != (r = null != (a = t.value) ? a : t.denominations)
                  ? r
                  : 0)
              );
            }, 0);
            return P(e);
          },
          newDeliveryCouponValue() {
            var e = this.chosenDeliveryCoupons.reduce((e, t) => {
              var r, a;
              return (
                e +
                (null != (r = null != (a = t.value) ? a : t.denominations)
                  ? r
                  : 0)
              );
            }, 0);
            return P(e);
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
              var a = JSON.parse(r),
                { activityId: s } = a;
              return !!s;
            } catch (e) {
              return !1;
            }
          },
          isShowCouponCell() {
            var e,
              t,
              r,
              a =
                null == (e = this.state) || null == (t = e.coupon)
                  ? void 0
                  : t.showCoupon,
              s = !(null != (r = this.display) && r.forbidCoupon);
            return !!(a && this.hasGoods && s);
          },
          isShowDeliveryCouponCell() {
            var e, t, r, a;
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
                !(null == (r = this.state) || null == (a = r.coupon)
                  ? void 0
                  : a.showFreightCoupon) || !this.hasGoods
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
        T = {
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
          getters: O,
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
                    ? Object(y.a)("该优惠码你已经拥有，已为你自动选中～")
                    : (e.process.invoke("addCouponProcess", r),
                      Object(y.a)("兑换成功")),
                    this.couponModel.chosenId !== r.id &&
                      ((this.lastCouponList =
                        this.couponModel.availableCoupons || []),
                      e.process.invoke("setCouponChosenIdProcess", r.id)),
                    this.finishExchange();
                }).catch((e) => {
                  Object(y.a)(e.msg || "兑换失败"), this.finishExchange();
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
                    (Object(y.a)("该优惠券与部分活动不可叠加使用"),
                    (e.metuxPromotions = []));
                }
              },
            };
          },
        },
        I = r("mztD"),
        w = r("sqpL");
      function x(e, t) {
        var r, a;
        if (null == e || null == t) return !1;
        var s =
            null == (r = e.plusBuyComponent) ? void 0 : r.showPlusBuyComponent,
          o = null == (a = t.exchangeGoodsList) ? void 0 : a.length;
        return s && o;
      }
      function D(e, t) {
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
      var E = {
          state: { plusBuy: {}, plusSwipe: { closeStatus: !1 } },
          getters: {
            showPlusBuy() {
              var { display: e, plusBuy: t } = this;
              return x(e, t) && this.plusBuyGoodsList.length;
            },
            showPlusPop() {
              var { display: e, plusBuy: t, plusSwipe: r } = this;
              return (
                x(e, t) &&
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
                    s =
                      null == (r = e.list)
                        ? void 0
                        : r.find(
                            (e) => e.fromTmpAdded && t.goodsId === e.goodsId
                          );
                  if (!Object(d.a)(s))
                    return Object(a.a)({}, t, {
                      desc: Object(w.a)(s),
                      price: (s.payPrice / 100).toFixed(2),
                      originalPrice: (s.price / 100).toFixed(2),
                      original_Price: s.price,
                      picture: Object(I.a)(s.imgUrl, "!180x180.jpg"),
                    });
                  var o = Object(a.a)({}, t, {
                    price: (t.exchangePrice / 100).toFixed(2),
                    originalPrice: (t.originalPrice / 100).toFixed(2),
                    original_Price: t.originalPrice,
                  });
                  try {
                    o.picture = Object(I.a)(
                      JSON.parse(t.picture)[0].url,
                      "!500x500.jpg"
                    );
                  } catch (e) {
                    o.picture = "";
                  }
                  return o;
                });
              })(e, t);
            },
            selectedCount() {
              var { goods: e, plusBuy: t } = this;
              return (function (e, t) {
                return D(e, t).length;
              })(e, t);
            },
            payPrice() {
              var { goods: e, plusBuy: t } = this;
              return (function (e, t) {
                return (
                  D(e, t).reduce((e, t) => e + t.payPrice, 0) / 100
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
        _ = {
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
                a = [...(t || [])];
              return r.some(
                (e) => (a.find((t) => t.summaryCardNo === e) || {}).isExclusion
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
                  exclusionCard: a,
                  isCustomerDiscountNotFullPay: s,
                  keepSelect: o,
                  isCustomerSelect: i = !1,
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
                  s &&
                    (e.process.invoke("setDisableStoredDiscount", !0),
                    e.process.invoke("confirmOrder", {
                      keepSelect: o,
                      isCustomerSelect: i,
                    })),
                  this.toggleShowRecommend(!1),
                  a &&
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
                    e.process.invoke("confirmOrder", { isCustomerSelect: i }));
              },
            };
          },
        },
        j = r("VmHG"),
        N = [
          { state: { themeTag: {} }, getters: {}, actions: {} },
          s,
          n,
          l,
          m,
          g,
          T,
          E,
          _,
          A,
        ].reduce((e, t) => {
          return (
            void 0 === (r = e) && (r = {}),
            void 0 === (s = t) && (s = {}),
            {
              state: Object(a.a)({}, r.state, s.state),
              getters: Object(a.a)({}, r.getters, s.getters),
              actions: Object(a.a)({}, r.actions, s.actions),
            }
          );
          var r, s;
        }, {});
      var R = r("YeA1");
      function F(e) {
        if (e.ctx.store) e.store = e.ctx.store;
        else {
          var t;
          (e.ctx.store =
            ((t = e.ctx),
            Object(j.a)({
              state: () => Object(a.a)({}, N.state),
              getters: Object(a.a)({}, N.getters),
              actions: Object(a.a)(
                {},
                N.actions,
                n.getActions(t),
                l.getActions(t),
                m.getActions(t),
                T.getActions(t),
                _.getActions(t),
                E.actions,
                A.getActions(t)
              ),
            }))),
            (e.store = e.ctx.store);
          e.ctx.process.define(
            "selectCustomerCard",
            e.store.onMembershipSelect
          ),
            Object(j.c)(e, [
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
    J5Nl: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a,
        s = (a = r("fq/J")) && a.__esModule ? a : { default: a };
      function o(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return i(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return i(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return i(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
        return a;
      }
      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function d(e, t) {
        for (var r = 0; r < t.length; r++) {
          var a = t[r];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function c(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var l = (function () {
        function e() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          n(this, e),
            c(this, "_options", void 0),
            c(this, "processors", void 0),
            c(this, "_processArgsQueue", void 0),
            (this.processors = new Map()),
            (this._options = t),
            (this._processArgsQueue = {});
        }
        var t, r, a;
        return (
          (t = e),
          (r = [
            {
              key: "define",
              value: function (e, t) {
                if (e && t && t.apply) {
                  if (this.processors.get(e))
                    this._options.debug &&
                      s.default.info(
                        "ranta-adapter: process: ".concat(
                          e,
                          " 已经被定义，请勿重复定义"
                        )
                      );
                  else if (
                    (this.processors.set(e, { key: e, handler: t }),
                    this._processArgsQueue[e])
                  ) {
                    for (; this._processArgsQueue[e].length > 0; ) {
                      var r = this._processArgsQueue[e].pop();
                      r && this.invoke.apply(this, [e].concat(o(r.args)));
                    }
                    delete this._processArgsQueue[e];
                  }
                } else
                  this._options.debug &&
                    s.default.info(
                      "ranta-adapter: process: 缺少 key 或者 handler"
                    );
              },
            },
            {
              key: "invoke",
              value: function (e) {
                for (
                  var t = this.processors.get(e),
                    r = arguments.length,
                    a = new Array(r > 1 ? r - 1 : 0),
                    s = 1;
                  s < r;
                  s++
                )
                  a[s - 1] = arguments[s];
                return t
                  ? t.handler.apply(null, a)
                  : (this._processArgsQueue[e] ||
                      (this._processArgsQueue[e] = []),
                    void this._processArgsQueue[e].push({ args: a }));
              },
            },
          ]) && d(t.prototype, r),
          a && d(t, a),
          e
        );
      })();
      (t.default = l), (e.exports = t.default);
    },
    JJK5: function (e, t, r) {
      r.d(t, "a", function () {
        return o;
      }),
        r.d(t, "b", function () {
          return i;
        });
      var a = r("5HXs"),
        s = r.n(a),
        o = s()({ block: "cashier-pre" }),
        i =
          (s()({ block: "cashier-pre-copy-link" }),
          function () {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
              t[r] = arguments[r];
            return o("flex", t);
          });
    },
    Kidx: function (e, t) {
      e.exports = {
        d: "display;4;guarantee;4;valueCard;4;useBeforePayData;4;orderFinalPrice;4;orderCreated;4;goods;4;kdtId;4;order;4;prepareData;4;themeColors;4;isPreCashierPay;4",
        e: "",
        el: "",
        w: "Main",
        wc: "",
        wd: "Main",
        pi: "mutateState;getIsSyncOrder",
      };
    },
    L6tU: function (e, t, r) {
      r.d(t, "a", function () {
        return s;
      });
      var a = r("cb02");
      function s(e) {
        var { order: t, idcard: r, tradeTag: s } = e;
        if (s.hasOverseaGoods) {
          if (!r.name) return { name: "请输入真实姓名" };
          if (!r.number || !Object(a.c)(r.number))
            return { number: "请输入真实身份证号" };
          if (/^(71|81|82)/.test(r.number))
            return { number: "请输入中国大陆身份证号" };
          if (t.needIdCardPhoto && (!r.frontPhoto || !r.backPhoto))
            return { message: "请上传身份证照" };
        }
        return "";
      }
    },
    LpYb: function (e, t, r) {
      r.d(t, "b", function () {
        return s;
      }),
        r.d(t, "c", function () {
          return o;
        }),
        r.d(t, "a", function () {
          return i;
        });
      var a = r("US/N"),
        s = (e) =>
          Object(a.default)({
            path: "/wscshop/shop/shop-meta-info.json",
            method: "GET",
            data: { kdt_id: e },
          }),
        o = (e) =>
          Object(a.default)({
            path: "/wscump/common/get-template.json",
            data: e,
            method: "GET",
          }),
        i = () =>
          Object(a.default)({
            path: "/wscdeco/im/common/is-shop-not-in-black-list.json",
            data: {},
          });
    },
    OvW6: function (e, t, r) {
      var a = r("Fcif"),
        s = r("esrA"),
        o = "@wsc-tee-trade/trade-buy-page-setup",
        i = "@ext-tee-wsc-ump/trade-buy-ump-data",
        n = "@assets-tee-extensions/cashier",
        d = "@wsc-tee-trade/trade-buy-prior-use",
        c = "@assets-tee-extensions/guarantee-freight-bar",
        l = "@assets-tee-extensions/guarantee-components",
        u = "@assets-tee-extensions/guarantee-ensure",
        p = "@ext-tee-wsc-goods/follow-popup-block",
        h = "@ext-tee-wsc-im/subscription-message",
        y = "@wsc-tee-trade/trade-buy-block-container",
        f = "@assets-tee-extensions/cashier-pre",
        v = "@wsc-tee-trade/trade-buy-service-block",
        m = "@wsc-tee-trade/trade-buy-popup-container",
        g = "@wsc-tee-trade/trade-buy-ump-block",
        b = "@wsc-tee-trade/trade-buy-address-pre",
        C = "@wsc-tee-trade/trade-buy-header-container",
        P = "@wsc-tee-trade/trade-buy-cashier-pre",
        O = "@wsc-tee-trade/retail-order-error-info",
        S = "@wsc-tee-trade/trade-buy-reward-popup",
        k = "@wsc-tee-trade/trade-buy-wxvideo-block",
        T = "@wsc-tee-trade/trade-buy-ump-wrapper",
        I = "@wsc-tee-trade/trade-buy-service-wrapper",
        w = "@wsc-tee-trade/trade-buy-common-popup",
        x = "@ext-tee-wsc-goods/base-common-sku",
        D = Object(s.a)({
          a: {
            p: [
              {
                r: ["/packages/trade-buy/order/buy/index"],
                c: [
                  {
                    t: "c",
                    c: [
                      {
                        t: "m",
                        c: ["b36-1", "b36-27", "b36-24", "b36-29", "b36-32"],
                      },
                    ],
                  },
                  {
                    t: "c",
                    c: [
                      { t: "m", c: ["b36-28"] },
                      { t: "m", c: ["b36-7"] },
                      { t: "m", c: ["b36-3", "b36-41"] },
                      { t: "m", c: ["b36-34"] },
                      { t: "m", c: ["b36-42", "b36-19", "b36-38"] },
                      { t: "m", c: ["b36-8"] },
                      { t: "m", c: ["b36-6", "b36-9", "b36-17"] },
                      {
                        t: "m",
                        c: [
                          "b36-4",
                          "b36-31",
                          "b36-12",
                          "b36-35",
                          "b36-5",
                          "b36-16",
                          "b36-18",
                          "b36-25",
                          "b36-36",
                          "b36-14",
                          "b36-30",
                          "b36-0",
                          "b36-37",
                          "b36-44",
                          "b36-33",
                        ],
                      },
                    ],
                  },
                ],
                m: [
                  "b36-2",
                  "b36-10",
                  "b36-11",
                  "b36-13",
                  "b36-15",
                  "b36-21",
                  "b36-22",
                  "b36-23",
                  "b36-26",
                  "b36-39",
                  "b36-40",
                  "b36-43",
                ],
              },
            ],
          },
          m: [
            [
              "b36-0",
              "@ext-tee-wsc-decorate/page-style",
              null,
              { stage: "pre" },
            ],
            [
              "b36-1",
              "@wsc-tee-trade/trade-buy-core",
              {
                p: {
                  genCreateParams: [
                    ["b36-13", "callHookBeforeCreateOrder"],
                    ["b36-2", "changeCreateOrderParamsExt"],
                  ],
                  genConfirmParams: [
                    ["b36-13", "callHookBeforeFetchShow"],
                    ["b36-35", "callHookGenConfirmParams"],
                  ],
                  genPrepareByBookKeyParams: [
                    ["b36-13", "modifyPrepareByBookKeyParams"],
                    ["b36-13", "genPrepareParamsByRetail"],
                  ],
                  "hook:afterPrepareByBookKeyError": [
                    ["b36-2", "handlePrepareDefaultError"],
                  ],
                  "hook:beforeFetchShow": [["b36-2", "handleBeforeFetchShow"]],
                  "hook:afterFetchShow": [["b36-3", "fetchUmpPlusBuyProcess"]],
                  "hook:beforeCreateOrder": [
                    ["b36-28", "validateSelfFetch"],
                    ["b36-8", "handlePresaleConfirm"],
                    ["b36-3", "handleExternalCoupon"],
                    ["b36-13", "validateSelfFetchShop"],
                    ["b36-2", "handleBeforeCreateOrder"],
                  ],
                  "hook:beforeUpdateAddress": [
                    ["b36-13", "callHookBeforeUpdateAddress"],
                  ],
                  "hook:mutateStateAfterFetch": [
                    ["b36-13", "callHookAfterFetchShow"],
                    ["b36-35", "callHookAfterFetchState"],
                  ],
                  handleAfterCreateOrderParallel: [
                    ["b36-4", "handlePayAfterCreateOrder"],
                  ],
                },
              },
            ],
            [
              "b36-2",
              o,
              { p: { openValueCard: null, setTitleName: null } },
              { stage: "normal", asyncInit: !0 },
            ],
            [
              "b36-3",
              i,
              { p: { fetchShow: [["b36-1", "confirmOrder"]] } },
              { stage: "normal" },
            ],
            [
              "b36-4",
              "@wsc-tee-trade/trade-buy-pay-view",
              {
                d: {
                  shop: "@wsc-tee-shop/shop-core~NzurILNk",
                  display: "b36-1",
                  order: "b36-1",
                  goods: "b36-1",
                  orderNo: null,
                },
                e: {
                  "cashier:pay:success": [["b36-5"]],
                  "cashier:pay:fail": [["b36-5"]],
                  "cashier:close": [["b36-5"]],
                },
                l: { checkFromChannelsLive: null, checkIsOpenedWxV3: null },
                p: {
                  startPay: [["b36-5"]],
                  showSubscription: [
                    ["b36-17"],
                    ["b36-13", "callHookBeforeEvokeSubscribeDialog"],
                  ],
                  queryPayChannels: [["b36-5"]],
                  doPay: [["b36-5"]],
                  startPay_preCashier: [["b36-23", "pay"]],
                },
              },
              { stage: "post" },
            ],
            [
              "b36-5",
              n,
              {
                d: {
                  shop: "@wsc-tee-shop/shop-core~NzurILNk",
                  biz: "b36-4",
                  quickMode: "b36-4",
                },
                w: {
                  UserAuthorize: [
                    "@passport-tee/user-authorize~DDdJBmWG",
                    "Main",
                  ],
                },
                p: {
                  beforePay: [
                    ["b36-4", "onPayItemClick"],
                    ["b36-4", "handleBeforePay"],
                  ],
                },
                c: { UserAuthorizePopup: null },
              },
              { stage: "post" },
            ],
            [
              "b36-6",
              d,
              {
                d: {
                  themeColors: ["@wsc-tee-shop/shop-core~NzurILNk", "theme"],
                },
              },
              { stage: "post" },
            ],
            [
              "b36-7",
              "@wsc-tee-trade/trade-buy-goods",
              {
                d: { appShop: ["@wsc-tee-shop/shop-core~NzurILNk", "shop"] },
                l: { queryAbTest: null },
                w: {
                  ExtraFees: "b36-7",
                  Presale: "b36-7",
                  PostageCell: ["b36-21", "Main"],
                  GuaranteeFreightBar: "b36-10",
                },
                p: { fetchShow: [["b36-1", "confirmOrder"]] },
              },
              { stage: "normal" },
            ],
            [
              "b36-8",
              "@wsc-tee-trade/trade-buy-price",
              { w: { Presale: "b36-8" } },
              { stage: "post" },
            ],
            [
              "b36-9",
              "@wsc-tee-trade/trade-buy-submit",
              {
                d: {
                  preCashierChannel: "b36-4",
                  isPreCashierPay: "b36-4",
                  isPriorUseChosen: "b36-4",
                },
                e: {
                  "cashier:pay:success": [["b36-23"]],
                  "cashier:pay:fail": [["b36-23"]],
                  "cashier:ready": [["b36-23"], ["b36-5"], ["b36-16"]],
                },
                w: {
                  UserAuthorize: [
                    "@passport-tee/user-authorize~DDdJBmWG",
                    "Main",
                  ],
                  BottomSubmit: "b36-9",
                },
                p: {
                  queryPayChannels: [["b36-4"]],
                  startPay: [["b36-4"]],
                  showSubscription: [
                    ["b36-17"],
                    ["b36-13", "callHookBeforeEvokeSubscribeDialog"],
                  ],
                  doPay: [["b36-4"]],
                  extPay: [["b36-5"], ["b36-16"]],
                },
              },
              { stage: "normal" },
            ],
            [
              "b36-10",
              c,
              {
                d: {
                  paddingConfig: ["b36-1", "guaranteeFreightBarPaddingConfig"],
                },
              },
              { stage: "normal" },
            ],
            ["b36-11", l, null, { stage: "normal" }],
            [
              "b36-12",
              u,
              null,
              { properties: { yzGuaranteeEnsureMt: 32 }, stage: "post" },
            ],
            [
              "b36-13",
              "@wsc-tee-trade/retail-order",
              {
                d: { shop: "@wsc-tee-shop/shop-core~NzurILNk" },
                w: {
                  UserAuthorize: [
                    "@passport-tee/user-authorize~DDdJBmWG",
                    "Main",
                  ],
                },
                p: {
                  fetchShow: [["b36-1", "confirmOrder"]],
                  updateDinePickUpWay: [["b36-2", "switchDine"]],
                },
              },
              { stage: "normal" },
            ],
            [
              "b36-14",
              "@wsc-tee-trade/cart-present-popup",
              null,
              { stage: "normal" },
            ],
            [
              "b36-15",
              "@wsc-tee-trade/trade-buy-drug",
              null,
              { stage: "post" },
            ],
            [
              "b36-16",
              n,
              {
                d: { shop: "@wsc-tee-shop/shop-core~NzurILNk" },
                w: {
                  UserAuthorize: [
                    "@passport-tee/user-authorize~DDdJBmWG",
                    "Main",
                  ],
                },
                p: {
                  beforePay: [["b36-4", "handleBeforePay"]],
                  onPaySuccessSync: null,
                },
                c: { UserAuthorizePopup: null },
              },
              { stage: "post" },
            ],
            ["b36-17", "trade-buy-subscription-msg", null, { stage: "post" }],
            ["b36-18", p, { w: { H5Follow: null } }, { stage: "post" }],
            ["b36-19", h, null, { stage: "normal" }],
            [
              "b36-20",
              y,
              { w: { MainContent: ["b36-15", "Main"] } },
              { stage: "post" },
            ],
            ["b36-21", "trade-buy-postage-cell", null, { stage: "normal" }],
            [
              "b36-22",
              "@ext-tee-shop/shop-cert-notice",
              null,
              { stage: "normal" },
            ],
            [
              "b36-23",
              f,
              {
                d: {
                  amount: ["b36-4", "orderAmount"],
                  biz: "b36-4",
                  mobile: ["b36-4", "buyerPhone"],
                  traceId: ["b36-1", "bookKey"],
                  excludePayChannels: ["b36-4", "excludePayTools"],
                  bizExt: "b36-4",
                },
                p: {
                  onPaySuccessSync: [["b36-4"]],
                  onPayItemClick: [["b36-4"]],
                },
              },
              { stage: "normal" },
            ],
            [
              "b36-24",
              v,
              { p: { logFocusMessage: [["b36-30"]] } },
              { stage: "normal" },
            ],
            [
              "b36-25",
              m,
              {
                w: {
                  PopupContent: [
                    ["b36-27", "Postagetool"],
                    ["b36-27", "CouponList"],
                    ["b36-27", "MembershipDialog"],
                    ["b36-27", "PrepayCardPopup"],
                    ["b36-27", "ActivityDialog"],
                    ["b36-24", "InvoiceActionSheet"],
                    ["b36-27", "PointDeductionPopup"],
                    ["b36-33", "RechargeGiftPack"],
                  ],
                },
              },
              { stage: "post" },
            ],
            [
              "b36-26",
              "@wsc-tee-trade/trade-buy-misc-pre",
              {
                d: {
                  coupon: ["b36-3", "couponModel"],
                  titleText: ["b36-2", "pageTitle"],
                },
                p: { navigateToTradeBuy: null },
              },
              { stage: "normal" },
            ],
            [
              "b36-27",
              g,
              {
                d: { order: "b36-3" },
                e: { "submit:act": [["b36-44", "sku:submit"]] },
                w: {
                  BaseBlock: "b36-27",
                  ExtraFees: "b36-27",
                  UserAuthorize: [
                    "@passport-tee/user-authorize~DDdJBmWG",
                    "Main",
                  ],
                  PlusBuy: "b36-27",
                  PrepayCardCell: "b36-27",
                  CouponListPopupBottom: "b36-27",
                  MembershipCell: "b36-27",
                  PointCell: "b36-27",
                  PointDeductionCell: "b36-27",
                  CouponCell: "b36-27",
                  ActivityCell: "b36-27",
                },
              },
              { properties: { useCustomTitleSlot: !0 }, stage: "normal" },
            ],
            [
              "b36-28",
              b,
              {
                d: {
                  retailHouseNumberRequired: ["b36-13", "houseNumberRequired"],
                  themeVars: [
                    "@ext-tee-wsc-decorate/theme-color~EKBphALO",
                    "themeCSS",
                  ],
                },
                w: {
                  AddressListItem: "b36-28",
                  DeliveryBlock: "b36-28",
                  XhsAddress: null,
                },
                p: {
                  fetchShow: [["b36-1", "confirmOrder"]],
                  "hook:beforeGetDefaultSelfFetch": [
                    ["b36-13", "callHookBeforeGetDefaultSelfFetch"],
                  ],
                },
              },
              { stage: "normal", asyncInit: !1 },
            ],
            [
              "b36-29",
              C,
              { w: { HeaderContent: ["b36-26", "OrderKeepNavigator"] } },
              { stage: "normal" },
            ],
            [
              "b36-30",
              "@wsc-tee-trade/trade-buy-misc",
              { d: { orderNo: null } },
              { stage: "post" },
            ],
            [
              "b36-31",
              y,
              { w: { MainContent: ["b36-30", "HaitaoFooterNotice"] } },
              { stage: "post" },
            ],
            [
              "b36-32",
              y,
              {
                e: { afterBlockToggle: [["b36-13", "dine:afterBlockToggle"]] },
                w: { MainContent: ["b36-13", "Dine"] },
              },
              { stage: "post" },
            ],
            [
              "b36-33",
              "@retail-tee-prepaid/prepaid",
              {
                e: {
                  "cashier:pay:prepaid:success": [
                    ["b36-16", "cashier:pay:success"],
                  ],
                  "cashier:pay:prepaid:fail": [["b36-16", "cashier:pay:fail"]],
                  "cashier:pay:prepaid:close": [["b36-16", "cashier:close"]],
                },
                p: {
                  prepaidStartPay: [["b36-16", "startPay"]],
                  fetchShow: [["b36-1", "confirmOrder"]],
                },
              },
              { stage: "normal" },
            ],
            [
              "b36-34",
              P,
              {
                d: { isPreCashierPay: "b36-4", buyerId: "b36-4" },
                w: { Cashier: ["b36-23", "CellGroup"], CashierPre: "b36-34" },
              },
              { properties: { block: !0 }, stage: "normal" },
            ],
            [
              "b36-35",
              O,
              { d: { shop: "@wsc-tee-shop/shop-core~NzurILNk" } },
              { stage: "normal" },
            ],
            ["b36-36", S, null],
            [
              "b36-37",
              "@wsc-tee-shop/footer",
              { d: { buyerId: "b36-4" } },
              { properties: { isShowNav: !1 } },
            ],
            [
              "b36-38",
              "trade-buy-privacy-bill",
              null,
              { properties: { isOrderPage: !0 } },
            ],
            [
              "b36-39",
              k,
              {
                e: {
                  "cashier:pay:success": [["b36-23"], ["b36-5"], ["b36-16"]],
                  "cashier:pay:fail": [["b36-23"], ["b36-5"], ["b36-16"]],
                },
                p: { requestOrderPayment: [["b36-23"], ["b36-5"], ["b36-16"]] },
              },
            ],
            ["b36-40", "@ext-tee-wxvideo/wxvideo-utils", null],
            ["b36-41", T, null],
            ["b36-42", I, { p: { logFocusMessage: [["b36-30"]] } }],
            ["b36-43", w, null],
            [
              "b36-44",
              x,
              {
                e: {
                  afterSkuSubmit: [
                    ["b36-27", "sku:afterSubmit"],
                    ["b36-14", "present-sku:afterSubmit"],
                  ],
                },
              },
            ],
          ],
          e: [
            ["@ext-tee-wsc-decorate/page-style", r("8v1J")],
            ["@wsc-tee-trade/trade-buy-core", r("CBNg")],
            [o, r("6rHZ"), { asyncInit: !0 }],
            [i, r("oceq")],
            ["@wsc-tee-trade/trade-buy-pay-view", r("MjBJ")],
            [n, r("9aHS")],
            [d, r("Kidx")],
            ["@wsc-tee-trade/trade-buy-goods", r("UVGo")],
            ["@wsc-tee-trade/trade-buy-price", r("oJcc")],
            ["@wsc-tee-trade/trade-buy-submit", r("EgJK")],
            [c, r("bsi0")],
            [l, r("w8Br")],
            [u, r("KUiv")],
            ["@wsc-tee-trade/retail-order", r("cO1G")],
            ["@wsc-tee-trade/cart-present-popup", r("8PT3")],
            ["@wsc-tee-trade/trade-buy-drug", r("yCQO")],
            ["trade-buy-subscription-msg", r("Q9/N")],
            [p, r("Tr+R")],
            [h, r("7ueE")],
            [y, r("p97K")],
            ["trade-buy-postage-cell", r("EjT0")],
            ["@ext-tee-shop/shop-cert-notice", r("Sm4f")],
            [f, r("XNep")],
            [v, r("tz68")],
            [m, r("u694")],
            ["@wsc-tee-trade/trade-buy-misc-pre", r("XMVD")],
            [g, r("Npz5")],
            [b, r("rhvw"), { asyncInit: !0 }],
            [C, r("afxm")],
            ["@wsc-tee-trade/trade-buy-misc", r("S5UO")],
            ["@retail-tee-prepaid/prepaid", r("eiGO")],
            [P, r("CzYR")],
            [O, r("PET8")],
            [S, r("9Jq/")],
            ["@wsc-tee-shop/footer", r("+zL3")],
            ["trade-buy-privacy-bill", r("0E+e")],
            [k, r("Iybf")],
            ["@ext-tee-wxvideo/wxvideo-utils", r("Rl7e")],
            [T, r("x4qm")],
            [I, r("Y7UL")],
            [w, r("FWHJ")],
            [x, r("pAK7")],
          ],
        }),
        E = r("9ZMt"),
        _ = r("rLrQ"),
        A = r("eZv0"),
        j = r.n(A),
        N = r("jShr"),
        R = r.n(N),
        F = { validateIdCard: r("slIH").a };
      class B {
        constructor(e) {
          (this.ctx = e.ctx), (this.ctx.isBuyPage = "buy" === e.source);
        }
      }
      (B.widgets = { Main: j.a, QueueMain: R.a }),
        (B.lambdas = Object(a.a)({}, F));
      var M = r("eijD"),
        L = r("R2NP"),
        G = r("taYb"),
        U = r("AGZf"),
        W = r("z9IR"),
        H = r("YeA1"),
        z = r("PKOW"),
        K = r("8mzt");
      function V(e) {
        var t,
          r,
          a = getCurrentPages(),
          s = a[a.length - 2],
          { route: o, options: i = {} } = s;
        (t = "跳转至下单页使用db传递参数，需尽快废弃使用db"),
          (r = (r = { dbContent: e, route: o, query: i }) || {}),
          K.a.log({
            appName: "wsc",
            logIndex: "new_wsc_weapp_log",
            level: "warn",
            name: t,
            message: JSON.stringify(r),
          });
      }
      var q = r("1Uvd"),
        Y = r("3tyi");
      var J = getApp();
      function Z(e) {
        var { from_source: t, from_params: r } = J.globalData;
        return e.map((e) => {
          var { bizTracePointExt: s } = e;
          try {
            (t || r) &&
              (s = JSON.stringify(
                Object(a.a)({}, JSON.parse(e.bizTracePointExt), {
                  from_params: r,
                  from_source: t,
                })
              ));
          } catch (e) {}
          return {
            bizTracePointExt: s,
            goodsId: e.goodsId,
            skuId: e.skuId,
            activityId: e.activityId,
            activityType: e.activityType,
            kdtSessionId: J.getSessionId(),
          };
        });
      }
      var X,
        Q = r("zjWU"),
        $ = r("xeEc");
      !(function (e) {
        e[(e["24hshelf"] = 1)] = "24hshelf";
      })(X || (X = {}));
      var ee,
        te = r("RbYC"),
        re = r.n(te),
        ae = r("Sipi");
      ee = { getItem: ae.b, removeItem: ae.c, setItem: ae.d };
      var se = ee,
        oe = r("lgMb"),
        ie = r("US/N"),
        ne = r("qYBx");
      function de(e, t) {
        var {
          order: r,
          pay: a,
          yzGuarantee: s,
          useBeforePayData: o = {},
          orderFinalPrice: i = "0",
        } = t;
        $.a.info(
          "4 track_orderCreate[bookKey:" +
            (null == r ? void 0 : r.bookKey) +
            "] 已进入logCreateOrder()",
          {
            order: r,
            pay: a,
            yzGuarantee: s,
            useBeforePayData: o,
            orderFinalPrice: i,
          }
        );
        var { orderNos: n } = r,
          { prepayId: d = "" } = a.prepayParams || {},
          { show: c = !1, confirm: l = "0", range: u = [] } = o;
        $.a.info(
          "5-1 track_orderCreate[bookKey:" +
            (null == r ? void 0 : r.bookKey) +
            "] 开始orderNos判断",
          { orderNos: n }
        ),
          Array.isArray(n) &&
            ($.a.info(
              "5-2 track_orderCreate[bookKey:" +
                (null == r ? void 0 : r.bookKey) +
                "] 完成orderNos判断",
              { orderNos: n }
            ),
            n.forEach((t) => {
              var o = {
                  type: "normal",
                  prepay_id: d,
                  order_no: t,
                  orders_combine_id: r.orderNo,
                  guarantee_on: s,
                  prior_use_show: c,
                  prior_use_confirm: l,
                  prior_use_excess:
                    (null == u ? void 0 : u[1]) < 100 * Number(i),
                  page_scene: "ranta",
                },
                n = (function () {
                  var e = getApp(),
                    { adData: t = {} } = e.globalData;
                  return t.gdtVid;
                })();
              n && (o.click_id = n),
                $.a.info(
                  "6-1 track_orderCreate[bookKey:" +
                    (null == r ? void 0 : r.bookKey) +
                    "] 开始上报orderCreate埋点",
                  { params: o }
                ),
                e.logger &&
                  e.logger.log({
                    et: "custom",
                    ei: "orderCreate",
                    en: "创建订单",
                    params: o,
                  }),
                $.a.info(
                  "6-2 track_orderCreate[bookKey:" +
                    (null == r ? void 0 : r.bookKey) +
                    "] 完成上报orderCreate埋点",
                  { params: o }
                ),
                (function (e, t) {
                  var { pay: r, yzGuarantee: a } = t,
                    {
                      prepay: s,
                      prepaySuccess: o,
                      prepayId: i = "",
                    } = r.prepayParams || {};
                  s &&
                    e.logger &&
                    e.logger.log({
                      et: "custom",
                      ei: "prepay",
                      en: "预下单",
                      params: {
                        type: o ? "success" : "error",
                        prepay_id: i,
                        guarantee_on: a,
                      },
                    });
                })(e, { pay: a, yzGuarantee: s });
            }));
      }
      class ce {
        constructor(e) {
          (this.onShowTasks = []),
            (this.ctx = e.ctx),
            this.listenToEventOnOtherPage(),
            this.listenToEventOnThisPage(),
            this.initProcesses(),
            this.initCloudData(),
            Q.a.start({ name: Q.b.trade_buy_page }),
            this.ctx.data.coreReady
              ? this.initPage()
              : Object(H.b)(this, {
                  coreReady() {
                    this.initPage();
                  },
                }),
            (this.ctx.data.pageTitle = "确认订单");
        }
        initPage() {
          this.ctx.env
            .getQueryAsync()
            .then((e) => {
              (this.query = e),
                this.ctx.process.invoke(
                  "updateByCrossStoreSelfFetchCache",
                  e.bookKey || e.book_key
                ),
                this.init(e),
                Q.a.end({ name: Q.b.trade_buy_page });
            })
            .catch((e) => {
              var t, r;
              throw (
                ((e.message = "[下单页初始化-init] " + e.message),
                Q.a.end({
                  name: Q.b.trade_buy_page,
                  type: "error",
                  level: "error",
                  extra: { message: JSON.stringify(e) },
                }),
                null == (t = this.ctx) ||
                  null == (r = t.hummer) ||
                  r.capture(e),
                e)
              );
            });
        }
        beforePageMount() {}
        onPageHide() {
          setTimeout(() => {
            Q.a.end({ isPageHide: !0 });
          });
        }
        onPageShow() {
          for (; this.onShowTasks.length; ) {
            this.onShowTasks.shift()();
          }
          this.ctx.event.emit("lifecycle:pageShow");
        }
        $defineProcess(e, t, r) {
          var a = this;
          this.ctx.process.define(e, function () {
            for (var e = arguments.length, s = new Array(e), o = 0; o < e; o++)
              s[o] = arguments[o];
            if ((a.ctx.process.invoke("mutateState", (e) => t(e, ...s)), r))
              return r();
          });
        }
        initProcesses() {
          var e = this;
          this.ctx.process.define("reTryInit", (e) => {
            var { query: t } = e;
            (t.usePrefetch = !1),
              (this.query = t),
              this.ctx.process.invoke(
                "updateByCrossStoreSelfFetchCache",
                t.bookKey || t.book_key
              ),
              this.init(t);
          }),
            this.ctx.process.define(
              "changeCreateOrderParamsSource",
              (function () {
                var t = Object(M.a)(function* (t) {
                  return (
                    (t.source = (function (e, t) {
                      var { source: r } = e;
                      return r;
                    })(t, e.ctx)),
                    t
                  );
                });
                return function (e) {
                  return t.apply(this, arguments);
                };
              })()
            ),
            this.ctx.process.define(
              "changeCreateOrderParamsExt",
              (function () {
                var t = Object(M.a)(function* (t) {
                  return (
                    (t.extensions.ATTR_SOURCE_PAGE = e.query.pageSource || ""),
                    t
                  );
                });
                return function (e) {
                  return t.apply(this, arguments);
                };
              })()
            ),
            this.ctx.process.define("handleBeforeFetchShow", () =>
              this.ctx.cloud.invoke("beforeRefreshOrder")
            ),
            this.ctx.event.listen("onConfirmOrder", () => {
              this.ctx.cloud.invoke("afterRefreshOrder");
            }),
            this.ctx.process.define("handleBeforeCreateOrder", () => {
              var { cloudDelivery: e, cloudGoodsList: t } = this.ctx.data,
                { paymentV1: r } = this;
              return Promise.all([
                this.ctx.cloud.invoke("beforeCreateOrderAsync", {
                  delivery: e,
                  goodsList: t,
                  payment: r,
                }),
                this.ctx.cloud.invoke("beforeCreateOrder"),
              ]);
            }),
            this.ctx.event.listen("onCreateOrder", (e) => {
              var t, r, a;
              $.a.info(
                "3 track_orderCreate[bookKey:" +
                  (null == (t = this.ctx) ||
                  null == (r = t.data) ||
                  null == (a = r.order)
                    ? void 0
                    : a.bookKey) +
                  "] 已进入page-setup中的 listen:onCreateOrder",
                { data: e }
              ),
                de(this.ctx, {
                  order: this.ctx.data.order,
                  pay: this.ctx.data.pay,
                  yzGuarantee: this.ctx.data.yzGuarantee,
                  useBeforePayData: this.ctx.data.useBeforePayData,
                  orderFinalPrice: this.ctx.data.orderFinalPrice,
                }),
                this.ctx.cloud.emit("afterCreateOrder", { orderNo: e.orderNo });
            }),
            this.$defineProcess("switchDine", (e, t) => {
              var { id: r } = t;
              return (e.pickUpWay.id = r), ["pickUpWay"];
            }),
            this.$defineProcess("setNewHotelNum", (e, t) => {
              e.order.items.forEach((e) => {
                e.num = t;
              });
            }),
            this.$defineProcess("setHotelPhone", (e, t) => {
              e.hotel.phone = t;
            }),
            this.$defineProcess("setHotelRecipients", (e, t) => {
              e.hotel.recipients[t.index] = t.recipient;
            }),
            this.ctx.process.define("setPageTitle", (e) => {
              this.ctx.data.pageTitle = e;
            }),
            this.ctx.process.define(
              "handlePrepareDefaultError",
              (function () {
                var t = Object(M.a)(function* (t) {
                  var r,
                    { error: a } = t;
                  return (
                    ((r = 500),
                    new Promise((e) => {
                      setTimeout(() => {
                        e();
                      }, r);
                    })).then(() => {
                      Object(oe.a)(a, {
                        message: a.msg || "系统繁忙，请刷新重试",
                        log: !a.code,
                      })
                        .then(() => {
                          var t,
                            r = getCurrentPages() || [],
                            a =
                              null == r || null == (t = r[r.length - 1])
                                ? void 0
                                : t.options;
                          Object.keys(a).length > 0
                            ? e.ctx.process.invoke("reTryInit", { query: a })
                            : E.default.navigateBack();
                        })
                        .catch(() => {
                          E.default.navigateBack();
                        });
                    }),
                    Promise.reject(t)
                  );
                });
                return function (e) {
                  return t.apply(this, arguments);
                };
              })()
            );
        }
        pageDestroyed() {
          var e, t, r, a, s, o, i, n, d, c;
          null == (e = (t = this.ctx.lambdas).offEvent) ||
            e.call(t, "set_contact"),
            null == (r = (a = this.ctx.lambdas).offEvent) ||
              r.call(a, "delete_contact"),
            null == (s = (o = this.ctx.lambdas).offEvent) ||
              s.call(o, "address-save"),
            null == (i = (n = this.ctx.lambdas).offEvent) ||
              i.call(n, "address-delete"),
            null == (d = (c = this.ctx.lambdas).offEvent) ||
              d.call(c, "get-state"),
            Object(ie.setRequestDep)({ bizScene: "" });
        }
        listenToEventOnThisPage() {
          Object(H.d)(this, {
            onCouponChange: (e) => {
              this.ctx.process
                .invoke("confirmOrder", { isInitCoupon: !1 })[0]
                .then(() => {
                  "function" == typeof e && e();
                });
            },
            onActivityChanged: (e) => {
              this.ctx.process.invoke(
                "mutateState",
                (t) => (
                  (t.allMeetReduceActivities = e), ["allMeetReduceActivities"]
                )
              );
            },
            onDeleteAddress: (e) => {
              this.ctx.process.invoke("deleteAddress", e);
            },
          });
        }
        listenToEventOnOtherPage() {
          this.ctx.lambdas.onEvent("set_contact", (e) => {
            var { contact: t, method: r } = e;
            this.onShowTasks.push(() => {
              this.ctx.process.invoke("updateContactState", {
                contact: t,
                method: r,
              }),
                this.ctx.event.emit("trade-buy-core:validate-effect", {
                  type: "validateContact:saveFinish",
                });
            });
          }),
            this.ctx.lambdas.onEvent("delete_contact", (e) => {
              this.onShowTasks.push(() => {
                this.ctx.process.invoke("deleteContact", e);
              });
            }),
            this.ctx.lambdas.onEvent("address-save", (e) => {
              this.onShowTasks.push(() => {
                this.ctx.process.invoke("updateAddressState", e);
              });
            }),
            this.ctx.lambdas.onEvent("address-delete", (e) => {
              this.onShowTasks.push(() => {
                this.ctx.process.invoke("deleteAddress", e),
                  this.ctx.process.invoke("confirmOrder");
              });
            }),
            this.ctx.lambdas.onEvent("get-state", (e) => {
              e(this.ctx.data.state);
            });
        }
        init(e) {
          var t = this;
          return Object(M.a)(function* () {
            var {
              dbid: r,
              orderNo: s,
              orderFrom: o = "",
              bookKey: i,
              book_key: n,
              addressId: d,
              yzGuarantee: c,
              prefetchKey: l,
              freightInsurance: u,
              retailOrderScene: p,
            } = e;
            (null != e && e.redirectCount) || (e.redirectCount = 0),
              (t.ctx.data.defaultYzGuarantee = c && "true" === c),
              (t.ctx.data.defaultFreightInsurance = u && "1" === u),
              p &&
                ((t.retailOrderScene = X[p]),
                Object(ie.setRequestDep)({ bizScene: "retail-shelf" }));
            var h = {},
              y = i || n;
            if (
              (r
                ? ((h = t.ctx.lambdas.getDb(r)), (t.dbData = h), V(h))
                : (h = y
                    ? { bookKey: y }
                    : l
                    ? { prefetchKey: l }
                    : { order_no: s, type: "order" }),
              d && (h.addressId = d),
              (h.orderFrom = o),
              "order" === h.type)
            ) {
              h = G.a.toCamelCase(h);
              var f = Object.keys(h)
                .map((e) => e + "=" + h[e])
                .join("&");
              (f = "?" + f),
                Object(z.f)({
                  pageType: z.b.PAY,
                  type: z.a.REDIRECT,
                  query: { orderNo: s },
                });
            } else {
              var v, m;
              Object(L.b)(
                null != (v = t.ctx.data.state) &&
                  null != (m = v.env) &&
                  m.isDrugShop
                  ? "确认需求"
                  : "确认订单"
              );
              var g = (function (e) {
                var t;
                try {
                  var r;
                  t =
                    null ==
                    (r = JSON.parse(ee.getItem("crossStoreSelfFetchCache")))
                      ? void 0
                      : r[e];
                } catch (e) {}
                return t;
              })(y);
              g &&
                !g.hadTip &&
                (se.setItem(
                  "crossStoreSelfFetchCache",
                  JSON.stringify({ [y]: Object(a.a)({}, g, { hadTip: !0 }) })
                ),
                W.a.alert({
                  title: "已切换提货门店",
                  message: "服务门店变更，请重新确认订单信息",
                  confirmButtonText: "我知道了",
                })),
                yield t.handleWeappInit(h, e),
                setTimeout(() => {
                  t.ctx.inited();
                }, 100);
            }
          })();
        }
        handleTradeGoodsLogger(e) {
          var { orderItems: t = [] } = e.tradeConfirmation || {},
            r = t.map((e) => e.goodsId);
          r.length &&
            this.ctx.logger &&
            this.ctx.logger.log({
              et: "view",
              ei: "order_goods_show",
              en: "商品曝光",
              pt: "trade",
              params: { goods_id: r },
            });
        }
        handlePreToast() {
          var e,
            t,
            r,
            a,
            s =
              (null == (e = this.ctx.data.order) || null == (t = e.extensions)
                ? void 0
                : t.preToastDesc) ||
              (null == (r = this.ctx.data.order) || null == (a = r.config)
                ? void 0
                : a.preToastDesc);
          s &&
            setTimeout(() => {
              Object(U.a)({ message: s || "", duration: 3e3 });
            }, 2e3);
        }
        handleWebInit() {
          var { book_key: e, bookKey: t } = this.query,
            r = t || e,
            { pageStyleConfig: a = {} } = this.ctx.data;
          return (
            a.pageBgColor &&
              (this.ctx.env.router.beforeRouteEnter(() => {
                document.body.style.backgroundColor = a.pageBgColor;
              }),
              this.ctx.env.router.beforeRouteLeave((e, t, r) => {
                (document.body.style.backgroundColor = null), r();
              })),
            this.ctx.process
              .invoke("prepareByBookKey", { useLocal: !0, bookKey: r })[0]
              .then((e) => {
                this.ctx.cloud.emit("onOrderLoaded"),
                  this.handleTradeGoodsLogger(e),
                  this.handlePreToast(),
                  fingerPrint.init();
              })
          );
        }
        handleWeappInit(e, t) {
          var r = this;
          return Object(M.a)(function* () {
            var s,
              o,
              i,
              n,
              d,
              { pageStyleConfig: c = {} } = r.ctx.data;
            if (
              (c.pageBgColor &&
                getApp().trigger("trade-buy-page-bg-color", c.pageBgColor),
              e.bookKey || e.prefetchKey)
            )
              return (
                (null != (s = getApp().globalData) && s.isRetailApp) ||
                  E.default.$native.showLoading({ title: "加载中" }),
                r.ctx.process
                  .invoke(
                    "prepareByBookKey",
                    Object(a.a)({ query: t }, t, {
                      usePrefetch: null == (o = t.usePrefetch) || o,
                      prefetchKey: t.prefetchKey,
                      bookKey: e.bookKey,
                      addressId: e.addressId,
                    })
                  )[0]
                  .then((e) => {
                    var t;
                    E.default.$native.hideLoading(),
                      getApp().trigger("trade-buy-data-loaded"),
                      13 ===
                        (null == (t = r.ctx.data.chosenCoupon)
                          ? void 0
                          : t.groupType) &&
                        r.ctx.process.invoke("confirmOrder", {
                          isInitCoupon: !1,
                        }),
                      r.ctx.cloud.emit("onOrderLoaded"),
                      r.handleTradeGoodsLogger(e),
                      r.handlePreToast();
                  })
                  .catch((e) => {
                    E.default.$native.hideLoading();
                  })
              );
            r.ctx.process.invoke(
              "mutateState",
              (t) => (
                (t.order = Object(a.a)(
                  {},
                  t.order,
                  (function (e) {
                    var {
                        goodsList: t = [],
                        activityAlias: r,
                        orderFrom: s,
                        giftInfo: o,
                      } = void 0 === e ? {} : e,
                      i = J.getSessionId(),
                      n = J.getKdtId(),
                      d = J.getOfflineId() || 0,
                      c = t.map((e) =>
                        Object(a.a)(
                          {},
                          Object(Y.a)(e, [
                            "goodsId",
                            "skuId",
                            "price",
                            "num",
                            "itemBizMark",
                            "activityId",
                            "activityType",
                            "propertyIds",
                          ]),
                          {
                            deliverTime: e.deliverTime || 0,
                            itemMessage: JSON.stringify(
                              "cart" === s
                                ? e.message || {}
                                : Object.keys(e.message || {}).map(
                                    (t) => e.message[t]
                                  )
                            ),
                            kdtId: n,
                          }
                        )
                      ),
                      l = t.map((e) =>
                        Object(a.a)(
                          {},
                          Object(Y.a)(e, [
                            "activityId",
                            "activityType",
                            "goodsId",
                            "skuId",
                          ]),
                          {
                            activityAlias: e.activityAlias || r,
                            usePoints: 5 == +e.activityType,
                            kdtId: n,
                          }
                        )
                      ),
                      u = Object(q.a)(10) + Date.now(),
                      p = Object(a.a)(
                        {
                          bookKey: u,
                          clientIp: "127.0.0.1",
                          fromThirdApp: !1,
                          itemSources: Z(t),
                          kdtSessionId: i,
                          orderFrom: s,
                        },
                        (function (e) {
                          var t,
                            {
                              orderCreation: r,
                              query: a,
                              isTTApp: s = !1,
                            } = void 0 === e ? {} : e,
                            o =
                              (null == r || null == (t = r.source)
                                ? void 0
                                : t.orderMark) || "wx_shop";
                          return "24hshelf" ===
                            (null == a ? void 0 : a.retailOrderScene)
                            ? s
                              ? {
                                  platform: "dy_mini_program",
                                  orderMark: "fulfill_tool",
                                }
                              : {
                                  platform: "weapp",
                                  orderMark: "retail_minapp_shelf",
                                }
                            : { platform: "weapp", orderMark: o };
                        })()
                      ),
                      h = {};
                    return (
                      J.globalData.priceCalendarDate &&
                        (h.contacts = {
                          appointmentTime: J.globalData.priceCalendarDate,
                        }),
                      {
                        source: p,
                        bookKey: u,
                        items: c,
                        seller: { kdtId: n, storeId: d },
                        config: {
                          usePoints: t.some((e) => 5 == +e.activityType),
                          containsUnavailableItems: !1,
                          gift: o,
                        },
                        ump: { activities: l },
                        delivery: h,
                      }
                    );
                  })({
                    goodsList: e.goods_list || [],
                    activityAlias: e.activityAlias,
                    orderFrom: e.orderFrom,
                    giftInfo: e.giftInfo || {},
                  })
                )),
                []
              )
            ),
              ((i = e.goods_list || []),
              (n = i.some((e) => 5 == +e.activityType)),
              (d = i
                .map((e) => e.pointsPrice * e.num)
                .reduce((e, t) => e + t, 0)),
              n
                ? J.getPoints().then((e) => ({
                    available: e.current_points >= d,
                    usePoints: n,
                    totalPoints: d,
                    userPoints: e.current_points,
                  }))
                : Promise.resolve({ usePoints: n, totalPoints: d })).then(
                (e) => {
                  r.ctx.process.invoke(
                    "mutateState",
                    (t) => ((t.points = e), [])
                  );
                }
              ),
              r.ctx.process.invoke(
                "mutateState",
                (t) => (
                  (t.groupon = Object(a.a)({}, t, {
                    isLuckDraw: !!e.isLuckDraw,
                    isGroupon: !!e.isGroupon,
                    isHeader: !!e.createGroupon,
                  })),
                  []
                )
              );
            var l = { isFormDbId: !0 };
            if (!isNaN(e.expressTypeChoice)) {
              var u = +e.expressTypeChoice;
              (l.expressTypeChoice = u),
                yield r.ctx.process.invoke("switchAddressTab", {
                  id: 1 === u ? 1 : 0,
                });
            }
            return new Promise((e) => {
              r.ctx.process
                .invoke("confirmOrder", l)[0]
                .then(() => {
                  r.ctx.cloud.emit("onOrderLoaded"),
                    getApp().trigger("trade-buy-data-loaded"),
                    e();
                })
                .catch(() => {
                  e();
                });
            });
          })();
        }
        initCloudData() {}
      }
      ce.widgets = { Skeleton: re.a };
      var le = r("SiWl"),
        ue = r.n(le),
        pe = r("xjQ3");
      class he {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      (he.lambdas = { exchangeCoupon: pe.a }), (he.widgets = { Widget: ue.a });
      var ye = r("Tfzu"),
        fe = r("HAp+"),
        ve = r("VYYi"),
        me = r.n(ve);
      class ge {
        constructor(e) {
          (this.ctx = e.ctx), this.initCloudData();
        }
        initCloudData() {}
      }
      ge.widgets = { Main: me.a };
      var be = r("Y8Rs"),
        Ce = r.n(be),
        Pe = r("lDpr"),
        Oe = r.n(Pe),
        Se = r("xjwx"),
        ke = r.n(Se),
        Te = r("ubuM"),
        Ie = r.n(Te),
        we = r("h0WK"),
        xe = r.n(we),
        De = r("mkBT"),
        Ee = r.n(De),
        _e = r("t+v8"),
        Ae = r.n(_e),
        je = r("KPu0"),
        Ne = r.n(je),
        Re = r("kFd9"),
        Fe = r.n(Re),
        Be = r("NHEX"),
        Me = r.n(Be),
        Le = r("mztD"),
        Ge = r("edpm"),
        Ue = Object(Le.a)("upload_files/no_pic.png"),
        We = {
          0: ["发货", "后发货", "开始发货"],
          1: ["可自提", "后可自提", "开始可自提"],
          2: ["配送", "后配送", "开始配送"],
        };
      function He(e) {
        var t = e.memberCardStartTime,
          r = e.memberCardEndTime;
        if (t && r) return t + "-" + r;
        var { sku: a } = e;
        return [
          (a = Array.isArray(a)
            ? a
            : a && "string" == typeof a
            ? JSON.parse(a)
            : [])
            .filter((e) => e.v)
            .map((e) => e.v)
            .join("；"),
          (function (e) {
            void 0 === e && (e = []);
            var t = [];
            return (
              e.forEach((e) => {
                Me()(e, "propValueList", []).forEach((e) => {
                  t.push(e.propValueName);
                });
              }),
              t.join("，")
            );
          })(e.properties),
        ]
          .filter((e) => !!e)
          .join(", ");
      }
      var ze = {
          shopName() {
            return this.shop.shopName || "";
          },
          hasGoods() {
            var e, t;
            return !(
              null == (e = this.goods) ||
              null == (t = e.list) ||
              !t.length
            );
          },
          isPeriodBuy() {
            var e, t;
            return (
              (null == (e = this.periodBuy) ? void 0 : e.info) ||
              (null == (t = this.periodBuy) ? void 0 : t.planTime)
            );
          },
          formattedGoods() {
            var { memberCard: e, tradeTag: t } = this,
              { goods: r } = this,
              { list: a = [], imgMode: s = "aspectFit" } = r;
            return a
              .filter(
                (e) => 24 === e.activityType || (!e.fromTmpAdded && !e.present)
              )
              .map((r, a, o) => {
                if (
                  r.presale &&
                  ("express" === this.expressType || 0 === r.presaleType)
                ) {
                  var i =
                    1 === r.presaleType ? 0 : this.postage.currentExpressType;
                  (r.showDeliveryTime = !0),
                    (r.deliveryTime = (function (e, t, r, a) {
                      var s = e.presaleStartTime,
                        o = e.presaleEndTime,
                        [i, n, d] = We[a];
                      if (0 === e.presaleTimeType) {
                        var c = new Date(s);
                        return (
                          (Object(Ge.g)(c, r.serverTime)
                            ? Object(Ge.q)(c, "yy月dd号")
                            : Object(Ge.b)(c, "yyyy年mm月dd号")) +
                          " " +
                          d
                        );
                      }
                      if (1 === e.presaleTimeType)
                        return (
                          (null != t && t.multiPhase ? "尾款支付" : "付款") +
                          " " +
                          e.presaleStartTimeAfterPay +
                          " 天" +
                          n
                        );
                      var l = Object(Ge.q)(new Date(s), "yy月dd号"),
                        u = Object(Ge.q)(new Date(o), "yy月dd号");
                      return s && o
                        ? "预计 " + (l === u ? l : l + " ~ " + u)
                        : s
                        ? l + d
                        : o
                        ? "最晚" + u + i
                        : "";
                    })(r, this.pay, this.display, i));
                }
                return (
                  e.renewal &&
                    e.memberCardStartTime &&
                    e.memberCardEndTime &&
                    ((r.memberCardEndTime = ne.b.formatDate(
                      new Date(e.memberCardEndTime),
                      "YYYY:MM:DD"
                    )),
                    (r.memberCardStartTime = ne.b.formatDate(
                      new Date(e.memberCardStartTime),
                      "YYYY:MM:DD"
                    ))),
                  (r.isPeriodBuy = this.isPeriodBuy),
                  (r.isFCode = 20 === this.shop.activityType),
                  (r.isHelpCut = 21 === this.shop.activityType),
                  t.hasHotelGoods &&
                    (r.goodsDate = Object(Ge.q)(new Date(r.hotelSkuDate))),
                  (r.canyinIngredientItems || []).forEach((e) => {
                    r.sku.push({ v: e.title });
                  }),
                  (r.isECard = 3 === r.virtualType),
                  (r.goodPrice = Object(Ge.k)(r)),
                  (r.isZeroPrice = Object(Ge.h)(r)),
                  (r.originPrice = Object(Ge.j)(r)),
                  (r.usePoint = Object(Ge.p)(r, this.pointsName)),
                  (r.canChangeNum = Object(Ge.d)(r)),
                  (r.taxTips = Object(Ge.o)(r)),
                  (r.hasMessage = Object(Ge.f)(r)),
                  (r.showMessageRule = Object(Ge.l)(r)),
                  (r.hasMemberPrice = Object(Ge.e)(r)),
                  (r.subTags = Object(Ge.m)(r)),
                  (r.tags = Object(Ge.n)(r)),
                  (r.goodMax = Object(Ge.i)(r)),
                  (r.thumb = Object(Ge.r)(r.imgUrl || Ue)),
                  (r.activityCountDownState = {}),
                  (r.goodTags = r.tags),
                  (r.isSeckill = 6 == +r.activityType),
                  (r.desc = He(r)),
                  (r.showStepper =
                    (r.canSetQuantity || r.isECard) &&
                    r.canChangeNum &&
                    !this.hasGoodsExchangeCoupon &&
                    !this.display.forbidPay &&
                    !r.isSeckill),
                  (r.startSaleNum = (function (e) {
                    var { activityType: t, startSaleNum: r } = e;
                    return 24 === t ? 0 : [5, 8].includes(t) ? 1 : r || 0;
                  })(r)),
                  (r.imgMode = s),
                  r
                );
              });
          },
          unavailableLength() {
            var e,
              { goods: t } = this;
            return null == (e = t.unavailable) ? void 0 : e.length;
          },
          hasGoodsExchangeCoupon() {
            var { goods: e } = this,
              { list: t = [] } = e,
              r = !1;
            return (
              t.forEach((e) => {
                e.isUseGoodsExchangeCoupon && (r = !0);
              }),
              r
            );
          },
          hideHeader() {
            return this.display.hideShopLink || this.tradeTag.hasHotelGoods;
          },
          isShowSellingPoint: () => !1,
        },
        Ke = r("+I+c"),
        Ve = r("5Mqe"),
        qe = r.n(Ve),
        Ye = ["goodsList"],
        Je = {
          state: {
            presentGoodsId: 0,
            memberCard: {},
            tradeTag: {},
            display: {},
            goods: {},
            pointsName: {},
            shop: {},
            themeColors: {},
            pay: {},
            expressType: "",
            allMeetReduceActivities: [],
            kdtId: null,
            currentAddress: {},
            abTestConfig: null,
            periodBuy: {},
            sellingPoint: {},
            appEnv: {},
            delivery: {},
            selfFetch: {},
            changeNumViewData: {},
            showToast: !1,
            postage: {},
            themeTag: {},
          },
          getters: ze,
          getActions: function (e) {
            return {
              onGoodsListMounted() {
                this.subCtxDataAndEvent(), this.viewGoods();
              },
              onGoodsListDestroyed() {
                this.unsubCtxDataAndEvent && this.unSubCtxDataAndEvent();
              },
              viewGoods() {},
              subCtxDataAndEvent() {
                var t = e.event.listen(
                    "presentPopupClose",
                    this.handleChangePresentPopup
                  ),
                  r = e.event.listen(
                    "presentPopupConfirm",
                    this.handlePickPresent
                  ),
                  a = e.event.listen("present-sku:changed", (e) => {
                    this.handleChangePresentSkuCallback(e);
                  });
                this.unSubCtxDataAndEvent = () => {
                  [t, r, a].forEach((t) => e.event.remove(t));
                };
              },
              handleChangePresentSkuCallback(t) {
                var { skuData: r, activityId: s } = t,
                  o = (e.data.allMeetReduceActivities || []).map(
                    (e) => (
                      e.activityId === s &&
                        ((e.presents = e.presents.map((e) => {
                          if (e.id === this.presentGoodsId) {
                            var t = r.selectedSkuComb;
                            (e.sku = t.sku), (e.skuId = t.id);
                          }
                          return e;
                        })),
                        (this.presentInfo.goodsList = e.presents)),
                      e
                    )
                  );
                (this.allMeetReduceActivities = o),
                  e.event.emit("onActivityChanged", o),
                  (e.data.presentPopupInfo = Object(a.a)({}, this.presentInfo)),
                  e.process.invoke("mutateState", (e) => {
                    e.isSelectPresent = "1";
                  }),
                  this.updatePresentInfo();
              },
              handleChangePresentPopup(t) {
                var { goodsList: r } = t,
                  s = Object(Ke.a)(t, Ye),
                  o = {};
                r && (o.goodsList = r),
                  (o = Object(a.a)({}, this.presentInfo, o, s)),
                  (this.presentInfo = o),
                  (e.data.presentPopupInfo = o);
              },
              updatePresentInfo() {
                var t = [];
                this.allMeetReduceActivities &&
                  this.allMeetReduceActivities.length &&
                  (t = qe()(
                    this.allMeetReduceActivities.map((e) => e.presents)
                  ).filter((e) => e.isSelected)),
                  (e.data.presentData = {
                    IS_SELECT_PRESENT: "1",
                    SELECTED_PRESENTS: JSON.stringify(
                      t.map((e) => {
                        var {
                          fromActivityId: t,
                          fromActivityType: r,
                          id: a,
                          goodsId: s,
                          skuId: o,
                        } = e;
                        return {
                          activityId: t,
                          activityType: r,
                          presentId: a,
                          goodsId: s,
                          skuId: o,
                        };
                      })
                    ),
                  });
              },
              handlePickPresent(t) {
                var r,
                  { goodsList: a, activityId: s } = t,
                  o = a.map((e) => e.id);
                null ==
                  (r = this.allMeetReduceActivities.find(
                    (e) => e.activityId === +s
                  )) ||
                  r.presents.forEach((e) => {
                    e.isSelected = o.includes(e.id);
                  }),
                  e.process.invoke("mutateState", (e) => {
                    (e.isSelectPresent = "1"),
                      (e.allMeetReduceActivities =
                        this.allMeetReduceActivities);
                  }),
                  this.updatePresentInfo();
              },
              getPresaleTips(e) {
                var t = e.presaleStartTime,
                  r = e.presaleEndTime;
                if (0 === e.presaleTimeType) {
                  var a = new Date(t);
                  return (
                    (Object(Ge.g)(a, this.display.serverTime)
                      ? Object(Ge.q)(a, "yy月dd号")
                      : Object(Ge.b)(a, "yyyy年mm月dd号")) + " 开始发货"
                  );
                }
                if (1 === e.presaleTimeType)
                  return (
                    (this.pay && this.pay.multiPhase ? "尾款支付" : "付款") +
                    " " +
                    e.presaleStartTimeAfterPay +
                    " 天后发货"
                  );
                var s = Object(Ge.q)(new Date(t), "yy月dd号"),
                  o = Object(Ge.q)(new Date(r), "yy月dd号");
                return t && r
                  ? "预计 " + (s === o ? s : s + " ~ " + o)
                  : t
                  ? s + "开始发货"
                  : r
                  ? "最晚" + o + "发货"
                  : "";
              },
              onChangeNum(t) {
                var { goodsId: r, skuId: a, num: s } = t,
                  o = this.formattedGoods.find((e) => e.goodsId === r),
                  { startSaleNum: i } = o;
                if (isNaN(s) || s === o.num) t && t.errorCB();
                else {
                  if (0 === s)
                    return t && t.errorCB(), Object(U.a)("最少购买1件");
                  if (s > o.goodMax)
                    return t && t.errorCB(), Object(U.a)(Object(Ge.a)(o));
                  if (i && s < i) return Object(U.a)("该商品" + i + "件起售");
                  this.changeNumViewData = { goodsId: r, skuId: a, num: s };
                  var [n] = e.process.invoke("fetchShow", t);
                  n.then(t.successCB || (() => {})).catch(
                    t.errorCB || (() => {})
                  );
                }
              },
            };
          },
        },
        Ze = r("b4An"),
        Xe = {
          shopLink() {
            return Object(Ze.a)(
              "/v2/showcase/homepage?kdt_id=" + this.kdtId,
              "h5",
              this.kdtId
            );
          },
        },
        Qe = r("2bgu"),
        $e = {
          state: {},
          getters: Xe,
          getActions: function (e) {
            return {
              reselectGoods() {
                Object(Qe.b)({
                  url: "/packages/home/dashboard/index",
                  type: "reLaunch",
                });
              },
            };
          },
        },
        et = {
          state: {
            pay: {},
            goods: {},
            points: {},
            display: {},
            tradeTag: {},
            pointsName: "",
            themeCSS: "",
          },
          getters: {
            hasGoods() {
              var e, t;
              return !(
                null == (e = this.goods) ||
                null == (t = e.list) ||
                !t.length
              );
            },
            changeGoodsPrice() {
              var { list: e = [] } = this.goods;
              return e
                .filter((e) => e.fromTmpAdded)
                .reduce((e, t) => e + t.payPrice, 0);
            },
            presaleItem() {
              var { phasePayment: e } = this.pay;
              if (e && e.phaseItems) {
                var { phaseItems: t } = e;
                return t.find((e) => 1 === e.phase);
              }
              return null;
            },
            usePoint() {
              return !(!this.points.usePoints || !this.points.available);
            },
            usedPoints() {
              return this.points.totalPoints;
            },
            labelStr() {
              return this.usePoint
                ? this.pointsName + "兑换价"
                : this.pay.showTax
                ? "小计（含税费）"
                : "小计";
            },
            count() {
              return (
                (
                  (this.goods.list || []).filter(
                    (e) => !e.fromTmpAdded && !e.present
                  ) || []
                ).reduce((e, t) => e + t.num, 0) || 0
              );
            },
            total() {
              if (this.hasGoods && this.tradeTag.hasDepositPreSaleGoods) {
                if (!this.presaleItem) return "";
                var { originPrice: e } = this.presaleItem;
                return Object(Ge.c)(e).toString().split(".");
              }
              var { extraFees: t = [], itemPay: r } = this.pay,
                a = r;
              return (
                t.length && (a += t.reduce((e, t) => e + t.realPay, 0)),
                this.pay.showTax &&
                  (a += this.pay.postageTax + this.pay.goodsTax),
                (a -= this.changeGoodsPrice),
                Object(Ge.c)(a).toString().split(".")
              );
            },
            goodsSubtotal() {
              var e = "共";
              return (e += this.count + "件");
            },
          },
        },
        tt = r("VmHG"),
        rt = [
          { state: { themeTag: {} }, getters: {}, actions: {} },
          Je,
          $e,
          et,
        ].reduce((e, t) => {
          return (
            void 0 === (r = e) && (r = {}),
            void 0 === (s = t) && (s = {}),
            {
              state: Object(a.a)({}, r.state, s.state),
              getters: Object(a.a)({}, r.getters, s.getters),
              actions: Object(a.a)({}, r.actions, s.actions),
            }
          );
          var r, s;
        }, {});
      var at = r("4NdJ"),
        st = r("x5Yp"),
        ot = 24;
      class it {
        constructor(e) {
          var t;
          (this.ctx = e.ctx),
            (this.store =
              ((t = this.ctx),
              Object(tt.a)({
                state: () => Object(a.a)({}, rt.state, $e.state),
                getters: Object(a.a)({}, rt.getters, $e.getters),
                actions: Object(a.a)(
                  {},
                  rt.actions,
                  Je.getActions(t),
                  $e.getActions(t)
                ),
              }))),
            Object(at.a)(this.ctx),
            this.ctx.process.define("genGoodsParamsOnCreate", (e) => {
              var { prevState: t } = e;
              return (function (e, t) {
                void 0 === t && (t = {});
                var { state: r, couponModel: a } = e.data,
                  {
                    order: s,
                    goods: o,
                    displayCard: i,
                    plusBuy: n,
                    postageTool: d,
                  } = r,
                  c = s.items || [],
                  l = JSON.parse(JSON.stringify(c)),
                  u = o.list || [],
                  p = (null == a ? void 0 : a.chosenCoupon) || {},
                  h = !1;
                if (!Object(st.a)(i))
                  if (s.openDisplayCard) {
                    if (!l.some((e) => e.goodsId === i.goodsId)) {
                      var { kdtId: y, goodsId: f, skuId: v } = i;
                      l = [...l, { kdtId: y, goodsId: f, skuId: v, num: 1 }];
                    }
                  } else l = l.filter((e) => e.goodsId !== i.goodsId);
                if (
                  (l.forEach((e) => {
                    if (
                      (e.extensions || (e.extensions = {}),
                      r.tradeTag.hasHotelGoods &&
                        (e.extensions.NEW_HOTEL_GOOD = r.hotel
                          .newHotelExtensions
                          ? "1"
                          : "0"),
                      13 === p.groupType)
                    ) {
                      var t =
                          u.find(
                            (e) =>
                              e.itemId === p.optimalPreferentialOrderItemIds[0]
                          ) || {},
                        { outerItemId: a } = t;
                      a &&
                        +a == +e.extensions.OUTER_ITEM_ID &&
                        ((e.extensions.USE_GOODS_EXCHANGE_COUPON = "1"),
                        (h = !0));
                    }
                  }),
                  d.selected)
                ) {
                  var m = Object.keys(d.selected);
                  if (m.length > 0) {
                    for (var g of l) {
                      var b = d.selected[g.skuId];
                      if (
                        b &&
                        !g.present &&
                        g.activityType !== ot &&
                        JSON.stringify(b.propertyIds || []) ===
                          JSON.stringify(g.propertyIds || [])
                      ) {
                        g.num += b.num;
                        var C = m.indexOf("" + g.skuId);
                        m.splice(C, 1);
                      }
                    }
                    m.forEach((e) => {
                      l.push(d.selected[e]);
                    });
                  }
                }
                if (Array.isArray(n.selected) && n.selected.length > 0) {
                  var P = l.length;
                  (l = [...l, ...n.selected]),
                    13 === p.groupType &&
                      l.slice(P).forEach((e) => {
                        if (!h) {
                          var t =
                            u.find(
                              (e) =>
                                e.itemId ===
                                p.optimalPreferentialOrderItemIds[0]
                            ) || {};
                          t.goodsId === e.goodsId &&
                            t.skuId === e.skuId &&
                            ((h = !0),
                            (e.extensions.USE_GOODS_EXCHANGE_COUPON = "1"));
                        }
                      });
                }
                var { goodsId: O, skuId: S, num: k } = t;
                if (void 0 !== O && void 0 !== S && "number" == typeof k)
                  for (var T of l)
                    if (T.goodsId === O && T.skuId === S) {
                      T.num = k;
                      break;
                    }
                return l;
              })(this.ctx, t.payload);
            }),
            this.initCtxData(),
            this.initCloudData();
        }
        initCtxData() {
          Object(tt.c)(this, [
            "memberCard",
            "tradeTag",
            "display",
            "goods",
            "pointsName",
            "shop",
            "themeColors",
            "expressType",
            "pay",
            "allMeetReduceActivities",
            "kdtId",
            "currentAddress",
            "periodBuy",
            "appEnv",
            "delivery",
            "presentGoodsId",
            "selfFetch",
            "points",
            "themeCSS",
            "themeTag",
            "postage",
          ]);
        }
        getBizTracePointExt() {
          var e = this.ctx.logger.getLogParams() || {},
            t = e.user || {},
            r = e.context || {},
            s = e.plat || {};
          return JSON.stringify(
            Object(a.a)({}, r, s, {
              platform: "weapp",
              uuid: t.uuid,
              userId: t.li || "",
            })
          );
        }
        initCloudData() {}
      }
      it.widgets = {
        Main: Ce.a,
        UnavailableGoods: Oe.a,
        ExtraFees: ke.a,
        Presale: Ie.a,
        Hotel: xe.a,
        StoreGiftsList: Ee.a,
        Empty: Ae.a,
        GoodsList: Ne.a,
        Good: Fe.a,
      };
      var nt = r("zsG2"),
        dt = r.n(nt),
        ct = r("E42p"),
        lt = r.n(ct);
      class ut {
        constructor(e) {
          (this.handlePresaleConfirm = () =>
            new Promise((e, t) => {
              var { tradeTag: r } = this.ctx.data,
                { order: a } = this.ctx.data;
              r.hasDepositPreSaleGoods &&
              !a.agreeDeposit &&
              a.showDepositAgreementVal
                ? (Object(U.a)("请了解并同意定金不退协议，否则无法提交订单"),
                  t("PRESALE_CONFIRM"))
                : e();
            })),
            (this.ctx = e.ctx),
            this.ctx.process.define(
              "handlePresaleConfirm",
              this.handlePresaleConfirm.bind(this)
            ),
            this.initCloudData();
        }
        initCloudData() {}
      }
      ut.widgets = { Main: dt.a, Presale: lt.a };
      var pt = r("HGkz"),
        ht = r.n(pt),
        yt = r("zANf"),
        ft = r.n(yt),
        vt = r("Fa1b"),
        mt = r("ADTe"),
        gt = r("87Y/"),
        bt = r.n(gt);
      function Ct(e) {
        return e ? (e / 100).toFixed(2) : "";
      }
      var Pt = {
          getState: function (e) {
            var t;
            return {
              themeColors: {},
              isPayBtnLoading: !1,
              showPrePay: !1,
              showRechargeFreeOrder: !1,
              display: {},
              memberCard: {},
              address: { visible: !0 },
              currentAddress: {},
              order: {},
              valueCard: {},
              pay: {},
              goods: {},
              orderFinalPrice: "",
              finalPrice: "",
              shop: {},
              useBeforePayData: {},
              rechargeFreeOrderRule: {},
              hasPostageToolTip:
                null == (t = e.widgets) ? void 0 : t.PostagetoolTip,
              kdtId: "",
              useStoredCustomerDiscount: !1,
              useStoredMemberCustomerDiscount: !1,
              useStoreBalancePayInFull: !1,
              payAssetActivityTagDesc: "",
              recommendDetaid: JSON.stringify({
                desc: "",
                productInfos: [],
                templateNo: "",
              }),
              drugMessage: {},
              isPrescriptionDrugGoods: !1,
              displayCard: {},
              enableUseUserAuthorizeCopy: !1,
              enableUseOrderBehaviorParam: !1,
              yzGuarantee: {},
              isDrugShop: !1,
              showSubscribeGuide: !1,
              preCashierChannel: "",
              isPreCashierPay: !1,
              isPriorUseChosen: !1,
              orderResult: {},
              miniprogram: {},
              isDepositPresale: "",
              points: {},
              pointsName: {},
              state: {},
              dataLoaded: !1,
              payRechargeInfo: null,
            };
          },
          getters: {
            disabled() {
              var { available: e = !1, usePoints: t = !1 } = this.points,
                r = t && !e;
              return this.display.forbidPay || !this.hasGoods || r;
            },
            hasGoods() {
              var { list: e } = this.goods || {};
              return (e || []).length;
            },
            siteTop() {
              return Object(mt.a)(this.currentAddress, 4);
            },
            siteBottom() {
              return Object(mt.a)(this.currentAddress, 0, 4, " ");
            },
            riskWarnShopPrompt() {
              return (this.display || {}).riskWarnShopPrompt;
            },
            isShowRiskWarnShopPrompt() {
              return (
                !!this.riskWarnShopPrompt &&
                !this.display.forbidPay &&
                this.hasGoods
              );
            },
            showPromotionBest() {
              return (
                this.state.promotionInfo &&
                1e3 === this.state.promotionInfo.includeActivityType
              );
            },
            bestBackgroundColor() {
              return bt()(this.themeColors["main-bg"], 0.1);
            },
            promotionBestContent() {
              var { promotionInfo: e } = this.state;
              if (!e) return [];
              var { promotionTag: t = "" } = e;
              return t.split("¥") || [];
            },
            showPriorUseSummary() {
              if (this.isPreCashierPay) return this.isPriorUseChosen;
              var {
                show: e = !1,
                enable: t = !1,
                confirm: r = "0",
              } = this.useBeforePayData || {};
              return e && t && "1" === r;
            },
            buttonText() {
              var e,
                t = this.submitTitle || "提交订单";
              return this.payRechargeInfo && this.payRechargeInfo.btnText
                ? this.payRechargeInfo.btnText
                : this.isPreCashierPay
                ? (null == (e = this.preCashierChannel) ? void 0 : e.btnText) ||
                  t
                : this.showPriorUseSummary
                ? "提交订单"
                : this.orderCreated
                ? "去支付"
                : this.memberCard.renewal && this.memberCard.days
                ? "购买延长使用" + this.memberCard.days + "天"
                : this.isDrugShop
                ? "选好了"
                : t;
            },
            showSubmitDialog() {
              var e,
                t,
                r = "";
              this.useStoredCustomerDiscount && +this.orderFinalPrice
                ? ((r = this.payAssetActivityTagDesc
                    ? "recharge"
                    : "noRecharge"),
                  null != (e = this.order) &&
                    null != (t = e.config) &&
                    t.isChooseFreeOrder &&
                    (r = ""))
                : this.useStoredMemberCustomerDiscount &&
                  !this.useStoreBalancePayInFull &&
                  +this.orderFinalPrice &&
                  (r = "notEnough");
              return r;
            },
            enableUseUserAuthorize() {
              return this.enableUseUserAuthorizeCopy;
            },
            showPostage() {
              var e, t;
              return !(
                null == (e = this.currentPostage) ||
                !e.available ||
                null == (t = this.pay) ||
                !t.postage
              );
            },
            currentPostage() {
              var { postage: e } = this.state;
              return (
                ((null == e ? void 0 : e.postageItems) || []).find(
                  (t) => t.expressType === e.currentExpressType
                ) || {}
              );
            },
            priceLabel() {
              var e, t;
              return this.isDepositPresale
                ? 1 ===
                  (null == (e = this.pay) || null == (t = e.phasePayment)
                    ? void 0
                    : t.currentPhase)
                  ? "定金："
                  : "尾款："
                : this.payRechargeInfo && this.payRechargeInfo.btnText
                ? "充值："
                : "应付：";
            },
            showComma() {
              return this.showPostage && this.showDisplayCardPrice;
            },
            formatPriceArray() {
              return this.showPriorUseSummary
                ? ["0", "00"]
                : this.payRechargeInfo && this.payRechargeInfo.btnText
                ? this.payRechargeInfo.amount.split(".")
                : this.orderFinalPrice.split(".");
            },
            pointStr() {
              var { points: e = {}, pointsName: t = "" } = this;
              return e.usePoints && e.available ? [e.totalPoints, t] : "";
            },
            payPostage() {
              var e;
              return Ct(null == (e = this.pay) ? void 0 : e.postage);
            },
            displayPrice() {
              var e;
              return Ct(null == (e = this.displayCard) ? void 0 : e.price);
            },
            showDisplayCardPrice() {
              return this.displayCard && this.display.openDisplayCard;
            },
          },
          getActions: function (e) {
            return {
              setEnableUseUserAuthorizeCopy(e) {
                this.enableUseUserAuthorizeCopy = e;
              },
            };
          },
        },
        Ot = [{ state: {}, getters: {}, actions: {} }, Pt].reduce((e, t) => {
          return (
            void 0 === (r = e) && (r = {}),
            void 0 === (s = t) && (s = {}),
            {
              state: Object(a.a)({}, r.state, s.state),
              getters: Object(a.a)({}, r.getters, s.getters),
              actions: Object(a.a)({}, r.actions, s.actions),
            }
          );
          var r, s;
        }, {});
      class St {
        constructor(e) {
          var t,
            r = this;
          (this.ctx = e.ctx),
            (this.store =
              ((t = this.ctx),
              Object(tt.a)({
                state: () => Object(a.a)({}, Ot.state, Pt.getState(t)),
                getters: Object(a.a)({}, Ot.getters),
                actions: Object(a.a)({}, Ot.actions, Pt.getActions(t)),
              }))),
            this.ctx.process.define(
              "goToPaySuccess",
              Object(M.a)(function* () {
                for (
                  var e = arguments.length, t = new Array(e), a = 0;
                  a < e;
                  a++
                )
                  t[a] = arguments[a];
                var s = vt.a.call(
                  { ctx: r.ctx, state: r.ctx.data.state },
                  ...t
                );
                E.default.navigate({ type: "redirectTo", url: s });
              })
            ),
            this.ctx.process.define(
              "updateCreateParamsOnPreCashierPay",
              (e) => (
                this.ctx.data.isPreCashierPay &&
                  (e.extensions = Object(a.a)(
                    {},
                    (null == e ? void 0 : e.extensions) || {},
                    { SELECTED_PAY_WAY_BEFORE_CREATE: "true" }
                  )),
                e
              )
            ),
            this.initCtxData();
        }
        initCtxData() {
          Object(tt.c)(this, [
            "dataLoaded",
            "themeColors",
            "display",
            "memberCard",
            "miniprogram",
            "currentAddress",
            "order",
            "valueCard",
            "goods",
            "pay",
            "orderFinalPrice",
            "shop",
            "useBeforePayData",
            "rechargeFreeOrderRule",
            "kdtId",
            "useStoredCustomerDiscount",
            "useStoredMemberCustomerDiscount",
            "useStoreBalancePayInFull",
            "payAssetActivityTagDesc",
            "recommendDetaid",
            "drugMessage",
            "isPrescriptionDrugGoods",
            "displayCard",
            "enableUseOrderBehaviorParam",
            "yzGuarantee",
            "isDrugShop",
            "showSubscribeGuide",
            "preCashierChannel",
            "isPreCashierPay",
            "payRechargeInfo",
            "isPriorUseChosen",
            "isDepositPresale",
            "points",
            "pointsName",
            "state",
          ]);
        }
        beforeStartPay(e) {
          return Object(M.a)(function* () {
            var { isSupportedExtension: t = !0 } = void 0 === e ? {} : e;
          })();
        }
        getPayParams() {
          var { state: e, pay: t, finalPrice: r } = this.ctx.data,
            { shop: a = {}, user: s = {}, order: o = {}, display: i = {} } = e,
            { payParams: n = {}, prepayParams: d = {} } = t,
            c = {
              kdtId: a.kdtId,
              orderNo: d.outBizNo || o.orderNos[0],
              account: s.phone,
              partnerReturnUrl: n.partnerReturnUrl,
            };
          n.payAmount = r;
          var { selectedInstallmentPeriod: l } = i;
          return (
            l && (c.selectedInstallmentPeriod = l),
            (d.cashierBizExt = {
              isGuarantee:
                e.display && e.display.isSecuredTransActions ? "1" : "0",
              yzGuarantee: Me()(e, "yzGuarantee", !1),
            }),
            [d, c, n]
          );
        }
      }
      St.widgets = { Main: ht.a, BottomSubmit: ft.a };
      var kt = {
          themeColors: {},
          isOrderPage: !1,
          isPrePayPage: !1,
          kdtId: "",
          guaranteeOrderInfo: {},
          freightUrl: "",
          isChoosedCard: !1,
          show: !1,
          lifeCycle: {},
          orderPageConfig: {
            isYzGuarantee: !1,
            IS_FREIGHT_INSURANCE: "0",
            FREIGHT_INSURANCE_FREE: "0",
            isChoosedCard: !1,
            freightInsurance: !1,
          },
          detailPageConfig: {},
          mainSupportContent: [],
          docs: {
            icon: {
              logo: {
                iconLongTextWhite:
                  "//b.yzcdn.cn/security/fangxin-long-text-white.png",
                iconShortTextGreen: "//b.yzcdn.cn/security/fangxin-green.svg",
                iconLongTextGreen:
                  "//b.yzcdn.cn/security/fangxin-long-text-green.png",
                copyright: "//b.yzcdn.cn/security/fangxin-green.svg",
              },
            },
          },
          paddingConfig: { freight: null, guarantee: null },
          isDocFetched: !1,
          hideYzGuarantee: !1,
          isDirty: !1,
          defaultYzGuarantee: !1,
          defaultFreightInsurance: !1,
          orderExtra: {},
        },
        Tt = { NONE: "0", SELF: "1", FREE: "2" },
        It = {
          isDefaultVisivle() {
            return !this.isDirty && this.defaultYzGuarantee;
          },
          showYzGuaranteeFixed() {
            return (
              !(!this.isDefaultVisivle || this.isChoosedCard) ||
              (this.show && this.isOrderPage && !this.isChoosedCard)
            );
          },
          showYzGuarantee() {
            return this.show && !this.isOrderPage && !this.isChoosedCard;
          },
          showGuarantee() {
            return this.showYzGuaranteeFixed || this.showYzGuarantee;
          },
          freightInsurance() {
            var { expressType: e } = this.guaranteeOrderInfo,
              t =
                this.orderPageConfig &&
                "1" === this.orderPageConfig.IS_UPGRADE_FREIGHT_TAG
                  ? "商家为你购买的商品提供免费上门退服务，退换货选择上门取件，可自动抵扣邮费（含续重），最高可赔25元；若选择自寄，理赔金额参考两地之间快递首重邮费，具体以“订单详情-退货包运费”页面为准（仅限补贴普通快递运费，不含同城配送费）"
                  : "商家为你购买的商品提供退货包运费服务，退换货成功后可补贴运费，实际赠送情况以订单详情页为准。",
              r =
                (this.isOrderPage &&
                  "1" === this.orderPageConfig.IS_UPGRADE_FREIGHT_TAG) ||
                (!this.isOrderPage && this.detailPageConfig.isUpgrade)
                  ? "免费上门退"
                  : "退货包运费";
            if (this.defaultFreightInsurance && !this.isDirty && 0 == +e)
              return { name: r, title: "商家赠送", desc: t };
            if (!this.isOrderPage) {
              var { title: a, desc: s } = this.detailPageConfig;
              return { name: r, title: a, desc: s };
            }
            var o =
                this.orderPageConfig &&
                "1" === this.orderPageConfig.IS_FREIGHT_INSURANCE,
              {
                FREIGHT_INSURANCE_FREE: i = "",
                isYzGuarantee: n = !1,
                freightInsurance: d,
                freightInsuranceContent: c,
                freightInsuranceDesc: l,
              } = this.orderPageConfig,
              u = n && !this.isChoosedCard;
            return !1 === d
              ? { name: r, title: "", desc: "" }
              : d && c
              ? {
                  name: r,
                  title: this.orderPageConfig.hideYzGuarantee ? "商家赠送" : c,
                  desc: l,
                }
              : -1 !== [Tt.SELF, Tt.FREE].indexOf(i) && u
              ? {
                  name: r,
                  title: this.orderPageConfig.hideYzGuarantee
                    ? "商家赠送"
                    : "有赞放心购赠送",
                  desc: "有赞放心购订单赠送退货包运费，退换货成功可补贴运费，实际赠送情况以订单详情页为准。",
                }
              : (i === Tt.NONE && o) || (i === Tt.SELF && o && !u)
              ? { name: r, title: "商家赠送", desc: t }
              : { name: r, title: "", desc: "" };
          },
        };
      function wt(e, t, r) {
        var a, s;
        void 0 === r && (r = !1);
        return function () {
          var o = this,
            i = arguments;
          a && clearTimeout(a);
          var n = function () {
              (a = null), r || (s = e.apply(o, i));
            },
            d = r && !a;
          return (a = setTimeout(n, t)), d && (s = e.apply(this, i)), s;
        };
      }
      var xt = "/wscassets/api/security/guarantee/",
        Dt = function (e) {
          return {
            fetchDocs() {
              this.isDocFetched ||
                Object(ie.default)({
                  path: xt + "docs",
                  method: "GET",
                  data: { isFxg: !0 },
                  options: { useCdn: !0 },
                }).then((t) => {
                  (this.docs = t),
                    (this.isDocFetched = !0),
                    (e.data.yzGuaranteeDocs = t);
                });
            },
            getRequestParams() {
              var e = [
                  [
                    "aliases",
                    "bizCategory",
                    "activityType",
                    "orderType",
                    "orderMark",
                    "expressType",
                    "kdtId",
                    "selectCard",
                  ],
                  [
                    "aliases",
                    "hasYzSecured",
                    "orderNo",
                    "orderStatus",
                    "hasFreightInsurance",
                    "freightInsuranceFree",
                    "orderCreateTime",
                    "kdtId",
                  ],
                  [
                    "aliases",
                    "feedback",
                    "hasYzSecured",
                    "orderNo",
                    "orderSuccessTime",
                    "orderStatus",
                    "orderPayTime",
                    "payWay",
                  ],
                ],
                t = this.isOrderPage ? e[0] : this.isPrePayPage ? e[1] : e[2],
                r = { isFxg: !0 };
              return (
                t.forEach((e) => {
                  "kdtId" === e
                    ? (r.kdtId = this.kdtId)
                    : "selectCard" === e
                    ? (r.selectCard = this.isChoosedCard)
                    : (r[e] =
                        "orderCreateTime" === e
                          ? this.guaranteeOrderInfo[e] || 0
                          : this.guaranteeOrderInfo[e]);
                }),
                r
              );
            },
            fetchData: wt(function () {
              var t,
                r = this.getRequestParams();
              ((!this.isOrderPage && !this.isPrePayPage) || r.kdtId) &&
              r.aliases &&
              0 !== (null == (t = r.aliases) ? void 0 : t.length)
                ? Object(ie.default)({
                    path: this.isOrderPage
                      ? xt + "queryFinComponentsConfirmSupport"
                      : xt + "queryFinComponentsDetailSupport",
                    data: this.getRequestParams(),
                    method: this.isOrderPage ? "GET" : "POST",
                    options: { useCdn: !0 },
                  })
                    .then((t) => {
                      if (((this.isDirty = !0), this.isOrderPage)) {
                        var {
                            IS_YZ_SECURED: r,
                            IS_FREIGHT_INSURANCE: s,
                            FREIGHT_INSURANCE_FREE: o,
                            IS_UPGRADE_FREIGHT_TAG: i,
                          } = null == t ? void 0 : t.displayTag,
                          {
                            freightInsuranceDesc: n,
                            freightInsurance: d,
                            freightInsuranceContent: c,
                            hideYzGuarantee: l,
                          } = t;
                        (this.hideYzGuarantee = l),
                          (this.show = "1" === r),
                          (this.orderPageConfig = {
                            isYzGuarantee: this.show,
                            IS_FREIGHT_INSURANCE: s,
                            FREIGHT_INSURANCE_FREE: o,
                            IS_UPGRADE_FREIGHT_TAG: i,
                            isChoosedCard: this.isChoosedCard,
                            freightInsurance: d,
                            freightInsuranceDesc: n,
                            freightInsuranceContent: c,
                            hideYzGuarantee: l,
                          });
                      } else
                        (this.show = null == t ? void 0 : t.yzSecured),
                          (this.lifeCycle = null == t ? void 0 : t.lifeCycle),
                          (this.detailPageConfig = {
                            title:
                              null == t ? void 0 : t.freightInsuranceSimpleDesc,
                            desc:
                              null == t
                                ? void 0
                                : t.freightInsuranceComplexDesc,
                            url: this.freightUrl,
                            isUpgrade: null == t ? void 0 : t.isUpgrade,
                          });
                      (this.mainSupportContent =
                        null == t ? void 0 : t.mainSupportContent),
                        (e.data.yzGuaranteeInfo = Object(a.a)({}, t, {
                          page: this.isOrderPage ? "order" : "orderDetail",
                        }));
                    })
                    .catch(() => {
                      this.isDirty = !0;
                    })
                : (this.isDirty = !0);
            }, 500),
            updateFreightUrl(e) {
              this.freightUrl = (e && e.url) || "";
            },
            updateChoosedCardStatus(e) {
              this.orderPageConfig.isChoosedCard = e;
            },
          };
        };
      var Et = r("FeXA"),
        _t = r.n(Et),
        At = r("te77"),
        jt = r.n(At),
        Nt = r("q7ZP"),
        Rt = r.n(Nt),
        Ft = r("+Q+L"),
        Bt = r.n(Ft);
      class Mt {
        constructor(e) {
          var t;
          (this.ctx = e.ctx),
            (this.store =
              ((t = this.ctx),
              Object(tt.a)({
                state: () => Object(a.a)({}, kt),
                getters: Object(a.a)({}, It),
                actions: Object(a.a)({}, Dt(t)),
              }))),
            Object(tt.c)(this, [
              "themeColors",
              "isChoosedCard",
              "isOrderPage",
              "isPrePayPage",
              "kdtId",
              "guaranteeOrderInfo",
              "paddingConfig",
              "defaultYzGuarantee",
              "defaultFreightInsurance",
              "orderExtra",
            ]);
        }
      }
      Mt.widgets = {
        GuaranteeFreightBar: _t.a,
        YzGuaranteeFixed: jt.a,
        YzGuarantee: Rt.a,
        FreightInsurance: Bt.a,
      };
      var Lt = r("1wqG"),
        Gt = r.n(Lt),
        Ut = r("Btm5"),
        Wt = r.n(Ut);
      class Ht {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      (Ht.components = { GuaranteePop: Gt.a }),
        (Ht.widgets = { YzGuaranteeForSkuOrder: Wt.a });
      var zt = r("riyd"),
        Kt = r.n(zt);
      class Vt {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      Vt.widgets = { GuaranteeEnsure: Kt.a };
      var qt = r("aOlM"),
        Yt = r("zMoS"),
        Jt = r("YehF"),
        Zt = r("pn6R"),
        Xt = r.n(Zt),
        Qt = "self-fetch",
        $t = "express",
        er = 1,
        tr = 0,
        rr = 1,
        ar = 2,
        sr = { "express-0": 0, "self-fetch": 1, "express-2": 2 },
        or = 1,
        ir = {
          0: "deliveryDetail",
          1: "order_pay_success_by_self_fetch",
          2: "order_pay_success_by_local_delivery",
        },
        nr = "/retail/h5/miniprogram";
      function dr(e) {
        return Object(ie.default)({
          path: nr + "/order/pendingOrderWaitingProgress.json",
          data: e,
        });
      }
      function cr(e) {
        return Object(ie.default)({ path: nr + "/getTemplate.json", data: e });
      }
      var lr = r("ZRCJ"),
        ur = r.n(lr);
      function pr(e) {
        e.process.define("callHookBeforeEvokeSubscribeDialog", () => {
          var { currentExpressType: t, isRetailOrderScene: r } = e.data;
          if (r && t === sr["express-0"]) return Promise.resolve();
          var a = ir[t],
            s = [cr({ scene: a }), cr({ scene: "retial_coupon_notice_scene" })],
            o = t === sr["self-fetch"];
          return (
            s.unshift(
              o
                ? cr({ scene: "order_success_by_self_fetch" })
                : e.process.invokePipe("queryWechatSubscribeResult", or)
            ),
            Promise.all(s).then((t) => {
              var [s, i, n] = t,
                d =
                  (o
                    ? null == s
                      ? void 0
                      : s.templateIdList
                    : null == s
                    ? void 0
                    : s.templateList) || [],
                { templateIdList: c = [] } = i || {},
                { templateIdList: l = [] } = n || {},
                u = c.map((e) => ({ templateId: e }));
              return new Promise((t) => {
                e.process.invokePipe("requestSubscribeMessagePush", {
                  templates: l.concat([...u, ...d]),
                  onFail: t,
                  onSuccess: t,
                  onShowTips: () => {
                    e.data.showSubscribeGuide = !0;
                  },
                  onCloseTips: () => {
                    e.data.showSubscribeGuide = !1;
                  },
                  onSelfLog: {
                    subscribePos: "支付完成后回调",
                    subscribeSource: r ? "24h_shelf" : "wx_shop",
                    deliveryWay: a,
                  },
                });
              });
            })
          );
        });
      }
      var hr = r("aasU"),
        yr = { PickUpWay: r.n(hr).a };
      function fr(e, t) {
        var r,
          a,
          s =
            null == t || null == (r = t.tradeConfirmation)
              ? void 0
              : r.pickUpWay;
        if ("object" == typeof (a = s) && null !== a) {
          var { calculatedPickUpWay: o = -1, supportedPickUpWays: i = {} } = s,
            n = Object.keys(i).map((e) => ({ name: i[e], value: +e })),
            d = n.find((e) => e.value === +o);
          if (((e.data.retailPickUpWays = n), d)) {
            var { name: c, value: l } = d;
            (e.data.retailPickUpWayName = c), (e.data.retailPickUpWayValue = l);
          }
        }
      }
      function vr(e, t) {
        void 0 === t && (t = []);
        var r = {};
        return (function (e, t) {
          return 0 === t.length
            ? Promise.resolve([])
            : Promise.all(
                ((r = t),
                (a = 20),
                void 0 === a && (a = 20),
                r.reduce(
                  (e, t, r) => (
                    r % a == 0 && e.push([]), e[e.length - 1].push(t), e
                  ),
                  []
                )).map((t) =>
                  Object(ie.default)({
                    path: nr + "/checkUserAddressSupport.json",
                    data: { warehouseId: e, addressList: t },
                    method: "POST",
                  }).catch(() => [])
                )
              ).then((e) => {
                for (var t = [], r = 0; r < e.length; r += 1) t.push(...e[r]);
                return t;
              });
          var r, a;
        })(
          e,
          t.reduce((e, t) => {
            var {
              id: a,
              lat: s,
              lon: o,
              province: i = "",
              city: n = "",
              county: d = "",
              addressDetail: c = "",
            } = t;
            return (
              s && o
                ? e.push({
                    addressId: a,
                    lat: s,
                    lon: o,
                    addressStr: "" + i + n + d + c,
                  })
                : (r[a] = !1),
              e
            );
          }, [])
        ).then((e) =>
          e.reduce((e, t) => {
            var { addressId: r, isSupport: a = !1 } = t;
            return (e[r] = a), e;
          }, r)
        );
      }
      function mr(e) {
        return gr.apply(this, arguments);
      }
      function gr() {
        return (gr = Object(M.a)(function* (e) {
          var { currentExpressType: t, warehouseId: r, address: a = {} } = e,
            s = a.list || [];
          if (t === ar && r) {
            var o = yield vr(r, s),
              { activeList: i, inactiveList: n } = s.reduce(
                (e, t) => (
                  o[t.id] ? e.activeList.push(t) : e.inactiveList.push(t), e
                ),
                { activeList: [], inactiveList: [] }
              );
            return (a.activeList = i), (a.inactiveList = n), a;
          }
          return (
            t === tr &&
              a.activeList &&
              ((a.activeList = []), (a.inactiveList = [])),
            a
          );
        })).apply(this, arguments);
      }
      var br = r("64Ju"),
        Cr = r("ns2s");
      function Pr(e, t) {
        try {
          return JSON.parse(t.ATTR_DISPATCHER_WAREHOUSE_IDS).response
            .assignLocalWarehouseIds[0];
        } catch (t) {
          return e;
        }
      }
      function Or(e, t, r) {
        var { address: a, selfFetch: s, extra: o } = r,
          i = Object(br.e)(t),
          { shop: n } = s || {};
        return Object(br.c)(t, i, 7, {
          bizType: a.activeTab,
          offlineId: 1 === a.activeTab ? (null == n ? void 0 : n.id) : void 0,
          dispatchWarehouseId:
            1 === a.activeTab
              ? null == n
                ? void 0
                : n.kdtId
              : Pr(e.data.kdtId, o),
        }).then((e) => {
          var t, r, a, s, o;
          return null == (t = e[0]) ||
            !t.children[0] ||
            (null != (r = e[0]) && null != (a = r.children[0]) && a.disabled)
            ? {}
            : null == (s = e[0]) || null == (o = s.children[0])
            ? void 0
            : o.value;
        });
      }
      var Sr,
        kr,
        Tr = r("BgwE"),
        Ir = { WaitingProcess: r.n(Tr).a };
      function wr(e, t) {
        var { currentExpressType: r, selfFetchShopId: a } =
            void 0 === t ? {} : t,
          { warehouseId: s, goodsInfoList: o, isSupplyMode: i } = e.data;
        if ((r && (Sr = r), a && (kr = a), o.length)) {
          if (1 === Sr && kr)
            dr({
              warehouseId: kr,
              bizType: sr["self-fetch"],
              goodsInfoList: o,
            }).then((t) => {
              e.data.processData = t;
            });
          else if ([0, 2].includes(Sr)) {
            if (i && !s) return void (e.data.processData = {});
            dr({
              warehouseId: +s,
              bizType: sr["express-" + Sr],
              goodsInfoList: o,
            }).then((t) => {
              e.data.processData = t;
            });
          }
        } else e.data.processData = {};
      }
      var xr = r("xdNP"),
        Dr = { GetPhoneButton: r.n(xr).a },
        Er = r("QKLd"),
        _r = { Dine: r.n(Er).a },
        Ar = [
          function (e) {
            e.data.retailPickUpWays = [];
          },
          function (e) {
            e.data.processData = {};
          },
        ],
        jr = [
          function (e) {
            e.process.define("callHookBeforeUpdateAddress", (t) => {
              var {
                warehouseId: r,
                isRetailOrderScene: a,
                postage: s,
              } = e.data;
              return a && s
                ? mr({
                    currentExpressType: s.currentExpressType,
                    warehouseId: r,
                    address: t,
                  })
                : t;
            });
          },
        ],
        Nr = [
          function (e) {
            e.process.define("updatePickUpWay", (t) => {
              var { name: r, value: a } = t;
              (e.data.retailPickUpWayName = r),
                (e.data.retailPickUpWayValue = a),
                e.process.invoke("fetchShow", { loading: !1 });
            });
          },
          (e) => {
            e.process.define("selectRetailContact", (t) => {
              var { userName: r, phone: s } = t,
                { showName: o, showPhone: i } = e.data.retailSelfFetchContact,
                n = Object(a.a)({}, e.data.state.contact, {
                  id: null,
                  userName: "",
                  telephone: "",
                  reset: 1,
                });
              o && ((n.userName = r), (e.data.retailSelfFetchContact.name = r)),
                i &&
                  ((n.telephone = s),
                  (e.data.retailSelfFetchContact.phone = s)),
                e.process.invoke("mutateState", (e) => ((e.contact = n), []));
            });
          },
          (e) => {
            e.process.define("genPrepareParamsByRetail", (t) => {
              var { usePointDeduction: r } = t;
              return (
                e.data.jointId && e.data.isRetailOrderScene && (r = !1),
                Object(a.a)({}, t, { usePointDeduction: r })
              );
            });
          },
        ];
      class Rr {
        constructor(e) {
          var t, r;
          (this.initWaitingProgress = wr),
            (this.debounceSetRetailAddress = Object(qt.a)(
              this.setRetailAddress,
              500
            )),
            (this.ctx = e.ctx),
            this.ctx.env.getQueryAsync().then((e) => {
              this.initData(e),
                this.data.isRetailOrderScene &&
                  (this.initShelfHooks(),
                  this.initShelfProcesses(),
                  this.initShelfWatchers());
            }),
            Object(Jt.e)(
              null != (t = null == (r = this.ctx.data) ? void 0 : r.shop)
                ? t
                : {}
            )
              ? ((this.data.isRetailWeappScene = !0),
                this.initH5AndWeappHooks(),
                this.initH5AndWeappWatchers())
              : (this.process.define("callHookAfterFetchShow", function (e) {
                  return void 0 === e && (e = {}), Promise.resolve(e);
                }),
                this.process.define("callHookBeforeFetchShow", (e) =>
                  Promise.resolve(e)
                ));
        }
        get data() {
          return this.ctx.data;
        }
        get process() {
          return this.ctx.process;
        }
        initData(e) {
          var {
              retailOrderScene: t = "",
              jointId: r = "",
              warehouseId: a = "",
            } = e,
            s = this.data;
          (s.isRetailOrderScene = "24hshelf" === t),
            (s.retailOrderScene = t),
            (s.jointId = r),
            (s.warehouseId = a),
            (s.isSupplyMode = !!a),
            (s.goodsNum = 0),
            (s.goodsInfoList = []),
            (s.showSubscribeGuide = !1),
            (s.isShowRetailDeliveryAddress = ""),
            Ar.forEach((e) => {
              "function" == typeof e && e.call(this, this.ctx);
            });
        }
        initShelfProcesses() {
          Nr.forEach((e) => {
            "function" == typeof e && e.call(this, this.ctx);
          });
        }
        initShelfWatchers() {
          this.ctx.watch("prepareData", (e) => {
            fr.call(this, this.ctx, e),
              ((e, t) => {
                var r = {},
                  { RESERVE_CONTACT_NUMBER: s = "" } =
                    t.tradeConfirmation.extra;
                r.phone = s;
                try {
                  var {
                    contact_number_required: o = 0,
                    reserve_contact_name: i = 0,
                    reserve_contact_number: n = 0,
                  } = JSON.parse(
                    t.tradeConfirmation.extra.RETAIL_MINAPP_SHELF_ORDER_SETTING
                  );
                  (r.showName = +i),
                    (r.showPhone = +n),
                    (r.requirePhone = 1 == +n ? +o : 0),
                    +n &&
                      !+i &&
                      s &&
                      e.process.invoke(
                        "mutateState",
                        (e) => (
                          (e.contact = Object(a.a)({}, e.contact, {
                            id: null,
                            userName: "",
                            telephone: s,
                            reset: 1,
                          })),
                          []
                        )
                      );
                } catch (e) {
                  (r.showName = 0), (r.showPhone = 0), (r.requirePhone = 0);
                }
                r.showName && (r.name = ""),
                  (e.data.retailSelfFetchContact = r);
              })(this.ctx, e);
          }),
            this.ctx.watch("state", (e) => {
              var t,
                r,
                a =
                  null == (t = e.selfFetch) || null == (r = t.shop)
                    ? void 0
                    : r.kdtId;
              a &&
                a !== this.selfFetchShopId &&
                ((this.selfFetchShopId = a),
                this.initWaitingProgress(this.ctx, { selfFetchShopId: a }));
            }),
            this.ctx.watch("currentAddress", (e) => {
              if (this.data.expressType !== Qt) {
                var t,
                  { id: r, lat: a, lon: s } = e || {};
                r !== this.currentAddressId &&
                  a &&
                  s &&
                  ((this.currentAddressId = r),
                  ((t = { lat: a, lon: s }),
                  Object(ie.default)({
                    path: nr + "/getWarehouseBySupplyMode.json",
                    data: t,
                  })).then((e) => {
                    var t;
                    this.data.isSupplyMode = !(null == e || !e.warehouse);
                    var r = String(
                      (null == e || null == (t = e.warehouse)
                        ? void 0
                        : t.warehouseId) || ""
                    );
                    if (r !== this.data.warehouseId) {
                      var { postage: a } = this.ctx.data;
                      this.debounceSetRetailAddress(a);
                    }
                    var s =
                      r &&
                      r !== this.data.warehouseId &&
                      this.data.expressType === $t;
                    (this.data.warehouseId = r),
                      s && this.ctx.process.invoke("fetchShow"),
                      this.initWaitingProgress(this.ctx);
                  }));
              }
            }),
            this.ctx.watch("goods", (e) => {
              var t,
                r =
                  (null == (t = e.list)
                    ? void 0
                    : t.filter(
                        (e) =>
                          24 === e.activityType ||
                          (!e.fromTmpAdded && !e.present)
                      )) || [],
                a = r.reduce((e, t) => e + t.num, 0) || 0;
              a !== this.data.goodsNum &&
                ((this.data.goodsNum = a),
                (this.data.goodsInfoList = r.map((e) => {
                  var { goodsId: t, skuId: r, num: a, combo: s } = e;
                  if (s) {
                    var o = Xt()(s),
                      { comboType: i, subComboList: n } = o;
                    return {
                      goodsId: t,
                      skuId: r,
                      num: a,
                      comboType: i,
                      combo:
                        null == n
                          ? void 0
                          : n.map((e) => {
                              var {
                                goodsId: t,
                                skuId: r,
                                num: a,
                                groupId: s,
                              } = e;
                              return {
                                subComboList: [
                                  { goodsId: t, skuId: r, num: a },
                                ],
                                id: s,
                              };
                            }),
                      isCombo: !0,
                    };
                  }
                  return { goodsId: t, skuId: r, num: a };
                })),
                this.initWaitingProgress(this.ctx));
            });
        }
        initH5AndWeappWatchers() {
          this.ctx.watch("postage", (e) => {
            if (e) {
              var { currentExpressType: t } = e;
              if (t !== this.currentExpressType) {
                var r = this.currentExpressType,
                  a = t;
                (this.currentExpressType = t),
                  (this.ctx.data.currentExpressType = t),
                  this.initWaitingProgress(this.ctx, { currentExpressType: t }),
                  this.debounceSetRetailAddress(e),
                  [r, a].every((e) => 0 === e || Boolean(e));
              }
            }
          }),
            this.ctx.watch("address", (e) => {
              e &&
                (this.addressId
                  ? this.addressId !== e.id &&
                    (this.resetDeliveryTime(), (this.addressId = e.id))
                  : (this.addressId = e.id));
            }),
            this.ctx.watch("state", (e) => {
              (this.data.isShowRetailDeliveryAddress =
                !!e.display.localDeliveryPosition),
                (this.data.attrRefreshTimeBucket =
                  "1" === e.extra.ATTR_REFRESH_TIME_BUCKET),
                (this.data.attrDispatchWarehouseIds =
                  e.extra.ATTR_DISPATCHER_WAREHOUSE_IDS);
            }),
            this.ctx.watch("prepareData", (e) => {
              !(function (e, t) {
                var {
                  tradeConfirmation: {
                    extra: { HOUSE_NUMBER_REQUIRED: r } = {},
                  } = {},
                } = t;
                e.data.houseNumberRequired = !!+r;
              })(this.ctx, e),
                this.setReverseData(e);
            });
        }
        initShelfHooks() {
          var e = this;
          jr.forEach((e) => {
            "function" == typeof e && e.call(this, this.ctx);
          }),
            this.process.define("callHookBeforeFetchShowByBookKey", (e) => {
              var { jointId: t } = this.data;
              return this.data.isRetailOrderScene && t
                ? Promise.resolve(Object(a.a)({}, e, { usePointDeduction: !1 }))
                : Promise.resolve(e);
            }),
            this.process.define("callHookBeforeFetchShow", function (t) {
              return (
                void 0 === t && (t = {}), Promise.resolve(e.setRetailParams(t))
              );
            }),
            this.process.define("callHookBeforeCreateOrder", function (t) {
              return (
                void 0 === t && (t = {}), Promise.resolve(e.setRetailParams(t))
              );
            }),
            this.process.define(
              "callHookBeforeAsyncCreateOrderBookKey",
              function (t) {
                return (
                  void 0 === t && (t = {}),
                  Promise.resolve(e.setRetailParams(t))
                );
              }
            );
        }
        initH5AndWeappHooks() {
          var e = this;
          this.process.define(
            "callHookBeforeGetDefaultSelfFetch",
            function (e) {
              return void 0 === e && (e = {}), (e.firstOneFill = !0), e;
            }
          ),
            this.process.define("callHookAfterFetchShow", function (t) {
              void 0 === t && (t = {});
              var r = e.getDeliveryConfig();
              return Promise.resolve(
                t.postage.currentExpressType === rr
                  ? (function (e, t, r) {
                      void 0 === r && (r = {});
                      var { autoBookSelfTakeTime: s } = r,
                        { selfFetch: o } = t;
                      if (s !== er || o.time) return t;
                      var { address: i, extra: n } = t,
                        {
                          timeSpan: d,
                          deliveryTimeBucket: {
                            startTime: c = "",
                            endTime: l = "",
                          },
                        } = o,
                        u = new Date(c);
                      if (
                        e.data.isRetailOrderScene &&
                        ("hour" === d || "halfhour" === d) &&
                        c &&
                        new Date().getDate() === u.getDate()
                      ) {
                        var p = new Date(l);
                        return (
                          (t.selfFetch = Object(a.a)({}, o, {
                            time: Cr.c.dateTime(u),
                            timeWithWeekday:
                              "立即自提（预计 " + Cr.c.time(u) + "）",
                            selfFetchStartTime:
                              Cr.c.date(u) + " " + Cr.c.time(u) + ":00",
                            selfFetchEndTime: l
                              ? Cr.c.date(p) + " " + Cr.c.time(p) + ":00"
                              : "",
                          })),
                          t
                        );
                      }
                      return Object(br.a)(o)
                        ? Or(e, o, { address: i, selfFetch: o, extra: n }).then(
                            (e) => (
                              (t.selfFetch = Object(a.a)({}, o, {
                                time: e.text,
                                timeWithWeekday: e.textWithWeekday,
                                selfFetchStartTime: e.startTime || "",
                                selfFetchEndTime: e.endTime || "",
                              })),
                              t
                            )
                          )
                        : t;
                    })(e.ctx, t, r)
                  : (function (e, t, r) {
                      void 0 === r && (r = {});
                      var { autoBookDeliveryTime: a } = r,
                        { delivery: s } = t;
                      if (a !== er || s.text) return t;
                      var { address: o, selfFetch: i, extra: n } = t;
                      return Or(e, s, {
                        address: o,
                        selfFetch: i,
                        extra: n,
                      }).then((e) => (Object.assign(t.delivery, e), t));
                    })(e.ctx, t, r)
              );
            }),
            this.process.define(
              "modifyPrepareByBookKeyParams",
              (function () {
                var t = Object(M.a)(function* (t) {
                  var r, s;
                  if (
                    Object(Jt.e)(
                      null != (r = null == (s = e.ctx.data) ? void 0 : s.shop)
                        ? r
                        : {}
                    )
                  )
                    return Object(a.a)({}, t, {
                      isSupportSpecialPeriodCost: !0,
                    });
                });
                return function (e) {
                  return t.apply(this, arguments);
                };
              })()
            ),
            this.process.define("callHookBeforeFetchShow", (e) =>
              this.setRetailSpecialPeriodParams(e)
            ),
            this.process.define("callHookBeforeCreateOrder", (e) =>
              this.setRetailSpecialPeriodParams(e)
            ),
            pr.call(this, this.ctx);
        }
        setRetailSpecialPeriodParams(e) {
          void 0 === e && (e = {});
          var { extensions: t } = e,
            { attrDispatchWarehouseIds: r, expressType: a } = this.data;
          return (
            a === $t &&
              ((t.ATTR_SUPPORT_TIMESPAN_DELIVERY_FEE = "1"),
              r && (t.ATTR_DISPATCHER_WAREHOUSE_IDS = r)),
            e
          );
        }
        setRetailParams(e) {
          if (this.data.isRetailOrderScene) {
            var t,
              {
                warehouseId: r,
                jointId: s,
                expressType: o,
                state: { contact: i },
              } = this.data,
              { delivery: n = {}, extensions: d = {} } = e;
            if (o === Qt) {
              this.ctx.logger.log({
                et: "click",
                ei: "switch_pickup_way",
                en: "自提取货方式",
                params: {
                  label: this.data.retailPickUpWayName,
                  value: this.data.retailPickUpWayValue,
                },
              }),
                (n.pickUpWay = this.data.retailPickUpWayValue);
              var {
                  showName: c,
                  showPhone: l,
                  requirePhone: u,
                } = this.data.retailSelfFetchContact || {},
                { reset: p, telephone: h, userName: y } = i,
                f = {};
              (!c && l && !u && !p) || (!c && !l)
                ? (f = { appointmentPerson: "", appointmentTel: "" })
                : c && !l
                ? (f = { appointmentPerson: y, appointmentTel: "" })
                : !c && l && (f = { appointmentPerson: "", appointmentTel: h }),
                (n.selfFetch = Object(a.a)({}, n.selfFetch, f));
            } else r && (n.dispatcherWarehouseId = r);
            if (s) {
              try {
                t = JSON.parse(d.BIZ_ORDER_ATTRIBUTE || "{}");
              } catch (e) {
                t = {};
              }
              (t = Object(a.a)({}, t, { JOINT_ORDER: "1", JOINT_ID: "" + s })),
                (d.BIZ_ORDER_ATTRIBUTE = JSON.stringify(t));
            }
            var { scene: v } = E.default.getAppOptions();
            return (
              1242 == +v && (d.ATTR_WX_STORE_KUAISONG = "1"),
              Object(a.a)({}, e, { delivery: n, extensions: d })
            );
          }
          return e;
        }
        setRetailAddress(e) {
          if (e.currentExpressType !== rr) {
            var { isRetailOrderScene: t, address: r = {} } = this.ctx.data;
            if (t && e) {
              var { warehouseId: a } = this.data;
              this.data.isSupplyMode || (a = this.ctx.data.kdtId),
                mr({
                  currentExpressType: e.currentExpressType,
                  warehouseId: a,
                  address: r,
                }).then((e) => {
                  this.ctx.process.invoke(
                    "mutateState",
                    (t) => ((t.address = e), ["address"])
                  );
                });
            }
          }
        }
        setReverseData(e) {
          var t = {};
          try {
            var r = Object(Yt.a)(
              e,
              "orderCreation.extensions.EXHIBITIONRESERVE_ENROLLMENT",
              "{}"
            );
            t = JSON.parse(r);
          } catch (e) {}
          this.data.reserves = t;
        }
        getDeliveryConfig() {
          try {
            var e;
            return (
              (null ==
              (e = (this.data.confirmData || this.data.prepareData || {})
                .deliveryTimeBucket)
                ? void 0
                : e.deliveryConfig) || {}
            );
          } catch (e) {
            return {};
          }
        }
        resetDeliveryTime() {
          var { startTime: e, endTime: t } = this.data.state.delivery;
          if ([e, t].some(Boolean))
            return (
              this.ctx.process.invoke("mutateState", (e) => {
                e.delivery = Object(a.a)({}, e.delivery, {
                  text: "",
                  textWithWeekday: "",
                  startTime: "",
                  endTime: "",
                });
              }),
              ["delivery"]
            );
        }
      }
      Rr.widgets = {
        PickUpWay: yr.PickUpWay,
        WaitingProcess: Ir.WaitingProcess,
        GetPhoneButton: Dr.GetPhoneButton,
        SelfFetchShopSecondConfirmDialog: ur.a,
        Dine: _r.Dine,
      };
      var Fr = r("w9aK"),
        Br = r.n(Fr);
      class Mr {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      Mr.widgets = { PresentPopup: Br.a };
      var Lr = r("Hy5Q"),
        Gr = r.n(Lr);
      class Ur {
        constructor(e) {
          (this.ctx = e.ctx),
            this.ctx.process.define("setTitleName", () => "确认需求"),
            (this.ctx.data.drugState = {
              isDrugShop: !1,
              currentUser: {},
              drugHistroy: {
                componentList: [],
                old: {
                  isChoice: !1,
                  diagnosedInfos: [],
                  checkedTagList: [],
                  inputType: [],
                  others: "",
                  title: "",
                  order: "",
                  type: "",
                },
                drug: {
                  isChoice: !1,
                  diagnosedInfos: [],
                  checkedTagList: [],
                  inputType: [],
                  others: "",
                  title: "",
                  order: "",
                  type: "",
                },
                kidney: {
                  isChoice: !1,
                  others: "",
                  inputType: [],
                  order: "",
                  diagnosedInfos: [],
                  checkedTagList: [],
                  title: "",
                  type: "",
                },
                liver: {
                  isChoice: !1,
                  inputType: [],
                  diagnosedInfos: [],
                  checkedTagList: [],
                  others: "",
                  order: "",
                  type: "",
                  title: "",
                },
                family: {
                  isChoice: !1,
                  inputType: [],
                  checkedTagList: [],
                  diagnosedInfos: [],
                  others: "",
                  order: "",
                  type: "",
                  title: "",
                },
                pregnancy: {
                  isChoice: !1,
                  inputType: [],
                  checkedTagList: [],
                  diagnosedInfos: [],
                  others: "",
                  order: "",
                  type: "",
                  title: "",
                },
              },
              drugMessage: {
                orderCreatedMsg: {},
                medicalCertificates: [],
                submitChecked: !0,
                rxNo: "",
                userList: [],
                currentUserId: "",
                tagCheckList: [],
                diagnosedDiseases: [],
                msg: { value: "", checked: !0 },
              },
              drugUser: {
                hasDiseaseInfo: !1,
                patientName: "",
                patientId: "",
                licenseNo: "",
                phoneNum: "",
                birthday: "",
                age: "",
                sex: "",
                medical: "",
                weight: "",
                isDefault: !1,
                healthInfos: [],
                message: "",
                relationship: [
                  { name: "本人", checked: !0 },
                  { name: "配偶", checked: !1 },
                  { name: "父母", checked: !1 },
                  { name: "朋友", checked: !1 },
                ],
              },
            });
        }
        onPageShow() {
          var e = this;
          return Object(M.a)(function* () {
            e.ctx.event.emit("onDrugPageShow");
          })();
        }
      }
      Ur.widgets = { Main: Gr.a };
      var Wr = r("U6jd"),
        Hr = r.n(Wr);
      class zr {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      zr.widgets = { Main: Hr.a };
      var Kr = r("Z3y2"),
        Vr = r.n(Kr),
        qr = r("gF3s"),
        Yr = r.n(qr);
      class Jr {}
      Jr.widgets = { Widget: Vr.a, WeappFollow: Yr.a };
      var Zr = r("bIWf"),
        Xr = r("q3R4"),
        Qr = r.n(Xr);
      class $r {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      $r.widgets = { Main: Qr.a };
      var ea = r("fNGs"),
        ta = r("fWqh"),
        ra = r.n(ta),
        aa = r("e384"),
        sa = r.n(aa),
        oa = r("Fc76"),
        ia = r.n(oa),
        na = r("b5+x"),
        da = r.n(na);
      class ca {
        constructor(e) {
          (this.ctx = e.ctx), (this.ctx.data.preferredPayChannel = "");
        }
      }
      ca.widgets = {
        SingleRow: ra.a,
        CellGroup: sa.a,
        SingleRowChannelListPopup: ia.a,
        SingleRowPayPasser: da.a,
      };
      var la = r("7ySy"),
        ua = r.n(la),
        pa = r("Cbw3"),
        ha = r.n(pa),
        ya = r("2Ki6"),
        fa = r.n(ya),
        va = r("tv/7"),
        ma = r.n(va),
        ga = r("sl+1"),
        ba = r.n(ga);
      class Ca {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      Ca.widgets = {
        Main: ua.a,
        BuyerMsg: ha.a,
        TradeBuyServiceBlock: ba.a,
        InvoiceActionSheet: ma.a,
        InvoiceCell: fa.a,
      };
      var Pa = r("4q4v"),
        Oa = r.n(Pa);
      class Sa {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      Sa.widgets = { Main: Oa.a };
      var ka = r("5CZ0"),
        Ta = r.n(ka),
        Ia = r("6EC6"),
        wa = r.n(Ia),
        xa = r("WUv3"),
        Da = r.n(xa),
        Ea = r("+ktP"),
        _a = r.n(Ea),
        Aa = r("evxX"),
        ja = r.n(Aa),
        Na = r("mHPI"),
        Ra = r.n(Na),
        Fa = r("pH7Z"),
        Ba = r.n(Fa),
        Ma = r("tmLU"),
        La = getApp();
      function Ga(e) {
        var t = Object(a.a)(
          {
            useVersion2: !0,
            defaultPointDeductEffect: !0,
            useNewCoupon: !0,
            isSupportDefaultSelfFetch: !0,
            useOrderKeep: !0,
            isOptimalSolution: !0,
            isOverlyingCoupon: !0,
            isNewMemberFlow: !0,
          },
          e
        );
        return La.getShopInfo().then(
          (e) => (
            Object(Jt.e)(e.shopMetaInfo) &&
              Object.assign(t, { isSupportSpecialPeriodCost: !0 }),
            Object(ie.default)({
              origin: "cashier",
              withCredentials: !0,
              path: "/pay/wsctrade/order/buy/prepare-by-book-key.json",
              data: t,
            })
          )
        );
      }
      function Ua() {
        return (Ua = Object(M.a)(function* (e) {
          var { prefetchKey: t, params: r } = e;
          return Object(Ma.b)({ prefetchKey: t, normalFetchCb: () => Ga(r) });
        })).apply(this, arguments);
      }
      class Wa {
        constructor(e) {
          (this.ctx = e.ctx),
            this.ctx.process.define(
              "navigateToTradeBuy",
              this.navigateToTradeBuy.bind(this)
            );
        }
        navigateToTradeBuy(e) {
          var { navigateParams: t, requestParams: r = {} } = e;
          Object(z.e)().then((e) => {
            var { bookKey: s = "" } = t,
              o = Object(a.a)({ bookKey: s }, r),
              i = Object(a.a)({}, t);
            Object(Ma.c)({
              navigatePath: "trade-buy",
              navigateCb: (t) => {
                e.order && (i.prefetchKey = t),
                  Object(z.f)({ pageType: z.b.ORDER, query: i });
              },
              prefetchCb: () => Ga(o),
            });
          });
        }
      }
      Wa.lambdas = {
        getTradeBuyPreFetchQuery: function () {
          var e = La.tradeBuyPreFetchQuery
            ? Object(a.a)({}, La.tradeBuyPreFetchQuery)
            : null;
          return (La.tradeBuyPreFetchQuery = null), e;
        },
        getTradeBuyPageData: function (e) {
          return Ua.apply(this, arguments);
        },
      };
      class Ha {
        constructor(e) {
          (this.ctx = e.ctx), new Wa(e);
        }
      }
      (Ha.lambdas = Object(a.a)({}, Wa.lambdas)),
        (Ha.widgets = {
          Main: Ta.a,
          PresentGoods: Da.a,
          Price: wa.a,
          OrderKeepDialog: Ba.a,
          OrderKeepNavigator: _a.a,
          OrderKeep: Ra.a,
          TradeCarousel: ja.a,
        });
      var za = r("BLrH"),
        Ka = r.n(za),
        Va = r("Bn8Z"),
        qa = r.n(Va),
        Ya = r("GK6D"),
        Ja = r.n(Ya),
        Za = r("39St"),
        Xa = r.n(Za),
        Qa = r("Tr4D"),
        $a = r.n(Qa),
        es = r("ZTAf"),
        ts = r.n(es),
        rs = r("o4Ah"),
        as = r.n(rs),
        ss = r("wQgs"),
        os = r.n(ss),
        is = r("Vcjw"),
        ns = r.n(is),
        ds = r("RGIK"),
        cs = r.n(ds),
        ls = r("UMX0"),
        us = r.n(ls),
        ps = r("0+jM"),
        hs = r.n(ps),
        ys = r("tbQw"),
        fs = r.n(ys),
        vs = r("1lCN"),
        ms = r.n(vs),
        gs = r("9+MI"),
        bs = r.n(gs),
        Cs = r("cDes"),
        Ps = r.n(Cs),
        Os = r("Qpnn"),
        Ss = r.n(Os),
        ks = r("Uhkc"),
        Ts = r.n(ks),
        Is = r("0+0Y"),
        ws = r.n(Is),
        xs = r("4eZy"),
        Ds = r.n(xs),
        Es = r("ERAv"),
        _s = r.n(Es),
        As = r("/d8j"),
        js = r.n(As),
        Ns = r("9ztX"),
        Rs = r.n(Ns),
        Fs = r("wdVi"),
        Bs = r.n(Fs),
        Ms = r("jFSB"),
        Ls = r.n(Ms),
        Gs = r("BGli"),
        Us = r.n(Gs),
        Ws = r("Xc4W"),
        Hs = r.n(Ws),
        zs = r("MB0q"),
        Ks = r.n(zs),
        Vs = r("bPIv"),
        qs = r.n(Vs),
        Ys = r("X219"),
        Js = r.n(Ys),
        Zs = r("dVPT"),
        Xs = r.n(Zs);
      class Qs {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      Qs.widgets = {
        Main: Ka.a,
        TradeBuyUmpBlock: Ls.a,
        BaseBlock: qa.a,
        ExtraFees: Ja.a,
        PrepayCardCell: Xa.a,
        FansCell: $a.a,
        ActivityCell: ts.a,
        ActivityDialog: as.a,
        PlusBuy: os.a,
        PlusBuySwipe: ns.a,
        PlusBuySwipeItem: cs.a,
        PlusBuyCard: us.a,
        CouponCell: hs.a,
        CouponList: fs.a,
        Postagetool: bs.a,
        PostagetoolTip: Ps.a,
        PostagetoolCard: Ss.a,
        FansDialog: Ts.a,
        CouponItem: ws.a,
        CouponListPopupBottom: ms.a,
        CouponContainer: Ds.a,
        MembershipCell: _s.a,
        PointCell: js.a,
        PointDeductionCell: Bs.a,
        MeituanCell: Rs.a,
        MembershipDialog: Us.a,
        PrepayCardPopup: Hs.a,
        PointDeductionPopup: Ks.a,
        PointWarnPopup: qs.a,
        AgreeDetailPopup: Js.a,
        DisplayCard: Xs.a,
      };
      var $s = 2;
      function eo(e, t) {
        var r,
          { blindBoxDistTypes: a = [], blindBoxSelfFetchKdtIds: s = [] } =
            (null == t || null == (r = t.order) ? void 0 : r.config) || {};
        return null != a &&
          a.includes($s) &&
          (null == s ? void 0 : s.length) > 0
          ? e.filter((e) => s.includes(null == e ? void 0 : e.kdtId))
          : e;
      }
      var to,
        ro = r("DXKY"),
        ao = r("81cE"),
        so = {
          state: {
            postage: {},
            themeColors: {},
            appShop: {},
            showExpressWayPopup: !1,
          },
          getters: {
            postageItems() {
              var e;
              return (
                (null == (e = this.postage) ? void 0 : e.postageItems) || []
              );
            },
            hasSomePostageItems() {
              var e;
              return (
                ((null == (e = this.postage) ? void 0 : e.postageItems) || [])
                  .length > 0
              );
            },
            hasMorePostageItems() {
              var e;
              return (
                ((null == (e = this.postage) ? void 0 : e.postageItems) || [])
                  .length > 1
              );
            },
            expressWaySelected() {
              var { currentExpressType: e } = this.postage,
                t = "number" == typeof e ? e : this.defaultExpressType,
                r = (this.postageItems || []).find((e) => e.expressType === t),
                s = r || {};
              return (
                r || ro.a.trigger("onSelectExpressWay", 0),
                Object(a.a)({}, s, {
                  postage: Object(ao.a)(s.postage, s.expressPayMode),
                })
              );
            },
            defaultExpressType() {
              var e;
              return (
                (
                  (
                    (null == (e = this.postage) ? void 0 : e.postageItems) || []
                  ).find((e) => e.available) || {}
                ).expressType || 0
              );
            },
            formattedPostageItems() {
              var e = this;
              return this.postageItems.map(function (t) {
                void 0 === t && (t = {});
                var r =
                  t.expressType === e.expressWaySelected.expressType
                    ? Object(ao.a)(t.postage, t.expressPayMode)
                    : "";
                return Object(a.a)({}, t, {
                  cellTitle: t.postageTitle + " " + r,
                });
              });
            },
            isRetailShop() {
              return Object(Jt.e)(this.appShop);
            },
          },
          getActions: function (e) {
            return {
              onExpressWayCellClick() {
                this.hasMorePostageItems && (this.showExpressWayPopup = !0);
              },
              onExpressWayClose() {
                this.showExpressWayPopup = !1;
              },
              onSelectExpressWay(t) {
                var { index: r, item: a } = t,
                  s = a || this.postageItems[r],
                  { currentExpressType: o } = this.postage;
                null != s &&
                  s.available &&
                  o !== s.expressType &&
                  (e.process.invoke("selectExpressType", s.expressType),
                  this.onExpressWayClose(),
                  e.logger &&
                    e.logger.log({
                      et: "custom",
                      ei: "trade_buy_set_express_way",
                      en: "切换配送方式",
                      pt: "trade",
                      params: { desc: JSON.stringify(s) },
                    }));
              },
            };
          },
        },
        oo = {
          state: {
            display: {},
            delivery: {},
            goods: {},
            retailHouseNumberRequired: !1,
          },
          getters: {
            hasGoods() {
              var e, t;
              return !(
                null == (e = this.goods) ||
                null == (t = e.list) ||
                !t.length
              );
            },
            showDeliveryScope() {
              return this.display.showLocalDeliveryScope && this.hasGoods;
            },
          },
        },
        io = r("o5pj"),
        no = {
          showAddressCard() {
            return this.display.showExpressTab;
          },
          hasAddress() {
            return !Object(io.b)(this.currentAddress);
          },
          maskedTel() {
            return this.receiveByGroupHeader
              ? String(this.currentAddress.tel).replace(
                  /\d{4}(\d{4})$/,
                  "****$1"
                )
              : this.currentAddress.tel;
          },
          addressArea() {
            return Object(mt.a)(this.currentAddress, 0, 5);
          },
          addressDetail() {
            return Object(mt.a)(this.currentAddress, 5);
          },
          showLocalDeliveryTime() {
            return this.hasGoods && this.display.showLocalDeliveryBucket;
          },
          addressVisible() {
            return !!this.address.visible;
          },
        },
        co = r("RyxV"),
        lo = {
          state: {
            address: {},
            display: {},
            currentAddress: {},
            receiveByGroupHeader: !1,
            expressType: "",
            addressEditable: !0,
            showGrouponHeader: !1,
            forcePoiSelect: !1,
            showAddressList: !1,
            showPoiPrompt: !0,
            themeColors: {},
            isShowRetailDeliveryAddress: !1,
            isShowForcePoiSelectAddress: !1,
            isHouseNumberRequired: !1,
            addressListIsDirty: !1,
          },
          getters: no,
          getActions: function (e) {
            return {
              onAddressCardClick() {
                this.addressEditable &&
                  ((this.addressListIsDirty = !0), (this.showAddressList = !0));
              },
              onAddressListClose() {
                this.showAddressList = !1;
              },
              onAddressCardEdit() {
                var { id: t, list: r } = this.address,
                  { forcePoiSelect: a } = this,
                  s = e.lambdas.setDb({
                    list: r,
                    forcePoiSelect: a,
                    id: t,
                    delta: 1,
                  }),
                  o =
                    this.isShowRetailDeliveryAddress ||
                    this.isShowForcePoiSelectAddress,
                  { isHouseNumberRequired: i } = this,
                  n =
                    "/packages/trade-buy-subpage/order/address-edit/index?" +
                    ("dbid=" +
                      s +
                      "&isShowRetailDeliveryAddress=" +
                      o +
                      "&houseNumberRequired=" +
                      i);
                E.default.navigate({ url: n, type: "navigateTo" });
              },
              logKeepAddress(t) {
                e.logger &&
                  e.logger.log({
                    et: "custom",
                    ei: "keep_address",
                    en: "保存并使用",
                    params: t,
                    si: e.data.kdtId,
                  });
              },
              onPlatformAddressSave(t, r) {
                U.a.loading(),
                  Object(co.a)(t)
                    .then((s) => {
                      U.a.clear();
                      var o = t.id || s.value || s,
                        i = Object(a.a)({}, t, { id: o });
                      this.logKeepAddress(i),
                        e.lambdas.triggerEvent("address-save", i),
                        e.process.invoke("updateAddressState", i),
                        "function" == typeof r && r();
                    })
                    .catch(function (e) {
                      void 0 === e && (e = {}), U.a.clear();
                    });
              },
              onAddressVisibleChange(t) {
                e.process.invoke("mutateState", (e) => {
                  e.address.visible = t;
                });
              },
            };
          },
        },
        uo = {
          tabs() {
            var e;
            return this.isRetailWeappScene
              ? [
                  { id: 1, value: "self-fetch", text: "自提" },
                  { id: 0, value: "express", text: "配送" },
                ]
              : null != (e = this.address) && e.isSelfFetchDefault
              ? [
                  { id: 1, value: "self-fetch", text: "到店自提" },
                  { id: 0, value: "express", text: "商家配送" },
                ]
              : [
                  { id: 0, value: "express", text: "商家配送" },
                  { id: 1, value: "self-fetch", text: "到店自提" },
                ];
          },
          showAddressTab() {
            var e, t;
            return (
              (null == (e = this.display) ? void 0 : e.showAddressTab) &&
              (null == (t = this.display) ? void 0 : t.showExpressTab) &&
              this.allowSelfFetch
            );
          },
          showAddressBackground() {
            var { tradeTag: e, display: t, env: r, groupon: a } = this,
              s =
                (null == e ? void 0 : e.hasOverseaGoods) &&
                (null == t ? void 0 : t.headPrompt) &&
                !(null != r && r.isPayPage),
              o =
                (null == a ? void 0 : a.isGroupon) ||
                (null == e ? void 0 : e.hasHotelGoods);
            return !s && !o;
          },
          activeTab() {
            var e;
            return null == (e = this.address) ? void 0 : e.activeTab;
          },
          allowSelfFetch() {
            var e;
            return null == (e = this.selfFetch) ? void 0 : e.isAllow;
          },
          slideStyle() {
            var e, t, r, a;
            return null != (e = this.address) && e.isSelfFetchDefault
              ? "self-fetch" === this.expressType
                ? "translateX(" +
                  100 *
                    ((null == (a = this.address) ? void 0 : a.activeTab) - 1) +
                  "%)"
                : "translateX(" +
                  100 *
                    ((null == (r = this.address) ? void 0 : r.activeTab) + 1) +
                  "%)"
              : "translateX(" +
                  100 *
                    ((null == (t = this.address) ? void 0 : t.activeTab) || 0) +
                  "%)";
          },
          isBadge() {
            return !!(
              this.storeGiftsInfo &&
              Object.keys(this.storeGiftsInfo).length &&
              1 !== this.activeTab &&
              (this.storeGiftsInfo.coupons.length ||
                this.storeGiftsInfo.couponsCode.length ||
                this.storeGiftsInfo.presents.length)
            );
          },
        },
        po = r("4Oq2"),
        ho = {
          state: {
            styleStr: "",
            expressType: "",
            themeColors: {},
            storeGiftsInfo: {},
            address: {},
            tradeTag: {},
            display: {},
            env: {},
            groupon: {},
            selfFetch: {},
            themeVars: "",
            isRetailWeappScene: !1,
          },
          getters: uo,
          getActions: function (e) {
            return {
              setNav() {
                po.a.canUseNav &&
                  (this.styleStr = "top:" + Object(po.b)() + "px");
              },
              onSwitchTab(t) {
                var r;
                if (
                  this.addressEditable &&
                  t !== (null == (r = this.address) ? void 0 : r.activeTab)
                ) {
                  var a = this.tabs.find((e) => e.id === t);
                  e.process.invoke("switchAddressTab", a),
                    e.process.invoke("fetchShow"),
                    e.logger &&
                      e.logger.log({
                        et: "custom",
                        ei: "trade_buy_set_address_tab",
                        en: "切换收货方式",
                        pt: "trade",
                        params: { desc: JSON.stringify(a) },
                      });
                }
              },
            };
          },
        },
        yo = {
          selfFetchShop() {
            var { shop: e } = this.selfFetch;
            return e || {};
          },
          isBlindBoxNeedGetDefaultSelfFetch() {
            var e,
              { blindBoxDistTypes: t = [] } =
                (null == (e = this.order) ? void 0 : e.config) || {};
            return !((null == t ? void 0 : t.length) > 0);
          },
        };
      to = { getItem: ae.b, removeItem: ae.c, setItem: ae.d };
      var fo = r("QBqv"),
        vo = r("60W9");
      var mo = {
          state: { order: {}, kdtId: 0, shop: {} },
          getters: yo,
          getActions: function (e) {
            return {
              pickDefaultSelfFetch() {
                var t = this;
                return Object(M.a)(function* () {
                  if (t.isBlindBoxNeedGetDefaultSelfFetch)
                    if (t.selfFetchShop.id) {
                      var r = yield e.env.getQueryAsync();
                      (function (e) {
                        var t;
                        try {
                          var r;
                          t =
                            null ==
                            (r = JSON.parse(
                              to.getItem("crossStoreSelfFetchCache")
                            ))
                              ? void 0
                              : r[e];
                        } catch (e) {}
                        return t;
                      })(r.bookKey || r.book_key) &&
                        e.process.invoke("setSelfFetch");
                    } else {
                      var s = (function () {
                        var e = Object(ae.b)(vo.a);
                        if (!e) return e;
                        try {
                          return JSON.parse(e);
                        } catch (e) {
                          return null;
                        }
                      })();
                      s &&
                        ((s.distanceStr = Object(fo.a)(
                          null == s ? void 0 : s.distance
                        )),
                        e.process.invoke(
                          "mutateState",
                          (e) => (
                            (e.selfFetch = Object(a.a)({}, e.selfFetch, {
                              shop: s,
                              cityCode: null == s ? void 0 : s.countyId,
                              cityName: null == s ? void 0 : s.city,
                            })),
                            ["selfFetch"]
                          )
                        ),
                        Object(ae.c)(vo.a));
                      var o = {
                        location: {},
                        kdtId: t.shop.kdtId || t.kdtId,
                        seller: (t.order || {}).seller,
                        goods: t.goods,
                        cityCode: t.selfFetch.cityCode,
                      };
                      try {
                        var { lat: i, lng: n } =
                          (null == E.default
                            ? void 0
                            : E.default.getGlobal(
                                "RETAIL_SHELF_CURRENT_LOCATION"
                              )) || {};
                        if (i && n)
                          (o.location = { lat: i, lng: n }),
                            E.default.setGlobal(
                              "RETAIL_SHELF_CURRENT_LOCATION",
                              null
                            );
                        else {
                          var [d] = yield e.process.invoke("getLocation"),
                            c = yield d;
                          o.location = c;
                        }
                      } catch (e) {}
                      try {
                        var l = yield e.process.invokePipe(
                            "hook:beforeGetDefaultSelfFetch",
                            o
                          ),
                          u = yield Object(fo.c)(l || o);
                        e.logger &&
                          e.logger.log({
                            et: "custom",
                            ei: "trade_buy_get_default_self_fetch",
                            en: "获取默认自提点",
                            pt: "trade",
                            params: {
                              desc: JSON.stringify({ shop: u, params: o }),
                            },
                          }),
                          e.process.invoke("setSelfFetch", {
                            shop: u,
                            cityCode: null == u ? void 0 : u.countyId,
                            cityName: null == u ? void 0 : u.city,
                          });
                      } catch (e) {}
                    }
                })();
              },
            };
          },
        },
        go = {
          state: {
            kdtId: 0,
            order: {},
            expressType: "",
            selfFetch: {},
            isScanCodeBuy: !1,
            contact: {},
            periodBuy: {},
            moduleLoadMaps: {
              contact: !1,
              idcard: !1,
              selffetch: !1,
              periodBuy: !1,
            },
          },
          getters: {
            showSelfFetch() {
              return (
                this.selfFetch.isAllow && "self-fetch" === this.expressType
              );
            },
            showIdcard() {
              return this.tradeTag.hasOverseaGoods && this.hasGoods;
            },
            showContact() {
              return this.contact.required;
            },
            showPeriodBuy() {
              return this.periodBuy && this.periodBuy.show;
            },
            showMain() {
              return (
                this.showAddressTab ||
                this.showSelfFetch ||
                this.showIdcard ||
                this.showPeriodBuy ||
                this.showContact ||
                ("express" === this.expressType &&
                  (this.showAddressCard ||
                    this.showDeliveryScope ||
                    this.showLocalDeliveryTime ||
                    this.hasSomePostageItems))
              );
            },
          },
          getActions: function (e) {
            return {
              changeModuleLoadStatus(e) {
                this.moduleLoadMaps = Object(a.a)({}, this.moduleLoadMaps, {
                  [e]: !0,
                });
              },
            };
          },
          registerWatchs: function (e) {
            var t = {
              showSelfFetch: "selffetch",
              showIdcard: "idcard",
              showContact: "contact",
              showPeriodBuy: "periodBuy",
            };
            Object.keys(t).forEach((r) => {
              e.watch(
                r,
                (a) => {
                  a && e.changeModuleLoadStatus(t[r]);
                },
                { immediate: !0 }
              );
            });
          },
        },
        bo = [
          {
            state: { pageStyleConfig: {}, themeTag: {} },
            getters: {},
            actions: {},
          },
          so,
          oo,
          lo,
          ho,
          mo,
          go,
        ].reduce((e, t) => {
          return (
            void 0 === (r = e) && (r = {}),
            void 0 === (s = t) && (s = {}),
            {
              state: Object(a.a)({}, r.state, s.state),
              getters: Object(a.a)({}, r.getters, s.getters),
              actions: Object(a.a)({}, r.actions, s.actions),
            }
          );
          var r, s;
        }, {});
      function Co(e) {
        var t = Object(tt.a)({
          state: () => Object(a.a)({}, bo.state),
          getters: Object(a.a)({}, bo.getters),
          actions: Object(a.a)(
            {},
            bo.actions,
            so.getActions(e),
            lo.getActions(e),
            ho.getActions(e),
            mo.getActions(e),
            go.getActions(e)
          ),
        });
        return (
          ((e) => {
            go.registerWatchs(e);
          })(t),
          t
        );
      }
      class Po {
        constructor(e) {
          (this.ctx = e.ctx), this.handleScanCodeBuy();
        }
        handleScanCodeBuy() {
          (this.scanCodeBuyHandled = !1),
            Object(H.b)(
              this,
              ["isScanCodeBuy", "expressType", "selfFetch", "contact"],
              {
                callback: () => {
                  if (!this.scanCodeBuyHandled) {
                    var e,
                      {
                        isScanCodeBuy: t,
                        expressType: r,
                        selfFetch: a = {},
                        contact: s,
                        shop: o = {},
                      } = this.ctx.data;
                    if (
                      t &&
                      "self-fetch" === r &&
                      a.isAllow &&
                      s &&
                      ((this.scanCodeBuyHandled = !0),
                      ((e = o.kdtId),
                      Object(ie.default)({
                        origin: "h5",
                        method: "GET",
                        path: "/wsctrade/scancodebuy/address/get-mock-self-fetch.json",
                        data: { kdtId: e },
                      })
                        .then((e) => e || {})
                        .catch(() => ({}))).then((e) => {
                        this.ctx.process.invoke("setSelfFetch", { shop: e });
                      }),
                      !s.id)
                    ) {
                      var i = getApp(),
                        { nickname: n, mobile: d } = i.getUserInfoSync();
                      if (n && d)
                        return this.ctx.process.invoke("saveContact", {
                          userName: n,
                          telephone: d,
                        });
                    }
                  }
                },
              }
            );
        }
      }
      var Oo = r("hVWO"),
        So = r.n(Oo),
        ko = r("AilZ"),
        To = r.n(ko),
        Io = r("Vh6x"),
        wo = r.n(Io),
        xo = r("Fi4Z"),
        Do = r.n(xo),
        Eo = r("V2DQ"),
        _o = r.n(Eo),
        Ao = r("H2q5"),
        jo = r.n(Ao),
        No = r("4IS5"),
        Ro = r.n(No),
        Fo = r("S8ul"),
        Bo = r.n(Fo),
        Mo = r("soIK"),
        Lo = r.n(Mo),
        Go = r("m6nx"),
        Uo = r.n(Go),
        Wo = r("wzDK"),
        Ho = r.n(Wo),
        zo = r("EMVi"),
        Ko = r.n(zo),
        Vo = r("x65I"),
        qo = r.n(Vo),
        Yo = r("jaju"),
        Jo = r.n(Yo),
        Zo = r("rpEa"),
        Xo = r.n(Zo),
        Qo = r("lfzi"),
        $o = r.n(Qo),
        ei = r("X/5q"),
        ti = r.n(ei),
        ri = r("Dksy");
      class ai {
        constructor(e) {
          var t,
            r = this;
          (this.getSelfFetchShopList = (function () {
            var e = Object(M.a)(function* (e) {
              void 0 === e && (e = {});
              var { state: t } = r.ctx.data,
                { goods: s, selfFetch: o, location: i, shop: n } = t,
                { cityCode: d, list: c = [], page: l = 1 } = o,
                { lat: u, lng: p } = i,
                h = [].concat(s.list, s.unavailable),
                { keyword: y = "", pageSize: f = 10, getAll: v = !1 } = e,
                m = {
                  kdtId: n.kdtId,
                  keyword: y,
                  page: l,
                  pageSize: f,
                  items: h.map((e) => ({
                    goodsId: e.goodsId,
                    skuId: e.skuId,
                    num: e.num,
                  })),
                },
                g = [];
              d && (m.cityCode = d), u && p && ((m.lat = u), (m.lng = p));
              var b = g.filter(
                (e) =>
                  m.keyword === e.keyword &&
                  m.cityCode === e.cityCode &&
                  m.page === e.page
              )[0];
              if (b) {
                var C = !1;
                return (
                  b.list.length < f && (C = !0),
                  void (yield r.ctx.process.invokePipe("setSelfFetch", {
                    page: l + 1,
                    finished: C,
                    list: b.list,
                  }))
                );
              }
              return Object(ie.default)({
                origin: "cashier",
                withCredentials: !0,
                path: "/pay/wsctrade/order/buy/v3/getSelfFetchList.json",
                method: "POST",
                data: m,
              })
                .then(
                  (function () {
                    var s = Object(M.a)(function* (s) {
                      var { list: o } = s;
                      (o = (function (e, t) {
                        return eo(e, t);
                      })((o = o || []), t)),
                        g.push(Object(a.a)({}, m, { list: o }));
                      var i = !1;
                      return (
                        o.length < f && (i = !0),
                        yield r.ctx.process.invokePipe("setSelfFetch", {
                          page: l + 1,
                          finished: i,
                          list: [...c, ...o],
                        }),
                        v && !i
                          ? r.getSelfFetchShopList(e)
                          : v && i
                          ? [...c, ...o]
                          : void 0
                      );
                    });
                    return function (e) {
                      return s.apply(this, arguments);
                    };
                  })()
                )
                .catch(() => {
                  r.ctx.process.invokePipe("setSelfFetch", { finished: !0 });
                });
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })()),
            (this.ctx = e.ctx),
            new Po(e),
            (t = this).ctx.store
              ? (t.store = t.ctx.store)
              : ((t.ctx.store = Co(t.ctx)),
                (t.store = t.ctx.store),
                Object(tt.c)(t, [
                  "themeTag",
                  "pageStyleConfig",
                  "postage",
                  "appShop",
                  "themeColors",
                  "display",
                  "delivery",
                  "goods",
                  "address",
                  "currentAddress",
                  "receiveByGroupHeader",
                  "forcePoiSelect",
                  "showPoiPrompt",
                  "expressType",
                  "addressEditable",
                  "isShowRetailDeliveryAddress",
                  "retailHouseNumberRequired",
                  "isShowForcePoiSelectAddress",
                  "isHouseNumberRequired",
                  "storeGiftsInfo",
                  "tradeTag",
                  "env",
                  "groupon",
                  "selfFetch",
                  "themeVars",
                  "isScanCodeBuy",
                  "contact",
                  "periodBuy",
                  "order",
                  "kdtId",
                  "isRetailWeappScene",
                  "shop",
                ])),
            (this.ctx.data.cloudData = {
              displayConfig: { isShowWechatAddress: !0 },
            }),
            this.initProcess(),
            this.initCloudData();
        }
        initProcess() {
          this.ctx.process.define("onExpressChanged", () => {
            this.ctx.cloud.emit("onExpressChanged", this.deliveryV1);
          }),
            Object(H.e)(this, {
              selectDelivery: (e) => {
                this.store.onSwitchTab(e);
              },
              pickDefaultSelfFetch: this.store.pickDefaultSelfFetch,
              switchDeliveryTab: (e) => {
                this.store.onSwitchTab(e);
              },
              handleCreateOrderError: (e) => {
                var { code: t, msg: r } = e.error;
                if (ri.a.RECEIVER_NEED_REALNAME === t) {
                  var { address: a } = this.ctx.data.state,
                    { id: s, list: o } = a,
                    { forcePoiSelect: i } = this.ctx.data,
                    n = E.default.getGlobal("addressBlockDialogRef");
                  return (
                    W.a
                      .confirm({
                        title: "请填写收货人真实姓名",
                        message: r,
                        confirmButtonText: "去修改",
                        ref: n,
                      })
                      .then(() => {
                        var e = this.ctx.lambdas.setDb({
                          id: s,
                          list: o,
                          forcePoiSelect: i,
                          delta: 1,
                        });
                        this.toAddressEditPage(e);
                      }),
                    Promise.reject(e)
                  );
                }
                return e;
              },
            });
        }
        toAddressEditPage(e) {
          var {
              isHouseNumberRequired: t,
              isShowForcePoiSelectAddress: r = !1,
            } = this.ctx.data,
            a =
              "/packages/trade-buy-subpage/order/address-edit/index?" +
              ("dbid=" +
                e +
                "&isShowRetailDeliveryAddress=" +
                (this.ctx.data.isShowRetailDeliveryAddress || r) +
                "&houseNumberRequired=" +
                t);
          wx.navigateTo({ url: a });
        }
        initCloudData() {}
      }
      ai.widgets = {
        Main: So.a,
        DeliveryMain: To.a,
        AddressList: wo.a,
        AddressListItem: Do.a,
        LocalDeliveryTimeCell: _o.a,
        SelfFetch: jo.a,
        ContactMain: Ro.a,
        WechatAddress: Bo.a,
        WxAddress: Lo.a,
        AliAddress: Uo.a,
        XhsAddress: Ho.a,
        IdcardMain: Ko.a,
        IdcardPopup: qo.a,
        PeriodBuy: Jo.a,
        AddressCard: Xo.a,
        DeliveryBlock: $o.a,
        AddressTab: ti.a,
      };
      var si = r("t4Qa"),
        oi = r.n(si),
        ii = r("I3+V"),
        ni = r.n(ii),
        di = r("luLG"),
        ci = r.n(di);
      class li {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      li.widgets = { Main: oi.a, Guide: ni.a, HeaderContent: ci.a };
      var ui = r("ONqW");
      var pi;
      pi = getApp();
      class hi {
        constructor(e) {
          (this.ctx = e.ctx), this.initProcess(this.ctx);
        }
        initProcess(e) {
          var { process: t } = e;
          t.define("logCreateOrder", () =>
            (function (e) {
              var { state: t, globalData: r } = e,
                { adData: a = {} } = r,
                { orderNos: s } = t.order,
                {
                  prepay: o,
                  prepaySuccess: i,
                  prepayId: n = "",
                } = (t.pay && t.pay.prepayParams) || {};
              Array.isArray(s) &&
                s.forEach((e) => {
                  var r = {
                    type: "normal",
                    prepay_id: n,
                    order_no: e,
                    orders_combine_id: t.order.orderNo,
                    guarantee_on: t.display.yzGuarantee,
                  };
                  a.gdtVid && (r.click_id = a.gdtVid),
                    Object(ui.a)().log({
                      et: "click",
                      ei: "orderCreate",
                      en: "下单",
                      params: r,
                    }),
                    o &&
                      Object(ui.a)().log({
                        et: "custom",
                        ei: "prepay",
                        en: "预下单",
                        params: { type: i ? "success" : "error", prepay_id: n },
                      });
                });
            })({ state: e.data.state, globalData: pi.globalData })
          ),
            t.define("logFocusMessage", () => {
              Object(ui.a)().log({
                et: "click",
                ei: "order_message",
                en: "订单留言",
              });
            }),
            t.define("logClickAddress", () =>
              (function (e) {
                var { expressType: t, kdtId: r } = e;
                Object(ui.a)().log({
                  et: "click",
                  ei: "address_change",
                  en: "更换地址",
                  params: { address: t },
                  si: r,
                });
              })({ expressType: e.data.expressType, kdtId: e.data.kdtId })
            ),
            t.define("logClickPayType", (t) =>
              (function (e) {
                var { state: t, payType: r = {}, kdtId: a } = e,
                  { prepayId: s = "" } = (t.pay && t.pay.prepayParams) || {};
                Object(ui.a)().log({
                  et: "click",
                  ei: "pay_item",
                  en: "选择支付方式",
                  params: {
                    type: "normal",
                    prepay_id: s,
                    pay_channel: r.pay_channel,
                    pay_channel_name: r.pay_channel_name,
                  },
                  si: a,
                });
              })({ state: e.data.state, kdtId: e.data.kdtId, payType: t })
            ),
            t.define("logPaySuccess", (t) =>
              (function (e) {
                var { params: t, kdtId: r } = e;
                Object(ui.a)().log({
                  et: "click",
                  ei: "pay_success",
                  en: "支付成功",
                  params: t,
                  si: r,
                }),
                  Object(ui.a)().log({
                    et: "click",
                    ei: "order_pay_success",
                    en: "支付成功",
                    params: t,
                    si: r,
                  });
              })({ params: t, kdtId: e.data.kdtId })
            ),
            t.define("logEditAddress", (t) =>
              (function (e) {
                var { address: t, kdtId: r } = e;
                Object(ui.a)().log({
                  et: "click",
                  ei: "edit_address",
                  en: "编辑地址",
                  params: t,
                  si: r,
                });
              })({ address: t, kdtId: e.data.kdtId })
            ),
            t.define("logAddAddress", () =>
              (function (e) {
                var { kdtId: t } = e;
                Object(ui.a)().log({
                  et: "click",
                  ei: "click_address",
                  en: "新增地址",
                  si: t,
                });
              })({ kdtId: e.data.kdtId })
            ),
            t.define("logClickPrivacy", () =>
              (function (e) {
                var { state: t } = e;
                Object(ui.a)().log({
                  et: "click",
                  ei: "click_privacy_policyq",
                  en: "点击隐私政策",
                  params: {
                    goods_list: t.order.items.map((e) =>
                      Object(Y.a)(e, [
                        "skuId",
                        "goodsId",
                        "goodsType",
                        "price",
                        "payPrice",
                        "num",
                        "groupIds",
                        "itemBizMarkCode",
                      ])
                    ),
                    order_amount: t.pay.itemPay,
                    logistics_price: t.pay.postage,
                  },
                });
              })({ state: e.data.state })
            ),
            t.define("logUserAgreement", () =>
              (function (e) {
                var { state: t } = e;
                Object(ui.a)().log({
                  et: "click",
                  ei: "click_user_agreement",
                  en: "点击用户协议",
                  params: {
                    goods_list: t.order.items.map((e) =>
                      Object(Y.a)(e, [
                        "skuId",
                        "goodsId",
                        "goodsType",
                        "price",
                        "payPrice",
                        "num",
                        "groupIds",
                        "itemBizMarkCode",
                      ])
                    ),
                    order_amount: t.pay.itemPay,
                    logistics_price: t.pay.postage,
                  },
                });
              })({ state: e.data.state })
            );
        }
      }
      var yi = r("wxzO"),
        fi = r.n(yi);
      class vi {
        constructor(e) {
          (this.ctx = e.ctx), new hi(e);
        }
      }
      vi.widgets = { HaitaoFooterNotice: fi.a };
      var mi = r("Bb/d"),
        gi = r.n(mi);
      class bi {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      bi.widgets = { Main: gi.a };
      var Ci = r("f9uZ"),
        Pi = r("GZcT"),
        Oi = r.n(Pi),
        Si = r("hEKJ"),
        ki = r.n(Si),
        Ti = {
          state: { orderFinalPrice: "", prepareData: {} },
          getters: {
            isPreCashierPay() {
              var e,
                t,
                r =
                  (null == (e = this.prepareData) ||
                  null == (t = e.usePreCashierPay)
                    ? void 0
                    : t.value) || !1,
                a = (() => {
                  var e = !1,
                    t = !1;
                  try {
                    (e = JSON.parse(!1)), (t = JSON.parse(!1));
                  } catch (e) {}
                  return e || t;
                })();
              return !(!r || a || !ki()(this.orderFinalPrice));
            },
          },
        };
      var Ii = r("ih9H"),
        wi = r.n(Ii);
      class xi {
        constructor(e) {
          (this.ctx = e.ctx),
            (this.store =
              (this.ctx,
              Object(tt.a)({
                state: () => Object(a.a)({}, Ti.state),
                getters: Object(a.a)({}, Ti.getters),
                actions: {},
              }))),
            Object(tt.c)(this, ["orderFinalPrice", "prepareData"]),
            (this.ctx.data.viewportMargins = { bottom: -110 });
        }
      }
      xi.widgets = { Main: Oi.a, CashierPre: wi.a };
      var Di = r("RsP2"),
        Ei = r.n(Di);
      class _i {
        constructor(e) {
          (this.ctx = e.ctx),
            (this.widget = { widget: Ei.a }),
            this.ctx.env.getQueryAsync().then((e) => {
              var t,
                r,
                { retailOrderScene: a = "" } = e;
              (this.isRetailOrderScene = "24hshelf" === a),
                Object(Jt.e)(
                  null != (t = null == (r = this.ctx.data) ? void 0 : r.shop)
                    ? t
                    : {}
                )
                  ? this.initPreHooks()
                  : (this.ctx.process.define(
                      "callHookAfterFetchState",
                      function (e) {
                        return void 0 === e && (e = {}), Promise.resolve(e);
                      }
                    ),
                    this.ctx.process.define(
                      "callHookGenConfirmParams",
                      function (e) {
                        return void 0 === e && (e = {}), Promise.resolve(e);
                      }
                    ));
            });
        }
        initPreHooks() {
          var e = this;
          this.ctx.process.define("callHookAfterFetchState", function (t) {
            void 0 === t && (t = {});
            var {
                display: {
                  canSelfFetch: r,
                  showExpressTab: a,
                  showLocalDeliveryTab: s,
                  localDeliveryLackFeeStr: o,
                  localDeliveryStartFeeStr: i,
                },
                goods: n,
                deliveryCheck: { shopNotSupportReasonList: d = [] } = {},
                address: { id: c = [], list: l = [] } = {},
                shop: { kdtId: u } = {},
                postage: { postageItems: p = [], currentExpressType: h } = {},
                extra: y = {},
              } = t,
              f = d.some((e) => 3003 == +e.type),
              v = d.some((e) => 1001 == +e.type),
              m = l.find((e) => e.id === c),
              g = p.some((e) => 0 == +e.expressType);
            return (
              (e.ctx.data.retailOrderErrorInfo = {
                canSelfFetch: r,
                showExpressTab: a,
                isSupportExpress: g,
                showLocalDeliveryTab: s,
                showOutOfDeliveryPop: v,
                showNotEnoughPricePop: f,
                showNeedRequiredPop: "0" === y.HAVE_MUST_ITEMS,
                localDeliveryStartFeeStr: i,
                localDeliveryLackFeeStr: o,
                goods: n,
                currentAddress: m,
                currentExpressType: h,
                orderKdtId: u,
                isRetailOrderScene: e.isRetailOrderScene,
                shouldResetCoupons: f || v,
              }),
              Promise.resolve(t)
            );
          }),
            this.ctx.process.define("callHookGenConfirmParams", function (t) {
              return (
                void 0 === t && (t = {}), Promise.resolve(e.setRetailParams(t))
              );
            });
        }
        setRetailParams(e) {
          if (!this.ctx.data.retailOrderErrorInfo) return e;
          var { shouldResetCoupons: t = !1, currentExpressType: r } =
              this.ctx.data.retailOrderErrorInfo,
            { delivery: s = {}, extensions: o = {} } = e;
          return (
            Object.prototype.hasOwnProperty.call(s, "expressTypeChoice") ||
              1 == +r ||
              (s.expressTypeChoice = r),
            t && (o.CHANGE_EXPRESS_RESET_COUPONS = "1"),
            Object(a.a)({}, e, { delivery: s, extensions: o })
          );
        }
      }
      _i.widgets = { Main: Ei.a };
      var Ai = r("tSrz"),
        ji = r.n(Ai);
      class Ni {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      Ni.widgets = { Main: ji.a };
      var Ri,
        Fi = r("qnge"),
        Bi = r("vzTj");
      function Mi(e, t) {
        (t = t || {}),
          K.a.log({
            appName: "wsc",
            logIndex: "new_wsc_weapp_log",
            level: "info",
            name: "[weapp]-wxvideo-" + e,
            message: JSON.stringify(t),
          });
      }
      var Li = {};
      null == (Ri = E.default.$native) ||
        null == Ri.onAppHide ||
        Ri.onAppHide(() => {
          Li = {};
        });
      var Gi,
        Ui = {};
      Ui = getApp();
      var Wi = "",
        Hi = () => {
          var e;
          (e = { orderNo: Wi }),
            Object(ie.default)({
              method: "POST",
              path: "/wscwxvideo/trade-module/updateOrderMultipleExt.json",
              data: e,
            });
        },
        zi = {};
      null == (Gi = E.default.$native) ||
        null == Gi.onAppHide ||
        Gi.onAppHide(() => {
          zi = {};
        });
      var Ki = (e) => {
          var t, r, a, s;
          return null != (t = zi) &&
            t.checkOrderSyncWechatResult &&
            Object.prototype.hasOwnProperty.call(
              null == (r = zi) ? void 0 : r.checkOrderSyncWechatResult,
              e
            )
            ? null == (a = zi)
              ? void 0
              : a.checkOrderSyncWechatResult[e]
            : ((s = { orderNo: e }),
              Object(ie.default)({
                path: "/wscwxvideo/trade-module/checkOrderSyncWechat.json",
                data: s,
              }))
                .then((t) => {
                  var r;
                  return (
                    null != (r = zi) && r.checkOrderSyncWechatResult
                      ? (zi.checkOrderSyncWechatResult[e] = t)
                      : (zi.checkOrderSyncWechatResult = { [e]: t }),
                    t
                  );
                })
                .catch(
                  (t) => (
                    Mi("交易组件下单--待支付页查询订单是否同步微信失败", {
                      orderNo: e,
                      error: t,
                    }),
                    !1
                  )
                );
        },
        Vi = function (e) {
          return {
            startWxVideoPay:
              ((t = Object(M.a)(function* (t, r) {
                if (
                  (void 0 === r && (r = !1),
                  E.default.$native.canIUse("requestOrderPayment"))
                ) {
                  var a,
                    { orderNo: s, wxOrderInfo: o } = t,
                    { payState: i, state: n } = e.data;
                  if (i && !n)
                    try {
                      if (!(yield Ki(s)))
                        return void Object(U.a)("网络异常，请重新下单");
                    } catch (e) {
                      return (
                        (null == e ? void 0 : e.msg) && Object(U.a)(e.msg),
                        void Mi("交易组件3.0支付-待支付页支付验证报错", {
                          e: e,
                          orderNo: s,
                        })
                      );
                    }
                  try {
                    var { scene: d } =
                        wx && wx.getEnterOptionsSync
                          ? wx.getEnterOptionsSync() || {}
                          : wx.getLaunchOptionsSync() || {},
                      { openId: c } = Ui.getToken() || {};
                    (Wi = s),
                      ((e) => {
                        e.event.remove("cashier:pay:success", Hi),
                          e.event.once("cashier:pay:success", Hi);
                      })(e);
                    var { traceId: l } = yield e.lambdas
                        .checkBeforeAddOrderPromise()
                        .catch(() => ({})),
                      { outOrderId: u } = yield ((a = {
                        orderNo: s,
                        openId: c,
                        scene: String(d),
                        traceId: l,
                      }),
                      Object(ie.default)({
                        method: "POST",
                        path: "/wscwxvideo/trade-module/createOrder.json",
                        data: a,
                      })),
                      p = ((e) => {
                        var { payParams: t, wxOrderInfo: r, orderNo: a } = e,
                          {
                            nonceStr: s,
                            prepayId: o,
                            signType: i,
                            timeStamp: n,
                            paySign: d,
                          } = t || {};
                        return {
                          nonceStr: s,
                          package: o,
                          signType: i,
                          timeStamp: n,
                          paySign: d,
                          orderNo: a,
                          orderInfo: r,
                        };
                      })({
                        payParams: yield ((e) =>
                          Object(ie.default)({
                            path: "/wscwxvideo/trade-module/getPaymentParams.json",
                            data: e,
                          }))({ orderNo: s, openId: c, outOrderId: String(u) }),
                        wxOrderInfo: o,
                        orderNo: s,
                      });
                    r
                      ? e.process.invoke("requestOrderPayment_preCashier", p)
                      : e.process.invoke("requestOrderPayment", p);
                  } catch (e) {
                    (null == e ? void 0 : e.msg) && Object(U.a)(e.msg),
                      Mi("交易组件3.0支付流程错误", { e: e, orderNo: s });
                  }
                } else Object(U.a)("请升级微信版本至8.2");
              })),
              function (e, r) {
                return t.apply(this, arguments);
              }),
          };
          var t;
        },
        qi = function (e) {
          var t = [
            ...Object.entries(
              (function (e) {
                var t = (function () {
                    var t = Object(M.a)(function* (t) {
                      return Object(ie.default)({
                        origin: "cashier",
                        withCredentials: !0,
                        path: "/pay/wsctrade/order/buy/wx-order-info",
                        data: { orderNo: t },
                      })
                        .then(
                          (t) => ((e.data.shoppingComponent.orderInfo = t), t)
                        )
                        .catch(
                          (e) => (
                            Mi("交易组件下单--调用wx-order-info失败", e), null
                          )
                        );
                    });
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                  r = (function () {
                    var t = Object(M.a)(function* () {
                      var t,
                        r,
                        s = {
                          sceneCheck: !1,
                          checkBeforeAddOrderResult: null,
                          isOpenWeappUnion: !1,
                        },
                        { scene: o } =
                          (null == E.default.$native.getEnterOptionsSync
                            ? void 0
                            : E.default.$native.getEnterOptionsSync()) ||
                          (null == E.default.$native.getLaunchOptionsSync
                            ? void 0
                            : E.default.$native.getLaunchOptionsSync()) ||
                          {};
                      return (
                        null != (t = Li) && t.sceneCheckResult
                          ? Promise.resolve(
                              null == (r = Li) ? void 0 : r.sceneCheckResult
                            )
                          : Object(ie.default)({
                              origin: "cashier",
                              withCredentials: !0,
                              path: "/pay/wsctrade/order/buy/scene/check-compatible",
                              data: { scene: o },
                            }).then((e) => ((Li.sceneCheckResult = e), e))
                      )
                        .then((t) =>
                          e.lambdas
                            .checkBeforeAddOrderPromise()
                            .then((r) => {
                              var a = {
                                checkBeforeAddOrderResult: r,
                                sceneCheck: null == t ? void 0 : t.sceneCheck,
                                isOpenWeappUnion:
                                  null == t ? void 0 : t.isOpenWeappUnion,
                              };
                              return (
                                (e.data.shoppingComponent.sceneCheckResult = a),
                                a
                              );
                            })
                            .catch(() => {
                              var r = Object(a.a)({}, s, {
                                sceneCheck: null == t ? void 0 : t.sceneCheck,
                                isOpenWeappUnion:
                                  null == t ? void 0 : t.isOpenWeappUnion,
                              });
                              return (
                                (e.data.shoppingComponent.sceneCheckResult = r),
                                r
                              );
                            })
                        )
                        .catch(
                          (t) => (
                            Mi("交易组件下单--调用scene/check失败", t),
                            e.lambdas
                              .checkBeforeAddOrderPromise()
                              .then((t) => {
                                var r = {
                                  checkBeforeAddOrderResult: t,
                                  sceneCheck: !1,
                                  isOpenWeappUnion: !1,
                                };
                                return (
                                  (e.data.shoppingComponent.sceneCheckResult =
                                    r),
                                  r
                                );
                              })
                              .catch(() => s)
                          )
                        );
                    });
                    return function () {
                      return t.apply(this, arguments);
                    };
                  })(),
                  s = (function () {
                    var t = Object(M.a)(function* () {
                      var t,
                        a,
                        s,
                        o,
                        i = {
                          shouldSyncOrder: !1,
                          shouldSyncOrderV2: !1,
                          shouldSyncOrderV3: !1,
                          shouldSyncOrderWithOpenFlowInTradeModuleV3: !1,
                        },
                        {
                          payState: n,
                          state: d,
                          shoppingComponent: c,
                        } = e.data,
                        l = n && !d,
                        u = d && !n,
                        p =
                          (null == n || null == (t = n.order)
                            ? void 0
                            : t.extentions) ||
                          (null == d || null == (a = d.order)
                            ? void 0
                            : a.extensions) ||
                          {},
                        h =
                          null != c && c.sceneCheckResult
                            ? null == c
                              ? void 0
                              : c.sceneCheckResult
                            : yield r(),
                        y = {};
                      try {
                        y = JSON.parse(
                          (null == p ? void 0 : p.BIZ_ORDER_ATTRIBUTE) || "{}"
                        );
                      } catch (e) {
                        return (
                          Mi("交易组件下单--BIZ_ORDER_ATTRIBUTE解析失败", e), i
                        );
                      }
                      var f,
                        v,
                        m,
                        g = "TRUE" === y.TRADE_MODULE_ORDER,
                        b =
                          "TRUE" === y.TRADE_MODULE_ORDER &&
                          "3.0" === y.OPEN_TRADE_MODULE_VERSION,
                        C =
                          "TRADE_COMPONENT_3_0" ===
                          y.WX_CHANNELS_COMPONENT_CREATE,
                        P = l && C;
                      return l ||
                        g ||
                        1 !==
                          (null == h ||
                          null == (s = h.checkBeforeAddOrderResult)
                            ? void 0
                            : s.requireOrder) ||
                        2 ===
                          (null == h ||
                          null == (o = h.checkBeforeAddOrderResult)
                            ? void 0
                            : o.requiredFundType)
                        ? g ||
                          (null != h && h.sceneCheck) ||
                          (null != h && h.isOpenWeappUnion) ||
                          P
                          ? e.lambdas
                              .getTradeModuleStatus()
                              .then(function (e) {
                                void 0 === e && (e = {});
                                var t =
                                    h.sceneCheck &&
                                    e.WEAPP_TRADE_MODULE_IS_ENABLE,
                                  r =
                                    g &&
                                    e.WEAPP_TRADE_MODULE_IS_OPEN &&
                                    !e.WEAPP_TRADE_MODULE_IS_ENABLE,
                                  a =
                                    h.isOpenWeappUnion &&
                                    e.WEAPP_TRADE_MODULE_IS_ENABLE,
                                  s = t || r || a,
                                  o =
                                    u &&
                                    h.sceneCheck &&
                                    e.WEAPP_TRADE_MODULE_V3_IS_ENABLE,
                                  i =
                                    u &&
                                    b &&
                                    e.WEAPP_TRADE_MODULE_V3_IS_OPEN &&
                                    !e.WEAPP_TRADE_MODULE_V3_IS_ENABLE,
                                  n = o || i,
                                  d =
                                    l &&
                                    b &&
                                    e.WEAPP_TRADE_MODULE_V3_IS_OPEN &&
                                    !e.WEAPP_TRADE_MODULE_V3_IS_ENABLE,
                                  c =
                                    (P && e.WEAPP_TRADE_MODULE_V3_IS_ENABLE) ||
                                    (P && d),
                                  p = n || c;
                                return {
                                  shouldSyncOrder: s || p,
                                  shouldSyncOrderV2: s,
                                  shouldSyncOrderV3: p,
                                  shouldSyncOrderWithOpenFlowInTradeModuleV3: i,
                                };
                              })
                              .catch(
                                (e) => (
                                  Mi(
                                    "交易组件下单--获取交易组件接入信息失败",
                                    e
                                  ),
                                  i
                                )
                              )
                          : i
                        : Promise.resolve({
                            shouldSyncOrder: !0,
                            shouldSyncOrderV2:
                              0 ===
                              (null == h ||
                              null == (f = h.checkBeforeAddOrderResult)
                                ? void 0
                                : f.requiredFundType),
                            shouldSyncOrderV3:
                              1 ===
                                (null == h ||
                                null == (v = h.checkBeforeAddOrderResult)
                                  ? void 0
                                  : v.requiredFundType) ||
                              2 ===
                                (null == h ||
                                null == (m = h.checkBeforeAddOrderResult)
                                  ? void 0
                                  : m.requiredFundType),
                            shouldSyncOrderWithOpenFlowInTradeModuleV3: !1,
                          });
                    });
                    return function () {
                      return t.apply(this, arguments);
                    };
                  })(),
                  o = () =>
                    s()
                      .then((e) => (null == e ? void 0 : e.shouldSyncOrder))
                      .catch(() => !1),
                  i = () =>
                    s()
                      .then((t) => {
                        var { shoppingComponent: r } = e.data,
                          { shouldSyncOrderV3: a } = t;
                        return (
                          a && (r.useWxvideoPayFlow = !0), !!r.useWxvideoPayFlow
                        );
                      })
                      .catch(() => !1),
                  n = (function () {
                    var r = Object(M.a)(function* () {
                      return o()
                        .catch(() => !1)
                        .then((r) => {
                          if (r) {
                            var a,
                              s =
                                null == (a = e.data.payState.order)
                                  ? void 0
                                  : a.orderNo;
                            return i().then(() => t(s));
                          }
                          return Promise.resolve();
                        });
                    });
                    return function () {
                      return r.apply(this, arguments);
                    };
                  })(),
                  d = (function () {
                    var r = Object(M.a)(function* () {
                      return o()
                        .catch(() => !1)
                        .then((r) => {
                          if (r) {
                            var a,
                              s =
                                null == (a = e.data.state.order)
                                  ? void 0
                                  : a.orderNo;
                            return i().then(() => t(s));
                          }
                          return Promise.resolve();
                        });
                    });
                    return function () {
                      return r.apply(this, arguments);
                    };
                  })();
                return {
                  sceneCheck: r,
                  getIsSyncOrder: o,
                  getWxOrderInfoTradePay: n,
                  getWxOrderInfoTradeBuy: d,
                  genCreateOrderParams: (function () {
                    var t = Object(M.a)(function* (t) {
                      return Promise.resolve(t)
                        .then((e) =>
                          s()
                            .then((t) => {
                              var {
                                shouldSyncOrderWithOpenFlowInTradeModuleV3: r,
                              } = t;
                              if (r) {
                                if (null == e || !e.extensions) return e;
                                var a =
                                  e.extensions.BIZ_ORDER_ATTRIBUTE || "{}";
                                try {
                                  var s = JSON.parse(a);
                                  (s.WX_CHANNELS_COMPONENT_CREATE =
                                    "TRADE_COMPONENT_3_0"),
                                    (a = JSON.stringify(s));
                                } catch (e) {}
                                e.extensions.BIZ_ORDER_ATTRIBUTE = a;
                              }
                              return e;
                            })
                            .catch(() => e)
                        )
                        .then((t) =>
                          i()
                            .then(() => {
                              var { shoppingComponent: r } = e.data;
                              if (r.useWxvideoPayFlow) {
                                if (null == t || !t.source) return t;
                                var a = t.source.itemSources || [];
                                a.forEach((e) => {
                                  try {
                                    var t = JSON.parse(
                                      e.bizTracePointExt || "{}"
                                    );
                                    (t.trade_module_order_version = "3.0"),
                                      (e.bizTracePointExt = JSON.stringify(t));
                                  } catch (e) {}
                                }),
                                  (t.source.itemSources = a);
                              }
                              return t;
                            })
                            .catch(() => t)
                        );
                    });
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                  handleMutateStateAfterFetchInWxvideo: (function () {
                    var t = Object(M.a)(function* (t) {
                      var { state: r, isAsync: o } = t;
                      return s()
                        .then((t) => {
                          var { shouldSyncOrderV3: s } = t;
                          return s
                            ? o
                              ? (e.process.invoke("mutateState", (e) => {
                                  (e.display = Object(a.a)({}, e.display, {
                                    showPrePayCards: !1,
                                  })),
                                    (e.valueCard = Object(a.a)(
                                      {},
                                      e.valueCard,
                                      { checked: [], list: [] }
                                    ));
                                }),
                                void (
                                  r.useStoredCustomerDiscount &&
                                  (e.process.invoke(
                                    "setDisableStoredDiscount",
                                    !0
                                  ),
                                  e.process.invoke("confirmOrder"))
                                ))
                              : Object(a.a)({}, r || {}, {
                                  display: Object(a.a)(
                                    {},
                                    (null == r ? void 0 : r.display) || {},
                                    { showPrePayCards: !1 }
                                  ),
                                  valueCard: Object(a.a)(
                                    {},
                                    (null == r ? void 0 : r.valueCard) || {},
                                    { checked: [], list: [] }
                                  ),
                                })
                            : r;
                        })
                        .catch(() => r);
                    });
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                };
              })(e)
            ),
            ...Object.entries(
              (function (e) {
                return {
                  genCreateOrderParams:
                    ((t = Object(M.a)(function* (t) {
                      return e.lambdas.checkFromChannelsLive() &&
                        wx.getChannelsShareKey
                        ? yield new Promise((e) => {
                            wx.getChannelsShareKey({
                              success(r) {
                                var { sharerOpenId: a } = r || {};
                                if (null == t || !t.source) return e(t);
                                var s = t.source.itemSources || [];
                                return (
                                  s.forEach((e) => {
                                    try {
                                      var t = JSON.parse(
                                        e.bizTracePointExt || "{}"
                                      );
                                      (t.wxvideo_sharer_open_id = a),
                                        (e.bizTracePointExt =
                                          JSON.stringify(t));
                                    } catch (e) {}
                                  }),
                                  (t.source.itemSources = s),
                                  e(t)
                                );
                              },
                              fail(r) {
                                Mi(
                                  "微信视频号分享员订单打标流程--调用wx.getChannelsShareKey失败",
                                  r
                                ),
                                  e(t);
                              },
                            });
                          })
                        : t;
                    })),
                    function (e) {
                      return t.apply(this, arguments);
                    }),
                };
                var t;
              })(e)
            ),
            ...Object.entries(Vi(e)),
            ...Object.entries(
              (function (e) {
                return {
                  handleLiveCouponExt: (t) =>
                    Object(M.a)(function* () {
                      var t,
                        { state: r } = e.data,
                        { source: s } = r.order;
                      if (
                        (Array.isArray(s.itemSources) &&
                          (t = s.itemSources.find((e) => {
                            try {
                              var t = JSON.parse(e.bizTracePointExt),
                                { scene: r } = t;
                              return 1177 === r;
                            } catch (e) {
                              return !1;
                            }
                          })),
                        t)
                      ) {
                        var [o = []] = e.process.invoke("genGoodsParams", {
                            prevState: [],
                          }),
                          { bookKey: i } = e.env.getQuery() || {};
                        return Object(ie.default)({
                          origin: "cashier",
                          withCredentials: !0,
                          method: "POST",
                          path: "/pay/wsctrade/order/buy/getLiveActivity.json",
                          data: {
                            goodsIds: o.map((e) => {
                              var { goodsId: t } = e;
                              return t;
                            }),
                            bookKey: i,
                          },
                        })
                          .then(
                            (t) => (
                              e.process.invoke("mutateState", (e) => {
                                var r;
                                try {
                                  r = JSON.parse(t.BIZ_ORDER_ATTRIBUTE || "{}");
                                } catch (e) {
                                  return;
                                }
                                e.order.extensions.BIZ_ORDER_ATTRIBUTE =
                                  JSON.stringify(
                                    Object(a.a)({}, r, {
                                      WX_VIDEO_LIVE_ID: "" + t.id,
                                    })
                                  );
                              }),
                              Promise.resolve(!0)
                            )
                          )
                          .catch(() => Promise.resolve(!0));
                      }
                      return !0;
                    })(),
                  handleWxvideoAfterCreateOrder: (t) =>
                    e.process
                      .invoke("getWxOrderInfoTradeBuy", t)[0]
                      .then(() => t)
                      .catch(() => t),
                };
              })(e)
            ),
          ].reduce((e, t) => {
            if (e[t[0]]) {
              var r = e[t[0]];
              e[t[0]] = function () {
                return r(...arguments).then(t[1]);
              };
            } else e[t[0]] = t[1];
            return e;
          }, {});
          return (
            Object.keys(t).forEach((r) => e.process.define(r, t[r])),
            () => {
              Object.keys(t).forEach((r) => e.process.undef(r, t[r]));
            }
          );
        };
      var Yi = r("Zf9w");
      class Ji {
        constructor(e) {
          (this.ctx = e.ctx), this.initChannel();
        }
        initChannel() {
          Object(Yi.g)() &&
            this.ctx.process.define("setShareIcon", (e) =>
              Object(a.a)({}, e, { show: !1 })
            );
        }
      }
      Ji.lambdas = {
        getScene: Yi.m,
        checkIsHalfScreen: Yi.g,
        checkIsChannels: Yi.e,
        checkIsChannelsAsync: Yi.f,
        checkFromShowcase: Yi.d,
        checkFromFullScreenSceneAsync: () => {
          var e = Object(Yi.m)();
          return Promise.resolve(
            1175 === e || 1176 === e || 1195 === e || 1208 === e
          );
        },
        checkIsOpenByLiveBag: Yi.i,
        checkIsOpenByLiveGoodsShare: Yi.j,
        checkIsWxvideoLive: Yi.l,
        checkFromChannelsLive: Yi.b,
        checkFromChannelsOpenFlow: Yi.c,
        checkIsNeedSyncOrderScene: Yi.h,
        checkIsOpenedWxV3: Yi.k,
        getTradeModuleStatus: Yi.n,
        checkBeforeAddOrderPromise: Yi.a,
      };
      var Zi = r("8oWr"),
        Xi = r.n(Zi);
      class Qi {
        constructor(e) {
          (this.ctx = e.ctx), (this.unwatchers = []), this.initCloudData();
        }
        pageDestroyed() {
          this.unwatchers.forEach((e) => {
            e();
          });
        }
        initCloudData() {}
      }
      Qi.widgets = { Main: Xi.a };
      var $i = r("AMRJ"),
        en = r.n($i);
      class tn {
        constructor(e) {
          (this.ctx = e.ctx), this.initCloudData();
        }
        initCloudData() {}
      }
      tn.widgets = { Main: en.a };
      var rn = r("OH4y"),
        an = r("wwS1"),
        sn = r.n(an);
      class on {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      on.widgets = { Main: sn.a };
      var nn = {
          config: D,
          builtinBundle: {
            "@ext-tee-wsc-decorate/page-style": _.a,
            "@wsc-tee-trade/trade-buy-core": B,
            "@wsc-tee-trade/trade-buy-page-setup": ce,
            "@ext-tee-wsc-ump/trade-buy-ump-data": he,
            "@wsc-tee-trade/trade-buy-pay-view": ye.a,
            "@assets-tee-extensions/cashier": fe.a,
            "@wsc-tee-trade/trade-buy-prior-use": ge,
            "@wsc-tee-trade/trade-buy-goods": it,
            "@wsc-tee-trade/trade-buy-price": ut,
            "@wsc-tee-trade/trade-buy-submit": St,
            "@assets-tee-extensions/guarantee-freight-bar": Mt,
            "@assets-tee-extensions/guarantee-components": Ht,
            "@assets-tee-extensions/guarantee-ensure": Vt,
            "@wsc-tee-trade/retail-order": Rr,
            "@wsc-tee-trade/cart-present-popup": Mr,
            "@wsc-tee-trade/trade-buy-drug": Ur,
            "trade-buy-subscription-msg": zr,
            "@ext-tee-wsc-goods/follow-popup-block": Jr,
            "@ext-tee-wsc-im/subscription-message": Zr.a,
            "trade-buy-postage-cell": $r,
            "@ext-tee-shop/shop-cert-notice": ea.a,
            "@assets-tee-extensions/cashier-pre": ca,
            "@wsc-tee-trade/trade-buy-service-block": Ca,
            "@wsc-tee-trade/trade-buy-popup-container": Sa,
            "@wsc-tee-trade/trade-buy-misc-pre": Ha,
            "@wsc-tee-trade/trade-buy-ump-block": Qs,
            "@wsc-tee-trade/trade-buy-address-pre": ai,
            "@wsc-tee-trade/trade-buy-header-container": li,
            "@wsc-tee-trade/trade-buy-misc": vi,
            "@wsc-tee-trade/trade-buy-block-container": bi,
            "@retail-tee-prepaid/prepaid": Ci.a,
            "@wsc-tee-trade/trade-buy-cashier-pre": xi,
            "@wsc-tee-trade/retail-order-error-info": _i,
            "@wsc-tee-trade/trade-buy-reward-popup": Ni,
            "@wsc-tee-shop/footer": Fi.a,
            "trade-buy-privacy-bill": Bi.a,
            "@wsc-tee-trade/trade-buy-wxvideo-block": class {
              constructor(e) {
                (this.ctx = e.ctx), this.init();
              }
              init() {
                (this.ctx.data.shoppingComponent = {
                  sceneCheckResult: null,
                  orderInfo: null,
                  useWxvideoPayFlow: !1,
                }),
                  qi(this.ctx),
                  this.ctx.env.getQueryAsync().then((e) => {
                    var { dbid: t, bookKey: r, book_key: a } = e;
                    (t || r || a) && this.SCENE_CHECK();
                  });
              }
              SCENE_CHECK() {
                return this.ctx.process.invoke("sceneCheck");
              }
            },
            "@ext-tee-wxvideo/wxvideo-utils": Ji,
            "@wsc-tee-trade/trade-buy-ump-wrapper": Qi,
            "@wsc-tee-trade/trade-buy-service-wrapper": tn,
            "@wsc-tee-trade/trade-buy-common-popup": rn.a,
            "@ext-tee-wsc-goods/base-common-sku": on,
          },
        },
        dn = E.default.getGlobal("ranta-app-runtime"),
        cn = dn.getPageOptions({
          rantaOptions: Object(a.a)(
            { page: "/packages/trade-buy/order/buy/index" },
            nn
          ),
          pageRuntimeName: "aWrDjnqdPEch",
          frameworkAppRuntime: dn,
          tee: E.default,
          usedLifecycles: [
            "onAppShow",
            "pageDestroyed",
            "onPageShow",
            "onPageHide",
            "beforePageMount",
          ],
        });
      E.default.page({
        mixins: [
          cn,
          {
            data: () => ({
              hideSkeleton: !1,
              deviceType: "",
              pageClassName: "page",
              pageDeviceClass: "page-",
              fixedBottom: !0,
              pageBgColor: "#f2f2f2",
              globalCustomLoading: "",
            }),
            computed: {
              pageContainerStyle: () =>
                "iPhone-X" === getApp().deviceType
                  ? "padding-bottom: 138px;"
                  : "padding-bottom: 104px;",
              pageContainerItemStyle: () => "min-height: calc(100vh - 90px)",
            },
            beforeMount() {
              var e = getApp();
              this.pageDeviceClass =
                this.pageDeviceClass + (e.deviceType || "");
            },
            created() {
              var e = getApp();
              (this.globalCustomLoading = e.globalData.globalCustomLoading),
                e.on("trade-buy-data-loaded", this.handleTradeBuyDataLoaded),
                e.on("trade-buy-page-bg-color", this.setPageBgColor);
            },
            destroyed() {
              var e = getApp();
              e.off("trade-buy-data-loaded", this.handleTradeBuyDataLoaded),
                e.off("trade-buy-page-bg-color", this.setPageBgColor);
            },
            methods: {
              setPageBgColor(e) {
                e && (this.pageBgColor = e);
              },
              handleTradeBuyDataLoaded() {
                this.hideSkeleton = !0;
              },
            },
          },
        ],
      });
    },
    PET8: function (e, t) {
      e.exports = {
        d: "retailOrderErrorInfo;2;themeColors;4;retailOrderErro,rInfo;6;shop;4;bookKey;4",
        e: "onDeliveryAddressCardClick",
        el: "toggleRequiredPopup",
        wd: "Main",
        p: "callHookAfterFetchState;callHookGenConfirmParams",
        pi: "switchDeliveryTab",
      };
    },
    PfmZ: function (e, t, r) {
      r.d(t, "f", function () {
        return l;
      }),
        r.d(t, "e", function () {
          return u;
        }),
        r.d(t, "d", function () {
          return p;
        }),
        r.d(t, "a", function () {
          return h;
        }),
        r.d(t, "b", function () {
          return y;
        }),
        r.d(t, "c", function () {
          return f;
        });
      var a,
        s,
        o = r("Fcif"),
        i = r("9ZMt"),
        n = r("AGZf"),
        d = r("z9IR"),
        c = () => {};
      function l(e) {
        c = e;
      }
      function u(e) {
        a = e;
      }
      function p() {
        s = n.a.loading({ forbidClick: !0, ref: c() });
      }
      function h() {
        var e;
        null == (e = s) || e.clear();
      }
      function y(e) {
        return d.a.confirm(Object(o.a)({}, e, { ref: a }));
      }
      function f(e) {
        return i.default.getGlobal(e) || a;
      }
    },
    "Q9/N": function (e, t) {
      e.exports = {
        d: "kdtId;4;showWxSubscribe;4",
        w: "",
        wc: "",
        wd: "Main",
        l: "",
        lc: "",
        p: "showSubscription",
        pi: "mutateState;queryWechatSubscribeResult;requestSubscribeMessagePush",
        c: "",
        cc: "",
      };
    },
    QBqv: function (e, t, r) {
      r.d(t, "b", function () {
        return u;
      }),
        r.d(t, "a", function () {
          return h;
        }),
        r.d(t, "c", function () {
          return y;
        });
      var a = r("eijD"),
        s = r("9ZMt"),
        o = r("US/N"),
        i = r("3tyi"),
        n = r("5Mqe"),
        d = r.n(n),
        c = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        l = (e) => ((e = e.split("")), c.filter((t, r) => "1" === e[r]));
      function u(e) {
        return p.apply(this, arguments);
      }
      function p() {
        return (p = Object(a.a)(function* (e) {
          var t = yield Object(o.default)({
            origin: "cashier",
            withCredentials: !0,
            path: "/pay/wsctrade/order/buy/v2/getSelfFetchTime.json",
            method: "POST",
            data: {
              kdtId: e.kdtId,
              offlineId: e.id,
              fromApp: s.default.getEnv(),
            },
          });
          return {
            timeBucket: t.timeBucket.map((e) => ({
              openTime: e.startTime,
              closeTime: e.endTime,
              weekdays: l(e.switchs),
            })),
            timeSpan: t.timeSpan,
            aheadMax: { value: t.aheadMax, type: t.aheadMaxType },
            aheadMin: { value: t.aheadMin, type: t.aheadMinType },
          };
        })).apply(this, arguments);
      }
      function h(e) {
        return e > 1e3
          ? (e / 1e3).toFixed(1) + "km"
          : e > 100
          ? e + "m"
          : e < 100 && e > 0
          ? "<100m"
          : void 0;
      }
      function y(e) {
        var {
          location: t,
          kdtId: r,
          seller: a,
          goods: s,
          cityCode: n,
          firstOneFill: c = !1,
        } = e;
        return (
          a.storeId
            ? (function (e) {
                var { location: t, kdtId: r, seller: a, goods: s } = e,
                  n = [].concat(s.list, s.unavailable);
                return Object(o.default)({
                  origin: "cashier",
                  withCredentials: !0,
                  path: "/pay/wsctrade/order/buy/v2/getSelfFetch.json",
                  method: "POST",
                  data: {
                    lat: +t.lat || -256,
                    lng: +t.lng || -256,
                    kdtId: r,
                    storeId: a.storeId,
                    items: n.map((e) =>
                      Object(i.a)(e, ["goodsId", "skuId", "num"])
                    ),
                  },
                });
              })({ location: t, kdtId: r, seller: a, goods: s })
            : (function (e) {
                var {
                    location: t,
                    kdtId: r,
                    seller: a,
                    goods: s,
                    cityCode: i,
                    firstOneFill: n,
                  } = e,
                  c = [].concat(s.list, s.unavailable),
                  l =
                    null == c
                      ? void 0
                      : c.map((e) => {
                          var t;
                          return null == (t = e.combo)
                            ? void 0
                            : t.subComboList.map((e) => {
                                var { goodsId: t, groupId: r, skuId: a } = e;
                                return { goodsId: t, groupId: r, skuId: a };
                              });
                        });
                l = d()(l);
                var u = {
                  lat: +t.lat || -256,
                  lng: +t.lng || -256,
                  kdtId: r,
                  firstOneFill: n,
                  storeId: a.storeId,
                  items: c.map((e) => {
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
                        subComboList: l,
                      },
                    };
                  }),
                };
                return (
                  i && (u.cityCode = i),
                  Object(o.default)({
                    origin: "cashier",
                    withCredentials: !0,
                    method: "POST",
                    path: "/pay/wsctrade/order/buy/getDefaultSelfFetch.json",
                    data: u,
                  })
                );
              })({
                location: t,
                kdtId: r,
                seller: a,
                goods: s,
                cityCode: n,
                firstOneFill: c,
              })
        ).then(
          (e) => ((e.distanceStr = h(null == e ? void 0 : e.distance)), e)
        );
      }
    },
    S5UO: function (e, t) {
      e.exports = {
        d: "expressType;4;state;4;kdtId;4;isPreCashierPay;4;buyerId;4;orderGoods;4;orderNo;4;themeColors;4;tradeTag;4",
        e: "",
        el: "",
        w: "HaitaoFooterNotice",
        wc: "",
        l: "",
        lc: "",
        p: "logCreateOrder;logFocusMessage;logClickAddress;logClickPayType;logPaySuccess;logEditAddress;logAddAddress;logClickPrivacy;logUserAgreement;blindBoxProcess;setGuestAddress;validateByBlindBox;isOtherBizNeedGetDefaultSelfFetch;otherBizSelfFetchListFilter",
        pi: "",
        c: "",
        cc: "",
        li: "onPageShow",
      };
    },
    "Tr+R": function (e, t) {
      e.exports = {
        d: "themeVars;4;goodsBaseInfo;4;shopBaseInfo;4;shopMpInfo;4;shopConfig;4",
        el: "follow:show",
        w: "Widget;H5Follow;WeappFollow",
        wc: "H5Follow;WeappFollow",
        wd: "Widget",
        p: "checkShowFollow",
      };
    },
    UVGo: function (e, t) {
      e.exports = {
        d: "presentPopupInfo;2;presentData;0;cloudGoodsList;0;cloudGoodsInfo;0;reserves;4;state;4;tradeTag;4;pay;4;goods;4;display;4;pointsName;4;points;4;expressType;4;memberCard;4;shop;4;appShop;4;hotel;4;themeColors;4;themeCSS;4;allMeetReduceActivities;4;kdtId;4;currentAddress;4;rewardModel;4;storeGiftsInfo;4;periodBuy;4;appEnv;4;tradeGoodsVisible;4;delivery;4;presentGoodsId;4;selfFetch;4;couponModel;4;orderCreated;4;dataLoaded;4;themeTag;4;postage;4",
        e: "onActivityChanged",
        el: "presentPopupClose;presentPopupConfirm;present-sku:changed",
        w: "UnavailableGoods;ExtraFees;Presale;Hotel;StoreGiftsList;Empty;GoodsList;Good",
        wc: "UnavailableGoods;ExtraFees;Presale;Hotel;StoreGiftsList;PostageCell;GuaranteeFreightBar",
        wd: "Main",
        p: "validateHotel;genGoodsParamsOnCreate",
        pi: "fetchShow;setNewHotelNum;setHotelPhone;setHotelRecipients;mutateState",
        cc: "",
      };
    },
    XJhc: function (e, t, r) {
      r.d(t, "a", function () {
        return a;
      });
      var a = {
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
    XYea: function (e, t, r) {
      function a(e, t) {
        void 0 === t && (t = 1);
        var r = e && e.toLowerCase();
        if (r && /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(r)) {
          if (4 === r.length) {
            for (var a = "#", s = 1; s < 4; s += 1)
              a += r.slice(s, s + 1).concat(r.slice(s, s + 1));
            r = a;
          }
          for (var o = [], i = 1; i < 7; i += 2)
            o.push(parseInt("0x" + r.slice(i, i + 2)));
          return "rgba(" + o.join(",") + "," + t + ")";
        }
        return r;
      }
      r.d(t, "a", function () {
        return a;
      });
    },
    Y7UL: function (e, t) {
      e.exports = {
        d: "order;4;shopConfig;4;invoice;4",
        e: "",
        el: "",
        w: "Main",
        wc: "TradeBuyServiceBlock",
        wd: "Main",
        l: "",
        lc: "",
        p: "",
        pi: "mutateState;setOrderMessage;logFocusMessage;setInvoiceSubmit;invoiceActionSubmit",
        c: "",
        cc: "",
      };
    },
    YKtM: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {};
      t.default = void 0;
      var s = c(r("xZbU")),
        o = c(r("J5Nl")),
        i = c(r("/BRk")),
        n = c(r("fq/J")),
        d = r("griD");
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, a);
        }
        return r;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                h(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function p(e, t) {
        for (var r = 0; r < t.length; r++) {
          var a = t[r];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function h(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      Object.keys(d).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(a, e) ||
            (e in t && t[e] === d[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return d[e];
              },
            }));
      });
      var y = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            h(this, "_options", void 0),
            h(this, "_extensionData", void 0),
            h(this, "_watchers", void 0),
            h(this, "ctx", void 0),
            (this.ctx = {
              data: {},
              event: new s.default(),
              process: new o.default(t),
              watch: function () {},
              query: {},
            }),
            this.init(t);
        }
        var t, r, a;
        return (
          (t = e),
          (r = [
            {
              key: "init",
              value: function (e) {
                this._initOptions(e),
                  this._initWatchData(),
                  this._initProxyData();
              },
            },
            {
              key: "bindCtx",
              value: function (e, t) {
                (this.ctx.query = u(u({}, this.ctx.query), t)),
                  (e.ctx = this.ctx);
              },
            },
            {
              key: "_initOptions",
              value: function (e) {
                var t = e.extensions.reduce(function (e, t) {
                  return (e[t.name] = t), e;
                }, {});
                (this._options = { extensions: t, debug: e.debug }),
                  (this._extensionData = Object.values(t).reduce(function (
                    e,
                    t
                  ) {
                    return t.data
                      ? (Object.keys(t.data).forEach(function (t) {
                          e[t] = void 0;
                        }),
                        e)
                      : e;
                  },
                  {}));
              },
            },
            {
              key: "_initProxyData",
              value: function () {
                var e = this.ctx,
                  t = this._watchers;
                this.ctx.data = new Proxy(this._extensionData, {
                  set: function (r, a, s, o) {
                    var i = r[a];
                    return t.notify(a, [s, i], e), Reflect.set(r, a, s, o);
                  },
                  get: function (e, t, r) {
                    return Reflect.get(e, t, r);
                  },
                });
              },
            },
            {
              key: "_initWatchData",
              value: function () {
                var e = this,
                  t = new i.default();
                (this._watchers = t),
                  (this.ctx.watch = function (r, a) {
                    return r in e._extensionData
                      ? t.watch(r, a, e.ctx)
                      : (e._options.debug &&
                          n.default.warn(
                            "ranta-adapter: watch-data ".concat(
                              r,
                              " not in extensions ..."
                            )
                          ),
                        function () {});
                  });
              },
            },
          ]) && p(t.prototype, r),
          a && p(t, a),
          e
        );
      })();
      t.default = y;
    },
    ZIKc: function (e, t, r) {
      r.d(t, "a", function () {
        return s;
      }),
        r.d(t, "b", function () {
          return o;
        });
      var a = r("9ZMt");
      function s(e, t) {
        void 0 === t && (t = 1);
        var r = getApp(),
          s = getCurrentPages();
        wx.showLoading({ title: "加载数据中..." }),
          s.length - 1 - t < 0 &&
            (r.setOfflineId(e.id),
            a.default.navigate({
              url: "/packages/home/dashboard/index",
              type: "switchTab",
            }));
        var o = s[s.length - 1 - t],
          i = this.redirectTo || "/" + o.route,
          n = /packages\/shop\/multi-store/.test(i),
          d =
            /(packages\/home\/(dashboard|feature|tab))|packages\/showcase-template/.test(
              i
            );
        this.redirectTo &&
          (r.setOfflineId(e.id),
          wx.hideLoading(),
          a.default.navigate({ url: this.redirectTo, type: "switchTab" })),
          (n || 1 === s.length) &&
            (r.setOfflineId(e.id),
            wx.hideLoading(),
            a.default.navigate({
              url: "/packages/home/dashboard/index",
              type: "switchTab",
            })),
          d
            ? ((s[s.length - 1].__uniqueKey__ = o.__uniqueKey__),
              r.setOfflineId(
                e.id,
                (e) => {
                  wx.hideLoading(),
                    e && 0 !== t && a.default.navigateBack({ delta: t });
                },
                { delta: t, wxExparserNodeId: o.__wxExparserNodeId__ }
              ))
            : (r.setOfflineId(e.id),
              wx.hideLoading(),
              0 !== t && a.default.navigateBack({ delta: t }));
      }
      var o = (e) => {
        var t = null;
        return new Promise((r) => {
          t = setInterval(() => {
            e() && (clearInterval(t), r());
          }, 50);
        });
      };
    },
    a1Oz: function (e, t, r) {
      r.d(t, "a", function () {
        return s;
      });
      var a = r("US/N");
      function s(e) {
        return Object(a.default)({
          origin: "cashier",
          withCredentials: !0,
          path: "/wsctrade/uic/address/updateAddress.json",
          method: "POST",
          data: e,
        }).then(function (t) {
          return (e.id = e.id || t.value), e;
        });
      }
    },
    aXAF: function (e, t, r) {
      r.d(t, "c", function () {
        return a;
      }),
        r.d(t, "a", function () {
          return s;
        }),
        r.d(t, "b", function () {
          return o;
        });
      var a = {
          message: "",
          showCancelButton: !1,
          confirmButtonText: "我知道了",
          cancelButtonText: "取消",
        },
        s = "CASH_ON_DELIVERY",
        o = "您正在选择货到付款，下单后由商家发货，送货上门并收款。";
    },
    afxm: function (e, t) {
      e.exports = {
        d: "display;4;tradeTag;4;env;4;themeCSS;4;haitaoZeroOrder;4;grouponModel;4;themeColors;4;isGrouponModelShow;4",
        e: "",
        el: "",
        w: "Guide;HeaderContent",
        wc: "Guide;HeaderContent",
        wd: "Main",
        l: "",
        lc: "",
        p: "",
        pi: "",
        c: "",
        cc: "",
      };
    },
    beZU: function (e, t, r) {
      r.d(t, "a", function () {
        return i;
      }),
        r.d(t, "b", function () {
          return n;
        }),
        r.d(t, "d", function () {
          return d;
        }),
        r.d(t, "c", function () {
          return c;
        }),
        r.d(t, "e", function () {
          return l;
        });
      var a = r("Fcif"),
        s = r("AGZf"),
        o = r("US/N");
      function i() {
        return Object(o.default)({
          origin: "cashier",
          withCredentials: !0,
          path: "/pay/wsctrade/order/buy/getReceiverIdentityList.json",
          method: "GET",
        });
      }
      function n() {
        return Object(o.default)({
          origin: "cashier",
          withCredentials: !0,
          path: "/wsctrade/apollo-gray.json",
          method: "GET",
          data: { key: "checkOcrWhiteList" },
        });
      }
      function d(e) {
        return Object(o.default)({
          path: "/wscassets/common/api/trade/ocr/submit",
          method: "POST",
          contentType: "application/json",
          data: e,
        });
      }
      function c(e) {
        return Object(o.default)({
          path: "/wscassets/common/api/trade/ocr/query",
          data: e,
        });
      }
      function l(e) {
        var { order: t, ignoreIdBinding: i, idcard: n } = e;
        return r
          .e("packages/async-main/chunk")
          .then(r.t.bind(null, "sbP3", 7))
          .then((e) => {
            var r = e.utils.generateKeyAndIv();
            function d(t) {
              return e.aes.encrypt(Object(a.a)({ data: t }, r));
            }
            return Object(o.default)({
              origin: "cashier",
              withCredentials: !0,
              path: "/pay/wsctrade/order/buy/verifyIdcard.json",
              method: "POST",
              data: Object(a.a)(
                {
                  binding: i ? void 0 : !!n.binding,
                  idCardName: d(n.name),
                  idCardNumber: d(n.number),
                  bookKey: t.bookKey,
                  itemInfoDTOs: t.items,
                },
                r
              ),
            })
              .then((e) => {
                var { verifyPassed: t } = e;
                if (!t) throw e;
                return e;
              })
              .catch((e) => {
                var {
                  verifyNotPassedReasonCode: t,
                  verifyNotPassedSolution: r,
                } = e || {};
                switch (t) {
                  case 1:
                    Object(s.a)(r);
                    break;
                  case 2:
                  case 3:
                    return this.ctx.process.invoke("setVerifyFail", !0), e;
                  default:
                    Object(s.a)("实名认证失败，请稍后再试");
                }
                throw e;
              });
          });
      }
    },
    cO1G: function (e, t) {
      e.exports = {
        d: "isRetailOrderScene;0;retailOrderScene;0;jointId;0;warehouseId;0;retailPickUpWayName;0;retailPickUpWayValue;0;processData;0;showSubscribeGuide;0;retailSelfFetchContact;0;isShowRetailDeliveryAddress;0;houseNumberRequired;0;attrRefreshTimeBucket;2;tradeAddressVisible;2;retailPickUpWays;0;isRetailWeappScene;0;showRetailPickUpWayErrorToast;2;reserves;2;isRetailOrderScene;4;retailPickUpWayName;4;retailPickUpWayValue;4;prepareData;4;address;6;state;4;expressType;4;themeColors;4;themeCSS;4;postage;4;processData;4;currentAddress;4;goods;4;shop;4;retailSelfFetchContact;4;kdtId;4;selfFetch;4;extra;4;dine;4;pickUpWay;4;retailPickUpWays;4;isRetailWeappScene;4;showRetailPickUpWayErrorToast;6;confirmData;6",
        e: "dine:afterBlockToggle",
        w: "PickUpWay;WaitingProcess;SelfFetchShopSecondConfirmDialog;GetPhoneButton;Dine",
        wc: "UserAuthorize",
        lc: "",
        p: "updatePickUpWay;modifyPrepareByBookKeyParams;callHookBeforeUpdateAddress;callHookBeforeFetchShowByBookKey;callHookBeforeFetchShow;callHookBeforeCreateOrder;callHookBeforeAsyncCreateOrderBookKey;callHookBeforeGetDefaultSelfFetch;callHookAfterFetchShow;validateSelfFetchShop;callHookBeforeEvokeSubscribeDialog;selectRetailContact;genPrepareParamsByRetail",
        pi: "mutateState;updatePickUpWay;fetchShow;queryWechatSubscribeResult;requestSubscribeMessagePush;updateDinePickUpWay",
      };
    },
    cb02: function (e, t, r) {
      function a(e) {
        return new Promise((t, r) => {
          wx.getImageInfo({
            src: e,
            success: (e) => {
              t(e);
            },
            fail: r,
          });
        });
      }
      function s(e, t, r, a) {
        var s = r,
          o = a;
        return (
          s > e && ((o *= e / s), (s = e)),
          o > t && ((s *= t / o), (o = t)),
          { height: s, width: o }
        );
      }
      function o(e) {
        return (
          /^\d{15}$/gi.test(e) ||
          (/^\d{17}(\d|X)$/gi.test(e) &&
            (function (e) {
              for (
                var t = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
                  r = 0,
                  a = 0,
                  s = e.length;
                a < s - 1;
                a++
              )
                r += parseInt(e.charAt(a), 10) * t[a];
              return (
                ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"][
                  r % 11
                ] === e.charAt(17).toUpperCase()
              );
            })(e))
        );
      }
      r.d(t, "a", function () {
        return a;
      }),
        r.d(t, "b", function () {
          return s;
        }),
        r.d(t, "c", function () {
          return o;
        });
    },
    dXF6: function (e, t, r) {
      r.d(t, "a", function () {
        return l;
      });
      var a = r("eijD"),
        s = r("+I+c"),
        o = r("Fcif"),
        i = r("exEQ"),
        n = r("2bgu"),
        d = ["title", "url", "weappUrl"],
        c = ["showGuarantee"];
      function l(e) {
        return class extends e {
          constructor(e) {
            super(Object(o.a)({}, e, { type: "PRE", request: i.b })),
              (this.useTypeRouter = !1),
              (this.initialized = !1),
              (this.rantaCtx = e.rantaCtx);
            var {
              onPaySuccess: t,
              onCashierClose: r,
              onCashierFail: a,
              onNavigate: c,
            } = e;
            (this.skynet = i.c),
              t && this.EE.on("pay-success", t),
              r && (this.EE.on("close", r), this.EE.on("quick-close", r)),
              a && this.EE.on("cashier-fail", a),
              n.a.init(),
              this.EE.on("navigate", (e) => {
                var { title: t, url: r, weappUrl: a } = e,
                  l = Object(s.a)(e, d);
                c && c();
                var { orderNo: u } = e.postPayData || {};
                if (a)
                  return wx.redirectTo({
                    url: a,
                    fail: (t) => {
                      i.c.error("跳转失败", { orderNo: u, error: t, data: e });
                    },
                  });
                Object(n.b)({
                  url: decodeURIComponent(r),
                  web: {
                    type: "znb",
                    znb: Object(o.a)({}, l, {
                      weappUrl: a,
                      title: t,
                      url: decodeURIComponent(r),
                      skipSafeLink: !0,
                    }),
                    znbFailureCb: (t) => {
                      i.c.error("跳转失败", {
                        orderNo: u,
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
                a = Object(s.a)(t, c);
              this.EE.emit("update-show-guarantee", r), super.startPay(a);
            } else this.EE.emit("close");
          }
          init(e) {
            var t = () => super.init,
              s = this;
            return Object(a.a)(function* () {
              (s.clear = e.clear), (s.toast = e.toast);
              var a = yield r
                .e("packages/async-main/chunk")
                .then(r.t.bind(null, "sbP3", 7));
              return t()
                .call(s, e, a)
                .then(
                  (e) => (
                    (s.initialized = !0),
                    s.rantaCtx.event.emit("cashier:ready"),
                    e
                  )
                )
                .catch((e) => {
                  throw (
                    ((s.initialized = !0),
                    s.rantaCtx.event.emit("cashier:ready"),
                    e)
                  );
                });
            })();
          }
        };
      }
    },
    edpm: function (e, t, r) {
      r.d(t, "c", function () {
        return s;
      }),
        r.d(t, "a", function () {
          return o;
        }),
        r.d(t, "r", function () {
          return c;
        }),
        r.d(t, "q", function () {
          return l;
        }),
        r.d(t, "b", function () {
          return u;
        }),
        r.d(t, "g", function () {
          return p;
        }),
        r.d(t, "k", function () {
          return h;
        }),
        r.d(t, "h", function () {
          return y;
        }),
        r.d(t, "j", function () {
          return f;
        }),
        r.d(t, "p", function () {
          return v;
        }),
        r.d(t, "d", function () {
          return m;
        }),
        r.d(t, "o", function () {
          return g;
        }),
        r.d(t, "f", function () {
          return b;
        }),
        r.d(t, "l", function () {
          return C;
        }),
        r.d(t, "e", function () {
          return P;
        }),
        r.d(t, "m", function () {
          return O;
        }),
        r.d(t, "n", function () {
          return S;
        }),
        r.d(t, "i", function () {
          return k;
        });
      var a = r("mztD");
      r("5Xe+");
      function s(e) {
        return (e / 100).toFixed(2);
      }
      function o(e) {
        var { stockNum: t, buyedNum: r, goodMax: a, quotaCycle: s } = e;
        return a >= t
          ? "该商品库存不足"
          : r
          ? "商品限购" + (r + a) + "件，已购" + r + "件"
          : "该商品" + (4 === s ? "每单" : "") + "限购" + a + "件";
      }
      var i = {
          3: "降价拍",
          4: "拼团",
          6: "秒杀",
          8: "赠品",
          11: "限时折扣",
          23: "抽奖团",
          403: "限时秒杀",
        },
        n = { 24: "换购" };
      function d(e) {
        return (e < 10 ? "0" : "") + e;
      }
      function c(e) {
        return Object(a.a)(e, "!180x180.jpg");
      }
      function l(e, t) {
        return (
          void 0 === t && (t = "yy月dd日"),
          t
            .replace("yy", d(e.getMonth() + 1))
            .replace(/d+/, (t) => (t.length > 1 ? d(e.getDate()) : e.getDate()))
        );
      }
      function u(e, t) {
        return (
          void 0 === t && (t = "yyyy-mm-dd"),
          t
            .replace("yyyy", e.getFullYear())
            .replace("mm", d(e.getMonth() + 1))
            .replace("dd", d(e.getDate()))
        );
      }
      function p(e, t) {
        var r = new Date(t);
        return (
          new Date(r.getFullYear(), r.getMonth(), r.getDate()).getFullYear() ===
          e.getFullYear()
        );
      }
      function h(e) {
        var t = s(e.payPrice).match(/(\d+)\.(\d+)/);
        return [t[1], t[2]];
      }
      function y(e) {
        return 0 == +e.payPrice;
      }
      function f(e) {
        return e.price > e.payPrice && e.payPrice
          ? e.pointsPrice
            ? ""
            : s(e.price)
          : "";
      }
      function v(e, t) {
        return e.pointsPrice ? [e.pointsPrice, t] : "";
      }
      function m(e) {
        var { isECard: t, stockNum: r, canSetQuantity: a } = e;
        return (t || a) && null != r && "" !== r;
      }
      function g(e) {
        var {
          goodsTax: t = 0,
          postageTax: r = 0,
          showTax: a,
          num: o,
          haitao: i = 0,
        } = e;
        return (
          1 == +i &&
          (!1 === a
            ? "进口税(含运费税款)：商品已含税"
            : !0 === a && "进口税(含运费税款)：¥ " + s(t * o + r))
        );
      }
      function b(e) {
        if (!e.message) return !1;
        var { message: t } = e,
          r = Object.keys(t);
        return !!r.length && r.some((e) => !!t[e]);
      }
      function C(e) {
        var t = null;
        if (e.message) {
          var { message: r } = e,
            a = Object.keys(r);
          t = !!a.length && a.some((e) => !!r[e]);
        } else t = !1;
        return (
          t ||
          e.showVirtualTicketRefundingRule ||
          e.deliveryTime ||
          e.expressPayMode
        );
      }
      function P(e) {
        return 10 == +e.activityType;
      }
      function O(e) {
        var t = [],
          { activityType: r } = e;
        return r && n[r] && t.push(n[r]), t;
      }
      function S(e) {
        var t = [],
          { activityType: r } = e;
        r && i[r] && t.push(i[r]);
        var { presaleType: a } = e;
        return (
          e.presale && 0 == +a && t.push("预售"),
          e.presale && 1 == +a && t.push("定金预售"),
          e.isFCode && t.push("F码专享"),
          e.isHelpCut && t.push("砍价"),
          e.isUseGoodsExchangeCoupon && t.push("兑换券"),
          t
        );
      }
      function k(e) {
        if (m(e)) {
          var {
            quotaNum: t,
            stockNum: r,
            buyedNum: a = 0,
            availableNum: s,
          } = e;
          return null != s && "" !== s
            ? s > 0
              ? Math.min(s, r)
              : r
            : t > 0
            ? Math.min(t - a, r)
            : r;
        }
        return 0;
      }
    },
    "fq/J": function (e, t, r) {
      function a(e, t) {
        for (var r = 0; r < t.length; r++) {
          var a = t[r];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = new ((function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
        }
        var t, r, s;
        return (
          (t = e),
          (r = [
            {
              key: "info",
              value: function () {
                for (
                  var e = arguments.length, t = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  t[r] = arguments[r];
                this.callNative("info", t);
              },
            },
            {
              key: "warn",
              value: function () {
                for (
                  var e = arguments.length, t = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  t[r] = arguments[r];
                this.callNative("warn", t);
              },
            },
            {
              key: "error",
              value: function () {
                for (
                  var e = arguments.length, t = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  t[r] = arguments[r];
                this.callNative("error", t);
              },
            },
            {
              key: "assert",
              value: function (e, t) {
                e && this.error(t);
              },
            },
            {
              key: "callNative",
              value: function (e) {
                for (
                  var t,
                    r = arguments.length,
                    a = new Array(r > 1 ? r - 1 : 0),
                    s = 1;
                  s < r;
                  s++
                )
                  a[s - 1] = arguments[s];
                (t = console)[e].apply(t, a);
              },
            },
          ]) && a(t.prototype, r),
          s && a(t, s),
          e
        );
      })())();
      (t.default = s), (e.exports = t.default);
    },
    g3wL: function (e, t, r) {
      r.d(t, "a", function () {
        return s;
      }),
        r.d(t, "b", function () {
          return o;
        }),
        r.d(t, "c", function () {
          return i;
        }),
        r.d(t, "d", function () {
          return n;
        });
      var a = r("Fcif"),
        s = { limitCreate: !1, limitCreateStatus: "wating", limitTryCount: 0 };
      function o(e) {
        (s.limitCreate = !0),
          (s.limitCreateStatus = "wating"),
          (s.limitTryCount += 1),
          (e.data.limitOrder = Object(a.a)({}, s));
      }
      function i(e) {
        (s.limitCreate = !0),
          (s.limitCreateStatus = "fail"),
          (s.limitTryCount = 0),
          (e.data.limitOrder = Object(a.a)({}, s));
      }
      function n(e) {
        s.limitCreate &&
          ((s.limitTryCount = 0),
          (s.limitCreate = !1),
          (e.data.limitOrder = Object(a.a)({}, s)));
      }
    },
    griD: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.unmapActions =
          t.runProcess =
          t.mapProcess =
          t.mapEvent =
          t.mapData =
            void 0);
      var a = function (e) {
          return "function" == typeof e;
        },
        s = function (e) {
          var t = e.ctx;
          return t && t.watch && t.event && t.process ? t : e;
        },
        o = function (e, t, r) {
          var o = s(e);
          return (
            (a(t) || void 0 === t) && ((r = t), (t = e)),
            a(r) || (r = function () {}),
            [o, t, r]
          );
        };
      t.mapData = function (e, t, r, s) {
        if (!e) return [];
        var i = o(t, r, s);
        (t = i[0]), (r = i[1]), (s = i[2]), r._$unmapFns || (r._$unmapFns = []);
        var n = r._$unmapFns;
        return (
          Array.isArray(e)
            ? e.forEach(function (e) {
                n.push(
                  t.watch(e, function (t) {
                    (r[e] = t), s && s(t);
                  })
                );
              })
            : Object.keys(e).forEach(function (r) {
                n.push(
                  t.watch(r, function (t, o) {
                    var i = e[r];
                    a(i) && i(t, o), s && s(t);
                  })
                );
              }),
          r._$unmapFns
        );
      };
      t.mapEvent = function (e, t, r) {
        var s = o(t, r);
        return (
          (t = s[0]),
          (r = s[1])._$unmapFns || (r._$unmapFns = []),
          Object.keys(e).forEach(function (s) {
            var o = e[s];
            a(o) &&
              (t.event.listen(s, o),
              r._$unmapFns.push(function () {
                t.event.remove(s, o);
              }));
          }),
          r._$unmapFns
        );
      };
      t.mapProcess = function (e, t) {
        (t = s(t)),
          Object.keys(e).forEach(function (r) {
            var a = e[r];
            a instanceof Function && t.process.define(r, a);
          });
      };
      t.runProcess = function (e, t) {
        var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          a = r.initData;
        return (
          (t = s(t)),
          e.reduce(function (e, a) {
            return e.then(function (e) {
              if (r && r.interrupt)
                return Promise.reject("process manually interrupted");
              var s = t.process.invoke(a, e);
              return s instanceof Promise ? s : Promise.resolve(s);
            });
          }, Promise.resolve(a))
        );
      };
      t.unmapActions = function (e) {
        if (e && e._$unmapFns)
          for (; e._$unmapFns.length > 0; ) {
            var t = e._$unmapFns.pop();
            t && t();
          }
      };
    },
    hUYx: function (e, t, r) {
      r.d(t, "b", function () {
        return s;
      }),
        r.d(t, "a", function () {
          return o;
        });
      var a = r("US/N");
      function s(e) {
        return Object(a.default)({
          origin: "cashier",
          withCredentials: !0,
          method: "post",
          path: "/wsctrade/order/invoice/queryTaxInfoListByCorpName.json",
          data: e,
        });
      }
      function o(e) {
        return Object(a.default)({
          origin: "cashier",
          withCredentials: !0,
          method: "post",
          path: "/wsctrade/order/invoice/queryCompanyDetailTaxInfo.json",
          data: e,
        });
      }
    },
    ing0: function (e, t, r) {
      r.d(t, "d", function () {
        return c;
      }),
        r.d(t, "a", function () {
          return p;
        }),
        r.d(t, "c", function () {
          return h;
        }),
        r.d(t, "b", function () {
          return y;
        });
      var a,
        s = r("Fcif"),
        o = r("AGZf");
      !(function (e) {
        (e[(e.ForbidReceive = 0)] = "ForbidReceive"),
          (e[(e.OptionalReceive = 1)] = "OptionalReceive"),
          (e[(e.ForceReceive = 2)] = "ForceReceive");
      })(a || (a = {}));
      var i;
      a.OptionalReceive, a.ForceReceive;
      !(function (e) {
        e.EXPRESS = "express";
      })(i || (i = {}));
      var n, d;
      a.ForbidReceive;
      !(function (e) {
        e[(e.Store = 2)] = "Store";
      })(n || (n = {})),
        (function (e) {
          (e[(e.Tuan = 2)] = "Tuan"), (e[(e.CashBack = 203)] = "CashBack");
        })(d || (d = {}));
      var c = (e, t) => {
          var r = e.data.grouponModel || {},
            { header: i, receiveState: n } =
              (null == r ? void 0 : r.originGrouponData) || {};
          e.data.grouponModel = Object(s.a)({}, e.data.grouponModel, {
            isChecked: t,
            receiveByGroupHeader: !i && (n === a.ForceReceive || t),
          });
          var [d] = e.process.invoke("fetchShow");
          d.then(() => {
            t && Object(o.a)("收件人已切换为团长");
          });
        },
        l = r("E2EE"),
        u = r("q+p/"),
        p = l.initGrouponModel,
        h = (e, t) => {
          f(e, t);
        },
        y = (e, t) => {
          var r = e.data.grouponModel.originGrouponData,
            a = t === l.ExpressType.EXPRESS && r.displayAgencyReceive,
            o = a && !r.header,
            i = a && r.header;
          e.data.grouponModel = Object(s.a)({}, e.data.grouponModel, {
            expressType: t,
            showGrouponMember: o,
            showGrouponHeader: i,
          });
        },
        f = (e, t) => {
          var r,
            a,
            o =
              null == t || null == (r = t.tradeConfirmation) ? void 0 : r.group,
            i =
              null == t || null == (a = t.tradeConfirmation)
                ? void 0
                : a.activityType;
          if (o && !Object(u.c)(o)) {
            var n, d;
            null != o &&
              o.headerUserName &&
              (d = {
                userName: o.headerUserName,
                tel: o.headerTel,
                province: o.headerProvince,
                city: o.headerCity,
                county: o.headerCounty,
                areaCode: o.headerAreaCode,
                addressDetail: o.headerAddressDetail,
                community: o.headerCommunity,
                idCardNumber: o.idCardNumber,
              }),
              (e.data.grouponModel = Object(s.a)({}, e.data.grouponModel, {
                isGroupon: !0,
                isChecked:
                  o.receiveState === l.GrouponReceive.ForceReceive ||
                  (null == (n = e.data.grouponModel) ? void 0 : n.isChecked),
                originGrouponData: o,
                headerInfo: d,
                isHeader: o.header,
                receiveState: o.receiveState,
                activityType: i,
              }));
            var c = v(e.data.grouponModel),
              p = l.grouponOptionalReceiveConfig[o.receiveState],
              h =
                null == l.grouponMemberReceiveConfig
                  ? void 0
                  : l.grouponMemberReceiveConfig[o.receiveState];
            e.data.grouponModel = Object(s.a)({}, e.data.grouponModel, c, {
              textConfig: p,
              memberTextConfig: h,
            });
          }
        },
        v = (e) => {
          var t = null == e ? void 0 : e.originGrouponData,
            { header: r, receiveState: a, displayAgencyReceive: s } = t,
            { isChecked: o, expressType: i } = e,
            n = i === l.ExpressType.EXPRESS && s,
            d = n && !r,
            c = n && r;
          return {
            receiveByGroupHeader:
              !r && (a === l.GrouponReceive.ForceReceive || o),
            grouponOptionalReceive: a === l.GrouponReceive.OptionalReceive,
            showGrouponMember: d,
            showGrouponHeader: c,
          };
        };
    },
    kOvJ: function (e, t, r) {
      function a(e) {
        return (e = "00" + e).slice(-2);
      }
      function s(e) {
        var t = new Date(1e3 * e);
        return (
          t.getFullYear() + "." + a(t.getMonth() + 1) + "." + a(t.getDate())
        );
      }
      function o(e, t, r) {
        var {
            valueDesc: a,
            extraInfo: o,
            startAt: i,
            endAt: n,
            id: d,
            name: c,
            available: l = !0,
            reason: u,
            canOverlying: p = !0,
          } = e,
          h = [a],
          y = a.includes(".");
        y && (h = a.split("."));
        var f = null == o ? void 0 : o.validPeriodCopywriting;
        f || (f = s(i) + " - " + s(n));
        var v = {
          id: d,
          showDecimal: y,
          price: h[0],
          decimal: h[1],
          period: f,
          name: c,
          available: l,
          reason: u,
          canOverlying: p,
        };
        return (
          ((t && !p) || (r && r !== d)) &&
            ((v.available = !1), (v.reason = "此券暂不可和已勾选的券叠加")),
          Object.freeze(v),
          v
        );
      }
      function i(e, t, r) {
        void 0 === r && (r = {});
        var a,
          s = Object.keys(r),
          i = s.length,
          n = !1;
        if (i > 1) n = !0;
        else if (1 === i) {
          var d = e.find((e) => +e.id == +s[0]);
          d.canOverlying ? (n = !0) : (a = +d.id);
        }
        return [...e.map((e) => o(e, n, a)), ...t.map((e) => o(e))];
      }
      r.d(t, "a", function () {
        return i;
      });
    },
    ksTe: function (e, t, r) {
      r.d(t, "a", function () {
        return n;
      });
      var a = r("aDHN"),
        s = r("exEQ"),
        o = r("xqQ2");
      class i extends a.a {
        constructor() {
          super(s.b, s.c),
            this.mergeParams({
              package_name: "@assets-tee-extensions/cashier-pre",
            }),
            (this.tracker = new o.a({
              beforeAppshow() {},
              beforeEnterpage() {},
              batch: !1,
              plat: { yai: "cashier" },
            })),
            this.tracker.appShow();
        }
      }
      function n() {
        return new i();
      }
    },
    lQkc: function (e, t, r) {
      r.d(t, "a", function () {
        return a;
      });
      var a = { beforeStart: 0, start: 1, expire: 2 };
    },
    lZ1G: function (e, t, r) {
      r.d(t, "b", function () {
        return s;
      }),
        r.d(t, "d", function () {
          return o;
        }),
        r.d(t, "c", function () {
          return i;
        }),
        r.d(t, "a", function () {
          return n;
        });
      var a = r("US/N");
      function s(e) {
        return Object(a.default)({
          path: "/wscump/common/follow-report.json",
          method: "POST",
          data: e,
        });
      }
      function o(e) {
        return Object(a.default)({
          path: "/wscump/common/qr-code.json",
          data: e,
        });
      }
      function i(e) {
        return Object(a.default)({
          path: "/wscump/common/get-fans-article.json",
          data: e,
        });
      }
      function n(e) {
        return Object(a.default)({
          path: "/wscump/common/check-need-follow.json",
          data: e,
        });
      }
    },
    mhiq: function (e, t, r) {
      r.d(t, "a", function () {
        return s;
      });
      var a = r("W1Ke");
      function s(e) {
        return [
          (function (e) {
            var t = [];
            try {
              t = JSON.parse(e || "[]") || [];
            } catch (e) {}
            return t.map((e) => e.v).join("，");
          })(e.sku),
          Object(a.a)(e.properties),
        ]
          .filter((e) => !!e)
          .join("，");
      }
    },
    nUon: function (e, t, r) {
      r.d(t, "a", function () {
        return s;
      });
      var a = r("US/N");
      function s(e) {
        return Object(a.default)({
          method: "POST",
          path: "/wsctrade/order/is-support-local-switch-shop.json",
          data: e,
        });
      }
    },
    oJcc: function (e, t) {
      e.exports = {
        d: "env;4;tradeTag;4;order;4;goods;4;pay;4;prepayCardDecrease;4;couponDecreasedPhasePayment;4;themeColors;4;isDepositPresale;4",
        e: "",
        el: "",
        w: "Presale",
        wc: "Presale",
        wd: "Main",
        l: "",
        lc: "",
        p: "handlePresaleConfirm",
        pi: "mutateState;setDepositAgreement",
        c: "",
        cc: "",
      };
    },
    oULq: function (e, t, r) {
      r.d(t, "a", function () {
        return a;
      });
      var a = ["打包费"];
    },
    p97K: function (e, t) {
      e.exports = { el: "afterBlockToggle", wc: "MainContent", wd: "Main" };
    },
    pMRe: function (e, t, r) {
      r.d(t, "a", function () {
        return a;
      });
      var a = { HANDMADE: 0, AUTO: 1 };
    },
    "q+p/": function (e, t, r) {
      r.d(t, "c", function () {
        return i;
      }),
        r.d(t, "b", function () {
          return d;
        }),
        r.d(t, "a", function () {
          return c;
        });
      var a = r("Fcif"),
        s = r("lCVF"),
        o = r.n(s);
      function i(e) {
        return !((t = e),
        (r = typeof t),
        null === t ||
          ("object" !== r && "function" !== r) ||
          Object.keys(e).length);
        var t, r;
      }
      var n = 1;
      function d(e, t, r) {
        return (
          void 0 === e && (e = 0),
          void 0 === r && (r = 0),
          t === n
            ? {
                value: o()(e),
                label: "元",
                fetchGoodsRange: [r, Math.ceil(1.3 * r)],
              }
            : { value: e, label: "件" }
        );
      }
      function c(e, t) {
        var { meetType: r, originLackValue: s } = t,
          o = Object.values(e).reduce(
            (e, t) => (r === n ? e + t.price * t.num : e + t.num),
            0
          );
        return Object(a.a)({}, t, { meet: s - o < 0, lackValue: s - o });
      }
    },
    qUtW: function (e, t, r) {
      r.d(t, "a", function () {
        return n;
      }),
        r.d(t, "c", function () {
          return d;
        }),
        r.d(t, "b", function () {
          return c;
        }),
        r.d(t, "d", function () {
          return l;
        });
      var a = r("Fcif"),
        s = r("+I+c"),
        o = ["params"],
        i = () => {},
        n = (e) => {
          var t,
            r,
            n,
            d,
            c,
            l,
            { buyerId: u = 0, goods: p = {}, orderNo: h = "" } = e.data,
            y =
              (null == p || null == (t = p.list) || null == (r = t[0])
                ? void 0
                : r.goodsId) ||
              (null == p || null == (n = p[0]) ? void 0 : n.goodsId) ||
              0,
            f =
              (null == p || null == (d = p.list) || null == (c = d[0])
                ? void 0
                : c.title) ||
              (null == p || null == (l = p[0]) ? void 0 : l.title) ||
              "";
          i = (t) => {
            var r,
              { params: i } = t,
              n = Object(s.a)(t, o),
              d = Object(a.a)({}, n, {
                params: Object(a.a)({}, i, {
                  buyer_id: u,
                  goods_id: y,
                  goods_name: f,
                  order_no: h,
                }),
              });
            null == e || null == (r = e.logger) || r.log(d);
          };
        },
        d = () =>
          i({
            et: "view",
            ei: "choose_pay_method_view",
            en: "下方选择支付方式提示曝光",
            pt: "trade",
          }),
        c = () =>
          i({
            et: "click",
            ei: "choose_pay_method_click",
            en: "下方选择支付方式提示点击",
            pt: "trade",
          }),
        l = (e) =>
          i({
            et: "view",
            ei: "first_screen_show_pay",
            en: "下单页首屏直接展示支付方式",
            pt: "trade",
            params: { first_screen_show_pay: e },
          });
    },
    rVsy: function (e, t, r) {
      r.d(t, "a", function () {
        return s;
      });
      var a = r("4Oq2"),
        s = {
          watch: {
            show: {
              immediate: !0,
              handler(e) {
                e &&
                  !this.intersecObs &&
                  setTimeout(() => {
                    var e,
                      { canUseNav: t } = a.a;
                    t && (e = Object(a.b)()),
                      (this.intersecObs = this.createIntersectionObserver()
                        .relativeToViewport({ top: -e })
                        .observe(".address__title", (e) => {
                          "express" === this.expressType &&
                            this.$emit(
                              "onAddressVisibleChange",
                              e.intersectionRatio > 0
                            );
                        }));
                  }, 2500);
              },
            },
          },
        };
    },
    rhvw: function (e, t) {
      e.exports = {
        d: "contactEditing;2;isShowForcePoiSelectAddress;2;isHouseNumberRequired;2;cloudDelivery;0;cloudData;0;pageStyleConfig;4;themeTag;4;address;4;display;4;currentAddress;4;postage;4;delivery;4;goods;4;tradeTag;4;groupon;4;themeColors;4;expressType;4;showPoiPrompt;4;forcePoiSelect;4;addressEditable;4;kdtId;4;receiveByGroupHeader;4;isShowRetailDeliveryAddress;4;appShop;4;retailHouseNumberRequired;4;extra;4;storeGiftsInfo;4;env;4;selfFetch;4;isScanCodeBuy;4;themeVars;4;contact;4;themeCSS;4;isRetailOrderScene;4;retailSelfFetchContact;4;periodBuy;4;order;4;shop;4;state;4;tradeAddressVisible;4;idcard;4;ignoreIdBinding;4;orderCreated;4;hasHaitaoGoods;4;grouponModel;4;isShowForcePoiSelectAddress;4;isHouseNumberRequired;4;dataLoaded;4;isRetailWeappScene;4;cloudData;4;currentContact;4;selfFetchTime;4;showRetailPickUpWayErrorToast;6;retailPickUpWayValue;4;reserves;4",
        e: "onSelectAddress;onSelectExpressType;setGrouponIsChecked;showDeliveryScopePopup",
        el: "onDeliveryAddressCardClick;trade-buy-core:validate-effect",
        w: "DeliveryMain;AddressList;AddressListItem;AddressCard;LocalDeliveryTimeCell;SelfFetch;ContactMain;WechatAddress;WxAddress;AliAddress;XhsAddress;IdcardPopup;IdcardMain;PeriodBuy;DeliveryBlock;AddressTab",
        wc: "AddressListItem;AddressList;WechatAddress;WxAddress;AliAddress;XhsAddress;LocalDeliveryTimeCell;TimePicker;ContactList;PickUpWay;OrderActionSheet;SelfFetchShopSecondConfirmDialog;GetPhoneButton;IdcardPopup;PeriodBuy;ContactMain;DeliveryMain;SelfFetch;IdcardMain;WaitingProcess;DeliveryBlock;AddressTab;DeliveryScopePopup",
        wd: "Main",
        lc: "onEvent;setDb;triggerEvent;onEventOnce;amap;getUserInfo;h5CompressUpload",
        p: "validateSelfFetch;pickDefaultSelfFetch;changeSelfFetchShop;handleCreateOrderError;switchDeliveryTab;setLocalDeliveryTime;setSelfFetchTime;selectDelivery;setExpressWayWords;onExpressChanged",
        pi: "setSelfFetchTime;setLocalDeliveryTime;selectAddress;addAddress;deleteAddress;selectExpressType;fetchShow;mutateState;updateAddressState;switchAddressTab;setSelfFetch;selectContact;getLocation;hook:beforeGetDefaultSelfFetch;selectRetailContact;saveContact;setNewContact;setVerifyFail;updateAddress;setIdcard;setPeriodBuyChosenIndex;selectDelivery;pickDefaultSelfFetch;setExpressWayWords;onExpressChanged;confirmOrder",
      };
    },
    slIH: function (e, t, r) {
      function a(e) {
        return (
          /^\d{15}$/gi.test(e) ||
          (/^\d{17}(\d|X)$/gi.test(e) &&
            (function (e) {
              for (
                var t = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
                  r = 0,
                  a = 0,
                  s = e.length;
                a < s - 1;
                a++
              )
                r += parseInt(e.charAt(a), 10) * t[a];
              return (
                ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"][
                  r % 11
                ] === e.charAt(17).toUpperCase()
              );
            })(e))
        );
      }
      function s(e) {
        var { order: t, idcard: r, tradeTag: s } = e;
        if (s.hasOverseaGoods) {
          if (!r.name) return { name: "请输入真实姓名" };
          if (!r.number || !a(r.number))
            return { number: "请输入真实身份证号" };
          if (/^(71|81|82)/.test(r.number))
            return { number: "请输入中国大陆身份证号" };
          if (t.needIdCardPhoto && (!r.frontPhoto || !r.backPhoto))
            return { message: "请上传身份证照" };
        }
        return "";
      }
      r.d(t, "a", function () {
        return s;
      });
    },
    snsr: function (e, t, r) {
      function a(e) {
        return (e = "00" + e).slice(-2);
      }
      function s(e) {
        var t = new Date(1e3 * e);
        return (
          t.getFullYear() + "." + a(t.getMonth() + 1) + "." + a(t.getDate())
        );
      }
      r.d(t, "b", function () {
        return s;
      }),
        r.d(t, "a", function () {
          return o;
        });
      var o = { 10: "抖音券", 11: "美团券" };
    },
    u694: function (e, t) {
      e.exports = {
        d: "",
        e: "",
        el: "",
        w: "",
        wc: "PopupContent;PointWarnPopup",
        wd: "Main",
        l: "",
        lc: "",
        p: "",
        pi: "",
        c: "",
        cc: "",
      };
    },
    vSgT: function (e, t, r) {},
    x4qm: function (e, t) {
      e.exports = {
        d: "state;4;isExistDiscountExcludePrePayCard;4;couponModel;4;displayCard;4;displayFreeCard;4;customerCards;4;unavailableCustomerCards;4",
        e: "sku:show;sku:hide;showCouponList;postagetool:show;reward:show;toggleMembershipDialog",
        el: "",
        w: "Main",
        wc: "TradeBuyUmpBlock",
        wd: "Main",
        l: "",
        lc: "",
        p: "",
        pi: "closeValueCard;setPrepayCardCheckStatus;fetchShow;confirmOrder;setOrderForbidCoupon;setOrderForbidPreference;setDisableStoredDiscount;setPointDeductionUsed;setCustomCard;setDisplayCard;setPeriodBuyChosenIndex;switchPlusBuyGoodsProcess;switchGoods;addAllGoods;fetchSkuData;addCouponProcess;setCouponChosenIdProcess;exchangeCouponPromise;getAddsOnePageDetail;calcPostage;modifyCacheOrder;resetPostageTool;savePostageTool;setUmpActivity;setPointDeductionCost;mutateState;selectCustomerCard;openValueCard;toggleCouponListPopup;setIgnoreVirtualCoupon;showPrePayCardRecharge;setSelfFetch",
        c: "",
        cc: "",
      };
    },
    xZbU: function (e, t, r) {
      function a(e, t) {
        for (var r = 0; r < t.length; r++) {
          var a = t[r];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function s(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            s(this, "_eventMap", void 0),
            s(this, "_id", void 0),
            (this._eventMap = new Map()),
            (this._id = 0);
        }
        var t, r, o;
        return (
          (t = e),
          (r = [
            {
              key: "listen",
              value: function (e, t, r) {
                return this.createEvent({ name: e, callback: t, once: !1 }, r);
              },
            },
            {
              key: "remove",
              value: function (e, t) {
                if (t) {
                  var r = this._eventMap.get(e);
                  r && this._removeEventByFn(r, t);
                } else this._eventMap.delete(e);
              },
            },
            {
              key: "once",
              value: function (e, t, r) {
                return this.createEvent({ name: e, callback: t, once: !0 }, r);
              },
            },
            {
              key: "emit",
              value: function (e) {
                for (
                  var t = this,
                    r = arguments.length,
                    a = new Array(r > 1 ? r - 1 : 0),
                    s = 1;
                  s < r;
                  s++
                )
                  a[s - 1] = arguments[s];
                var o = this._eventMap.get(e);
                return o
                  ? (o.forEach(function (e) {
                      var r = e.id,
                        s = e.callback,
                        i = e.once,
                        n = e.ctx;
                      s && s.apply(n, a), i && t._removeEventById(o, r);
                    }),
                    this)
                  : this;
              },
            },
            {
              key: "createEvent",
              value: function (e, t) {
                var r = this,
                  a = e.name,
                  s = e.callback,
                  o = e.once,
                  i = this._eventMap.get(a) || [],
                  n = ++this._id;
                return (
                  i.push({ id: n, once: o, callback: s, ctx: t }),
                  this._eventMap.set(a, i),
                  function () {
                    i && r._removeEventById(i, n);
                  }
                );
              },
            },
            {
              key: "_removeEventById",
              value: function (e, t) {
                for (var r = 0; r < e.length; r++)
                  if (e[r].id === t) {
                    e.splice(r, 1);
                    break;
                  }
              },
            },
            {
              key: "_removeEventByFn",
              value: function (e, t) {
                for (var r = 0; r < e.length; r++)
                  if (e[r].callback === t) {
                    e.splice(r, 1);
                    break;
                  }
              },
            },
          ]) && a(t.prototype, r),
          o && a(t, o),
          e
        );
      })();
      (t.default = o), (e.exports = t.default);
    },
    xjQ3: function (e, t, r) {
      r.d(t, "a", function () {
        return s;
      });
      var a = r("US/N"),
        s = (e) =>
          Object(a.default)({
            origin: "cashier",
            path: "/pay/wsctrade/order/buy/exchangeCoupon.json",
            method: "POST",
            data: e,
            withCredentials: !0,
          });
    },
    yCQO: function (e, t) {
      e.exports = {
        d: "drugState;2;drugState;6;state;6;goods;4;orderCreated;4;themeColors;6",
        e: "onDrugPageShow",
        el: "onDrugPageShow",
        w: "Main",
        wc: "",
        wd: "Main",
        l: "",
        lc: "setDb;onEvent;offEvent",
        p: "showYiYaoBuyDialog;setTitleName;setShowDrugUser",
        pi: "setShowDrugUser",
        li: "onPageShow",
      };
    },
    "yX/E": function (e, t, r) {
      r.d(t, "a", function () {
        return s;
      });
      var a = r("Fcif");
      function s() {
        var e = [];
        return (
          e.push(
            Object(a.a)(
              { payChannel: "WX_APPLET", payChannelName: "微信支付" },
              { available: !0 }
            )
          ),
          e
        );
      }
    },
    zs4L: function (e, t, r) {
      t.a = (e) =>
        new Promise((t, r) => {
          wx.getSetting({
            success: (a) => {
              a.authSetting[e]
                ? t()
                : wx.authorize({ scope: e, success: t, fail: r });
            },
            fail: r,
          });
        });
    },
  });
