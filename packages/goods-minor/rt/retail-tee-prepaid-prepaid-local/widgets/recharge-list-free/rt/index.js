"use strict";
var r = require("~/r");
r(
  "PXPL",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      PXPL: function (e, t, r) {
        r.r(t);
        var i = r("eijD"),
          a = r("Fcif"),
          s = r("+I+c"),
          c = r("AGZf"),
          o = r("w2Y9"),
          d = r.n(o),
          n = r("CaE8"),
          h = r("Yiq8"),
          l = r("25nr"),
          u = r("4s30"),
          g = r("9ZMt"),
          f = r("Kfn+"),
          p = r("YcCB"),
          y = r("YeA1"),
          O = r("b4An"),
          b = ["rechargeType", "reduction", "discount"],
          { dmc: R } = Object(y.a)(),
          m = !1;
        function N(e) {
          return e === l.b.FreeOrder ? "免单" : "优惠";
        }
        var v = {
          props: {
            product: { type: Object, default: () => ({}) },
            kdtId: Number,
            generalThemeColor: String,
            originPay: Number,
          },
          data: () => ({
            cardNoSign: "",
            outBizNo: "",
            orderInfo: {},
            isError: !1,
            isFromOtherPagePayBack: !1,
            initialShow: !1,
            selectedIndex: -1,
            isRecharging: !1,
            finalOrderNo: "",
          }),
          computed: {
            rechargeDiscount() {
              return this.product.rechargeDiscount || {};
            },
            list() {
              return this.product
                ? this.product.rechargeDiscount.rules.map((e) => {
                    var { rechargeType: t, reduction: r, discount: i } = e,
                      c = Object(s.a)(e, b),
                      o = "本单";
                    return (
                      t === l.b.FreeOrder && (o += "免单"),
                      t === l.b.Discount && (o += i / 10 + "折"),
                      t === l.b.Reduce && (o += "减" + Object(f.a)(r) + "元"),
                      Object(a.a)({}, c, {
                        slogan: o,
                        rechargeType: t,
                        discount: i,
                        reduction: r,
                      })
                    );
                  })
                : [];
            },
            selected() {
              return -1 === this.selectedIndex
                ? {}
                : this.rechargeDiscount.rules[this.selectedIndex];
            },
            selectedRechargeType() {
              return this.selected.rechargeType;
            },
          },
          watch: {
            product: {
              handler() {
                Object(h.o)({ listType: "free" }),
                  (this.selectedIndex = -1),
                  this.setPayRechargeInfo(null);
              },
              immediate: !0,
            },
          },
          created() {
            this.initDefineProcess();
          },
          methods: {
            setPayRechargeInfo(e) {
              if (e) {
                var t,
                  r = "";
                if (this.selectedRechargeType === l.b.FreeOrder) r = "本单免单";
                else
                  this.selectedRechargeType === l.b.Discount &&
                    (t = this.originPay * (e.discount / 100)),
                    this.selectedRechargeType === l.b.Reduce &&
                      (t = this.originPay - e.reduction),
                    (r = this.originPay
                      ? e.slogan + "，仅需¥" + Object(f.a)(t, !0)
                      : e.slogan);
                this.ctx.data.payRechargeInfo = {
                  amount: "" + Object(f.a)(this.selected.amount, !0),
                  tips: r,
                  btnText: "充值并支付",
                };
              } else this.ctx.data.payRechargeInfo = null;
            },
            onSelect(e) {
              var { item: t, idx: r } = e;
              if (
                (Object(h.m)({
                  selectInfo: { idx: r, isSelect: this.selectedIndex === r },
                  listType: "free",
                }),
                this.selectedIndex === r)
              )
                return (
                  (this.selectedIndex = -1),
                  void (this.ctx.data.payRechargeInfo = null)
                );
              (this.selectedIndex = r), this.setPayRechargeInfo(t);
            },
            initDefineProcess() {
              this.ctx.process.define(
                "freeOrderJumpToResult",
                this.freeOrderJumpToResult.bind(this)
              ),
                this.ctx.process.define(
                  "freeOrderGetStatus",
                  this.freeOrderGetStatus.bind(this)
                ),
                this.ctx.process.define("doRecharge", () => {
                  this.onRecharge();
                });
            },
            freeOrderGetStatus(e) {
              var { rechargeNo: t = "", updateState: r = !1 } = e;
              if (t) {
                this.outBizNo = t;
                var i = d.a.get("is_free_order", window.location.href);
                r &&
                  ((this.isFromOtherPagePayBack = !0),
                  Object(u.b)("订单" + N(i) + "中\n请稍候")),
                  this.rollPayingStatusFree(1);
              }
            },
            freeOrderJumpToResult(e) {
              void 0 === e && (e = {});
              var t = () => {
                  var { orderNo: t = "" } = e;
                  n.e.call(this);
                  var r = n.a.call(this),
                    i = Object(O.a)(
                      "/wscassets/card/free-order-result?kdt_id=" +
                        this.kdtId +
                        "&mode=free-order-result",
                      "h5"
                    );
                  null != this.outBizNo &&
                    (i = d.a.add(i, { recharge_no: this.outBizNo })),
                    null != t && (i = d.a.add(i, { order_no: t })),
                    null != r && (i = d.a.add(i, { order_amount: r })),
                    null != this.selectedRechargeType &&
                      (i = d.a.add(i, {
                        recharge_type: this.selectedRechargeType,
                      })),
                    setTimeout(() => {
                      g.default.navigate({ type: "redirectTo", url: i });
                    }, 1e3);
                },
                r = () => {
                  c.a.clear(),
                    c.a.success(
                      this.selectedRechargeType === l.b.FreeOrder
                        ? "免单成功"
                        : "充值成功"
                    ),
                    setTimeout(() => {
                      this.selectedRechargeType !== l.b.FreeOrder
                        ? g.default.navigate({
                            type: "redirectTo",
                            url:
                              "web" === g.default.platform
                                ? "/pay/wsctrade_pay?order_no=" +
                                  this.finalOrderNo +
                                  "&kdt_id=" +
                                  this.kdtId
                                : "/packages/order/index?orderNo=" +
                                  this.finalOrderNo,
                          })
                        : R.redirectTo("OrderPayResult", {
                            orderNo: this.finalOrderNo,
                            request_no: this.finalOrderNo,
                          });
                    }, 500);
                };
              setTimeout(() => {
                Object(u.b)("查询优惠中"),
                  this.pollingFreeOrderStatus(r.bind(this), t.bind(this));
              }, 2e3);
            },
            onClose() {
              var e = this;
              return Object(i.a)(function* () {
                e.isError && (yield n.d.bind(e)(!1)), e.$emit("onClose");
              })();
            },
            onRecharge() {
              var e = this;
              return Object(i.a)(function* () {
                if (
                  (Object(h.l)({ listType: "free" }), e.initPayServiceFree())
                ) {
                  if (
                    (Object(h.a)(),
                    0 === e.selectedIndex && Object(h.c)({ isBest: 1 }),
                    !(yield n.d.call(e)))
                  )
                    return Object(c.a)("更新订单信息失败，请稍后重试");
                  n.e.call(e),
                    Object(u.b)("充值中，请稍候"),
                    e.toggleRecharging(!0),
                    e.product.cardNo && (e.cardNoSign = e.product.cardNo),
                    n.g
                      .call(e)
                      .then(() => {
                        c.a.clear(), e.startCashierPay(n.c.call(e));
                      })
                      .finally(() => {
                        c.a.clear();
                      });
                }
              })();
            },
            startCashierPay(e) {
              m = !1;
              var t = {
                prepayParams: e,
                _afterRechargePreOrderHook: () => {
                  this.ctx.process.invoke("mutateState", (e) => {
                    localStorage.setItem(
                      "recharge-free-order-state-snapshot",
                      JSON.stringify(e)
                    );
                  });
                },
              };
              this.payServiceFree
                .startPay(t)
                .catch(() => {})
                .finally(() => {
                  this.toggleRecharging(!1);
                });
            },
            initPayServiceFree() {
              if (this.payServiceFree) return !0;
              try {
                var [e] = this.ctx.process.invoke("prepaidCommonPay");
                return (
                  e.setConfig({
                    onPaySuccess: () => {
                      (m = !0),
                        Object(u.b)("充值中，请稍候"),
                        this.rollPayingStatusFree(1);
                    },
                    onCashierClose: () => {
                      m || n.d.bind(this)(!1);
                    },
                    onCashierFail: () => {
                      c.a.fail("支付失败，请返回重新下单"), n.d.bind(this)(!1);
                    },
                  }),
                  e.use(n.b.bind(this)),
                  e.use(u.a.bind(this)),
                  (this.payServiceFree = e),
                  !0
                );
              } catch (e) {
                return c.a.fail("收银台加载失败,请稍后重试"), !1;
              }
            },
            rollPayingStatusFree(e) {
              Object(u.c)(this.outBizNo)
                .then((t) => {
                  var { status: r } = t;
                  if (2 === r)
                    return (
                      n.f.bind(this)(!1),
                      void this.ctx.event.emit(
                        "recharge-free-order:on-confirm",
                        {
                          rechargeNo: this.outBizNo,
                          rechargeType: this.selectedRechargeType,
                        }
                      )
                    );
                  if ([0, 3, 4, 7].includes(r)) {
                    var i = new Error("充值状态异常");
                    throw ((i.msg = "充值状态异常"), i);
                  }
                  if (e > 60) {
                    var a = new Error("充值超时");
                    throw ((a.msg = "充值超时"), a);
                  }
                  return setTimeout(
                    () => this.rollPayingStatusFree(e + 1),
                    1e3
                  );
                })
                .catch((e) => {
                  c.a.clear(), c.a.fail(e.msg), this.freeOrderJumpToResult();
                });
            },
            pollingFreeOrderStatus(e, t, r) {
              if ((void 0 === r && (r = 1), !(r > 10)))
                return Object(p.b)({ rechargeNo: this.outBizNo }).then((i) => {
                  var { status: a = l.a.FETCHING, outBizNo: s } = i;
                  return (
                    (this.finalOrderNo = s),
                    (function (e) {
                      return [l.a.FREE_ORDER_SUCCESS, l.a.DISCOUNTED].includes(
                        e
                      );
                    })(a)
                      ? (Object(h.p)({ listType: "free" }), void e())
                      : [
                          l.a.FREE_ORDER_REFUNDING,
                          l.a.RECHARGE_FAIL,
                          l.a.FREE_ORDER_FAIL,
                        ].includes(a) ||
                        !(function (e) {
                          return [
                            l.a.FETCHING,
                            l.a.RECHARGING,
                            l.a.RECHARGE_SUCCESS,
                            l.a.REFUNDING,
                            l.a.FREEING,
                            l.a.FREE_ORDER_REFUNDING,
                            l.a.DISCOUNTING,
                          ].includes(e);
                        })(a)
                      ? (Object(h.k)({ listType: "free" }), void t())
                      : void setTimeout(() => {
                          this.pollingFreeOrderStatus(e, t, r + 1);
                        }, 500)
                  );
                });
            },
            updateGlobalState() {
              this.isFromOtherPagePayBack &&
                this.ctx.process.invoke("mutateState", (e) => {
                  try {
                    var t = localStorage.getItem(
                      "recharge-free-order-state-snapshot"
                    );
                    if (t) {
                      var r = JSON.parse(t);
                      Object.keys(e).forEach((t) => {
                        e[t] = r[t];
                      });
                    }
                  } catch (e) {
                    c.a.fail(
                      "初始化" +
                        N(this.selectedRechargeType) +
                        "信息失败，正在跳转结果页"
                    ),
                      this.freeOrderJumpToResult();
                  }
                });
            },
            toggleRecharging(e) {
              this.isRecharging = e;
            },
          },
          ud: !0,
        };
        t.default = g.default.component(v);
      },
    }
  )
);
