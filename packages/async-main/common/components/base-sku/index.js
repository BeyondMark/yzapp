"use strict";
var r = require("~/r");
r(
  "4oaE",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "4oaE": function (e, t, s) {
        s.r(t);
        var a = s("Fcif"),
          i = s("u8kV"),
          r = s("xyw3"),
          o = s("x5Yp"),
          u = s("hHpg"),
          l = s("qako"),
          c = s("Hhx2"),
          d = s("oU/t"),
          n = s("kv38");
        Object(i.b)({
          options: { multipleSlots: !0 },
          behaviors: [n.a],
          properties: {
            themeClass: String,
            sku: { type: Object, value: {}, observer: "resetSelectedSku" },
            goods: Object,
            extraData: { type: Object, value: {} },
            stepperTitle: { type: String, value: "购买数量" },
            cartCount: Number,
            quota: { type: Number, value: 0 },
            quotaText: { type: String, value: "" },
            quotaUsed: { type: Number, value: 0 },
            quotaCycle: { type: Number, value: 0 },
            startSaleNum: { type: Number, value: 1 },
            hideStock: { type: Boolean, value: !1 },
            buyText: { type: String, value: "立即购买" },
            cartText: { type: String, value: "加入购物车" },
            resetStepperOnHide: { type: Boolean, value: !1 },
            showBuyBtn: { type: Boolean, value: !0 },
            showAddCartBtn: { type: Boolean, value: !0 },
            bodyOffsetTop: { type: Number, value: 200 },
            show: { type: Boolean, value: !1, observer: "onShowChange" },
            usePopup: { type: Boolean, value: !0 },
            isVirtualTicket: { type: Boolean, value: !1 },
            virtualTicket: { type: Object, value: {} },
            isPriceCalendar: { type: Boolean, value: !1 },
            priceCalendarData: { type: Object, value: {} },
            initialSku: { type: Object, value: {} },
            messageConfig: { type: Object, value: {} },
            properties: {
              type: Array,
              value: [],
              observer: "resetSelectedSku",
            },
            customStepperConfig: { type: Object, value: {} },
            calendarStock: { type: null },
            disableSoldoutSku: { type: Boolean, value: !0 },
          },
          data: {
            selectedSku: {},
            selectedProp: {},
            selectedNum: 1,
            selectedSkuComb: null,
            selectedSkuDate: "",
            showDatePicker: !1,
            datePickerData: {},
            zIndex: 300,
            simpleSkuList: [],
            birthdayInfo: {},
          },
          methods: {
            getSimpleSkuList(e) {
              if (!e) return [];
              var t = [1, 2, 3, 4, 5];
              return e.map((e) => {
                var s = { stockNum: e.stockNum };
                return (
                  t.forEach((t) => {
                    var a = "s" + t;
                    void 0 !== e[a] && (s[a] = e[a]);
                  }),
                  s
                );
              });
            },
            resetSelectedSku(e, t) {
              void 0 === e && (e = {}), void 0 === t && (t = {});
              var s = {},
                i = {};
              if (e && (!t || JSON.stringify(e) !== JSON.stringify(t))) {
                var r = e.tree || [];
                r.forEach((e) => {
                  s[e.kS] = "";
                });
                var u = this.getSimpleSkuList(e.list);
                r.forEach((t) => {
                  for (var a = 0, i = 0; i < t.v.length; i++) {
                    var r = t.kS,
                      o = t.v[i].id;
                    if (
                      (Object(c.i)(e.list, s, { key: r, valueId: o }) &&
                        ((s[r] = o), (a += 1)),
                      a > 1)
                    ) {
                      s[r] = +this.data.initialSku[t.kS] || "";
                      break;
                    }
                  }
                }),
                  this.data.initialSku.selectedProp &&
                    (i = Object(a.a)({}, i, this.data.initialSku.selectedProp)),
                  Object(o.a)(i) &&
                    this.data.properties.forEach((e) => {
                      var t;
                      if (
                        (null == e || null == (t = e.v) ? void 0 : t.length) > 0
                      ) {
                        var { v: s, kId: a } = e,
                          r = !s.some((e) => 0 != +e.price)
                            ? s.findIndex((e) => 0 !== e.textStatus)
                            : -1;
                        r > -1 && (i[a] = [s[r].id]);
                      }
                    });
                var l = this.getSelectedSkuComb(s, i),
                  d = !!e.birthdayInfo;
                this.setYZData(
                  {
                    simpleSkuList: u,
                    selectedSku: s,
                    selectedProp: i,
                    selectedSkuComb: l,
                    birthdayInfo: { BIRTHDAY_RELATION_NET_ORDER_MARK: d },
                  },
                  { immediate: !0 }
                ),
                  wx.nextTick(() => {
                    this.triggerEvent("sku-selected", {
                      type: "item-select",
                      selectedSku: s,
                      selectedSkuComb: l,
                    }),
                      this.triggerEvent("sku-prop-selected", {
                        type: "item-prop-select",
                        selectedProp: i,
                        selectedSkuComb: l,
                      });
                  });
              }
            },
            addSkuMsgRef(e) {
              var { detail: t } = e,
                { refKey: s, ref: a } = t;
              (this.skuMsgRef = this.skuMsgRef || {}),
                "skuMessages" === s && (this.skuMsgRef = a);
            },
            getSkuMessages() {
              return (
                (this.skuMsgRef.getMessages && this.skuMsgRef.getMessages()) ||
                {}
              );
            },
            getCartSkuMessages() {
              return (
                (this.skuMsgRef.getCartMessages &&
                  this.skuMsgRef.getCartMessages()) ||
                []
              );
            },
            validateSkuMessages() {
              return (
                (this.skuMsgRef.validateMessages &&
                  this.skuMsgRef.validateMessages()) ||
                ""
              );
            },
            onDateItemReset() {
              this.setYZData({ selectedSkuDate: "" });
            },
            onDateItemClick(e) {
              var { dataset: t = {} } = e.detail,
                s = t.infodate,
                { selectedSku: i } = this.data,
                r = this.getSelectedSkuComb(this.data.selectedSku);
              (r = Object(a.a)({}, r, {
                id: t.dateskuid,
                price: t.activityprice,
                oldPrice:
                  t.originprice === t.activityprice ? "" : t.originprice,
                stockNum: t.stocknum,
              })),
                this.setYZData({ selectedSkuComb: r, selectedSkuDate: s }),
                this.triggerEvent("sku-selected", {
                  type: "date-select",
                  selectedSku: i,
                  selectedSkuComb: r,
                  selectedSkuDate: s,
                });
            },
            onNumChange(e) {
              var { detail: t } = e;
              this.setYZData({ selectedNum: t }, { immediate: !0 }),
                this.triggerEvent("stepper-change", t);
            },
            stepperOverWord(e) {
              var {
                  action: t,
                  limitType: s,
                  quota: a,
                  quotaUsed: i,
                  quotaCycle: r,
                  startSaleNum: o,
                } = e,
                { isVirtualTicket: u } = this.data;
              return Object(d.a)({
                action: t,
                limitType: s,
                quota: a,
                quotaUsed: i,
                quotaPeriod: r,
                isVirtualTicket: u,
                startSaleNum: o,
              });
            },
            onOverLimit(e) {
              var { detail: t } = e;
              if (this.data.customStepperConfig) {
                var {
                  customStepperConfig: { handleOverLimit: s },
                } = this.data;
                "function" == typeof s && s(t);
              } else
                wx.showToast({ title: this.stepperOverWord(t), icon: "none" });
            },
            onInitState(e) {
              var { detail: t } = e;
              t.valid
                ? (this.errorMsg = "")
                : (this.errorMsg = this.stepperOverWord(
                    Object(a.a)({}, t, { action: "plus" })
                  ));
            },
            getSelectedSkuComb(e, t) {
              void 0 === t && (t = {});
              var s = null;
              if (!this.data.sku) return s;
              var { sku: a, properties: i } = this.data;
              return (
                this.isSkuCombSelected(e, t) &&
                  (s = a.noneSku
                    ? {
                        id: a.collectionId,
                        price: Object(r.a)(+a.price).toCent(),
                        oldPrice: a.oldPrice,
                        remainPrice: a.remainPrice || 0,
                        pointsPrice:
                          a.collectionPointsPrice || a.pointsPrice || 0,
                        pointsPriceStr: a.pointsPrice,
                        stockNum: a.stockNum,
                      }
                    : Object(c.e)(a.list, e)) &&
                  ((s.properties = Object(c.c)(i, t)),
                  (s.propertyPrice = s.properties.reduce(
                    (e, t) => (
                      (t.v || []).forEach((t) => {
                        t.price && (e += t.price);
                      }),
                      e
                    ),
                    0
                  ))),
                s
              );
            },
            isSkuCombSelected(e, t) {
              void 0 === t && (t = {});
              var { sku: s, properties: a } = this.data;
              return (
                !!s &&
                !(!s.noneSku && !Object(c.h)(s.tree, e)) &&
                Object(c.g)(a, t)
              );
            },
            onSelect(e) {
              var { detail: t } = e,
                s =
                  this.data.selectedSku[t.skuKeyStr] === t.id
                    ? Object(a.a)({}, this.data.selectedSku, {
                        [t.skuKeyStr]: "",
                      })
                    : Object(a.a)({}, this.data.selectedSku, {
                        [t.skuKeyStr]: t.id,
                      }),
                i = this.getSelectedSkuComb(s, this.data.selectedProp);
              this.setYZData({ selectedSku: s, selectedSkuComb: i }),
                this.triggerEvent("sku-selected", {
                  type: "item-select",
                  selectedSku: s,
                  selectedSkuComb: i,
                });
            },
            onPropSelect(e) {
              var { detail: t } = e,
                s = this.data.selectedProp[t.skuKeyStr] || [],
                i = s.indexOf(t.id);
              i > -1
                ? s.splice(i, 1)
                : t.multiple
                ? s.push(t.id)
                : s.splice(0, 1, t.id);
              var r = Object(a.a)({}, this.data.selectedProp, {
                  [t.skuKeyStr]: s,
                }),
                o = this.getSelectedSkuComb(this.data.selectedSku, r);
              this.setYZData({ selectedProp: r, selectedSkuComb: o }),
                this.triggerEvent("sku-prop-selected", {
                  type: "item-prop-select",
                  selectedProp: r,
                  selectedSkuComb: o,
                });
            },
            triggerAsync() {
              for (
                var e = arguments.length, t = new Array(e), s = 0;
                s < e;
                s++
              )
                t[s] = arguments[s];
              return l.a.triggerAsync.apply(getApp(), t);
            },
            triggerCustomeValidate() {
              return this.triggerAsync("app:sku:pay:checked:goods", {
                data: this.data,
              });
            },
            validateNormalMes() {
              var {
                selectedNum: e,
                isVirtualTicket: t,
                virtualTicket: s,
                selectedSkuDate: a,
                sku: i,
                selectedSku: r,
                properties: o,
                selectedProp: u,
              } = this.data;
              return 0 === e
                ? "商品已经无法购买啦"
                : this.errorMsg
                ? this.errorMsg
                : t && 3 === s.validityType && !a
                ? "请选择日期"
                : this.isSkuCombSelected(r, u)
                ? this.validateSkuMessages()
                : Object(c.f)({
                    skuTree: null == i ? void 0 : i.tree,
                    selectedSku: r,
                    properties: o,
                    selectedProp: u,
                  });
            },
            validateSku() {
              var e = null,
                t = new Promise((t) => {
                  e = t;
                }),
                s = this.validateNormalMes();
              return (
                s && e(s),
                this.triggerCustomeValidate().then((t) => {
                  var s = t[0];
                  s ? e(s) : e();
                }),
                t
              );
            },
            getSkuData() {
              var {
                  goods: { id: e },
                  sku: t,
                  selectedSku: s,
                  selectedNum: a,
                  selectedSkuComb: i,
                  selectedSkuDate: r,
                  birthdayInfo: o,
                } = this.data,
                u = Object(c.d)(t.tree, s).map((e) => e.name);
              return {
                couponId: Object(c.b)(t),
                goodsId: e,
                skuId: i.id,
                num: a,
                price: i.price + i.propertyPrice,
                pointsPrice: i.pointsPrice,
                remainPrice: i.remainPrice,
                selectedNum: a,
                selectedSkuComb: i,
                selectedSkuValues: u,
                selectedSkuDate: r,
                messages: this.getSkuMessages(),
                cartMessages: this.getCartSkuMessages(),
                birthdayInfo: o,
              };
            },
            onAddCart() {
              this.onBuyOrAddCart("add-cart");
            },
            onBuy() {
              this.onBuyOrAddCart("buy");
            },
            onChooseRelation(e) {
              this.data.birthdayInfo = e.detail;
            },
            onBuyOrAddCart(e) {
              this.validateSku().then((t) => {
                if (!t) return this.triggerEvent(e, this.getSkuData());
                Object(u.a)({ message: t, position: "bottom" });
              });
            },
            showDateTimePicker(e) {
              this.setYZData({ showDatePicker: !0, datePickerData: e.detail });
            },
            closeDateTimePicker() {
              this.setYZData({ showDatePicker: !1 });
            },
            confirmDateTimePicker(e) {
              this.skuMsgRef.confirmDate && this.skuMsgRef.confirmDate(e);
            },
            onClose() {
              var {
                show: e,
                selectedSku: t,
                selectedNum: s,
                selectedSkuComb: a,
              } = this.data;
              e &&
                this.triggerEvent("sku-close", {
                  selectedNum: s,
                  selectedSku: t,
                  selectedSkuComb: a,
                });
            },
            onShowChange(e) {
              !e &&
                this.data.resetStepperOnHide &&
                this.onNumChange({ detail: this.data.startSaleNum || 1 });
            },
          },
        });
      },
      kv38: function (e, t, s) {
        var a = s("8B9M"),
          i = Object(a.a)();
        t.a = Behavior({
          data: {
            popupBottom: 0,
            noSafeBottom: 0,
            authorizePopupCustomStyle: "",
            safeBottom: "iPhone-X" === i.deviceType,
          },
          attached() {
            i.isSwitchTab("", !0).then((e) => {
              e &&
                this.setData({
                  popupBottom: 49,
                  authorizePopupCustomStyle: "",
                  noSafeBottom: this.data.safeBottom ? 83 : 49,
                });
            });
          },
        });
      },
    }
  )
);
