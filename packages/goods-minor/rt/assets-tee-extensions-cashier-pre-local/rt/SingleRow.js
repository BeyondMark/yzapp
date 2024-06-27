"use strict";
var r = require("~/r");
r(
  "f5uc",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "23p4": function (e, t, a) {
        a.d(t, "g", function () {
          return r;
        }),
          a.d(t, "f", function () {
            return c;
          }),
          a.d(t, "b", function () {
            return o;
          }),
          a.d(t, "e", function () {
            return l;
          }),
          a.d(t, "a", function () {
            return s;
          }),
          a.d(t, "d", function () {
            return i;
          }),
          a.d(t, "c", function () {
            return n;
          });
        var s,
          i,
          n,
          r = "fail jsapi has no permission",
          c = { bank_card: "credit_mock", instalment: "instalment_mock" },
          o = {
            shouldWrap: !1,
            availableStatus: "AVALIABLE",
            balance: "",
            balanceDesc: "",
            color: "#44BB00",
            availableDesc: "",
            available: !0,
            recommend: !1,
            channelType: "INNER_NO_VARIFY",
            valueCardNo: "",
          },
          l = {
            info: function () {},
            warn: function () {},
            error: function () {},
          };
        !(function (e) {
          e[(e.Agreement = 1)] = "Agreement";
        })(s || (s = {})),
          (function (e) {
            (e[(e.ApplySuccess = 0)] = "ApplySuccess"),
              (e[(e.ApplyFail = 1)] = "ApplyFail"),
              (e[(e.Processing = 2)] = "Processing"),
              (e[(e.BuyerPaid = 3)] = "BuyerPaid"),
              (e[(e.Success = 4)] = "Success"),
              (e[(e.Fail = 5)] = "Fail"),
              (e[(e.Closed = 6)] = "Closed"),
              (e[(e.Bounce = 7)] = "Bounce");
          })(i || (i = {})),
          (function (e) {
            (e.Unauthorized = "UNAUTHORIZED"),
              (e.Authorizing = "AUTHORIZING"),
              (e.Authorized = "AUTHORIZED");
          })(n || (n = {}));
      },
      "F/Kf": function (e, t, a) {
        a.d(t, "a", function () {
          return i;
        });
        var s = a("bb6g"),
          i = (function (e) {
            function t(t, a, s, i) {
              var n = e.call(this, a) || this;
              return (
                (n.type = t),
                (n.message = a),
                (n.data = s),
                (n.name = "收银台支付异常"),
                i && (n.stack = i),
                n
              );
            }
            return Object(s.__extends)(t, e), t;
          })(Error);
      },
      Laof: function (e, t, a) {
        var s, i;
        a.d(t, "b", function () {
          return s;
        }),
          a.d(t, "a", function () {
            return i;
          }),
          (function (e) {
            (e[(e.Consumer = 0)] = "Consumer"),
              (e[(e.Merchant = 1)] = "Merchant");
          })(s || (s = {})),
          (function (e) {
            (e[(e.False = 0)] = "False"), (e[(e.True = 1)] = "True");
          })(i || (i = {}));
      },
      aDHN: function (e, t, a) {
        a.d(t, "a", function () {
          return r;
        });
        var s = a("bb6g"),
          i = a("23p4"),
          n = a("bErL");
        var r = (function () {
          function e(e, t) {
            void 0 === e &&
              (e = function () {
                return Promise.resolve({});
              }),
              void 0 === t && (t = i.e),
              (this.request = e),
              (this.skynet = t),
              (this.params = {
                channel_change_count: 0,
                list_stay_time: 0,
                open_list_latest_time: 0,
                start_pay_first_time: 0,
                start_pay_latest_time: 0,
                client_pay_success_time: 0,
                server_pay_success_time: 0,
                client_prepay_start_time: 0,
                server_prepay_start_time: 0,
                client_prepay_success_time: 0,
                server_prepay_success_time: 0,
                start_pay_latest_to_client_pay_success_time: 0,
                start_pay_first_to_client_prepay_success_time: 0,
                start_pay_latest_to_client_prepay_success_time: 0,
                client_prepay_success_to_client_pay_success_time: 0,
                server_prepay_success_to_server_pay_success_time: 0,
                client_prepay_start_to_client_prepay_success_time: 0,
                start_pay_first_to_client_pay_success_time: 0,
                start_pay_first_to_server_pay_success_time: 0,
                start_pay_latest_to_server_pay_success_time: 0,
                start_pay_first_to_server_prepay_success_time: 0,
                start_pay_latest_to_server_prepay_success_time: 0,
                component: "cashier_zan_pay",
              });
          }
          return (
            (e.prototype.getParams = function () {
              return this.params;
            }),
            (e.prototype.getUUID = function () {
              return this.tracker.getLogParams().user.uuid;
            }),
            (e.prototype.track = function (e, t) {
              try {
                this.tracker.log({
                  et: "custom",
                  ei: e,
                  en:
                    ((a = e),
                    (i =
                      Object.keys(n.b).find(function (e) {
                        return n.b[e] === a;
                      }) || ""),
                    n.a[i] || ""),
                  params: Object(s.__assign)(
                    Object(s.__assign)(Object(s.__assign)({}, this.params), t),
                    { component: "cashier_zan_pay" }
                  ),
                });
              } catch (e) {
                this.skynet.error("埋点上报失败", {
                  message: e.message,
                  stack: e.stack,
                  params: this.params,
                });
              }
              var a, i;
            }),
            (e.prototype.mergeParams = function (e) {
              try {
                for (var t = 0, a = Object.entries(e); t < a.length; t++) {
                  var s = a[t],
                    i = s[0],
                    n = s[1];
                  null != n && (this.params[i] = n);
                }
                null != e.kdt_id &&
                  this.tracker.setEvent({ si: String(e.kdt_id) }),
                  null != e.buyer_id &&
                    this.tracker.setUser({ li: String(e.buyer_id) }),
                  null != e.kdt_id &&
                    this.tracker.setUser({ m: String(e.mobile) });
              } catch (e) {
                this.skynet.warn("埋点参数合并失败（" + e.message + "）", {
                  name: e.name,
                  message: e.message,
                  stack: e.stack,
                  error: e,
                });
              }
            }),
            (e.prototype.trackPaySuccess = function () {
              try {
                this.mergeParams({ client_pay_success_time: Date.now() });
                var e = this.params,
                  t = e.start_pay_latest_time,
                  a = e.client_prepay_success_time,
                  s = e.client_pay_success_time,
                  i = t ? s - t : 0,
                  r = a ? s - a : 0;
                this.mergeParams({
                  start_pay_latest_to_client_pay_success_time: i,
                  client_prepay_success_to_client_pay_success_time: r,
                }),
                  this.track(n.b.PaySuccess);
              } catch (e) {
                this.skynet.warn("支付成功事件上报失败（" + e.message + "）", {
                  name: e.name,
                  message: e.message,
                  stack: e.stack,
                  error: e,
                });
              }
            }),
            (e.prototype.readCache = function (e) {
              var t = this;
              return this.request({
                method: "GET",
                origin: "cashier",
                path: "assets/api/union/track/params/" + e,
              })
                .then(function (e) {
                  if (e && "string" == typeof e) {
                    var a = JSON.parse(e);
                    t.mergeParams(a);
                  }
                })
                .catch(function (e) {
                  t.skynet.warn("读取埋点缓存失败（" + e.message + "）", {
                    name: e.name,
                    message: e.message,
                    stack: e.stack,
                    error: e,
                  });
                });
            }),
            e
          );
        })();
      },
      bErL: function (e, t, a) {
        var s, i;
        a.d(t, "b", function () {
          return s;
        }),
          a.d(t, "a", function () {
            return i;
          }),
          (function (e) {
            (e.StartPay = "cashier_start_pay"),
              (e.StartPayClick = "cashier_start_pay_click"),
              (e.PrepayStart = "cashier_client_prepay_start"),
              (e.PrepaySuccess = "cashier_client_prepay_success"),
              (e.PrepayFail = "cashier_client_prepay_fail"),
              (e.PayActionAbort = "pay_action_abort"),
              (e.PaySuccess = "cashier_client_pay_success"),
              (e.PaywaySelectDecide = "payway_select_decide"),
              (e.SelectPayToolFromList = "select_pay_tool_from_list"),
              (e.RecommandPaywayClick = "recomend_payway_click"),
              (e.BeforeCreditAuthorization = "before_credit_authorization"),
              (e.CreditAuthorizationSuccess = "credit_authorization_success"),
              (e.CreditAuthorizationFail = "credit_authorization_fail"),
              (e.CreditAuthorizationFinally = "credit_authorization_finally"),
              (e.CloseCashier = "close_cashier"),
              (e.Ready = "cashier_ready"),
              (e.ShowList = "cashier_show_list"),
              (e.ChangeChannel = "cashier_change_channel"),
              (e.Wxh5DowngradePay = "wxh5_downgrade_pay");
          })(s || (s = {})),
          (function (e) {
            (e.StartPay = "开始支付流程"),
              (e.StartPayClick = "开始支付流程"),
              (e.PrepayStart = "发起预支付"),
              (e.PrepaySuccess = "预支付成功"),
              (e.PrepayFail = "预支付失败"),
              (e.PayActionAbort = "支付动作中断"),
              (e.PaySuccess = "支付成功"),
              (e.PaywaySelectDecide = "确认选择支付方式"),
              (e.SelectPayToolFromList = "在支付方式列表选中支付方式"),
              (e.RecommandPaywayClick = "点击推荐支付方式"),
              (e.BeforeCreditAuthorization = "调用信用授权之前"),
              (e.CreditAuthorizationSuccess = "信用授权成功"),
              (e.CreditAuthorizationFail = "信用授权失败"),
              (e.CreditAuthorizationFinally = "信用授权结束"),
              (e.CloseCashier = "关闭收银台"),
              (e.Ready = "初始化完成"),
              (e.ShowList = "展示支付方式列表页"),
              (e.ChangeChannel = "更换支付方式");
          })(i || (i = {}));
      },
      exEQ: function (e, t, a) {
        a.d(t, "c", function () {
          return n;
        }),
          a.d(t, "a", function () {
            return r.a;
          }),
          a.d(t, "b", function () {
            return r.b;
          });
        var s,
          i = a("8mzt");
        s = i.a;
        var n = {
            info: function (e, t) {
              try {
                s.log({
                  appName: "assets-cashier",
                  logIndex: "js_stack_trace",
                  level: "info",
                  name: e,
                  message: JSON.stringify(t),
                });
              } catch (e) {}
            },
            warn: function (e, t) {
              try {
                s.log({
                  appName: "assets-cashier",
                  logIndex: "js_stack_trace",
                  level: "warn",
                  name: e,
                  message: JSON.stringify(t),
                });
              } catch (e) {}
            },
            error: function (e, t) {
              try {
                s.log({
                  appName: "assets-cashier",
                  logIndex: "js_stack_trace",
                  level: "error",
                  name: e,
                  message: JSON.stringify(t),
                });
              } catch (e) {}
            },
          },
          r = a("c4zd");
      },
      f5uc: function (e, t, a) {
        a.r(t);
        var s = a("eijD"),
          i = a("Fcif"),
          n = a("ANY2"),
          r = a("8Ulw"),
          c = a("AGZf"),
          o = a("exEQ"),
          l = a("Laof"),
          _ = a("iKV5"),
          h = a("bErL"),
          y = a("F/Kf"),
          p = a("SEvj"),
          u = a("xyqL"),
          m = a("bdYe"),
          d = a.n(m),
          g = a("exMg"),
          P = a.n(g),
          f = a("jmjq"),
          v = a.n(f),
          C = a("YeA1"),
          k = {
            props: {
              customClass: String,
              mobile: String,
              height: [String, Number],
              traceId: [String, Number],
              biz: { type: String, required: !0 },
              amount: { type: Number, required: !0 },
              themeColor: { type: String, required: !0 },
              excludePayChannels: { type: Array, default: () => [] },
              disablePayChannels: { type: Array, default: () => [] },
              isCellMode: { type: Boolean, default: !1 },
              externalChannelList: { type: Boolean, default: !1 },
            },
            data: () => ({
              selected: null,
              channels: null,
              showList: !1,
              showPayPasser: !1,
              showPayLogin: !1,
              showDialog: !1,
              showQRCode: !1,
              showCopyLink: !1,
              qrCodeUrl: "",
              copiedLink: "",
              payPass: "",
              loginPass: "",
              instalment: null,
              dialogOptions: Object(i.a)({}, p.d),
            }),
            computed: {
              wrapperStyle() {
                return this.isCellMode ? "" : "height: 20px; line-height: 20px";
              },
              computedHeight() {
                var { height: e } = this;
                return "number" == typeof e ? e + "px" : e;
              },
              filteredChannels() {
                var {
                  channels: e,
                  excludePayChannels: t,
                  amount: a,
                  disablePayChannels: s,
                } = this;
                return (
                  e &&
                  e
                    .filter((e) => t.every((t) => t !== e.payChannel))
                    .filter((e) => {
                      var t,
                        s,
                        i,
                        n =
                          null !=
                          (t =
                            null == (s = e.ext) ||
                            null == (i = s.payAmountLimit)
                              ? void 0
                              : i.min)
                            ? t
                            : 0;
                      return a >= n;
                    })
                    .map((e) => {
                      var t,
                        n,
                        r = s.find((t) => t.payChannel === e.payChannel);
                      if (r)
                        return Object(i.a)({}, e, {
                          available: !1,
                          channelNotice: r.message,
                        });
                      var { max: c = [], min: o = [] } = e.price || {},
                        [_ = 1 / 0, h = "该支付方式暂不可使用"] = c || [],
                        [y = 0, p = "该支付方式暂不可使用"] = o || [],
                        { min: u, max: m } =
                          null !=
                          (t = null == (n = e.ext) ? void 0 : n.payAmountLimit)
                            ? t
                            : {};
                      if (
                        (m &&
                          ((_ = m),
                          (h = "支付金额大于¥" + v()(_) + "时不可使用")),
                        u &&
                          ((y = u),
                          (p = "支付金额小于¥" + v()(y) + "时不可使用")),
                        a > _)
                      )
                        return Object(i.a)({}, e, {
                          available: !1,
                          channelNotice: h,
                        });
                      if (a < y)
                        return Object(i.a)({}, e, {
                          available: !1,
                          channelNotice: p,
                        });
                      if (e.ext && e.ext.instalments) {
                        var { instalmentFreeChargeAmountLimit: g = {} } = e.ext;
                        return Object(i.a)({}, e, {
                          ext: Object(i.a)({}, e.ext, {
                            instalments: e.ext.instalments.map((e, t) => {
                              var s;
                              return Object(i.a)({}, e, {
                                chargePayer:
                                  a >= (g.min || 0) &&
                                  a <= (null != (s = g.max) ? s : 1 / 0)
                                    ? e.chargePayer
                                    : l.b.Consumer,
                                amount: v()(d()(a, e.num)),
                                charges: v()(P()(d()(a, e.num), e.rate)),
                                totalCharges: v()(P()(a, e.rate)),
                                defaultChose: !t,
                              });
                            }),
                          }),
                        });
                      }
                      if (e.balance && Number(e.balance) < a)
                        return Object(i.a)({}, e, {
                          available: !1,
                          channelNotice: "剩余可用余额不足",
                        });
                      return e;
                    })
                    .sort(_.a)
                );
              },
            },
            watch: {
              selected(e) {
                e &&
                  (this.$emit("change", e.payChannel),
                  this.ctx.event.emit("cashier:change", e.payChannel)),
                  (this.ctx.data.prePaySelected = e);
              },
              computedHeight: {
                handler(e) {
                  this.ctx.data.computedHeight = e;
                },
                immediate: !0,
              },
              instalment(e) {
                this.ctx.data.prePayInstalment = e;
              },
              showList(e) {
                this.ctx.data.prePayShowList = e;
              },
              showPayPasser(e) {
                this.ctx.data.prePayShowPayPasser = e;
              },
              payPass(e) {
                this.ctx.data.prePayPass = e;
              },
              filteredChannels(e) {
                var t,
                  { selected: a, amount: s } = this;
                if (
                  ((this.ctx.data.prePayFilteredChannels = e),
                  e &&
                    s > 0 &&
                    (!a ||
                      null ==
                        (t = e.find((e) => e.payChannel === a.payChannel)) ||
                      !t.available ||
                      e.every((e) => e.payChannel !== a.payChannel)))
                ) {
                  var i,
                    n,
                    r = e.find((e) => e.available);
                  if (
                    ((this.selected = r),
                    (this.instalment =
                      (null == (i = r.ext)
                        ? void 0
                        : i.instalments.find((e) => e.defaultChose)) || null),
                    r)
                  )
                    this.payService.tracker.mergeParams({
                      pay_channel: r.payChannel,
                      selected_instalment_num:
                        null == (n = this.instalment) ? void 0 : n.num,
                    });
                }
              },
            },
            created() {
              var e = this;
              return Object(s.a)(function* () {
                var t = yield a
                    .e("packages/async-main/chunk")
                    .then(a.bind(null, "J4S/")),
                  s = Object(n.a)(t.default);
                (e.payService = new s({
                  rantaCtx: e.ctx,
                  biz: e.biz || "unknown",
                  type: "PRE",
                  useTypeRouter: !1,
                  onPaySuccessSync: function () {
                    for (
                      var t = arguments.length, a = new Array(t), s = 0;
                      s < t;
                      s++
                    )
                      a[s] = arguments[s];
                    var i = e.ctx.process.invoke("onPaySuccessSync", ...a);
                    return Promise.all(i);
                  },
                  onPaySuccess: function () {
                    for (
                      var t = arguments.length, a = new Array(t), s = 0;
                      s < t;
                      s++
                    )
                      a[s] = arguments[s];
                    e.$emit("pay-success", ...a);
                  },
                  onCashierFail: function () {
                    for (
                      var t = arguments.length, a = new Array(t), s = 0;
                      s < t;
                      s++
                    )
                      a[s] = arguments[s];
                    e.$emit("error", ...a);
                  },
                  onNavigate: () => {
                    e.$emit("navigate");
                  },
                })),
                  e.ctx.process.define("pay", e.pay),
                  e.payService
                    .init({
                      "update-event-emitter": e.createSetter("EE"),
                      "copy-link": e.copyLink,
                      "show-pay-passer": e.createSetter("showPayPasser", !0),
                      "close-pay-passer": e.createSetters(
                        ["showPayPasser", !1],
                        ["payPass", ""]
                      ),
                      "show-pay-login": e.createSetter("showPayLogin", !0),
                      "close-pay-login": e.createSetters(
                        ["showPayLogin", !1],
                        ["loginPass", ""]
                      ),
                      "show-dialog": e.openDialog,
                      "close-dialog": e.closeDialog,
                      "show-all": e.createSetter("showAll", !0),
                      createTracker: r.a,
                      toast: e.toast,
                      clear: e.clear,
                    })
                    .then(() => {
                      var { kdt_id: t, buyer_id: a } =
                          e.payService.tracker.getParams(),
                        s = Date.now() + "-" + t + "-" + a + "-" + e.traceId;
                      (e.cashierTraceId = s),
                        Object(o.b)({
                          path: "assets/api/union/" + e.biz + "/pre-channels",
                          data: {
                            cashierTraceId: s,
                            cashierBizExt: JSON.stringify({
                              PRIOR_USE_PAY: "v1",
                              CHANGE_PAY: "v1",
                              BANK_CARD_PAY: "v1",
                              INSTALMENT_PAY: "v1",
                              ALIPAY_HBFQ: "v1",
                              ALIPAY_APPLET_PAY: "v1",
                              WX_APP_PAY: "v1",
                              ALIPAY_FLOWER_PAY: "v1",
                              ALIPAY_AGREEMENT_PAY: "v1",
                              BANK_TRANSFER_LARGE_PAY: "v1",
                            }),
                            excludePayTools: e.excludePayChannels.join(","),
                          },
                        })
                          .catch((t) => {
                            var a = Object(u.a)();
                            return (
                              o.c.error(
                                "支付方式查询失败 " +
                                  (t.message || t.msg) +
                                  " 降级到默认支付方式 biz: " +
                                  e.biz,
                                {
                                  error: t,
                                  message: t.message,
                                  msg: t.msg,
                                  code: t.code,
                                  status: t.status,
                                  name: t.name,
                                  channels: a,
                                }
                              ),
                              a
                            );
                          })
                          .then((t) => {
                            (e.channels = t || Object(u.a)()),
                              (e.payService.payChannels = t),
                              (e.unwatchPreferredPayChannel = e.ctx.watch(
                                "preferredPayChannel",
                                (t) => {
                                  if (t) {
                                    e.ctx.data.preferredPayChannel = "";
                                    var a = e.channels.find(
                                      (e) => e.payChannel === t && e.available
                                    );
                                    a && (e.selected = a);
                                  }
                                }
                              )),
                              e.payService.tracker.mergeParams({
                                cashier_trace_id: s,
                                from_biz: e.biz,
                                pay_channels: t
                                  .map((e) => e.payChannel)
                                  .join(","),
                                exclude_pay_channels:
                                  e.excludePayChannels.join(","),
                                disable_pay_channels: e.disablePayChannels
                                  .map((e) => e.payChannel)
                                  .join(","),
                                ready_time: Date.now(),
                                list_stay_time: 0,
                              }),
                              e.payService.tracker.track(h.b.Ready);
                          });
                    }),
                  Object(C.d)(e, {
                    onPrePayChannelChange: (t) => e.onChannelChange(t),
                    onPrePayCloseList: () => e.closeList(),
                    onPrePayPassForget: (t) => e.onPayPassForget(t),
                    onPrePayPassUpdate: (t) => e.onPayPassUpdate(t),
                    onPrePayPassCheck: (t) => e.onPayPassCheck(t),
                    onPrePayPassClose: (t) => e.onPayPassClose(t),
                  });
              })();
            },
            destroyed() {
              this.ctx.process.undef("pay", this.pay),
                this.unwatchPreferredPayChannel &&
                  this.unwatchPreferredPayChannel();
            },
            methods: {
              doShowList() {
                (this.showList = !0),
                  this.payService.tracker.mergeParams({
                    list_opened: !0,
                    open_list_latest_time: Date.now(),
                  }),
                  this.payService.tracker.track(h.b.ShowList);
              },
              closeList() {
                this.showList = !1;
                var { tracker: e } = this.payService,
                  { list_stay_time: t, open_list_latest_time: a } =
                    e.getParams();
                e.mergeParams({ list_stay_time: t + (Date.now() - a) });
              },
              onChannelChange(e) {
                this.closeList(),
                  (this.selected = e),
                  this.payService.tracker.mergeParams({
                    pay_channel: e.payChannel,
                  }),
                  this.payService.tracker.track(h.b.ChangeChannel, {
                    last_pay_channel: this.selected.payChannel,
                  });
              },
              createSetter(e, t) {
                return (a) => {
                  this[e] = null != t ? t : a;
                };
              },
              createSetters() {
                for (
                  var e = arguments.length, t = new Array(e), a = 0;
                  a < e;
                  a++
                )
                  t[a] = arguments[a];
                return () => {
                  for (var e of t) {
                    var [a, s] = e;
                    this[a] = s;
                  }
                };
              },
              toast(e) {
                var { mask: t, title: a, icon: s, duration: i } = e;
                if ("loading" === s) {
                  var n = { message: a, duration: i };
                  return (
                    t && ((n.overlay = !0), (n.forbidClick = !0)),
                    c.a.loading(n)
                  );
                }
                return Object(c.a)(e);
              },
              clear: c.a.clear,
              checkCashOnDeliveryFlow() {
                return this.dialogOptions.message === p.b;
              },
              openDialog(e) {
                (this.dialogOptions = Object(i.a)({}, p.d, e)),
                  (this.showDialog = !0);
              },
              onQRCodeClose() {
                this.showQRCode = !1;
              },
              onDialogConfirm() {
                if (this.checkCashOnDeliveryFlow()) this.$$emit("do-pay", p.a);
                else {
                  if (this.dialogOptions.message === p.c) {
                    var e;
                    this.$$emit("pay-success", {
                      payChannel:
                        null == (e = this.active) ? void 0 : e.payChannel,
                    }),
                      this.$$emit("cancel-polling-pay-status");
                    var t = Date.now();
                    return (
                      this.$$emit("view-payload", {
                        click_copy_link_to_click_pay_success_time: (e) =>
                          e.click_copy_link_time
                            ? t - e.click_copy_link_time
                            : 0,
                        show_copy_link_latest_to_click_pay_success_time: (e) =>
                          e.show_copy_link_latest_time
                            ? t - e.show_copy_link_latest_time
                            : 0,
                        click_pay_success_time: () => t,
                      }),
                      void this.$$emit("view-track", h.b.PaySuccessFromCopyLink)
                    );
                  }
                  this.$$emit("exception-confirm");
                }
              },
              onDialogCancel() {
                if (this.checkCashOnDeliveryFlow()) this.showDialog = !1;
                else {
                  if (this.dialogOptions.message === p.c) {
                    (this.showCopyLink = !1),
                      this.doShowList(),
                      this.$$emit("cancel-polling-pay-status");
                    var e = Date.now();
                    return (
                      this.$$emit("view-payload", {
                        click_copy_link_to_click_change_channel_time: (t) =>
                          t.click_copy_link_time
                            ? e - t.click_copy_link_time
                            : 0,
                        show_copy_link_latest_to_click_change_channel_time: (
                          t
                        ) =>
                          t.show_copy_link_latest_time
                            ? e - t.show_copy_link_latest_time
                            : 0,
                        click_change_channel_time: () => e,
                      }),
                      void this.$$emit(
                        "view-track",
                        h.b.ChangeChannelFromCopyLink
                      )
                    );
                  }
                  this.$$emit("exception-cancel");
                }
              },
              closeDialog() {
                this.showDialog = !1;
              },
              onPayPassForget() {
                this.$$emit("paypass-forget");
              },
              onPayPassUpdate(e) {
                this.payPass = e;
              },
              onPayPassCheck(e) {
                this.$$emit("exception-confirm", e);
              },
              onPayPassClose() {
                (this.showPayPasser = !1),
                  (this.payPass = ""),
                  this.$$emit("cashier-fail", new y.a("cancel", "取消支付"));
              },
              onPayLoginClose() {
                (this.showPayLogin = !1),
                  (this.loginPass = ""),
                  this.$$emit("cashier-fail", new y.a("cancel", "取消支付"));
              },
              onPayLoginChange(e) {
                this.loginPass = e;
              },
              onPayLoginSubmit(e) {
                this.$$emit("exception-confirm", e);
              },
              onPayLoginForget() {
                this.$$emit("paylogin-forget");
              },
              $$emit() {
                this.EE && this.EE.emit(...arguments);
              },
              copyLink(e) {
                (this.copiedLink = e),
                  (this.showCopyLink = !0),
                  setTimeout(() => {
                    this.$$emit("view-payload", {
                      show_copy_link_latest_time: () => Date.now(),
                    });
                  }, 300);
              },
              closeCopyLink() {
                (this.showCopyLink = !1),
                  (this.show = !0),
                  this.$$emit("cashier-fail", new y.a("cancel", "取消支付"));
              },
              onCopy() {
                var e = Date.now();
                this.$$emit("view-payload", {
                  click_copy_link_time: () => e,
                  show_copy_link_latest_to_click_copy_link_time: (t) =>
                    t.show_copy_link_latest_time
                      ? e - t.show_copy_link_latest_time
                      : 0,
                }),
                  this.$$emit("view-track", h.b.CopyLink);
                Object(c.a)("复制成功", { duration: 2e3 }),
                  setTimeout(() => {
                    var e;
                    this.openDialog({
                      message: p.c,
                      cancelButtonText: "更换支付方式",
                      showCancelButton: !0,
                      confirmButtonText: "已完成支付",
                    }),
                      this.$$emit("polling-pay-status"),
                      null == (e = this.EE) ||
                        e.once("polling-pay-status-finish", () => {
                          this.closeDialog(),
                            this.doShowList(),
                            (this.showCopyLink = !1);
                        });
                  }, 2e3);
              },
              pay(e) {
                var t, a;
                if (this.selected) {
                  var { payService: s } = this;
                  try {
                    var { tracker: i } = s,
                      n = Date.now();
                    i.mergeParams({ start_pay_latest_time: n }),
                      i.getParams().start_pay_first_time ||
                        i.mergeParams({ start_pay_first_time: n }),
                      i.mergeParams({
                        ready_time_to_prepay_start_time:
                          n - i.getParams().ready_time,
                      });
                  } catch (e) {}
                  s.updatePayContext(e),
                    s.track_StartPay(this.payService.context.payData),
                    s.doPay(this.selected.payChannel, {
                      instalmentNum:
                        null == (t = this.instalment) ? void 0 : t.num,
                      instalmentChargePayer:
                        null == (a = this.instalment) ? void 0 : a.chargePayer,
                    });
                }
              },
            },
            ud: !0,
          },
          w = a("9ZMt");
        t.default = w.default.component(k);
      },
      iKV5: function (e, t, a) {
        function s(e, t) {
          return !e.available && t.available
            ? 1
            : e.available && !t.available
            ? -1
            : 0;
        }
        a.d(t, "a", function () {
          return s;
        });
      },
    }
  )
);
