"use strict";
var r = require("~/r");
r(
  "J/CW",
  Object.assign({}, require("~/v.js").modules, {
    "J/CW": function (e, t, r) {
      r.r(t);
      var s = r("Fcif"),
        a = r("9ZMt"),
        i = r("YeA1"),
        o = r("xyw3"),
        n = r("ONqW"),
        h = {
          data: () => ({
            display: {},
            guarantee: {},
            valueCard: {},
            useBeforePayData: {},
            orderFinalPrice: "",
            kdtId: 0,
            order: {},
            prepareData: {},
            themeColors: {},
            orderCreated: !1,
            isSyncOrder: !1,
            isPreCashierPay: !1,
          }),
          computed: {
            showRoot() {
              return !this.hasInstallment && this.showPriorUse;
            },
            showUnCreate() {
              return this.showPriorUse && !this.orderCreated && this.noprepaid;
            },
            showCreated() {
              return (
                this.showPriorUse &&
                !this.disabled &&
                "1" === this.selection &&
                this.orderCreated
              );
            },
            showPriorUse() {
              var e;
              return (
                (null == (e = this.useBeforePayData) ? void 0 : e.show) &&
                !this.isSyncOrder
              );
            },
            showProtocol() {
              return (
                !this.disabled && "1" === this.selection && !!this.protocol
              );
            },
            hasInstallment: () => !1,
            amount() {
              return Object(o.a)(this.orderFinalPrice || 0).toCent();
            },
            protocol() {
              var e;
              return null == (e = this.useBeforePayData) ? void 0 : e.protocol;
            },
            disabled() {
              var e;
              return !(null != (e = this.useBeforePayData) && e.enable);
            },
            range() {
              var e,
                [t, r] = (null == (e = this.useBeforePayData)
                  ? void 0
                  : e.range) || [null, null];
              return { min: t, max: r };
            },
            reason() {
              var e,
                [t, r] =
                  (null == (e = this.useBeforePayData) ? void 0 : e.reason) ||
                  [];
              return this.isGraterMax(this.amount)
                ? r || "先用后付服务不可用"
                : this.isLessMin(this.amount)
                ? t || "先用后付服务不可用"
                : "当前订单暂不支持";
            },
            selection() {
              var e;
              return null == (e = this.useBeforePayData) ? void 0 : e.confirm;
            },
            noprepaid() {
              return !(
                this.valueCard.checked &&
                this.valueCard.checked.length &&
                this.valueCard.checked.length > 0
              );
            },
          },
          watch: {
            orderFinalPrice() {
              this.showRoot && this.onTriggerEmitForStates();
            },
            showUnCreate(e) {
              e &&
                this.log({
                  ei: "wsc_g_trade_prior_use_view",
                  en: "下单页面先用后付曝光",
                });
            },
            "display.isSecuredTransActions": function () {
              this.showRoot && this.onTriggerEmitForStates();
            },
            "valueCard.checked": function (e, t) {
              this.showRoot && e !== t && this.onTriggerEmitForStates();
            },
          },
          created() {
            Object(i.b)(this, [
              "display",
              "guarantee",
              "valueCard",
              "useBeforePayData",
              "orderFinalPrice",
              "kdtId",
              "order",
              "prepareData",
              "themeColors",
              "orderCreated",
              "isPreCashierPay",
            ]),
              this.showRoot &&
                (this.onTriggerEmitForStates(), this.checkIsSyncOrder());
          },
          methods: {
            isLessMin(e) {
              var { min: t } = this.range;
              return null !== t && t > e;
            },
            isGraterMax(e) {
              var { max: t } = this.range;
              return null !== t && t < e;
            },
            checkIsSyncOrder() {
              var [e] = this.ctx.process.invoke("getIsSyncOrder");
              e.then((e) => {
                (this.isSyncOrder = e), this.onTriggerEmitForStates();
              });
            },
            gotoProtocol() {
              this.setRadio(),
                "web" === a.default.platform
                  ? document.open(this.protocol, "_blank", "noopener=true")
                  : "weapp" === a.default.platform &&
                    a.default
                      .navigate({
                        url:
                          "/pages/common/webview-page/index?src=" +
                          encodeURIComponent(this.protocol),
                        type: "navigateTo",
                      })
                      .catch((e) => {
                        wx.showToast({ icon: "none", title: "打开协议失败" });
                      });
            },
            setRadio() {
              if (!this.disabled) {
                var e = "0" === this.selection ? "1" : "0";
                this.setStoreConfirm(e),
                  this.log({
                    ei: "wsc_g_trade_prior_use_click",
                    en: "下单页面先用后付点击",
                    params: { checked: e },
                  });
              }
            },
            setStoreDisplay(e) {
              this.ctx.process.invoke("mutateState", (t) => {
                t.useBeforePayData.show = e;
              });
            },
            setStoreEnable(e) {
              this.ctx.process.invoke("mutateState", (t) => {
                t.useBeforePayData.enable = e;
              });
            },
            setStoreConfirm(e) {
              this.ctx.process.invoke("mutateState", (t) => {
                t.useBeforePayData = Object(s.a)({}, t.useBeforePayData, {
                  confirm: e,
                });
              });
            },
            getIfCanUse() {
              var e,
                { amount: t } = this,
                r =
                  null == (e = this.display) ? void 0 : e.isSecuredTransActions;
              return (
                !this.isGraterMax(t) &&
                !this.isLessMin(t) &&
                r &&
                this.noprepaid &&
                !this.isSyncOrder
              );
            },
            onTriggerEmitForStates() {
              var e = this.getIfCanUse();
              if ((this.setStoreEnable(e), !e)) {
                var { amount: t } = this,
                  r = String(this.selection);
                this.showUnCreate &&
                  this.isGraterMax(t) &&
                  "1" === r &&
                  this.log(
                    "wsc_g_trade_prior_use_excess",
                    "先用后付用户超额度",
                    { range: this.range, amount: t }
                  ),
                  this.setStoreConfirm("0"),
                  this.isSyncOrder && this.setStoreDisplay(!1);
              }
            },
            log(e) {
              var { ei: t, en: r, params: a = {} } = e;
              Object(n.a)().log({
                et: "custom",
                ei: t,
                en: r,
                params: Object(s.a)(
                  { kdtId: this.kdtId, page_scene: "ranta" },
                  a
                ),
              });
            },
          },
          ud: !0,
        };
      t.default = a.default.component(h);
    },
  })
);
