"use strict";
var r = require("~/r");
r(
  "kgE2",
  Object.assign({}, require("~/v.js").modules, {
    kgE2: function (e, s, t) {
      t.r(s);
      var i = t("Fcif"),
        h = t("YeA1"),
        l = t("VmHG"),
        o = t("AGZf"),
        r = {
          data() {
            return Object(i.a)(
              {
                showPopup: !1,
                delivery: {},
                display: {},
                tradeTag: {},
                goods: {},
                showTimePicker: !1,
                postage: {},
                themeColors: {},
                selfFetch: {},
                showPoiPrompt: !1,
                themeTag: {},
                expressType: "",
              },
              Object(l.d)(this, [
                "address",
                "selectAddress",
                "isAddressFixed",
                "expressWaySelected",
                "selectContact",
                "isOnlySuportSelfFetch",
                "isFirstOpen",
                "preSaleTips",
                "isShowAddress",
              ])
            );
          },
          computed: {
            showLocalDeliveryTime() {
              return this.hasGoods && this.display.showLocalDeliveryBucket;
            },
            hasGoods() {
              var e, s;
              return null == (e = this.goods) || null == (s = e.list)
                ? void 0
                : s.length;
            },
            expressWayEditable() {
              return this.hasGoods && this.display.showLocalDeliveryTime;
            },
            showDeliveryScope() {
              return this.display.showLocalDeliveryScope && this.hasGoods;
            },
            deliveryTime() {
              var { textWithWeekday: e, text: s } = this.delivery;
              return e || s || "请选择期望送达时间";
            },
            isShowAddressCell() {
              return !this.isOnlySuportSelfFetch && this.isShowAddress;
            },
            isShowSelfFetch() {
              return (
                (this.selfFetch.isAllow && !this.isShowAddress) ||
                (this.isFirstOpen && this.isOnlySuportSelfFetch)
              );
            },
            selfFetchShop() {
              var { shop: e } = this.selfFetch;
              return e || {};
            },
            showSelfFetchTime() {
              var e, s;
              return !(
                (null != (e = this.periodBuy) && e.info) ||
                (null != (s = this.periodBuy) && s.planTime)
              );
            },
            canSelectSelfFetchTime() {
              var { shop: e } = this.selfFetch;
              return (e && e.optionalSelfFetchTime) || !1;
            },
            selfFetchSelectedTime() {
              var { time: e, timeWithWeekday: s } = this.selfFetch;
              return e && s ? s || e : "";
            },
            selfFetchTimeStringFormat() {
              var { shop: e } = this.selfFetch;
              return this.selfFetchSelectedTime
                ? this.selfFetchSelectedTime
                : !this.canSelectSelfFetchTime && e
                ? "请按约定时间提货"
                : "请选择提货时间";
            },
            isShowPoiPrompt() {
              return this.showPoiPrompt && this.address.id;
            },
          },
          watch: {
            expressType: {
              immediate: !0,
              handler(e) {
                this.onChangeIsAddressShow &&
                  ("self-fetch" === e
                    ? (this.onChangeIsAddressShow(!1),
                      this.pickDefaultSelfFetch())
                    : this.onChangeIsAddressShow(!0));
              },
            },
          },
          created() {
            Object(l.b)(this, [
              "handleAddressCellClick",
              "fetchAddressList",
              "handleChangeTimePickerPopupShow",
              "onAddressCardEdit",
              "pickDefaultSelfFetch",
              "handleContactCellClick",
              "handleChangeAddressListPopupShow",
              "fetchContactList",
              "handleSelfFetchTimeClick",
              "onChangeIsAddressShow",
            ]),
              Object(h.b)(this, {
                goodsType: () => {
                  this.fetchAddressList(), this.fetchContactList();
                },
              }),
              Object(h.b)(this, [
                "delivery",
                "display",
                "tradeTag",
                "goods",
                "postage",
                "themeColors",
                "showPoiPrompt",
                "themeTag",
                "selfFetch",
                "expressType",
              ]),
              this.fetchAddressList(),
              this.fetchContactList();
          },
          methods: {
            onSelfFetchCellClick() {
              this.handleContactCellClick();
            },
            onAddressCellClick() {
              this.handleChangeAddressListPopupShow(!0);
            },
            onDeliveryTimeClick() {
              this.expressWayEditable &&
                this.handleChangeTimePickerPopupShow(!0);
            },
            onDeliveryTimeClose() {
              this.handleChangeTimePickerPopupShow(!1);
            },
            handleShowDeliveryScopePopup() {
              this.ctx.event.emit("showDeliveryScopePopup");
            },
            onAddressEdit() {
              this.onAddressCardEdit();
            },
            onSelfFetchTimeClick() {
              this.canSelectSelfFetchTime
                ? this.handleSelfFetchTimeClick()
                : this.selfFetchShop.id || Object(o.a)("请先选择提货地址");
            },
          },
        },
        d = t("9ZMt");
      s.default = d.default.component(r);
    },
  })
);
