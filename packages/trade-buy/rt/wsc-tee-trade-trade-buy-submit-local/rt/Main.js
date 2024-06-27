"use strict";
var r = require("~/r");
r(
  "zBr1",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      zBr1: function (e, t, r) {
        r.r(t);
        var o = r("eijD"),
          a = r("Fcif"),
          i = r("VmHG"),
          s = r("DXKY"),
          c = r("9ZMt"),
          n = (r("US/N"), r("AGZf")),
          l = r("YeA1"),
          d = r("zjWU"),
          u = r("w2Y9"),
          h = r.n(u),
          g = (r("2bgu"), r("Fa1b")),
          p = r("4LIW"),
          y = r("PKOW"),
          m = r("ZIKc"),
          b = {
            data() {
              return Object(a.a)(
                { cashierReady: !1 },
                Object(i.d)(this, [
                  "isPayBtnLoading",
                  "display",
                  "address",
                  "shop",
                  "kdtId",
                  "showSubscribeGuide",
                  "buttonText",
                  "order",
                  "miniprogram",
                  "pay",
                  "payRechargeInfo",
                ])
              );
            },
            logicData: () => ({
              enableUseOrderBehaviorParam: !1,
              isDrugShop: !1,
              closePrivacyAgreement: !1,
            }),
            created() {
              (this.switchHexToRgb = this.ctx.lambdas.hexToRgb),
                Object(l.b)(this, [
                  "enableUseOrderBehaviorParam",
                  "isDrugShop",
                  "state",
                ]),
                Object(l.b)(this, {
                  address: (e) => {
                    this.address = Object(a.a)({}, e);
                  },
                  enableUseUserAuthorize: (e) => {
                    this.store.setEnableUseUserAuthorizeCopy(e);
                  },
                }),
                Object(l.d)(this, {
                  "cashier:ready": () => {
                    this.cashierReady = !0;
                  },
                });
            },
            mounted() {
              this.ctx.process.define(
                "gotoPayResult",
                this.gotoPayResult.bind(this)
              ),
                this.ctx.process.define(
                  "submitOrder",
                  this.submitOrder.bind(this)
                ),
                this.ctx.process.define("onPaySuccess", (e, t) =>
                  this.onPaySuccess.call(this, e, t)
                ),
                this.ctx.process.define("onPayFail", (e) =>
                  this.onPayFail.call(this, e)
                ),
                this.ctx.process.define(
                  "submitOrderAfterRisk",
                  this.submitOrderAfterRisk.bind(this)
                ),
                Object(l.d)(this, {
                  "cashier:pay:success": (e) =>
                    this.onPaySuccess(this.ctx.data.orderResult, e),
                  "cashier:pay:fail": () =>
                    this.onPayFail(this.ctx.data.orderResult),
                });
            },
            destroyed() {
              this.getProtocol().then((e) => {
                e.off();
              });
            },
            methods: {
              behaviorDidMount() {
                try {
                  r.e("packages/async-main/chunk")
                    .then(r.bind(null, "9RNk"))
                    .then((e) => {
                      var { behaviorInit: t } = e;
                      t(this.$refs.behaviorTest);
                    });
                } catch (e) {}
              },
              handleForPayJumpBack() {
                if (h.a.get("is_free_order", window.location.href)) {
                  var e = h.a.get("checkRecharge", window.location.href);
                  e &&
                    this.ctx.process.invoke("freeOrderGetStatus", {
                      rechargeNo: e,
                      updateState: !0,
                    });
                }
              },
              getStringColor(e, t) {
                switch (typeof e) {
                  case "string":
                    return e;
                  case "object":
                    return e.end || e.start;
                  default:
                    return t;
                }
              },
              getProtocol() {
                return (
                  this.$_protocol ||
                    (this.$_protocol = Promise.resolve(
                      this.ctx.process.invoke("invoke-protocol").pop()
                    )
                      .then((e) => {
                        if (!e) throw new Error("invoke-protocol empty");
                        return e;
                      })
                      .catch((e) => {
                        throw ((this.$_protocol = null), e);
                      })),
                  this.$_protocol
                );
              },
              getAuthProtocolPatch() {
                return this.ctx.lambdas
                  .getUserInfo(this.kdtId)
                  .then((e) => {
                    var t;
                    if (null == e || null == (t = e.state) || !t.protocol)
                      throw new Error("Protocol not auth.");
                    return e;
                  })
                  .catch(() => this.getProtocol().then((e) => e.auth()));
              },
              authProtocol() {
                return new Promise((e) => {
                  this.getAuthProtocolPatch()
                    .then(() => {
                      e(!0);
                    })
                    .catch(() => {
                      e(!1);
                    });
                });
              },
              authProtocolByTimeout() {
                return Promise.race([
                  this.authProtocol(),
                  new Promise((e) => {
                    setTimeout(() => {
                      e(null);
                    }, 1e4);
                  }),
                ]);
              },
              submitOrderAfterRisk() {
                var e = this;
                return Object(o.a)(function* () {
                  e.stopLoading(), yield e.submitOrder({}, !0);
                })();
              },
              customLogger(e, t) {
                void 0 === t && (t = "finish"),
                  e
                    ? d.a.end({
                        name: d.b.create_order,
                        type: t,
                        level: "error" === t ? "error" : "info",
                        extra: { message: e },
                      })
                    : d.a.start({ name: d.b.create_order, timeout: 4 });
              },
              submitOrder(e, t) {
                var r = this;
                return Object(o.a)(function* () {
                  var i, c, l, d, u, h, g, y;
                  void 0 === e && (e = {}),
                    void 0 === t && (t = !1),
                    yield r.ctx.cloud.invoke("beforeSubmitOrder");
                  var b = Object(p.a)(r.ctx);
                  if ((b("start"), r.customLogger(), !r.isPayBtnLoading)) {
                    var { HAVE_MUST_ITEMS: f } =
                      (null == (i = r.ctx) || null == (c = i.data)
                        ? void 0
                        : c.extra) || {};
                    if ("0" !== f) {
                      if (
                        ((r.isPayBtnLoading = !0),
                        b("one", {
                          closePrivacyAgreement: r.closePrivacyAgreement,
                        }),
                        !r.closePrivacyAgreement)
                      )
                        try {
                          var v = yield r.authProtocolByTimeout();
                          if (
                            (null === v &&
                              r.customLogger(
                                "下单页协议授权-协议授权超时",
                                "error"
                              ),
                            b("two", { isAuthProtocol: v }),
                            !v)
                          )
                            return void r.stopLoading();
                        } catch (e) {
                          return (
                            r.stopLoading(),
                            void r.customLogger(
                              "下单页协议授权-协议授权报错",
                              "error"
                            )
                          );
                        }
                      try {
                        var P,
                          x,
                          { weAppFormId: O } = r.order.source;
                        !O &&
                          null != (P = e) &&
                          null != (x = P.detail) &&
                          x.formId &&
                          r.ctx.process.invoke("mutateState", (t) => {
                            var r, o;
                            t.order.source = Object(a.a)({}, t.order.source, {
                              weAppFormId:
                                null == (r = e) || null == (o = r.detail)
                                  ? void 0
                                  : o.formId,
                            });
                          });
                      } catch (e) {}
                      var { openDisplayCard: k } =
                        (null == (l = r.ctx) || null == (d = l.data)
                          ? void 0
                          : d.display) || {};
                      b("five"),
                        k &&
                          r.ctx.logger &&
                          r.ctx.logger.log({
                            et: "click",
                            ei: "buy_membercard",
                            en: "下单时选择办卡并购买",
                            pt: "trade",
                            params: {},
                          }),
                        r.isDrugShop &&
                          ("去支付" === r.buttonText
                            ? r.ctx.logger &&
                              r.ctx.logger.log({
                                et: "click",
                                ei: "click_gopay",
                                en: "点击_去支付",
                                pt: "trade",
                                params: {},
                              })
                            : r.ctx.logger &&
                              r.ctx.logger.log({
                                et: "click",
                                ei: "click_SubmitRequirements",
                                en: "点击“提交需求”",
                                pt: "ConfirmRequirements",
                                params: {},
                              })),
                        Object(p.b)(r.ctx),
                        (r.ctx.data.buyButtonClickTime = Date.now());
                      var [R] = r.ctx.process.invoke("createOrder", {
                        loading: !(
                          null != (u = r.ctx.data) &&
                          null != (h = u.state) &&
                          null != (g = h.order) &&
                          null != (y = g.config) &&
                          y.isChooseFreeOrder
                        ),
                        confirmRisk: t,
                      });
                      R.then(
                        (function () {
                          var e = Object(o.a)(function* (e) {
                            r.customLogger("创建订单成功"),
                              r.cashierReady ||
                                (yield Object(m.b)(() => r.cashierReady));
                            try {
                              yield r.ctx.process.invoke("checkOrderPay")[0],
                                yield r.handleBeforeStartPay(),
                                r.ctx.process
                                  .invoke("startPay")[0]
                                  .then((t) => {
                                    r.ctx.logger &&
                                      r.ctx.logger.log({
                                        et: "custom",
                                        ei: "trade_buy_pay_success_callback",
                                        pt: "trade",
                                        params: { desc: JSON.stringify(t) },
                                      }),
                                      r.onPaySuccess(e, t);
                                  })
                                  .catch((t) => {
                                    throw (
                                      (n.a.loading({ forbidClick: !0 }),
                                      r.stopLoading(),
                                      r.onPayFail(e),
                                      t)
                                    );
                                  });
                            } catch (e) {
                              r.ctx.data.buyButtonClickTime = 0;
                            }
                          });
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })()
                      ).catch((e) => {
                        var t = (r.ctx.data.monitorLoggerFilterCode || "")
                            .split(",")
                            .map((e) => +e),
                          o = e,
                          a = "finish";
                        if ("object" == typeof e) {
                          var {
                              message: i,
                              msg: c,
                              error: n,
                              data: l = {},
                              code: d,
                            } = e || {},
                            u = d || l.code;
                          (o = i || c || l.msg || n),
                            t.includes(u) || (a = "error");
                        }
                        r.customLogger(o, a),
                          (r.ctx.data.buyButtonClickTime = 0),
                          "PRESALE_CONFIRM" === e &&
                            s.a.trigger("SCROLL_TO_PRE_SALE"),
                          setTimeout(() => {
                            r.stopLoading();
                          }, 1500);
                      });
                    } else r.ctx.event.emit("toggleRequiredPopup", !0);
                  }
                })();
              },
              handleBeforeStartPay: () => Object(o.a)(function* () {})(),
              onPaySuccess(e, t) {
                var { payChannel: r, payChannelName: o } =
                  void 0 === t ? { payChannel: "", payChannelName: "" } : t;
                Promise.all([
                  this.ctx.cloud.invoke("afterOrderPaid", { payChannel: r }),
                  this.ctx.cloud.invoke("afterOrderPay", {
                    payWay: { payChannel: r, payChannelName: o },
                  }),
                ]).then(() => {
                  Object(p.a)(this.ctx)("skipResult"), this.gotoPayResult();
                });
              },
              gotoPayResult(e) {
                this.goToPaySuccess().then((e) => {
                  e.startsWith("/packages/order/paid")
                    ? Object(y.f)({
                        pageType: y.b.PAID,
                        query: h.a.getAll(e),
                        type: y.a.REDIRECT,
                      })
                    : c.default.navigate({ type: "redirectTo", url: e });
                });
              },
              onPayFail(e) {
                var { orderNo: t } = e || {};
                this.ctx.process.invoke("mutateState", (e) => {
                  (e.orderKeepApply = !1),
                    Object(y.f)({
                      pageType: y.b.PAY,
                      type: y.a.REDIRECT,
                      query: { orderNo: t },
                    });
                });
              },
              stopLoading() {
                this.isPayBtnLoading = !1;
              },
              goToPaySuccess() {
                this.ctx.process.invoke("mutateState", (e) => {
                  e.orderPaid = !0;
                });
                for (
                  var e = arguments.length, t = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  t[r] = arguments[r];
                return g.a.call(this, ...t);
              },
            },
          };
        t.default = c.default.component(b);
      },
    }
  )
);
