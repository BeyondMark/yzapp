"use strict";
var r = require("~/r");
r(
  "uKw5",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "23p4": function (e, a, t) {
        t.d(a, "g", function () {
          return i;
        }),
          t.d(a, "f", function () {
            return c;
          }),
          t.d(a, "b", function () {
            return o;
          }),
          t.d(a, "e", function () {
            return l;
          }),
          t.d(a, "a", function () {
            return r;
          }),
          t.d(a, "d", function () {
            return s;
          }),
          t.d(a, "c", function () {
            return n;
          });
        var r,
          s,
          n,
          i = "fail jsapi has no permission",
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
        })(r || (r = {})),
          (function (e) {
            (e[(e.ApplySuccess = 0)] = "ApplySuccess"),
              (e[(e.ApplyFail = 1)] = "ApplyFail"),
              (e[(e.Processing = 2)] = "Processing"),
              (e[(e.BuyerPaid = 3)] = "BuyerPaid"),
              (e[(e.Success = 4)] = "Success"),
              (e[(e.Fail = 5)] = "Fail"),
              (e[(e.Closed = 6)] = "Closed"),
              (e[(e.Bounce = 7)] = "Bounce");
          })(s || (s = {})),
          (function (e) {
            (e.Unauthorized = "UNAUTHORIZED"),
              (e.Authorizing = "AUTHORIZING"),
              (e.Authorized = "AUTHORIZED");
          })(n || (n = {}));
      },
      "F/Kf": function (e, a, t) {
        t.d(a, "a", function () {
          return s;
        });
        var r = t("bb6g"),
          s = (function (e) {
            function a(a, t, r, s) {
              var n = e.call(this, t) || this;
              return (
                (n.type = a),
                (n.message = t),
                (n.data = r),
                (n.name = "收银台支付异常"),
                s && (n.stack = s),
                n
              );
            }
            return Object(r.__extends)(a, e), a;
          })(Error);
      },
      Hvpf: function (e, a, t) {
        function r(e, a) {
          var t, r;
          return (
            e.payChannel === a.payChannel &&
            (null === (t = e.ext) || void 0 === t ? void 0 : t.agType) ===
              (null === (r = a.ext) || void 0 === r ? void 0 : r.agType)
          );
        }
        t.d(a, "a", function () {
          return r;
        });
      },
      Laof: function (e, a, t) {
        var r, s;
        t.d(a, "b", function () {
          return r;
        }),
          t.d(a, "a", function () {
            return s;
          }),
          (function (e) {
            (e[(e.Consumer = 0)] = "Consumer"),
              (e[(e.Merchant = 1)] = "Merchant");
          })(r || (r = {})),
          (function (e) {
            (e[(e.False = 0)] = "False"), (e[(e.True = 1)] = "True");
          })(s || (s = {}));
      },
      aDHN: function (e, a, t) {
        t.d(a, "a", function () {
          return i;
        });
        var r = t("bb6g"),
          s = t("23p4"),
          n = t("bErL");
        var i = (function () {
          function e(e, a) {
            void 0 === e &&
              (e = function () {
                return Promise.resolve({});
              }),
              void 0 === a && (a = s.e),
              (this.request = e),
              (this.skynet = a),
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
            (e.prototype.track = function (e, a) {
              try {
                this.tracker.log({
                  et: "custom",
                  ei: e,
                  en:
                    ((t = e),
                    (s =
                      Object.keys(n.b).find(function (e) {
                        return n.b[e] === t;
                      }) || ""),
                    n.a[s] || ""),
                  params: Object(r.__assign)(
                    Object(r.__assign)(Object(r.__assign)({}, this.params), a),
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
              var t, s;
            }),
            (e.prototype.mergeParams = function (e) {
              try {
                for (var a = 0, t = Object.entries(e); a < t.length; a++) {
                  var r = t[a],
                    s = r[0],
                    n = r[1];
                  null != n && (this.params[s] = n);
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
                  a = e.start_pay_latest_time,
                  t = e.client_prepay_success_time,
                  r = e.client_pay_success_time,
                  s = a ? r - a : 0,
                  i = t ? r - t : 0;
                this.mergeParams({
                  start_pay_latest_to_client_pay_success_time: s,
                  client_prepay_success_to_client_pay_success_time: i,
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
              var a = this;
              return this.request({
                method: "GET",
                origin: "cashier",
                path: "assets/api/union/track/params/" + e,
              })
                .then(function (e) {
                  if (e && "string" == typeof e) {
                    var t = JSON.parse(e);
                    a.mergeParams(t);
                  }
                })
                .catch(function (e) {
                  a.skynet.warn("读取埋点缓存失败（" + e.message + "）", {
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
      bErL: function (e, a, t) {
        var r, s;
        t.d(a, "b", function () {
          return r;
        }),
          t.d(a, "a", function () {
            return s;
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
          })(r || (r = {})),
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
          })(s || (s = {}));
      },
      exEQ: function (e, a, t) {
        t.d(a, "c", function () {
          return n;
        }),
          t.d(a, "a", function () {
            return i.a;
          }),
          t.d(a, "b", function () {
            return i.b;
          });
        var r,
          s = t("8mzt");
        r = s.a;
        var n = {
            info: function (e, a) {
              try {
                r.log({
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
                r.log({
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
                r.log({
                  appName: "assets-cashier",
                  logIndex: "js_stack_trace",
                  level: "error",
                  name: e,
                  message: JSON.stringify(a),
                });
              } catch (e) {}
            },
          },
          i = t("c4zd");
      },
      iKV5: function (e, a, t) {
        function r(e, a) {
          return !e.available && a.available
            ? 1
            : e.available && !a.available
            ? -1
            : 0;
        }
        t.d(a, "a", function () {
          return r;
        });
      },
      uKw5: function (e, a, t) {
        t.r(a);
        var r = t("eijD"),
          s = t("Fcif"),
          n = t("dXF6"),
          i = t("ksTe"),
          c = t("AGZf"),
          o = t("exEQ"),
          l = t("Laof"),
          h = t("iKV5"),
          u = t("Hvpf"),
          _ = t("bErL"),
          y = t("F/Kf"),
          p = t("aXAF"),
          m = t("yX/E"),
          d = t("bdYe"),
          f = t.n(d),
          v = t("exMg"),
          g = t.n(v),
          P = t("jmjq"),
          b = t.n(P),
          C = t("YeA1"),
          w = {
            props: { customClass: String, customStyle: String, inset: Boolean },
            data: () => ({
              amount: 0,
              selected: null,
              channels: null,
              showMore: !1,
              showPayPasser: !1,
              showCaptchaPad: !1,
              showPayLogin: !1,
              showDialog: !1,
              showQRCode: !1,
              showCopyLink: !1,
              showOfflinePayForm: !1,
              qrCodeUrl: "",
              copiedLink: "",
              payPass: "",
              loginPass: "",
              instalment: null,
              dialogOptions: Object(s.a)({}, p.c),
              themeColors: {},
              mobile: "",
              excludePayChannels: [],
              origin: "cashier",
            }),
            computed: {
              showMoreTrigger() {
                return (
                  !this.showMore &&
                  this.filteredChannels &&
                  this.filteredChannels.length > 3
                );
              },
              visible() {
                var { amount: e, visibleChannels: a } = this;
                return !!(e && a && a.length);
              },
              visibleChannels() {
                return this.showMore
                  ? this.filteredChannels
                  : this.filteredChannels && this.filteredChannels.slice(0, 3);
              },
              filteredChannels() {
                var { channels: e, excludePayChannels: a, amount: t } = this;
                return (
                  e &&
                  (a ? e.filter((e) => a.every((a) => a !== e.payChannel)) : e)
                    .filter((e) => {
                      var a,
                        r,
                        s,
                        n =
                          null !=
                          (a =
                            null == (r = e.payAmountLimitations) ||
                            null == (s = r.min)
                              ? void 0
                              : s.value)
                            ? a
                            : 0;
                      return t >= n;
                    })
                    .map((e) => {
                      var { max: a = {}, min: r = {} } =
                          e.payAmountLimitations || {},
                        {
                          value: n = 1 / 0,
                          message: i = n === 1 / 0
                            ? []
                            : [
                                {
                                  type: "text",
                                  value:
                                    "支付金额大于¥" + b()(n) + "时不可使用",
                                },
                              ],
                        } = a,
                        {
                          value: c = 0,
                          message: o = 0 === n
                            ? []
                            : [
                                {
                                  type: "text",
                                  value:
                                    "支付金额小于¥" + b()(c) + "时不可使用",
                                },
                              ],
                        } = r;
                      if (t > n)
                        return Object(s.a)({}, e, {
                          available: !1,
                          notice: Object(s.a)({}, e.notice, { disabled: i }),
                        });
                      if (t < c)
                        return Object(s.a)({}, e, {
                          available: !1,
                          notice: Object(s.a)({}, e.notice, { disabled: o }),
                        });
                      if (e.ext && e.ext.instalments) {
                        var { instalmentFreeChargeAmountLimit: h = {} } = e.ext,
                          u = Object(s.a)({}, e, {
                            ext: Object(s.a)({}, e.ext, {
                              instalments: e.ext.instalments.map((e, a) => {
                                var r;
                                return Object(s.a)({}, e, {
                                  chargePayer:
                                    t >= (h.min || 0) &&
                                    t <= (null != (r = h.max) ? r : 1 / 0)
                                      ? e.chargePayer
                                      : l.b.Consumer,
                                  amount: b()(f()(t, e.num)),
                                  charges: b()(g()(f()(t, e.num), e.rate)),
                                  totalCharges: b()(g()(t, e.rate)),
                                  defaultChose: !a,
                                });
                              }),
                            }),
                          });
                        return (
                          u.ext.instalments.some(
                            (e) => e.chargePayer === l.b.Merchant
                          ) && (u.tags = ["商家付息"]),
                          u
                        );
                      }
                      var { balance: _ } = e;
                      return "number" == typeof _ && _ < t
                        ? Object(s.a)({}, e, { available: !1 })
                        : e;
                    })
                    .sort(h.a)
                );
              },
            },
            watch: {
              showMoreTrigger(e) {
                !this.showMore &&
                  this.payService &&
                  this.payService.tracker.mergeParams({
                    has_show_list_trigger: e,
                  });
              },
              visible(e) {
                e &&
                  this.$nextTick(() => {
                    this.cashierObserver && this.cashierObserver.disconnect();
                    var e = this.createIntersectionObserver();
                    e
                      .relativeToViewport(this.ctx.data.viewportMargins)
                      .observe(".cashier-pre__container", (e) => {
                        var { intersectionRatio: a } = e;
                        this.ctx.event.emit(
                          a > 0 ? "cashier:viewport:in" : "cashier:viewport:out"
                        );
                      }),
                      (this.cashierObserver = e);
                  });
              },
              amount(e) {
                var a;
                null != (a = this.payService) &&
                  a.tracker &&
                  this.payService.tracker.mergeParams({ pay_amount: e });
              },
              selected(e, a) {
                e &&
                  this.ctx.event.emit("cashier:change", {
                    current: e.payChannel,
                    previous: a && a.payChannel,
                  });
              },
              excludePayTools(e) {
                e.length && this.cashierTraceId;
              },
              filteredChannels(e) {
                var a,
                  { selected: t, amount: r } = this;
                if (
                  e &&
                  r > 0 &&
                  (!t ||
                    null == (a = e.find((e) => Object(u.a)(e, t))) ||
                    !a.available ||
                    e.every((e) => !Object(u.a)(e, t)))
                ) {
                  var s = e.find((e) => e.available);
                  if (((this.selected = s), s)) {
                    var n = e.find((e) => e.recommend && e.available);
                    this.payService.tracker.mergeParams({
                      pay_channel: s.payChannel,
                      default_pay_channel: s.payChannel,
                      recommend_pay_channel: n && n.payChannel,
                    });
                  }
                }
              },
            },
            created() {
              var e,
                a = this;
              Object(C.b)(this, [
                "themeColors",
                "amount",
                "mobile",
                "excludePayChannels",
              ]),
                Object(C.c)(this, ["biz", "traceId"], {
                  isOnce: !0,
                  callback:
                    ((e = Object(r.a)(function* (e) {
                      var { biz: r = "unknown", traceId: s } = e,
                        l = yield t
                          .e("packages/async-main/chunk")
                          .then(t.bind(null, "J4S/")),
                        h = Object(n.a)(l.default);
                      (a.payService = new h({
                        rantaCtx: a.ctx,
                        biz: r,
                        type: "PRE",
                        useTypeRouter: !1,
                        onPaySuccessSync: function () {
                          for (
                            var e = arguments.length, t = new Array(e), r = 0;
                            r < e;
                            r++
                          )
                            t[r] = arguments[r];
                          var s = a.ctx.process.invoke(
                            "onPaySuccessSync",
                            ...t
                          );
                          return Promise.all(s);
                        },
                        onPaySuccess: function () {
                          a.showOfflinePayForm = !1;
                          for (
                            var e = arguments.length, t = new Array(e), r = 0;
                            r < e;
                            r++
                          )
                            t[r] = arguments[r];
                          a.ctx.event.emit("cashier:pay:success", ...t);
                        },
                        onCashierFail: function () {
                          for (
                            var e = arguments.length, t = new Array(e), r = 0;
                            r < e;
                            r++
                          )
                            t[r] = arguments[r];
                          a.ctx.event.emit("cashier:pay:fail", ...t);
                        },
                      })),
                        Object(C.e)(a, {
                          pay: a.pay,
                          requestOrderPayment:
                            a.payService.requestOrderPayment.bind(a.payService),
                        });
                      var u = Date.now() + "-" + s;
                      a.cashierTraceId = u;
                      var y,
                        p = a.payService.init({
                          "update-event-emitter": a.createSetter("EE"),
                          "show-pay-passer": a.createSetter(
                            "showPayPasser",
                            !0
                          ),
                          "close-pay-passer": a.createSetters(
                            ["showPayPasser", !1],
                            ["payPass", ""]
                          ),
                          "show-pay-login": a.createSetter("showPayLogin", !0),
                          "close-pay-login": a.createSetters(
                            ["showPayLogin", !1],
                            ["loginPass", ""]
                          ),
                          "show-pay-captcha": () => {
                            a.sendCaptcha(), (a.showCaptchaPad = !0);
                          },
                          "hidden-pay-captcha": a.createSetter(
                            "showCaptchaPad",
                            !1
                          ),
                          "show-dialog": a.openDialog,
                          "close-dialog": a.closeDialog,
                          createTracker: i.a,
                          toast(e) {
                            var { mask: a, title: t, icon: r, duration: s } = e;
                            if ("loading" === r) {
                              var n = { message: t, duration: s };
                              return (
                                a && ((n.overlay = !0), (n.forbidClick = !0)),
                                c.a.loading(n)
                              );
                            }
                            return Object(c.a)(e);
                          },
                          clear: c.a.clear,
                        });
                      y = a.ctx.process
                        .invoke("getIsSyncOrder")[0]
                        .catch(() => !1);
                      var d = !1,
                        f = y.then((e) =>
                          e
                            ? [
                                {
                                  payChannel: "WX_APPLET",
                                  payChannelName: "微信支付",
                                  available: !0,
                                },
                              ]
                            : Object(o.b)({
                                path:
                                  "assets/api/union/" +
                                  a.biz +
                                  "/pre-channels-v2",
                                data: {
                                  cashierTraceId: u,
                                  bizExt: JSON.stringify(
                                    a.ctx.data.bizExt || {}
                                  ),
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
                                    PF_OFFLINE_PAY: "v1",
                                    BANK_TRANSFER_LARGE_PAY: "v1",
                                  }),
                                },
                              }).catch((e) => {
                                var t = Object(m.a)();
                                return (
                                  o.c.error(
                                    "支付方式查询失败 " +
                                      (e.message || e.msg) +
                                      " 降级到默认支付方式 biz: " +
                                      a.biz +
                                      " cashierTraceId: " +
                                      u,
                                    {
                                      error: e,
                                      message: e.message,
                                      msg: e.msg,
                                      code: e.code,
                                      status: e.status,
                                      name: e.name,
                                      channels: t,
                                    }
                                  ),
                                  (d = !0),
                                  t
                                );
                              })
                        );
                      Promise.all([p, f, y]).then((e) => {
                        var [, t, s] = e;
                        (a.channels = t || Object(m.a)()),
                          (a.payService.payChannels = t),
                          (a.unwatchPreferredPayChannel = a.ctx.watch(
                            "preferredPayChannel",
                            (e) => {
                              if (e) {
                                a.ctx.data.preferredPayChannel = "";
                                var t = a.channels.find(
                                  (a) => a.payChannel === e && a.available
                                );
                                t &&
                                  (a.channels.indexOf(t) > 2 &&
                                    !a.showMore &&
                                    a.doShowMore(),
                                  (a.selected = t));
                              }
                            }
                          )),
                          a.payService.tracker.mergeParams({
                            cashier_trace_id: u,
                            from_biz: r,
                            pay_channels: a.channels
                              .map((e) => e.payChannel)
                              .join(","),
                            exclude_pay_channels: a.excludePayChannels
                              ? a.excludePayChannels.join(",")
                              : "",
                            ready_time: Date.now(),
                            is_sync_order: s,
                            pay_channels_downgrade: d,
                          }),
                          a.payService.tracker.track(_.b.Ready);
                      });
                    })),
                    function (a) {
                      return e.apply(this, arguments);
                    }),
                });
            },
            destroyed() {
              this.cashierObserver && this.cashierObserver.disconnect(),
                this.unwatchPreferredPayChannel &&
                  this.unwatchPreferredPayChannel();
            },
            methods: {
              doShowMore() {
                (this.showMore = !0),
                  this.payService.tracker.mergeParams({ list_opened: !0 }),
                  this.payService.tracker.track(_.b.ShowList);
              },
              onChannelChange(e) {
                var a = this;
                return Object(r.a)(function* () {
                  yield a.ctx.process.invokePipe("onPayItemClick", e),
                    (a.selected = e),
                    a.$$emit("view-payload", {
                      channel_change_count: (e) => e.channel_change_count + 1,
                    }),
                    a.payService.tracker.mergeParams({
                      pay_channel: e.payChannel,
                    }),
                    a.payService.tracker.track(_.b.ChangeChannel, {
                      last_pay_channel: a.selected.payChannel,
                    });
                })();
              },
              createSetter(e, a) {
                return (t) => {
                  this[e] = null != a ? a : t;
                };
              },
              createSetters() {
                for (
                  var e = arguments.length, a = new Array(e), t = 0;
                  t < e;
                  t++
                )
                  a[t] = arguments[t];
                return () => {
                  for (var e of a) {
                    var [t, r] = e;
                    this[t] = r;
                  }
                };
              },
              checkCashOnDeliveryFlow() {
                return this.dialogOptions.message === p.b;
              },
              openDialog(e) {
                (this.dialogOptions = Object(s.a)({}, p.c, e)),
                  (this.showDialog = !0);
              },
              onDialogConfirm() {
                this.checkCashOnDeliveryFlow()
                  ? this.$$emit("do-pay", p.a)
                  : this.$$emit("exception-confirm");
              },
              onDialogCancel() {
                this.checkCashOnDeliveryFlow()
                  ? (this.showDialog = !1)
                  : this.$$emit("exception-cancel");
              },
              closeDialog() {
                this.showDialog = !1;
              },
              onCaptchPadClose() {
                (this.showCaptchaPad = !1),
                  this.$$emit("cashier-fail", new y.a("cancel", "取消支付"));
              },
              verifyCaptcha(e) {
                this.$$emit("exception-confirm", e);
              },
              sendCaptcha() {
                this.$$emit("send-captcha", { channelCode: "CHANGE_PAY" });
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
              pay(e) {
                var a,
                  t,
                  { payService: r, visibleChannels: s, selected: n } = this;
                if (s)
                  if (s.length) {
                    if (n && r) {
                      try {
                        var { tracker: i } = r,
                          c = Date.now();
                        i.mergeParams({ start_pay_latest_time: c }),
                          i.getParams().start_pay_first_time ||
                            i.mergeParams({ start_pay_first_time: c }),
                          i.mergeParams({
                            ready_time_to_prepay_start_time:
                              c - i.getParams().ready_time,
                          });
                      } catch (e) {}
                      r.updatePayContext(e),
                        r.track_StartPay(this.payService.context.payData),
                        "PF_OFFLINE_PAY" !== n.payChannel
                          ? r.doPay(this.selected.payChannel, {
                              instalmentNum:
                                null == (a = this.instalment) ? void 0 : a.num,
                              instalmentChargePayer:
                                null == (t = this.instalment)
                                  ? void 0
                                  : t.chargePayer,
                            })
                          : this.onOfflinePayFormOpen();
                    }
                  } else
                    this.openDialog({
                      message:
                        "暂无可用支付方式，请联系商家开启更多的支付方式。",
                    });
              },
              onOfflinePayFormOpen() {
                this.payService.tracker.mergeParams({
                  show_offline_pay_form_latest_time: Date.now(),
                }),
                  (this.showOfflinePayForm = !0);
              },
              onOfflinePayFormClose() {
                (this.showOfflinePayForm = !1),
                  this.$$emit("cashier-fail", new y.a("cancel", "取消支付"));
              },
              onOfflinePayFormConfirm(e) {
                (this.showOfflinePayForm = !1),
                  this.payService.doPay("PF_OFFLINE_PAY", e);
              },
            },
            ud: !0,
          },
          S = t("9ZMt");
        a.default = S.default.component(w);
      },
    }
  )
);
