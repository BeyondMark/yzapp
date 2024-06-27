"use strict";
var r = require("~/r");
r(
  "ZSxP",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      "23p4": function (t, e, a) {
        a.d(e, "g", function () {
          return o;
        }),
          a.d(e, "f", function () {
            return r;
          }),
          a.d(e, "b", function () {
            return c;
          }),
          a.d(e, "e", function () {
            return l;
          }),
          a.d(e, "a", function () {
            return s;
          }),
          a.d(e, "d", function () {
            return n;
          }),
          a.d(e, "c", function () {
            return i;
          });
        var s,
          n,
          i,
          o = "fail jsapi has no permission",
          r = { bank_card: "credit_mock", instalment: "instalment_mock" },
          c = {
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
        !(function (t) {
          t[(t.Agreement = 1)] = "Agreement";
        })(s || (s = {})),
          (function (t) {
            (t[(t.ApplySuccess = 0)] = "ApplySuccess"),
              (t[(t.ApplyFail = 1)] = "ApplyFail"),
              (t[(t.Processing = 2)] = "Processing"),
              (t[(t.BuyerPaid = 3)] = "BuyerPaid"),
              (t[(t.Success = 4)] = "Success"),
              (t[(t.Fail = 5)] = "Fail"),
              (t[(t.Closed = 6)] = "Closed"),
              (t[(t.Bounce = 7)] = "Bounce");
          })(n || (n = {})),
          (function (t) {
            (t.Unauthorized = "UNAUTHORIZED"),
              (t.Authorizing = "AUTHORIZING"),
              (t.Authorized = "AUTHORIZED");
          })(i || (i = {}));
      },
      ZSxP: function (t, e, a) {
        a.r(e);
        var s = a("bb6g"),
          n = a("6ZX2"),
          i = a("bErL"),
          o = a("ctd/"),
          r = {
            message: "",
            showCancelButton: !1,
            confirmButtonText: "我知道了",
            cancelButtonText: "取消",
          };
        Object(n.a)({
          props: { tc: { type: String, value: "#f44" } },
          data: {
            cashierType: "B",
            show: !1,
            spp: !1,
            sli: !1,
            showDialog: !1,
            dialogOptions: Object(s.__assign)({}, r),
            showMorePayChannels: !1,
            payChannels: [],
            paypass: "",
            paylogin: "",
            mobile: "",
            showAll: !1,
            pi: !1,
            info: {},
            a: null,
            sg: !1,
            allFetched: !1,
          },
          computed: {
            title: function () {
              return this.data.showAll ? "选择支付方式" : "支付详情";
            },
            exposedPayChannels: function () {
              var t = this.data,
                e = t.payChannels,
                a = t.showMorePayChannels;
              return e.filter(function (t) {
                return Boolean(a || !t.shouldWrap);
              });
            },
            showMoreChannelsToggle: function () {
              var t = this.data,
                e = t.payChannels,
                a = t.showMorePayChannels;
              return (
                e.some(function (t) {
                  return t.shouldWrap;
                }) && !a
              );
            },
            r: function () {
              return this.data.payChannels.find(function (t) {
                return t.recommend && t.channelNotice;
              });
            },
            B: function () {
              return "B" === this.data.cashierType;
            },
          },
          created: function () {
            var t = this;
            this.$emit("init", {
              "update-cashier-type": function (e) {
                return t.set({ cashierType: e });
              },
              "update-sg": function (e) {
                return t.set({ sg: e });
              },
              "component-init": function (e) {
                return (t.EE = e);
              },
              "show-cashier": function (e) {
                return t.showCashier(e);
              },
              "show-pay-passer": function () {
                return t.spper();
              },
              "close-pay-passer": function () {
                return t.closePayPasser();
              },
              "show-pay-login": function (e) {
                return t.showPayLogin(e);
              },
              "close-pay-login": function () {
                return t.closePayLogin();
              },
              "show-dialog": function (e) {
                return t.showTheDialog(e);
              },
              "start-loading": function (e) {
                return t.startLoading(e);
              },
              "end-loading": function () {
                return t.endLoading();
              },
              "pay-success": function (e) {
                return t.paySuccess(e);
              },
              "quick-close": function () {
                return t.quickClose();
              },
              reset: function () {
                return t.reset();
              },
              navigate: function (e) {
                return t.navigate(e);
              },
              createTracker: o.a,
              "fill-channels": function (e) {
                return t.fillChannels(e);
              },
              "show-all": function () {
                return t.doShowAll();
              },
              "update-info": function (e) {
                return t.set({ info: e });
              },
            });
          },
          methods: {
            onClose: function () {
              var t = this.data,
                e = t.spp,
                a = t.sli,
                s = t.showDialog;
              e || a || s || this.hideCashier();
            },
            onChannelClick: function (t) {
              var e = t.detail.channel;
              "CASH_ON_DELIVERY" !== e
                ? this.$$emit("do-pay", e)
                : this.set({
                    showDialog: !0,
                    dialogOptions: {
                      message:
                        "您正在选择货到付款，下单后由商家发货，送货上门并收款。",
                      showCancelButton: !0,
                      confirmButtonText: "确认",
                      cancelButtonText: "取消",
                    },
                  });
            },
            toggleMoreChannels: function () {
              this.set({ showMorePayChannels: !0 });
            },
            onPayPassUpdate: function (t) {
              var e = t.detail;
              this.set({ paypass: e });
            },
            onPayPassCheck: function (t) {
              var e = t.detail;
              this.$$emit("exception-confirm", e);
            },
            onPayPassClose: function () {
              this.endLoading(), this.closePayPasser();
            },
            onPayPassForget: function () {
              this.$$emit("paypass-forget");
            },
            onDialogClose: function () {
              this.set({ showDialog: !1 });
            },
            onDialogConfirm: function () {
              this.checkCashOnDeliveryFlow()
                ? this.$$emit("do-pay", "CASH_ON_DELIVERY")
                : this.$$emit("exception-confirm");
            },
            onDialogCancel: function () {
              this.checkCashOnDeliveryFlow()
                ? this.set({ showDialog: !1, dialogOptions: r })
                : this.$$emit("exception-cancel");
            },
            onPayLoginClose: function () {
              this.endLoading(), this.closePayLogin();
            },
            onPayLoginChange: function (t) {
              var e = t.detail;
              this.set({ paylogin: e });
            },
            onPayLoginForget: function () {
              this.$$emit("paylogin-forget");
            },
            onPayLoginSubmit: function (t) {
              var e = t.detail;
              this.$$emit("exception-confirm", e);
            },
            quickClose: function () {
              this.$emit("cashierclose");
            },
            showCashier: function (t) {
              this.set(
                Object.assign(
                  Array.isArray(t)
                    ? {
                        payChannels: t.slice(0),
                        a: t.find(function (t) {
                          return t.available;
                        }),
                      }
                    : {},
                  { show: !0 }
                )
              );
            },
            spper: function () {
              this.set({ spp: !0 });
            },
            closePayPasser: function () {
              this.set({ spp: !1, paypass: "" });
            },
            showPayLogin: function (t) {
              this.set({ sli: !0, mobile: t });
            },
            closePayLogin: function () {
              this.set({ sli: !1, paylogin: "" });
            },
            showTheDialog: function (t) {
              this.set({
                showDialog: !0,
                dialogOptions: Object.assign(Object(s.__assign)({}, r), t),
              });
            },
            startLoading: function (t) {
              var e = this.data.payChannels.map(function (e) {
                return e.payChannel === t
                  ? Object(s.__assign)(Object(s.__assign)({}, e), {
                      loading: !0,
                    })
                  : e;
              });
              this.set({ payChannels: e, pi: !0 });
            },
            endLoading: function () {
              var t = this.data.payChannels.map(function (t) {
                return Object.assign(Object(s.__assign)({}, t), {
                  loading: !1,
                });
              });
              this.set({ payChannels: t, pi: !1 });
            },
            paySuccess: function (t) {
              this.reset(), this.$emit("paysuccess", t);
            },
            reset: function () {
              this.set({ paypass: "", paylogin: "" }),
                this.endLoading(),
                this.hideCashier();
            },
            navigate: function (t) {
              this.$emit("navigate", t);
            },
            $$emit: function (t) {
              for (var e, a = [], n = 1; n < arguments.length; n++)
                a[n - 1] = arguments[n];
              this.EE &&
                this.EE.emit &&
                (e = this.EE).emit.apply(e, Object(s.__spreadArrays)([t], a));
            },
            hideCashier: function () {
              this.set({ show: !1 }),
                this.$$emit("close"),
                this.$emit("cashierclose");
            },
            checkCashOnDeliveryFlow: function () {
              return (
                "您正在选择货到付款，下单后由商家发货，送货上门并收款。" ===
                this.data.dialogOptions.message
              );
            },
            onBack: function () {
              this.set({ showAll: !1 }),
                this.$$emit("view-payload", {
                  list_stay_time: function (t) {
                    return (
                      t.list_stay_time +
                      (t.open_list_latest_time
                        ? Date.now() - t.open_list_latest_time
                        : 0)
                    );
                  },
                });
            },
            doShowAll: function () {
              var t = this,
                e = function () {
                  t.set({ showAll: !0 }),
                    t.data.allFetched || t.$$emit("fetch-all");
                };
              this.data.show
                ? e()
                : (this.set({ show: !0 }), setTimeout(e, 300)),
                this.$$emit("view-payload", {
                  open_list_latest_time: function () {
                    return Date.now() + 300;
                  },
                  list_opened: function () {
                    return !0;
                  },
                });
            },
            onNavigate: function (t) {
              var e = t.detail;
              this.$$emit("navigate", { url: e });
            },
            onPay: function () {
              var t,
                e =
                  null === (t = this.data.a) || void 0 === t
                    ? void 0
                    : t.payChannel;
              this.$$emit("view-track", i.b.PaywaySelectDecide, {
                pay_channel: e,
              }),
                "CASH_ON_DELIVERY" !== e
                  ? this.$$emit("do-pay", e)
                  : this.showTheDialog({
                      message:
                        "您正在选择货到付款，下单后由商家发货，送货上门并收款。",
                      showCancelButton: !0,
                      confirmButtonText: "确定",
                    });
            },
            onChannelChange: function (t) {
              var e = t.detail.channel;
              if (e.available) {
                if (this.data.showAll)
                  try {
                    var a = Object(s.__assign)({}, e.ext);
                    this.$$emit("view-track", i.b.SelectPayToolFromList, {
                      pay_channel: e.payChannel,
                      pay_channel_ext: JSON.stringify(a),
                    }),
                      this.$$emit("view-payload", {
                        selected_channels_from_list: function (t) {
                          var a = t.selected_channels_from_list,
                            s = (void 0 === a ? "" : a)
                              .split(",")
                              .filter(Boolean);
                          return s.push(e.payChannel), s.join(",");
                        },
                      });
                  } catch (t) {}
                this.set({ a: e, showAll: !1 }),
                  this.$$emit("view-payload", {
                    channel_change_count: function (t) {
                      return t.channel_change_count + 1;
                    },
                    list_stay_time: function (t) {
                      return (
                        t.list_stay_time +
                        (t.open_list_latest_time
                          ? Date.now() - t.open_list_latest_time
                          : 0)
                      );
                    },
                  });
              }
            },
            onRecommendClick: function () {
              var t = this.data,
                e = t.a,
                a = t.r;
              this.$$emit("view-track", i.b.RecommandPaywayClick, {
                recommend_pay_channel: a.payChannel,
              }),
                (null == e ? void 0 : e.payChannel) !== a.payChannel &&
                  this.set({ a: a });
            },
            fillChannels: function (t) {
              this.set({ channels: t, showAll: !0, allFetched: !0 });
            },
          },
        });
      },
      aDHN: function (t, e, a) {
        a.d(e, "a", function () {
          return o;
        });
        var s = a("bb6g"),
          n = a("23p4"),
          i = a("bErL");
        var o = (function () {
          function t(t, e) {
            void 0 === t &&
              (t = function () {
                return Promise.resolve({});
              }),
              void 0 === e && (e = n.e),
              (this.request = t),
              (this.skynet = e),
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
            (t.prototype.getParams = function () {
              return this.params;
            }),
            (t.prototype.getUUID = function () {
              return this.tracker.getLogParams().user.uuid;
            }),
            (t.prototype.track = function (t, e) {
              try {
                this.tracker.log({
                  et: "custom",
                  ei: t,
                  en:
                    ((a = t),
                    (n =
                      Object.keys(i.b).find(function (t) {
                        return i.b[t] === a;
                      }) || ""),
                    i.a[n] || ""),
                  params: Object(s.__assign)(
                    Object(s.__assign)(Object(s.__assign)({}, this.params), e),
                    { component: "cashier_zan_pay" }
                  ),
                });
              } catch (t) {
                this.skynet.error("埋点上报失败", {
                  message: t.message,
                  stack: t.stack,
                  params: this.params,
                });
              }
              var a, n;
            }),
            (t.prototype.mergeParams = function (t) {
              try {
                for (var e = 0, a = Object.entries(t); e < a.length; e++) {
                  var s = a[e],
                    n = s[0],
                    i = s[1];
                  null != i && (this.params[n] = i);
                }
                null != t.kdt_id &&
                  this.tracker.setEvent({ si: String(t.kdt_id) }),
                  null != t.buyer_id &&
                    this.tracker.setUser({ li: String(t.buyer_id) }),
                  null != t.kdt_id &&
                    this.tracker.setUser({ m: String(t.mobile) });
              } catch (t) {
                this.skynet.warn("埋点参数合并失败（" + t.message + "）", {
                  name: t.name,
                  message: t.message,
                  stack: t.stack,
                  error: t,
                });
              }
            }),
            (t.prototype.trackPaySuccess = function () {
              try {
                this.mergeParams({ client_pay_success_time: Date.now() });
                var t = this.params,
                  e = t.start_pay_latest_time,
                  a = t.client_prepay_success_time,
                  s = t.client_pay_success_time,
                  n = e ? s - e : 0,
                  o = a ? s - a : 0;
                this.mergeParams({
                  start_pay_latest_to_client_pay_success_time: n,
                  client_prepay_success_to_client_pay_success_time: o,
                }),
                  this.track(i.b.PaySuccess);
              } catch (t) {
                this.skynet.warn("支付成功事件上报失败（" + t.message + "）", {
                  name: t.name,
                  message: t.message,
                  stack: t.stack,
                  error: t,
                });
              }
            }),
            (t.prototype.readCache = function (t) {
              var e = this;
              return this.request({
                method: "GET",
                origin: "cashier",
                path: "assets/api/union/track/params/" + t,
              })
                .then(function (t) {
                  if (t && "string" == typeof t) {
                    var a = JSON.parse(t);
                    e.mergeParams(a);
                  }
                })
                .catch(function (t) {
                  e.skynet.warn("读取埋点缓存失败（" + t.message + "）", {
                    name: t.name,
                    message: t.message,
                    stack: t.stack,
                    error: t,
                  });
                });
            }),
            t
          );
        })();
      },
      bErL: function (t, e, a) {
        var s, n;
        a.d(e, "b", function () {
          return s;
        }),
          a.d(e, "a", function () {
            return n;
          }),
          (function (t) {
            (t.StartPay = "cashier_start_pay"),
              (t.StartPayClick = "cashier_start_pay_click"),
              (t.PrepayStart = "cashier_client_prepay_start"),
              (t.PrepaySuccess = "cashier_client_prepay_success"),
              (t.PrepayFail = "cashier_client_prepay_fail"),
              (t.PayActionAbort = "pay_action_abort"),
              (t.PaySuccess = "cashier_client_pay_success"),
              (t.PaywaySelectDecide = "payway_select_decide"),
              (t.SelectPayToolFromList = "select_pay_tool_from_list"),
              (t.RecommandPaywayClick = "recomend_payway_click"),
              (t.BeforeCreditAuthorization = "before_credit_authorization"),
              (t.CreditAuthorizationSuccess = "credit_authorization_success"),
              (t.CreditAuthorizationFail = "credit_authorization_fail"),
              (t.CreditAuthorizationFinally = "credit_authorization_finally"),
              (t.CloseCashier = "close_cashier"),
              (t.Ready = "cashier_ready"),
              (t.ShowList = "cashier_show_list"),
              (t.ChangeChannel = "cashier_change_channel"),
              (t.Wxh5DowngradePay = "wxh5_downgrade_pay");
          })(s || (s = {})),
          (function (t) {
            (t.StartPay = "开始支付流程"),
              (t.StartPayClick = "开始支付流程"),
              (t.PrepayStart = "发起预支付"),
              (t.PrepaySuccess = "预支付成功"),
              (t.PrepayFail = "预支付失败"),
              (t.PayActionAbort = "支付动作中断"),
              (t.PaySuccess = "支付成功"),
              (t.PaywaySelectDecide = "确认选择支付方式"),
              (t.SelectPayToolFromList = "在支付方式列表选中支付方式"),
              (t.RecommandPaywayClick = "点击推荐支付方式"),
              (t.BeforeCreditAuthorization = "调用信用授权之前"),
              (t.CreditAuthorizationSuccess = "信用授权成功"),
              (t.CreditAuthorizationFail = "信用授权失败"),
              (t.CreditAuthorizationFinally = "信用授权结束"),
              (t.CloseCashier = "关闭收银台"),
              (t.Ready = "初始化完成"),
              (t.ShowList = "展示支付方式列表页"),
              (t.ChangeChannel = "更换支付方式");
          })(n || (n = {}));
      },
    }
  )
);
