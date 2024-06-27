"use strict";
var r = require("~/r");
r(
  "/8D2",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "/8D2": function (e, r, a) {
      a.r(r);
      var s = a("GFa9");
      Component({
        properties: {
          goods: {
            type: Array,
            value: [],
            observer(e) {
              this.goodsSliceHandle(e);
            },
          },
          payPrice: {
            type: String,
            value: "",
            observer(e) {
              this.payPriceHandle(e);
            },
          },
          orderPath: { type: String, value: "" },
        },
        data: { yuan: "", fen: "", showgoods: [] },
        methods: {
          payPriceHandle(e) {
            var r = e.split(".");
            this.setData({ yuan: r && r[0], fen: r && r[1] });
          },
          goodsSliceHandle(e) {
            var r = e.slice(0, 4);
            this.setData({ showgoods: r });
          },
          viewOrderHandle() {
            s.a.navigate({ url: this.data.orderPath });
          },
        },
      });
    },
  })
);
