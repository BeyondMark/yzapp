"use strict";
var r = require("~/r");
r(
  "jKPh",
  Object.assign({}, require("~/v.js").modules, {
    jKPh: function (e, t, o) {
      o.r(t);
      var i = o("Fcif"),
        s = o("YeA1"),
        a = o("VmHG"),
        n = {
          props: { zIndex: { type: Number, default: 1e3 } },
          data() {
            return Object(i.a)(
              {
                lockState: { isLocked: !1 },
                themeColors: {},
                pay: {},
                goods: {},
                display: {},
                delivery: {},
                selfFetch: {},
              },
              Object(a.d)(this, [
                "showDiscountDetail",
                "prepareIsReady",
                "isShowAddressDeliveryPopup",
                "isShowContactListPopup",
                "showPrivacyBillRulePopup",
                "isShowTimePickerPopup",
                "isShowSelfFetchTimePopup",
                "isShowSelfFetchContactListPopup",
              ])
            );
          },
          computed: {
            styles() {
              return {
                overlay:
                  "background-color: transparent; z-index: " +
                  this.zIndex +
                  ";",
                loading:
                  "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: " +
                  this.zIndex +
                  ";",
              };
            },
            customPopupStyle: () =>
              "border-radius: var(--theme-radius-dialog, 16px) var(--theme-radius-dialog, 16px) 0 0 !important;height: 75vh;",
            isLoading() {
              return (
                this.lockState.isLocked && "loading" === this.lockState.type
              );
            },
            showLocalDeliveryTime() {
              return this.hasGoods && this.display.showLocalDeliveryBucket;
            },
            hasGoods() {
              var e, t;
              return null == (e = this.goods) || null == (t = e.list)
                ? void 0
                : t.length;
            },
          },
          created() {
            Object(s.b)(this, [
              "lockState",
              "pay",
              "themeColors",
              "goods",
              "display",
              "delivery",
              "selfFetch",
            ]),
              Object(a.b)(this, [
                "handleContactCellClick",
                "goToAddressEdit",
                "onLogAddressClick",
                "handleChangeAddressListPopupShow",
                "setSelectedContactId",
                "goToContactEdit",
                "onLogContactClick",
                "handleChangeContactListPopupShow",
                "togglePrivacyBillRulePopup",
                "handleChangeTimePickerPopupShow",
                "handleChangeSelfFetchTimePopupShow",
                "handlePointConfirm",
              ]);
          },
          mounted() {},
          methods: {
            behaviorDidMount() {
              o.e("packages/async-main/chunk")
                .then(o.bind(null, "9RNk"))
                .then((e) => {
                  var { behaviorInit: t } = e;
                  t(this.$refs.behavior);
                });
            },
            onContactListClose() {
              this.handleChangeContactListPopupShow(!1);
            },
            onContactListSelect(e) {
              var { id: t } = e;
              this.ctx.process.invoke("selectContact", t),
                this.setSelectedContactId(t),
                this.onContactListClose();
            },
            onContactListEdit(e) {
              this.goToContactEdit(e),
                this.onLogContactClick(e),
                this.onContactListClose();
            },
            onTimePickerClose() {
              this.handleChangeTimePickerPopupShow(!1),
                this.handleChangeSelfFetchTimePopupShow(!1);
            },
            onSelfFetchTimePickerConfirm(e) {
              this.ctx.process.invoke("setSelfFetch", {
                time: e.text,
                timeWithWeekday: e.textWithWeekday,
                selfFetchStartTime: e.startTime || "",
                selfFetchEndTime: e.endTime || "",
              }),
                this.handleChangeSelfFetchTimePopupShow(!1),
                this.ctx.logger &&
                  this.ctx.logger.log({
                    et: "custom",
                    ei: "trade_buy_set_self_fetch_time",
                    en: "切换自提时间",
                    pt: "trade",
                    params: { desc: JSON.stringify(e) },
                  });
            },
            onTimePickerConfirm(e) {
              void 0 === e && (e = {}),
                this.ctx.process.invoke("mutateState", (t) => {
                  t.delivery = Object(i.a)({}, t.delivery, e);
                }),
                this.onTimePickerClose(),
                this.ctx.logger &&
                  this.ctx.logger.log({
                    et: "custom",
                    ei: "trade_buy_set_local_delivery_time",
                    en: "切换同城配送时间",
                    pt: "trade",
                    params: { desc: JSON.stringify(e) },
                  });
            },
          },
        },
        h = o("9ZMt");
      t.default = h.default.component(n);
    },
  })
);
