"use strict";
var r = require("~/r");
r(
  "DkxV",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      DkxV: function (e, a, t) {
        t.r(a);
        var n = t("Fcif"),
          r = t("eijD"),
          c = t("8pRd"),
          s = t("YeA1"),
          i = {
            data: () => ({
              shop: {},
              themeColors: {},
              enableMultiplePay: !1,
              user: {},
              mobile: "",
              loginCheck: () => Promise.resolve(),
            }),
            created() {
              var e = this;
              Object(s.b)(this, [
                "shop",
                "themeColors",
                "enableMultiplePay",
                "loginCheck",
              ]),
                (this.construction = new Promise((a) => {
                  var { getUserInfo: n } = this.ctx.lambdas,
                    i = n();
                  Object(s.c)(this, ["biz", "quickMode", "shop"], {
                    callback: (n) => {
                      var { biz: o, quickMode: l } = n,
                        { origin: h } = this.ctx.data;
                      i.then(
                        (function () {
                          var n = Object(r.a)(function* (n) {
                            var { mobile: r } = n;
                            e.mobile = r;
                            var i = yield t
                                .e("packages/async-main/chunk")
                                .then(t.bind(null, "J4S/")),
                              y = Object(c.a)(i.default);
                            (e.payService = new y({
                              rantaCtx: e.ctx,
                              biz: o,
                              origin: h,
                              quickMode: l,
                              enableMultiplePay: e.enableMultiplePay,
                              loginCheck: e.loginCheck,
                              account: r,
                              kdtId: e.shop.kdtId,
                              onPaySuccessSync: function () {
                                for (
                                  var a = arguments.length,
                                    t = new Array(a),
                                    n = 0;
                                  n < a;
                                  n++
                                )
                                  t[n] = arguments[n];
                                var r = e.ctx.process.invoke(
                                  "onPaySuccessSync",
                                  ...t
                                );
                                return Promise.all(r);
                              },
                              onPaySuccess: function () {
                                e.successTrigger && e.successTrigger();
                                for (
                                  var a = arguments.length,
                                    t = new Array(a),
                                    n = 0;
                                  n < a;
                                  n++
                                )
                                  t[n] = arguments[n];
                                e.ctx.event.emit("cashier:pay:success", ...t);
                              },
                              onCashierFail: function () {
                                for (
                                  var a = arguments.length,
                                    t = new Array(a),
                                    n = 0;
                                  n < a;
                                  n++
                                )
                                  t[n] = arguments[n];
                                e.ctx.event.emit("cashier:pay:fail", ...t);
                              },
                              onCashierClose: () => {
                                e.ctx.event.emit("cashier:close");
                              },
                              onCashierOpened: () => {
                                e.ctx.event.emit("cashier:opened");
                              },
                            })),
                              Object(s.e)(e, {
                                startPay: e.payService.startPay.bind(
                                  e.payService
                                ),
                                requestOrderPayment:
                                  e.payService.requestOrderPayment.bind(
                                    e.payService
                                  ),
                                queryPayChannels: e.queryPayChannels.bind(e),
                                doPay: e.doPay.bind(e),
                                extPay: e.payService.extPay.bind(e.payService),
                              }),
                              a();
                          });
                          return function (e) {
                            return n.apply(this, arguments);
                          };
                        })()
                      ).catch(a);
                    },
                    isOnce: !0,
                  });
                }));
            },
            methods: {
              queryPayChannels(e) {
                return this.construction.then(() => {
                  var a = this.payService;
                  try {
                    var t = Date.now(),
                      n = a.tracker;
                    n.mergeParams({ start_pay_latest_time: t }),
                      n.getParams().start_pay_first_time ||
                        n.mergeParams({ start_pay_first_time: t });
                  } catch (e) {}
                  if (e.wxOrderInfo) {
                    a.updatePayContext(e);
                    try {
                      a.track_StartPay(a.context.payData);
                    } catch (e) {}
                    return Promise.resolve([
                      { payChannel: "WX_APPLET", payChannelName: "微信支付" },
                    ]);
                  }
                  return (
                    a.updateCashierType("A"),
                    a.queryPayChannels(e).then((e) =>
                      e.map((e) => {
                        var { payChannel: a, payChannelName: t } = e;
                        return { payChannel: a, payChannelName: t };
                      })
                    )
                  );
                });
              },
              doPay(e) {
                return this.construction.then(
                  () =>
                    new Promise((a, t) => {
                      var n, r, c;
                      if ("string" == typeof e) n = e;
                      else {
                        var s = e || {};
                        (n = s.payChannel),
                          (r = s.paySuccessInterceptor),
                          (c = s.channelSpecialLogic);
                      }
                      this.invokeOnPayItemClick(n, {
                        success: () => {
                          this.payService
                            .doPayWithInterceptor({
                              payChannel: n,
                              paySuccessInterceptor: r,
                              channelSpecialLogic: c,
                            })
                            .catch(t),
                            (this.successTrigger = a);
                        },
                      });
                    })
                );
              },
              initPayService(e) {
                this.construction.then(() => {
                  this.payService.init(Object(n.a)({}, e));
                });
              },
              onChangeChannel(e) {
                var a = this;
                return Object(r.a)(function* () {
                  var { channel: t, callback: n } = e;
                  a.invokeOnPayItemClick(t, { success: n });
                })();
              },
              invokeOnPayItemClick(e, a) {
                var { success: t } = a;
                try {
                  this.ctx.process
                    .invokePipe("onPayItemClick", e)
                    .then(() => {
                      t && t();
                    })
                    .catch(() => {});
                } catch (e) {
                  var n = new RegExp(
                    "未在.*对应的.*中声明.*process.*onPayItemClick"
                  );
                  throw (
                    ("RantaRuntimeError" === e.name &&
                      n.test(e.message) &&
                      t &&
                      t(),
                    e)
                  );
                }
              },
            },
            ud: !0,
          },
          o = t("9ZMt");
        a.default = o.default.component(i);
      },
      exEQ: function (e, a, t) {
        t.d(a, "c", function () {
          return c;
        }),
          t.d(a, "a", function () {
            return s.a;
          }),
          t.d(a, "b", function () {
            return s.b;
          });
        var n,
          r = t("8mzt");
        n = r.a;
        var c = {
            info: function (e, a) {
              try {
                n.log({
                  appName: "assets-cashier",
                  logIndex: "js_stack_trace",
                  level: "info",
                  name: e,
                  message: JSON.stringify(a),
                });
              } catch (e) {}
            },
            warn: function (e, a) {
              try {
                n.log({
                  appName: "assets-cashier",
                  logIndex: "js_stack_trace",
                  level: "warn",
                  name: e,
                  message: JSON.stringify(a),
                });
              } catch (e) {}
            },
            error: function (e, a) {
              try {
                n.log({
                  appName: "assets-cashier",
                  logIndex: "js_stack_trace",
                  level: "error",
                  name: e,
                  message: JSON.stringify(a),
                });
              } catch (e) {}
            },
          },
          s = t("c4zd");
      },
    }
  )
);
