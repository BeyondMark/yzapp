"use strict";
var r = require("~/r");
r(
  "xiVs",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    xiVs: function (e, r, a) {
      a.r(r);
      var s = a("GFa9");
      Component({
        properties: {
          goods: {
            type: Array,
            value: [],
            observer(e) {
              this.singleItemHandle(e);
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
        data: { imgUrl: "", goodsName: "", service: "", yuan: "", fen: "" },
        attached() {},
        methods: {
          singleItemHandle(e) {
            this.setData({
              imgUrl: e && e[0].imgUrl,
              goodsName: e && e[0].goodsName,
              service: e && e[0].service,
            });
          },
          payPriceHandle(e) {
            var r = e.split(".");
            this.setData({ yuan: r && r[0], fen: r && r[1] });
          },
          viewOrderHandle() {
            s.a.navigate({ url: this.data.orderPath });
          },
        },
      });
    },
  })
);
