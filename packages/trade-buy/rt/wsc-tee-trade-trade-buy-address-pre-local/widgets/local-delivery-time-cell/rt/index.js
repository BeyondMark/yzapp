"use strict";
var r = require("~/r");
r(
  "aane",
  Object.assign({}, require("~/v.js").modules, {
    aane: function (e, t, s) {
      s.r(t);
      var i = s("Fcif"),
        r = s("YeA1"),
        a = {
          data: () => ({
            delivery: {},
            display: {},
            tradeTag: {},
            goods: {},
            groupon: {},
            showTimePicker: !1,
            postage: {},
            themeColors: {},
            expressType: "",
            isRetailOrderScene: !1,
          }),
          computed: {
            showLocalDeliveryTime() {
              return this.hasGoods && this.display.showLocalDeliveryBucket;
            },
            hasGoods() {
              var e, t;
              return null == (e = this.goods) || null == (t = e.list)
                ? void 0
                : t.length;
            },
            expressWayEditable() {
              return this.hasGoods && this.display.showLocalDeliveryTime;
            },
            deliveryTime() {
              var { textWithWeekday: e, text: t } = this.delivery;
              return e || t || "请选择期望送达时间";
            },
            cssVar() {
              return "--theme-main-text: " + this.themeColors.general;
            },
            useGeneralClass() {
              return this.isRetailOrderScene
                ? "delivery-time__theme--general"
                : "delivery-time__theme";
            },
          },
          created() {
            this.ctx.process.define(
              "setLocalDeliveryTime",
              this.onConfirm.bind(this)
            ),
              Object(r.b)(this, [
                "delivery",
                "display",
                "tradeTag",
                "goods",
                "groupon",
                "postage",
                "themeColors",
                "expressType",
                "extra",
                "isRetailOrderScene",
              ]),
              Object(r.d)(this, {
                "trade-buy-core:validate-effect": (e) => {
                  var { type: t } = e;
                  "validateLocalDelivery:show" === t && this.onClick();
                },
              });
          },
          methods: {
            onClick() {
              this.expressWayEditable && (this.showTimePicker = !0);
            },
            onClose() {
              this.showTimePicker = !1;
            },
            onConfirm(e) {
              void 0 === e && (e = {});
              var { hasNeedStockUpGoods: t } = this.tradeTag;
              this.ctx.process.invoke("mutateState", (t) => {
                t.delivery = Object(i.a)({}, t.delivery, e);
              }),
                this.onClose(),
                this.ctx.logger &&
                  this.ctx.logger.log({
                    et: "custom",
                    ei: "trade_buy_set_local_delivery_time",
                    en: "切换同城配送时间",
                    pt: "trade",
                    params: { desc: JSON.stringify(e) },
                  });
              var { ATTR_REFRESH_TIME_BUCKET: s } = this.extra || {};
              (t || "1" === s) &&
                this.ctx.process.invoke("fetchShow", {
                  expressChanged: !0,
                  changeDeliveryTime: !0,
                });
            },
          },
          ud: !0,
        },
        o = s("9ZMt");
      t.default = o.default.component(a);
    },
  })
);
