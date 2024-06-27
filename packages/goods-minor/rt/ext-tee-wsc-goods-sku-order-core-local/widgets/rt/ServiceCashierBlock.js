"use strict";
var r = require("~/r");
r(
  "0iBO",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "0iBO": function (e, a, r) {
        r.r(a);
        var s = r("Fcif"),
          t = r("YeA1"),
          o = r("w/BL"),
          n = r("VmHG"),
          i = {
            props: { skuHeight: String },
            data() {
              return Object(s.a)(
                {
                  pay: {},
                  excludePayTools: [],
                  themeColors: {},
                  payChannels: [],
                  lockState: { isLocked: !1 },
                  goodsBaseInfo: {},
                  valueCard: {},
                },
                Object(n.d)(this, [
                  "prepareIsReady",
                  "orderFinalPrice",
                  "orderWarning",
                ])
              );
            },
            computed: {
              goodsAlias() {
                return this.goodsBaseInfo.alias;
              },
              amount() {
                return this.showWarning
                  ? "1"
                  : this.prepareIsReady
                  ? 100 * +this.orderFinalPrice
                  : "1";
              },
              showWarning() {
                return this.orderWarning && this.prepareIsReady;
              },
              skuExcludePayTools() {
                var e,
                  a,
                  { payChannels: r = [] } = this,
                  s = [];
                r.every((e) => "PRIOR_USE" !== e.payChannel) &&
                  s.push("PRIOR_USE"),
                  r.every((e) => "INSTALMENT" !== e.payChannel) &&
                    s.push("INSTALMENT");
                var t = Array.from(new Set(s.concat(this.excludePayTools)));
                return (
                  null != (e = this.valueCard) &&
                    null != (a = e.checked) &&
                    a.length &&
                    ["PEERPAY", "CASH_ON_DELIVERY"].forEach((e) => {
                      t.includes(e) || t.push(e);
                    }),
                  t
                );
              },
            },
            watch: {
              showWarning() {
                this.onReHeight();
              },
            },
            created() {
              Object(t.b)(this, [
                "pay",
                "excludePayTools",
                "themeColors",
                "payChannels",
                "lockState",
                "goodsBaseInfo",
                "valueCard",
              ]);
            },
            methods: {
              onReHeight() {
                this.$emit("re-height");
              },
              onPayChange(e) {
                (this.ctx.data.skuPayChannel = e),
                  this.onReHeight(),
                  Object(o.d)();
              },
              onPaySuccess(e) {
                Object(o.k)(),
                  this.beforePayResultHandler(),
                  this.ctx.process.invoke("onPaySuccess", e);
              },
              onPayError(e) {
                this.beforePayResultHandler(),
                  this.ctx.process.invoke("goToPayFail", e);
              },
              onPayNavigate() {
                this.beforePayResultHandler();
              },
              beforePayResultHandler() {
                this.ctx.event.emit("skuOrder:hide");
              },
            },
          },
          h = r("9ZMt");
        a.default = h.default.component(i);
      },
    }
  )
);
