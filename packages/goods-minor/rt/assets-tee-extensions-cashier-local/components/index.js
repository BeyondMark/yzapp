"use strict";
var r = require("~/r");
r(
  "cN0i",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "23p4": function (e, t, s) {
        s.d(t, "g", function () {
          return o;
        }),
          s.d(t, "f", function () {
            return c;
          }),
          s.d(t, "b", function () {
            return l;
          }),
          s.d(t, "e", function () {
            return r;
          }),
          s.d(t, "a", function () {
            return i;
          }),
          s.d(t, "d", function () {
            return a;
          }),
          s.d(t, "c", function () {
            return n;
          });
        var i,
          a,
          n,
          o = "fail jsapi has no permission",
          c = { bank_card: "credit_mock", instalment: "instalment_mock" },
          l = {
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
          r = {
            info: function () {},
            warn: function () {},
            error: function () {},
          };
        !(function (e) {
          e[(e.Agreement = 1)] = "Agreement";
        })(i || (i = {})),
          (function (e) {
            (e[(e.ApplySuccess = 0)] = "ApplySuccess"),
              (e[(e.ApplyFail = 1)] = "ApplyFail"),
              (e[(e.Processing = 2)] = "Processing"),
              (e[(e.BuyerPaid = 3)] = "BuyerPaid"),
              (e[(e.Success = 4)] = "Success"),
              (e[(e.Fail = 5)] = "Fail"),
              (e[(e.Closed = 6)] = "Closed"),
              (e[(e.Bounce = 7)] = "Bounce");
          })(a || (a = {})),
          (function (e) {
            (e.Unauthorized = "UNAUTHORIZED"),
              (e.Authorizing = "AUTHORIZING"),
              (e.Authorized = "AUTHORIZED");
          })(n || (n = {}));
      },
      Hvpf: function (e, t, s) {
        function i(e, t) {
          var s, i;
          return (
            e.payChannel === t.payChannel &&
            (null === (s = e.ext) || void 0 === s ? void 0 : s.agType) ===
              (null === (i = t.ext) || void 0 === i ? void 0 : i.agType)
          );
        }
        s.d(t, "a", function () {
          return i;
        });
      },
      aDHN: function (e, t, s) {
        s.d(t, "a", function () {
          return o;
        });
        var i = s("bb6g"),
          a = s("23p4"),
          n = s("bErL");
        var o = (function () {
          function e(e, t) {
            void 0 === e &&
              (e = function () {
                return Promise.resolve({});
              }),
              void 0 === t && (t = a.e),
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
                    ((s = e),
                    (a =
                      Object.keys(n.b).find(function (e) {
                        return n.b[e] === s;
                      }) || ""),
                    n.a[a] || ""),
                  params: Object(i.__assign)(
                    Object(i.__assign)(Object(i.__assign)({}, this.params), t),
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
              var s, a;
            }),
            (e.prototype.mergeParams = function (e) {
              try {
                for (var t = 0, s = Object.entries(e); t < s.length; t++) {
                  var i = s[t],
                    a = i[0],
                    n = i[1];
                  null != n && (this.params[a] = n);
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
                  s = e.client_prepay_success_time,
                  i = e.client_pay_success_time,
                  a = t ? i - t : 0,
                  o = s ? i - s : 0;
                this.mergeParams({
                  start_pay_latest_to_client_pay_success_time: a,
                  client_prepay_success_to_client_pay_success_time: o,
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
                    var s = JSON.parse(e);
                    t.mergeParams(s);
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
      bErL: function (e, t, s) {
        var i, a;
        s.d(t, "b", function () {
          return i;
        }),
          s.d(t, "a", function () {
            return a;
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
          })(i || (i = {})),
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
          })(a || (a = {}));
      },
      cN0i: function (e, t, s) {
        s.r(t);
        var i = s("Fcif"),
          a = s("9ZMt"),
          n = s("AGZf"),
          o = s("z9IR"),
          c = s("bErL"),
          l = s("Hvpf"),
          r = s("IQp6"),
          h = {
            message: "",
            showCancelButton: !1,
            confirmButtonText: "我知道了",
            cancelButtonText: "取消",
          };
        var _ = {
          props: {
            themeColor: String,
            kdtId: Number,
            mobile: String,
            UserAuthorize: Object,
          },
          data: () => ({
            show: !1,
            showAll: !1,
            showDialog: !1,
            showLinedUp: !1,
            showCaptchaPad: !1,
            showGuarantee: !1,
            showLoginInput: !1,
            showPayPass: !1,
            allFetched: !1,
            showCopyLink: !1,
            showPcPay: !1,
            showPcPayLink: "",
            paying: !1,
            cashierType: "A",
            paylogin: "",
            paypass: "",
            copiedLink: "",
            linedUpStage: 1,
            dialogOptions: Object(i.a)({}, h),
            contentHeight:
              "height: calc(100% - " + a.default.style.useTpx(44) + ")",
            active: null,
            instalment: null,
            info: {},
            channels: [],
            initialShow: !1,
            showOfflinePayForm: !1,
            origin: "cashier",
            isCfca: !1,
          }),
          computed: {
            title() {
              return this.showAll ? "选择支付方式" : "支付详情";
            },
            needShowMoreButton() {
              return (
                !this.showAll && (this.channels || []).some((e) => e.shouldWrap)
              );
            },
            exposedPayChannels() {
              var { channels: e = [], showAll: t } = this;
              return e.filter((e) => t || !e.shouldWrap) || [];
            },
            recommend() {
              return (this.channels || []).find(
                (e) => e.recommend && e.channelNotice
              );
            },
            default() {
              return (this.channels || []).find((e) => e.default);
            },
          },
          watch: {
            show(e) {
              e ||
                this.showCopyLink ||
                this.showOfflinePayForm ||
                this.EE.emit("close"),
                !e ||
                  this.initialShow ||
                  this.showOfflinePayForm ||
                  (this.initialShow = !0);
            },
            active(e) {
              var t;
              void 0 === e && (e = {}),
                null != (t = e.ext) &&
                  t.instalments &&
                  !this.instalment &&
                  (this.instalment = e.ext.instalments.find(
                    (e) => e.defaultChose
                  ));
            },
          },
          created() {
            this.$emit("connect", {
              "update-cashier-type": (e) => {
                this.cashierType = e;
              },
              "update-show-guarantee": (e) => {
                this.showGuarantee = e;
              },
              "update-event-emitter": (e) => {
                this.EE = e;
              },
              "copy-link": this.copyLink,
              "show-cashier": this.showCashier,
              "show-pay-passer": this.showPayPasser,
              "close-pay-passer": this.closePayPasser,
              "show-pay-login": this.showPayLogin,
              "close-pay-login": this.closePayLogin,
              "show-pay-captcha": () => {
                this.sendCaptcha(), (this.showCaptchaPad = !0);
              },
              "hidden-pay-captcha": this.onCaptchPadClose,
              "show-dialog": this.openDialog,
              "close-dialog": this.onDialogClose,
              "toggle-lined-up": this.toggleLinedUp,
              "start-loading": () => {
                this.setPaying(!0);
              },
              "end-loading": () => {
                this.setPaying(!1);
              },
              "pay-success": this.reset,
              "cashier-fail": (e) => {
                "cancel" !== (null == e ? void 0 : e.type) && (this.show = !1);
              },
              internal__close: this.onCashierClose,
              "quick-close": this.onCashierClose,
              reset: this.reset,
              "fill-channels": this.fillChannels,
              "show-all": this.doShowAll,
              "update-info": (e) => {
                this.info = e;
              },
              createTracker: r.a,
              toast: this.toast,
              clear: this.clear,
            });
          },
          methods: {
            toast(e) {
              var { mask: t, title: s, icon: i, duration: a } = e;
              if ("loading" === i) {
                var o = { message: s, duration: a };
                return (
                  t && ((o.overlay = !0), (o.forbidClick = !0)), n.a.loading(o)
                );
              }
              return Object(n.a)(e);
            },
            clear: n.a.clear,
            openDialog(e) {
              (this.dialogOptions = Object(i.a)({}, h, e)),
                (this.showDialog = !0);
            },
            toggleLinedUp(e) {
              var { show: t = this.showLinedUp, stage: s = this.linedUpStage } =
                e;
              (t === this.showLinedUp && s === this.linedUpStage) ||
                ((this.showLinedUp = t), (this.linedUpStage = s));
            },
            setPaying(e) {
              this.paying = e;
            },
            reset() {
              (this.show = !1),
                (this.showAll = !1),
                (this.showLinedUp = !1),
                (this.paying = !1);
            },
            onOfflinePayFormOpen() {
              (this.show = !1), (this.showOfflinePayForm = !0);
            },
            onOfflinePayFormClose() {
              (this.showOfflinePayForm = !1), (this.show = !0);
            },
            onOfflinePayFormConfirm(e) {
              (this.showOfflinePayForm = !1),
                this.$$emit("do-pay", "PF_OFFLINE_PAY", e);
            },
            showCashier(e) {
              void 0 === e && (e = []), (this.show = !0), (this.channels = e);
              var t = e.find((e) => e.available);
              t
                ? (this.active = t)
                : e.length &&
                  o.a.alert({ message: "无可用支付方式" }).then(() => {
                    this.show = !1;
                  });
            },
            onCashierClose() {
              this.show = !1;
            },
            onCashierOpened() {
              this.$$emit("opened");
            },
            onBack() {
              (this.showAll = !1),
                this.$$emit("view-payload", {
                  list_stay_time: (e) =>
                    e.list_stay_time +
                    (e.open_list_latest_time
                      ? Date.now() - e.open_list_latest_time
                      : 0),
                });
            },
            onPay() {
              var e = this.active.payChannel;
              if (
                (this.$$emit("view-track", c.b.PaywaySelectDecide, {
                  pay_channel: e,
                }),
                "CASH_ON_DELIVERY" !== e)
              ) {
                if ("PF_OFFLINE_PAY" !== e) {
                  var t = this.instalment || {};
                  this.$$emit("do-pay", e, {
                    instalmentNum: t.num,
                    instalmentChargePayer: t.chargePayer,
                  });
                } else this.onOfflinePayFormOpen();
              } else
                this.openDialog({
                  message:
                    "您正在选择货到付款，下单后由商家发货，送货上门并收款。",
                  showCancelButton: !0,
                  confirmButtonText: "确定",
                });
            },
            onDialogConfirm() {
              if (this.checkCashOnDeliveryFlow())
                this.$$emit("do-pay", "CASH_ON_DELIVERY");
              else {
                if ("请确认是否已完成支付" === this.dialogOptions.message) {
                  setTimeout(() => {
                    this.$$emit("pay-success", {
                      payChannel: (this.active || {}).payChannel,
                    });
                  }, 50),
                    this.$$emit("cancel-polling-pay-status");
                  var e = Date.now();
                  return (
                    this.$$emit("view-payload", {
                      click_copy_link_to_click_pay_success_time: (t) =>
                        t.click_copy_link_time ? e - t.click_copy_link_time : 0,
                      show_copy_link_latest_to_click_pay_success_time: (t) =>
                        t.show_copy_link_latest_time
                          ? e - t.show_copy_link_latest_time
                          : 0,
                      click_pay_success_time: () => e,
                    }),
                    void this.$$emit("view-track", c.b.PaySuccessFromCopyLink)
                  );
                }
                this.$$emit("exception-confirm");
              }
            },
            onDialogCancel() {
              if (this.checkCashOnDeliveryFlow()) this.showDialog = !1;
              else {
                if ("请确认是否已完成支付" === this.dialogOptions.message) {
                  this.closeCopyLink(),
                    this.doShowAll(),
                    this.$$emit("cancel-polling-pay-status");
                  var e = Date.now();
                  return (
                    this.$$emit("view-payload", {
                      click_copy_link_to_click_change_channel_time: (t) =>
                        t.click_copy_link_time ? e - t.click_copy_link_time : 0,
                      show_copy_link_latest_to_click_change_channel_time: (t) =>
                        t.show_copy_link_latest_time
                          ? e - t.show_copy_link_latest_time
                          : 0,
                      click_change_channel_time: () => e,
                    }),
                    void this.$$emit(
                      "view-track",
                      c.b.ChangeChannelFromCopyLink
                    )
                  );
                }
                this.$$emit("exception-cancel");
              }
            },
            onDialogClose() {
              this.showDialog = !1;
            },
            onCaptchPadClose() {
              (this.showCaptchaPad = !1), this.setPaying(!1);
            },
            verifyCaptcha(e) {
              this.$$emit("exception-confirm", e);
            },
            sendCaptcha() {
              this.$$emit("send-captcha", { channelCode: "CHANGE_PAY" });
            },
            showPayLogin() {
              this.showLoginInput = !0;
            },
            onPayLoginClose() {
              this.setPaying(!1), this.closePayLogin();
            },
            onPayLoginChange(e) {
              this.paylogin = e;
            },
            onPayLoginForget() {
              this.$$emit("paylogin-forget");
            },
            closePayLogin() {
              (this.showLoginInput = !1), (this.paylogin = "");
            },
            onPayPassUpdate(e) {
              this.paypass = e;
            },
            onPayPassCheck(e) {
              this.$$emit("exception-confirm", e);
            },
            showPayPasser() {
              this.showPayPass = !0;
            },
            onPayPassClose() {
              this.setPaying(!1), this.closePayPasser();
            },
            closePayPasser() {
              (this.showPayPass = !1), (this.paypass = "");
            },
            onPayPassForget() {
              this.$$emit("paypass-forget");
            },
            fillChannels(e) {
              (this.channels = e), (this.showAll = !0), (this.allFetched = !0);
            },
            onChannelChange(e, t) {
              if (e.available)
                try {
                  this.$emit("change-channel", {
                    channel: e,
                    callback: () => {
                      if (this.showAll)
                        try {
                          var s = Object(i.a)({}, e.ext);
                          delete s.instalments,
                            this.$$emit(
                              "view-track",
                              c.b.SelectPayToolFromList,
                              {
                                pay_channel: e.payChannel,
                                pay_channel_ext: JSON.stringify(s),
                              }
                            ),
                            this.$$emit("view-payload", {
                              selected_channels_from_list: (t) => {
                                var { selected_channels_from_list: s = "" } = t;
                                return (
                                  (s = s.split(",").filter(Boolean)).push(
                                    e.payChannel
                                  ),
                                  s.join(",")
                                );
                              },
                            });
                        } catch (e) {}
                      var a;
                      (this.active = e),
                        (this.instalment =
                          (a = t) && "num" in a && "amount" in a ? t : null),
                        (this.showAll = !1),
                        this.$$emit("view-payload", {
                          channel_change_count: (e) =>
                            e.channel_change_count + 1,
                          list_stay_time: (e) =>
                            e.list_stay_time +
                            (e.open_list_latest_time
                              ? Date.now() - e.open_list_latest_time
                              : 0),
                        });
                    },
                  });
                } catch (e) {}
            },
            onPayLoginSubmit(e) {
              this.$$emit("exception-confirm", e);
            },
            checkCashOnDeliveryFlow() {
              return Boolean(
                "您正在选择货到付款，下单后由商家发货，送货上门并收款。" ===
                  this.dialogOptions.message
              );
            },
            navigate(e) {
              this.$$emit("navigate", { url: e });
            },
            onACashierShowMore() {
              this.showAll = !0;
            },
            doShowAll(e) {
              var t = () => {
                (this.showAll = !0),
                  this.allFetched
                    ? e &&
                      setTimeout(() => {
                        this.scrollToChannel(e);
                      }, 300)
                    : (this.$$emit("fetch-all"),
                      e &&
                        this.EE.once("fill-channels", () => {
                          setTimeout(() => {
                            this.scrollToChannel(e);
                          }, 10);
                        }));
              };
              this.show ? t() : ((this.show = !0), setTimeout(t, 300)),
                this.$$emit("view-payload", {
                  open_list_latest_time: () => Date.now() + 300,
                  list_opened: () => !0,
                });
            },
            closeCopyLink() {
              (this.showCopyLink = !1), (this.show = !0);
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
            onCopy() {
              var e = Date.now();
              this.$$emit("view-payload", {
                click_copy_link_time: () => e,
                show_copy_link_latest_to_click_copy_link_time: (t) =>
                  t.show_copy_link_latest_time
                    ? e - t.show_copy_link_latest_time
                    : 0,
              }),
                this.$$emit("view-track", c.b.CopyLink);
              Object(n.a)("复制成功", { duration: 2e3 }),
                setTimeout(() => {
                  var e;
                  this.openDialog({
                    message: "请确认是否已完成支付",
                    cancelButtonText: "更换支付方式",
                    showCancelButton: !0,
                    confirmButtonText: "已完成支付",
                  }),
                    this.$$emit("polling-pay-status"),
                    null == (e = this.EE) ||
                      e.once("polling-pay-status-finish", () => {
                        this.onDialogClose(),
                          this.doShowAll(),
                          (this.showCopyLink = !1);
                      });
                }, 2e3);
            },
            onClickSelectedBar() {
              this.doShowAll(this.active);
            },
            scrollToChannel(e) {
              var t;
              null == (t = this.$refs.all) || t.scrollToChannel(e);
            },
            onRecommendClick() {
              var { active: e, recommend: t } = this,
                { payChannel: s, ext: i = {} } = t;
              this.$$emit("view-track", c.b.RecommandPaywayClick, {
                recommend_pay_channel: s,
              }),
                i.instalments
                  ? this.doShowAll(t)
                  : (e.payChannel !== s && (this.active = t),
                    Object(l.a)(t, {
                      payChannel: "ALIPAY_AGREEMENT",
                      ext: { agType: "ALIPAY_SIGN" },
                    }) &&
                      "A" === this.info.recommendType &&
                      this.$$emit("do-pay", s));
            },
            onACashierChannelClick(e) {
              try {
                this.$emit("change-channel", {
                  channel: e,
                  callback: () => {
                    (this.active = e), this.onPay();
                  },
                });
              } catch (e) {}
            },
            $$emit() {
              for (
                var e, t = arguments.length, s = new Array(t), i = 0;
                i < t;
                i++
              )
                s[i] = arguments[i];
              null == (e = this.EE) || e.emit(...s);
            },
          },
          ud: !0,
        };
        t.default = a.default.component(_);
      },
      exEQ: function (e, t, s) {
        s.d(t, "c", function () {
          return n;
        }),
          s.d(t, "a", function () {
            return o.a;
          }),
          s.d(t, "b", function () {
            return o.b;
          });
        var i,
          a = s("8mzt");
        i = a.a;
        var n = {
            info: function (e, t) {
              try {
                i.log({
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
                i.log({
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
                i.log({
                  appName: "assets-cashier",
                  logIndex: "js_stack_trace",
                  level: "error",
                  name: e,
                  message: JSON.stringify(t),
                });
              } catch (e) {}
            },
          },
          o = s("c4zd");
      },
    }
  )
);
