"use strict";
var r = require("~/r");
r(
  "AYKf",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    AYKf: function (e, s, d) {
      d.r(s);
      var t = getApp(),
        r = d("h4Sw"),
        a = d("hHpg"),
        i = d("BKUC"),
        h = d("DXKY"),
        n = getApp();
      Component({
        properties: {
          addressId: {
            type: String,
            observer(e) {
              e &&
                this.initUserAddress().then((s) => {
                  var d = s.find((s) => +s.id == +e);
                  d &&
                    ((d.firstLoad = !0),
                    this.handleSelectAddress({ detail: d }));
                });
            },
          },
          themeColor: String,
        },
        data: {
          addresses: [],
          showAddress: !1,
          themeMainColor: "#f44",
          isSelectedAddressId: "",
          currentAddress: {},
        },
        attached() {
          this.initUserAddress(),
            n.on(r.a.eventKey.addressDelete, (e) => {
              e === this.data.isSelectedAddressId &&
                this.setData({ isSelectedAddressId: "" }),
                this.setData({
                  addresses: (this.data.addresses || []).filter(
                    (s) => s.id !== e
                  ),
                });
            }),
            n.on(r.a.eventKey.addressSave, (e) => {
              var { addresses: s = [] } = this.data,
                d = s.findIndex((s) => s.id === e.id);
              (e.name = e.userName),
                (e.address = Object(i.a)(e)),
                -1 === d ? s.push(e) : s.splice(d, 1, e),
                e.isDefault &&
                  s.forEach((s) => {
                    s.isDefault = e.id === s.id ? 1 : 0;
                  }),
                this.setData({ addresses: s }),
                e.id === this.data.currentAddress.id &&
                  this.setData({ currentAddress: e });
            }),
            h.a.on("shop-select:locate", this.clearCurrentAddress, this);
        },
        detached() {
          h.a.off("shop-select:locate", this.clearCurrentAddress, this);
        },
        methods: {
          initUserAddress() {
            return t
              .request({
                path: "/wscshop/api/showcase-retail/getAddressList.json",
                method: "GET",
              })
              .then((e) => (this.setData({ addresses: e }), e))
              .catch((e) => {
                a.a.fail(e.msg || "获取用户地址信息失败");
              });
          },
          closeAddressPop() {
            this.setData({ showAddress: !1 });
          },
          showAddressPop() {
            this.setData({ showAddress: !0 });
          },
          clearCurrentAddress() {
            this.setData({ isSelectedAddressId: "", currentAddress: {} });
          },
          handleSelectAddress(e) {
            var { detail: s } = e;
            this.setData({
              isSelectedAddressId: s.id,
              showAddress: !1,
              currentAddress: s,
            }),
              this.triggerEvent("select-address", s);
          },
          handleNewAddress() {
            var e = n.db.set({
              list: this.data.addresses,
              forcePoiSelect: !0,
              delta: 1,
            });
            wx.navigateTo({
              url: "/packages/order-native/address-edit/index?dbid=" + e,
            });
          },
          handleEditAddress(e) {
            var { detail: s } = e,
              d = n.db.set({
                id: s.id,
                list: this.data.addresses,
                forcePoiSelect: !0,
                delta: 1,
              });
            wx.navigateTo({
              url: "/packages/order-native/address-edit/index?dbid=" + d,
            });
          },
        },
      });
    },
  })
);
