"use strict";
var r = require("~/r");
r(
  "anZ6",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      anZ6: function (e, i, a) {
        a.r(i);
        var s = a("YeA1"),
          t = a("dBcf"),
          r = {
            props: {
              isGoodsDetailPage: { type: Boolean, default: !1 },
              isSkuOrder: { type: Boolean, default: !1 },
              isOpenPrivacyWaybill: { type: Boolean, default: !1 },
              isOrderPage: { type: Boolean, default: !1 },
              isPayPage: { type: Boolean, default: !1 },
              isOrderDetailPage: { type: Boolean, default: !1 },
            },
            data: () => ({
              checked: !0,
              showRulePopup: !1,
              themeColors: {},
              privacyWaybill: {},
              PrivacyWaybillStatusEnum: t.a,
              display: {},
              tradeTag: void 0,
              orderPrivacyBillInit: !1,
            }),
            computed: {
              cellLabel() {
                return this.isSkuOrder ? "" : "隐藏收货人真实手机号，保护隐私";
              },
              isOpened() {
                return this.isGoodsDetailPage &&
                  this.isSkuOrder &&
                  this.tradeTag
                  ? this.isOpenPrivacyWaybill
                  : this.isOrderPage
                  ? this.display.isOpenPrivacyWaybill
                  : this.isPayPage
                  ? null == (e = this.display)
                    ? void 0
                    : e.isUsePrivacyWaybill
                  : this.isOrderDetailPage
                  ? !!t.a[this.privacyWaybill.status]
                  : void 0;
                var e;
              },
              statusText() {
                return this.isPayPage
                  ? "已开启"
                  : this.isOrderDetailPage
                  ? t.a[this.privacyWaybill.status]
                  : void 0;
              },
              classes() {
                return this.isOrderPage
                  ? "order-page"
                  : this.isPayPage
                  ? "pay-page"
                  : this.isGoodsDetailPage
                  ? this.isSkuOrder
                    ? "goods-detail-page__sku-order"
                    : "goods-detail-page"
                  : this.isOrderDetailPage
                  ? "order-detail-page"
                  : "";
              },
            },
            watch: {
              isOpened: {
                handler(e) {
                  e &&
                    !this.orderPrivacyBillInit &&
                    (this.ctx.process.invoke("setOrderPrivacyBill", !0),
                    (this.orderPrivacyBillInit = !0));
                },
                immediate: !0,
              },
            },
            created() {
              Object(s.b)(this, ["privacyWaybill", "display", "tradeTag"]);
            },
            methods: {
              toggle() {
                (this.checked = !this.checked),
                  this.ctx.process.invoke("setOrderPrivacyBill", this.checked);
              },
              onOpenPopup() {
                this.isGoodsDetailPage && this.isSkuOrder
                  ? this.$emit("openPopup")
                  : (this.showRulePopup = !0);
              },
              onClosePopup() {
                this.showRulePopup = !1;
              },
            },
            ud: !0,
          },
          l = a("9ZMt");
        i.default = l.default.component(r);
      },
    }
  )
);
