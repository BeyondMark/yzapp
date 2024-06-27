"use strict";
var r = require("~/r");
r(
  "TS5w",
  Object.assign({}, require("~/v.js").modules, {
    TS5w: function (a, t, e) {
      e.r(t);
      var i = e("YeA1"),
        o = getApp(),
        s = {
          data: () => ({
            navigationBarConfigData: void 0,
            alias: "",
            isRetailApp: o.globalData.isRetailApp,
            buyerAddress: "",
            showShopBar: !1,
            tableBooking: !1,
          }),
          created() {
            Object(i.b)(this, [
              "navigationBarConfigData",
              "alias",
              "tableBooking",
            ]),
              Object(i.b)(this, ["shopConfig"], {
                callback: (a, t) => {
                  Object.keys(t).length > 1 && (this.showShopBar = !0);
                },
              });
          },
          mounted() {
            this.buyerAddress = o.getUserInfoSync("poi.title") || "";
          },
          ud: !0,
        },
        r = e("9ZMt");
      t.default = r.default.component(s);
    },
  })
);
