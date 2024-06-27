"use strict";
var r = require("~/r");
r(
  "qD90",
  Object.assign({}, require("~/v.js").modules, {
    qD90: function (e, t, o) {
      o.r(t);
      var s = o("YeA1"),
        i = {
          name: "goods-list-price",
          props: { showPriceDetail: Boolean },
          data: () => ({
            isPreSale: !1,
            totalPrice: "",
            formattedGoods: [],
            themeColors: {},
            showDetailPopup: !1,
          }),
          created() {
            Object(s.b)(this, [
              "isPreSale",
              "totalPrice",
              "formattedGoods",
              "themeColors",
            ]);
          },
          methods: {
            onPriceDetailClick() {
              this.showPriceDetail && (this.showDetailPopup = !0);
            },
            handleClose() {
              this.showDetailPopup = !1;
            },
          },
          ud: !0,
        },
        r = o("9ZMt");
      t.default = r.default.component(i);
    },
  })
);
