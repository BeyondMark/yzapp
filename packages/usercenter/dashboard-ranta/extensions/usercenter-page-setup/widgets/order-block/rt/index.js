"use strict";
var r = require("~/r");
r(
  "wLd/",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "wLd/": function (e, t, a) {
        a.r(t);
        var r = a("7/pW"),
          s = a("RY8z"),
          i = a("umDW"),
          o = a("4tKJ"),
          l = a("R9CS"),
          u = a("eCH0");
        Object(r.a)({
          properties: {
            toPay: { type: Number, value: 0 },
            paid: { type: Number, value: 0 },
            sent: { type: Number, value: 0 },
            evaluate: { type: Number, value: 0 },
            feedback: { type: Number, value: 0 },
            links: {
              type: Object,
              value: {
                toPay: "",
                toConfirm: "",
                toSend: "",
                sent: "",
                completed: "",
                all: "",
                refund: "",
              },
            },
            promptOrderPay: {
              type: Object,
              value: {},
              observer: "isShowPromptOrderPay",
            },
            promptOrderEvaluation: {
              type: Object,
              value: {},
              observer: "isShowPromptOrderEvaluation",
            },
            userAgreePrivacy: { type: Boolean, default: !1 },
            isNotValid: Boolean,
            isPureWscSingleStore: {
              type: Boolean,
              value: !1,
              observer: "getEvaluateTitle",
            },
          },
          data: {
            showOrderPayPrompt: !1,
            showOrderEvaluatePrompt: !1,
            tapData: {},
            showSubscribeMask: !1,
            evaluateTitle: o.a,
          },
          methods: {
            isShowPromptOrderPay(e) {
              var { showOrderPayPrompt: t } = e;
              0 !== Object.keys(e).length && Object(l.c)("view", e),
                this.setYZData({ showOrderPayPrompt: t });
            },
            isShowPromptOrderEvaluation(e) {
              var { orderNo: t } = e || {};
              this.setYZData({ showOrderEvaluatePrompt: !!t });
            },
            getEvaluateTitle(e) {
              this.setYZData({ evaluateTitle: e ? "待" + o.a : o.a });
            },
            toggleSubscribeMask(e) {
              this.setYZData({ showSubscribeMask: e });
            },
            handleAuthorize() {
              var e,
                t,
                a,
                r =
                  null == (e = this.data.tapData) ||
                  null == (t = e.currentTarget) ||
                  null == (a = t.dataset)
                    ? void 0
                    : a.nav;
              if (r)
                if ("toEvaluate" !== r) this.goto(this.data.tapData);
                else {
                  var { paid: s, sent: i } = this.data;
                  if (s || i) {
                    return void this.subscribe(() => {
                      this.openEvaluateCenter(this.data.tapData);
                    });
                  }
                  this.openEvaluateCenter(this.data.tapData);
                }
            },
            handleTap(e) {
              this.setYZData({ tapData: e });
            },
            clearTapData() {
              this.setYZData({ tapData: {} });
            },
            subscribe(e) {
              Object(u.e)({
                scene: "afterPaySuccess",
                windowType: "usercenter_order",
                authorizationType: "order",
                subscribePage: "个人中心",
                subscribeType: "我的订单",
                supportRetail: !1,
                options: {
                  next: e,
                  onShowTips: () => this.toggleSubscribeMask(!0),
                  onCloseTips: () => this.toggleSubscribeMask(!1),
                  onComplete: e,
                },
              });
            },
            goto(e) {
              var t = e.currentTarget.dataset.nav,
                { paid: a, sent: r } = this.data;
              if (this.properties.links[t]) {
                if (a || r) {
                  return void this.subscribe(() => {
                    s.a.navigate({ url: this.properties.links[t] });
                  });
                }
                s.a.navigate({ url: this.properties.links[t] });
              } else {
                if (a || r) {
                  return void this.subscribe(() => {
                    this.triggerEvent("pluginItemClicked", t);
                  });
                }
                this.triggerEvent("pluginItemClicked", t);
              }
            },
            handleBindGetUserInfo(e) {
              this.triggerEvent("bindGetUserInfo", e.detail);
            },
            openEvaluateCenter() {
              Object(i.a)("/wsctrade/order/evaluate/center", {
                title: "评价中心",
              });
            },
          },
        });
      },
    }
  )
);
