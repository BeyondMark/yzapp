"use strict";
var r = require("~/r");
r(
  "fLOu",
  Object.assign({}, require("~/v.js").modules, {
    fLOu: function (e, r, t) {
      t.r(r);
      var a = t("YeA1"),
        s = t("ljV+"),
        i = t("xyw3"),
        o = t("9ZMt"),
        l = {
          data: () => ({
            kdtId: 0,
            orderNo: "",
            hasPaid: !1,
            showError: !1,
            showOversale: !1,
            isRefreshing: !1,
            useTransparentBg: !0,
            realPayAmount: 0,
            displayPrompt: {},
            hasSelfFetchOrder: !1,
            showPriorUse: !1,
          }),
          computed: {
            payTip() {
              var e, r;
              return null !=
                (e = null == (r = this.displayPrompt) ? void 0 : r.payTip)
                ? e
                : "";
            },
          },
          created() {
            Object(a.b)(this, ["kdtId", "orderNo", "hasPaid", "isRefreshing"]),
              Object(a.b)(
                this,
                {
                  payResult: (e) => {
                    var r = e.displayPrompt || {};
                    "订单支付成功" === r.payPrompt &&
                      (r.payPrompt = "支付成功"),
                      (this.displayPrompt = r),
                      (this.realPayAmount =
                        "number" == typeof e.realPayAmount
                          ? Object(i.a)(e.realPayAmount).toYuan()
                          : ""),
                      (this.showError = !!e.showError),
                      (this.showOversale = !!e.showOversale),
                      (this.hasSelfFetchOrder = !!e.hasSelfFetchOrder),
                      49 === e.payWay && (this.showPriorUse = !0);
                  },
                  showAwardV2Block: (e) => {
                    this.useTransparentBg = !!e;
                  },
                },
                { isSetData: !1 }
              );
          },
          methods: {
            openPayDetailWv() {
              var e,
                r,
                t =
                  null == (e = this.displayPrompt) || null == (r = e.payTip)
                    ? void 0
                    : r.url;
              t &&
                (this.ctx.logger.log({
                  et: "click",
                  ei: "installment_detail",
                  en: "分期详情",
                  si: this.kdtId,
                }),
                (t = s.args.add("/pages/common/webview-page/index", {
                  src: t,
                  title: "分期详情",
                })),
                o.default.navigate({ url: t }));
            },
            refresh() {
              this.ctx.event.emit("checkPay");
            },
          },
          ud: !0,
        };
      r.default = o.default.component(l);
    },
  })
);
