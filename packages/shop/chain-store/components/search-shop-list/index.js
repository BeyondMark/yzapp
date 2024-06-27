"use strict";
var r = require("~/r");
r(
  "344X",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      "344X": function (e, t, i) {
        i.r(t);
        var s = i("eijD"),
          o = i("AlIn"),
          a = i("qo4l"),
          r = getApp();
        Component({
          properties: {
            useCancel: Boolean,
            shopLists: {
              type: Array,
              observer(e) {
                !this.initShopList &&
                  e.length > 0 &&
                  ((this.initShopList = e), this.setData({ initShopList: e })),
                  this.setData({ showHistory: !(null != e && e.length) });
              },
            },
            title: String,
            hiddenListTitle: { type: Boolean, value: !1 },
            hiddenShopList: { type: Boolean, value: !1 },
            placeholder: String,
            redirectUrl: { type: String },
            normalTitle: String,
            focusTitle: String,
            blankContent: String,
            noMore: Boolean,
            isOffline: Boolean,
            bizType: {
              type: Number | String,
              observer(e) {
                this.setData({ isLocalRetailCustom: +e == +o.d.LocalRetail });
              },
            },
            addCreate: Boolean,
          },
          data: { isFocus: !1, keyword: "", showHistory: !1 },
          methods: {
            onSelectKeyword(e) {
              this.handleInput(e);
            },
            handleSearch(e) {
              var { detail: { value: t } = {} } = e;
              this.data.isLocalRetailCustom &&
                ((this.retailShopSearchHistoryComponent = this.selectComponent(
                  "#retail-shop-search-histroy"
                )),
                this.retailShopSearchHistoryComponent.saveKeyword(t));
            },
            searchFocus() {
              this.setData({ useCancel: !0, hiddenListTitle: !0, isFocus: !0 });
              var { isFocus: e } = this.data;
              this.triggerEvent("focus", { isFocus: e });
            },
            handleChooseItem(e) {
              var { detail: t } = e,
                { shop: i = {} } = t;
              i.lon &&
                i.lat &&
                wx.setStorageSync("_customer_latitude_cache", {
                  lng: i.lon,
                  lat: i.lat,
                  timestamp: Date.now(),
                }),
                this.triggerEvent("select", { detailValue: i });
            },
            handleInput(e) {
              var { detail: t } = e,
                { value: i } = t;
              i
                ? (this.setData({
                    hiddenListTitle: !0,
                    hiddenShopList: !1,
                    keyword: i,
                  }),
                  this.triggerEvent("change", { detailValue: i }))
                : this.setData({
                    hiddenShopList: !0,
                    shopLists: [],
                    hiddenListTitle: !0,
                    keyword: "",
                  });
            },
            handleCancel() {
              this.setData({
                useCancel: !1,
                hiddenShopList: !1,
                shopLists: this.data.initShopList,
                hiddenListTitle: !1,
                isFocus: !1,
                keyword: "",
              }),
                this.triggerEvent("focus", { isFocus: !1 });
            },
            getTradeConfig() {
              var e = this;
              return Object(s.a)(function* () {
                if (!e._forcePoiSelect) {
                  var t = yield Object(a.a)("local_delivery_position");
                  e._forcePoiSelect = "1" === t.config;
                }
              })();
            },
            toAddAddress() {
              var e = this;
              return Object(s.a)(function* () {
                yield e.getTradeConfig();
                var t = r.db.set({
                  list: [],
                  id: null,
                  forcePoiSelect: e._forcePoiSelect,
                  delta: 1,
                });
                wx.navigateTo({
                  url:
                    "/packages/trade-buy-subpage/order/address-edit/index?dbid=" +
                    t +
                    "&isShowRetailDeliveryAddress=true&isRetailAdd=1&isCityForcePoiSelect=" +
                    Number(e._forcePoiSelect),
                });
              })();
            },
          },
        });
      },
    }
  )
);
